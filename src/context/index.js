import React, { useState } from "react";
import moment from 'moment'
import ConversationData from '../mockData/conversations.json'
import ContactsData from '../mockData/contacts.json'
import { ConversationsInitialSort, ContactsInitialSort } from '../utils/initialSort'
import ReplyMaker from '../utils/replyMaker'
import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [conversations, setConversations] = useState(ConversationsInitialSort(ConversationData))
  const [contacts, setContacts] = useState(ContactsInitialSort(ContactsData))

  const handleReceiveMessage = (username) => {
    let Conversations = [...conversations];
    for (let index = 0; index < Conversations.length; index++) {
      if (Conversations[index].sent_by.username === username) {
        setTimeout(() => {
          Conversations[index].messages.forEach(conversation => {
            conversation.read = true;
          });
          Conversations[index].messages.push({
            content: ReplyMaker(),
            read: false,
            sent_by_me: false,
            sent_at: `${moment()}`,
            _id: uuidv4()
          })
          setConversations(Conversations)
        }, 2000);
      }
    }
  }

  return <Context.Provider value={{ conversations, setConversations, contacts, setContacts, handleReceiveMessage }} >
    {props.children}
  </Context.Provider>
}

export { ContextProvider };
