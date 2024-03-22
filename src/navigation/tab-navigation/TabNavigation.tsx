import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/home/Home';
import Map from '../../screens/map/Map';
import Education from '../../screens/education/Education';
import Discovery from '../../screens/discovery/Discovery';
import News from '../../screens/news/News';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabScreenOptions = {
    tabBarActiveTintColor: '#FF647C',
    tabBarInactiveTintColor: '#999999',
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Map' component={Map} />
        <Tab.Screen name='Education' component={Education} />
        <Tab.Screen name='Discovery' component={Discovery} />
        <Tab.Screen name='News' component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
