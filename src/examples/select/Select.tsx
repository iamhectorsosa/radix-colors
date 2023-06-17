"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";

export default function Preview() {
  return (
    <div className="flex w-full max-w-lg items-center justify-center p-6">
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="min-w-[8rem]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {data.map(({ id, label }) => (
            <SelectItem key={id} value={id}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const defaultValue = "teal";
const data = [
  {
    id: "teal",
    label: "Teal",
  },
  {
    id: "indigo",
    label: "Indigo",
  },
];
