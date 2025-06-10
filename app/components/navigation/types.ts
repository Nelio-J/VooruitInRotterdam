import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityDataInterface } from '../MilestoneDataInterfaces';

// Define the ParamList for the Milestones Stack Navigator (Nested Stack)
// This navigator is specifically for the screens within the Milestones tab.
export type MilestonesStackParamList = {
  MilestonesScreen: undefined; // The initial screen for the Milestones tab
  MicrogoalsOverviewScreen: { milestoneId: string };
  ActivityScreen: ActivityDataInterface;
  ActivityCompletionScreen: undefined;
};

// This navigator contains the paramList for the main Tab navigator
export type TabParamList = {
  Milestones: NavigatorScreenParams<MilestonesStackParamList>; // Milestones tab holds a Stack Navigator
  Information: undefined;
  Settings: undefined;
};

// Define the ParamList for your Root Navigator (The top-level Stack)
// This navigator contains your entire app flow, including the tabs.
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>; // The screen that renders your TabNavigator
  // Add any other top-level screens that are NOT part of the tabs here
  // (e.g., Authentication flow, onboarding, or a standalone screen accessible from anywhere)
};


// Define specific Screen Props for components

// For screens within the MilestonesStack
export type MilestonesScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MilestonesScreen">;
export type MicrogoalssOverviewScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MicrogoalsOverviewScreen">;
export type ActivityScreenProps = NativeStackScreenProps<MilestonesStackParamList, "ActivityScreen">;
export type ActivityCompletionScreenProps = NativeStackScreenProps<MilestonesStackParamList, "ActivityCompletionScreen">;

// For screens within the TabNavigator
export type InformationScreenProps = BottomTabScreenProps<TabParamList, "Information">;
export type SettingsScreenProps = BottomTabScreenProps<TabParamList, "Settings">;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}