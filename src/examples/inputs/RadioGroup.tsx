"use client";

import * as React from "react";
import { Label } from "@components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@components/ui/RadioGroup";

export default function Preview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5 p-6">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
