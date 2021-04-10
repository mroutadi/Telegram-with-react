import moment from 'moment'

export const DateTime = (time) => {
  if (moment(time).isSame(moment(), 'years')) {
    return moment(time).format("MMM D")
  } else {
    return moment(time).format("YYYY MMM D")
  }
}