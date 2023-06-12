"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";
import { ColorWheelIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@components/providers/ThemeProvider";

type ColorThemes = "teal" | "indigo" | "pink";
type Themes = "light-theme" | "dark-theme";

export const Navbar = () => {
  const { theme, setColorTheme, setIsDark } = useTheme();
  return (
    <div className="sticky top-0 z-50 flex w-full border-b border-border bg-background px-4 pb-4 pt-8">
      <nav className="mx-auto w-full max-w-5xl">
        <div className="flex justify-end gap-x-2">
          <Select
            value={theme.color}
            onValueChange={(v: ColorThemes) => {
              setColorTheme(v);
            }}
          >
            <SelectTrigger className="w-fit min-w-[150px]">
              <div className="flex items-center gap-2 pr-2">
                <ColorWheelIcon className="h-4 w-4" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value={"teal"}>Teal</SelectItem>
              <SelectItem value={"indigo"}>Indigo</SelectItem>
              <SelectItem value={"pink"}>Pink</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={theme.isDark ? "dark-theme" : "light-theme"}
            onValueChange={(v: Themes) => {
              setIsDark(v === "dark-theme");
            }}
          >
            <SelectTrigger className="w-fit">
              <div className="flex items-center gap-2 pr-2">
                {theme.isDark ? (
                  <MoonIcon className="h-4 w-4" />
                ) : (
                  <SunIcon className="h-4 w-4" />
                )}
              </div>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value={"light-theme"}>Light</SelectItem>
              <SelectItem value={"dark-theme"}>Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
    </div>
  );
};
