import React, { useContext } from 'react'
import { Context } from '../context';
import ContactItem from '../components/contactItem'

export default function Contacts() {
  const ctx = useContext(Context);
  return (
    <div>
      {ctx.contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact} />
      ))}
    </div>
  )
}
