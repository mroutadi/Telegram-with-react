import moment from 'moment';

const LastSeen = time => {
  return moment(time).fromNow()
};

export default LastSeen;