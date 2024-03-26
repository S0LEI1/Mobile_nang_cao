import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cau1A from "./screen/cau1a";
import Cau1B from "./screen/cau1b";
import Cau1C from "./screen/cau1c";
import Cau2 from "./screen/cau2";
import Cau2B from "./screen/cau2b";
import Cau2C from "./screen/cau2c";
import Cau3A from "./screen/cau3a";
import Cau3B from "./screen/cau3b";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Cau1A /> */}
      {/* <Cau1B /> */}
      {/* <Cau1C /> */}
      {/* <Cau2 /> */}
      {/* <Cau2B /> */}
      {/* <Cau2C /> */}
      <Cau3A />
      {/* < Cau3B /> */}
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
