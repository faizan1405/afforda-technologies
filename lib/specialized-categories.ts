export type SpecializedSubcategory = {
  id: string;
  name: string;
  slug: string;
  tags?: string[];
};

export type SpecializedCategory = {
  id: 'defense' | 'mining';
  name: string;
  path: string;
  code: string;
  image: string;
  mission: string;
  subcategories: SpecializedSubcategory[];
};

export const defenseCategory: SpecializedCategory = {
  id: 'defense',
  name: 'Defense & Paramilitary',
  path: '/categories/defense-paramilitary',
  code: 'FLD / 10',
  image: 'thermal',
  mission: 'Explore existing imaging, navigation, optics, communication and computing equipment for demanding field operations.',
  subcategories: [
    { id: 'defense-thermal', name: 'Thermal Imaging & Detection', slug: 'thermal-imaging-detection', tags: ['Thermal Monoculars'] },
    { id: 'defense-night', name: 'Night Vision Systems', slug: 'night-vision-systems' },
    { id: 'defense-surveillance', name: 'Surveillance & Monitoring', slug: 'surveillance-monitoring' },
    { id: 'defense-navigation', name: 'Navigation & GPS', slug: 'navigation-gps' },
    { id: 'defense-optics', name: 'Optics & Observation', slug: 'optics-observation' },
    { id: 'defense-communication', name: 'Communication Systems', slug: 'communication-systems' },
    { id: 'defense-rugged', name: 'Rugged Computing', slug: 'rugged-computing' },
    { id: 'defense-field-operations', name: 'Field Operations Products', slug: 'field-operations-products' },
  ],
};

export const miningCategory: SpecializedCategory = {
  id: 'mining',
  name: 'Mining & Geology',
  path: '/categories/mining-geology',
  code: 'GEO / 11',
  image: 'geology',
  mission: 'Explore existing geological instruments, mapping equipment, inspection tools and rugged computing for field work.',
  subcategories: [
    { id: 'mining-field-mapping', name: 'Geological Field & Mapping Products', slug: 'geological-field-mapping-products' },
    { id: 'mining-survey', name: 'Geological Survey & Measurement', slug: 'geological-survey-measurement' },
    { id: 'mining-mapping', name: 'Mapping / GNSS', slug: 'mapping-gnss' },
    { id: 'mining-compasses', name: 'Geological Compasses & Pocket Transits', slug: 'geological-compasses-pocket-transits' },
    { id: 'mining-inspection', name: 'Field Inspection', slug: 'field-inspection' },
    { id: 'mining-rugged', name: 'Rugged Computing', slug: 'rugged-computing' },
    { id: 'mining-distance', name: 'Distance Measurement', slug: 'distance-measurement' },
  ],
};
