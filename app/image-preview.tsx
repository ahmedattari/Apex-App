import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { ArrowLeft, Check, X, Loader } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ImagePreviewScreen() {
  const { imageUri } = useLocalSearchParams();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState("");

  const handleProcessImage = async () => {
    setIsProcessing(true);
    setProcessingStatus("Analyzing image...");
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessingStatus("Identifying content...");
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessingStatus("Generating 3D model...");
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to detail screen after processing
      router.push("/detail/dna-structure");
    } catch (error) {
      console.error("Error processing image:", error);
      setIsProcessing(false);
      setProcessingStatus("Error processing image. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
          disabled={isProcessing}
        >
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Image Preview</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={styles.previewImage}
          contentFit="cover"
        />
      </View>
      
      {isProcessing ? (
        <View style={styles.processingContainer}>
          <ActivityIndicator size="large" color="#4285F4" />
          <Text style={styles.processingText}>{processingStatus}</Text>
        </View>
      ) : (
        <View style={styles.actionContainer}>
          <Text style={styles.instructionText}>
            Is this image clear and properly framed?
          </Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.actionButton, styles.rejectButton]}
              onPress={() => router.back()}
            >
              <X size={24} color="#F44336" />
              <Text style={[styles.buttonText, styles.rejectText]}>Retake</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.actionButton, styles.confirmButton]}
              onPress={handleProcessImage}
            >
              <Check size={24} color="#4CAF50" />
              <Text style={[styles.buttonText, styles.confirmText]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
  },
  placeholder: {
    width: 40,
  },
  imageContainer: {
    flex: 1,
    padding: 16,
  },
  previewImage: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
  },
  actionContainer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  instructionText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#212121",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  rejectButton: {
    backgroundColor: "#FFEBEE",
  },
  confirmButton: {
    backgroundColor: "#E8F5E9",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  rejectText: {
    color: "#F44336",
  },
  confirmText: {
    color: "#4CAF50",
  },
  processingContainer: {
    padding: 24,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  processingText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#212121",
    marginTop: 16,
    textAlign: "center",
  },
});