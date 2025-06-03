import { MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces";
import * as React from "react";
import { Linking, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    minWidth: 0, // Allow text to shrink if needed
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    marginRight: 10,
  },
  link: {
    textDecorationLine: "underline",
  },
});

export const MilestoneData1: MilestoneDataInterface = {
  milestoneId: "milestone_1_first_steps",
  milestoneTitle: "Milestone 1",
  milestoneSubtitle: "The first steps",
  activities: [
     {
    id: "m1-language",
    milestoneId: "milestone1",
    category: "Language",
    title: "Language Activity",
    content: "This is the description of the language activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the language activity. It provides more context and information about the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "m1-rotterdam",
    milestoneId: "milestone1",
    category: "Rotterdam",
    title: "Rotterdam Activity",
    content: "This is the description of the Rotterdam activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the Rotterdam activity. It provides more context and information about the activity.",
  },
  {
    id: "m1-integration",
    milestoneId: "milestone1",
    category: "Integration",
    title: "Important terms",
    content: "",
    image: "",
    contentExtra: `3 words that you are gonna hear a lot:
    \u2022 Inburgering 
    \u2022 Gemeente 
    \u2022 Taalles`,
  },
    {
    id: "m1-social",
    milestoneId: "milestone1",
    category: "Social",
    title: "Activities in the camp",
    content: <Text style={[styles.content]}>Mano offers fun and helpful activities in the camp. <></> <Text onPress={() => Linking.openURL('https://welkominrotterdam.com/')} style={styles.link}>View this week's activities</Text></Text>,
    image: "",
    contentExtra: "Take a look and find an activity in the camp that looks interesting for you to join!",
  },
  ]
}