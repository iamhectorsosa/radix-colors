"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@utils/cn";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    compact?: boolean;
  }
>(({ className, compact = false, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-background">
      <SliderPrimitive.Range className="absolute h-full bg-checked" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        /** Layout */
        "block bg-checked ",
        /** Borders */
        "rounded-full",
        /** States */
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        /** User Interaction */
        "disabled:pointer-events-none disabled:opacity-50",
        compact ? "h-3.5 w-3.5" : "h-5 w-5"
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
