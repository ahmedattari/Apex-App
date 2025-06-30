import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source="https://cdn-icons-png.flaticon.com/512/8637/8637114.png"
        style={styles.logo}
        contentFit="contain"
      />
      <View style={styles.loadingBar}>
        <View style={styles.loadingProgress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  loadingBar: {
    width: 100,
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
  },
  loadingProgress: {
    width: "70%",
    height: 4,
    backgroundColor: "#4285F4",
    borderRadius: 2,
  },
});