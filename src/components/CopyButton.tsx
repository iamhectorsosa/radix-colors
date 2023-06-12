"use client";

import { useClipboard } from "@hooks/useClipboard";
import {
  ClipboardCopyIcon,
  CheckIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { ActionButton } from "./ui/ActionButton";

export const CopyButton = ({ code }: { code: string }) => {
  const clipboard = useClipboard();
  return (
    <ActionButton
      variant="subtle"
      onClick={() => clipboard.copy(code)}
      className="h-fit rounded-full p-2 text-sm"
    >
      {clipboard.state === "READY" && <ClipboardCopyIcon className="h-4 w-4" />}
      {clipboard.state === "SUCCESS" && (
        <CheckIcon className="h-4 w-4 text-green-9" />
      )}
      {clipboard.state === "ERROR" && (
        <Cross1Icon className="h-4 w-4 text-red-9" />
      )}
    </ActionButton>
  );
};
