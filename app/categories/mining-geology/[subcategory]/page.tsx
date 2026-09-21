import { notFound } from 'next/navigation';
import { SpecializedSubcategoryPage } from '@/components/site/specialized-category';
import { miningCategory } from '@/lib/specialized-categories';

export function generateStaticParams() {
  return miningCategory.subcategories.map(subcategory => ({ subcategory: subcategory.slug }));
}

export default async function MiningSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory: slug } = await params;
  const subcategory = miningCategory.subcategories.find(item => item.slug === slug);
  if (!subcategory) notFound();
  return <SpecializedSubcategoryPage category={miningCategory} subcategory={subcategory}/>;
}
