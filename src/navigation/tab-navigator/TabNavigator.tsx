import React from 'react'
import { Image } from 'react-native'
import { ResizeMode } from '../../constants/common-constants.ts'
import { Exercises } from '../../screens/exercises/Exercises.tsx'
import { Notifications } from '../../screens/notifications/Notifications.tsx'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../../screens/dashboard/Dashboard.tsx'
import Activity from '../../screens/assesment/Assesment.tsx'
import Profile from '../../screens/profile/Profile.tsx'
import { COLORS } from '../../theme/colors.ts'

import { styles } from './tabNavigator.ts'

const Tab = createBottomTabNavigator()
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: COLORS.primary[100],
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/home.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />

      <Tab.Screen
        name="D-Active"
        component={Exercises}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/exercise.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/activity.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/notification.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
