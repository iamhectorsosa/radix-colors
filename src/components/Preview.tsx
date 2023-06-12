"use client";

import * as React from "react";
import { CodeIcon, EyeOpenIcon, PlusIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { CopyButton } from "./CopyButton";
import { Resizable } from "re-resizable";
import { cn } from "@utils/cn";
import { Button } from "./ui/Button";
import { useTheme } from "./providers/ThemeProvider";

type PreviewProps = {
  label: string;
  preview: React.ReactNode;
  example: {
    id: string;
    code: string;
  };
  source: {
    id: string;
    code: string;
  };
};

export const Preview = ({ label, preview, example, source }: PreviewProps) => {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const { theme } = useTheme();

  return (
    <div className="space-y-3">
      <Tabs defaultValue="preview" orientation="horizontal">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold">{label}</h3>
          <TabsList className="rounded-full">
            <TabsTrigger value="preview" className="rounded-full p-2">
              <EyeOpenIcon className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="code" className="rounded-full p-2">
              <CodeIcon className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview">
          <Resizable
            bounds="parent"
            minWidth="320px"
            handleStyles={{
              right: {
                right: "initial",
                left: "100%",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                width: "auto",
                cursor: "ew-resize",
              },
            }}
            handleClasses={{
              right: "hidden sm:flex items-center bg-transparent",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-base-8" />,
            }}
          >
            <div
              className={cn(
                "grid min-h-[350px] w-full place-items-center rounded-lg p-4 shadow-sm @container md:p-12",
                theme.isTransparent
                  ? "transparent-grid"
                  : "bg-gradient-to-tl from-fuchsia-500 from-0% to-blue-500 to-100% saturate-[115%] [&>div]:bg-background"
              )}
            >
              {preview}
            </div>
          </Resizable>
        </TabsContent>
        <TabsContent className="dark-theme relative" value="code">
          <div
            className={cn(
              "overflow-hidden rounded-lg bg-black",
              !expanded && "max-h-[350px]"
            )}
          >
            <Tabs className="bg-black" defaultValue="preview">
              <div className="flex items-center justify-between bg-black px-5 pt-3">
                <TabsList className="grid w-full bg-black sm:inline-flex">
                  <TabsTrigger
                    value="preview"
                    className={cn("px-2.5 py-1.5 text-xs")}
                  >
                    Preview.tsx
                  </TabsTrigger>
                  <TabsTrigger
                    value={source.id}
                    className="px-2.5 py-1.5 text-xs"
                  >
                    {source.id}
                  </TabsTrigger>
                </TabsList>
                <div className="hidden sm:inline-flex">
                  <CopyButton code={code} />
                </div>
              </div>
              <TabsContent value="preview">
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: example.code }}
                />
              </TabsContent>
              <TabsContent value={source.id}>
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: source.code }}
                />
              </TabsContent>
            </Tabs>
          </div>
          <footer
            className={cn(
              "pointer-events-none absolute inset-0 flex h-full w-full items-end justify-center rounded-lg bg-gradient-to-t from-black",
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

const transformComponentName = (componentName: string): string => {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
};
