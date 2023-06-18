"use client";

import * as React from "react";
import { Label } from "@components/ui/Label";
import { Slider } from "@components/ui/Slider";

export default function Preview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3 p-6">
      <div>
        <Label htmlFor="energy">Energy</Label>
        <Slider
          className="py-2"
          id="energy"
          defaultValue={[8]}
          max={10}
          step={1}
        />
      </div>
      <div>
        <Label htmlFor="power">Power</Label>
        <Slider
          className="py-2"
          id="power"
          defaultValue={[3]}
          max={10}
          step={1}
        />
      </div>
      <div>
        <Label>Compact Sliders</Label>
        <div className="flex gap-2">
          <Label className="whitespace-nowrap">-x</Label>
          <Slider
            compact
            className="py-2"
            defaultValue={[5]}
            max={10}
            step={1}
          />
          <Label className="whitespace-nowrap">+x</Label>
        </div>
        <div className="flex gap-2">
          <Label className="whitespace-nowrap">-y</Label>
          <Slider
            compact
            className="py-2"
            defaultValue={[9]}
            max={10}
            step={1}
          />
          <Label className="whitespace-nowrap">+y</Label>
        </div>
      </div>
    </div>
  );
}
