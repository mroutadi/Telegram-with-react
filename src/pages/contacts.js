import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context';
import ContactItem from '../components/contactItem'

export default function Contacts() {
  const ctx = useContext(Context);
  const [sortBy, setSortBy] = useState('NAME'); //NAME, LASTSEEN
  const [contacts, setContacts] = useState(ctx.contacts.sort((a, b) => {
    if (a.first_name > b.first_name) {
      return 1;
    } else if (a.first_name < b.first_name) {
      return -1;
    } else {
      return a.last_name > b.last_name
    }
  }));
  useEffect(() => {
    if (sortBy === 'NAME') {
      setContacts(contacts.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        } else if (a.first_name < b.first_name) {
          return -1;
        } else {
          return a.last_name > b.last_name
        }
      }))
    }
  }, [sortBy])
  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact} />
      ))}
    </div>
  )
}
