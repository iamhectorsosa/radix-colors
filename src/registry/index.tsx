export const EXAMPLES_DIR = "src/examples";
export const SOURCE_DIR = "src/components/ui";

import Accordion from "../examples/accordion/Accordion";
import ActionButtons from "../examples/buttons/ActionButtons";
import Buttons from "../examples/buttons/Buttons";
import Pre from "../examples/code/Pre";
import TabbedPre from "../examples/code/TabbedPre";
import Form from "../examples/inputs/Form";
import Checkboxes from "../examples/inputs/Checkboxes";
import RadioGroup from "../examples/inputs/RadioGroup";
import RadioGroupCustom from "../examples/inputs/RadioGroupCustom";
import Sliders from "../examples/inputs/Sliders";
import Select from "../examples/select/Select";
import Switch from "../examples/switch/Switch";
import HorizontalTabs from "../examples/tabs/HorizontalTabs";
import VerticalTabs from "../examples/tabs/VerticalTabs";
import Toast from "../examples/toast/Toast";

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
    categoryDir: "code",
    label: "Code",
    description: "Everything related to code,",
    components: [
      {
        label: "Code Blocks",
        exampleFile: "Pre.tsx",
        sourceFile: "Pre.tsx",
        preview: <Pre />,
      },
      {
        label: "Code Blocks with Tabs",
        exampleFile: "TabbedPre.tsx",
        sourceFile: "Pre.tsx",
        preview: <TabbedPre />,
      },
    ],
  },
  {
    categoryDir: "inputs",
    label: "Inputs",
    description:
      "Displays a form input field or a component that looks like an input field.",
    components: [
      {
        label: "Form Inputs",
        exampleFile: "Form.tsx",
        sourceFile: "Input.tsx",
        preview: <Form />,
      },
      {
        label: "Checkboxes",
        exampleFile: "Checkboxes.tsx",
        sourceFile: "Checkbox.tsx",
        preview: <Checkboxes />,
      },
      {
        label: "Radio Group",
        exampleFile: "RadioGroup.tsx",
        sourceFile: "RadioGroup.tsx",
        preview: <RadioGroup />,
      },
      {
        label: "Custom Radio Group",
        exampleFile: "RadioGroupCustom.tsx",
        sourceFile: "RadioGroup.tsx",
        preview: <RadioGroupCustom />,
      },
      {
        label: "Sliders",
        exampleFile: "Sliders.tsx",
        sourceFile: "Slider.tsx",
        preview: <Sliders />,
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
    label: "Switch with Tooltip Label",
    description:
      "A control that allows the user to toggle between checked and not checked. (Note: container queries are messing with layout)",
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
        label: "Animated Horizontal Tabs",
        exampleFile: "HorizontalTabs.tsx",
        sourceFile: "Tabs.tsx",
        preview: <HorizontalTabs />,
      },
      {
        label: "Animated Vertical Tabs",
        exampleFile: "VerticalTabs.tsx",
        sourceFile: "Tabs.tsx",
        preview: <VerticalTabs />,
      },
    ],
  },
  {
    categoryDir: "toast",
    label: "Toasts",
    description: "A succinct message that is displayed temporarily.",
    components: [
      {
        label: "Default Toasts",
        exampleFile: "Toast.tsx",
        sourceFile: "Toast.tsx",
        preview: <Toast />,
      },
    ],
  },
];
