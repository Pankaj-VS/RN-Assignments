import React from 'react'
import { Image, Text, View } from 'react-native'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asEmptyCard-styles'

export const ASEmptyCard = () => {
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
