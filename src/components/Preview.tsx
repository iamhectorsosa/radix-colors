"use client";

import * as React from "react";
import { CodeIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Resizable } from "re-resizable";
import { cn } from "@utils/cn";
import { useTheme } from "./providers/ThemeProvider";
import { TabbedPre } from "./ui/Pre";

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
                "flex min-h-[350px] w-full items-center justify-center rounded-lg p-4 shadow-sm md:p-12",
                theme.isTransparent
                  ? "transparent-grid"
                  : "bg-[hsla(289,74%,35%,1)] [background-image:radial-gradient(at_91%_72%,hsla(262,97%,60%,1)_0px,_transparent_50%),radial-gradient(at_83%_5%,hsla(255,85%,77%,1)_0px,_transparent_50%),radial-gradient(at_90%_37%,hsla(256,98%,74%,1)_0px,_transparent_50%),radial-gradient(at_59%_90%,hsla(264,94%,66%,1)_0px,_transparent_50%),radial-gradient(at_10%_40%,hsla(247,92%,70%,1)_0px,_transparent_50%),radial-gradient(at_25%_62%,hsla(319,96%,65%,1)_0px,_transparent_50%)] [&>div]:bg-background"
              )}
            >
              {preview}
            </div>
          </Resizable>
        </TabsContent>
        <TabsContent
          className="relative [&>div]:overflow-hidden [&>div]:rounded-lg [&>div]:border [&>div]:border-border"
          value="code"
        >
          <TabbedPre
            codeBlocks={[
              {
                id: example.id,
                label: "Preview.tsx",
                htmlCode: example.code,
              },
              {
                id: source.id,
                label: source.id,
                htmlCode: source.code,
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
