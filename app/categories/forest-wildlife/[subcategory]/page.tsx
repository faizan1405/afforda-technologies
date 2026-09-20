import { notFound } from 'next/navigation';
import { forestSubcategories } from '@/lib/forest-categories';
import SubcategoryClient from './subcategory-client';

export function generateStaticParams() {
  return forestSubcategories.map(s => ({ subcategory: s.slug }));
}

export default async function SubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const sub = forestSubcategories.find(s => s.slug === subcategory);
  if (!sub) notFound();
  
  return <SubcategoryClient subcategory={sub} />;
}
