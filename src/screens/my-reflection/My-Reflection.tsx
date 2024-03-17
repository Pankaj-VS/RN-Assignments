import React, { useEffect, useState } from 'react';
import { ImageBackground, FlatList } from 'react-native'; 
import { styles } from './my-reflection-styles';
import { ASHeader } from '../../components/header/ASHeader';
import { leftIcon, bgImg } from '../../constants/common-constants';
import ASMyReflectionCard from '../../components/my-reflection-card/ASMyReflectionCard';
import { getMyReflectionCardData } from '../../services/api/get-my-reflection-card-data';
import { API } from '../../constants/api-constants'

const MyReflection: React.FC = () => {
  const [reflectionData, setReflectionData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyReflectionCardData(API.MYREFLECTION_API);
        if (response.success) {
          setReflectionData(response.data);
        } else {
          console.error('Error fetching data:', response.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
    >
      <ASHeader title='My Reflections' image={leftIcon} />
      <FlatList
        data={reflectionData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ASMyReflectionCard
            date={item.date}
            title={item.title}
          />
        )}
      />
    </ImageBackground>
  );
};

export default MyReflection;
