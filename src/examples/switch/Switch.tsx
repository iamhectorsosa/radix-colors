import { Switch } from "@components/ui/Switch";

export default function Preview() {
  return (
    <div className="flex w-full items-center justify-center space-x-2 p-6">
      <Switch id="airplane-mode" />
      <label className="text-sm" htmlFor="airplane-mode">
        Airplane Mode
      </label>
    </div>
  );
}
