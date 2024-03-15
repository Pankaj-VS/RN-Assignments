import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator.tsx'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
