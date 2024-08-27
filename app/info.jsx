import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Header from "@/components/header";
import { useRouter, useLocalSearchParams } from "expo-router";

const Info = () => {
  const router = useRouter();
  const { data, imageUri } = useLocalSearchParams();
  const parsedData = JSON.parse(data);

  const deviceType =
    parsedData.eid === "EID NO: 4e:77:14:22:06:23" ? "CS500" : "CS100";

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.deviceImage}
          source={{ uri: imageUri || "https://via.placeholder.com/150" }}
        />

        {/* Serial Number and Product Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{parsedData.serialNo}</Text>
          <Text style={styles.sectionContent}>
            {parsedData[deviceType].product}
          </Text>
          <Text style={styles.sectionContent}>
            {parsedData[deviceType].description}
          </Text>
        </View>

        {/* Manufacturer Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Manufacturer</Text>
          <Text style={styles.sectionContent}>
            {parsedData[deviceType].manufacturer}
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          {Object.entries(parsedData[deviceType].features).map(
            ([key, value], index) => (
              <View key={index}>
                <Text style={styles.featureTitle}>{key}</Text>
                <Text style={styles.sectionContent}>{value}</Text>
              </View>
            )
          )}
        </View>

        {/* Ideal For */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ideal For</Text>
          {parsedData[deviceType].ideal_for.map((item, index) => (
            <Text key={index} style={styles.sectionContent}>
              • {item}
            </Text>
          ))}
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {parsedData[deviceType].benefits.map((item, index) => (
            <Text key={index} style={styles.sectionContent}>
              • {item}
            </Text>
          ))}
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
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
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
