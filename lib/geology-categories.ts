export interface GeologySubcategory {
  id: string;
  name: string;
  slug: string;
}

export const geologySubcategories: GeologySubcategory[] = [
  {
    id: 'geological-field-mapping',
    name: 'Geological Field & Mapping Products',
    slug: 'geological-field-mapping-equipment',
  },
];

export const geologyTagsBySubcategory: Record<string, string[]> = {
  'geological-field-mapping': [
    'Geological Compasses / Pocket Transits',
    'Field Compasses / Baseplate Compasses',
    'Geological Hammers',
    'Engineer’s Hammers',
    'Field Hammers',
    'Rock Hammers',
    'Rock Picks',
    'Gold Pans',
    'Prospecting Tools',
    'Field Hand Lens / Loupe',
    'Pocket Magnifiers',
    'Geological Scales',
    'Field Measuring Rods',
    'GPS / GNSS Receivers',
    'Laser Distance Meters',
  ],
};
