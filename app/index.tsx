import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Navbar */}
      <View style={styles.navbar}>
        <Image
          source={{ uri: "https://example.com/logo.png" }} // Replace with your logo URL or local path
          style={styles.logo}
        />
        <Text style={styles.navText}>Your Text Here</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome to Our App</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>This is the subtitle of the page.</Text>

      {/* Centered Image */}
      <Image
        source={require("../assets/images/image_ai-removebg-preview.png")} // Replace with your image URL or local path
        style={styles.centerImage}
      />

      {/* Button */}
      <Link href="/scan" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Another Page</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    width: 50,
    height: 50,
  },
  navText: {
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  centerImage: {
    marginTop: 75,
    width: "100%",
    height: 400,
    resizeMode: "contain",
    // marginVertical: 5,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "auto",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
