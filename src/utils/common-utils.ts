import moment from 'moment'

export const calculateNotificationTime = (timeOfCreation: string): string => {
  const creationTime = moment(timeOfCreation)
  const now = moment()
  const duration = moment.duration(now.diff(creationTime))

  const seconds = duration.asSeconds()
  const minutes = duration.asMinutes()
  const hours = duration.asHours()
  const days = duration.asDays()
  const weeks = duration.asWeeks()
  const months = duration.asMonths()
  const years = duration.asYears()

  let notificationTime: string = ''

  if (seconds < 60) {
    notificationTime = `${Math.floor(seconds)}s`
  } else if (minutes < 60) {
    notificationTime = `${Math.floor(minutes)}m`
  } else if (hours < 24) {
    notificationTime = `${Math.floor(hours)}h`
  } else if (days < 7) {
    notificationTime = `${Math.floor(days)}d`
  } else if (weeks < 4) {
    notificationTime = `${Math.floor(weeks)}w`
  } else if (months < 12) {
    notificationTime = `${Math.floor(months)}mo`
  } else {
    notificationTime = `${Math.floor(years)}y`
  }

  return notificationTime
}

export const getCurrentDayDate = (): string => {
  const date = moment()
  const formattedDate: string = date.format('DD MMM YYYY')
  const day: number = parseInt(formattedDate.slice(0, 2), 10)
  const monthYear: string = formattedDate.slice(3)
  let todayDate: string

  if (day < 11 || day > 13) {
    if (day % 10 === 1) {
      todayDate = `${day}st ${monthYear}`
    } else if (day % 10 === 2) {
      todayDate = `${day}nd ${monthYear}`
    } else if (day % 10 === 3) {
      todayDate = `${day}rd ${monthYear}`
    } else {
      todayDate = `${day}th ${monthYear}`
    }
  } else {
    todayDate = `${day}th ${monthYear}`
  }

  return todayDate
}
