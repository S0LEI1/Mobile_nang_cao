import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainScreen from "./screens/MainScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
      <View style={styles.container}>
        <MainScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    // justifyContent:'center'
  },
});
