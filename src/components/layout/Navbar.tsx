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
import { Switch } from "@components/ui/Switch";
import { Label } from "@components/ui/Label";

type ColorThemes = "teal" | "indigo" | "cyan" | "pink" | "plum" | "orange";
type Themes = "light-theme" | "dark-theme";

export const Navbar = () => {
  const { theme, setColorTheme, setIsDark, setIsTransparent } = useTheme();
  return (
    <div className="sticky top-0 z-50 flex w-full border-b border-border bg-background px-4 pb-4 pt-8">
      <nav className="mx-auto w-full max-w-5xl">
        <div className="flex justify-end gap-x-2">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-normal" htmlFor="transparent-mode">
              Transparent
            </Label>
            <Switch
              checked={theme.isTransparent}
              onCheckedChange={(v: boolean) => setIsTransparent(v)}
              id="transparent-mode"
            />
          </div>
          <Select
            value={theme.color}
            onValueChange={(v: ColorThemes) => {
              setColorTheme(v);
            }}
          >
            <SelectTrigger className="min-w-fit md:min-w-[8rem]">
              <div className="flex items-center gap-2 pr-2">
                <ColorWheelIcon className="h-5 w-5 text-accent-9" />
                <div className="hidden md:inline-flex">
                  <SelectValue />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value={"teal"}>Teal</SelectItem>
              <SelectItem value={"indigo"}>Indigo</SelectItem>
              <SelectItem value={"cyan"}>Cyan</SelectItem>
              <SelectItem value={"pink"}>Pink</SelectItem>
              <SelectItem value={"plum"}>Plum</SelectItem>
              <SelectItem value={"orange"}>Orange</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={theme.isDark ? "dark-theme" : "light-theme"}
            onValueChange={(v: Themes) => {
              setIsDark(v === "dark-theme");
            }}
          >
            <SelectTrigger>
              <div className="flex items-center gap-2 pr-2">
                {theme.isDark ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
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
