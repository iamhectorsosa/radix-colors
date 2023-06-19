import { readFileSync } from "fs";
import { TabbedPre } from "@components/ui/Pre";
import { getHighlighter, highlight } from "@lib/shiki";

export default async function Preview() {
  const code = await getCode();
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border-border">
      <TabbedPre
        codeBlocks={[
          {
            id: "c1",
            label: "Preview.tsx",
            htmlCode: code,
          },
        ]}
      />
    </div>
  );
}

async function getCode() {
  const highlighter = await getHighlighter();
  const code = readFileSync("src/examples/code/Pre.tsx", "utf8");
  return await highlight(highlighter, code);
}
