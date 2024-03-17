import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

import { next } from '../../constants/profile-constants'

import { styles } from './asProfileCard-styles'

interface ASProfileCardProps {
  item: string
}

export const ASProfileCard = ({ item }: ASProfileCardProps) => {
  return (
    <TouchableOpacity style={styles.profileOptionsSubcontainer}>
      <Text style={styles.profileOptionsLabel}>{item}</Text>
      <Image source={next} style={styles.nextIcon} />
    </TouchableOpacity>
  )
}
