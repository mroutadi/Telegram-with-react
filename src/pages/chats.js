import React, { useState, useContext } from 'react'
import moment from 'moment'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';
import { Link } from 'react-router-dom'

export default function Chats() {
  const ctx = useContext(Context);
  const [conversations, setConversations] = useState(ctx && ctx.conversations.sort((a, b) =>
    moment(a.messages[a.messages.length - 1].sent_at).isBefore(moment(b.messages[b.messages.length - 1].sent_at))
  ))
  return (
    <div>
      <Link to="/contacts">Contacts</Link>
      {conversations.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
    </div>
  )
}
