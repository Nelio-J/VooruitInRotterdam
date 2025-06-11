import * as React from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import MicrogoalImages from "@/app/components/MicrogoalsImagesComponent";
import { Ionicons } from "@expo/vector-icons";
import SecondaryButton from "../../components/buttons/SecondaryButton";

import { RouteProp, useNavigation } from "@react-navigation/native";

import { MilestonesStackParamList } from "@/app/components/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useActivityProgress from "@/app/components/ActivityProgressHook";
import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

type ActivityScreenRouteProp = RouteProp<MilestonesStackParamList, 'ActivityScreen'>;
type ActivityScreenNavigationProp = NativeStackNavigationProp<MilestonesStackParamList, 'ActivityScreen'>;

export default function ActivityScreen({ route }: { route: ActivityScreenRouteProp }) {
  const [fontsLoaded] = useNotoSerifFonts();
  const activeColors = useActiveColors();
  const activityProgress = useActivityProgress();
  
  const navigation = useNavigation<ActivityScreenNavigationProp>();

  // Extract parameters from the route. If the route params are not defined, use an empty object to avoid errors.
  const { id, milestoneId, category, title, content, image, contentExtra } = route.params ?? {};
  // console.log("ActivityScreen params:", { id, milestoneId, category, title, content, image, contentExtra });

  const completeActivity = () => {
    if (id) {
      activityProgress?.markActivityAsCompleted(milestoneId, id);
      navigation.navigate("ActivityCompletionScreen");
    }
    else {
      console.warn("No activity ID provided to completeActivity.");
    }
  }

  if (!fontsLoaded) return null;

  // Switch statement to determine colors based on the category
  let activityBackgroundColor;
  let activityAccentColor;
  let titleBackgroundColor;
  let titleColor;
  let textColor;

  switch (category) {
    case "Language":
      activityBackgroundColor = activeColors.activityBackgroundLanguage;
      activityAccentColor = activeColors.activityAccentLanguage;
      titleBackgroundColor = activeColors.text
      titleColor = activeColors.text;
      textColor = activeColors.text;
      break;
    case "Rotterdam":
      activityBackgroundColor = activeColors.activityBackgroundRotterdam;
      activityAccentColor = activeColors.activityAccentRotterdam;
      titleBackgroundColor = activeColors.contrast
      titleColor = activeColors.alt_text;
      textColor = activeColors.text;
      break;
    case "Integration":
      activityBackgroundColor = activeColors.activityBackgroundIntegration;
      activityAccentColor = activeColors.activityAccentIntegration;
      titleBackgroundColor = activeColors.contrast
      titleColor = activeColors.alt_text;
      textColor = activeColors.text;
      break;
    case "Social":
      activityBackgroundColor = activeColors.activityBackgroundSocial;
      activityAccentColor = activeColors.activityAccentSocial;
      titleBackgroundColor = activeColors.text
      titleColor = activeColors.text;
      textColor = activeColors.alt_text;
      break;
    case "Work":
      activityBackgroundColor = activeColors.activityBackgroundWork;
      activityAccentColor = activeColors.activityAccentWork;
      titleBackgroundColor = activeColors.text
      titleColor = activeColors.alt_text;
      textColor = activeColors.text;
      break;
    default:
      activityBackgroundColor = activeColors.activityAccentRotterdam;
      activityAccentColor = activeColors.activityAccentRotterdam;
      titleBackgroundColor = activeColors.contrast;
      titleColor = activeColors.alt_text;
      textColor = activeColors.text;
      break;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: activityBackgroundColor }]}
    >
      <MicrogoalImages name={category ?? "Language"} style={{ width: "100%", height: "25%" }} alt={""} />
      <View style={styles.titleContainerWrapper}>
      <View style={[styles.titleContainer, { backgroundColor: activityAccentColor }]}>
        <Text style={[styles.title, { color: titleColor }]}>{category}</Text>
      </View>
      <View style={[styles.titleContainerBackground, { backgroundColor: titleBackgroundColor }]} />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <View style={styles.headerRow}>
          <Text style={[styles.H1, { color: textColor }]}>{title}</Text>
          <Pressable style={[styles.listenWrapper, {backgroundColor: activeColors.alt_text}]}
           onPress={() => {
            Alert.alert("Listen to activity", "This feature is not yet implemented.");
          }}>
            <Text style={[styles.listenButton, {color: activeColors.text}]}>Listen</Text>
            <Ionicons name="volume-high" size={24} color={activeColors.text} style={styles.listenIcon} />
          </Pressable>
        </View>
        
          <View style={styles.textImageRow}>
            <Text style={[styles.content, { color: textColor }]}>
              {content}
            </Text>
            
            {image && (
            <View style={styles.imageWrapper}>
              <Image
                source={
                  // If image is a string, wrap it in an object with uri. Otherwise use the image object directly. 
                  typeof image === "string" ? { uri: image } : image
                }
                style={styles.contentImage}
                alt=""
              />
            </View>
            )}
          </View>

            <Text style={[styles.content, { color: textColor }]}>
              {contentExtra || ""}
            </Text>
        
          <View style={styles.buttonContainer}>
            <SecondaryButton onPress={completeActivity} />
          </View>
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  titleContainerWrapper: {
    position: "relative",
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: -20,
    top: -50,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "flex-end",
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 20,
    zIndex: 1,
    // top: -50,
    // marginBottom: -20,
    // marginRight: 20,
  },
  titleContainerBackground: {
    position: "absolute",
    top: 0,
    left: -1,
    right: 0,
    bottom: -3,
    borderRadius: 50,
    zIndex: 0,
  },
  title: {
    fontSize: 28,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "right",
  },
  contentContainer: {
    paddingHorizontal: 10,
    gap: 10,
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
    marginRight: 10,
  },
  imageWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    maxWidth: "50%",
  },
  contentImage: {
    width: "95%",
    height: undefined, // This will be set by the aspectRatio
    aspectRatio: 1,
    resizeMode: "contain",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    position: "sticky",
  },
  // button: {
  //   backgroundColor: "white",    
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignSelf: "center",
  //   alignItems: "center",
  //   paddingHorizontal: 25,
  //   paddingVertical: 15,
  //   borderRadius: 10,
  //   borderColor: "black",
  //   borderWidth: 2,
  //   marginVertical: 20,
  // },
  // buttonText: {
  //   fontSize: 18,
  //   fontFamily: "NotoSerif_700Bold",
  // },
  // buttonIcon: {
  //   marginLeft: 10,
  //   alignSelf: "center",
  // },
});
