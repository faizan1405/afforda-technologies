export interface ForestSubcategory {
  id: string;
  name: string;
  slug: string;
  code?: string;
  description?: string;
  image?: string;
}

export const forestSubcategories: ForestSubcategory[] = [
  {
    id: 'forest-measurement-inventory',
    name: 'Forest Measurement & Inventory',
    slug: 'forest-measurement-inventory',
    code: 'SUB / 01',
    description: 'Precision tree height meters, calipers, clinometers, hypsometers and timber mensuration instruments.',
    image: '/images/forest.webp',
  },
  {
    id: 'gps-survey-mapping-products',
    name: 'GPS, Survey & Mapping Products',
    slug: 'gps-survey-mapping-products',
    code: 'SUB / 02',
    description: 'Handheld GPS, professional GNSS receivers, total stations, survey transits and field mapping equipment.',
    image: '/images/surveying.webp',
  },
  {
    id: 'forest-fire-fighting-products',
    name: 'Forest Fire-Fighting Products',
    slug: 'forest-fire-fighting-products',
    code: 'SUB / 03',
    description: 'Wildfire suppression pumps, Pulaski axes, McLeod tools, drip torches, fire shelters and weather kits.',
    image: '/images/thermal.webp',
  },
];

export const forestTagsBySubcategory: Record<string, string[]> = {
  'forest-measurement-inventory': [],
  'gps-survey-mapping-products': [],
  'forest-fire-fighting-products': [],
};
