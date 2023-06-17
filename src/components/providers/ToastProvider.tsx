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
import { useToast } from "@hooks/useToast";
import { AnimatePresence, motion } from "framer-motion";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toasts } = useToast();
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
      {children}
      <ToastViewport />
    </ToastWrapper>
  );
};
