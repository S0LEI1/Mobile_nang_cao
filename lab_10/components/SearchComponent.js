import { View, Text, TextInput, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import { Filter, SearchNormal } from 'iconsax-react-native'

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchNormal />
        <TextInput placeholder='Search' />
      </View>
      <Filter />
    </View>
  )
}
export default SearchComponent
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container:{
    // flexDirection:'row',
    width:deviceWidth
  },
  searchContainer:{
    flexDirection:'row',
    backgroundColor:"#F0F0F0"
  }
})