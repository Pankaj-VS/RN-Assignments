import React from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../../screens/dashboard/Dashboard'
import { Exercises } from '../../screens/exercises/Exercises'
import { Activity } from '../../screens/activity/Activity'
import { Notifications } from '../../screens/notifications/Notifications'
import { Profile } from '../../screens/profile/Profile'
import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<TabNavigatorParams>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={require('../../assets/icons/home.png')}
                style={styles.icon}
                resizeMode={ResizeMode.contain}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image source={require('../../assets/icons/exercise.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image source={require('../../assets/icons/activity.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image source={require('../../assets/icons/notification.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={styles.icon}
                resizeMode={ResizeMode.contain}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
