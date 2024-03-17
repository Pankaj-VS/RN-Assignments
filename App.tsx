import { SafeAreaView,View,StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator.tsx'

import Dashboard from './src/screens/dashboard/Dashboard.jsx'
import { showNotificationPage } from './src/constants/common-constants.ts'
import { Exercises } from './src/screens/exercises/Exercises.tsx'
import { Notifications } from './src/screens/notifications/Notifications.tsx'


{/* <SafeAreaView style={styles.container}>
  {showNotificationPage ? <Notifications /> : <Exercises />}
</SafeAreaView> */}
const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
