import { View, Text } from "react-native";
import React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import App from "./App";
import { name as appName } from "./app.json";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#663399",
    secondary: "#fbc02d",
    accent:"#fbc02d"
  },
};
const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

export default Main;
AppRegistry.registerComponent(appName, () => Main);
