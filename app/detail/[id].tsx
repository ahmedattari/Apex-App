import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { ArrowLeft, RotateCw, Maximize2, Volume2 } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

// Mock data for DNA Structure
const dnaStructureData = {
  id: "dna-structure",
  title: "DNA Structure",
  subject: "Biology",
  chapter: "Chapter 4",
  image: "https://cdn3d.iconscout.com/3d/premium/thumb/dna-structure-5349689-4468581.png",
  sections: [
    {
      id: 1,
      title: "Double Helix Structure",
      content: "The DNA molecule consists of two strands that coil around each other to form a spiral called a double helix."
    },
    {
      id: 2,
      title: "Base Pairs",
      content: "Nucleotide bases pair up with each other: A with T, and C with G to form units called base pairs."
    },
    {
      id: 3,
      title: "Backbone",
      content: "Each DNA strand has a backbone made of alternating sugar (deoxyribose) and phosphate groups."
    },
    {
      id: 4,
      title: "Complementary Strands",
      content: "The two DNA strands are complementary to each other, running in opposite directions (antiparallel)."
    }
  ]
};

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // In a real app, you would fetch data based on the ID
  // For this example, we're using mock data
  const data = dnaStructureData;

  const handleFullARView = () => {
    router.push("/full-ar-view");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.modelContainer}>
        <Image
          source={data.image}
          style={styles.modelImage}
          contentFit="contain"
        />
        <View style={styles.modelControls}>
          <TouchableOpacity style={styles.modelControlButton}>
            <RotateCw size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.modelControlButton}
            onPress={handleFullARView}
          >
            <Maximize2 size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subject} • {data.chapter}</Text>
          <TouchableOpacity style={styles.audioButton}>
            <Volume2 size={20} color="#4285F4" />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.sectionsContainer} showsVerticalScrollIndicator={false}>
          {data.sections.map((section) => (
            <View key={section.id} style={styles.sectionItem}>
              <View style={styles.sectionNumber}>
                <Text style={styles.sectionNumberText}>{section.id}</Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionText}>{section.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modelContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modelImage: {
    width: "100%",
    height: "100%",
  },
  modelControls: {
    position: "absolute",
    bottom: 16,
    right: 16,
    flexDirection: "row",
  },
  modelControlButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    position: "absolute",
    top: 32,
    left: 0,
  },
  audioButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionsContainer: {
    flex: 1,
  },
  sectionItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  sectionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginTop: 2,
  },
  sectionNumberText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#4285F4",
  },
  sectionContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    lineHeight: 22,
  },
});