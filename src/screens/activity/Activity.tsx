import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ASHeader } from '../../components/header/ASHeader'
import { COLORS } from '../../theme/colors.ts'
import { Assesment } from './assessment/Assesment.tsx'
import { Progress } from './progress/Progress.tsx'

import { backGreen } from '../../constants/common-constants.ts'

import { styles } from './activity-styles'

export const Activity = () => {
  const [activeButton, setActiveButton] = useState<string>('progress')

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <>
      <ASHeader title="Your Activity" image1={backGreen} backgroundColor={COLORS.white} />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={[styles.button, activeButton === 'progress' && styles.activeButton]}
            onPress={() => handleButtonPress('progress')}>
            <Text style={[styles.text, activeButton === 'progress' && styles.activeText]}>
              Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeButton === 'assessment' && styles.activeButton]}
            onPress={() => handleButtonPress('assessment')}>
            <Text style={[styles.text, activeButton === 'assessment' && styles.activeText]}>
              Assessment
            </Text>
          </TouchableOpacity>
        </View>
        {activeButton === 'progress' ? <Progress /> : <Assesment />}
      </View>
    </>
  )
}
