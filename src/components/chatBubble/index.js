import React, { useState } from 'react'
import styles from "./styles/chatBubble.module.scss"
import { Popover } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import moment from 'moment'

export default function ChatBubble(props) {
  const { content, sent_at, sent_by_me, read, key, _id, handleDeleteConversation } = props;
  const [PopoverIsOpen, setPopoverIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [chatId, setChatId] = useState(null)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setChatId(_id);
    setPopoverIsOpen(true)
  }
  const handleDelete = () => {
    handleDeleteConversation(_id)
  }
  return (
    <React.Fragment>
      <Popover
        open={PopoverIsOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverIsOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={styles.Popover}>
          <CopyToClipboard text={content}>
            <button className={styles.Button}><FileCopyIcon />Copy</button>
          </CopyToClipboard>
          <button className={styles.Button} onClick={handleDelete}><DeleteIcon />Delete</button>
        </div>
      </Popover>
      <div key={key}
        onClick={handleClick}
        className={
          sent_by_me
            ? `${styles.message} ${styles.myMessage}`
            : `${styles.message} ${styles.theirMessage}`
        }
      >
        <div className={styles.text}>{content}</div>
        <div className={styles.info}>
          {sent_by_me && <div className={styles.status}>{read ? <DoneAllIcon /> : <DoneIcon />}</div>}
          <div className={styles.time}>{moment(sent_at).format("hh:mm")}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
