import { ImageBackground, StatusBar, StyleSheet, Text, View, Image,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import {COLORS} from '../../theme/colors'


import { Spacing } from '../../theme/spacing'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ChallengeDeatilsCard from './challenge-details-card/ChallengeDeatilsCard';
import MasteryOftheDayCard from './masteryOfTheDayCard/MasteryOftheDayCard';
import { FlatList } from 'react-native-gesture-handler'


const overthinkerGrey = require('../../assets/icons/overthinkerGrey.png')
const dActive = require('../../assets/images/dActive.png')
const reflection = require('../../assets/images/reflection.png')
const reminder = require('../../assets/images/reminder.png')

import { getChallengesData } from '../../services/api/get-challenges-data'
import {styles} from './dashboard-styles'
interface IChallengeDeatilsCard{
  img:any
  ,subheading:string
  ,heading:string
  ,timmingDetails:string
,iscompleted:boolean,
isfavourateMasked:boolean
,backgroundColor:string

}
interface IChallengeDeatil{
  
    id: number,
    title: string
    isFav: boolean
    startingTime: string,
    endingTime: string,
    isCompleted: boolean

}

const masteryCardDetails:IChallengeDeatilsCard={
  img:overthinkerGrey

  ,subheading:"Listen"
  ,heading:'Mastery of the day'
  ,timmingDetails:'6am to 9am'
,iscompleted:true,
isfavourateMasked:true
,backgroundColor:COLORS.primary[50],

}


const endpointOfChallenges:string='https://65f40eaf105614e654a1d144.mockapi.io/dashboard/getCards'
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [ChallengesData,setChallengesData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65f40eaf105614e654a1d144.mockapi.io/dashboard/getCards');
        const data = await response.json();
        setChallengesData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        // console.log(ChallengesData)x
      }
    };
  
    fetchData();
  }, [])
  return (
    <>
      <Header/>
      <View style={styles.MasteryOftheDayCard}>

      <MasteryOftheDayCard masteryCardDetails={masteryCardDetails} />
      </View>
      <View style={styles.flatListContainer}>
      <View style={styles.FlatList}>
      {isLoading ? (
        <ActivityIndicator />
      ) :
      <FlatList 
          data={ChallengesData}
          renderItem={({item})=><View style={{justifyContent:'center',gap:16,marginBottom:16,borderRadius:16}}><ChallengeDeatilsCard ChallengeDeatils={item}/></View>}

      />
}
      </View>
      </View>
    </>
  )
}

export default Dashboard

// const styles = StyleSheet.create({})
