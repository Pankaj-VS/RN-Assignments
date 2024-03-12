import {SafeAreaView} from 'react-native';

import Notifications from './src/screens/notifications/Notifications.tsx';
import {Exercises} from './src/screens/exercises/Exercises.tsx';

import {styles} from './app-styles.ts';

const App = () => {
  const showNotificationPage: boolean = true;

  return (
    <SafeAreaView style={styles.container}>
      {showNotificationPage ? <Notifications /> : <Exercises />}
    </SafeAreaView>
  );
};

export default App;
