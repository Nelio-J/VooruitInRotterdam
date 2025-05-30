import * as React from "react";

import RootStack from "./components/navigation/RootStack";
import ActivityProgressProvider from "./context/ActivityProgressProvider";
import ThemeProvider from "./context/ThemeProvider";

export default function App() {
  return (
    // Wrap the RootStack with ThemeProvider so ThemeContext is given to the entire app
    <ThemeProvider>
      <ActivityProgressProvider>
        <RootStack />
      </ActivityProgressProvider>
    </ThemeProvider>
  );
}