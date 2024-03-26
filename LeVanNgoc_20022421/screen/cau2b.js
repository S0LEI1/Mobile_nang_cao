import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const Cau2B = () => {
  const value = useRef(new Animated.Value(0)).current;
  const color = value.interpolate({
    inputRange: [0, 0.4, 0.8, 1],
    outputRange: ["green", "red", "purple", "yellow"],
  });
  useEffect(() => {
      Animated.timing(value, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      }).start();
  });

  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: color,
        }}
      ></Animated.View>
    </View>
  );
};

export default Cau2B;
