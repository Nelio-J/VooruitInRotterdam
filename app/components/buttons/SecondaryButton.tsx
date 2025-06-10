import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

type ActivityButtonProps = {
  onPress: () => void;
  // children: React.ReactNode;
  // iconName?: string;
  // iconColor?: string;
  // iconSize?: number;
};

export default function SecondaryButton({ onPress }: ActivityButtonProps) {
    const [fontsLoaded] = useNotoSerifFonts();
    const activeColors = useActiveColors();

    if (!fontsLoaded) return null;
    
    return (
      <Pressable style={[styles.button, {backgroundColor: activeColors.alt_text}]} onPress={onPress}>
        <Text style={[styles.buttonText, { color: activeColors.text }]}>
          Complete task
        </Text>
        <Ionicons
          name="checkbox-outline"
          size={24}
          color={activeColors.text}
          style={styles.buttonIcon}
        />
      </Pressable>
    );
};

const styles = StyleSheet.create({
  button: {
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