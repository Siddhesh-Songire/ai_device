import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../constants/Colors"; // Adjust the import path as needed

const Header = () => {
  return (
    <View style={styles.navbar}>
      <Image
        source={require("../assets/images/lg.png")} // Replace with your logo URL or local path
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.verticalText1}>ENGINEERING</Text>
        <Text style={styles.verticalText}>TOMORROW</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: Colors.PRIMARY,
  },
  logo: {
    width: 130,
    height: 50,
  },
  textContainer: {
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1.5,
  },
  verticalText1: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    letterSpacing: 1.5,
  },
});

export default Header;
