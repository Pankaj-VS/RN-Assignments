import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { nextGreen } from '../../constants/profile-constants'

import { styles } from './asMyReflectionsCard-styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorParams } from '../../types/stackNavigator-types'

interface IASMyReflectionCardProps {
  date: string
  title: string
}

export const ASMyReflectionsCard = (props: IASMyReflectionCardProps) => {
  const { date, title } = props
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ReflectionOfTheDay')}>
      <View style={styles.container}>
        <Text style={styles.date}> {date} </Text>
        <View style={styles.subContainer}>
          <Text style={styles.title}> {title} </Text>
          <Image source={nextGreen} style={styles.nextIcon} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
