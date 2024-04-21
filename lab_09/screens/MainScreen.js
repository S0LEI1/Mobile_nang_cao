import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Type from "../components/Type";
import  dummyButtonData from "../contants/dummyData";
import Button from "../components/Button";
const MainScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Header>Hello, Roise</Header>
      <Carousel />
      <Type>Categories</Type>
      <FlatList
        numColumns={2}
        data={dummyButtonData}
        renderItem={(item) => <Button src={item.item.src} name={item.item.name} />}
      />
      <Type>Popular courses</Type>
    </View>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
