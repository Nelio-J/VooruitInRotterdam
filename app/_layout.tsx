import * as React from "react";

import RootStack from "./components/navigation/RootStack";

export default function App() {
  return (
    // Wrap the RootStack with ThemeProvider so ThemeContext is given to the entire app 
      <RootStack />
  );
}