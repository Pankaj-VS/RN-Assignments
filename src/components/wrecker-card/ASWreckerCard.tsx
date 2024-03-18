import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import * as Progress from 'react-native-progress'

import { ASPopUp } from '../pop-up/ASPopUp'
import { COLORS } from '../../theme/colors'

import { IWreckerCardProp, imageDetails } from '../../constants/assesment-constants'

import { styles } from './asWrecker-card-style'

const WreckerCard = (props: IWreckerCardProp) => {
  const { data } = props
  const { title, progress, description } = data
  const progressAsNumber: number = parseInt(progress)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const openModal = () => {
    setModalVisible(true)
  }
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={openModal}>
      <View style={styles.imageContainer}>
        <Image style={styles.wreckerImage} source={imageDetails[title]} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.progressPercentage}>{progress}%</Text>
          <Progress.Bar
            progress={progressAsNumber / 100}
            height={12}
            width={51}
            style={styles.chart}
            color={COLORS.secondary[500]}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      {modalVisible && (
        <ASPopUp
          setModalVisible={setModalVisible}
          title={title}
          progress={progressAsNumber}
          modalVisible={modalVisible}
          description={description}
        />
      )}
    </TouchableOpacity>
  )
}

export default WreckerCard
