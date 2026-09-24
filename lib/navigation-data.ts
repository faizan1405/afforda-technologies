import type { Product } from '@/lib/catalogue';

export interface CategoryNavItem {
  id: string;
  name: string;
  code: string;
  href: string;
}

export interface IndustryNavItem {
  id: string;
  name: string;
  code: string;
  desc: string;
  specialty: string;
  href: string;
}

export interface BrandNavItem {
  name: string;
  queryParam: string;
  specialty: string;
  code: string;
  href: string;
}

export const navigationCategories: CategoryNavItem[] = [
  { id: 'forestry', name: 'Forestry & Wildlife', code: 'BIO / 01', href: '/categories/forest-wildlife' },
  { id: 'geology', name: 'Geological Products', code: 'GEO / 02', href: '/categories/geology' },
  { id: 'surveying', name: 'Surveying & DGPS', code: 'GNSS / 03', href: '/category/surveying' },
  { id: 'navigation', name: 'Mapping & Navigation', code: 'NAV / 04', href: '/category/navigation' },
  { id: 'thermal', name: 'Thermal & Night Vision', code: 'IR / 05', href: '/category/thermal' },
  { id: 'optics', name: 'Optics', code: 'OPT / 06', href: '/category/optics' },
  { id: 'inspection', name: 'Inspection / Borescopes', code: 'INS / 07', href: '/category/inspection' },
  { id: 'computing', name: 'Rugged Computing', code: 'RUG / 08', href: '/category/computing' },
  { id: 'communication', name: 'Field Communication', code: 'COM / 09', href: '/category/communication' },
  { id: 'defense', name: 'Defense & Paramilitary', code: 'FLD / 10', href: '/categories/defense-paramilitary' },
  { id: 'mining', name: 'Mining & Geology', code: 'GEO / 11', href: '/categories/mining-geology' },
];

export const navigationIndustries: IndustryNavItem[] = [
  {
    id: 'forestry-wildlife',
    name: 'Forestry & Wildlife',
    code: 'SEC / 01',
    desc: 'Timber inventory, canopy analysis, wildlife telemetry & wildfire suppression',
    specialty: 'Forestry & Bio-Monitoring',
    href: '/categories/forest-wildlife'
  },
  {
    id: 'surveying-dgps',
    name: 'Surveying & DGPS',
    code: 'SEC / 02',
    desc: 'Geodetic GNSS receivers, centimeter-level RTK systems & cadastral mapping',
    specialty: 'High-Precision Positioning',
    href: '/category/surveying'
  },
  {
    id: 'mining-geology',
    name: 'Mining & Geology',
    code: 'SEC / 03',
    desc: 'Mineral exploration, structural geology, core logging & geotechnical mapping',
    specialty: 'Exploration & Extraction',
    href: '/categories/mining-geology'
  },
  {
    id: 'defense-paramilitary',
    name: 'Defense & Paramilitary',
    code: 'SEC / 04',
    desc: 'Thermal monoculars, night vision, tactical optics & license-free comms',
    specialty: 'Tactical Awareness & Security',
    href: '/categories/defense-paramilitary'
  },
  {
    id: 'geological-research',
    name: 'Geological / Field Research',
    code: 'SEC / 05',
    desc: 'Strike & dip pocket transits, rock sampling, stereonets & field geology',
    specialty: 'Earth Science & Expeditions',
    href: '/categories/geology'
  }
];

export const navigationBrands: BrandNavItem[] = [
  {
    name: 'Brunton',
    queryParam: 'Brunton',
    specialty: 'Geological Transits & Compasses',
    code: 'USA',
    href: '/products?brand=Brunton'
  },
  {
    name: 'Estwing',
    queryParam: 'Estwing',
    specialty: 'Geological Hammers & Rock Picks',
    code: 'USA',
    href: '/products?brand=Estwing'
  },
  {
    name: 'GeoMate',
    queryParam: 'GeoMate',
    specialty: 'GNSS RTK Receivers & Controllers',
    code: 'GNSS',
    href: '/products?brand=GeoMate'
  },
  {
    name: 'Garmin',
    queryParam: 'Garmin',
    specialty: 'Multi-Band Handheld GPS Systems',
    code: 'NAV',
    href: '/products?brand=Garmin'
  },
  {
    name: 'Vortex Optics',
    queryParam: 'Vortex Optics',
    specialty: 'HD Binoculars & Observation Optics',
    code: 'OPT',
    href: '/products?brand=Vortex+Optics'
  },
  {
    name: 'HIKMICRO',
    queryParam: 'HIKMICRO',
    specialty: 'Thermal Monoculars & Imaging Cameras',
    code: 'IR',
    href: '/products?brand=HIKMICRO'
  },
  {
    name: 'Panasonic Toughbook',
    queryParam: 'Panasonic Toughbook',
    specialty: 'Rugged Laptops & Mobile Computing',
    code: 'RUG',
    href: '/products?brand=Panasonic+Toughbook'
  },
  {
    name: 'Browning',
    queryParam: 'Browning',
    specialty: 'Trail Cameras & Wildlife Traps',
    code: 'CAM',
    href: '/products?brand=Browning'
  },
  {
    name: 'MINOX',
    queryParam: 'MINOX',
    specialty: 'Digital Night Vision Monoculars',
    code: 'NVD',
    href: '/products?brand=MINOX'
  },
  {
    name: 'Suunto',
    queryParam: 'Suunto',
    specialty: 'Precision Sighting & Mirror Compasses',
    code: 'FIN',
    href: '/products?brand=Suunto'
  },
  {
    name: 'Wildlife Acoustics / AudioMoth',
    queryParam: 'AudioMoth',
    specialty: 'Bioacoustic Recorders & Loggers',
    code: 'BIO',
    href: '/products?brand=AudioMoth'
  },
  {
    name: 'Breithaupt Kassel',
    queryParam: 'Breithaupt Kassel',
    specialty: 'Precision Geological Transits & Levels',
    code: 'DEU',
    href: '/products?brand=Breithaupt+Kassel'
  }
];

export function matchProductBrand(product: Product, brandFilter: string): boolean {
  if (!brandFilter || brandFilter === 'all') return true;
  const filter = brandFilter.toLowerCase().trim();
  const pb = product.brand.toLowerCase().trim();
  const slug = product.slug.toLowerCase();
  const name = product.name.toLowerCase();

  if (filter === 'audiomoth' || filter.includes('wildlife acoustics') || filter.includes('audiomoth')) {
    return pb === 'open acoustic devices' || pb.includes('wildlife acoustics') || slug.includes('audiomoth') || name.includes('audiomoth') || slug.includes('song-meter');
  }
  if (filter.includes('panasonic') || filter.includes('toughbook')) {
    return pb.includes('panasonic') || name.includes('toughbook');
  }
  if (filter.includes('vortex')) {
    return pb.includes('vortex');
  }
  if (filter.includes('breithaupt')) {
    return pb.includes('breithaupt');
  }
  if (filter.includes('glenammer')) {
    return pb.includes('glenammer');
  }
  if (filter.includes('northern')) {
    return pb.includes('northern');
  }
  return pb === filter || pb.includes(filter);
}
