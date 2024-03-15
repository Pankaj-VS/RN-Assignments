import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { showNotificationPage } from './src/constants/common-constants.ts'
import { Exercises } from './src/screens/exercises/Exercises.tsx'
import { Notifications } from './src/screens/notifications/Notifications.tsx'

import { styles } from './app-styles.ts'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {showNotificationPage ? <Notifications /> : <Exercises />}
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
