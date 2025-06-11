import * as React from "react";

// import { storeData } from "../config/asyncStorage";
import { ThemeContext } from "./ThemeContext";

type ThemeMode = "light" | "dark";

interface ThemeState {
    mode: ThemeMode;
}

type UpdateTheme = (newTheme?: ThemeState) => void;

export interface ThemeContextValue {
  theme: ThemeState;
  updateTheme: UpdateTheme;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeState>({ mode: "light" });

  // Function to update the theme
  // It accepts a newTheme object which contains the mode (either "light" or "dark")
  const updateTheme: UpdateTheme = (newTheme) => {
    let mode: ThemeMode;

    // If newTheme is not directly provided, it will toggle the theme. If newTheme is provided, it will set the theme without toggling.

    // If the current mode = "dark", change the mode to "else". Else change the mode to "dark"
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
    }

    // An alternate way of writing it:
    // if (!newTheme) {
    //   if (theme.mode === "dark") {
    //     mode = "light";
    //   } else {
    //     mode = "dark";
    //   }
    //   newTheme = { mode };
    // }

    // Update and Store the new theme in async storage
    setTheme(newTheme);
    // storeData("AppTheme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;