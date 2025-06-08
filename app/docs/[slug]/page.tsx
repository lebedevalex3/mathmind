import { notFound } from 'next/navigation';
import { getTopicBySlug } from '@/lib/topics';
import { mdxToHtml } from '@/lib/mdx';
import fs from 'fs/promises';
import path from 'path';

export default async function DocPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) {
    notFound();
  }
  const filePath = path.join(process.cwd(), 'content', 'docs', String(topic.grade), `${topic.slug}.mdx`);
  let source = '';
  try {
    source = await fs.readFile(filePath, 'utf8');
  } catch {
    notFound();
  }
  const html = mdxToHtml(source);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function generateStaticParams() {
  const { getAllTopics } = await import('@/lib/topics');
  return getAllTopics().map(t => ({ slug: t.slug }));
}
