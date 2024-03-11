export const calculateTimeDifference = (timeOfCreation: string): string => {
    const creationTimestamp = new Date(timeOfCreation).getTime();
    const currentTimestamp = Date.now();
    const difference = currentTimestamp - creationTimestamp;

    const secondsDifference = Math.floor(difference / 1000);

    if (secondsDifference < 60) {
      return `${secondsDifference}s`;
    } else if (secondsDifference < 3600) {
      return `${Math.floor(secondsDifference / 60)}m`;
    } else if (secondsDifference < 86400) {
      return `${Math.floor(secondsDifference / 3600)}h`;
    } else if (secondsDifference < 604800) {
      return `${Math.floor(secondsDifference / 86400)}d`;
    } else if (secondsDifference < 2592000) {
      return `${Math.floor(secondsDifference / 604800)}w`;
    } else if (secondsDifference < 31536000) {
      return `${Math.floor(secondsDifference / 2592000)}mo`;
    } else {
      return `${Math.floor(secondsDifference / 31536000)}y`;
    }
  };