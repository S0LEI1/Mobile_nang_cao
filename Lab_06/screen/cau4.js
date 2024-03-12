import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";

const Cau4 = () => {
  const balloonPostion = useRef(new Animated.Value(200)).current;
  const balloonPostion2 = useRef(new Animated.Value(200)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const opacityValue2 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.sequence([
          Animated.parallel([
            Animated.timing(balloonPostion, {
              toValue: -200,
              duration: 5000,
              easing: Easing.bounce,
              useNativeDriver: false,
            }),
            Animated.timing(opacityValue, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: false,
            }),
          ]),
          Animated.timing(opacityValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
            Animated.parallel([
              Animated.timing(balloonPostion2, {
                toValue: -200,
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: false,
              }),
              Animated.timing(opacityValue2, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: false,
              }),
            ]),
            Animated.timing(opacityValue2, {
              toValue: 0,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
      ])
    ).start();
  }, []);
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Animated.Image
        style={{
          transform: [{ translateY: balloonPostion }],
          opacity: opacityValue,
          width: 200,
          height: 200,
        }}
        resizeMode="stretch"
        source={require("../assets/BB2.jpg")}
      />
      <Animated.Image
        style={{
          transform: [{ translateY: balloonPostion2 }],
          opacity: opacityValue2,
          width: 200,
          height: 200,
          position:'absolute'
        }}
        resizeMode="stretch"
        source={require("../assets/BB3.jpg")}
      />
    </View>
  );
};

export default Cau4;
