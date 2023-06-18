"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@utils/cn";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        /** Layout */
        "h-4 w-4",
        /** Typography */
        "text-foreground",
        /** Borders */
        "rounded-full border border-border",
        /** States */
        "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        /** User Interaction */
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-checked" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupItemCustom = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        /** Layout */
        "flex aspect-video flex-col items-center justify-center gap-2 p-2",
        /** Borders */
        "rounded-lg",
        /** States */
        "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        /** User Interaction */
        " disabled:cursor-not-allowed disabled:opacity-50",
        "[&_svg]:data-[state=unchecked]:fill-transparent [&_svg]:data-[state=unchecked]:text-transparent",
        className
      )}
      {...props}
    />
  );
});

RadioGroupItemCustom.displayName = "RadioGroupItemCustom";

export { RadioGroup, RadioGroupItem, RadioGroupItemCustom };
