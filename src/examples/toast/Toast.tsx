"use client";

import * as React from "react";
import { Button } from "@components/ui/Button";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";
import { type Toast as ToastType, useToast } from "@hooks/useToast";
import { motion } from "framer-motion";

export default function Preview() {
  const { toast } = useToast();
  return (
    <div className="flex w-full max-w-lg items-center justify-center gap-3 p-6">
      <Button onClick={() => toast(defaultToast)} asChild>
        <motion.button whileTap={{ scale: 0.95 }}>
          <PlusIcon className="h-5 w-5" />
          Send
        </motion.button>
      </Button>
      <Button onClick={() => toast(destructiveToast)} asChild variant="danger">
        <motion.button whileTap={{ scale: 0.95 }}>
          <Cross2Icon className="h-5 w-5" />
          Cancel
        </motion.button>
      </Button>
    </div>
  );
}

const defaultToast: ToastType = {
  title: "File has been successfully uploaded",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
};

const destructiveToast: ToastType = {
  title: "Oops, sorry. Something went wrong!",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  variant: "destructive",
};
