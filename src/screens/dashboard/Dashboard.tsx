import React, { useEffect, useState ,} from 'react'
import { ActivityIndicator, View ,FlatList} from 'react-native'

import ChallengeDetailsCard from '../../components/challenge-details-card/ASChallengeDeatilsCard'
import Header from '../../components/dashboard-header/ASDashboardHeader'
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
                  <ChallengeDetailsCard ChallengeDetails={item} />
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


