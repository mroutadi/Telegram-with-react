import moment from 'moment'

export const ConversationsInitialSort = (conversations) => {  //sort by last message date
  let Conversations = conversations;
  for (let index = 0; index < Conversations.length; index++) {
    Conversations[index].messages.sort((a, b) => {
      return moment(a.sent_at).isAfter(moment(b.sent_at))
    })
  }
  Conversations.sort((a, b) => {
    return moment(a.messages[a.messages.length - 1]).isAfter(moment(b.messages[b.messages.length - 1]))
  })
  return Conversations;
}

export const ContactsInitialSort = (contacts) => { //sort by the first name and last name
  let Contacts = contacts;
  Contacts.sort((a, b) => (
    moment(a.last_seen).isBefore(moment(b.last_seen))
  ))
  return Contacts;
}