import * as React from "react";
import { ActivityIndicator, Dimensions, GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";

import useActiveColors from "@/app/components/activeColorsHook";
import useActivityProgress from "@/app/components/ActivityProgressHook";

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import MilestoneBackground from "../../assets/images/Milestone-Background.svg";
import MilestoneFlags from "../components/MilestoneFlags";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MilestonesStackParamList } from "../components/navigation/types";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
console.log("Screen dimensions:", screenWidth, screenHeight);

export interface completedActivitiesType {
  [milestoneId: string]: number;
}

export default function MilestonesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<MilestonesStackParamList, "MilestonesScreen">>();
  const activityProgress = useActivityProgress();
  const activeColors = useActiveColors();

  const [loading, setLoading] = React.useState(true);
  const [completedActivities, setCompletedActivities] = React.useState<completedActivitiesType>({});

  React.useEffect(() => {

    const runOnFocus = () => {    
      setLoading(true);
      console.log(loading);
      setTimeout(() => {
        const counts: completedActivitiesType = {};
        MilestoneFlags.forEach((flag) => {
          if (flag.milestoneId) {
            counts[flag.milestoneId] =
              activityProgress?.countCompletedActivities(flag.milestoneId) ?? 0;
          }
        });
        setCompletedActivities(counts)        
        setLoading(false);
      }, 500); // Simulate loading delay
    };

    // Run once on mount
    runOnFocus();

    const unsubscribe = navigation.addListener("focus", runOnFocus);

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, activityProgress]);

  console.log("Completed activities:", completedActivities);

  const handlePress = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;
    console.log("Tapped at", locationX, locationY);

    for (const flag of MilestoneFlags) {
      // Check if the tap coordinates fall within the flag's bounding box
      if (
        locationX >= flag.x &&
        locationX <= flag.x + flag.width &&
        locationY >= flag.y &&
        locationY <= flag.y + flag.height
      ) {
        console.log("Tapped on flag:", flag.id, "-> Navigating to milestone:", flag.milestoneId);

        if (flag.milestoneId !== undefined) {
          navigation.push("MicrogoalsOverviewScreen", {
            milestoneId: flag.milestoneId,
          });
        } else {
          console.warn("Flag milestoneId is undefined for flag:", flag.id);
        }
        return;
      }
    console.log("Tapped outside any defined flag area.");
  }
};

  if (loading) {
      return (
        <View style={[styles.container, { justifyContent: "center", alignItems: "center", backgroundColor: activeColors.secondary }]}>
          <ActivityIndicator size="large" color={activeColors.primary} />
        </View>
      );
    }

  return (
    <View
      style={[styles.container, { backgroundColor: activeColors.secondary }]}
    >
      <ReactNativeZoomableView
        contentWidth={screenWidth}
        contentHeight={screenHeight}
        minZoom={1}
        maxZoom={30}
        initialZoom={1}
        bindToBorders={true}
        zoomStep={0.5}
        disablePanOnInitialZoom={true}
      >
        <Pressable onPress={handlePress}>
          <MilestoneBackground />
        </Pressable>

        {MilestoneFlags.map((flag) => (
          flag.milestoneId && flag.progressTextX !== undefined && flag.progressTextY !== undefined && completedActivities[flag.milestoneId] >= 1 && flag.totalActivities !== undefined &&(
          <View
          key={flag.id}
          style={[
            styles.progressOverlay, { left: flag.progressTextX, top: flag.progressTextY }, { backgroundColor: completedActivities[flag.milestoneId] < flag.totalActivities ? activeColors.contrast : activeColors.secondary,}]}
          >  
          <Text style={styles.progressText}>
            {`${flag.milestoneId ? Math.round(((completedActivities[flag.milestoneId] || 0) / flag.totalActivities!) * 100) : 0}%`}
          </Text>
          </View>
          )
          ))}
      </ReactNativeZoomableView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  progressOverlay: {
    position: 'absolute',
    borderRadius: 5,
    padding: 5,
    transform: [{ translateX: -25 }, { translateY: 10 }]
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
