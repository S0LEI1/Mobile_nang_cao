import { View, Text, Animated, PanResponder } from "react-native";
import React, { useRef } from "react";

const Cau3A = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
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
          backgroundColor: "red",
          borderRadius: 50,
        }}
      ></Animated.View>
    </View>
  );
};

export default Cau3A;
