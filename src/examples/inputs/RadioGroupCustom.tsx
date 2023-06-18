"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItemCustom } from "@components/ui/RadioGroup";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@utils/cn";

export default function Preview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5 p-6">
      <RadioGroup
        aria-label="Aspect Ratios"
        className="grid grid-cols-3 gap-2"
        defaultValue={aspectRatios[0].className}
      >
        {aspectRatios.map(({ label, className }, key) => (
          <RadioGroupItemCustom
            key={key}
            aria-label={label}
            className="relative w-full border border-border bg-transparent"
            value={className}
          >
            <CheckIcon
              aria-hidden={true}
              className="absolute left-0 top-0 h-7 w-7 text-checked"
            />
            <div
              className={cn(
                "relative flex max-h-[80%] flex-col items-center justify-center rounded border border-dashed border-placeholder p-2",
                className
              )}
            >
              <p className="text-xs font-semibold leading-[0] text-foreground md:text-sm">
                {label}
              </p>
            </div>
          </RadioGroupItemCustom>
        ))}
      </RadioGroup>
      <RadioGroup
        aria-label="Background Colors"
        className="grid grid-cols-3 gap-2"
        defaultValue={backgroundColors[0].className}
      >
        {backgroundColors.map(({ name, className }, key) => (
          <RadioGroupItemCustom
            key={key}
            aria-label={name}
            className={className}
            value={className}
          >
            <CheckIcon aria-hidden={true} className="h-7 w-7 text-white-11" />
          </RadioGroupItemCustom>
        ))}
      </RadioGroup>
    </div>
  );
}

const aspectRatios: { label: string; className: string }[] = [
  {
    label: "16:9",
    className: "aspect-video",
  },
  {
    label: "3:4",
    className: "aspect-[3/4]",
  },
  {
    label: "1:1",
    className: "aspect-square",
  },
  {
    label: "Auto",
    className: "aspect-auto",
  },
];

const backgroundColors = [
  {
    name: "Violet Mesh",
    className:
      "bg-[hsla(289,74%,35%,1)] [background-image:radial-gradient(at_91%_72%,hsla(262,97%,60%,1)_0px,_transparent_50%),radial-gradient(at_83%_5%,hsla(255,85%,77%,1)_0px,_transparent_50%),radial-gradient(at_90%_37%,hsla(256,98%,74%,1)_0px,_transparent_50%),radial-gradient(at_59%_90%,hsla(264,94%,66%,1)_0px,_transparent_50%),radial-gradient(at_10%_40%,hsla(247,92%,70%,1)_0px,_transparent_50%),radial-gradient(at_25%_62%,hsla(319,96%,65%,1)_0px,_transparent_50%)]",
  },
  {
    name: "Ocean Mesh",
    className:
      "bg-[hsla(203,100%,68%,1)] [background-image:radial-gradient(at_65%_26%,hsla(192,100%,57%,1)_0px,_transparent_50%),radial-gradient(at_86%_44%,hsla(59,65%,60%,1)_0px,_transparent_50%),radial-gradient(at_47%_52%,hsla(269,60%,70%,1)_0px,_transparent_50%),radial-gradient(at_86%_88%,hsla(190,86%,62%,1)_0px,_transparent_50%),radial-gradient(at_83%_1%,hsla(223,93%,70%,1)_0px,_transparent_50%),radial-gradient(at_46%_6%,hsla(236,66%,62%,1)_0px,_transparent_50%)]",
  },
  {
    name: "Candy Mesh",
    className:
      "bg-[hsla(0,100%,50%,1)] [background-image:radial-gradient(at_40%_20%,hsla(28,100%,74%,1)_0px,_transparent_50%),radial-gradient(at_80%_0%,hsla(189,100%,56%,1)_0px,_transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,1)_0px,_transparent_50%),radial-gradient(at_80%_50%,hsla(340,100%,76%,1)_0px,_transparent_50%),radial-gradient(at_0%_100%,hsla(22,100%,77%,1)_0px,_transparent_50%),radial-gradient(at_80%_100%,hsla(242,100%,70%,1)_0px,_transparent_50%),radial-gradient(at_0%_0%,hsla(343,100%,76%,1)_0px,_transparent_50%)]",
  },
  {
    name: "Blue Mesh",
    className:
      "bg-[#a399ff] [background-image:radial-gradient(at_12%_8%,_hsla(270,85%,60%,1)_0px,_transparent_50%),radial-gradient(at_22%_39%,hsla(211,62%,64%,1)_0px,_transparent_50%),radial-gradient(at_77%_64%,hsla(151,60%,79%,1)_0px,_transparent_50%),radial-gradient(at_87%_0%,hsla(231,70%,72%,1)_0px,_transparent_50%),radial-gradient(at_51%_54%,hsla(327,96%,79%,1)_0px,_transparent_50%),radial-gradient(at_48%_32%,hsla(358,83%,72%,1)_0px,_transparent_50%),radial-gradient(at_78%_8%,hsla(173,75%,75%,1)_0px,_transparent_50%)]",
  },
  {
    name: "Cotton Mesh",
    className:
      "bg-[hsla(0,73%,68%,1)] [background-image:radial-gradient(at_9%_4%,hsla(192,94%,55%,1)_0px,_transparent_50%),radial-gradient(at_25%_61%,hsla(300,61%,55%,1)_0px,_transparent_50%),radial-gradient(at_98%_23%,hsla(232,94%,55%,1)_0px,_transparent_50%),radial-gradient(at_26%_7%,hsla(286,64%,55%,1)_0px,_transparent_50%),radial-gradient(at_27%_46%,hsla(246,86%,55%,1)_0px,_transparent_50%),radial-gradient(at_73%_36%,hsla(290,67%,55%,1)_0px,_transparent_50%),radial-gradient(at_27%_96%,hsla(302,76%,55%,1)_0px,_transparent_50%)]",
  },
];
