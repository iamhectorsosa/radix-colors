"use client";

import * as React from "react";

type Theme = {
  color: string;
  isDark: boolean;
  isTransparent: boolean;
};
const defaultTheme: Theme = {
  color: "cyan",
  isDark: false,
  isTransparent: false,
};

const ThemeContext = React.createContext<[Theme, (t: Theme) => void]>([
  defaultTheme,
  () => undefined,
]);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const [theme, setTheme] = React.useContext(ThemeContext);
  return {
    theme,
    setColorTheme: (color: Theme["color"]) => setTheme({ ...theme, color }),
    setIsDark: (isDark: Theme["isDark"]) => setTheme({ ...theme, isDark }),
    setIsTransparent: (isTransparent: Theme["isTransparent"]) =>
      setTheme({ ...theme, isTransparent }),
  };
};
