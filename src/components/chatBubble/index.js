import React from 'react'
import styles from "./styles/chatBubble.module.scss"

export default function ChatBubble(props) {
  const { content, sent_at, sent_by_me, read, key } = props;
  return (
    <div key={key}
      className={
        sent_by_me
          ? `${styles.message} ${styles.myMessage}`
          : `${styles.message} ${styles.theirMessage}`
      }
    >
      <div className={styles.text}>{content}</div>
      <div className={styles.info}>
        <div className={styles.status}>{read ? "read" : "unread"}</div>
        <div className={styles.time}>{sent_at}</div>
      </div>
    </div>
  )
}
