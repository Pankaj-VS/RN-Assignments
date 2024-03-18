import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { COLORS } from '../../theme/colors'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  image1?: ImageSourcePropType
  title: string
  image2?: ImageSourcePropType
  headerTextColor?: string
  backgroundColor?: string
  canGoToPrevoiusScreen?: boolean
}

export const ASHeader = (props: IASHeaderProps) => {
  const {
    image1,
    title,
    backgroundColor = COLORS.white,
    headerTextColor = COLORS.neutral[700],
    image2,
    canGoToPrevoiusScreen = false,
  } = props

  const navigation = useNavigation<BottomTabNavigationProp<TabNavigatorParams>>()

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      {image1 ? (
        <TouchableOpacity
          onPress={() =>
            canGoToPrevoiusScreen ? navigation.goBack() : navigation.navigate('Dashboard')
          }>
          <Image source={image1} style={styles.imageContainer} resizeMode={ResizeMode.contain} />
        </TouchableOpacity>
      ) : (
        <View style={styles.imageContainer} />
      )}
      <Text style={[styles.title, { color: headerTextColor || COLORS.dark }]}>{title}</Text>
      {image2 ? (
        <Image source={image2} style={styles.imageContainer} resizeMode={ResizeMode.contain} />
      ) : (
        <View style={styles.imageContainer} />
      )}
    </View>
  )
}
