import * as React from "react";
import { Dimensions, GestureResponderEvent, Pressable, StyleSheet, View } from "react-native";

import colors from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import MilestoneBackground from "../../assets/images/Milestone-Background.svg";
import MilestoneFlags from "../components/MilestoneFlags";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
console.log("Screen dimensions:", screenWidth, screenHeight);

export default function MilestonesScreen() {
  const themeContext = React.useContext(ThemeContext);

  // Get the current theme mode from the context
  // Optional chaining: if the themeContext is not available, default back to "light"
  const currentThemeMode = themeContext?.theme?.mode || "light";
  const activeColors = colors[currentThemeMode];

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
