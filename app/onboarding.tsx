import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "Learn with AR Technology",
    description: "Transform your learning experience with interactive AR models and AI-powered guidance",
    image: "https://img.freepik.com/free-vector/augmented-reality-concept-illustration_114360-4852.jpg",
  },
  {
    id: 2,
    title: "Scan Your Textbooks",
    description: "Point your camera at any textbook page to unlock interactive 3D models and explanations",
    image: "https://img.freepik.com/free-vector/augmented-reality-isometric-composition-with-human-characters-during-ar-glasses-testing-with-editable-text-vector-illustration_1284-82582.jpg",
  },
  {
    id: 3,
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed analytics and personalized recommendations",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/login");
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  const currentItem = onboardingData[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      {currentIndex < onboardingData.length - 1 && (
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={handleSkip}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
      
      <View style={styles.imageContainer}>
        <Image
          source={currentItem.image}
          style={styles.image}
          contentFit="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{currentItem.title}</Text>
        <Text style={styles.description}>{currentItem.description}</Text>
        
        <View style={styles.indicatorContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>
            {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  skipButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#757575",
  },
  imageContainer: {
    height: "60%",
    width: width,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#212121",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    textAlign: "center",
    lineHeight: 24,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 24,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 24,
    backgroundColor: "#4285F4",
  },
  nextButton: {
    height: 56,
    backgroundColor: "#4285F4",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
});