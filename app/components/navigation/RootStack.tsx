import * as React from "react";
import { View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import { RootStackParamList } from "./types";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  // const [data, setData] = React.useState();
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {

    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs" // This name MUST match RootStackParamList
            component={TabNavigator}
            options={{
              headerShown: false,
              navigationBarHidden: true,
            }}
          />
          {/* Add any other top-level screens NOT part of the tab flow here
              e.g., if you had an Auth flow or a one-off modal */}
        </Stack.Navigator>
    </View>
  );
}