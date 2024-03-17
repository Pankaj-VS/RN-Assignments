import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Header from '../../components/dashboard-header/ASDashboardHeader'

import { FlatList } from 'react-native-gesture-handler'
import ChallengeDeatilsCard from '../../components/challenge-details-card/ASChallengeDeatilsCard'
import MasteryOftheDayCard from '../../components/mastery-Of-The-Day-Card/ASMasteryOftheDayCard'

import { masteryCardDetails } from '../../constants/dashboard-constants'
import { getChallengesData } from '../../services/api/get-challenges-data'
import { styles } from './dashboard-styles'

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true)
  const [ChallengesData, setChallengesData] = useState([])

  useEffect(() => {
    getChallengesData(setLoading, setChallengesData)
  }, [])
  return (
    <>
      <Header />
      <View style={styles.masteryOftheDayCard}>
        <MasteryOftheDayCard masteryCardDetails={masteryCardDetails} />
      </View>
      <View style={styles.flatListContainer}>
        <View style={styles.FlatList}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={ChallengesData}
              renderItem={({ item }) => (
                <View style={styles.flatlistItem}>
                  <ChallengeDeatilsCard ChallengeDeatils={item} />
                </View>
              )}
            />
          )}
        </View>
      </View>
    </>
  )
}

export default Dashboard

// const styles = StyleSheet.create({})
