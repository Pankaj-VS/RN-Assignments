import {FlatList, Image, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Notification from './src/screens/notification/Notification.tsx';
import EmptyNotifications from './src/components/EmptyNotifications.tsx';
import {Exercises} from './src/screens/notification/Exercises.tsx';
import {styles} from './app-styles.ts';
interface notificationData {
  imageName: string;
  notification: string;
  status: boolean;
  timeOfCreation: string;
}

const App = () => {
  const [data, setData] = useState<notificationData[]>([]);
  const [notificationPage, setNotificationPage] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://pankaj-vs.github.io/api1/FirstData.json',
        );
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
      {notificationPage ? (
        <View style={styles.subContainer}>
          <View style={styles.navContainer}>
            <Image
              source={require('./src/assets/icons/I_invisible.png')}
              style={styles.iconContainer}
              resizeMode="contain"></Image>
            <Text style={styles.title}>Notifications</Text>
            <Image
              source={require('./src/assets/icons/I_setting.png')}
              style={styles.iconContainer}
              resizeMode="contain"></Image>
          </View>
          <FlatList
            ListEmptyComponent={EmptyNotifications}
            style={styles.listContainer}
            data={data}
            renderItem={({item}) => <Notification item={item} />}
          />
        </View>
      ) : (
        <Exercises />
      )}
    </View>
  );
};

export default App;
