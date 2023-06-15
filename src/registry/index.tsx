export const EXAMPLES_DIR = "src/examples";
export const SOURCE_DIR = "src/components/ui";

import Accordion from "../examples/accordion/Accordion";
import ActionButtons from "../examples/buttons/ActionButtons";
import Buttons from "../examples/buttons/Buttons";
import Select from "../examples/select/Select";
import Switch from "../examples/switch/Switch";
import HorizontalTabs from "../examples/tabs/HorizontalTabs";
import VerticalTabs from "../examples/tabs/VerticalTabs";

type Examples = {
  categoryDir: string;
  label: string;
  description: string;
  components: {
    exampleFile: string;
    sourceFile: string;
    label: string;
    preview: React.ReactNode;
  }[];
}[];

export const examples: Examples = [
  {
    categoryDir: "accordion",
    label: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    components: [
      {
        label: "Accordion",
        exampleFile: "Accordion.tsx",
        sourceFile: "Accordion.tsx",
        preview: <Accordion />,
      },
    ],
  },
  {
    categoryDir: "buttons",
    label: "Buttons",
    description: "Displays a button or a component that looks like a button.",
    components: [
      {
        label: "Action Buttons",
        exampleFile: "ActionButtons.tsx",
        sourceFile: "ActionButton.tsx",
        preview: <ActionButtons />,
      },
      {
        label: "Buttons",
        exampleFile: "Buttons.tsx",
        sourceFile: "Button.tsx",
        preview: <Buttons />,
      },
    ],
  },
  {
    categoryDir: "select",
    label: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    components: [
      {
        label: "Select",
        exampleFile: "Select.tsx",
        sourceFile: "Select.tsx",
        preview: <Select />,
      },
    ],
  },
  {
    categoryDir: "switch",
    label: "Switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    components: [
      {
        label: "Switch",
        exampleFile: "Switch.tsx",
        sourceFile: "Switch.tsx",
        preview: <Switch />,
      },
    ],
  },
  {
    categoryDir: "tabs",
    label: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    components: [
      {
        label: "Horizontal Tabs",
        exampleFile: "HorizontalTabs.tsx",
        sourceFile: "Tabs.tsx",
        preview: <HorizontalTabs />,
      },
      {
        label: "Vertical Tabs",
        exampleFile: "VerticalTabs.tsx",
        sourceFile: "Tabs.tsx",
        preview: <VerticalTabs />,
      },
    ],
  },
];
