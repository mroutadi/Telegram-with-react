import React from 'react'
import { useParams } from 'react-router-dom';

export default function Conversation() {
  const url_parameters = useParams();
  return (
    <div>
      this is Conversation page
    </div>
  )
}
