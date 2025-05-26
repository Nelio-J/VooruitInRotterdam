import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


// 1. Define the ParamList for the Milestones Stack Navigator (Nested Stack)
// This navigator is specifically for the screens within the Milestones tab.
export type MilestonesStackParamList = {
  MilestonesScreen: undefined; // The initial screen for the Milestones tab
  MicrogoalsOverviewScreen: { id: string, category: string };
  LanguageActivityScreen: { id: string } | undefined;
//   Activity2Screen: undefined; // Example: another activity screen
//   Activity3Screen: undefined;
//   Activity4Screen: undefined;
};

// 2. Define the ParamList for the Main Tab Navigator
// This navigator contains your main tabs.
export type TabParamList = {
  Milestones: NavigatorScreenParams<MilestonesStackParamList>; // Milestones tab holds a Stack Navigator
  Information: undefined; // Information screen (no params for the tab itself)
  Settings: undefined; // Settings screen (no params for the tab itself)
};

// 3. Define the ParamList for your Root Navigator (The top-level Stack)
// This navigator contains your entire app flow, including the tabs.
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>; // The screen that renders your TabNavigator
  // Add any other top-level screens that are NOT part of the tabs here
  // (e.g., Authentication flow, onboarding, or a standalone screen accessible from anywhere)
  // For example, if LanguageActivityScreen is a top-level screen outside the tabs:
  // LanguageActivityScreen: { itemId: string; categoryName: string } | undefined;
};


// 4. Define specific Screen Props for components

// For screens directly within the MilestonesStack
export type MilestonesScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MilestonesScreen">;
export type MicrogoalssOverviewScreenProps = NativeStackScreenProps<MilestonesStackParamList, "MicrogoalsOverviewScreen">;
export type LanguageActivityScreenProps = NativeStackScreenProps<MilestonesStackParamList, "LanguageActivityScreen">;


// For screens directly within the TabNavigator
// These screens are simple, but the 'Milestones' tab is special as it hosts a stack.
export type InformationScreenProps = BottomTabScreenProps<TabParamList, "Information">;
export type SettingsScreenProps = BottomTabScreenProps<TabParamList, "Settings">;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}