import React, { useState } from "react";
import ConversationData from '../mockData/conversations.json'
import ContactsData from '../mockData/contacts.json'

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [conversations, setConversations] = useState(ConversationData)
  const [contacts, setContacts] = useState(ContactsData)
  return <Context.Provider value={{ conversations, setConversations, contacts, setContacts }} >
    {props.children}
  </Context.Provider>
}

export { ContextProvider };
