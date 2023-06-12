import { CONTENT_DIR, SOURCE_DIR, categories } from "@registry";
import { join } from "path";
import { readFileSync, readdirSync } from "fs";
import { getHighlighter, highlight } from "@lib/shiki";
import { Preview } from "@components/Preview";
import { format } from "prettier";

export default async function Home() {
  const data = await getComponentsByCategory();
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 gap-y-8">
        {data.map(({ name, description, components }, index) => (
          <article key={index} className="grid grid-cols-1 space-y-2">
            <h2 className="text-3xl font-bold">{name}</h2>
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
  const componentFilesByCategory = categories.map(
    ({ id, name, description, sourceId }) => {
      const categoryPath = join(process.cwd(), CONTENT_DIR, id);
      const files = readdirSync(categoryPath);
      return {
        id,
        name,
        description,
        sourceId,
        files,
      };
    }
  );

  const highlighter = await getHighlighter();

  return await Promise.all(
    componentFilesByCategory.map(
      async ({ id: categoryId, name, description, sourceId, files }) => {
        const categoryPath = join(process.cwd(), CONTENT_DIR, categoryId);
        const sourcePath = join(process.cwd(), SOURCE_DIR, sourceId + ".tsx");
        const components = await Promise.all(
          files.map(async (file) => {
            const id = file.replace(/.tsx/, "");
            const data = format(
              readFileSync(join(categoryPath, file), "utf8"),
              { parser: "typescript" }
            );
            const Component = (await import(`../examples/${categoryId}/${id}`))
              .default;
            const preview = await highlight(highlighter, data);

            const sourceData = format(readFileSync(join(sourcePath), "utf8"), {
              parser: "typescript",
            });
            const source = await highlight(highlighter, sourceData);
            return {
              id,
              component: <Component />,
              preview,
              sourceId,
              source,
            };
          })
        );

        return {
          id: categoryId,
          name,
          description,
          components,
        };
      }
    )
  );
};
