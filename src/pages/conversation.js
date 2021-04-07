import React from 'react'
import { useParams } from 'react-router-dom';

import ConversationData from '../mockData/conversations.json'

export default function Conversation() {
  const url_parameters = useParams();
  const conversation =
    ConversationData.filter(conversation => conversation.sent_by.username === url_parameters.username)[0]

  return (
    <div>
      <div>UserInfo</div>
      <div>Conversations</div>
      <div>
        <textarea
          name="messageInput"
          placeholder="Write something ..."
          value={conversation.draft_message}>

        </textarea>
        <button>
          Send
        </button>
      </div>
    </div>
  )
}
