import { View, Text, Animated } from 'react-native'
import React,{useRef, useEffect} from 'react'

const Cau1C = () => {
    const position = useRef(new Animated.Value(-100)).current;
    useEffect(()=>{
        Animated.spring(position,{
            toValue:200,
            friction:2,
            tension:100
        }).start()
    })

  return (
    <View>
      <Animated.View style={{width:50, height:50, backgroundColor:'red', transform:[{
        translateY: position
      }]}}></Animated.View>
    </View>
  )
}

export default Cau1C