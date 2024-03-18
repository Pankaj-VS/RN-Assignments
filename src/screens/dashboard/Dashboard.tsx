import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import ChallengeDetailsCard from '../../components/challenge-details-card/ASChallengeDeatilsCard'
import Header from '../../components/dashboard-header/ASDashboardHeader'
import MasteryOftheDayCard from '../../components/mastery-Of-The-Day-Card/ASMasteryOftheDayCard'
import { getChallengesData } from '../../services/api/get-challenges-data'
import ASLoader from '../../components/loader/ASLoader'

import { masteryCardDetails } from '../../constants/dashboard-constants'

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
            <ASLoader />
          ) : (
            <FlatList
              data={ChallengesData}
              renderItem={({ item }) => (
                <View style={styles.flatlistItem}>
                  <ChallengeDetailsCard ChallengeDetails={item} />
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </>
  )
}

export default Dashboard
