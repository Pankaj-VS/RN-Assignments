import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { ASPopUp } from '../pop-up/ASPopUp'

import { activityImagePaths } from '../../constants/activity-constants'
import { next } from '../../constants/profile-constants'

import { styles } from './asProgressCard-styles'

interface IASProgressCardProps {
  id: number
  title: string
  progress: number
  description: string
}

export const ASProgressCard = ({ title, progress, description }: IASProgressCardProps) => {
  const imgSource: number = activityImagePaths[title]
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const openModal = () => {
    setModalVisible(true)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openModal}>
      <View style={styles.subContainer}>
        <Image source={imgSource} style={styles.activityImage}></Image>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.cadInfoContainer}>
        <Text style={styles.progressPercent}>{progress}%</Text>
        <Progress.Pie
          progress={Number(progress) / 100}
          size={Spacing.space_20}
          style={styles.chart}
          color={COLORS.secondary[700]}
        />
        <View style={styles.nextButton}>
          <Image style={styles.buttonImage} source={next} />
        </View>
        {modalVisible && (
          <ASPopUp
            setModalVisible={setModalVisible}
            title={title}
            progress={progress}
            modalVisible={modalVisible}
            description={description}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}
