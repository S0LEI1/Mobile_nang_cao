import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const UserItem = ({ imageUrl, name, job, description, isTop }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="stretch" source={{uri: imageUrl}} />
        </View>
        <View>
            <Text>{name}</Text>
            <Text>{job}</Text>
            <Text>{description}</Text>
        </View>
      </View>
      <View>
        {
            isTop === true && <Text>Top Performer</Text>
        }
      </View>
    </View>
  );
};

export default UserItem;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:12,
        padding:12,
        borderWidth:1,
        borderColor:"#3E454C",
        overflow:'hidden'
    },
    itemContainer:{
        flexDirection:"row",
        padding:12,
    },
    imageContainer:{
        width:50,
        height:50,
        borderRadius:30
    },
    image:{
        width:"100%",
        height:"100%",
    }
})
