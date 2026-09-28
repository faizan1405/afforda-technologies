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
    image: '/images/tree-height-meter.webp',
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
    image: '/images/firefly-black-hawk-bh1-4h.webp',
  },
  {
    id: 'wildlife-monitoring-surveillance',
    name: 'Wildlife Monitoring & Surveillance',
    slug: 'wildlife-monitoring-surveillance',
    code: 'SUB / 04',
    description: 'Wildlife monitoring, observation, acoustic recording, thermal imaging, tracking and surveillance products for ecological research, forest patrol and field studies.',
    image: '/images/browning-strike-force-fhdr40.webp',
  },
  {
    id: 'forestry-camping-safety-climate-products',
    name: 'Forestry Camping, Safety & Climate Products',
    slug: 'forestry-camping-safety-climate-products',
    code: 'SUB / 05',
    description: 'Field support products for forestry expeditions, safety, weather monitoring, and portable power in remote environments.',
    image: '/images/coleman-weathermaster-10-person-tent.webp',
  },
  {
    id: 'forestry-tools-cutting-equipment',
    name: 'Forestry Tools & Cutting Equipment',
    slug: 'forestry-tools-cutting-equipment',
    code: 'SUB / 06',
    description: 'Chainsaws, forestry cutting tools and field-maintenance equipment for felling, limbing, pruning and professional forest operations.',
    image: '/images/husqvarna-550-xp-mark-ii.webp',
  },
];

import { SPECIALIZED_FILTER_GROUPS } from './product-taxonomy';

export const forestTagsBySubcategory: Record<string, string[]> = {
  'forest-measurement-inventory': SPECIALIZED_FILTER_GROUPS['forest-measurement-inventory'] || [],
  'gps-survey-mapping-products': SPECIALIZED_FILTER_GROUPS['gps-survey-mapping-products'] || [],
  'forest-fire-fighting-products': SPECIALIZED_FILTER_GROUPS['forest-fire-fighting-products'] || [],
  'wildlife-monitoring-surveillance': SPECIALIZED_FILTER_GROUPS['wildlife-monitoring-surveillance'] || [],
  'forestry-camping-safety-climate-products': SPECIALIZED_FILTER_GROUPS['forestry-camping-safety-climate-products'] || [],
  'forestry-tools-cutting-equipment': SPECIALIZED_FILTER_GROUPS['forestry-tools-cutting-equipment'] || [],
};
