import React from 'react'
import { Text, View, Image } from 'react-native'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './EmptyCard-styles'

const EmptyCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/notifications.png')}
        style={styles.imageContainer}
        resizeMode={ResizeMode.contain}
      />
      <View style={styles.textContentContainer}>
        <Text style={styles.textContainer}>No notifications yet!</Text>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>You have no notifications right now.</Text>
          <Text style={styles.subText}>Come back later.</Text>
        </View>
      </View>
    </View>
  )
}

export default EmptyCard
