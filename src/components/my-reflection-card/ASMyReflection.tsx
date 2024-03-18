import React from 'react';
import { Image, Text, View } from 'react-native';

import { rightIcon } from '../../constants/common-constants';

interface ReflectionCardProps {
    date: string;
    title: string;
  }

import { styles } from './asMyReflection';



const ASMyReflection = ({ date, title }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subContainer1}>{date}</Text>
      <View style={styles.subContainer2}>
        <Text style={styles.title}>{title}</Text>
        <Image source={rightIcon} style={styles.img} />
      </View>
    </View>
  );
};

export default ASMyReflection;
