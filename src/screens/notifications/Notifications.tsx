import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { ASEmptyCard } from '../../components/empty-card/ASEmptyCard'
import { ASHeader } from '../../components/header/ASHeader'
import { ASNotificationCard } from '../../components/notification-card/ASNotificationCard'
import { getNotifcationsExercisesData } from '../../services/api/get-notifcations-exercises-data'
import { INotificationData } from '../../types/notification-types'

import { API } from '../../constants/api-constants'
import { settingsImage } from '../../constants/common-constants'

import { styles } from './notifications-styles'

export const Notifications = () => {
  const [data, setData] = useState<INotificationData[]>([])

  const fetchNotificationsData = async () => {
    const response = await getNotifcationsExercisesData(API.NOTIFICATIONS_API)
    if (response.success) {
      setData(response.data)
    } else {
      console.error(response.error)
    }
  }

  useEffect(() => {
    fetchNotificationsData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ASHeader image={settingsImage} title="Notifications" />
        <FlatList
          ListEmptyComponent={<ASEmptyCard />}
          style={styles.listContainer}
          data={data}
          renderItem={({ item }) => <ASNotificationCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
