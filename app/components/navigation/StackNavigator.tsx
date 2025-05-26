import * as React from "react";
import { Pressable, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import { MilestonesStackParamList } from "./types";

import MicrogoalsOverviewScreen from "@/app/screens/Milestones/MicrogoalsOverviewScreen";
import LanguageActivityScreen from "@/app/screens/Milestones/Milestone_1_first_steps/LanguageActivity";
import MilestonesScreen from "@/app/screens/MilestonesScreen";

import colors from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";

const Stack = createNativeStackNavigator<MilestonesStackParamList>();

export default function MilestonesStack() {
  const themeContext = React.useContext(ThemeContext);

  // Get the current theme mode from the context
  // Optional chaining: if the themeContext is not available, default back to "light"
  const currentThemeMode = themeContext?.theme?.mode || "light";
  const activeColors = colors[currentThemeMode];

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
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={activeColors.button}
                />
              </Pressable>
            );
          },
        })}
      />
      <Stack.Screen
        name="LanguageActivityScreen"
        component={LanguageActivityScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={activeColors.button}
                />
              </Pressable>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
    padding: 5,
  },
});