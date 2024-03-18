import React, { useState, useEffect } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { ASHeader } from '../../../components/header/ASHeader';
import ASMyReflection from '../../../components/my-reflection-card/ASMyReflection';
import { getMyReflectionCardData } from '../../../services/api/get-my-reflection-card-data';
import { ReflectionCard } from '../../../types/reflection-card-types';

import { leftIcon, myReflectionBackgroundImage } from '../../../constants/common-constants';
import { API } from '../../../constants/api-constants';
import { styles } from './myReflection-styles';

const MyReflection= () => {
  const [data, setData] = useState<ReflectionCard[]>([]);

  const fetchData = async () => {
    const response = await getMyReflectionCardData(API.MYREFLECTION_API);
    if (response.success) {
      setData(response.data);
    } else {
      console.error(response.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={myReflectionBackgroundImage} style={styles.mainContainer} resizeMode='stretch'>
        <ASHeader image={leftIcon} title='My Reflection' />

        <FlatList
          data={data}
          keyExtractor={(item: ReflectionCard, index: number) => index.toString()}
          renderItem={({ item }) => (
            <ASMyReflection date={item.date} title={item.title} />
          )}
          ListEmptyComponent={<Text>No data available !!!</Text>}
        />
      </ImageBackground>
    </View>
  );
};

export default MyReflection;
