import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ChatBubble from '../components/chatBubble'
import { conversationCTX } from '../context/conversations';

export default function Conversation() {
  const url_parameters = useParams();
  const { conversations } = useContext(conversationCTX);
  const conversation =
    conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)[0]

  return (
    <div>
      <div>UserInfo</div>
      {console.log(conversation.messages)}
      <div>{conversation.messages.map(msg => <ChatBubble key={msg._id} {...msg} />)}</div>
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
