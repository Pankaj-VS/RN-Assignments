import { SafeAreaView } from 'react-native'

import { showNotificationPage } from './src/constants/common-constants.ts'
import { Exercises } from './src/screens/exercises/Exercises.tsx'
import { Notifications } from './src/screens/notifications/Notifications.tsx'

import { styles } from './app-styles.ts'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {showNotificationPage ? <Notifications /> : <Exercises />}
    </SafeAreaView>
  )
}

export default App
