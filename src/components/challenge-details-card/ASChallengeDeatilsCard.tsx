
import React, { useState } from 'react'
import { Image, Text, View,TouchableOpacity,Modal } from 'react-native'

import { WebView } from 'react-native-webview'


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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const [isfavoriteMarked,setIsfavoriteMarked] =useState<boolean>(Boolean(isFav))
  const toggleFavorite=()=>{

    setIsfavoriteMarked(!isfavoriteMarked)

  }
  
  return (
    <View style={[styles.container, { backgroundColor: backgroundColorDetails[title] }]}>
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
              <TouchableOpacity onPress={() => toggleFavorite()}>
              {isfavoriteMarked ? (
                
                <Image style={styles.starIcon} source={notMarkedFavouriteIcon} />
                ) : (
                <Image style={styles.starIcon} source={markedFavouriteIcon} />
                
                )}
                </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.timingDetailsContainer}>
          <Text style={styles.timingDetails}>
            {startingTime} to {endingTime}
          </Text>
          <View style={styles.audioIconBackground}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Image style={styles.audioIcon} source={audioIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  )
}

export default ChallengeDetailsCard
