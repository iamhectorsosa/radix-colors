"use client";

import { cn } from "@utils/cn";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { CopyButton } from "@components/CopyButton";
import { Button } from "./Button";
import { PlusIcon } from "@radix-ui/react-icons";

interface PreProps
  extends Omit<
    React.ComponentPropsWithoutRef<"div">,
    "dangerouslySetInnerHTML"
  > {
  htmlCode: string;
}

const Pre = React.forwardRef<React.ElementRef<"div">, PreProps>(
  ({ htmlCode, ...props }, ref) => (
    <div ref={ref} dangerouslySetInnerHTML={{ __html: htmlCode }} {...props} />
  )
);
Pre.displayName = "Pre";

type TabbedPreProps = {
  maxHeight?: number;
  codeBlocks: {
    id: string;
    label: string;
    htmlCode: string;
  }[];
};

const TabbedPre = ({ codeBlocks, maxHeight }: TabbedPreProps) => {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(!maxHeight);

  return (
    <div className="relative">
      <div
        className={cn(
          maxHeight
            ? "overflow-hidden rounded-lg border border-border"
            : "border border-border"
        )}
        style={{
          maxHeight: !expanded ? maxHeight : undefined,
        }}
      >
        <Tabs className="bg-background" defaultValue={codeBlocks[0].id}>
          <div className="flex items-center justify-between border-b border-border bg-background px-3 py-2">
            <TabsList className="bg-transparent px-0 py-0">
              {codeBlocks.map(({ id, label }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="px-2.5 hover:bg-transparent data-[state=active]:bg-transparent"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden sm:inline-flex">
              <CopyButton code={code} />
            </div>
          </div>
          {codeBlocks.map(({ id, htmlCode }) => (
            <TabsContent
              key={id}
              className="overflow-x-scroll pb-5 data-[orientation=horizontal]:mt-5"
              value={id}
            >
              <Pre
                htmlCode={htmlCode}
                ref={(node) => {
                  node?.textContent && setCode(node.textContent);
                }}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {maxHeight && (
        <footer
          className={cn(
            "pointer-events-none absolute inset-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-background",
            expanded ? "bg-none pb-2" : "pb-8"
          )}
        >
          <Button
            className="pointer-events-auto"
            compact={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded && <PlusIcon />}
            {!expanded ? "Expand" : "Collapse"}
          </Button>
        </footer>
      )}
    </div>
  );
};

export { Pre, TabbedPre };
