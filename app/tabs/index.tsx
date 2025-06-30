import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRight, Play } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleQuickScan = () => {
    router.push("/ar-scanner");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User greeting section */}
        <View style={styles.headerSection}>
          <View style={styles.userInfo}>
            <Image
              source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"
              style={styles.avatar}
              contentFit="cover"
            />
            <View>
              <Text style={styles.greeting}>Hello, Ahmed</Text>
              <Text style={styles.subGreeting}>Ready to learn?</Text>
            </View>
          </View>
          
          {/* Current progress card */}
          <View style={styles.progressCard}>
            <View>
              <Text style={styles.progressLabel}>Current Progress</Text>
              <Text style={styles.progressTitle}>Biology Chapter 4</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Play size={24} color="#4285F4" />
            </TouchableOpacity>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Quick actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} onPress={handleQuickScan}>
            <View style={[styles.actionIcon, { backgroundColor: "#A388F8" }]}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/685/685655.png" }}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.actionText}>Quick Scan</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: "#4285F4" }]}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png" }}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.actionText}>My Models</Text>
          </TouchableOpacity>
        </View>

        {/* Recent lessons */}
        <View style={styles.recentLessons}>
          <Text style={styles.sectionTitle}>Recent Lessons</Text>
          
          <TouchableOpacity style={styles.lessonCard}>
            <View style={[styles.lessonIcon, { backgroundColor: "#E8F5E9" }]}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/3722/3722225.png" }}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            </View>
            <View style={styles.lessonInfo}>
              <Text style={styles.lessonTitle}>Atomic Structure</Text>
              <Text style={styles.lessonSubtitle}>Physics • Chapter 3</Text>
            </View>
            <ChevronRight size={20} color="#9E9E9E" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.lessonCard}>
            <View style={[styles.lessonIcon, { backgroundColor: "#E3F2FD" }]}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2941/2941522.png" }}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            </View>
            <View style={styles.lessonInfo}>
              <Text style={styles.lessonTitle}>DNA Replication</Text>
              <Text style={styles.lessonSubtitle}>Biology • Chapter 4</Text>
            </View>
            <ChevronRight size={20} color="#9E9E9E" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerSection: {
    backgroundColor: "#4285F4",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  subGreeting: {
    color: "#E3F2FD",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  progressCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  progressLabel: {
    color: "#E3F2FD",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  progressTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 3,
  },
  progressFill: {
    width: "70%",
    height: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
  },
  quickActions: {
    flexDirection: "row",
    padding: 20,
    gap: 15,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#212121",
  },
  recentLessons: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
    marginBottom: 16,
  },
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  lessonIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#212121",
  },
  lessonSubtitle: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
  },
});