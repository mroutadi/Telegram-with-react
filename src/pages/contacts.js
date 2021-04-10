import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context';
import ContactItem from '../components/contactItem'
import styles from '../assets/styles/contacts.module.scss'
import moment from 'moment'

export default function Contacts() {
  const ctx = useContext(Context);
  const [contacts, setContacts] = useState(ctx.contacts.sort((a, b) => {
    if (a.first_name > b.first_name) {
      return 1;
    } else if (a.first_name < b.first_name) {
      return -1;
    } else {
      return a.last_name > b.last_name
    }
  }));


  return (
    <div className={styles.Contacts}>
      <div className={styles.Header}>
        <h3 className={styles.Title}>Contacts</h3>
      </div>
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact} />
      ))}
    </div>
  )
}
