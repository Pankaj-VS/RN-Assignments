import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

import Header from '../../components/header/Header';

import { educationLink } from '../../constants/webview-constants';

import styles from './education-styles';

const Education: React.FC = () => {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <Header title={"Education"} />
            <View style={styles.container}>
                <WebView
                    source={{ uri: educationLink }}
                    style={styles.subContainer}
                />
            </View>
        </View>
    );
};

export default Education;
