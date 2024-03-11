import {FlatList, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './exercises-styles';
import {CardComponent} from '../../components/CardComponent';

export const Exercises = () => {
  interface ExerciseData {
    name: string;
  }
  const [exerciseData, setExerciseData] = useState<ExerciseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://pankaj-vs.github.io/api2/SecondData.json',
        );
        const data = await response.json();
        setExerciseData(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.pageHeading}>
        <Text style={styles.headingText}>D-active</Text>
      </View>
      <FlatList
        data={exerciseData}
        renderItem={({item}) => (
          <View style={styles.cardsSubContainer}>
            <CardComponent item={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.cardsContainer}></FlatList>
    </View>
  );
};
