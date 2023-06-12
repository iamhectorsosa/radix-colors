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
    description: "Come and grab 'em!",
    sourceId: "Button",
  },
  {
    id: "actionbuttons",
    name: "Action Buttons",
    description: "Come and grab 'em!",
    sourceId: "ActionButton",
  },
  // {
  //   id: "select",
  //   name: "Select",
  //   description: "Come and grab 'em!",
  //   sourceId: "Select",
  // },
  // {
  //   id: "tabs",
  //   name: "Tabs",
  //   description: "Come and grab 'em!",
  //   sourceId: "Tabs",
  // },
];
