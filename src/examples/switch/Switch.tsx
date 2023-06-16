import { Label } from "@components/ui/Label";
import { Switch } from "@components/ui/Switch";

export default function Preview() {
  return (
    <div className="flex w-full items-center justify-center space-x-2 p-6">
      <Switch id="airplane-mode" />
      <Label
        className="text-sm"
        htmlFor="airplane-mode"
        toolTipContent="This is a popup that displays related informationto an element when the element receives keyboard focus or the mouse hovers over it."
      >
        Airplane Mode
      </Label>
    </div>
  );
}
