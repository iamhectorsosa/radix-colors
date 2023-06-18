"use client";

import * as React from "react";
import { cn } from "@utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          /** Layout */
          "flex h-9 w-full bg-transparent px-2.5 py-2",
          /** Typography */
          "text-sm",
          /** Borders */
          "rounded-lg border border-border",
          /** States */
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          /** User Interaction */
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-placeholder",
          type === "color" && "cursor-pointer py-1.5",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
