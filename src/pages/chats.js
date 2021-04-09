import React, { useState, useContext } from 'react'
import moment from 'moment'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';
import { Link } from 'react-router-dom'
import styles from '../assets/styles/app.module.scss'

export default function Chats(props) {
  const ctx = useContext(Context);
  const [conversations, setConversations] = useState(ctx && ctx.conversations.sort((a, b) =>
    moment(a.messages[a.messages.length - 1].sent_at).isBefore(moment(b.messages[b.messages.length - 1].sent_at))
  ))
  return (
    <div className={styles.chats} >
      {conversations.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
      <Link to="/contacts" className={styles.newMessage}>Contacts</Link>
    </div>
  )
}
