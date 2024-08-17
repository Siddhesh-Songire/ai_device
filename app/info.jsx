import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/header";

const Info = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.deviceImage}
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with your device image URL
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Name</Text>
          <Text style={styles.sectionContent}>My Device</Text>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Model Specification</Text>
          <Text style={styles.sectionContent}>Model XYZ</Text>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Release Details</Text>
          <Text style={styles.sectionContent}>Released in 2023</Text>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <Text style={styles.sectionContent}>
            This device is equipped with the latest technology.
          </Text>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/input")}
        >
          <Text style={styles.buttonText}>Scan Again</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  deviceImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  section: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#E2000F",
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
