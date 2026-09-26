export interface BrandInfo {
  name: string;
  shortDescription: string;
  website?: string;
  specialty?: string;
}

export const brandDatabase: Record<string, BrandInfo> = {
  AFFORDA: {
    name: 'AFFORDA',
    specialty: 'Industrial & Field Technology Solutions',
    shortDescription:
      'AFFORDA supplies certified field instruments, surveying equipment, and specialized expedition gear engineered for demanding institutional, industrial, and government operations across India.',
  },
  BRUTFORCE: {
    name: 'BRUTFORCE',
    specialty: 'Tactical Illumination & Search Systems',
    shortDescription:
      'High-output searchlights and tactical illumination equipment engineered for security, tracking, and remote expedition deployment in extreme environments.',
  },
  'Breithaupt Kassel': {
    name: 'Breithaupt Kassel',
    specialty: 'Precision Geological & Compass Instruments',
    shortDescription:
      'German manufacturer of world-renowned precision geological compasses, clinometers, and specialized mining transits with over two centuries of measurement excellence.',
    website: 'https://www.breithaupt.de',
  },
  Browning: {
    name: 'Browning',
    specialty: 'Trail Cameras & Wildlife Surveillance',
    shortDescription:
      'Industry-leading trail and scouting cameras delivering high-definition nighttime infrared imaging and ultra-fast trigger speeds for wildlife monitoring and ecological research.',
    website: 'https://browningtrailcameras.com',
  },
  Brunton: {
    name: 'Brunton',
    specialty: 'Pocket Transits & Geological Compasses',
    shortDescription:
      'Pioneer in precision navigation since 1894, renowned globally for gold-standard Pocket Transits, geological measurement systems, and outdoor orientation instruments.',
    website: 'https://www.brunton.com',
  },
  'CP PLUS': {
    name: 'CP PLUS',
    specialty: 'CCTV & Security Surveillance Systems',
    shortDescription:
      'Comprehensive surveillance solutions and security cameras engineered for monitoring critical infrastructure, perimeter security, and operational facilities.',
    website: 'https://www.cpplusworld.com',
  },
  Chartwell: {
    name: 'Chartwell',
    specialty: 'Waterproof Field Books & Survey Stationery',
    shortDescription:
      'Heritage manufacturer of synthetic, waterproof, and rag-paper field books designed to withstand harsh weather, mud, and water during outdoor surveying.',
    website: 'https://www.exaclair.com',
  },
  Coleman: {
    name: 'Coleman',
    specialty: 'Expedition Camping, Tents & Outdoor Living',
    shortDescription:
      'Historic outdoor equipment maker providing rugged weatherproof tents, expedition sleeping bags, portable camp stoves, cots, and reliable field illumination.',
    website: 'https://www.coleman.com',
  },
  Edding: {
    name: 'Edding',
    specialty: 'Industrial Markers & Permanent Inks',
    shortDescription:
      'German precision marking instruments and weather-resistant industrial markers formulated for permanent legibility on stone, metal, timber, and glass.',
    website: 'https://www.edding.com',
  },
  Estwing: {
    name: 'Estwing',
    specialty: 'Geological Hammers & Rock Picks',
    shortDescription:
      'American-forged solid steel rock picks, geological hammers, and prospecting tools featuring patented Shock Reduction Grips for lifetime field durability.',
    website: 'https://www.estwing.com',
  },
  Faithfull: {
    name: 'Faithfull',
    specialty: 'Quality Field & Surveying Tools',
    shortDescription:
      'Dependable hand tools, measuring tapes, and field maintenance implements engineered for rigorous daily trade and site use.',
    website: 'https://www.faithfulltools.com',
  },
  'Firefly Fire Pumps': {
    name: 'Firefly Fire Pumps',
    specialty: 'Portable Wildfire Suppression Pumps',
    shortDescription:
      'High-capacity portable fire pumps and mobile water delivery systems designed for forest fire suppression, wildland firefighting, and emergency rescue.',
    website: 'https://www.fireflypumps.com',
  },
  'GEO Premier': {
    name: 'GEO Premier',
    specialty: 'Field Loupes & Geological Inspection Optics',
    shortDescription:
      'High-magnification triplet hand lenses and optical loupes designed for petrographic analysis, mineral identification, and geological field inspection.',
  },
  GardePro: {
    name: 'GardePro',
    specialty: 'Cellular & Wi-Fi Trail Cameras',
    shortDescription:
      'Modern trail cameras featuring 4G LTE cellular connectivity, ultra-clear low-light sensors, and intelligent motion detection for wildlife research.',
    website: 'https://gardepro.com',
  },
  Garmin: {
    name: 'Garmin',
    specialty: 'Handheld GPS & Satellite Navigation',
    shortDescription:
      'Global leader in GPS navigation, multi-GNSS handhelds, and satellite communication devices engineered for rugged outdoor tracking and geospatial logging.',
    website: 'https://www.garmin.com',
  },
  GeoMate: {
    name: 'GeoMate',
    specialty: 'GNSS / RTK Survey Receivers & Field Controllers',
    shortDescription:
      'High-precision GNSS base and rover systems, centimeter-accurate RTK positioning receivers, and rugged survey controllers for geospatial professionals.',
    website: 'https://geomatepositioning.com',
  },
  'Glenammer Engineering': {
    name: 'Glenammer Engineering',
    specialty: 'Precision Laboratory & Field Test Sieves',
    shortDescription:
      'British precision-engineered test sieves manufactured to ISO and ASTM standards for grain size analysis in mining, geology, and soil laboratories.',
    website: 'https://www.glenammer.com',
  },
  HIKMICRO: {
    name: 'HIKMICRO',
    specialty: 'Thermal Imaging & Night Vision Monoculars',
    shortDescription:
      'Leading designer of handheld thermal monoculars, thermal clip-ons, and acoustic imaging sensors for law enforcement, wildlife observation, and industrial thermography.',
    website: 'https://www.hikmicrotech.com',
  },
  Husqvarna: {
    name: 'Husqvarna',
    specialty: 'Chainsaws & Forestry Power Equipment',
    shortDescription:
      'Swedish global leader in professional chainsaws, clearing saws, and outdoor power equipment engineered for tree care, logging, and heavy-duty forest operations.',
    website: 'https://www.husqvarna.com',
  },
  KeepGuard: {
    name: 'KeepGuard',
    specialty: 'Scouting Cameras & Wildlife Trapping Optics',
    shortDescription:
      'Professional surveillance and game scouting cameras featuring invisible blackout infrared flash and durable weatherproof enclosures.',
    website: 'https://keepguardcam.com',
  },
  Kenwood: {
    name: 'Kenwood',
    specialty: 'Professional Land Mobile Radio & Communications',
    shortDescription:
      'Renowned communications technology providing mission-critical two-way radios, repeaters, and tactical transceivers for demanding field operations.',
    website: 'https://www.kenwood.com',
  },
  'Leica Geosystems': {
    name: 'Leica Geosystems',
    specialty: 'Laser Distance Meters & Surveying Instruments',
    shortDescription:
      'Part of Hexagon, Leica Geosystems revolutionizes the world of measurement with precision DISTO laser meters, total stations, and survey-grade geospatial solutions.',
    website: 'https://leica-geosystems.com',
  },
  LifeStraw: {
    name: 'LifeStraw',
    specialty: 'Expedition Water Filtration & Purification',
    shortDescription:
      'Life-saving membrane microfiltration systems that remove bacteria, parasites, and microplastics from backcountry water sources for field crews and expeditions.',
    website: 'https://lifestraw.com',
  },
  MINOX: {
    name: 'MINOX',
    specialty: 'Precision Sport Optics & Trail Surveillance',
    shortDescription:
      'German optical heritage delivering compact binoculars, spotting scopes, and rugged observation gear designed for naturalists and expedition specialists.',
    website: 'https://www.minox.com',
  },
  'Motorola Solutions': {
    name: 'Motorola Solutions',
    specialty: 'Mission-Critical Two-Way Radios & Systems',
    shortDescription:
      'World benchmark in robust two-way radio communications, MOTOTRBO digital systems, and rugged field communication for public safety and enterprise.',
    website: 'https://www.motorolasolutions.com',
  },
  Nightfox: {
    name: 'Nightfox',
    specialty: 'Digital Night Vision Binoculars & Monoculars',
    shortDescription:
      'Accessible digital night vision devices, infrared binoculars, and wide-angle night surveillance gear for nighttime wildlife tracking and perimeter security.',
    website: 'https://nightfoxstore.com',
  },
  'Northern Geological Supplies': {
    name: 'Northern Geological Supplies',
    specialty: 'Geological Field Equipment & Petrographic Tools',
    shortDescription:
      'Specialized supplier of geological measuring tapes, scratch sets, sediment cards, and specialized equipment for earth science professionals.',
    website: 'https://www.geologysuperstore.com',
  },
  'Open Acoustic Devices': {
    name: 'Open Acoustic Devices',
    specialty: 'Bioacoustic Recorders & AudioMoth Technology',
    shortDescription:
      'Developers of AudioMoth and HydroMoth open-source acoustic hardware for terrestrial and marine bioacoustic research and biodiversity monitoring.',
    website: 'https://www.openacousticdevices.info',
  },
  'Panasonic Toughbook': {
    name: 'Panasonic Toughbook',
    specialty: 'Fully Rugged Laptops & Mobile Computing',
    shortDescription:
      'MIL-STD-810H and IP65 certified rugged notebooks and handheld tablets engineered to operate under rain, extreme temperatures, dust, and severe drops.',
    website: 'https://panasonic.com/toughbook',
  },
  Ralcam: {
    name: 'Ralcam',
    specialty: 'Industrial Borescopes & Articulating Endoscopes',
    shortDescription:
      'Steerable articulating video endoscopes and precision inspection cameras for non-destructive testing inside machinery, pipelines, and cavities.',
    website: 'https://www.ralcam.com',
  },
  'Seek Thermal': {
    name: 'Seek Thermal',
    specialty: 'Compact Thermal Cameras & Sensor Cores',
    shortDescription:
      'High-resolution compact thermal cameras and smartphone-attachable infrared sensors for fire safety, electrical inspections, and outdoor exploration.',
    website: 'https://www.thermal.com',
  },
  Staedtler: {
    name: 'Staedtler',
    specialty: 'Permanent Lumocolor Markers & Precision Stationery',
    shortDescription:
      'German manufacturer of Lumocolor waterproof marking pens and technical pencils trusted by geologists and cartographers for weather-resistant annotations.',
    website: 'https://www.staedtler.com',
  },
  Suunto: {
    name: 'Suunto',
    specialty: 'Precision Clinometers, Compasses & Altimeters',
    shortDescription:
      'Finnish pioneer in mechanical compasses, hand-held optical clinometers, and field height meters trusted by forestry and survey professionals worldwide.',
    website: 'https://www.suunto.com',
  },
  'Swarovski Optik': {
    name: 'Swarovski Optik',
    specialty: 'Ultra-Premium Binoculars & Spotting Scopes',
    shortDescription:
      'Austrian precision optical instruments engineered with fluoride-containing HD lenses for unrivaled light transmission, edge-to-edge sharpness, and optical purity.',
    website: 'https://www.swarovskioptik.com',
  },
  'Vortex Optics': {
    name: 'Vortex Optics',
    specialty: 'Rugged Tactical & Field Observation Optics',
    shortDescription:
      "High-performance binoculars, spotting scopes, and laser rangefinders built to withstand extreme punishment, backed by Vortex's legendary VIP Unlimited Lifetime Warranty.",
    website: 'https://vortexoptics.com',
  },
  'Wildlife Acoustics': {
    name: 'Wildlife Acoustics',
    specialty: 'Bioacoustic Recorders & Ultrasonic Wildlife Detectors',
    shortDescription:
      'Makers of Song Meter bioacoustic and ultrasonic recording hardware for global bat research, avian population surveys, and wildlife bioacoustics.',
    website: 'https://www.wildlifeacoustics.com',
  },
};

export function getBrandInfo(brand: string): BrandInfo | undefined {
  if (!brand) return undefined;
  const trimmed = brand.trim();
  if (brandDatabase[trimmed]) {
    return brandDatabase[trimmed];
  }

  const normalized = trimmed.toLowerCase();
  const exactMatch = Object.entries(brandDatabase).find(
    ([k]) => k.toLowerCase() === normalized
  );
  if (exactMatch) return exactMatch[1];

  const partialMatch = Object.entries(brandDatabase).find(
    ([k]) => k.toLowerCase().includes(normalized) || normalized.includes(k.toLowerCase())
  );
  if (partialMatch) return partialMatch[1];

  return {
    name: trimmed,
    specialty: 'Field Equipment & Instruments',
    shortDescription: `${trimmed} instruments and products supplied and supported by AFFORDA Technologies for professional field, surveying, and research operations.`,
  };
}
