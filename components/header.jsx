import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "@/constants/Colors";

const Header = () => {
  return (
    <View style={styles.navbar}>
      <Image
        source={require("../assets/images/lg.png")} // Replace with your logo URL or local path
        style={styles.logo}
      />
      <Text style={styles.navText}>Your Text Here</Text>
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
  navText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Header;
