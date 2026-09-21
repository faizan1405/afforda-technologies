import { notFound } from 'next/navigation';
import { SpecializedSubcategoryPage } from '@/components/site/specialized-category';
import { defenseCategory } from '@/lib/specialized-categories';

export function generateStaticParams() {
  return defenseCategory.subcategories.map(subcategory => ({ subcategory: subcategory.slug }));
}

export default async function DefenseSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory: slug } = await params;
  const subcategory = defenseCategory.subcategories.find(item => item.slug === slug);
  if (!subcategory) notFound();
  return <SpecializedSubcategoryPage category={defenseCategory} subcategory={subcategory}/>;
}
