import { ActionButton } from "@components/ui/ActionButton";
import {
  HamburgerMenuIcon,
  ClipboardCopyIcon,
  PlusIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

export default function Preview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 @md:flex-row">
      <ActionButton compact>
        <HamburgerMenuIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton compact variant="subtle">
        <ClipboardCopyIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton compact variant="accent">
        <PlusIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton compact variant="info">
        <InfoCircledIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton compact variant="warning">
        <ExclamationTriangleIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton compact variant="danger">
        <Cross2Icon className="h-5 w-5" />
      </ActionButton>
    </div>
  );
}
