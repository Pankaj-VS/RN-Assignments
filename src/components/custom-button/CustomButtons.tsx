import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {buttonsTime} from '../../constants/exercises-constants';

import {styles} from './CustomButtons-styles';

export const CustomButtons = () => {
  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.container}>
      {buttonsTime.map((time, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.button}>
            <Text style={styles.text}>{time}min</Text>
          </View>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};
