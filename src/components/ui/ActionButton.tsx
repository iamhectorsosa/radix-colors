import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "cva";
import { cn } from "@utils/cn";

const actionButtonVariants = cva(
  [
    /** Layout */
    "inline-flex items-center justify-center px-2 py-2 aspect-square",
    /** Typography */
    "font-medium",
    /** Borders */
    "rounded-lg",
    /** States */
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    /** User Interaction */
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "bg-base-3 text-base-11 hover:bg-base-4 active:bg-base-5",
        subtle: "bg-transparent text-base-11 hover:bg-base-4 active:bg-base-5",
        accent:
          "bg-accent-3 text-accent-11 hover:bg-accent-4 active:bg-accent-5",
        info: "bg-blue-3 text-blue-11 hover:bg-blue-4 active:bg-blue-5",
        warning: "bg-yellow-3 text-yellow-11 hover:bg-yellow-4",
        danger: "bg-red-3 text-red-11 hover:bg-red-4 active:bg-red-5",
      },
      compact: {
        true: "px-1 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  asChild?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant, compact, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(actionButtonVariants({ variant, compact, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ActionButton.displayName = "ActionButton";

export { ActionButton };
