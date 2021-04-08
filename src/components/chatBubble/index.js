import React from 'react'

export default function ChatBubble(props) {
  const { content, sent_at, sent_by_me, read } = props;
  return (
    <div>
      <div>{content}</div>
      <div>{sent_at}{read ? "read" : "unread"}</div>
      <div>{sent_by_me ? "me" : "they"}</div>
      <hr />
    </div>
  )
}
