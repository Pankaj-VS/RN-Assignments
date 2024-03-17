import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { showNotificationPage } from './src/constants/common-constants.ts'
import { Exercises } from './src/screens/exercises/Exercises.tsx'
import { Notifications } from './src/screens/notifications/Notifications.tsx'
import MyReflection from './src/screens/my-reflection/My-Reflection.tsx'
import ReflectionOfTheDay from './src/components/reflection-of-the-day/ReflectionOfTheDay.tsx'

import { styles } from './app-styles.ts'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* {showNotificationPage ? <Notifications /> : <Exercises />} */}
        <MyReflection/>
        {/* <Notifications/> */}
        {/* <ReflectionOfTheDay /> */}
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
