import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

import { calendarImage, headerBackground, overthinkerImage } from '../../constants/dashboard-constants'
import { getCurrentDayDate } from '../../utils/common-utils'

import { styles } from './asDashboard-header-style'

const Header = () => {
  const date: string = getCurrentDayDate()
  const day: number = 1
  const totaldays: number = 24
  return (
    <View>
      <ImageBackground source={headerBackground}>
        <View style={styles.subcontainer}>
          <View style={styles.dateDetailsContainer}>
            <View style={styles.dateDetailsSubContainer}>
              <Image style={styles.calendarImage} source={calendarImage} resizeMode="contain" />

              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        </View>

        <View style={styles.overthinkerDetailsSubContainer}>
          <Text style={styles.overThinkerText}>Overthinker</Text>
          <Text style={styles.dayCounterDetails}>
            Day {day} of {totaldays}
          </Text>
        </View>

        <View style={styles.overThinkerImageContainer}>
          <Image style={styles.overThinkerImage} source={overthinkerImage} resizeMode="cover" />
        </View>
      </ImageBackground>

      <View>
        <View></View>
      </View>
    </View>
  )
}

export default Header
