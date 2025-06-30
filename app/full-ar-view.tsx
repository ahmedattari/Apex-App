import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { ArrowLeft, RotateCw, Maximize2, ZoomIn, ZoomOut } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function FullARViewScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source="https://cdn3d.iconscout.com/3d/premium/thumb/dna-structure-5349689-4468581.png"
        style={styles.arModel}
        contentFit="contain"
      />
      
      <SafeAreaView style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <RotateCw size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <ZoomIn size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <ZoomOut size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  arModel: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
  },
  header: {
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    gap: 16,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});