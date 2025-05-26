import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import { MilestonesStackParamList } from "./types";

import ActivityScreen from "@/app/components/ActivityScreenComponent";
import MicrogoalsOverviewScreen from "@/app/screens/Milestones/MicrogoalsOverviewScreen";
import MilestonesScreen from "@/app/screens/MilestonesScreen";

import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

const Stack = createNativeStackNavigator<MilestonesStackParamList>();

export default function MilestonesStack() {
  const [fontsLoaded] = useNotoSerifFonts();
  const activeColors = useActiveColors();

  if (!fontsLoaded) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: activeColors.primary,
        },
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="MilestonesScreen"
        component={MilestonesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MicrogoalsOverviewScreen"
        component={MicrogoalsOverviewScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={activeColors.button}
                  style={styles.backButton}
                />
                <Text style={styles.backTitle}>Return</Text>
              </Pressable>
            );
          },
        })}
      />
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={activeColors.button}
                  style={styles.backButton}
                />
                <Text style={styles.backTitle}>Return</Text>
              </Pressable>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    borderColor: "white",
    borderWidth: 2,
    padding: 1,
  },
  backTitle: {
    fontSize: 14,
    fontFamily: "NotoSerif_600SemiBold",
    color: "white",
    marginLeft: 10,
  }
});