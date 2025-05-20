import * as React from "react";
import { Pressable, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import MicrogoalsOverviewScreen from "@/app/screens/Milestones/MicrogoalsOverviewScreen";
import MilestonesScreen from "@/app/screens/MilestonesScreen";

import colors from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";

const Stack = createNativeStackNavigator();

export default function MilestonesStack() {
  const themeContext = React.useContext(ThemeContext);

  // Get the current theme mode from the context
  // Optional chaining: if the themeContext is not available, default back to "light"
  const currentThemeMode = themeContext?.theme?.mode || "light";
  const activeColors = colors[currentThemeMode];

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Milestones"
        component={MilestonesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MicrogoalsOverviewScreen"
        component={MicrogoalsOverviewScreen}
        options={{
          headerShown: false,
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={activeColors.active}
                />
              </Pressable>
            );
          },
        }}
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