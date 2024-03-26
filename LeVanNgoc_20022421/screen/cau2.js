import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const Cau2 = () => {
  const value = useRef(new Animated.Value(0)).current;
  const spin = value.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(value, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  });

  return (
    <View>
      <Animated.View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          transform: [
            {
              rotate: spin,
            },
          ],
        }}
      ></Animated.View>
    </View>
  );
};

export default Cau2;
