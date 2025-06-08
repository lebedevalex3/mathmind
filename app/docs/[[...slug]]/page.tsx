import { getPage, getPages } from "fumadocs-core/source";
import { PageLayout } from "fumadocs-ui/page";
import { getTableOfContents } from "fumadocs-core/mdx";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (!page) {
    notFound();
  }

  const toc = await getTableOfContents(page.content);

  return (
    <PageLayout
      toc={toc}
      content={page.content}
      components={{}}
    />
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slug.split("/"),
  }));
}