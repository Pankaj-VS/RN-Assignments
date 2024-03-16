
import { ImageBackground, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import { styles } from './header-style'
import React from 'react'
import { getTodayDate } from '../../../utils/getTodayDate'
const headerBackground = require('../../../assets/images/hero.png')
const calendarImage = require('../../../assets/icons/calendar.png')
const overthinkerImage = require('../../../assets/icons/overthinkerWhite.png')
const Header = () => {
    let date: string = getTodayDate()
  let day: number = 1
  let totaldays: number = 24
  return (
    <View style={styles.container}>

      <ImageBackground source={headerBackground}>
        <View style={styles.subcontainer}>
          <View style={styles.dateDetailsContainer}>
            <View style={styles.dateDetailsSubContainer}>
              <Image style={styles.calendarImage} source={calendarImage} resizeMode="contain" />

              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.overthinkerDetailsContainer}> */}
        <View style={styles.overthinkerDetailsSubContainer}>
          <Text style={styles.overThinkeText}>Overthinker</Text>
          <Text style={styles.dayCounterDetails}>
            Day {day} of {totaldays}
          </Text>
        </View>

        <View style={styles.overThinkerImageContainer}>

        <Image style={styles.overThinkerImage} source={overthinkerImage} resizeMode='cover' />
        </View>


      </ImageBackground>

      <View>
        <View>

        </View>

      </View>
    </View>
  )
}

export default Header