import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Notification, ShoppingCart } from "iconsax-react-native";
import { withTheme, useTheme } from "react-native-paper";
// import from 'react-native-vector-icons'
const Header = ({ children, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <View style={styles.iconsContainer}>
        <Text style={[styles.text, { color: theme.colors.onPrimary }]}>
          {children}
        </Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <ShoppingCart size="32" color={theme.colors.onPrimary} />
          </View>
          <View style={styles.iconContainer}>
            <Notification size="32" color={theme.colors.onPrimary} />
          </View>
        </View>
      </View>
      <Text style={{color: theme.colors.onPrimary}}>What do you want to learn today</Text>
    </View>
  );
};

export default withTheme(Header);

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 64,
    paddingHorizontal: 16,
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  iconContainer: {
    marginHorizontal: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
