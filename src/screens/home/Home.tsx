import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import HomeCard from '../../components/home-card/HomeCard';
import fetchData from '../../services/api';
import Header from '../../components/header/Header';
import { SPACING } from '../../theme/spacing';

import { forwardButton, backwardButton } from '../../constants/home-constants';

import { styles } from './home-styles';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await fetchData();
        fetchedData.sort((a, b) => b.active - a.active);
        setData(fetchedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleForward = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleBackward = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const renderData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <FlatList
        data={currentData}
        renderItem={({item}) => (
          <HomeCard
            countryImage={item.countryInfo.flag}
            countryName={item.country}
            cases={item.active}
          />
        )}
        keyExtractor={item => item.country}
      />
    );
  };

  if (loading) {
    return (
      <View
        style={[
          styles.mainContainer,
          {justifyContent: 'center', alignItems: 'center'},
        ]}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{flex: SPACING.space_1, backgroundColor: 'white'}}>
      <Header title={'Home'} />

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.textButtonContainer}>
            <Text style={styles.title}>Live Reports</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleBackward}>
                <Image style={styles.button} source={backwardButton} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleForward}>
                <Image style={styles.button} source={forwardButton} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text2}>Top seven countries</Text>
          {renderData()}
        </View>
      </View>
    </View>
  );
};

export default Home;
