import { View, Text, Pressable } from "react-native";
import React, { useRef } from "react";
import { Animated } from "react-native-web";

const Cau2 = () => {
  const value = useRef(new Animated.Value(300)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          bottom: value,
          position: "absolute",
          alignSelf: "center",
        }}
      >
        <Text>Hinh vuong</Text>
      </Animated.View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Pressable
          onPress={() => {
            Animated.timing(value, {
              toValue: 400,
              duration: 3000,
              useNativeDriver: false,
            }).start();
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            marginRight: 10,
          }}
        >
          <Text>Start</Text>
        </Pressable>
        <Pressable
          onPress={() => {Animated.timing(value).stop();}}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            marginRight: 10,
          }}
        >
          <Text>Stop</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Animated.timing(value, {
                toValue: 300,
                duration: 0,
                useNativeDriver: false,
              }).start();
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
          }}
        >
          <Text>Restart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cau2;
