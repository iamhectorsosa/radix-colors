import { EXAMPLES_DIR, SOURCE_DIR, examples } from "@registry";
import { join } from "path";
import { readFileSync } from "fs";
import { getHighlighter, highlight } from "@lib/shiki";
import { Preview } from "@components/Preview";
import { format } from "prettier";

export default async function Home() {
  const data = await getComponentsByCategory();
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 gap-y-8">
        {data.map(({ label, description, components }, index) => (
          <article key={index} className="grid grid-cols-1 space-y-2">
            <h2 className="text-3xl font-bold">{label}</h2>
            <p className="line-clamp-2 pb-4">{description}</p>
            <div className="grid h-fit grid-cols-1 gap-12 py-2">
              {components.map((props, index) => {
                return <Preview key={index} {...props} />;
              })}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

const getComponentsByCategory = async () => {
  const highlighter = await getHighlighter();

  return await Promise.all(
    examples.map(
      async ({
        categoryDir,
        label,
        description,
        components: registryComponents,
      }) => {
        const examplesPath = join(process.cwd(), EXAMPLES_DIR, categoryDir);
        const sourcePath = join(process.cwd(), SOURCE_DIR);
        const components = await Promise.all(
          registryComponents.map(
            async ({ exampleFile, sourceFile, label, preview }) => {
              const exampleData = format(
                readFileSync(join(examplesPath, exampleFile), "utf8"),
                { parser: "typescript" }
              );
              const exampleCode = await highlight(highlighter, exampleData);

              const sourceData = format(
                readFileSync(join(sourcePath, sourceFile), "utf8"),
                { parser: "typescript" }
              );
              const sourceCode = await highlight(highlighter, sourceData);
              return {
                label,
                preview,
                example: {
                  id: exampleFile,
                  code: exampleCode,
                },
                source: {
                  id: sourceFile,
                  code: sourceCode,
                },
              };
            }
          )
        );

        return {
          label,
          description,
          components,
        };
      }
    )
  );
};
