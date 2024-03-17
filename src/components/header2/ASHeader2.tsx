import React from 'react'
import { Image, Text, View } from 'react-native'

import { ResizeMode } from '../../constants/common-constants'
import { styles } from './asHeader2-styles'

interface IASHeaderProps {
  image?: number
  title: string
}

export const ASHeader2 = ({ image, title }: IASHeaderProps) => {
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
