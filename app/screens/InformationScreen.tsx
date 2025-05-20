import * as React from "react";
import { Text, View } from "react-native";

import colors from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";

export default function InformationScreen() {
  const themeContext = React.useContext(ThemeContext);

  // Get the current theme mode from the context
  // Optional chaining: if the themeContext is not available, default back to "light"
  const currentThemeMode = themeContext?.theme?.mode || "light";
  const activeColors = colors[currentThemeMode];

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
