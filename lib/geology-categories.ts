export interface GeologySubcategory {
  id: string;
  name: string;
  slug: string;
  image?: string;
}

export const geologySubcategories: GeologySubcategory[] = [
  {
    id: 'geological-field-mapping',
    name: 'Geological Field & Mapping Products',
    slug: 'geological-field-mapping-equipment',
    image: '/images/estwing-e3-22p.webp',
  },
];

import { SPECIALIZED_FILTER_GROUPS } from './product-taxonomy';

export const geologyTagsBySubcategory: Record<string, string[]> = {
  'geological-field-mapping': SPECIALIZED_FILTER_GROUPS['geological-field-mapping'] || [],
};
