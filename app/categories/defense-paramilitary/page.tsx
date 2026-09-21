import type { Metadata } from 'next';
import { SpecializedCategoryPage } from '@/components/site/specialized-category';
import { defenseCategory } from '@/lib/specialized-categories';

export const metadata: Metadata = {
  title: 'Defense & Paramilitary | AFFORDA Technologies',
  description: defenseCategory.mission,
};

export default function DefenseCategoryPage() {
  return <SpecializedCategoryPage category={defenseCategory}/>;
}
