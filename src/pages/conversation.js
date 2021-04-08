import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ChatBubble from '../components/chatBubble'
import { Context } from '../context';
import ReplyMaker from '../utils/replyMaker'

export default function Conversation() {
  const url_parameters = useParams();
  const { conversations, setConversations } = useContext(Context);
  const [conversation, setConversation] = useState(conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)[0])
  const [draftMessage, setDraftMessage] = useState(conversation.draft_message)

  useEffect(() => {
    setConversation(conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)[0])
  }, [conversations])

  useEffect(() => {
    setDraftMessage(conversation.draftMessage)
  }, [conversation.draft_message])

  const handleSendMessage = () => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].messages.push({
          content: conversation.draft_message,
          read: false,
          sent_by_me: true,
          sent_at: (new Date()).toString()
        })
        Conversations[index].draft_message = '';
        setDraftMessage('')
        setTimeout(() => {
          handleReceiveMessage()
        }, 2000);
      }
    }
    setConversations(Conversations)
  }

  const handleReceiveMessage = () => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].messages.push({
          content: ReplyMaker(),
          read: false,
          sent_by_me: false,
          sent_at: (new Date()).toString()
        })
        Conversations[index].draft_message = '';
        setDraftMessage('')
      }
    }
    setConversations(Conversations)
  }

  const handleDraftMessageChange = (e) => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].draft_message = e.target.value;
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
          value={draftMessage}
          onChange={handleDraftMessageChange}>

        </textarea>
        <button onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div >
  )
}
