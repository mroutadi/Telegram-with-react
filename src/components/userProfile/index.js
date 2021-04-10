import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles/userProfile.module.scss'
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import ChatIcon from '@material-ui/icons/Chat';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function UserModal(props) {
  const { contact, me, inUserChat } = props
  const last_seen = moment(contact.last_seen);
  return (
    <div className={styles.user}>
      <div className={styles.userInformation}>
        <div className={styles.imageContainer}>{
          contact.picture[0] ?
            <img src={contact.picture[0]} alt={contact.username} className={styles.itemImage} /> :
            <span className={styles.itemNameImg} >{`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}</span>
        }</div>
        <div className={styles.nameAndLastseen}>
          <div className={styles.userInfo}>{contact.first_name} {contact.last_name}</div>
          <div className={styles.lastSeen}>last seen {LastSeen(last_seen)}</div>
        </div>
        {me ? <div className={styles.userIcon}><AddAPhotoIcon /></div> : !inUserChat ? <Link to={`/${contact.username}`} replace ><div className={styles.userIcon}><ChatIcon /></div></Link> : ''}
      </div>
      <div className={styles.userAccount}>
        <span className={styles.userAccountIcon}>Account</span>
        {contact.phone && <div className={styles.userAccountItem}>
          <h4 className={styles.userAccountItemExp}>{contact.phone}</h4>
          <h6 className={styles.userAccountItemTitle}>Phone</h6>
        </div>}
        {contact.bio && <div className={styles.userAccountItem}>
          <h4 className={styles.userAccountItemExp}>{contact.bio}</h4>
          <h6 className={styles.userAccountItemTitle}>Bio</h6>
        </div>}
        {contact.username && <div className={styles.userAccountItem}>
          <h4 className={styles.userAccountItemExp}>@{contact.username}</h4>
          <h6 className={styles.userAccountItemTitle}>Username</h6>
        </div>}
      </div>
    </div>
  )
}
