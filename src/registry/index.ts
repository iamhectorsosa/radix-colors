export const CONTENT_DIR = "src/examples";
export const SOURCE_DIR = "src/components/ui";

type Categories = {
  id: string;
  name: string;
  description: string;
  sourceId: string;
}[];

export const categories: Categories = [
  {
    id: "buttons",
    name: "Buttons",
    description: "Displays a button or a component that looks like a button.",
    sourceId: "Button",
  },
  {
    id: "actionbuttons",
    name: "Action Buttons",
    description: "Displays an icon button for a call to action.",
    sourceId: "ActionButton",
  },
  {
    id: "select",
    name: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    sourceId: "Select",
  },
  // {
  //   id: "tabs",
  //   name: "Tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   sourceId: "Tabs",
  // },
];
