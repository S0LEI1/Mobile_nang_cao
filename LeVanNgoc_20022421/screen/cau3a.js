import { View, Text, Animated, PanResponder } from "react-native";
import React, { useRef } from "react";

const Cau3A = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const value = useRef(new Animated.Value(0)).current;
    const color = value.interpolate({
        inputRange:[0,1],
        outputRange:["red","green"]
    })
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
        Animated.timing(value,{
            toValue:1,
            duration:3000,
            useNativeDriver:false
        }).start()
      },
      onPanResponderRelease: (evt, gesture) => {
        reset();
      },
    })
  ).current;
  const reset = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [
            {
              translateX: position.x,
              translateY: position.y,
            },
          ],
          width: 100,
          height: 100,
          backgroundColor: color,
          borderRadius: 50,
        }}
      ></Animated.View>
    </View>
  );
};

export default Cau3A;
