import React from 'react'

export default function ChatBubble(props) {
  const { content, sent_at, sent_by_me, read, key } = props;
  return (
    <div key={key}>
      <div>{content}</div>
      <div>{sent_at}{read ? "read" : "unread"}</div>
      <div>{sent_by_me ? "me" : "they"}</div>
      <hr />
    </div>
  )
}
