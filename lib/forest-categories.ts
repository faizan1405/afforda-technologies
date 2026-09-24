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
  {
    id: 'wildlife-monitoring-surveillance',
    name: 'Wildlife Monitoring & Surveillance',
    slug: 'wildlife-monitoring-surveillance',
    code: 'SUB / 04',
    description: 'Wildlife monitoring, observation, acoustic recording, thermal imaging, tracking and surveillance products for ecological research, forest patrol and field studies.',
    image: '/images/optics.webp',
  },
  {
    id: 'forestry-camping-safety-climate-products',
    name: 'Forestry Camping, Safety & Climate Products',
    slug: 'forestry-camping-safety-climate-products',
    code: 'SUB / 05',
    description: 'Field support products for forestry expeditions, safety, weather monitoring, and portable power in remote environments.',
    image: '/images/personal-protective-equipment.webp',
  },
];

export const forestTagsBySubcategory: Record<string, string[]> = {
  'forest-measurement-inventory': [
    'Forestry Measuring Tapes',
    'Tree Calipers',
    'Clinometers & Hypsometers',
    'Laser Rangefinders',
    'Increment Borers',
    'Densiometers & Canopy',
  ],
  'gps-survey-mapping-products': [
    'GNSS / RTK Receivers',
    'Handheld GPS',
    'GNSS Controllers',
    'Total Stations & Optical',
    'Survey Accessories',
    'Remote Sensing & Drones',
  ],
  'forest-fire-fighting-products': [
    'Fire Pumps & Backpack Pumps',
    'Pulaski Axes & Fire Hand Tools',
    'Drip Torches & Ignition',
    'Fire Weather & Safety',
  ],
  'wildlife-monitoring-surveillance': [
    'Camera Traps',
    'Security & Surveillance',
    'Solar Surveillance',
    'Long-Range Cameras',
    'Binoculars',
    'Spotting Scopes',
    'Monoculars',
    'Laser Rangefinders',
    'Thermal & Night Observation',
    'Bioacoustics & Acoustic Monitoring',
    'Wildlife Tracking',
    'Infrared Observation',
  ],
  'forestry-camping-safety-climate-products': [
    'Camping & Expedition',
    'Field Safety / PPE',
    'Weather Monitoring',
    'Power & Field Electronics',
  ],
};
