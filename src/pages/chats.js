import React, { useContext } from 'react'
import ChatsItem from '../components/chatsItem'
import { conversationCTX } from '../context/conversations';

export default function Chats() {
  const ctx = useContext(conversationCTX);
  return (
    <div>
      {ctx.conversations.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
      {console.log(ctx)}
    </div>
  )
}
