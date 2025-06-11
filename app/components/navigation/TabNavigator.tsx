import * as React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabParamList } from "./types";
import { TabParamList } from "./types";

import InformationScreen from "@/app/screens/InformationScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";
import MilestonstonesStack from "./StackNavigator";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import MilestonstonesStack from "./StackNavigator";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import useActiveColors from "@/app/components/activeColorsHook";

const Tab = createBottomTabNavigator<TabParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const activeColors = useActiveColors();

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
        tabBarActiveBackgroundColor: activeColors.background,
        tabBarActiveTintColor: activeColors.active,
        tabBarInactiveTintColor: activeColors.inactive,
      }}
    >
      <Tab.Screen
        name="Milestones"
        component={MilestonstonesStack}
        component={MilestonstonesStack}
        options={{
          headerShown: false,
          headerShown: false,
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
        options={{        
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
        options={{       
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