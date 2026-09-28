import { SPECIALIZED_FILTER_GROUPS } from './product-taxonomy';

export type SpecializedSubcategory = {
  id: string;
  name: string;
  slug: string;
  tags?: string[];
  image?: string;
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
    {
      id: 'defense-thermal',
      name: 'Thermal Imaging & Detection',
      slug: 'thermal-imaging-detection',
      image: '/images/thermal.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-thermal'],
    },
    {
      id: 'defense-night',
      name: 'Night Vision Systems',
      slug: 'night-vision-systems',
      image: '/images/nightfox-vulpes.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-night'],
    },
    {
      id: 'defense-surveillance',
      name: 'Surveillance & Monitoring',
      slug: 'surveillance-monitoring',
      image: '/images/cctv-surveillance-camera.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-surveillance'],
    },
    {
      id: 'defense-navigation',
      name: 'Navigation & GPS',
      slug: 'navigation-gps',
      image: '/images/garmin-gpsmap-65.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-navigation'],
    },
    {
      id: 'defense-optics',
      name: 'Optics & Observation',
      slug: 'optics-observation',
      image: '/images/swarovski-optik-binoculars.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-optics'],
    },
    {
      id: 'defense-communication',
      name: 'Communication Systems',
      slug: 'communication-systems',
      image: '/images/motorola-mototrbo-r2.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-communication'],
    },
    {
      id: 'defense-rugged',
      name: 'Rugged Computing',
      slug: 'rugged-computing',
      image: '/images/toughbook.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-rugged'],
    },
    {
      id: 'defense-field-operations',
      name: 'Field Operations Products',
      slug: 'field-operations-products',
      image: '/images/field-headlamps.webp',
      tags: SPECIALIZED_FILTER_GROUPS['defense-field-operations'],
    },
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
    {
      id: 'mining-field-mapping',
      name: 'Geological Field & Mapping Products',
      slug: 'geological-field-mapping-products',
      image: '/images/estwing-rock-pick-square-head-e6-24pc.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-field-mapping'],
    },
    {
      id: 'mining-survey',
      name: 'Geological Survey & Measurement',
      slug: 'geological-survey-measurement',
      image: '/images/brunton-geo-pocket-transit-f-5010.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-survey'],
    },
    {
      id: 'mining-mapping',
      name: 'Mapping / GNSS',
      slug: 'mapping-gnss',
      image: '/images/geomate-gnss-receiver.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-mapping'],
    },
    {
      id: 'mining-compasses',
      name: 'Geological Compasses & Pocket Transits',
      slug: 'geological-compasses-pocket-transits',
      image: '/images/brunton-f-5012-axis.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-compasses'],
    },
    {
      id: 'mining-inspection',
      name: 'Field Inspection',
      slug: 'field-inspection',
      image: '/images/geo-premier-triplet-hand-lens.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-inspection'],
    },
    {
      id: 'mining-rugged',
      name: 'Rugged Computing',
      slug: 'rugged-computing',
      image: '/images/toughbook.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-rugged'],
    },
    {
      id: 'mining-distance',
      name: 'Distance Measurement',
      slug: 'distance-measurement',
      image: '/images/leica-disto-laser-distance-meter.webp',
      tags: SPECIALIZED_FILTER_GROUPS['mining-distance'],
    },
  ],
};
