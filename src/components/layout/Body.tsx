"use client";

import * as React from "react";
import { cn } from "@utils/cn";
import { Inter } from "next/font/google";
import { useTheme } from "@components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export interface BodyProps extends React.BaseHTMLAttributes<HTMLBodyElement> {}

const Body = React.forwardRef<HTMLBodyElement, BodyProps>(
  ({ className, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <body
        className={cn(
          className,
          inter.className,
          "bg-background text-foreground",
          theme.color,
          theme.isDark ? "dark-theme dark" : "light-theme"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Body.displayName = "Body";

export { Body };
