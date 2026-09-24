import { notFound } from 'next/navigation';
import { geologySubcategories } from '@/lib/geology-categories';
import SubcategoryClient from './subcategory-client';

export function generateStaticParams() {
  const params = geologySubcategories.map(s => ({ subcategory: s.slug }));
  params.push({ subcategory: 'geological-field-mapping-equipment' });
  return params;
}

export default async function SubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  let sub = geologySubcategories.find(s => s.slug === subcategory);
  if (!sub && subcategory === 'geological-field-mapping-equipment') {
    sub = geologySubcategories[0];
  }
  if (!sub) notFound();

  return <SubcategoryClient subcategory={sub} />;
}
