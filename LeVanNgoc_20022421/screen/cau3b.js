import { View, Text, Animated, PanResponder, Dimensions } from "react-native";
import React, { useRef } from "react";

const Cau3B = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const width = Dimensions.get("window").width;
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
        if (gesture.dx > -width * 0.25 || gesture.dx < width * 0.25) {
          swip();
        }
      },
    })
  ).current;
  const swip = () => {
    Animated.spring(position, {
      toValue: {
        x: -width * 5,
        y: 0,
      },
      useNativeDriver: false,
    }).start();
  };
  const reset = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.Image
        {...panResponder.panHandlers}
        source={require("../assets/ball.png")}
        resizeMode={"stretch"}
        style={{
          transform: [
            {
              translateX: position.x,
              translateY: position.y,
            },
          ],
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

export default Cau3B;
