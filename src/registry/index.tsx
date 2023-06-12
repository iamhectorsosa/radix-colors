export const EXAMPLES_DIR = "src/examples";
export const SOURCE_DIR = "src/components/ui";

import ActionButtons from "../examples/buttons/ActionButtons";
import CompactActionButtons from "../examples/buttons/CompactActionButtons";
import Buttons from "../examples/buttons/Buttons";
import Select from "../examples/select/Select";
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
        label: "Compact Action Buttons",
        exampleFile: "CompactActionButtons.tsx",
        sourceFile: "ActionButton.tsx",
        preview: <CompactActionButtons />,
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
