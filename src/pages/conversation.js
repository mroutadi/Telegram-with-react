import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ChatBubble from '../components/chatBubble'
import { conversationCTX } from '../context/conversations';

export default function Conversation() {
  const url_parameters = useParams();
  const { conversations, setConversations } = useContext(conversationCTX);
  const [conversation, setConversation] = useState(conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)[0])

  useEffect(() => {
    setConversation(conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)[0])
  }, [conversations])

  const handleSendMessage = () => {
    let Conversations = conversations;
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].messages.push({
          content: conversation.draft_message,
          read: false,
          sent_by_me: true,
          sent_at: new Date()
        })
      }
    }
    setConversations(Conversations)
  }

  return (
    <div>
      <div>UserInfo</div>
      <div>{conversation.messages.map(msg => <ChatBubble key={msg._id} {...msg} />)}</div>
      <div>
        <textarea
          name="messageInput"
          placeholder="Write something ..."
          value={conversation ? conversation.draft_message : ''}
          onChange={e => console.log(e.target.value)}>

        </textarea>
        <button onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div >
  )
}
