import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment';
import styles from './styles/chatsItem.module.scss'
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Time } from '../../utils/chatsTime'

export default function ChatsItem(props) {
  const { conversation } = props;
  const sent_at_time = moment(conversation.messages[conversation.messages.length - 1].sent_at);
  return (
    <Link to={`/${conversation.sent_by.username}`} className={styles.chatItem}>
      <div className={styles.imageContainer}>
        {
          conversation.sent_by.picture[0] ?
            <img src={conversation.sent_by.picture[0]} alt={conversation.sent_by.username} className={styles.itemImage} /> :
            <span className={styles.itemNameImg} >{`${conversation.sent_by.first_name.charAt(0)}${conversation.sent_by.last_name.charAt(0)}`}</span>
        }
      </div>
      <div className={styles.nameAndContent}>
        <div className={styles.userInfo}>{conversation.sent_by.first_name} {conversation.sent_by.last_name}</div>
        <div className={styles.lastMessage}>{conversation.messages[conversation.messages.length - 1].content}</div>
      </div>
      <div className={styles.timeInfo}>
        {conversation.messages[conversation.messages.length - 1].sent_by_me && (conversation.messages[conversation.messages.length - 1].read ? <DoneAllIcon /> : <DoneIcon />)}{Time(sent_at_time)}
      </div>
    </Link>
  )
}
