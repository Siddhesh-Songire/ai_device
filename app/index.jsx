import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Colors } from "../constants/Colors";
import Header from "@/components/header";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.containerview}>
        <StatusBar style="light" backgroundColor="#E2000F" />

        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>This is the subtitle of the page.</Text>
        <Image
          source={require("../assets/images/image_ai-removebg-preview.png")}
          style={styles.centerImage}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/input")}
        >
          <Text style={styles.buttonText}>Go to Another Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerview: {
    flex: 1,
    // backgroundColor: "#fff",
    padding: 20,
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
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "auto",
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
