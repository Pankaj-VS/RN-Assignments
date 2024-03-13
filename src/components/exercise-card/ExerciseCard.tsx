import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { CustomButtons } from '../custom-button/CustomButtons'
import { exerciseCardTitleContainerGradient } from '../../theme/colors'
import { ResizeMode } from '../../constants/common-constants'

import { ExerciseCardInfo } from '../../constants/exercises-constants'

import { styles } from './ExerciseCard-styles'

interface CardType {
  name: string
}

export const ExerciseCard = ({ name }: CardType) => {
  const txtColor: string = ExerciseCardInfo[name].textColor
  const imgSource: number = ExerciseCardInfo[name].imageSource
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgSource}
        resizeMode={ResizeMode.contain}
        style={styles.imageBackground}>
        <LinearGradient
          colors={exerciseCardTitleContainerGradient}
          locations={[0, 0.8792, 1]}
          style={styles.imageHeadingContainer}>
          <Text style={[styles.imageHeading, { color: txtColor }]}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
      <CustomButtons />
    </View>
  )
}
