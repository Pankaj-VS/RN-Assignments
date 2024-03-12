import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Image} from 'react-native';

import EmptyCard from '../../components/empty-card/EmptyCard';
import NotificationCard from '../../components/notification-card/NotificationCard';
import {NotificationData} from '../../types/notification-types';

import {API} from '../../constants/api-constants';

import {styles} from './notifications-styles';

const Notifications = () => {
  const [data, setData] = useState<NotificationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API.NOTIFICATIONS_API);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer} />
          <Text style={styles.title}>Notifications</Text>
          <Image
            source={require('../../assets/icons/setting.png')}
            style={styles.iconContainer}
            resizeMode="contain"
          />
        </View>
        <FlatList
          ListEmptyComponent={<EmptyCard />}
          style={styles.listContainer}
          data={data}
          renderItem={({item}) => <NotificationCard item={item} />}
        />
      </View>
    </View>
  );
};

export default Notifications;
