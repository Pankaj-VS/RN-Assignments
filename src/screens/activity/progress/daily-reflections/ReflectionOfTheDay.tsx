import React, { useState } from 'react'
import { Alert, Pressable, StatusBar, Text, TextInput, View } from 'react-native'

import { styles } from './reflectionOfTheDay-styles'
import { QuestionAnswer } from '../../../../types/activity-types'
import { data } from '../../../../constants/profile-constants'
import { COLORS } from '../../../../theme/colors'
import { ASHeader } from '../../../../components/header/ASHeader'
import { backWhite } from '../../../../constants/common-constants'
import * as Progress from 'react-native-progress'
import { Spacing } from '../../../../theme/spacing'

export const ReflectionOfTheDay = () => {
  const [idx, setIdx] = useState<number>(0)
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<QuestionAnswer[]>(
    data.map((item, index) => ({ question: item.question, answer: '' })),
  )

  const handlePrevious = () => {
    if (idx > 0) {
      setIdx(idx - 1)
    }
  }

  const handleNext = () => {
    if (idx < data.length - 1) {
      setIdx(idx + 1)
    }
  }

  const handleChangeText = (text: string) => {
    const updatedQuestionsAndAnswers = [...questionsAndAnswers]
    updatedQuestionsAndAnswers[idx].answer = text
    setQuestionsAndAnswers(updatedQuestionsAndAnswers)
  }

  const handleSubmit = () => {
    Alert.alert('Submitted Answer')
    console.log('--- Submitted Answers ---')
    for (const item of questionsAndAnswers) {
      console.log(`Question: ${item.question}`)
      console.log(`Answer: ${item.answer}`)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ASHeader
        title="Day 1"
        image1={backWhite}
        backgroundColor={COLORS.primary[600]}
        canGoToPrevoiusScreen={true}
        headerTextColor={COLORS.white}
      />
      <View>
        <View style={styles.subContainer1}>
          <Text style={styles.progressText}>
            {idx + 1}/{data.length}
          </Text>
        </View>
        <View style={styles.subContainer1}>
          <Progress.Bar
            style={styles.progressBar}
            progress={(idx + 1) / data.length}
            width={Spacing.space_300}
            height={Spacing.space_8}
            color={COLORS.primary[300]}
          />
        </View>
      </View>
      <View style={styles.subContainer1}>
        <View style={styles.subContainer2}>
          <View style={styles.subContainer3}>
            <Text style={styles.txt}>{questionsAndAnswers[idx].question}</Text>

            <TextInput
              style={styles.txt}
              placeholder="Type your answer here..."
              multiline={true}
              onChangeText={handleChangeText}
              value={questionsAndAnswers[idx].answer}
            />
          </View>

          <View style={styles.subContainer4}>
            {idx > 0 ? (
              <Pressable onPress={handlePrevious}>
                <Text style={styles.button}>Previous</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handlePrevious}>
                <Text style={styles.buttonInvisible}>Previous</Text>
              </Pressable>
            )}
            {idx !== data.length - 1 && (
              <Pressable onPress={handleNext}>
                <Text style={styles.button}>Next</Text>
              </Pressable>
            )}
            {idx === data.length - 1 && (
              <Pressable onPress={handleSubmit}>
                <Text style={styles.button}>Submit</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <View style={styles.subContainer1}>
        <View style={styles.effect1}></View>
      </View>
      <View style={styles.subContainer1}>
        <View style={styles.effect2}></View>
      </View>
    </View>
  )
}
