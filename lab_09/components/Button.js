import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({src, name}) => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={src} />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  )
}

export default Button;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        padding:6,
        flex:1,
        margin:12,
        borderColor:"#F0F0F0"
    },
    image:{
        width:40,
        height:40,
        resizeMode:'stretch',
        marginRight:12
    },
    text:{
        fontSize:16
    }
})