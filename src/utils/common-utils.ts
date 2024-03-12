export const calculateNotificationTime = (timeOfCreation: string): string => {
  const creationTimestamp = new Date(timeOfCreation).getTime();
  const currentTimestamp = Date.now();
  const difference = currentTimestamp - creationTimestamp;

  const secondsDifference = Math.floor(difference / 1000);

  const MINUTE_DURATION = 60;
  const HOUR_DURATION = 3600;
  const DAY_DURATION = 86400;
  const WEEK_DURATION = 604800;
  const MONTH_DURATION = 2592000;
  const YEAR_DURATION = 31536000;

  let notificationTime: string = '';

  if (secondsDifference < MINUTE_DURATION) {
    notificationTime = `${secondsDifference}s`;
  } else if (secondsDifference < HOUR_DURATION) {
    notificationTime = `${Math.floor(secondsDifference / MINUTE_DURATION)}m`;
  } else if (secondsDifference < DAY_DURATION) {
    notificationTime = `${Math.floor(secondsDifference / HOUR_DURATION)}h`;
  } else if (secondsDifference < WEEK_DURATION) {
    notificationTime = `${Math.floor(secondsDifference / DAY_DURATION)}d`;
  } else if (secondsDifference < MONTH_DURATION) {
    notificationTime = `${Math.floor(secondsDifference / WEEK_DURATION)}w`;
  } else if (secondsDifference < YEAR_DURATION) {
    notificationTime = `${Math.floor(secondsDifference / MONTH_DURATION)}mo`;
  } else {
    notificationTime = `${Math.floor(secondsDifference / YEAR_DURATION)}y`;
  }
  return notificationTime;
};
