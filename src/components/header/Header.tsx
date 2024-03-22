import React from 'react';
import { View, Text, Image } from 'react-native';

import { hamburgerIcon, userIcon } from '../../constants/header-constants';

import { styles } from './header-styles';


interface Props {
    title: string;
}

const Header = ({ title }) => {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.hamburger} source={hamburgerIcon} />
            <Text style={styles.text}>{title}</Text>
            <Image style={styles.user} source={userIcon} />
        </View>
    );
}

export default Header;
