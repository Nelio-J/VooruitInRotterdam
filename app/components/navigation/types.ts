import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityDataInterface } from '../MilestoneDataInterfaces';

// Define the parameters for the Milestones Stack Navigator (Nested Stack)
// This navigator is specifically for the screens within the Milestones tab.
export type MilestonesStackParamList = {
  MilestonesScreen: undefined; // The initial screen for the Milestones tab
  MicrogoalsOverviewScreen: { milestoneId: string };
  ActivityScreen: ActivityDataInterface;
  ActivityCompletionScreen: undefined;
};

// Define the parameters for the Tab Navigator
export type TabParamList = {
  Milestones: NavigatorScreenParams<MilestonesStackParamList>; // Milestones tab holds a Stack Navigator
  Information: undefined;
  Settings: undefined;
};

// Define the parameters for the Root Navigator (The top-level Stack)
// This navigator contains the entire app flow, including the tabs.
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>; // The screen that renders your TabNavigator
  // Add any other top-level screens that are NOT part of the tabs here
  // (e.g., Authentication or a standalone screen accessible from anywhere)
};


// Define specific screen props for components

// For screens within the MilestonesStack
export type MilestonesScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MilestonesScreen">;
export type MicrogoalssOverviewScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MicrogoalsOverviewScreen">;
export type ActivityScreenProps = NativeStackScreenProps<MilestonesStackParamList, "ActivityScreen">;
export type ActivityCompletionScreenProps = NativeStackScreenProps<MilestonesStackParamList, "ActivityCompletionScreen">;

// For the remaining screens within the TabNavigator
export type InformationScreenProps = BottomTabScreenProps<TabParamList, "Information">;
export type SettingsScreenProps = BottomTabScreenProps<TabParamList, "Settings">;

// Specify a global type for the root navigator, which will be used as the default type.
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}