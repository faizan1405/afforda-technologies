import { notFound } from 'next/navigation';
import { geologySubcategories } from '@/lib/geology-categories';
import SubcategoryClient from './subcategory-client';

export function generateStaticParams() {
  return geologySubcategories.map(s => ({ subcategory: s.slug }));
}

export default async function SubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const sub = geologySubcategories.find(s => s.slug === subcategory);
  if (!sub) notFound();

  return <SubcategoryClient subcategory={sub} />;
}
