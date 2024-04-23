import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  return (
    <View style={styles.container}>

      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:32,
    backgroundColor: "#fff",
  },
});
