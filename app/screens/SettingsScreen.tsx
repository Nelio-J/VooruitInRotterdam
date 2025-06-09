import * as React from "react";
import { Alert, Button, Text, View } from "react-native";

import useActiveColors from "@/app/components/activeColorsHook";
import useActivityProgress from "@/app/components/ActivityProgressHook";

const ASYNC_STORAGE_PROGRESS_KEY = "ActivityProgressKeyV2";

export default function SettingsScreen() {
  const activeColors = useActiveColors();
  const activityProgress = useActivityProgress();

  const handleClearStorage = async () => {
    await activityProgress?.clearAllProgress();
    Alert.alert("Progress cleared", "All saved progress has been removed.");
  };


  return (
    <View
      style={{
        backgroundColor: activeColors.secondary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/settings.tsx to edit this screen.</Text>
      <Button title="Reset Progress" color={activeColors.primary} onPress={handleClearStorage} />
    </View>
  );
}
