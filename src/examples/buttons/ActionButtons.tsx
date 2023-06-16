"use client";

import * as React from "react";
import { ActionButton } from "@components/ui/ActionButton";
import {
  PlusIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Preview() {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex min-h-[120px] w-full items-center justify-center gap-2 p-6"
    >
      <ActionButton variant="accent">
        <ButtonMotion mouseX={mouseX}>
          <PlusIcon className="h-full w-full" />
        </ButtonMotion>
      </ActionButton>
      <ActionButton variant="info">
        <ButtonMotion mouseX={mouseX}>
          <InfoCircledIcon className="h-full w-full" />
        </ButtonMotion>
      </ActionButton>
      <ActionButton variant="warning">
        <ButtonMotion mouseX={mouseX}>
          <ExclamationTriangleIcon className="h-full w-full" />
        </ButtonMotion>
      </ActionButton>
      <ActionButton variant="danger">
        <ButtonMotion mouseX={mouseX}>
          <Cross2Icon className="h-full w-full" />
        </ButtonMotion>
      </ActionButton>
    </motion.div>
  );
}

const ButtonMotion = ({
  mouseX,
  children,
}: {
  mouseX: MotionValue;
  children: React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [20, 40, 20]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};
