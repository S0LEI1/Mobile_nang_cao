import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cau1A from './screen/cau1a';
import Cau1B from './screen/cau1b';
import Cau1C from './screen/cau1c';
import Cau2 from './screen/cau2';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Cau1A /> */}
      {/* <Cau1B /> */}
      {/* <Cau1C /> */}
      <Cau2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
