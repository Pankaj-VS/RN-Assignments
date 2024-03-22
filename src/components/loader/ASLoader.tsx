import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { COLORS } from '../../theme/colors'

import {styles} from './asLoader-styles'

const ASLoader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={COLORS.punch} />
    </View>
  )
}

export default ASLoader
