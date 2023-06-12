import { Button } from "@components/ui/Button";
import {
  PlusIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 @md:flex-row">
      <Button>Default</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="accent">
        <PlusIcon className="h-5 w-5" />
        Accent
      </Button>
      <Button variant="info">
        <InfoCircledIcon className="h-5 w-5" />
        Info
      </Button>
      <Button variant="warning">
        <ExclamationTriangleIcon className="h-5 w-5" />
        Warning
      </Button>
      <Button variant="danger">
        <Cross2Icon className="h-5 w-5" />
        Danger
      </Button>
    </div>
  );
}
