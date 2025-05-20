import { createContext } from "react";
import { ThemeContextValue } from "./ThemeProvider";

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default ThemeContext;