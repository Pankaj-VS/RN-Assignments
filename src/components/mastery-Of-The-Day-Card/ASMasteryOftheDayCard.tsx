import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity, Modal } from 'react-native'

import { WebView } from 'react-native-webview'

import {
  IMasteryOftheDayCardProp,
  audioIcon,
  completedIcon,
  markedFavouriteIcon,
  notMarkedFavouriteIcon,
} from '../../constants/dashboard-constants'

import { styles } from './asMastery-of-the-day-card-style'

const ChallengeDetailsCard = (props: IMasteryOftheDayCardProp) => {
  const { masteryCardDetails } = props
  const { image, subheading, heading, timingDetails, iscompleted, isfavourateMarked } =
    masteryCardDetails
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible)
        }}>
        <WebView source={{ uri: 'https://google.com' }} style={{ flex: 1 }} />
        <TouchableOpacity onPress={()=>setIsModalVisible(false)}>
          <View style={styles.webViewCloseButton}>
            <Text style={styles.webViewCloseButtonText}>Close</Text>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.imageContainer}>
        <View style={styles.imageBackgroundContainer}>
          <Image style={styles.overThinkerBackgroundImage} source={image} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <View style={styles.detailsInnerContainer}>
            <View style={styles.details}>
              <Text style={styles.listenTitle}>{subheading}</Text>
              {iscompleted && <Image style={styles.completedIcon} source={completedIcon} />}
            </View>
            <View>
              {isfavourateMarked ? (
                <Image style={styles.starIcon} source={markedFavouriteIcon} />
              ) : (
                <Image style={styles.starIcon} source={notMarkedFavouriteIcon} />
              )}
            </View>
          </View>

          <Text style={styles.titleText}>{heading}</Text>
        </View>
        <View style={styles.timingDetailsContainer}>
          <Text style={styles.timingDetails}>{timingDetails}</Text>
          <View style={styles.audioIconBackground}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Image style={styles.audioIcon} source={audioIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChallengeDetailsCard
