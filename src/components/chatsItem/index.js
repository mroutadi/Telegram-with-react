import React from 'react'
import {
  Link
} from "react-router-dom";

export default function ChatsItem(props) {
  const { conversation } = props;
  return (
    <Link to={`/${conversation.sent_by.username}`}>
      <div>{conversation.sent_by.first_name} {conversation.sent_by.last_name}</div>
      <div>{conversation.messages[0].content.substr(0, 100)}</div>
      <hr />
    </Link>
  )
}
