import { DocsLayout } from "fumadocs-ui/layout";
import { getPages } from "fumadocs-core/source";
import { Tree } from "fumadocs-ui/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Учебные пособия | MathMind",
  description: "Изучайте математику с нашими интерактивными учебными материалами для 5 и 9 классов",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout
      tree={
        <Tree
          items={[
            {
              name: "5 класс",
              items: getPages()
                .filter((page) => page.data.grade === 5)
                .map((page) => ({
                  name: page.data.title,
                  url: `/docs/${page.slug}`,
                })),
            },
            {
              name: "9 класс",
              items: getPages()
                .filter((page) => page.data.grade === 9)
                .map((page) => ({
                  name: page.data.title,
                  url: `/docs/${page.slug}`,
                })),
            },
          ]}
        />
      }
    >
      {children}
    </DocsLayout>
  );
}