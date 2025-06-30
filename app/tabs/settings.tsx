import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { ChevronRight, User, Bell, Moon, Languages, Headphones } from "lucide-react-native";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile header */}
        <View style={styles.profileHeader}>
          <Image
            source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"
            style={styles.profileImage}
            contentFit="cover"
          />
          <Text style={styles.profileName}>Ahmed Raza</Text>
          <Text style={styles.profileInfo}>Grade 11 • Science</Text>
        </View>

        {/* Account section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: "#E3F2FD" }]}>
              <User size={20} color="#4285F4" />
            </View>
            <Text style={styles.menuItemText}>Profile Settings</Text>
            <ChevronRight size={20} color="#9E9E9E" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: "#EDE7F6" }]}>
              <Bell size={20} color="#9C27B0" />
            </View>
            <Text style={styles.menuItemText}>Notifications</Text>
            <ChevronRight size={20} color="#9E9E9E" />
          </TouchableOpacity>
        </View>

        {/* Preferences section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: "#FFF3E0" }]}>
              <Moon size={20} color="#FF9800" />
            </View>
            <Text style={styles.menuItemText}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#E0E0E0", true: "#BBDEFB" }}
              thumbColor={isDarkMode ? "#4285F4" : "#FFFFFF"}
            />
          </View>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: "#E8F5E9" }]}>
              <Languages size={20} color="#4CAF50" />
            </View>
            <Text style={styles.menuItemText}>Language</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.valueText}>English</Text>
              <ChevronRight size={20} color="#9E9E9E" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Support section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: "#FFEBEE" }]}>
              <Headphones size={20} color="#F44336" />
            </View>
            <Text style={styles.menuItemText}>Help Center</Text>
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
  profileHeader: {
    alignItems: "center",
    padding: 24,
    paddingBottom: 32,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#212121",
    marginBottom: 4,
  },
  profileInfo: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#757575",
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#212121",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    marginRight: 8,
  },
});