import { readFileSync } from "fs";
import { Pre } from "@components/ui/Pre";
import { getHighlighter, highlight } from "@lib/shiki";

export default async function Preview() {
  const code = await getCode();
  return (
    <div className="h-full w-full overflow-x-scroll rounded-lg border border-border pb-3 pt-4">
      <Pre htmlCode={code} />
    </div>
  );
}

async function getCode() {
  const highlighter = await getHighlighter();
  const code = readFileSync("src/examples/code/Pre.tsx", "utf8");
  return await highlight(highlighter, code);
}
