import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

import { nextGreen } from '../../constants/profile-constants'

import { styles } from './asProfileCard-styles'

interface ASProfileCardProps {
  item: string
}

export const ASProfileCard = ({ item }: ASProfileCardProps) => {
  return (
    <TouchableOpacity style={styles.profileOptionsSubcontainer}>
      <Text style={styles.profileOptionsLabel}>{item}</Text>
      <Image source={nextGreen} style={styles.nextIcon} />
    </TouchableOpacity>
  )
}
