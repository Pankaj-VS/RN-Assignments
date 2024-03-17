import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { getTodayDate } from '../../utils/common-utils'
import { styles } from './asDashboard-header-style'
const headerBackground = require('../../assets/images/dashboardHeaderBackground.png')
const calendarImage = require('../../assets/icons/calendar.png')
const overthinkerImage = require('../../assets/icons/overthinkerWhite.png')
const Header = () => {
  const date: string = getTodayDate()
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
          <Text style={styles.overThinkeText}>Overthinker</Text>
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
