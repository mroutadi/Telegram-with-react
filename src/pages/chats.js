import React, { useState, useContext } from 'react'
import moment from 'moment'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';
import { Link } from 'react-router-dom'
import styles from '../assets/styles/app.module.scss'
import CreateIcon from '@material-ui/icons/Create';

export default function Chats(props) {
  const ctx = useContext(Context);
  const getConversation = () => {
    if (ctx.conversations.lenght > 1) {
      return ctx.conversations.sort((a, b) =>
        moment(a.messages[a.messages.length - 1].sent_at).isBefore(moment(b.messages[b.messages.length - 1].sent_at)))
    } else return ctx.conversations
  }
  const [conversations, setConversations] = useState(ctx && getConversation())
  return (
    <React.Fragment>
      <div className={styles.chats} >
        {conversations.map(conversation => (
          <ChatsItem
            key={conversation._id}
            conversation={conversation} />
        ))}
      </div>
      <Link to="/contacts" className={styles.newMessage}><CreateIcon /></Link>
    </React.Fragment>
  )
}
