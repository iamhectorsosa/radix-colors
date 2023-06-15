import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 p-6 @md:flex-row">
      <Select defaultValue="teal">
        <SelectTrigger className="min-w-[8rem]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"teal"}>Teal</SelectItem>
          <SelectItem value={"indigo"}>Indigo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
