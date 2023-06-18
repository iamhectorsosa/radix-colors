"use client";

import * as React from "react";
import { Label } from "@components/ui/Label";
import { Checkbox } from "@components/ui/Checkbox";

export default function Preview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3 p-6">
      <div className="flex gap-2">
        <Checkbox id="protein" defaultChecked={true} />
        <Label htmlFor="protein">Protein</Label>
      </div>
      <div className="flex gap-2">
        <Checkbox id="carbs" defaultChecked={false} />
        <Label htmlFor="carbs">Carbs</Label>
      </div>
      <div className="flex gap-2">
        <Checkbox id="vegetables" defaultChecked={false} />
        <Label htmlFor="vegetables">Vegetables</Label>
      </div>
    </div>
  );
}
