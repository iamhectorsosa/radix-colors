"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Tooltip } from "@components/ui/Tooltip";
import { cn } from "@utils/cn";

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  toolTipContent?: string;
  toolTipSide?: React.ComponentPropsWithoutRef<typeof Tooltip>["side"];
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    { children, className, toolTipContent, toolTipSide = "top", ...props },
    ref
  ) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium leading-3 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {toolTipContent && (
        <Tooltip content={<p>{toolTipContent}</p>} side={toolTipSide}>
          <InfoCircledIcon className="cursor-help text-placeholder" />
        </Tooltip>
      )}
    </LabelPrimitive.Root>
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
