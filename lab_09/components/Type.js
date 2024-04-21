import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Type = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Text style={{opacity:0.75}}>View more</Text>
    </View>
  )
}

export default Type;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:16
    },
    text:{
        fontSize:16,
        fontWeight:'bold'
    }
})