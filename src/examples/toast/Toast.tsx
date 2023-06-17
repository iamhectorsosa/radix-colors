"use client";

import * as React from "react";
import {
  ToastProvider as ToastWrapper,
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@components/ui/Toast";
import { Button } from "@components/ui/Button";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";
import { type Toast as ToastType, useToast } from "@hooks/useToast";
import { AnimatePresence, motion } from "framer-motion";

export default function Preview() {
  const { toasts, toast } = useToast();
  return (
    <ToastWrapper>
      <AnimatePresence mode="popLayout">
        {toasts.map(({ id, title, description, ...props }) => (
          <Toast asChild key={id} {...props}>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              <ToastClose />
            </motion.div>
          </Toast>
        ))}
      </AnimatePresence>
      <div className="flex w-full flex-col items-center justify-center gap-3 p-6 @md:flex-row">
        <Button onClick={() => toast(defaultToast)} asChild>
          <motion.button whileTap={{ scale: 0.95 }}>
            <PlusIcon className="h-5 w-5" />
            Send
          </motion.button>
        </Button>
        <Button
          onClick={() => toast(destructiveToast)}
          asChild
          variant="danger"
        >
          <motion.button whileTap={{ scale: 0.95 }}>
            <Cross2Icon className="h-5 w-5" />
            Cancel
          </motion.button>
        </Button>
      </div>
      <ToastViewport />
    </ToastWrapper>
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
