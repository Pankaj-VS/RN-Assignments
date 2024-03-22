import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

import Header from '../../components/header/Header';

import { discoveryLink } from '../../constants/webview-constants';

import styles from './discovery-styles';

const Discovery=() => {
    return (
        <View style={{flex: 1, backgroundColor: "white"}} >
            <Header title={"Discovery"} />
            <View style={styles.container}>
                <WebView
                    source={{ uri: discoveryLink }}
                    style={styles.subContainer}
                />
            </View>
        </View>
    );
};

export default Discovery;
