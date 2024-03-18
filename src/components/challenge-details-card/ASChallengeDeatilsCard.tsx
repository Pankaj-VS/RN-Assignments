
import React from 'react'
import { Image, Text, View } from 'react-native'

import {
  IChallengeDetailsCardProps,
  backgroundColorDetails,
  imageDetails,
} from '../../constants/dashboard-constants'
import { audioIcon, completedIcon, markedFavouriteIcon, notMarkedFavouriteIcon } from '../../constants/dashboard-constants'

import { styles } from './asChallengeDetailsCard-style'

const ChallengeDetailsCard = (props: IChallengeDetailsCardProps) => {
  const {ChallengeDetails}=props
  const { id, title, isFav, startingTime, endingTime, isCompleted } = ChallengeDetails

  return (
    <View style={[styles.container, { backgroundColor: backgroundColorDetails[title] }]}>
      <View style={styles.subContainer}>
        <View style={styles.imageBackgroundContainer}>
          <Image style={styles.cardImage} source={imageDetails[title]} />       
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <View style={styles.detailsInnerContainer}>
            <View style={styles.details}>
              <Text style={styles.listenTitle}>Challenge {id}</Text>
              {isCompleted === 'true' ? (
                <Image style={styles.completedIcon} source={completedIcon} />
              ) : (
                <View />
              )}
            </View>
            <View>
              {isFav === 'true' ? (
                <Image style={styles.starIcon} source={markedFavouriteIcon} />
              ) : (
                <Image style={styles.starIcon} source={notMarkedFavouriteIcon} />
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
            <Image style={styles.audioIcon} source={audioIcon} />
          </View>
        </View>
      </View>
      </View>
    </View>
  )
}

export default ChallengeDetailsCard
