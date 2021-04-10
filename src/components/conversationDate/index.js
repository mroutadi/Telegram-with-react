import React from 'react'
import styles from './styles/conversationDate.module.scss'
import moment from 'moment'
import { DateTime } from '../../utils/dateTime'

export default function ConversationDate(props) {
  const { time } = props;
  const dateTime = moment(time)
  return (
    <div className={styles.DateTime}>
      {DateTime(dateTime)}
    </div>
  )
}
