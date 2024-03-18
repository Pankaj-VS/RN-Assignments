import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ReflectionOfTheDay } from '../../screens/activity/progress/daily-reflections/ReflectionOfTheDay.tsx'
import { MyReflections } from '../../screens/activity/progress/my-reflections/MyReflections.tsx'
import { StackNavigatorParams } from '../../types/stackNavigator-types.ts'
import TabNavigator from '../tab-navigator/TabNavigator.tsx'

const Stack = createStackNavigator<StackNavigatorParams>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />

      <Stack.Screen
        name="MyReflections"
        component={MyReflections}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />

      <Stack.Screen
        name="ReflectionOfTheDay"
        component={ReflectionOfTheDay}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
