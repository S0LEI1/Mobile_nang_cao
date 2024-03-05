import {
  View,
  Text,
  Animated,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useRef } from "react";

const Cau3 = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const spinCircleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const colorValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  const spinCircle = spinCircleValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const changeColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["green", "red"],
  });
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  });
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinCircleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: -1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ bottom: 10, position: "absolute", right: 0 }}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Image
            source={require("../assets/bell.png")}
            resizeMode="stretch"
            style={{ width: 50, height: 50 }}
          />
        </Animated.View>
      </View>
      <Animated.View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ rotate: spinCircle }],
        }}
      >
        <Text>y</Text>
      </Animated.View>
      <View style={{ marginTop: 10 }}>
        <Animated.View style={{ opacity: opacityValue }}>
          <TextInput
            placeholder="Username"
            style={{ borderWidth: 1, borderColor: "black", margin: 5 }}
          />
          <TextInput
            placeholder="Password"
            style={{ borderWidth: 1, borderColor: "black", margin: 5 }}
          />
        </Animated.View>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              Animated.timing(opacityValue, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false,
              }).start();
            }}
            style={{ margin: 5, borderWidth: 1, padding: 5 }}
          >
            <Text>Show</Text>
          </Pressable>
          <Pressable style={{ margin: 5, borderWidth: 1, padding: 5 }}>
            <Text>Login</Text>
          </Pressable>
          <Pressable style={{ margin: 5, borderWidth: 1, padding: 5 }}>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Animated.Text style={{ color: changeColor, fontSize:25 }}>Hoan Thanh Cau 3</Animated.Text>
      </View>
    </View>
  );
};

export default Cau3;
