import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient'

import { palette } from '../../../theme/palette.ts'
import TopWrecker from '../../../components/top-wreckers/ASTopWrecker.tsx'
import { survivingIcon, thrivingIcon } from '../../../constants/assesment-constants.ts'

import { styles } from './assesment-style.ts'

export const Assesment = () => {
  const progress: number = 50
  return (
    <>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <View style={styles.bodyHeaderContainer}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={survivingIcon} />
              <Text style={styles.survivingText}>Surviving</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{progress}/100</Text>
              <View style={styles.progressBar}>
                <View style={[styles.scoreBarLinearGradient, { width: `${progress}%` }]}>
                  <LinearGradient
                    colors={palette.ProgressBarGradient}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={[styles.scoreBarLinearGradient]}></LinearGradient>
                </View>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={thrivingIcon} />
              <Text style={styles.survivingText}>Thriving</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bodyHeaderSubDetails}>
              Mental Well-being Score is Moderate.{'\n'} Keep it Up!
            </Text>
          </View>
        </View>
        <TopWrecker />
      </View>
    </>
  )
}
