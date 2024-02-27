import { View, Text, Pressable, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Screen1 = () => {
  const bottomMotion = useRef(new Animated.Value(-500)).current;
  const opacityValue = useRef(new Animated.Value(-1)).current;
  const sencondText = useRef(new Animated.Value(50)).current;
  useEffect(() => {
    Animated.timing(opacityValue,{
        toValue:1,
        duration:5000,
        useNativeDriver:false
      }).start();
}, [opacityValue]);
  return (
    <View>
        <Animated.View style={{bottom: sencondText}}>
            <Text style={{fontSize:20, fontWeight:'500'}}>Second Text</Text>
        </Animated.View>
      <Pressable
        onPress={() => {
            Animated.sequence([
                Animated.timing(bottomMotion, {
                  toValue: 70,
                  duration: 3000,
                  useNativeDriver: false,
                }),
            Animated.timing(sencondText,{
                toValue:200,
                duration:3000,
                useNativeDriver:false
            })
            ]).start();
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
      <Pressable onPress={()=>{
        Animated.timing(bottomMotion).stop();
        Animated.timing(opacityValue).stop();
        Animated.timing(sencondText).stop();
      }} style={{
          width: 100,
          height: 30,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          marginTop:10
        }}>
        <Text>Stop</Text>
      </Pressable>
      <Animated.View
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: bottomMotion,
            opacity: opacityValue,
        }}
      >
        <Text style={{fontSize:20, fontWeight:"500"}}>Click Message</Text>
      </Animated.View>
    </View>
  );
};

export default Screen1;
