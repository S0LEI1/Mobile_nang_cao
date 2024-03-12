import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cau4 from "./screen/cau4";

export default function App() {
  return (
    <View style={styles.container}>
      <Cau4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
