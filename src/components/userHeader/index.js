import React, { useState } from 'react'
import styles from './styles/userHeader.module.scss'
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom'
import UserModal from '../userProfile'
import Modal from '@material-ui/core/Modal';

export default function UserHeader(props) {
  const { contact } = props
  const last_seen = moment(contact.last_seen);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const history = useHistory()
  return (
    <React.Fragment>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <UserModal contact={contact} inUserChat={true}></UserModal>
      </Modal>
      <div className={styles.userInfo}>
        <button className={styles.Button} onClick={() => history.goBack()}><ArrowBackIcon /></button>
        <div className={styles.userContainer} onClick={() => setModalIsOpen(true)}>
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
    </React.Fragment>
  )
}
