import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigator } from '../tab-navigator/TabNavigator.tsx'
import { StackNavigatorParams } from '../../types/stackNavigator-types.ts'

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
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}/>
        
      <Stack.Screen
        name="MyReflections"
        component={TabNavigator}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
