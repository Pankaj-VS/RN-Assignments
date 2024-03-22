import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

import Header from '../../components/header/Header';
import { SPACING } from '../../theme/spacing';

import { newsLink } from '../../constants/webview-constants';

import { styles } from './news-styles';

const News=() => {
  return (
    <View style={{ flex: SPACING.space_1, backgroundColor: 'white' }}>
      <Header title={'News'} />

      <View style={styles.container}>
        <WebView source={{ uri: newsLink }} style={styles.subContainer} />
      </View>
    </View>
  );
};

export default News;
