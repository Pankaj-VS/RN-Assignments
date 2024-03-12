import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {ExerciseCard} from '../../components/exercise-card/ExerciseCard';
import {ExerciseData} from '../../types/exercise-types';

import {API} from '../../constants/api-constants';

import {styles} from './exercises-styles';

export const Exercises = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData[]>([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetch(API.EXCERISES_API);
        const data = await response.json();
        setExerciseData(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchExerciseData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>D-active</Text>
      </View>
      <FlatList
        data={exerciseData}
        renderItem={({item}) => (
          <View style={styles.subContainer}>
            <ExerciseCard item={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.cardsContainer}
      />
    </View>
  );
};
