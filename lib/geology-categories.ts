export interface GeologySubcategory {
  id: string;
  name: string;
  slug: string;
  code?: string;
  description?: string;
  image?: string;
}

export const geologySubcategories: GeologySubcategory[] = [
  {
    id: 'geological-compasses-clinometers',
    name: 'Geological Compasses & Clinometers',
    slug: 'geological-compasses-clinometers',
    code: 'SUB / 01',
    description: 'Precision pocket transits, stratum compasses, and sighting inclinometers for structural strike and dip measurement.',
    image: '/images/brunton-f-5010.webp',
  },
  {
    id: 'geological-hammers-chisels-rock-tools',
    name: 'Geological Hammers, Chisels & Rock Tools',
    slug: 'geological-hammers-chisels-rock-tools',
    code: 'SUB / 02',
    description: 'Solid forged steel rock picks, chisel-edge geological hammers, and heavy-duty cold rock chisels.',
    image: '/images/estwing-e3-22p.webp',
  },
  {
    id: 'hand-lenses-magnification',
    name: 'Hand Lenses & Magnification',
    slug: 'hand-lenses-magnification',
    code: 'SUB / 03',
    description: 'Achromatic and aplanatic triplet geological hand lenses and pocket loupes for mineral inspection.',
    image: '/images/geo-premier-triplet-hand-lens.webp',
  },
  {
    id: 'gps-mapping-distance-measurement',
    name: 'GPS, Mapping & Distance Measurement',
    slug: 'gps-mapping-distance-measurement',
    code: 'SUB / 04',
    description: 'Multi-GNSS handheld navigators, laser distance meters, and field mapping instruments.',
    image: '/images/garmin-etrex-se.webp',
  },
  {
    id: 'field-notebooks-pens-measuring-tools',
    name: 'Field Notebooks, Pens & Measuring Tools',
    slug: 'field-notebooks-pens-measuring-tools',
    code: 'SUB / 05',
    description: 'Waterproof collimation field books, technical mapping pens, chinagraph markers, and measuring tapes.',
    image: '/images/chartwell-collimation-book-2426.webp',
  },
  {
    id: 'mineral-hardness-property-testing',
    name: 'Mineral Hardness & Property Testing',
    slug: 'mineral-hardness-property-testing',
    code: 'SUB / 06',
    description: 'Mohs hardness reference plates, streak plates, acid dropper bottles, and magnetic scribers.',
    image: '/images/tungsten-carbide-scriber-with-magnet-black.webp',
  },
  {
    id: 'geological-sieves-sample-analysis',
    name: 'Geological Sieves & Sample Analysis',
    slug: 'geological-sieves-sample-analysis',
    code: 'SUB / 07',
    description: 'Stainless steel analytical test sieves and stackable mesh sets for sediment and particle size analysis.',
    image: '/images/200mm-glenammer-sieves.webp',
  },
  {
    id: 'field-communication-expedition-support',
    name: 'Field Communication & Expedition Support',
    slug: 'field-communication-expedition-support',
    code: 'SUB / 08',
    description: 'License-free two-way field radios and personal water filtration for remote geological expeditions.',
    image: '/images/radio.webp',
  },
];

export const geologyTagsBySubcategory: Record<string, string[]> = {
  'geological-compasses-clinometers': [
    'Pocket Transits',
    'Stratum Compasses',
    'Clinometers & Inclinometers',
  ],
  'geological-hammers-chisels-rock-tools': [
    'Pointed Rock Picks',
    'Chisel Edge Picks',
    'Rock Chisels',
  ],
  'hand-lenses-magnification': [
    'Triplet Hand Lenses',
    'Field Loupes',
  ],
  'gps-mapping-distance-measurement': [
    'Handheld GPS',
    'Laser Distance Meters',
  ],
  'field-notebooks-pens-measuring-tools': [
    'Field Notebooks',
    'Mapping Pens & Markers',
    'Measuring Tapes',
  ],
  'mineral-hardness-property-testing': [
    'Mohs Hardness Testing',
    'Streak Plates',
    'Acid Testing',
    'Magnetic Scribers',
  ],
  'geological-sieves-sample-analysis': [
    'Analytical Test Sieves',
    'Half Height Sieves',
    'Field Sieve Sets',
  ],
  'field-communication-expedition-support': [
    'Field Radios',
    'Hydration & Water Filtration',
  ],
};
