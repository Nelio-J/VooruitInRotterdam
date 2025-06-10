import * as React from "react";
import { Text, View } from "react-native";

import useActiveColors from "@/app/components/activeColorsHook";

export default function InformationScreen() {
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
      <Text>Edit app/information.tsx to edit this screen.</Text>
    </View>
  );
}
