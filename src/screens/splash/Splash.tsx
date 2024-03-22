import React from 'react';
import { View, Text, Image } from 'react-native';

import { virus } from '../../constants/splash-constants';

import { styles } from './splash-styles';

const Splash = () => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageTextContainer}>
                <View style={styles.imageContainer}>
                    <Image source={virus} style={styles.image} />
                </View>
                <Text style={styles.text}>COVSTATS</Text>

            </View>
            <Text style={styles.bottomText}>@Copyright COVSTATS 2020. All rights reserved</Text>

        </View>
    );
}

export default Splash;
