import React, { useState } from "react";
import ConversationData from '../mockData/conversations.json'
import ContactsData from '../mockData/contacts.json'
import { ConversationsInitialSort, ContactsInitialSort } from '../utils/initialSort'

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [conversations, setConversations] = useState(ConversationsInitialSort(ConversationData))
  const [contacts, setContacts] = useState(ContactsInitialSort(ContactsData))
  return <Context.Provider value={{ conversations, setConversations, contacts, setContacts }} >
    {props.children}
  </Context.Provider>
}

export { ContextProvider };
