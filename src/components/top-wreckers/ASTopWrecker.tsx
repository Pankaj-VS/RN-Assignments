import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import WreckerCard from '../wrecker-card/ASWreckerCard'

import { Image } from 'react-native-elements'
import { getWreckerData } from '../../services/api/get-wrecker-data'
import { styles } from './asTop-wrecker-style'
const nextButtonIcon = require('../../assets/icons/next.png')
const TopWrecker = () => {
  const [isLoadingWreckerData, setLoadingWreckerData] = useState(true)
  const [wreckerData, setWreckerData] = useState([])
  useEffect(() => {
    getWreckerData(setWreckerData, setLoadingWreckerData)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Your Top Wreckers</Text>
      </View>
      <View style={styles.topWreckers}>
        {isLoadingWreckerData ? (
          <ActivityIndicator />
        ) : (
          wreckerData.map((data, index) => <WreckerCard key={index} data={data} />)
        )}
      </View>
      <View style={styles.SubdetailsContainer}>
        <Text style={styles.SubdetailsText}>View All Wreckers</Text>
        <Image style={styles.nextButtonIcon} source={nextButtonIcon} />
      </View>
    </View>
  )
}

export default TopWrecker
