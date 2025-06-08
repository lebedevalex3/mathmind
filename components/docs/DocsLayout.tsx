import Link from 'next/link';
import { getAllTopics } from '@/lib/topics';
import { cn } from '@/lib/utils';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const topics = getAllTopics();
  const grade5 = topics.filter(t => t.grade === 5);
  const grade9 = topics.filter(t => t.grade === 9);

  return (
    <div className="container mx-auto px-4 py-8 flex gap-8">
      <aside className="w-64 shrink-0 space-y-6">
        <div>
          <h2 className="font-semibold mb-2">5 класс</h2>
          <ul className="space-y-1 pl-2">
            {grade5.map(t => (
              <li key={t.slug}>
                <Link href={`/docs/${t.slug}`} className="hover:underline">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">9 класс</h2>
          <ul className="space-y-1 pl-2">
            {grade9.map(t => (
              <li key={t.slug}>
                <Link href={`/docs/${t.slug}`} className="hover:underline">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <article className={cn('flex-1 prose dark:prose-invert max-w-none')}>{children}</article>
    </div>
  );
}
