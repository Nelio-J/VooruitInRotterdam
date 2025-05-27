import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

type PrimaryButtonProps = {
  onPress: () => void;
  // children: React.ReactNode;
  // iconName?: string;
  // iconColor?: string;
  // iconSize?: number;
};

export default function PrimaryButton({ onPress }: PrimaryButtonProps) {
    const [fontsLoaded] = useNotoSerifFonts();
    const activeColors = useActiveColors();

    if (!fontsLoaded) return null;
    
    return (
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, { backgroundColor: activeColors.primaryButton }]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Complete task</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
        <View style={styles.buttonBackground} />
      </View>
    );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "relative",
    alignSelf: "center",
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    // marginVertical: 20,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "NotoSerif_700Bold",
    color: "white",
  },
  buttonIcon: {
    marginLeft: 10,
    alignSelf: "center",
  },
  buttonBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -3,
    borderRadius: 10,
    backgroundColor: "#9098A0",
    zIndex: 0,
  },
});