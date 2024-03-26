import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Cau1B = () => {
    const position = useRef(new Animated.Value(-100)).current;
    useEffect(()=>{
        Animated.timing(position,{
            toValue:500,
            duration:3000,
            useNativeDriver:false
        }).start()
    })
  return (
    <View>
      <Animated.Image
        source={require("../assets/ball.png")}
        style={{ width: 100, height: 100, transform:[{
            translateY: position
        }] }}
        resizeMode={"stretch"}
      />
    </View>
  );
};

export default Cau1B;
