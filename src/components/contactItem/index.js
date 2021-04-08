import React from 'react'
import { Link } from "react-router-dom";
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';

export default function ContactItem(props) {
  const { contact } = props;
  const last_seen = moment(contact.last_seen);
  return (
    <Link to={`/${contact.username}`}>
      <div>{contact.first_name} {contact.last_name}</div>
      <div>{LastSeen(last_seen)}</div>
      <hr />
    </Link>
  )
}
