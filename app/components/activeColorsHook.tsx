import { useContext } from "react";
import colors from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";

export function useActiveColors() {
  const themeContext = useContext(ThemeContext);
  const currentThemeMode = themeContext?.theme?.mode || "light";
  return colors[currentThemeMode];
}