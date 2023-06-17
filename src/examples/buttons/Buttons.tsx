"use client";

import { Button } from "@components/ui/Button";
import {
  PlusIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 p-6 md:flex-row">
      <Button asChild>
        <motion.button whileTap={{ scale: 0.95 }}>Default</motion.button>
      </Button>
      <Button asChild variant="subtle">
        <motion.button whileTap={{ scale: 0.95 }}>Subtle</motion.button>
      </Button>
      <Button asChild variant="accent">
        <motion.button whileTap={{ scale: 0.95 }}>
          <PlusIcon className="h-5 w-5" />
          Accent
        </motion.button>
      </Button>
      <Button asChild variant="info">
        <motion.button whileTap={{ scale: 0.95 }}>
          <InfoCircledIcon className="h-5 w-5" />
          Info
        </motion.button>
      </Button>
      <Button asChild variant="warning">
        <motion.button whileTap={{ scale: 0.95 }}>
          <ExclamationTriangleIcon className="h-5 w-5" />
          Warning
        </motion.button>
      </Button>
      <Button asChild variant="danger">
        <motion.button whileTap={{ scale: 0.95 }}>
          <Cross2Icon className="h-5 w-5" />
          Danger
        </motion.button>
      </Button>
    </div>
  );
}
