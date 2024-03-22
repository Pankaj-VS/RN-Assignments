import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { downwardButton } from '../../constants/home-constants';

import { styles } from './HomeCard-style';


interface Props {
    countryImage: string;
    countryName: string;
    cases: number;
}

const HomeCard = ({ countryImage, countryName, cases }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageTextContainer}>
                <Image style={styles.flag} source={{uri:countryImage}} />
                <Text>{countryName}</Text>
            </View>
            <View style={styles.numberTextContainer}>
                <Text style={styles.number}>{cases}</Text>
                <Image style={styles.upwardDownwardImage} source={downwardButton} />
            </View>
        </View>
    );
}

export default HomeCard;
