import * as React from "react";
import { Dimensions, GestureResponderEvent, Pressable, StyleSheet, View } from "react-native";

import useActiveColors from "@/app/components/activeColorsHook";

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import MilestoneBackground from "../../assets/images/Milestone-Background.svg";
import MilestoneFlags from "../components/MilestoneFlags";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MilestonesStackParamList } from "../components/navigation/types";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
console.log("Screen dimensions:", screenWidth, screenHeight);



export default function MilestonesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<MilestonesStackParamList, "MicrogoalsOverviewScreen">>();
  const activeColors = useActiveColors();

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
      </ReactNativeZoomableView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
