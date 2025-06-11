import { useContext } from "react";
import colors from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";

const useActiveColors = () => {
  const themeContext = useContext(ThemeContext);
  // Get the current theme mode from the context
  // Optional chaining: if the themeContext is not available, default back to "light"
  const currentThemeMode = themeContext?.theme?.mode || "light";
  return colors[currentThemeMode];
};

export default useActiveColors;