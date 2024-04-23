import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import UserItem from "../components/UserItem";

const ProfileScreen = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    fetch("https://6626ff66b625bf088c0715ac.mockapi.io/user", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((user) => {
        // Do something with the list of tasks
        setUsersData(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(usersData[0].avatar);
  function renderUser(itemData){
    const item = itemData.item;
    return <UserItem imageUrl={item.avatar} name={item.name} job={item.job} description={item.description} isTop={item.isTop}/>
  }
  return (
    <View style={styles.screen}>
      <SearchComponent />
      <FlatList
        data={usersData}
        renderItem={renderUser}
      />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
