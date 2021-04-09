import moment from 'moment'

const timePretifier = (number) => {
  return number < 10 ? `0${number}` : number;
}

export const Time = (time) => {
  // console.log(moment("2020-06-12T00:15:53").isSame(moment("2020-06-12T06:15:53"), 'days'));
  console.log(moment(time).weekday());
  if (moment().isSame(moment(time), 'days')) {
    return `${timePretifier(time.hour())}:${timePretifier(time.minute())}`
  } else if (moment().isSame(moment(time), 'weeks')) {
    return `${moment(time).format("ddd")}`
  } else {
    return `${moment(time).format("YY.MM.DD")}`
  }
}