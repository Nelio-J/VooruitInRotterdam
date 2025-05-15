import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import InformationScreen from "@/app/screens/InformationScreen";
import MilestonesScreen from "../../screens/MilestonesScreen";
import SettingsScreen from "../../screens/SettingsScreen";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={MilestonesScreen} />

      <Tab.Screen name="Information" component={InformationScreen} />

      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;