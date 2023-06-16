import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "cva";
import { cn } from "@utils/cn";

const buttonVariants = cva(
  [
    /** Layout */
    "inline-flex items-center justify-center gap-1 px-4 h-9",
    /** Typography */
    "font-medium text-sm",
    /** Borders */
    "rounded-lg",
    /** States */
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    /** User Interaction */
    "disabled:pointer-events-none disabled:opacity-50",
    /** Buttons */
    "[&:has(svg)]:gap-2 [&>svg]:-mx-1",
  ],
  {
    variants: {
      variant: {
        default: "bg-base-3 text-foreground hover:bg-base-4 active:bg-base-5",
        subtle:
          "bg-transparent text-foreground hover:bg-base-4 active:bg-base-5",
        accent:
          "bg-accent-9 text-accent-1 hover:bg-accent-10 active:bg-accent-11",
        info: "bg-blue-9 text-blue-1 hover:bg-blue-10 active:bg-blue-11",
        warning:
          "bg-yellow-9 text-black hover:bg-yellow-10 active:bg-yellow-11",
        danger: "bg-red-9 text-red-1 hover:bg-red-10 active:bg-red-11",
      },
      compact: {
        true: "px-3 h-7 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, compact, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, compact, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
