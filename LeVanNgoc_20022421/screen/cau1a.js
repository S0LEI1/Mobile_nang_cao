import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Cau1A = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  });
  return (
    <View>
      <Animated.Text style={{ opacity: opacity, fontSize:30, fontWeight:"700" }}>
        You are Welcome
      </Animated.Text>
    </View>
  );
};

export default Cau1A;
