import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories } from '@/lib/catalogue';
import CategoryClient from './category-client';

export type Category = (typeof categories)[number];

export function generateStaticParams() {
  return categories.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const category: Category | undefined = categories.find(c => (c.id as string) === id);
  if (!category) {
    return {
      title: 'Category not found | AFFORDA Technologies',
    };
  }
  return {
    title: `${category.name} | AFFORDA Technologies`,
    description: category.mission,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category: Category | undefined = categories.find(c => (c.id as string) === id);
  if (!category) {
    notFound();
  }

  return <CategoryClient category={category} />;
}
