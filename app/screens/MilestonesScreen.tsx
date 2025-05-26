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
        console.log("Tapped on flag:", flag.id);
        // on tap --> navigate to the flag's details screen
        if (flag.screenToNavigateTo === "MicrogoalsOverviewScreen") {
          // If MicrogoalsOverviewScreen needs 'id' and 'category'
          navigation.push("MicrogoalsOverviewScreen", {
            id: flag.targetCategoryId || flag.id,
            category: flag.targetCategoryId || "DefaultCategory",
          });
        } else if (flag.screenToNavigateTo) {
          // Fallback for screens that expect `undefined` or no params
          // Use a type assertion to tell TypeScript it's OK to call with no second argument
          // for screens defined as `ScreenName: undefined;` in your ParamList
          navigation.push(flag.screenToNavigateTo as any); // Use 'as any' as a last resort if you can't satisfy strict types
                                                              // OR ensure your ParamList defines these screens as `ScreenName: undefined;`
        }
        return;
      }
    }
    console.log("Tapped outside any defined flag area.");
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
