import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator, // Import ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/header";

export default function Input() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const API_URL =
    "https://ai-base-device-backend.azurewebsites.net/image/process";

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 5],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const proceedImage = async () => {
    if (!image) {
      Alert.alert("No Image", "Please upload or capture an image first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", {
      uri: image,
      name: "imageName.jpg",
      type: "image/jpeg",
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      router.push({
        pathname: "/info",
        params: { data: JSON.stringify(data), imageUri: image },
      });
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "Failed to upload image. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Upload or Capture Image</Text>
        <TouchableOpacity style={styles.imageInput} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Tap to upload image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Capture Image"
              onPress={captureImage}
              color="#E2000F"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Proceed" onPress={proceedImage} color="#E2000F" />
          </View>
        </View>
        {loading && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#E2000F" />
            <Text style={styles.loadingText}>Uploading...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2000F",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageInput: {
    width: "100%",
    height: 300,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  imagePlaceholder: {
    color: "#aaa",
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonWrapper: {
    width: "80%",
    marginVertical: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
});
