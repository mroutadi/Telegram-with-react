import React, { useState, useContext, useEffect, useRef } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom';
import ChatBubble from '../components/chatBubble'
import UserHeader from '../components/userHeader'
import { Context } from '../context';
import MessageInput from '../components/messageInput'
import ConversationDate from '../components/conversationDate'
import styles from '../assets/styles/conversation.module.scss'
import { v4 as uuidv4 } from 'uuid';

export default function Conversation(props) {

  const url_parameters = useParams();
  const { conversations, setConversations, contacts, handleReceiveMessage } = useContext(Context);

  const getConversation = () => {
    let Conversation = conversations.filter(conversation => conversation.sent_by.username === url_parameters.username)
    if (Conversation.length === 0) {
      let Conversations = conversations;
      let user = contacts.filter(contact => contact.username === url_parameters.username);
      if (user.length === 0) {
        return false;
      } else {
        Conversations.push({
          draft_message: "",
          messages: [],
          sent_by: user[0],
          _id: uuidv4()
        })
        return Conversations[Conversations.length - 1]
      }
    } else {
      return Conversation[0]
    }
  }
  const conversation = getConversation()
  const [draftMessage, setDraftMessage] = useState(conversation.draft_message)
  const draftMessageRef = useRef(draftMessage);
  const chatbarRef = useRef();

  useEffect(() => {
    return () => {
      saveDraftMessage()
    }
  })

  useEffect(() => {
    chatbarRef.current.scrollTop = chatbarRef.current.scrollHeight;
  }, [conversations, conversation])

  const handleSendMessage = () => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].messages.push({
          content: draftMessageRef.current,
          read: false,
          sent_by_me: true,
          sent_at: `${moment()}`,
          _id: uuidv4()
        })
        Conversations[index].draft_message = '';
        draftMessageRef.current = "";
        setDraftMessage(new String())
        handleReceiveMessage(url_parameters.username)
      }
    }
    setConversations(Conversations)
  }

  const saveDraftMessage = () => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].draft_message = draftMessageRef.current;
      }
    }
    setConversations(Conversations)
  }

  const handleDeleteConversation = (id) => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === url_parameters.username) {
        Conversations[index].messages = Conversations[index].messages.filter(msg => msg._id !== id)
      }
    }
    setConversations(Conversations)
  }

  const handleDraftMessageChange = (value) => {
    draftMessageRef.current = value;
    // setDraftMessage(value)
  }

  const handleDeleteChat = (id) => {
    let Conversations = [...conversations];
    Conversations = Conversations.filter(conversation => {
      return conversation.sent_by._id !== id;
    })
    setConversations(Conversations)
  }
  return (
    conversation ?
      <div className={styles.conversation}>
        <UserHeader contact={conversation.sent_by} handleDeleteChat={handleDeleteChat} />
        <div className={styles.conversationsPart} ref={chatbarRef}>
          {conversation.messages.map((msg, index) =>
            <React.Fragment>
              {index === 0 ? <ConversationDate time={msg.sent_at} /> :
                !moment(conversation.messages[index].sent_at).isSame(moment(conversation.messages[index - 1].sent_at), 'days') ?
                  <ConversationDate time={msg.sent_at} /> : ''
              }
              <ChatBubble key={msg._id} {...msg} handleDeleteConversation={handleDeleteConversation} />
            </React.Fragment>
          )}
        </div>
        <div className={styles.messageInput}>
          <MessageInput
            value={draftMessage}
            onChange={handleDraftMessageChange}
            btnOnClick={handleSendMessage} />
        </div>
      </div>
      :
      <div>
        <div>No access To message this user</div>
      </div>
  )
}
