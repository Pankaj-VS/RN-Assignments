import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {styles} from './emptyNotifications-styles'

const EmptyNotifications = () => {
  return (
    <View style={styles.noNotificationsContainer}>
      <Image
        source={require('../assets/images/EmptyNotifications.png')}
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

export default EmptyNotifications;