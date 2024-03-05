import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Cau1 = () => {
  const opacityValue = useRef(new Animated.Value(-1)).current;
  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [opacityValue]);
  return (
    <View>
      <Animated.View
        style={{
          opacity: opacityValue,
        }}
      >
        <Text>Cau 1</Text>
        <Text>Hoan Thanh Cau 1</Text>
      </Animated.View>
    </View>
  );
};

export default Cau1;
