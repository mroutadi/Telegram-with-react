import React, { useState } from 'react'
import styles from './styles/userHeader.module.scss'
import LastSeen from '../../utils/lastSeen'
import moment from 'moment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom'
import UserModal from '../userProfile'
import Modal from '@material-ui/core/Modal';
import { Popover } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

export default function UserHeader(props) {
  const { contact, handleDeleteChat } = props
  const last_seen = moment(contact.last_seen);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const history = useHistory()
  const [PopoverIsOpen, setPopoverIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setPopoverIsOpen(true)
  }
  const handleDelete = () => {
    handleDeleteChat(contact._id)
    history.goBack();
  }
  return (
    <React.Fragment>
      <Popover
        open={PopoverIsOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverIsOpen(false)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={styles.Popover}>
          <button className={styles.Button} onClick={handleDelete}><DeleteIcon />Delete Conversation</button>
        </div>
      </Popover>
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
              <img src={contact.picture[0]} alt={contact.username} className={styles.itemImage} /> :
              <span className={styles.itemNameImg} >{`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}</span>
          }</div>
          <div className={styles.nameAndLastseen}>
            <div className={styles.userInfo}>{contact.first_name} {contact.last_name}</div>
            <div className={styles.lastSeen}>last seen {LastSeen(last_seen)}</div>
          </div>
        </div>
        <button className={styles.Button} onClick={handleClick}><MoreVertIcon /></button>
      </div>
    </React.Fragment>
  )
}
