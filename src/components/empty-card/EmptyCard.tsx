import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './EmptyCard-styles';

const EmptyCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/notifications.png')}
        style={styles.imageContainer}
        resizeMode="contain"></Image>
      <View style={styles.contentContainer}>
        <Text style={styles.headingContainer}>No notifications yet!</Text>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            You have no notifications right now.
          </Text>
          <Text style={styles.subHeading}>Come back later.</Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyCard;
