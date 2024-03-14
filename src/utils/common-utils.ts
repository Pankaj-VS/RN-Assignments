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
