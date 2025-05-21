import * as React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MilestonstonesStack from "./StackNavigator";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import InformationScreen from "@/app/screens/InformationScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";

import colors from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const themeContext = React.useContext(ThemeContext);

    // Get the current theme mode from the context
    // Optional chaining: if the themeContext is not available, default back to "light"
    const currentThemeMode = themeContext?.theme?.mode || "light";
    const activeColors = colors[currentThemeMode]

  return (
    <Tab.Navigator
      initialRouteName="Milestones"
      screenOptions={{
        headerStyle: {
          backgroundColor: activeColors.primary,
        },
        headerTitle: "",
        tabBarStyle: {
          backgroundColor: activeColors.tabBackground,
          borderTopWidth: 0,
        },
        tabBarActiveBackgroundColor: activeColors.background,
        tabBarActiveTintColor: activeColors.active,
        tabBarInactiveTintColor: activeColors.inactive,
      }}
    >
      <Tab.Screen
        name="Milestones"
        component={MilestonstonesStack}
        options={{
          tabBarIcon: (tabInfo) => (
            (<FontAwesome5 
                name="road"
                size={25}
                color={
                  tabInfo.focused ? activeColors.active : activeColors.inactive
                } />)
          ),
        }}
      />

      <Tab.Screen name="Information" component={InformationScreen}
        options={{
          // headerLeft: () => {
          //   const navigation = useNavigation();
          //   return (
          //     <Pressable
          //       style={styles.backButton}
          //       onPress={() => navigation.goBack()}
          //     >
          //       <Ionicons
          //         name="arrow-back"
          //         size={25}
          //         color={activeColors.active}
          //       />
          //     </Pressable>
          //   )
          // },          
          tabBarIcon: (tabInfo) => (
            (<Ionicons 
                name="information-circle-outline" 
                size={30}
                color={
                  tabInfo.focused ? activeColors.active : activeColors.inactive
                } />)
          ),
        }}
      />

      <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          // headerLeft: () => {
          //   const navigation = useNavigation();
          //   return (
          //     <Pressable
          //       style={styles.backButton}
          //       onPress={() => navigation.goBack()}
          //     >
          //       <Ionicons
          //         name="arrow-back"
          //         size={25}
          //         color={activeColors.active}
          //       />
          //     </Pressable>
          //   )
          // },          
          tabBarIcon: (tabInfo) => (
            (<Ionicons 
                name="settings-outline" 
                size={28}
                color={
                  tabInfo.focused ? activeColors.active : activeColors.inactive
                } />)
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
    padding: 5,
  },
});

export default TabNavigator;