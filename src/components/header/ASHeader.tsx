import React from 'react'
import { Text, View, Image } from 'react-native'

import { styles } from './asHeader-styles'
import { ResizeMode } from '../../constants/common-constants'

interface IASHeaderProps {
  image?: number
  title: string
}

export const ASHeader = ({ image, title }: IASHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} />
      <Text style={styles.title}>{title}</Text>
      {image ? (
        <Image source={image} style={styles.imageContainer} resizeMode={ResizeMode.contain} />
      ) : (
        <View style={styles.imageContainer} />
      )}
    </View>
  )
}
