import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CustomButtons} from '../custom-button/CustomButtons';
import {COLORS} from '../../theme/colors';

import {imagePaths} from '../../constants/exercises-constants';

import {styles} from './ExerciseCard-styles';

interface CardType {
  item: {
    name: string;
  };
}

const getHeadingColor = (name: string): string => {
  switch (name) {
    case 'Outer Ring':
      return COLORS.secondary600;
    case 'Focus':
      return COLORS.primary700;
    case 'Follow':
      return COLORS.neutral700;
    case 'Scan':
      return COLORS.accent700;
    case 'Square':
      return COLORS.primary700;
    default:
      return COLORS.neutral700;
  }
};

export const ExerciseCard = ({item}: CardType) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePaths[item.name]}
        resizeMode="contain"
        style={styles.imageBackground}>
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.56)',
            'rgba(255, 255, 255, 0.124249)',
            'rgba(255, 255, 255, 0)',
          ]}
          locations={[0, 0.8792, 1]}
          style={styles.imageHeadingContainer}>
          <Text
            style={[styles.imageHeading, {color: getHeadingColor(item.name)}]}>
            {item.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
      <CustomButtons />
    </View>
  );
};
