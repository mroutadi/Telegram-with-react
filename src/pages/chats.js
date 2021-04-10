import React, { useContext } from 'react'
import moment from 'moment'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';
import { Link } from 'react-router-dom'
import styles from '../assets/styles/app.module.scss'
import CreateIcon from '@material-ui/icons/Create';

export default function Chats(props) {
  const ctx = useContext(Context);
  const getConversation = () => {
    if (ctx.conversations.length > 1) {
      return ctx.conversations.filter(conversation => {
        return conversation.messages.length > 0
      }).sort((a, b) =>
        moment(a.messages[a.messages.length - 1].sent_at).isBefore(moment(b.messages[b.messages.length - 1].sent_at)))
    } else return ctx.conversations
  }
  return (
    <React.Fragment>
      <div className={styles.chats} >
        {getConversation().map(conversation => (
          <ChatsItem
            key={conversation._id}
            conversation={conversation} />
        ))}
      </div>
      <Link to="/contacts" className={styles.newMessage}><CreateIcon /></Link>
    </React.Fragment>
  )
}