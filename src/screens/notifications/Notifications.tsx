import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, Image } from 'react-native'

import EmptyCard from '../../components/empty-card/EmptyCard'
import NotificationCard from '../../components/notification-card/NotificationCard'
import { NotificationData } from '../../types/notification-types'
import { getData } from '../../services/service'

import { API } from '../../constants/api-constants'

import { styles } from './notifications-styles'

const Notifications = () => {
  const [data, setData] = useState<NotificationData[]>([])

  const fetchNotificationsData = async () => {
    const response = await getData(API.NOTIFICATIONS_API)
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
        <View style={styles.header}>
          <View style={styles.imageContainer} />
          <Text style={styles.title}>Notifications</Text>
          <Image
            source={require('../../assets/icons/setting.png')}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </View>
        <FlatList
          ListEmptyComponent={<EmptyCard />}
          style={styles.listContainer}
          data={data}
          renderItem={({ item }) => <NotificationCard item={item} />}
        />
      </View>
    </View>
  )
}

export default Notifications
