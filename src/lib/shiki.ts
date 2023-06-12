import {
  getHighlighter as getHighlighterFromShiki,
  renderToHtml,
  type Highlighter,
  type Lang,
  type Theme,
} from "shiki";

/** ✅ Config */
const theme: Theme = "dark-plus";
const bg: React.CSSProperties["backgroundColor"] = "var(--blackA12)";
const lang: Lang = "tsx";

export async function getHighlighter() {
  /* ✅ Create a highlighter instance with a theme */
  return await getHighlighterFromShiki({
    theme,
    langs: process.env.NODE_ENV === "development" ? [] : [lang],
  });
}

export async function highlight(highlighter: Highlighter, code: string) {
  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(
    code,
    process.env.NODE_ENV === "development" ? "" : lang
  );
  /* ⚠️ Optional: Custom rendering of code blocks */
  return renderToHtml(tokens, {
    bg,
    elements: {
      pre({ className, style, children }) {
        return `<pre class="${className}" style="${style}">${children}</pre>`;
      },
      line({ children, className, index }) {
        return `<span data-line=${index + 1}
         class=${className}>${children}</span>`;
      },
    },
  });
}
