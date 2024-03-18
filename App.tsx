import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './src/navigation/stack-navigator/StackNavigator.tsx'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" translucent />
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
