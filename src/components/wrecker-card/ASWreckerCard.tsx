import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'

import { IWreckerCardProp, imageDetails } from '../../constants/assesment-constants'

import { styles } from './asWrecker-card-style'

const WreckerCard = (props: IWreckerCardProp) => {
  const { data } = props
  const { title, progress} = data
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.wreckerImage} source={imageDetails[title]} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.progressPercentage}>{progress}%</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

export default WreckerCard
