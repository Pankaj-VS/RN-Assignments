import { View, Text } from 'react-native'
import React from 'react'
import ASStatusBar from '../status-bar/ASStatusBar'
import { styles } from "./reflection-of-the-day-styles"
import { ASHeader2 } from '../header2/ASHeader2'
import { leftIconWhite } from '../../constants/common-constants'
import questionsData from './dummy-data'
import ASProgressBar from '../progress-bar/ASProgressBar'
import ASReflectionCard from '../reflection-card/ASReflectionCard'

const ReflectionOfTheDay = () => {
    return (
        <View style={styles.container} >
            <ASStatusBar />

            <ASHeader2 title={"Day 1"} image={leftIconWhite} />

            <ASProgressBar size={questionsData.length} />

            <View style={styles.subContainer1} >
                <ASReflectionCard question={questionsData} />
            </View>




        </View>
    )
}

export default ReflectionOfTheDay