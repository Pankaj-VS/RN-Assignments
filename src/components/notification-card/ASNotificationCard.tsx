import { Image, Text, View } from 'react-native'

import { COLORS } from '../../theme/colors'
import { INotificationData } from '../../types/notification-types'
import { calculateNotificationTime } from '../../utils/common-utils'

import { ResizeMode } from '../../constants/common-constants'
import { imagePaths } from '../../constants/notification-constants'

import { styles } from './asNotificationCard-styles'

export const ASNotificationCard = (props: INotificationData) => {
  const { isStatusComplete, imageName, notification, timeOfCreation } = props
  const backgroundColor: string = isStatusComplete ? COLORS.primary[50] : COLORS.white

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.notificationSubContainer}>
        <Image
          source={imagePaths[imageName]}
          style={styles.imageBody}
          resizeMode={ResizeMode.contain}
        />
        <Text style={styles.textBody}>{notification}</Text>
      </View>
      <Text style={styles.creationTime}>{calculateNotificationTime(timeOfCreation)} ago</Text>
    </View>
  )
}
