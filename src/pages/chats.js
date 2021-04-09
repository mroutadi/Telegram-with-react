import React, { useState, useContext } from 'react'
import moment from 'moment'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';

export default function Chats() {
  const ctx = useContext(Context);
  const [conversations, setConversations] = useState(ctx && ctx.conversations.sort((a, b) =>
    moment(a.messages[a.messages.length - 1].sent_at).isBefore(moment(b.messages[b.messages.length - 1].sent_at))
  ))
  return (
    <div>
      {conversations.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
    </div>
  )
}
