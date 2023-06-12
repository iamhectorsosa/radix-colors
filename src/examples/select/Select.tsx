import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";
import { ColorWheelIcon } from "@radix-ui/react-icons";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 @md:flex-row">
      <Select defaultValue="teal">
        <SelectTrigger className="w-fit min-w-[150px]">
          <div className="flex items-center gap-2 pr-2">
            <ColorWheelIcon className="h-4 w-4" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"teal"}>Teal</SelectItem>
          <SelectItem value={"indigo"}>Indigo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
