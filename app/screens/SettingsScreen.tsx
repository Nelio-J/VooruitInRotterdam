import * as React from "react";
import { Text, View } from "react-native";

import { useActiveColors } from "@/app/components/activeColorsHook";

export default function SettingsScreen() {
  const activeColors = useActiveColors();

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
    </View>
  );
}
