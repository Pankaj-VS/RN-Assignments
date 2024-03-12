import {Text, View, Image} from 'react-native';

import {calculateNotificationTime} from '../../utils/common-utils';
import {NotificationData} from '../../types/notification-types';
import {COLORS} from '../../theme/colors';

import {imagePaths} from '../../constants/notification-constants';

import {styles} from './NotificationCard-styles';

const NotificationCard = ({item}: {item: NotificationData}) => {
  const backgroundColor: string = item.isStatusComplete
    ? COLORS.primary50
    : COLORS.neutralWhite;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.notificationSubContainer}>
        <Image
          source={imagePaths[item.imageName]}
          style={styles.imageBody}
          resizeMode="contain"
        />
        <Text style={styles.textBody}>{item.notification}</Text>
      </View>
      <Text style={styles.creationTime}>
        {calculateNotificationTime(item.timeOfCreation)} ago
      </Text>
    </View>
  );
};

export default NotificationCard;
