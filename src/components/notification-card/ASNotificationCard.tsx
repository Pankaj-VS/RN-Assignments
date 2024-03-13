import { Text, View, Image } from 'react-native'

import { calculateNotificationTime } from '../../utils/common-utils'
import { INotificationData } from '../../types/notification-types'
import { COLORS } from '../../theme/colors'
import { ResizeMode } from '../../constants/common-constants'

import { imagePaths } from '../../constants/notification-constants'

import { styles } from './asNotificationCard-styles'

export const ASNotificationCard = ({ item }: { item: INotificationData }) => {
  const backgroundColor: string = item.isStatusComplete ? COLORS.primary[50] : COLORS.white

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.notificationSubContainer}>
        <Image
          source={imagePaths[item.imageName]}
          style={styles.imageBody}
          resizeMode={ResizeMode.contain}
        />
        <Text style={styles.textBody}>{item.notification}</Text>
      </View>
      <Text style={styles.creationTime}>{calculateNotificationTime(item.timeOfCreation)} ago</Text>
    </View>
  )
}
