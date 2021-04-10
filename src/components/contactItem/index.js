import React, { useState } from 'react'
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import styles from './styles/contactItem.module.scss'
import UserModal from '../userProfile'
import Modal from '@material-ui/core/Modal';

export default function ContactItem(props) {
  const { contact } = props;
  const last_seen = moment(contact.last_seen);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <React.Fragment>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <UserModal contact={contact}></UserModal>
      </Modal>
      <div className={styles.contactItem} onClick={() => setModalIsOpen(true)}>
        <div className={styles.imageContainer}>{
          contact.picture[0] ?
            <img src={contact.picture[0]} alt={contact.username} className={styles.itemImage} /> :
            <span className={styles.itemNameImg} >{`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}</span>
        }</div>
        <div className={styles.nameAndLastseen}>
          <div className={styles.userInfo}>{contact.first_name} {contact.last_name}</div>
          <div className={styles.lastSeen}>last seen {LastSeen(last_seen)}</div>
        </div>
      </div>
    </React.Fragment >
  )
}
