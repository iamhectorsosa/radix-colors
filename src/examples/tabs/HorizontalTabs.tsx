"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/Tabs";
import { PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

const transition = { type: "ease", ease: "easeInOut", duration: 0.4 };

export default function Preview() {
  let [ref, bounds] = useMeasure();
  const [tab, setTab] = React.useState(defaultTab);
  const currentTab = tabs.find(({ id }) => id === tab);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 p-6 @md:flex-row">
      <Tabs value={tab} onValueChange={(v) => setTab(v)} className="w-full">
        <TabsList>
          {tabs.map(({ id, label }) => (
            <TabsTrigger key={id} value={id}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <motion.div
          animate={{ height: bounds.height }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        >
          <div ref={ref}>
            <AnimatePresence initial={false} mode="wait">
              {currentTab && (
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ...transition,
                    duration: transition.duration / 2,
                    delay: transition.duration / 2,
                  }}
                >
                  <TabsContent forceMount value={currentTab.id}>
                    {currentTab.content}
                  </TabsContent>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Tabs>
    </div>
  );
}

const defaultTab = "account";
const tabs = [
  {
    id: "account",
    label: (
      <>
        <PersonIcon className="mr-2" />
        Account
      </>
    ),
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim numquam, ratione laborum ducimus cupiditate.",
  },
  {
    id: "password",
    label: (
      <>
        <LockClosedIcon className="mr-2" />
        Password
      </>
    ),
    content:
      "Change your password here. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut enim numquam, ratione laborum ducimus cupiditate,eligendi ea fugit quibusdam aut ipsum consequatur possimus eumvoluptatum omnis ab soluta obcaecati qui!",
  },
];
