import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment';

export default function ContactItem(props) {
  const { contact } = props;
  const last_seen = moment(contact.last_seen);
  console.log(moment(contact.last_seen).hour());
  return (
    <Link to={`/${contact.username}`}>
      <div>{contact.first_name} {contact.last_name}</div>
      <div>{last_seen.hour()}:{last_seen.minute()}</div>
      <hr />
    </Link>
  )
}
