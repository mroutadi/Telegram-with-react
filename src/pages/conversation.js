import React from 'react'
import { useParams } from 'react-router-dom';

export default function Conversation() {
  const url_parameters = useParams();
  const conversation =
    [].filter(conversation => conversation.sent_by.username === url_parameters.username)[0]

  return (
    <div>
      <div>UserInfo</div>
      <div>Conversations</div>
      <div>
        <textarea
          name="messageInput"
          placeholder="Write something ..."
          value={conversation && conversation.draft_message}
          onChange={e => console.log(e.target.value)}>

        </textarea>
        <button>
          Send
        </button>
      </div>
    </div >
  )
}
