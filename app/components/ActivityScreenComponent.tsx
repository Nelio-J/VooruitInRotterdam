import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import MicrogoalImages from "@/app/components/MicrogoalsImagesComponent";
import { Ionicons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";

import { MilestonesStackParamList } from "@/app/components/navigation/types";

import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";
import { SafeAreaView } from "react-native-safe-area-context";

const TestData = {
  category: "Language",
  title: "Language Activity",
  content: "This is the description of the language activity. It provides details about what the activity entails and how to complete it.",
  image: require("@/assets/images/app-logo.png"),
};

import { RouteProp } from "@react-navigation/native";

type ActivityScreenRouteProp = RouteProp<MilestonesStackParamList, 'ActivityScreen'>;

export default function ActivityScreen() {
  const [fontsLoaded] = useNotoSerifFonts();
  const activeColors = useActiveColors();
  const route = useRoute<ActivityScreenRouteProp>();
  const { id, category, title, content, image } = route.params ?? {};
  console.log("ActivityScreen params:", { id, category, title, content, image });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: activeColors.activityBackgroundLanguage }]}
    >
      <MicrogoalImages name={category ?? "Language"} style={{ width: "100%", height: "25%" }} />
      <View style={[styles.titleContainer, { backgroundColor: activeColors.activityAccentLanguage }]}>
        <Text style={styles.title}>{category}</Text>
      </View>
      <View style={styles.contentContainer}>
        
        <View style={styles.headerRow}>
          <Text style={styles.H1}> {title} </Text>
          <Pressable style={[styles.listenWrapper, {backgroundColor: activeColors.alt_text}]}>
            <Text style={[styles.listenButton, {color: activeColors.text}]}>Listen</Text>
            <Ionicons name="volume-high" size={24} color={activeColors.text} style={styles.listenIcon} />
          </Pressable>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
          <View style={styles.textImageRow}>
            <Text style={styles.content}>
              {content}
            </Text>
            
            {image && (
            <View style={styles.imageWrapper}>
              <Image source={image} style={styles.contentImage} />
            </View>
            )}
          </View>

            <Text style={styles.content}>
              This is an image related to the activity. It helps illustrate the content and provides visual context.
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          
          <Text style={styles.content}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={[styles.buttonText, { color: activeColors.text }]}>
                Complete task            
              </Text>              
              <Ionicons name="checkbox-outline" size={24} color={activeColors.text} style={styles.buttonIcon}/>
            </Pressable>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 20,
    top: -50,
    marginBottom: -20,
    marginRight: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "right",
  },
  contentContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "flex-start",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  H1: {
    fontSize: 24,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "left",
    marginRight: "auto",
    maxWidth: "70%",
  },
  listenWrapper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listenButton: {
    fontSize: 20,
    fontFamily: "NotoSerif_400Regular",
    textAlign: "right",
  },
  listenIcon: {
    marginLeft: 5,
    alignSelf: "center",
  },
  scrollView: {
  },
  textImageRow: {
    flexDirection: "row",
    // alignItems: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    minWidth: 0, // Allow text to shrink if needed
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    marginRight: 10,
  },
  imageWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    maxWidth: "50%",
  },
  contentImage: {
    width: "100%",
    height: undefined, // This will be set by the aspectRatio
    aspectRatio: 1,
    resizeMode: "contain",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    position: "sticky",
  },
  button: {
    backgroundColor: "white",    
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "NotoSerif_700Bold",
  },
  buttonIcon: {
    marginLeft: 10,
    alignSelf: "center",
  },
});
