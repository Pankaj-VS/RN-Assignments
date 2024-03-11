import {Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './cardComponent-styles';
import {Buttons} from './Buttons';
import LinearGradient from 'react-native-linear-gradient';

interface CardComponentProps {
  item: {
    name: string;
  };
}

const imagePaths: {[key: string]: number} = {
  'Outer Ring': require('../assets/images/NatureOuterRing.png'),
  'Focus': require('../assets/images/NatureFocus.png'),
  'Follow': require('../assets/images/NatureFollow.png'),
  'Scan': require('../assets/images/NatureScan.png'),
  'Square': require('../assets/images/NatureSquare.png'),
};

const getHeadingColor = (name: string): string => {
  switch (name) {
    case 'Outer Ring':
      return '#D72B6A';
    case 'Focus':
      return '#176E6D';
    case 'Follow':
      return '#292F36';
    case 'Scan':
      return '#B96204';
    case 'Square':
      return '#176E6D';
    default:
      return '#292F36';
  }
};

export const CardComponent = ({item}: CardComponentProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={imagePaths[item.name]}
        resizeMode="contain"
        style={styles.ImageBackground}>
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
      <Buttons />
      <Buttons />
      <Buttons />
    </View>
  );
};
