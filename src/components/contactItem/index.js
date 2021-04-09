import React from 'react'
import { Link } from "react-router-dom";
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import styles from './styles/contactItem.module.scss'

export default function ContactItem(props) {
  const { contact } = props;
  const last_seen = moment(contact.last_seen);
  return (
    <Link to={`/${contact.username}`} className={styles.contactItem}>
      <div className={styles.imageContainer}>{
        contact.picture[0] ?
          <img src={contact.picture[0]} className={styles.itemImage} /> :
          <span className={styles.itemNameImg} >{`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}</span>
      }</div>
      <div className={styles.nameAndLastseen}>
        <div className={styles.userInfo}>{contact.first_name} {contact.last_name}</div>
        <div className={styles.lastSeen}>{LastSeen(last_seen)}</div>
      </div>
    </Link>
  )
}
