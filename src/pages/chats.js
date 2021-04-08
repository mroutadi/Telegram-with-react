import React, { useContext } from 'react'
import ChatsItem from '../components/chatsItem'
import { Context } from '../context';

export default function Chats() {
  const ctx = useContext(Context);
  return (
    <div>
      {ctx.conversations.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
    </div>
  )
}
