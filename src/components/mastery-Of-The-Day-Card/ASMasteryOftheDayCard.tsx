import React from 'react'
import { Image, Text, View } from 'react-native'

const completedIcon = require('../../assets/icons/complete.png')
const markedFavourite = require('../../assets/icons/markedFavourite.png')
const notmMarkedFavourite = require('../../assets/icons/notMarkedFavourite.png')
const audio = require('../../assets/icons/audio.png')

import { IChallengeDeatilsCardProps } from '../../constants/dashboard-constants'
import { styles } from './asMastery-of-the-day-card-style'
const ChallengeDeatilsCard = ({ masteryCardDetails }: IChallengeDeatilsCardProps) => {
  const { img, subheading, heading, timmingDetails, iscompleted, isfavourateMarked } =
    masteryCardDetails

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
              {isfavourateMarked ? (
                <Image style={styles.starIcon} source={markedFavourite} />
              ) : (
                <Image style={styles.starIcon} source={notmMarkedFavourite} />
              )}
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
