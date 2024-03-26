import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Cau2C = () => {
    const size = useRef(new Animated.Value(30)).current;
    const weight = useRef(new Animated.Value(300)).current;
    const value = useRef(new Animated.Value(0)).current;
    const color = value.interpolate({
        inputRange:[0,1],
        outputRange:["red", "green"]
    })
    useEffect(()=>{
        Animated.sequence([
            Animated.timing(size,{
                toValue:50,
                duration:2000,
                useNativeDriver:false
            }),
            Animated.timing(weight,{
                toValue:700,
                duration:2000,
                useNativeDriver:false
            }),
            Animated.timing(value,{
                toValue:1,
                duration:2000,
                useNativeDriver:false
            })
        ]).start()
    })
    return (
    <View>
        <Animated.Text style={{fontSize:size, fontWeight:weight, color:color}}>3 Animation</Animated.Text>
    </View>
  )
}

export default Cau2C