export const forestSubcategories = [
  { id: 'forest-survey', name: 'Forest Survey & Measurement Products', slug: 'forest-survey' },
  { id: 'forest-inventory', name: 'Forest Inventory & Monitoring', slug: 'forest-inventory' },
  { id: 'wildlife-monitoring', name: 'Wildlife Monitoring Products', slug: 'wildlife-monitoring' },
  { id: 'animal-tracking', name: 'Animal Tracking & Research', slug: 'animal-tracking' },
  { id: 'optics-forestry', name: 'Optics for Forestry & Wildlife', slug: 'optics-forestry' },
  { id: 'tree-health', name: 'Tree & Forest Health Products', slug: 'tree-health' },
  { id: 'nursery-plantation', name: 'Nursery & Plantation Products', slug: 'nursery-plantation' },
  { id: 'forest-fire', name: 'Forest Fire Detection & Management', slug: 'forest-fire' },
  { id: 'remote-sensing', name: 'Remote Sensing & Mapping', slug: 'remote-sensing' },
  { id: 'forest-weather', name: 'Forest Weather & Environmental Monitoring', slug: 'forest-weather' },
  { id: 'wood-timber', name: 'Wood & Timber Measurement', slug: 'wood-timber' },
  { id: 'biodiversity-ecological', name: 'Biodiversity & Ecological Research', slug: 'biodiversity-ecological' },
  { id: 'field-expedition', name: 'Field & Expedition Products', slug: 'field-expedition' },
  { id: 'forest-protection', name: 'Forest Protection & Anti-Poaching', slug: 'forest-protection' },
  { id: 'forestry-software', name: 'Forestry Software & Digital Solutions', slug: 'forestry-software' },
];

export const forestTagsBySubcategory: Record<string, string[]> = {
  'forest-survey': ['Diameter Tape', 'Tree Calipers', 'Clinometers', 'Hypsometers', 'GPS/GNSS Devices', 'Rangefinders', 'Laser Distance Meters', 'Forestry Compasses', 'DBH Tools'],
  'wildlife-monitoring': ['Camera Traps', 'Infrared Camera Traps', 'Cellular Camera Traps', 'Acoustic Monitoring Devices', 'Bat Detectors', 'Thermal Cameras', 'Night Vision Devices', 'Binoculars', 'Spotting Scopes', 'Wildlife Tracking Products'],
  'animal-tracking': ['Radio Telemetry', 'GPS Animal Collars', 'VHF Tracking Systems', 'Wildlife Tags', 'Tracking Antennas', 'Receiver Systems'],
  'forest-fire': ['Thermal Cameras', 'Fire Detection Cameras', 'Weather Stations', 'Anemometers', 'Smoke Detection Systems', 'GPS Fire Mapping', 'Long-Range Thermal Systems'],
  'remote-sensing': ['Drones', 'Thermal Drones', 'Mapping Drones', 'LiDAR', 'GNSS Survey Products', 'GIS Systems', 'Laser Scanners'],
  'field-expedition': ['GPS', 'Compasses', 'Rangefinders', 'Headlamps', 'Field Radios', 'Rugged Tablets', 'Portable Power Stations', 'Solar Chargers', 'Field Bags'],
  'optics-forestry': ['Binoculars', 'Spotting Scopes', 'Night Vision Devices', 'Thermal Cameras', 'Rangefinders']
};
