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
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

type ColorThemes = "teal" | "indigo" | "cyan" | "pink" | "plum" | "orange";
type Themes = "light-theme" | "dark-theme";

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

const useBoundedScroll = (bounds: number) => {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYProgress = useTransform(scrollYBounded, [0, bounds], [0, 1]);

  React.useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYProgress };
};

export const Navbar = () => {
  const { theme, setColorTheme, setIsDark, setIsTransparent } = useTheme();
  const { scrollYProgress } = useBoundedScroll(500);
  const height = useTransform(scrollYProgress, [0, 0.85, 1], [100, 100, 55]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.85]);

  return (
    <motion.div
      style={{
        backgroundColor: useMotionTemplate`rgb(var(--navbar) / ${opacity}`,
      }}
      className="sticky top-0 z-50 flex w-full items-center px-4 shadow backdrop-blur-md "
    >
      <motion.nav style={{ height }} className="mx-auto w-full max-w-5xl">
        <div className="flex h-full items-center justify-end gap-x-2">
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
      </motion.nav>
    </motion.div>
  );
};
