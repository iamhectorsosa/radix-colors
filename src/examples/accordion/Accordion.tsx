"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/Accordion";
import { motion, AnimatePresence } from "framer-motion";

export default function Preview() {
  const [current, setCurrent] = React.useState(defaultValue);
  return (
    <div className="w-full p-6">
      <Accordion
        type="single"
        value={current}
        className="w-full"
        onValueChange={(v) => setCurrent(v)}
      >
        {data.map(({ id, title, content }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AnimatePresence initial={false}>
              {current?.includes(id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                >
                  <AccordionContent forceMount>{content}</AccordionContent>
                </motion.div>
              )}
            </AnimatePresence>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const defaultValue = "item-1";
const data = [
  {
    id: "item-1",
    title: "Is it accessible?",
    content: " Yes. It adheres to the WAI-ARIA design pattern",
  },
  {
    id: "item-2",
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    title: "Is it animated?",
    content:
      "No. It isn't animated by default, but you can bring your own animations if you need. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ratione quod? Dolore laboriosam ipsa rerum praesentium, reprehenderit consectetur, fugiat quae fugit quam quibusdam, iure sequi maxime vel officia cumque minima!",
  },
];
