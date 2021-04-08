import React, { useState } from "react";
import ConversationData from '../mockData/conversations.json'

export const conversationCTX = React.createContext();

const ConversationContextProvider = (props) => {
  const [conversations, setConversations] = useState(ConversationData)
  return <conversationCTX.Provider value={{ conversations, setConversations }} >
    {props.children}
  </conversationCTX.Provider>
}

export { ConversationContextProvider };
