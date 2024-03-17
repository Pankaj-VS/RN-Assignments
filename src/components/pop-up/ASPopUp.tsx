import React from 'react'
import {
  Modal,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native'
import * as Progress from 'react-native-progress'

import { COLORS } from '../../theme/colors'

import { activityImagePaths } from '../../constants/activity-constants'

import { styles } from './asPopUp-styles'

interface IASPopUpProps {
  modalVisible: boolean
  setModalVisible: (isVisible: boolean) => void
  title: string
  progress: number
  description: string
}

export const ASPopUp = ({
  modalVisible,
  setModalVisible,
  title,
  progress,
  description,
}: IASPopUpProps) => {
  const handleOverlayPress = (e: GestureResponderEvent) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={activityImagePaths[title]} style={styles.modalImage} />
            <View style={styles.textContainer}>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalDescriptionText}>{description}</Text>
              <View style={styles.progressContainer}>
                <Text style={styles.modalProgressText}>{progress}%</Text>
                <Progress.Bar
                  progress={Number(progress) / 100}
                  height={12}
                  width={51}
                  style={styles.chart}
                  color={COLORS.secondary[500]}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
