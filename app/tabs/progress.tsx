import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Progress</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>This Week</Text>
          </TouchableOpacity>
        </View>

        {/* Learning time card */}
        <View style={styles.timeCard}>
          <View>
            <Text style={styles.timeLabel}>Learning Time</Text>
            <Text style={styles.timeValue}>12.5 hrs</Text>
            <View style={styles.timeCompare}>
              <Text style={styles.timeCompareText}>↑ 23% more than last week</Text>
            </View>
          </View>
          <View style={styles.timeIcon}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/2784/2784459.png" }}
              style={{ width: 24, height: 24 }}
              contentFit="contain"
            />
          </View>
        </View>

        {/* Stats cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png" }}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.statLabel}>Lessons</Text>
            <Text style={styles.statValue}>24</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: "#E8F5E9" }]}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/5290/5290058.png" }}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.statLabel}>Completed</Text>
            <Text style={styles.statValue}>18</Text>
          </View>
        </View>

        {/* Subject progress */}
        <View style={styles.subjectSection}>
          <Text style={styles.sectionTitle}>Subject Progress</Text>
          
          {/* Physics progress */}
          <View style={styles.subjectCard}>
            <View style={styles.subjectHeader}>
              <View style={styles.subjectIconContainer}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/3722/3722225.png" }}
                  style={{ width: 24, height: 24 }}
                  contentFit="contain"
                />
              </View>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>Physics</Text>
                <Text style={styles.subjectChapters}>8 of 12 chapters</Text>
              </View>
              <Text style={styles.subjectPercentage}>67%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "67%", backgroundColor: "#4285F4" }]} />
            </View>
          </View>
          
          {/* Biology progress */}
          <View style={styles.subjectCard}>
            <View style={styles.subjectHeader}>
              <View style={[styles.subjectIconContainer, { backgroundColor: "#E8F5E9" }]}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/2941/2941522.png" }}
                  style={{ width: 24, height: 24 }}
                  contentFit="contain"
                />
              </View>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>Biology</Text>
                <Text style={styles.subjectChapters}>6 of 10 chapters</Text>
              </View>
              <Text style={styles.subjectPercentage}>60%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "60%", backgroundColor: "#4CAF50" }]} />
            </View>
          </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  filterText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#212121",
  },
  timeCard: {
    backgroundColor: "#4285F4",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#E3F2FD",
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 28,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  timeCompare: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeCompareText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#E3F2FD",
  },
  timeIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#EDE7F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#212121",
  },
  subjectSection: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
    marginBottom: 16,
  },
  subjectCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  subjectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  subjectIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#212121",
  },
  subjectChapters: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
  },
  subjectPercentage: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
});