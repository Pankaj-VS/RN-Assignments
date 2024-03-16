import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react'
import { COLORS } from '../../../theme/colors'
import { Typography } from '../../../theme/typography'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { palette } from '../../../theme/palette'

const completedIcon = require('../../../assets/icons/complete.png')
const markedFavourite = require('../../../assets/icons/markedFavourite.png')
const notmMarkedFavourite = require('../../../assets/icons/notMarkedFavourite.png')
const audio = require('../../../assets/icons/audio.png')

const dActive = require('../../../assets/images/dActive.png')
const reflection = require('../../../assets/images/reflection.png')
const reminder = require('../../../assets/images/reminder.png')

import {styles} from "./challenge-details-card-style"

enum imageDetails {
  'D-active' = dActive,
  'Reminder of the day' = reflection,
  'Reflection of the day' = reminder
}
interface BackgroundColorDetails {
  [key: string]: string;
}

const backgroundColorDetails: BackgroundColorDetails = {
  'D-active': COLORS.secondary[100],
  'Reminder of the day': COLORS.accent[100],
  'Reflection of the day': COLORS.primary[100]
};

interface IChallengeDeatilsCardProps{
  id:number,
        title: string,
        isFav: string,
        startingTime:string,
        endingTime: string,
        isCompleted: string

}
const ChallengeDeatilsCard = ({ChallengeDeatils}: IChallengeDeatilsCardProps) => {
  const {
    id,
   title,isFav,startingTime,endingTime,isCompleted
  } = ChallengeDeatils;
  console.log(isCompleted===true)

  return (
    <View style={[styles.container,{backgroundColor:backgroundColorDetails[title]}]}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBackgroundContainer}>
          <Image style={styles.overThinkerGrey} source={imageDetails[title]} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <View style={styles.detailsMainContainer}>
            <View style={styles.details}>
              <Text style={styles.listenTitle}>Challenge {id}</Text>
              {/* {console.log(isCompleted)} */}
              {(isCompleted==='true') ?(<Image style={styles.completedIcon} source={completedIcon} />):(<View/>)}
            </View>
            <View>
              {isFav==='true' ? <Image style={styles.starIcon} source={markedFavourite} /> : <Image style={styles.starIcon} source={notmMarkedFavourite} />}
            </View>
          </View>
         
            <Text style={styles.titleText}>{title}</Text>
          
        </View> 
        <View style={styles.timingDetailsContainer}>
        <Text style={styles.timingDetails}>{startingTime} to {endingTime}</Text>
          <View style={styles.audioIconBackground}>
            <Image style={styles.audioIcon} source={audio} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChallengeDeatilsCard

