import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { withTheme, useTheme } from "react-native-paper";

const Carousel = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>PROJECT MANAGEMENT</Text>
      <Text style={styles.saleText}>20% OFF</Text>
      <Pressable style={styles.button}>
        <Text style={[styles.text,{color:theme.colors.onPrimary}]}>Join now</Text>
      </Pressable>
    </View>
  );
};

export default Carousel;
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "#fbc02d",
    marginHorizontal: 16,
    marginVertical: 12,
    padding:12
  },
  text:{
    fontSize:16,
  },
  saleText:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:12
  },
  button:{
    backgroundColor:'blue',
    padding:12,
    width:100,
    borderRadius:12,
    alignItems:'center'
  }
});
