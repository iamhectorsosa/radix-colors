"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@utils/cn";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      /** Layout */
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center",
      /** Borders */
      "rounded-full border-2 border-transparent",
      /** States */
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      /** User Interaction */
      "data-[state=checked]:bg-checked data-[state=unchecked]:bg-unchecked",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        /** Layout */
        "block h-5 w-5 bg-background shadow-lg",
        /** Borders */
        "rounded-full ring-0 ",
        /** User Interaction */
        "transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        "pointer-events-none"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
