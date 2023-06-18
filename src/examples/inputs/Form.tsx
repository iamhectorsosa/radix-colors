"use client";

import * as React from "react";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
import { Slider } from "@components/ui/Slider";
import { Checkbox } from "@components/ui/Checkbox";

export default function Preview() {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<string | null>(null);
  return (
    <div className="flex w-full max-w-lg flex-col gap-5 p-6">
      <div className="flex w-full flex-col gap-3">
        <div className="space-y-1">
          <Label htmlFor="full-name">Name</Label>
          <Input id="full-name" placeholder="Hector Sosa" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="hello@hectorsosa.me" />
        </div>
        <div className="flex gap-3">
          <div className="w-full space-y-1">
            <Label htmlFor="age" toolTipContent="Only +18 allowed">
              Age
            </Label>
            <Input id="age" type="number" placeholder="18" min={18} />
          </div>
          <div className="w-full space-y-1">
            <Label
              htmlFor="post-code"
              toolTipContent="Has to be a valid 5-digit post code"
            >
              Post Code
            </Label>
            <Input id="post-code" type="string" placeholder="10100" />
          </div>
          <div className="w-full space-y-1">
            <Label htmlFor="color">Shirt Color</Label>
            <Input id="color" type="color" />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="file">Picture</Label>
          <div className="flex items-center gap-2 rounded-lg">
            <Input
              ref={fileRef}
              onChange={(e) => {
                setFile(e.target.value);
              }}
              id="file"
              type="file"
            />
            {file && (
              <Button
                tabIndex={-1}
                onClick={() => {
                  setFile(null);
                  if (fileRef.current) {
                    fileRef.current.value = "";
                  }
                }}
                variant="subtle"
                className="px-3 hover:bg-red-10 hover:text-red-1 active:bg-red-11"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button>
          <CheckIcon className="h-5 w-5" />
          Submit
        </Button>
        <Button variant="danger">
          <Cross2Icon className="h-5 w-5" />
          Cancel
        </Button>
      </div>
    </div>
  );
}
