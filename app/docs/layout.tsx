import { Metadata } from 'next';
import DocsLayout from '@/components/docs/DocsLayout';

export const metadata: Metadata = {
  title: 'Учебные пособия | MathMind',
  description: 'Изучайте математику с нашими интерактивными учебными материалами для 5 и 9 классов',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}
