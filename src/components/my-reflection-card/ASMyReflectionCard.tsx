import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { rightIcon } from '../../constants/common-constants';
import { styles } from "./asMyReflectionCard-styles"

interface ASMyReflectionCardProps {
  date: string;
  title: string; 
}

const ASMyReflectionCard: React.FC<ASMyReflectionCardProps> = ({ date, title }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.subContainer1} >{date}</Text>
      <View style={styles.subContainer2} >
        <Text style={styles.text} >{title}</Text>
        <Image style={styles.img} source={rightIcon} />
      </View>
    </View>
  );
};

export default ASMyReflectionCard;
