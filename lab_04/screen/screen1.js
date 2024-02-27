import { View, Text, Pressable, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Screen1 = () => {
  const bottomMotion = useRef(new Animated.Value(-500)).current;
  const opacityValue = useRef(new Animated.Value(-1)).current;
  useEffect(() => {
    Animated.timing(opacityValue,{
        toValue:1,
        duration:5000,
        useNativeDriver:false
      }).start();
}, [opacityValue]);
  return (
    <View>
      <Pressable
        onPress={() => {
          Animated.timing(bottomMotion, {
            toValue: 200,
            duration: 5000,
            useNativeDriver: false,
          }).start();
        }}
        style={{
          width: 100,
          height: 30,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Click</Text>
      </Pressable>
      <Animated.View
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: bottomMotion,
            opacity: opacityValue,
        }}
      >
        <Text style={{fontSize:25, fontWeight:"900"}}>Click Message</Text>
      </Animated.View>
    </View>
  );
};

export default Screen1;
