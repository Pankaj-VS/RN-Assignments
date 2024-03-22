import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View, Image } from 'react-native'

import WreckerCard from '../wrecker-card/ASWreckerCard'
import { getWreckerData } from '../../services/api/get-wrecker-data'

import { nextWhiteButtonIcon } from '../../constants/assesment-constants'

import { styles } from './asTop-wrecker-style'

const TopWrecker = () => {
  const [isLoadingWreckerData, setLoadingWreckerData] = useState<boolean>(true)
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
      <View style={styles.SubDetailsContainer}>
        <Text style={styles.SubDetailsText}>View All Wreckers</Text>
        <Image style={styles.nextButtonIcon} source={nextWhiteButtonIcon} />
      </View>
    </View>
  )
}

export default TopWrecker
