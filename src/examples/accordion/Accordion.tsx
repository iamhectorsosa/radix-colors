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
  const [state, setState] = React.useState(defaultValue);
  return (
    <div className="w-full p-6">
      <Accordion
        type={"multiple"}
        value={state}
        className="w-full"
        onValueChange={(v) => setState(v)}
      >
        {data.map(({ id, title, content }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AnimatePresence>
              {state?.includes(id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      opacity: { delay: 0.2 },
                      height: { duration: 0.1 },
                      ease: "easeIn",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.1 },
                      height: { delay: 0.2 },
                      ease: "easeInOut",
                    },
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

const defaultValue = ["item-t"];
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
      "Yes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aspernatur debitis nemo sed temporibus, laboriosam, dolores dolorum dicta id autem delectus sit minus! Quos cumque, soluta sunt nemo incidunt mollitia.",
  },
];
