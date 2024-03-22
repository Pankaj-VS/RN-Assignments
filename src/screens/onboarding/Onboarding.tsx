import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import { styles } from './onboarding-styles'

import { fever, difficultBreathing, couging, feverDescription, difficultBreathingDescription, cougingDescription } from '../../constants/onboarding-constants';


const AppOnboarding = ({ navigation }) => {
  return (
    <Onboarding

      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}

      pages={[
        {
          backgroundColor: '#fff',
          image: <Image style={styles.image} source={fever} />,
          title: 'Fever',
          subtitle: feverDescription,

        },
        {
          backgroundColor: '#fff',
          image: <Image style={styles.image} source={couging} />,
          title: 'Cough',
          subtitle: cougingDescription
        },
        {
          backgroundColor: '#fff',
          image: <Image style={styles.image} source={difficultBreathing} />,
          title: 'Breathing Difficulty',
          subtitle: difficultBreathingDescription,
        },

      ]}
    />
  );
}

export default AppOnboarding;
