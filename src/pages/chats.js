import React from 'react'
import ChatsItem from '../components/chatsItem'

import ConversationData from '../mockData/conversations.json'

export default function Chats() {
  return (
    <div>
      {ConversationData.map(conversation => (
        <ChatsItem
          key={conversation._id}
          conversation={conversation} />
      ))}
    </div>
  )
}
