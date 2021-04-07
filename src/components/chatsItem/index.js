import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment';

export default function ChatsItem(props) {
  const { conversation } = props;
  const sent_at_time = moment(conversation.messages[0].sent_at);
  return (
    <Link to={`/${conversation.sent_by.username}`}>
      <div>{conversation.sent_by.first_name} {conversation.sent_by.last_name}</div>
      <div>{conversation.messages[0].content.substr(0, 100)}</div>
      <div>{sent_at_time.hour()}:{sent_at_time.minute()}</div>
      <hr />
    </Link>
  )
}
