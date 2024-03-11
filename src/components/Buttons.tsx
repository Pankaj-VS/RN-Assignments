import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './buttons-styles';
import LinearGradient from 'react-native-linear-gradient';

export const Buttons = () => {
  return (
    <LinearGradient
    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={styles.buttonContainer}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>2min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>4min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>8min</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};
