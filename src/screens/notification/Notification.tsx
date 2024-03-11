import {Text, View, Image} from 'react-native';
import {styles} from './notification-styles';
import {calculateTimeDifference} from '../../utils/common-utils'

interface NotificationProps {
  item: {
    imageName: string;
    notification: string;
    status: boolean;
    timeOfCreation: string;
  };
}
const imagePaths: {[key: string]: number} = {
  'Reflection.png': require('../../assets/images/Reflection.png'),
  'Reminder.png': require('../../assets/images/Reminder.png'),
  'D-active.png': require('../../assets/images/D-active.png'),
};

const notification = ({item}: NotificationProps) => {
  const getBackgroundColor = (status: boolean): string => {
    return status ? '#F1FCFA' : '#white';
  };

  return (
    <View
      style={[
        styles.notificationContainer,
        {backgroundColor: getBackgroundColor(item.status)},
      ]}>
      <View style={styles.notificationSubContainer}>
        <Image
          source={imagePaths[item.imageName]}
          style={styles.imageBody}
          resizeMode="contain"></Image>
        <Text style={styles.textBody}>{item.notification}</Text>
      </View>
      <Text style={styles.creationTime}>
        {calculateTimeDifference(item.timeOfCreation)} ago
      </Text>
    </View>
  );
};

export default notification;
