import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../theme/colors'
import { Typography } from '../../../theme/typography'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { palette } from '../../../theme/palette'

const completedIcon = require('../../../assets/icons/complete.png')
const markedFavourite = require('../../../assets/icons/markedFavourite.png')
const notmMarkedFavourite = require('../../../assets/icons/notMarkedFavourite.png')
const audio = require('../../../assets/icons/audio.png')

import { styles } from './mastery-of-the-day-card-style'
interface IChallengeDeatilsCardProps{
  img:any
  ,subheading:string
  ,heading:string
  ,timmingDetails:string
,iscompleted:boolean,
isfavourateMasked:boolean
,backgroundColor:string

}
const ChallengeDeatilsCard = ({masteryCardDetails}: IChallengeDeatilsCardProps) => {
  const {
    img,
    subheading,
    heading,
    timmingDetails,
    iscompleted,
    isfavourateMasked,
    backgroundColor,
  } = masteryCardDetails;
 

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBackgroundContainer}>
          <Image style={styles.overThinkerGrey} source={img} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <View style={styles.detailsMainContainer}>
            <View style={styles.details}>
              <Text style={styles.listenTitle}>{subheading}</Text>
              {iscompleted && <Image style={styles.completedIcon} source={completedIcon} />}
            </View>
            <View>
              {isfavourateMasked ? <Image style={styles.starIcon} source={markedFavourite} /> : <Image style={styles.starIcon} source={notmMarkedFavourite} />}
            </View>
          </View>
         
            <Text style={styles.titleText}>{heading}</Text>
          
        </View>
        <View style={styles.timingDetailsContainer}>
        <Text style={styles.timingDetails}>{timmingDetails}</Text>
          <View style={styles.audioIconBackground}>
            <Image style={styles.audioIcon} source={audio} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChallengeDeatilsCard

