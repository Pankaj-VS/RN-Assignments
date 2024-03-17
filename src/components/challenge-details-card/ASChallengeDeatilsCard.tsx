const audio = require('../../assets/icons/audio.png')
const completedIcon = require('../../assets/icons/complete.png')
const markedFavourite = require('../../assets/icons/markedFavourite.png')
const notmMarkedFavourite = require('../../assets/icons/notMarkedFavourite.png')
import React from 'react'
import { Image, Text, View } from 'react-native'
import {
  IChallengeDeatilsCardProps,
  backgroundColorDetails,
  imageDetails,
} from '../../constants/dashboard-constants'
import { styles } from './asChallenge-details-card-style'

const ChallengeDeatilsCard = ({ ChallengeDeatils }: IChallengeDeatilsCardProps) => {
  const { id, title, isFav, startingTime, endingTime, isCompleted } = ChallengeDeatils

  return (
    <View style={[styles.container, { backgroundColor: backgroundColorDetails[title] }]}>
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
              {isCompleted === 'true' ? (
                <Image style={styles.completedIcon} source={completedIcon} />
              ) : (
                <View />
              )}
            </View>
            <View>
              {isFav === 'true' ? (
                <Image style={styles.starIcon} source={markedFavourite} />
              ) : (
                <Image style={styles.starIcon} source={notmMarkedFavourite} />
              )}
            </View>
          </View>

          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.timingDetailsContainer}>
          <Text style={styles.timingDetails}>
            {startingTime} to {endingTime}
          </Text>
          <View style={styles.audioIconBackground}>
            <Image style={styles.audioIcon} source={audio} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChallengeDeatilsCard
