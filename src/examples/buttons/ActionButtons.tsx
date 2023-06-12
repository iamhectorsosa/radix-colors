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
    <div className="flex w-full flex-col items-center justify-center gap-3 p-6 @md:flex-row">
      <ActionButton>
        <HamburgerMenuIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton variant="subtle">
        <ClipboardCopyIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton variant="accent">
        <PlusIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton variant="info">
        <InfoCircledIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton variant="warning">
        <ExclamationTriangleIcon className="h-5 w-5" />
      </ActionButton>
      <ActionButton variant="danger">
        <Cross2Icon className="h-5 w-5" />
      </ActionButton>
    </div>
  );
}
