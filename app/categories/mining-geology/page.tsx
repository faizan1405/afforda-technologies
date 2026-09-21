import type { Metadata } from 'next';
import { SpecializedCategoryPage } from '@/components/site/specialized-category';
import { miningCategory } from '@/lib/specialized-categories';

export const metadata: Metadata = {
  title: 'Mining & Geology | AFFORDA Technologies',
  description: miningCategory.mission,
};

export default function MiningCategoryPage() {
  return <SpecializedCategoryPage category={miningCategory}/>;
}
