import React from 'react'
import styles from './styles/userHeader.module.scss'
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom'

export default function UserHeader(props) {
  const { contact } = props
  const last_seen = moment(contact.last_seen);
  const history = useHistory()
  return (
    <div className={styles.userInfo}>
      <button className={styles.Button} onClick={() => history.goBack()}><ArrowBackIcon /></button>
      <div className={styles.userContainer}>
        <div className={styles.imageContainer}>{
          contact.picture[0] ?
            <img src={contact.picture[0]} className={styles.itemImage} /> :
            <span className={styles.itemNameImg} >{`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}</span>
        }</div>
        <div className={styles.nameAndLastseen}>
          <div className={styles.userInfo}>{contact.first_name} {contact.last_name}</div>
          <div className={styles.lastSeen}>last seen {LastSeen(last_seen)}</div>
        </div>
      </div>
      <button className={styles.Button}><MoreVertIcon /></button>
    </div>
  )
}
