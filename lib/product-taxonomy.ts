import type { Product } from './catalogue';

/**
 * PHASE 6 — GLOBAL CATEGORY / TAG TAXONOMY
 * Centralized, canonical product taxonomy definition for AFFORDA Technologies.
 */

export const CATEGORY_FILTER_GROUPS: Record<string, string[]> = {
  navigation: [
    'GPS & GNSS',
    'Handheld GPS',
    'Wearable GPS & Smartwatches',
    'Compasses & Field Navigation',
    'Clinometers & Forest Measurement',
    'Wildlife Tracking',
    'Remote Sensing & Drones',
  ],
  thermal: [
    'Thermal Cameras',
    'Thermal Monoculars & Binoculars',
    'Night Vision Devices',
    'Mobile Thermal Imaging',
    'Industrial & Radiometric Thermal',
    'Firefighting & Search/Rescue Thermal',
    'Infrared & Illumination',
    'Laser Rangefinders',
  ],
  optics: [
    'Binoculars',
    'Spotting Scopes',
    'Monoculars',
    'Laser Rangefinders',
    'Rifle Scopes & Tactical Optics',
    'Tripods & Accessories',
  ],
  inspection: [
    'Borescopes & Endoscopes',
    'Industrial Inspection',
    'Automotive Inspection',
    'Pipe Inspection',
    'Thermal Inspection',
  ],
  computing: [
    'Rugged Laptops',
    'Rugged Tablets',
    'Rugged Mobile Computing',
    'Accessories / Expansion',
  ],
  communication: [
    'Two-Way Radios',
    'Digital / DMR Radios',
    'Tactical Communications',
    'Base Stations',
    'Communication Accessories',
  ],
  surveying: [
    'GNSS / RTK Receivers',
    'Handheld GPS',
    'Data Collectors & Controllers',
    'Total Stations & Levels',
    'Compasses & Field Measurement',
    'Survey Accessories',
    'Remote Sensing & Drones',
  ],
  geology: [
    'Geological Compasses',
    'Hand Lenses & Inspection',
    'Geological Hammers & Tools',
    'Field Mapping & Marking',
    'Sample Collection & Storage',
    'Survey & Measurement',
    'Field Books & Accessories',
  ],
  forestry: [
    'Camera Traps',
    'Cellular Trail Cameras',
    'Wildlife Tracking',
    'Acoustic Monitoring',
    'Forestry Measurement',
    'Forestry Tools & Cutting',
    'Fire Fighting Equipment',
    'Camping & Field Equipment',
    'Observation Optics',
    'Thermal & Night Vision',
    'GPS & Surveying',
  ],
  defense: [
    'Thermal & Night Vision',
    'Surveillance',
    'Navigation',
    'Optics',
    'Communications',
    'Rugged Computing',
    'Field Operations',
    'Action Cameras',
  ],
  mining: [
    'Geological Field Tools',
    'Survey & Measurement',
    'Mapping & GNSS',
    'Compasses',
    'Field Inspection',
    'Rugged Computing',
    'Distance Measurement',
  ],
};

export const TAG_ALIASES: Record<string, string[]> = {
  // --- GPS / GNSS / Navigation ---
  'GPS': ['GPS & GNSS', 'Mapping & GNSS', 'Navigation', 'Survey & Measurement', 'GPS & Surveying'],
  'GPS/GNSS Devices': ['GPS & GNSS', 'Mapping & GNSS', 'Navigation', 'Survey & Measurement', 'GPS & Surveying'],
  'GPS / GNSS Receivers': ['GPS & GNSS', 'Mapping & GNSS', 'Navigation', 'Survey & Measurement', 'GPS & Surveying'],
  'GNSS / RTK Receivers': ['GNSS / RTK Receivers', 'GPS & GNSS', 'Mapping & GNSS', 'GPS & Surveying', 'Survey & Measurement', 'Navigation'],
  'GNSS Receivers': ['GNSS / RTK Receivers', 'GPS & GNSS', 'Mapping & GNSS', 'Survey & Measurement', 'GPS & Surveying'],
  'RTK Rover': ['GNSS / RTK Receivers', 'GPS & GNSS', 'Mapping & GNSS', 'Survey & Measurement'],
  'DGPS': ['GNSS / RTK Receivers', 'GPS & GNSS', 'Mapping & GNSS', 'Survey & Measurement'],
  'Handheld GPS': ['Handheld GPS', 'GPS & GNSS', 'Mapping & GNSS', 'Navigation', 'GPS & Surveying', 'Survey & Measurement'],
  'Expedition GPS': ['GPS & GNSS', 'Wearable GPS & Smartwatches', 'Navigation'],
  'Navigation': ['GPS & GNSS', 'Navigation'],
  'GPS & GNSS': ['GPS & GNSS', 'Mapping & GNSS', 'GPS & Surveying', 'Survey & Measurement', 'Navigation'],
  'Field Navigation': ['Compasses & Field Navigation', 'Navigation'],
  'Tactical Navigation': ['Handheld GPS', 'Wearable GPS & Smartwatches', 'Navigation'],
  'Wearable GPS': ['Wearable GPS & Smartwatches', 'Navigation', 'GPS & GNSS'],
  'Smartwatches': ['Wearable GPS & Smartwatches', 'Navigation', 'GPS & GNSS'],
  'Multisport Smartwatches': ['Wearable GPS & Smartwatches', 'Navigation'],
  'Hybrid Smartwatches': ['Wearable GPS & Smartwatches', 'Navigation'],
  'AMOLED Watches': ['Wearable GPS & Smartwatches', 'Navigation'],
  'Wrist-Mounted GPS': ['Wearable GPS & Smartwatches', 'Handheld GPS', 'Navigation'],
  'Wearable Navigation': ['Wearable GPS & Smartwatches', 'Navigation'],
  'Wearable GPS & Smartwatches': ['Wearable GPS & Smartwatches', 'Navigation', 'GPS & GNSS'],
  'GPS Radios': ['Two-Way Radios', 'Tactical Communications', 'Communications'],
  'GPS Wildlife Tracking Collar': ['Wildlife Tracking'],
  'GPS Wildlife Collars': ['Wildlife Tracking'],
  'Wildlife Tracking': ['Wildlife Tracking'],
  'GPS Acoustic': ['Acoustic Monitoring'],

  // --- Remote Sensing / Drones / Controllers ---
  'Remote Sensing & Drones': ['Remote Sensing & Drones', 'GPS & Surveying'],
  'UAV / Drone': ['Remote Sensing & Drones', 'GPS & Surveying'],
  'Multispectral Camera': ['Remote Sensing & Drones', 'GPS & Surveying'],
  'LiDAR System': ['Remote Sensing & Drones', 'GPS & Surveying'],
  'Forestry Boundary Mapping Services': ['Remote Sensing & Drones', 'GPS & Surveying'],
  'Data Collectors & Controllers': ['Data Collectors & Controllers', 'Rugged Mobile Computing', 'GPS & Surveying', 'Rugged Computing', 'Mapping & GNSS'],
  'Electronic Data Collector': ['Data Collectors & Controllers', 'Rugged Mobile Computing', 'GPS & Surveying'],
  'Field Data Recorder': ['Data Collectors & Controllers', 'Rugged Mobile Computing', 'GPS & Surveying'],
  'Field Software': ['Data Collectors & Controllers', 'GPS & Surveying'],
  'Total Stations & Levels': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Total Station': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Automatic Level': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Auto Levels': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Optical Levels': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Laser Levels': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Precision Leveling': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],
  'Rotating Lasers': ['Total Stations & Levels', 'Survey & Measurement', 'GPS & Surveying'],

  // --- Compasses & Clinometers ---
  'Compasses & Field Measurement': ['Compasses & Field Measurement', 'Compasses', 'Survey & Measurement', 'Navigation', 'Forestry Measurement', 'GPS & Surveying'],
  'Compasses & Field Navigation': ['Compasses & Field Navigation', 'Compasses & Field Measurement', 'Compasses', 'Navigation'],
  'Geological Compasses / Pocket Transits': ['Geological Compasses', 'Compasses & Field Navigation', 'Compasses', 'Forestry Measurement'],
  'Field Compasses / Baseplate Compasses': ['Geological Compasses', 'Compasses & Field Navigation', 'Compasses'],
  'Geological Compasses': ['Geological Compasses', 'Compasses & Field Measurement', 'Compasses & Field Navigation', 'Compasses', 'Navigation', 'Survey & Measurement'],
  'Compasses': ['Compasses & Field Measurement', 'Compasses & Field Navigation', 'Compasses', 'Geological Compasses', 'Navigation'],
  'Forestry Compasses': ['Compasses & Field Navigation', 'Forestry Measurement', 'Compasses', 'Navigation'],
  'Bearing Compasses': ['Compasses & Field Navigation', 'Compasses', 'Compasses & Field Measurement', 'Navigation'],
  'Precision Compasses': ['Compasses & Field Navigation', 'Compasses', 'Compasses & Field Measurement', 'Navigation'],
  'Sighting Compasses': ['Compasses & Field Navigation', 'Compasses', 'Navigation'],
  'Mirror Compasses': ['Compasses & Field Navigation', 'Compasses', 'Navigation'],
  'Global Compasses': ['Compasses & Field Navigation', 'Compasses', 'Navigation'],
  'Surveying Compasses': ['Compasses & Field Navigation', 'Compasses & Field Measurement', 'Compasses', 'Navigation'],
  'Clar Compass': ['Geological Compasses', 'Compasses'],
  'Stratum Compasses': ['Geological Compasses', 'Compasses'],
  'Field Transits': ['Geological Compasses', 'Compasses'],
  'Pocket Transits': ['Geological Compasses', 'Compasses'],
  'Digital Compass': ['Compasses & Field Measurement', 'Compasses & Field Navigation', 'GPS & Surveying', 'Forestry Measurement'],
  'Staff Compass': ['Compasses & Field Measurement', 'Compasses & Field Navigation', 'GPS & Surveying', 'Forestry Measurement'],
  'Altimeter': ['Compasses & Field Measurement', 'Forestry Measurement', 'GPS & Surveying'],
  'Clinometer': ['Clinometers & Forest Measurement', 'Forestry Measurement', 'Survey & Measurement'],
  'Clinometers': ['Clinometers & Forest Measurement', 'Forestry Measurement', 'Survey & Measurement'],
  'Optical Clinometers': ['Clinometers & Forest Measurement', 'Survey & Measurement'],
  'Height Meter': ['Clinometers & Forest Measurement', 'Forestry Measurement', 'Survey & Measurement'],
  'Height Meters': ['Clinometers & Forest Measurement', 'Forestry Measurement', 'Survey & Measurement'],
  'Hypsometer': ['Clinometers & Forest Measurement', 'Forestry Measurement'],
  'Relaskop': ['Clinometers & Forest Measurement', 'Forestry Measurement'],
  'Slope Measurement': ['Clinometers & Forest Measurement', 'Forestry Measurement', 'Survey & Measurement'],

  // --- Thermal & Night Vision ---
  'Thermal Cameras': ['Thermal Cameras', 'Thermal Inspection', 'Thermal & Night Vision'],
  'Thermal Imaging Cameras': ['Thermal Cameras', 'Thermal Inspection', 'Thermal & Night Vision'],
  'Thermal Imaging': ['Thermal Cameras', 'Thermal & Night Vision'],
  'Handheld Thermal': ['Thermal Cameras', 'Thermal & Night Vision'],
  'Thermal & Night Vision': ['Thermal Cameras', 'Thermal & Night Vision'],
  'Thermal & Night Observation': ['Thermal Cameras', 'Thermal & Night Vision'],
  'Thermal Monoculars': ['Thermal Monoculars & Binoculars', 'Thermal & Night Vision', 'Monoculars'],
  'Thermal Binoculars': ['Thermal Monoculars & Binoculars', 'Binoculars', 'Thermal & Night Vision', 'Optics'],
  'Thermal Monoculars & Binoculars': ['Thermal Monoculars & Binoculars', 'Thermal & Night Vision', 'Optics', 'Binoculars'],
  'Night Vision Devices': ['Night Vision Devices', 'Thermal & Night Vision'],
  'Night Vision Binoculars': ['Night Vision Devices', 'Thermal & Night Vision', 'Binoculars'],
  'Night Vision Goggles': ['Night Vision Devices', 'Thermal & Night Vision'],
  'Night Vision Monoculars': ['Night Vision Devices', 'Thermal & Night Vision', 'Monoculars'],
  'Tactical Night Vision': ['Night Vision Devices', 'Thermal & Night Vision'],
  'Helmet Mount NVG': ['Night Vision Devices', 'Field Operations', 'Thermal & Night Vision'],
  'Night Observation': ['Night Vision Devices', 'Thermal & Night Vision'],
  'Mobile Thermal Imaging': ['Mobile Thermal Imaging', 'Thermal Inspection', 'Thermal Cameras'],
  'Mobile Thermal': ['Mobile Thermal Imaging', 'Thermal Inspection', 'Thermal Cameras'],
  'Smartphone Thermal': ['Mobile Thermal Imaging', 'Thermal Inspection'],
  'Industrial Inspection': ['Industrial Inspection', 'Industrial & Radiometric Thermal', 'Field Inspection', 'Field Operations'],
  'Radiometric Inspection': ['Industrial & Radiometric Thermal', 'Thermal Inspection', 'Industrial Inspection'],
  'Handheld Thermography': ['Industrial & Radiometric Thermal', 'Thermal Cameras', 'Field Inspection'],
  'Firefighting Thermal Cameras': ['Firefighting & Search/Rescue Thermal', 'Fire Fighting Equipment', 'Thermal Cameras'],
  'Firefighting Cameras': ['Firefighting & Search/Rescue Thermal', 'Fire Fighting Equipment', 'Field Operations'],
  'Search and Rescue': ['Firefighting & Search/Rescue Thermal', 'Field Operations'],
  'Decision Making Cameras': ['Firefighting & Search/Rescue Thermal', 'Field Operations'],
  'Tactical Thermal': ['Firefighting & Search/Rescue Thermal', 'Thermal & Night Vision', 'Thermal Cameras'],
  'Infrared Observation': ['Infrared & Illumination', 'Thermal & Night Vision'],
  'Infrared Search Lights': ['Infrared & Illumination', 'Field Operations'],
  'Field Lighting': ['Infrared & Illumination', 'Field Operations', 'Camping & Field Equipment', 'Communication Accessories'],
  'Infrared Cameras': ['Thermal & Night Vision', 'Surveillance'],
  'Tactical Illumination': ['Infrared & Illumination', 'Field Operations', 'Communication Accessories'],
  'Searchlights': ['Infrared & Illumination', 'Field Operations', 'Communication Accessories'],
  'Torches': ['Infrared & Illumination', 'Field Operations', 'Camping & Field Equipment'],
  'Headlamps': ['Field Operations', 'Camping & Field Equipment'],
  'Helmet-Mounted Lights': ['Field Operations', 'Camping & Field Equipment'],

  // --- Optics & Surveillance ---
  'Binoculars': ['Binoculars', 'Optics', 'Observation Optics'],
  'Observation Optics': ['Optics', 'Observation Optics'],
  'Optics & Observation': ['Optics', 'Observation Optics'],
  'European Optics': ['Optics', 'Observation Optics'],
  'Wildlife Observation': ['Observation Optics', 'Surveillance'],
  'Forestry Optics': ['Observation Optics'],
  'Nature Observation': ['Observation Optics'],
  'Wide Angle Optics': ['Optics'],
  'All-Round Binoculars': ['Binoculars', 'Observation Optics'],
  'Lightweight Binoculars': ['Binoculars', 'Observation Optics'],
  'Compact Binoculars': ['Binoculars', 'Observation Optics', 'Optics'],
  'Spotting Scopes': ['Spotting Scopes', 'Optics', 'Observation Optics'],
  'Long-Range Surveillance': ['Spotting Scopes', 'Surveillance', 'Observation Optics'],
  'Monoculars': ['Monoculars', 'Optics', 'Observation Optics'],
  'Laser Rangefinders': ['Laser Rangefinders', 'Optics', 'Distance Measurement', 'Observation Optics', 'Total Stations & Levels', 'Survey Accessories', 'Survey & Measurement'],
  'Rangefinders': ['Laser Rangefinders', 'Optics', 'Distance Measurement', 'Observation Optics', 'Total Stations & Levels', 'Survey Accessories', 'Survey & Measurement'],
  'Laser Rangefinder': ['Laser Rangefinders', 'Optics', 'Distance Measurement', 'Observation Optics', 'Total Stations & Levels', 'Survey Accessories', 'Survey & Measurement'],
  'Rifle Scopes': ['Rifle Scopes & Tactical Optics', 'Optics'],
  'Tactical Optics': ['Rifle Scopes & Tactical Optics', 'Optics'],
  'Tripods & Supports': ['Tripods & Accessories', 'Survey Accessories', 'Optics'],
  'Tripods & Accessories': ['Tripods & Accessories', 'Survey Accessories'],

  // --- Camera Traps & Acoustic & Surveillance ---
  'Camera Traps': ['Camera Traps', 'Surveillance'],
  'Trail Cameras': ['Camera Traps', 'Surveillance'],
  'Non-Cellular Trail Cameras': ['Camera Traps', 'Surveillance'],
  'Wildlife Cameras': ['Camera Traps', 'Surveillance'],
  '4K Wildlife Cameras': ['Camera Traps', 'Surveillance'],
  'Dual Lens Cameras': ['Camera Traps', 'Surveillance'],
  'Dual Sensor Cameras': ['Camera Traps', 'Surveillance'],
  'Solar Camera Trap': ['Camera Traps', 'Surveillance'],
  'White Flash Camera Trap': ['Camera Traps', 'Surveillance'],
  'IR Camera Trap': ['Camera Traps', 'Surveillance'],
  'GSM Camera Trap': ['Cellular Trail Cameras', 'Camera Traps', 'Surveillance'],
  'Cellular Trail Cameras': ['Cellular Trail Cameras', 'Camera Traps', 'Surveillance'],
  'Wi-Fi Trail Cameras': ['Cellular Trail Cameras', 'Camera Traps', 'Surveillance'],
  '4G Surveillance': ['Cellular Trail Cameras', 'Surveillance'],
  'Solar Surveillance': ['Camera Traps', 'Surveillance'],
  'Surveillance': ['Surveillance', 'Camera Traps'],
  'Security & Surveillance': ['Surveillance'],
  'Surveillance Systems': ['Surveillance', 'Accessories / Expansion'],
  'Forest Security & Surveillance': ['Surveillance'],
  'Anti-Poaching': ['Surveillance', 'Camera Traps'],
  'Wildlife Monitoring': ['Camera Traps', 'Surveillance'],
  'PTZ Cameras': ['Surveillance', 'Communication Accessories'],
  '4G Cameras': ['Surveillance', 'Cellular Trail Cameras', 'Communication Accessories'],
  'Solar Cameras': ['Surveillance', 'Communication Accessories'],
  'Bullet Cameras': ['Surveillance'],
  'CCTV Cameras': ['Surveillance'],
  'CCTV Recorders': ['Surveillance', 'Accessories / Expansion'],
  'Body-Worn Cameras': ['Surveillance', 'Communication Accessories', 'Field Operations'],
  'Live Streaming Cameras': ['Surveillance'],
  'Long-Range Cameras': ['Surveillance'],
  'Outdoor Surveillance': ['Surveillance'],
  'Speed Dome Cameras': ['Surveillance'],
  'Network Video Recorders': ['Accessories / Expansion', 'Surveillance'],
  'NVR': ['Accessories / Expansion', 'Surveillance'],

  // --- Action Cameras & 360° Field Imaging ---
  'Action Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Action Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Sports Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Sports Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'POV Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'POV Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Wearable Action Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Wearable Action Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Wearable Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Wearable Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  '360 Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],
  '360 Camera': ['Action Cameras', 'Surveillance', 'Field Operations'],
  'Field Imaging Cameras': ['Action Cameras', 'Surveillance', 'Field Operations'],

  // --- Bioacoustics / Acoustic Monitoring ---
  'Acoustic Monitoring': ['Acoustic Monitoring', 'Surveillance'],
  'Bioacoustics & Acoustic Monitoring': ['Acoustic Monitoring'],
  'Acoustic Recorders': ['Acoustic Monitoring', 'Surveillance'],
  'Autonomous Recording Units': ['Acoustic Monitoring'],
  'Bioacoustics': ['Acoustic Monitoring'],
  'Acoustic Loggers': ['Acoustic Monitoring'],
  'Acoustic Analysis Software': ['Acoustic Monitoring'],
  'Acoustic Enclosures': ['Acoustic Monitoring'],
  'Acoustic Localization': ['Acoustic Monitoring'],
  'Acoustic Sensors': ['Acoustic Monitoring'],
  'AudioMoth Accessories': ['Acoustic Monitoring'],
  'Bioacoustic Recorders': ['Acoustic Monitoring', 'Surveillance'],
  'Ultrasonic Bat Detectors': ['Acoustic Monitoring', 'Surveillance'],
  'Ultrasonic Bat Recorders': ['Acoustic Monitoring'],
  'Ultrasonic Microphones': ['Acoustic Monitoring'],
  'Underwater Bioacoustics': ['Acoustic Monitoring'],
  'USB Microphones': ['Acoustic Monitoring'],
  'Wildlife Microphone': ['Acoustic Monitoring'],
  'Ultrasonic Wildlife Detector': ['Acoustic Monitoring'],
  'Marine Research': ['Acoustic Monitoring'],

  // --- Inspection / Borescopes ---
  'Borescopes': ['Borescopes & Endoscopes', 'Field Inspection', 'Field Operations'],
  'Articulating Endoscopes': ['Borescopes & Endoscopes', 'Field Inspection', 'Field Operations'],
  'Industrial Borescopes': ['Borescopes & Endoscopes', 'Field Inspection', 'Industrial Inspection', 'Field Operations'],
  'Engine Borescope': ['Borescopes & Endoscopes', 'Field Inspection', 'Automotive Inspection', 'Field Operations'],
  'Endoscopes': ['Borescopes & Endoscopes', 'Field Inspection', 'Field Operations'],
  'Automotive Inspection': ['Automotive Inspection', 'Field Inspection', 'Field Operations'],
  'Automotive Diagnostics': ['Automotive Inspection', 'Field Inspection', 'Field Operations'],
  'Pipe Inspection': ['Pipe Inspection', 'Field Inspection', 'Field Operations'],
  'Standalone Inspection': ['Industrial Inspection', 'Field Inspection'],
  'Precision Inspection': ['Industrial Inspection', 'Field Inspection'],
  'Non-Destructive Testing': ['Industrial Inspection', 'Field Inspection'],

  // --- Rugged Computing ---
  'Rugged Laptops': ['Rugged Laptops', 'Rugged Computing'],
  'Semi-Rugged Computing': ['Rugged Laptops', 'Rugged Computing'],
  'Fully Rugged Computing': ['Rugged Laptops', 'Rugged Tablets', 'Rugged Computing'],
  '2-in-1 Detachable': ['Rugged Laptops', 'Rugged Tablets', 'Rugged Computing'],
  'Defense Computing': ['Rugged Computing', 'Rugged Laptops'],
  'Rugged Tablets': ['Rugged Tablets', 'Rugged Computing'],
  'Android Rugged Tablet': ['Rugged Tablets', 'Rugged Computing'],
  'Field Computing': ['Rugged Laptops', 'Rugged Computing'],
  'Handheld Computing': ['Rugged Mobile Computing', 'Rugged Computing'],
  'Field Data Collection': ['Rugged Mobile Computing', 'Survey & Measurement', 'Rugged Computing'],

  // --- Field Communication ---
  'Two-Way Radios': ['Two-Way Radios', 'Communications', 'Camping & Field Equipment', 'Field Books & Accessories', 'Field Operations'],
  'Field Radios': ['Two-Way Radios', 'Communications', 'Field Books & Accessories', 'Camping & Field Equipment'],
  'Field Communication': ['Two-Way Radios', 'Communications', 'Camping & Field Equipment'],
  'Field Communications': ['Two-Way Radios', 'Communications', 'Camping & Field Equipment'],
  'PMR446': ['Two-Way Radios', 'Communications', 'Camping & Field Equipment'],
  'License-Free Radios': ['Two-Way Radios', 'Communications', 'Camping & Field Equipment'],
  'Digital Transceivers': ['Digital / DMR Radios', 'Communications'],
  'DMR Radios': ['Digital / DMR Radios', 'Communications'],
  'DMR': ['Digital / DMR Radios', 'Communications'],
  'Digital / DMR Radios': ['Digital / DMR Radios', 'Communications', 'Camping & Field Equipment', 'Field Operations'],
  'Digital Relay Radio': ['Digital / DMR Radios', 'Tactical Communications', 'Communications', 'Camping & Field Equipment'],
  'Mesh Radios': ['Digital / DMR Radios', 'Tactical Communications', 'Communications', 'Camping & Field Equipment'],
  'P25 / Multi-Protocol Radios': ['Digital / DMR Radios', 'Communications'],
  'Encrypted Radios': ['Digital / DMR Radios', 'Communications'],
  'Slim Radios': ['Digital / DMR Radios', 'Two-Way Radios', 'Communications'],
  'Industrial Radios': ['Digital / DMR Radios', 'Two-Way Radios', 'Communications'],
  'Tactical Radios': ['Tactical Communications', 'Communications'],
  'Tactical Communications': ['Tactical Communications', 'Communications', 'Camping & Field Equipment', 'Field Operations'],
  'Tactical Communication': ['Tactical Communications', 'Communications', 'Camping & Field Equipment'],
  'Tactical & Personal Gear': ['Tactical Communications', 'Field Operations', 'Camping & Field Equipment'],
  'Base Station': ['Base Stations', 'Communications'],
  'Base Stations': ['Base Stations', 'Communications'],
  'Vehicle Transceiver': ['Base Stations', 'Communications'],

  // --- Geological Hammers & Field Tools ---
  'Geological Hammers & Tools': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Geological Hammers': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Rock Hammers': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Rock Picks': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Field Hammers': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Engineer’s Hammers': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Sledge Hammers': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Chisels': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Cold Chisels': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Rock Chisels': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Crowbars': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Digging Bars': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Pry Bars': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Wrecking Bars': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Rock Breaking': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Safety Hand Guard': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Field Tools': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Geological Field Tools': ['Geological Hammers & Tools', 'Geological Field Tools'],
  'Mining Tools': ['Geological Hammers & Tools', 'Geological Field Tools'],

  // --- Hand Lenses & Inspection ---
  'Hand Lenses & Inspection': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Hand Lenses': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Field Hand Lens / Loupe': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Geological Loupes': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Pocket Magnifiers': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Triplet Hand Lenses': ['Hand Lenses & Inspection', 'Field Inspection'],
  'UV Loupes': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Dual Loupe': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Field Loupes': ['Hand Lenses & Inspection', 'Field Inspection'],
  'Field Magnification': ['Hand Lenses & Inspection', 'Field Inspection'],

  // --- Field Mapping & Marking ---
  'Field Mapping & Marking': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement', 'Mapping & GNSS'],
  'Mapping Pens & Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Field Pens': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Permanent Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Archival Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Dual Tip Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Industrial Paint Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Non-Permanent Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Waterproof Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Clutch Pencils': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Drafting Tools': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Geological Drafting': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Leadholders': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Map Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Map Overlays': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Sample Bag Marking': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Geological Scales': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Field Mapping Supplies': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Field Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Geological Markers': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Core Tray Marking': ['Field Mapping & Marking', 'Survey Accessories', 'Survey & Measurement'],
  'Geological Mapping': ['Field Mapping & Marking', 'Mapping & GNSS'],

  // --- Sample Collection & Sieves & Mineral Testing ---
  'Sample Collection & Storage': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Prospecting Tools': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Gold Pans': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Geological Sieves': ['Sample Collection & Storage'],
  'Analytical Test Sieves': ['Sample Collection & Storage'],
  'Half Height Sieves': ['Sample Collection & Storage'],
  'Field Sieve Sets': ['Sample Collection & Storage'],
  'Property Testing': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Mineral Identification': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Mohs Hardness Testing': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Streak Plates': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Magnetic Scribers': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Acid Testing': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Fluorescent Minerals': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Geological Excavation': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Geological Sampling': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Geological Stratigraphy': ['Sample Collection & Storage', 'Survey & Measurement'],
  'Mineralogy': ['Sample Collection & Storage', 'Geological Field Tools'],
  'Sample Identification': ['Sample Collection & Storage', 'Geological Field Tools'],

  // --- Field Books & Accessories ---
  'Field Books & Accessories': ['Field Books & Accessories', 'Survey Accessories', 'Geological Field Tools', 'Survey & Measurement'],
  'Field Notebooks': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Waterproof Books': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Survey Books': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Level Books': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Dimension Books': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Cross Section Books': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Field Stationery': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Survey Stationery': ['Field Books & Accessories', 'Survey Accessories', 'Survey & Measurement'],
  'Field Accessories': ['Field Books & Accessories', 'Survey Accessories'],
  'Core Box Tools': ['Field Books & Accessories', 'Geological Field Tools'],
  'Core Logging': ['Field Books & Accessories', 'Survey & Measurement'],

  // --- Survey & Measurement / Distance ---
  'Survey & Measurement': ['Survey & Measurement', 'Total Stations & Levels', 'Survey Accessories', 'Geological Field Tools'],
  'Surveying Equipment': ['Survey & Measurement', 'Survey Accessories'],
  'Survey Accessories': ['Survey Accessories', 'Survey & Measurement', 'GPS & Surveying'],
  'Survey Tripod': ['Survey Accessories', 'GPS & Surveying'],
  'Measuring Rod': ['Survey Accessories', 'GPS & Surveying'],
  'Plot Markers': ['Survey Accessories', 'GPS & Surveying'],
  'Flagging Tape': ['Survey Accessories', 'GPS & Surveying'],
  'Field Measuring Rods': ['Survey Accessories', 'Survey & Measurement'],
  'Survey Measurement': ['Survey & Measurement', 'Survey Accessories'],
  'Field Measurement': ['Survey & Measurement', 'Survey Accessories'],
  'Distance Measurement': ['Distance Measurement', 'Survey & Measurement'],
  'Laser Distance Meters': ['Distance Measurement', 'Survey & Measurement'],
  'Measuring Tapes': ['Survey & Measurement', 'Forestry Measurement', 'Survey Accessories'],
  'Measuring Tape': ['Forestry Measurement', 'Survey Accessories'],
  'Diameter Tape': ['Forestry Measurement'],
  'Loggers Tape': ['Forestry Measurement'],
  'Tree Calipers': ['Forestry Measurement'],
  'Densiometer': ['Forestry Measurement'],
  'Bark Gauge': ['Forestry Measurement'],
  'Increment Borer': ['Forestry Measurement'],
  'Tally Counter': ['Forestry Measurement'],
  'Wedge Prism': ['Forestry Measurement'],
  'Forestry Measurement': ['Forestry Measurement', 'Survey & Measurement'],
  'Forest Measurement & Inventory': ['Forestry Measurement'],
  'Forestry Equipment': ['Forestry Tools & Cutting', 'Forestry Measurement'],
  '3D Measurement': ['Survey & Measurement', 'Distance Measurement'],
  'P2P Technology': ['Survey & Measurement', 'Distance Measurement'],
  'Chain Survey': ['Survey & Measurement', 'Survey Accessories'],
  'Civil Engineering': ['Survey & Measurement', 'Survey Accessories'],
  'Elevation Control': ['Survey & Measurement', 'Survey Accessories'],
  'Wide Field Optics': ['Distance Measurement', 'Optics'],

  // --- Forestry Tools & Cutting ---
  'Chainsaws': ['Forestry Tools & Cutting'],
  'Forestry Power Equipment': ['Forestry Tools & Cutting'],
  'Cutting & Felling Tools': ['Forestry Tools & Cutting'],
  'Maintenance & Accessories': ['Forestry Tools & Cutting'],
  'Forestry Axe': ['Forestry Tools & Cutting'],
  'Pulaski Axe': ['Fire Fighting Equipment', 'Forestry Tools & Cutting'],
  'Pulaski Forestry Axe': ['Fire Fighting Equipment', 'Forestry Tools & Cutting'],

  // --- Fire Fighting Equipment ---
  'Forest Fire-Fighting Products': ['Fire Fighting Equipment'],
  'Fire Pumps & Backpack Pumps': ['Fire Fighting Equipment'],
  'Backpack Fire Pump': ['Fire Fighting Equipment'],
  'Portable Fire Pump': ['Fire Fighting Equipment'],
  'Portable Water Pump': ['Fire Fighting Equipment'],
  'High Capacity Pumps': ['Fire Fighting Equipment'],
  'Portable Pumps': ['Fire Fighting Equipment'],
  'Water Tank': ['Fire Fighting Equipment'],
  'Fire Hose': ['Fire Fighting Equipment'],
  'Hose Reel': ['Fire Fighting Equipment'],
  'Fire Extinguisher': ['Fire Fighting Equipment'],
  'Firefighting Backpack': ['Fire Fighting Equipment'],
  'Forest Firefighting': ['Fire Fighting Equipment'],
  'Wildfire Defense': ['Fire Fighting Equipment'],
  'Fire Rake': ['Fire Fighting Equipment'],
  'Fire Swatter': ['Fire Fighting Equipment'],
  'Fire Beater': ['Fire Fighting Equipment'],
  'Drip Torch': ['Fire Fighting Equipment'],
  'Fire Shelter': ['Fire Fighting Equipment'],
  'Fire Weather Meter': ['Fire Fighting Equipment', 'Camping & Field Equipment'],
  'Fire Weather & Safety': ['Fire Fighting Equipment', 'Camping & Field Equipment'],
  'Fire Suppression': ['Fire Fighting Equipment'],
  'McLeod Tool': ['Fire Fighting Equipment'],

  // --- Camping & Field Equipment ---
  'Camping & Field Equipment': ['Camping & Field Equipment', 'Field Books & Accessories', 'Field Operations'],
  'Camping Tents': ['Camping & Field Equipment'],
  'Field Tent': ['Camping & Field Equipment'],
  'Sleeping Bags & Bedding': ['Camping & Field Equipment'],
  'Sleeping Bag': ['Camping & Field Equipment'],
  'Shelters & Canopies': ['Camping & Field Equipment'],
  'Field Shelter': ['Camping & Field Equipment'],
  'Camp Furniture & Cots': ['Camping & Field Equipment'],
  'Camping Lighting': ['Camping & Field Equipment'],
  'Camp Cooking & Essentials': ['Camping & Field Equipment'],
  'Backpacks & Field Carry': ['Camping & Field Equipment'],
  'Backpack': ['Camping & Field Equipment'],
  'Field Safety / PPE': ['Camping & Field Equipment'],
  'Field Safety Gear': ['Camping & Field Equipment'],
  'PPE': ['Camping & Field Equipment'],
  'Protective Helmets': ['Camping & Field Equipment'],
  'Helmet': ['Camping & Field Equipment'],
  'Safety Glasses': ['Camping & Field Equipment'],
  'Safety Shoes': ['Camping & Field Equipment'],
  'High-Visibility Clothing': ['Camping & Field Equipment'],
  'Gloves': ['Camping & Field Equipment'],
  'Chainsaw Protection': ['Camping & Field Equipment'],
  'Chainsaw Protective Gear': ['Camping & Field Equipment'],
  'Chainsaw Safety': ['Camping & Field Equipment'],
  'Forestry PPE': ['Camping & Field Equipment'],
  'Forestry Safety & PPE': ['Camping & Field Equipment'],
  'Weather Monitoring': ['Camping & Field Equipment'],
  'Climate Monitoring Equipment': ['Camping & Field Equipment'],
  'Portable Weather Station': ['Camping & Field Equipment'],
  'Weather Kit': ['Camping & Field Equipment'],
  'Power & Field Electronics': ['Camping & Field Equipment'],
  'Portable Power Station': ['Camping & Field Equipment'],
  'Solar Panel': ['Camping & Field Equipment'],
  'Battery Pack': ['Camping & Field Equipment'],
  'Charger': ['Camping & Field Equipment'],
  'Water Filtration': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Hydration & Water Filtration': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Water Purifiers': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Personal Water Straw': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Squeeze Bottle': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Gravity System': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Community Water': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Basecamp Water': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Camp Water Systems': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Ultrafiltration': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Field Hydration': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Ultralight Gear': ['Camping & Field Equipment'],
  'Survival Gear': ['Camping & Field Equipment'],
  'Camping & Expedition': ['Camping & Field Equipment'],
  'Expedition Equipment': ['Camping & Field Equipment', 'Field Books & Accessories'],
  'Expedition Support': ['Field Books & Accessories', 'Camping & Field Equipment'],
  'Waterproof Case': ['Camping & Field Equipment'],
  'Waterproof Cases': ['Camping & Field Equipment'],
  'Perimeter Security': ['Surveillance', 'Communication Accessories'],
};

/**
 * Normalizes a raw product tag to its canonical counterpart(s).
 */
export function normalizeProductTag(tag: string): string[] {
  return TAG_ALIASES[tag] || [tag];
}

/**
 * Returns all canonical tags for a product based on its tags, slug, and category metadata.
 */
export function getProductCanonicalTags(product: Product): string[] {
  const result = new Set<string>();

  if (product.slug === 'ralcam-h408b') {
    result.add('Borescopes & Endoscopes');
    result.add('Industrial Inspection');
    result.add('Field Inspection');
    result.add('Field Operations');
    return Array.from(result);
  }

  if (product.tags) {
    for (const rawTag of product.tags) {
      const canonicals = TAG_ALIASES[rawTag];
      if (canonicals) {
        canonicals.forEach(c => result.add(c));
      } else {
        result.add(rawTag);
      }
    }
  }

  return Array.from(result);
}

/**
 * Tests whether a product matches a given canonical filter within a category context.
 */
export function productMatchesFilter(product: Product, filter: string, categoryId?: string): boolean {
  if (product.tags?.includes(filter)) return true;
  const canonicalTags = getProductCanonicalTags(product);
  return canonicalTags.includes(filter);
}

/**
 * Returns active canonical filters with accurate product counts for a category page.
 */
export function getCategoryFilters(
  categoryId: string,
  categoryProducts: Product[]
): { tag: string; count: number }[] {
  const allowedFilters = CATEGORY_FILTER_GROUPS[categoryId] || [];

  return allowedFilters
    .map(filter => {
      const count = categoryProducts.filter(p => productMatchesFilter(p, filter, categoryId)).length;
      return { tag: filter, count };
    })
    .filter(f => f.count > 0);
}

/**
 * Global sorted unique list of canonical product types for the /products dropdown.
 */
export const CANONICAL_PRODUCT_TYPES: string[] = Array.from(
  new Set(Object.values(CATEGORY_FILTER_GROUPS).flat())
).sort((a, b) => a.localeCompare(b));

/**
 * PHASE 6B — SPECIALIZED SUBCATEGORY FILTER GROUPS
 * Curated canonical filter sets (target 2-7 filters) for specialized subcategories across:
 * - Forestry & Wildlife (6 subcategories)
 * - Geology (1 subcategory)
 * - Defense & Paramilitary (8 subcategories)
 * - Mining & Geology (7 subcategories)
 */
export const SPECIALIZED_FILTER_GROUPS: Record<string, string[]> = {
  // Forestry Subcategories
  'forest-measurement-inventory': [
    'Tree Measurement',
    'Height & Slope Measurement',
    'Rangefinders',
    'Increment & Growth Measurement',
    'Canopy Measurement',
  ],
  'gps-survey-mapping-products': [
    'GNSS / RTK',
    'Handheld GPS',
    'Data Collectors',
    'Survey Instruments',
    'Compasses & Field Measurement',
    'Survey Accessories',
    'Remote Sensing & Drones',
  ],
  'forest-fire-fighting-products': [
    'Fire Pumps',
    'Fire Hand Tools',
    'Thermal & Detection',
    'Ignition Equipment',
    'Fire Safety & Weather',
  ],
  'wildlife-monitoring-surveillance': [
    'Camera Traps',
    'Cellular & Remote Surveillance',
    'Observation Optics',
    'Thermal & Night Observation',
    'Acoustic Monitoring',
    'Wildlife Tracking',
  ],
  'forestry-camping-safety-climate-products': [
    'Tents & Shelters',
    'Sleeping & Camp Furniture',
    'Lighting & Power',
    'Camp Cooking & Essentials',
    'Field Safety / PPE',
    'Weather & Field Electronics',
  ],
  'forestry-tools-cutting-equipment': [
    'Chainsaws',
    'Forestry Cutting Tools',
    'Forestry Safety / PPE',
  ],

  // Geology Subcategory
  'geological-field-mapping': [
    'Geological Compasses',
    'Geological Hammers & Picks',
    'Hand Lenses & Inspection',
    'Field Mapping & Marking',
    'Prospecting & Sampling',
    'GPS & Survey Instruments',
    'Field Measurement',
  ],

  // Defense & Paramilitary Subcategories
  'defense-thermal': [
    'Thermal Cameras',
    'Thermal Monoculars & Binoculars',
    'Mobile Thermal Imaging',
  ],
  'defense-night': [
    'Night Vision Binoculars',
    'Night Vision Monoculars & Goggles',
    'Infrared & Thermal Systems',
  ],
  'defense-surveillance': [
    'Camera Traps',
    'Cellular / Remote Surveillance',
    'Thermal & Night Surveillance',
    'Body-Worn Surveillance',
    'Action Cameras',
    'Observation Optics',
  ],
  'defense-navigation': [
    'Handheld GPS',
    'GNSS / Navigation Devices',
    'Compasses',
  ],
  'defense-optics': [
    'Binoculars',
    'Spotting Scopes',
    'Laser Rangefinders',
    'Rifle Scopes / Tactical Optics',
    'Tripods & Supports',
  ],
  'defense-communication': [
    'Two-Way Radios',
    'Digital / Tactical Radios',
    'Communication Accessories / Base Stations',
  ],
  'defense-rugged': [
    'Rugged Laptops',
    'Rugged Tablets',
    'Rugged Mobile Computing',
  ],
  'defense-field-operations': [
    'Tactical Communications',
    'Tactical Illumination & Searchlights',
    'Field Navigation & Compasses',
    'Night & Thermal Observation',
    'Rugged Computing & Surveillance',
    'Action Cameras',
  ],

  // Mining & Geology Subcategories
  'mining-field-mapping': [
    'Geological Field Tools',
    'Field Mapping & Marking',
    'Compasses',
    'Mapping & GNSS',
  ],
  'mining-survey': [
    'Compasses & Pocket Transits',
    'Survey Instruments & Accessories',
    'Distance Measurement',
  ],
  'mining-mapping': [
    'GNSS / RTK Receivers',
    'Handheld GPS',
  ],
  'mining-compasses': [
    'Pocket Transits',
    'Baseplate & Field Compasses',
  ],
  'mining-inspection': [
    'Borescopes & Video Inspection',
    'Hand Lenses & Magnifiers',
  ],
  'mining-rugged': [
    'Rugged Laptops',
    'Rugged Tablets & Controllers',
  ],
  'mining-distance': [
    'Distance Measurement',
    'GPS & Survey Instruments',
  ],
};

/**
 * Maps a specialized filter in a given subcategory to matching products.
 */
export function productMatchesSpecializedFilter(
  product: Product,
  filter: string,
  subcategoryId?: string
): boolean {
  const pTags = new Set(product.tags || []);
  const slug = product.slug.toLowerCase();

  switch (filter) {
    // --- Forestry: Forest Measurement & Inventory ---
    case 'Tree Measurement':
      return (
        pTags.has('Forestry Measuring Tapes') ||
        pTags.has('Tree Calipers') ||
        slug.includes('tape') ||
        slug.includes('caliper') ||
        slug.includes('bark-gauge') ||
        slug.includes('tally') ||
        slug.includes('relaskop')
      );
    case 'Height & Slope Measurement':
      return (
        pTags.has('Clinometers & Hypsometers') ||
        pTags.has('Clinometers & Forest Measurement') ||
        slug.includes('clinometer') ||
        slug.includes('hypsometer') ||
        slug.includes('pm-5') ||
        slug.includes('omnislope') ||
        slug.includes('relaskop')
      );
    case 'Rangefinders':
      return (
        pTags.has('Laser Rangefinders') ||
        slug.includes('rangefinder') ||
        slug.includes('disto')
      );
    case 'Increment & Growth Measurement':
      return (
        pTags.has('Increment Borers') ||
        slug.includes('borer')
      );
    case 'Canopy Measurement':
      return (
        pTags.has('Densiometers & Canopy') ||
        slug.includes('densiometer') ||
        slug.includes('prism')
      );

    // --- Forestry: GPS, Survey & Mapping Products ---
    case 'GNSS / RTK':
    case 'GNSS / RTK Receivers':
      return (
        pTags.has('GNSS / RTK Receivers') ||
        (pTags.has('GPS & GNSS') && !pTags.has('Handheld GPS')) ||
        slug.includes('gnss') ||
        slug.includes('rtk')
      );
    case 'Handheld GPS':
      return (
        pTags.has('Handheld GPS') ||
        slug.includes('gpsmap') ||
        slug.includes('etrex') ||
        slug.includes('montana')
      );
    case 'Data Collectors':
      return (
        pTags.has('Data Collectors & Controllers') ||
        slug.includes('controller') ||
        slug.includes('data-collector')
      );
    case 'Survey Instruments':
      return (
        pTags.has('Total Stations & Levels') ||
        slug.includes('total-station') ||
        slug.includes('level') ||
        slug.includes('na730') ||
        slug.includes('rugby')
      );
    case 'Compasses & Field Measurement':
      return (
        pTags.has('Compasses & Field Measurement') ||
        pTags.has('Compasses & Field Navigation') ||
        pTags.has('Geological Compasses') ||
        slug.includes('compass')
      );
    case 'Survey Accessories':
      return (
        pTags.has('Survey Accessories') ||
        slug.includes('tripod') ||
        slug.includes('rod') ||
        slug.includes('flagging')
      );
    case 'Remote Sensing & Drones':
      return (
        pTags.has('Remote Sensing & Drones') ||
        slug.includes('drone') ||
        slug.includes('lidar') ||
        (slug.includes('camera') && !slug.includes('trail'))
      );

    // --- Forestry: Forest Fire-Fighting Products ---
    case 'Fire Pumps':
      return (
        pTags.has('Fire Pumps & Backpack Pumps') ||
        slug.includes('pump') ||
        slug.includes('tank')
      );
    case 'Fire Hand Tools':
      return (
        pTags.has('Pulaski Axes & Fire Hand Tools') ||
        slug.includes('axe') ||
        slug.includes('pulaski') ||
        slug.includes('rake') ||
        slug.includes('swatter') ||
        slug.includes('beater') ||
        slug.includes('mcleod')
      );
    case 'Thermal & Detection':
      return (
        pTags.has('Firefighting Thermal Cameras') ||
        pTags.has('Thermal Cameras') ||
        pTags.has('Firefighting & Search/Rescue Thermal') ||
        slug.includes('thermal') ||
        slug.includes('firepro') ||
        slug.includes('attackpro')
      );
    case 'Ignition Equipment':
      return (
        pTags.has('Drip Torches & Ignition') ||
        slug.includes('torch') ||
        slug.includes('drip')
      );
    case 'Fire Safety & Weather':
      return (
        pTags.has('Fire Weather & Safety') ||
        slug.includes('weather') ||
        slug.includes('shelter') ||
        slug.includes('hose') ||
        slug.includes('extinguisher') ||
        slug.includes('protective-equipment')
      );

    // --- Forestry: Wildlife Monitoring & Surveillance ---
    case 'Camera Traps':
      return (
        (pTags.has('Camera Traps') ||
          pTags.has('Non-Cellular Trail Cameras') ||
          pTags.has('Wildlife Cameras')) &&
        !pTags.has('Cellular Trail Cameras') &&
        !slug.includes('4g') &&
        !slug.includes('cellular')
      );
    case 'Cellular & Remote Surveillance':
      return (
        pTags.has('Cellular Trail Cameras') ||
        pTags.has('Solar Surveillance') ||
        pTags.has('Security & Surveillance') ||
        pTags.has('Wi-Fi Trail Cameras') ||
        slug.includes('cellular') ||
        slug.includes('solar') ||
        slug.includes('4g') ||
        slug.includes('cctv')
      );
    case 'Observation Optics':
      return (
        pTags.has('Observation Optics') ||
        pTags.has('Binoculars') ||
        pTags.has('Spotting Scopes') ||
        pTags.has('Monoculars') ||
        pTags.has('Laser Rangefinders')
      );
    case 'Thermal & Night Observation':
      return (
        pTags.has('Thermal & Night Observation') ||
        pTags.has('Night Vision Devices') ||
        pTags.has('Thermal Cameras') ||
        pTags.has('Infrared Observation') ||
        slug.includes('thermal') ||
        slug.includes('night') ||
        slug.includes('vulpes') ||
        slug.includes('corsac') ||
        slug.includes('nvd') ||
        slug.includes('lynx') ||
        slug.includes('habrok')
      );
    case 'Acoustic Monitoring':
      return (
        pTags.has('Bioacoustics & Acoustic Monitoring') ||
        pTags.has('Acoustic Monitoring') ||
        slug.includes('song-meter') ||
        slug.includes('acoustic') ||
        slug.includes('audiomoth') ||
        slug.includes('hydromoth') ||
        slug.includes('echo-meter')
      );
    case 'Wildlife Tracking':
      return (
        pTags.has('Wildlife Tracking') ||
        slug.includes('tracker') ||
        slug.includes('telemetry') ||
        slug.includes('vhf') ||
        slug.includes('collar') ||
        slug.includes('alpha')
      );

    // --- Forestry: Camping, Safety & Climate Products ---
    case 'Tents & Shelters':
      return (
        pTags.has('Camping Tents') ||
        pTags.has('Shelters & Canopies') ||
        slug.includes('tent') ||
        slug.includes('shelter') ||
        slug.includes('canopy')
      );
    case 'Sleeping & Camp Furniture':
      return (
        pTags.has('Sleeping Bags & Bedding') ||
        pTags.has('Camp Furniture & Cots') ||
        slug.includes('sleeping') ||
        slug.includes('cot') ||
        slug.includes('chair') ||
        slug.includes('bed')
      );
    case 'Lighting & Power':
      return (
        pTags.has('Camping Lighting') ||
        pTags.has('Power & Field Electronics') ||
        slug.includes('lantern') ||
        slug.includes('power') ||
        slug.includes('generator') ||
        slug.includes('battery') ||
        slug.includes('solar')
      );
    case 'Camp Cooking & Essentials':
      return (
        pTags.has('Camp Cooking & Essentials') ||
        slug.includes('stove') ||
        slug.includes('cooler') ||
        slug.includes('cook') ||
        slug.includes('water')
      );
    case 'Field Safety / PPE':
    case 'Forestry Safety / PPE':
      return (
        pTags.has('Field Safety / PPE') ||
        slug.includes('first-aid') ||
        slug.includes('helmet') ||
        slug.includes('chaps') ||
        slug.includes('vest') ||
        slug.includes('protective')
      );
    case 'Weather & Field Electronics':
      return (
        pTags.has('Weather Monitoring') ||
        pTags.has('Backpacks & Field Carry') ||
        slug.includes('kestrel') ||
        slug.includes('weather') ||
        slug.includes('backpack') ||
        slug.includes('pack')
      );

    // --- Forestry: Forestry Tools & Cutting Equipment ---
    case 'Chainsaws':
      return (
        pTags.has('Chainsaws') ||
        slug.includes('chainsaw') ||
        slug.includes('550-xp') ||
        slug.includes('572-xp') ||
        slug.includes('592-xp') ||
        slug.includes('ms-')
      );
    case 'Forestry Cutting Tools':
      return (
        pTags.has('Cutting & Felling Tools') ||
        pTags.has('Forestry Power Equipment') ||
        slug.includes('axe') ||
        slug.includes('clearing') ||
        slug.includes('saw') ||
        slug.includes('wedge') ||
        slug.includes('hook')
      );

    // --- Geology: Geological Field & Mapping Products ---
    case 'Geological Compasses':
      return (
        pTags.has('Geological Compasses') ||
        pTags.has('Geological Compasses / Pocket Transits') ||
        pTags.has('Field Compasses / Baseplate Compasses') ||
        slug.includes('brunton') ||
        slug.includes('breithaupt') ||
        slug.includes('suunto-pm')
      );
    case 'Geological Hammers & Picks':
      return (
        pTags.has('Geological Hammers') ||
        pTags.has('Geological Hammers & Tools') ||
        pTags.has('Engineer’s Hammers') ||
        pTags.has('Field Hammers') ||
        pTags.has('Rock Hammers') ||
        pTags.has('Rock Picks') ||
        slug.includes('hammer') ||
        slug.includes('pick') ||
        slug.includes('estwing') ||
        slug.includes('chisel') ||
        slug.includes('crowbar') ||
        slug.includes('wrecking')
      );
    case 'Hand Lenses & Inspection':
      return (
        pTags.has('Field Hand Lens / Loupe') ||
        pTags.has('Pocket Magnifiers') ||
        pTags.has('Hand Lenses & Inspection') ||
        slug.includes('lens') ||
        slug.includes('loupe') ||
        slug.includes('magnifier')
      );
    case 'Field Mapping & Marking':
      return (
        pTags.has('Geological Scales') ||
        pTags.has('Field Measuring Rods') ||
        pTags.has('Field Mapping & Marking') ||
        pTags.has('Field Books & Accessories') ||
        slug.includes('scale') ||
        slug.includes('marker') ||
        slug.includes('tape') ||
        slug.includes('book') ||
        slug.includes('notebook') ||
        slug.includes('chartwell') ||
        slug.includes('edding')
      );
    case 'Prospecting & Sampling':
      return (
        pTags.has('Gold Pans') ||
        pTags.has('Prospecting Tools') ||
        pTags.has('Sample Collection & Storage') ||
        slug.includes('pan') ||
        slug.includes('sieve') ||
        slug.includes('shovel') ||
        slug.includes('sample') ||
        slug.includes('bag') ||
        slug.includes('lifestraw')
      );
    case 'GPS & Survey Instruments':
      return (
        pTags.has('GPS / GNSS Receivers') ||
        pTags.has('GPS & GNSS') ||
        pTags.has('Handheld GPS') ||
        pTags.has('Survey & Measurement') ||
        slug.includes('gps') ||
        slug.includes('gnss') ||
        slug.includes('montana')
      );
    case 'Field Measurement':
      return (
        pTags.has('Laser Distance Meters') ||
        pTags.has('Clinometers & Forest Measurement') ||
        pTags.has('Forestry Measurement') ||
        slug.includes('disto') ||
        slug.includes('clinometer') ||
        slug.includes('omnislope')
      );

    // --- Defense: Thermal Imaging & Detection ---
    case 'Thermal Cameras':
      return (
        pTags.has('Thermal Cameras') ||
        slug.includes('firepro') ||
        slug.includes('attackpro')
      );
    case 'Thermal Monoculars & Binoculars':
      return (
        pTags.has('Thermal Monoculars & Binoculars') ||
        pTags.has('Thermal Monoculars') ||
        slug.includes('lynx') ||
        slug.includes('habrok')
      );
    case 'Mobile Thermal Imaging':
      return (
        pTags.has('Mobile Thermal Imaging') ||
        slug.includes('compactpro') ||
        slug.includes('e20-plus')
      );

    // --- Defense: Night Vision Systems ---
    case 'Night Vision Binoculars':
      return (
        pTags.has('Night Vision Binoculars') ||
        slug.includes('corsac') ||
        slug.includes('swift')
      );
    case 'Night Vision Monoculars & Goggles':
      return (
        pTags.has('Night Vision Monoculars') ||
        pTags.has('Night Vision Devices') ||
        slug.includes('prowl') ||
        slug.includes('cape') ||
        slug.includes('whisper') ||
        slug.includes('advocate') ||
        slug.includes('stalker') ||
        slug.includes('vulpes') ||
        slug.includes('nvd-650')
      );
    case 'Infrared & Thermal Systems':
      return (
        pTags.has('Infrared & Illumination') ||
        pTags.has('Infrared Search Lights') ||
        pTags.has('Thermal Cameras') ||
        slug.includes('xb5') ||
        slug.includes('red-sub-zero') ||
        slug.includes('swift') ||
        slug.includes('cape') ||
        slug.includes('thermal') ||
        slug.includes('firepro') ||
        slug.includes('attackpro') ||
        slug.includes('compactpro')
      );

    // --- Defense: Surveillance & Monitoring ---
    case 'Cellular / Remote Surveillance':
      return (
        pTags.has('Cellular Trail Cameras') ||
        pTags.has('Wi-Fi Trail Cameras') ||
        pTags.has('Surveillance') ||
        slug.includes('4g') ||
        slug.includes('ptz') ||
        slug.includes('cctv') ||
        slug.includes('nvr') ||
        slug.includes('bullet')
      );
    case 'Thermal & Night Surveillance':
      return (
        pTags.has('Thermal Cameras') ||
        pTags.has('Night Vision Devices') ||
        pTags.has('Infrared & Illumination') ||
        pTags.has('Borescopes & Endoscopes') ||
        slug.includes('lynx') ||
        slug.includes('nvd') ||
        slug.includes('swift') ||
        slug.includes('prowl') ||
        slug.includes('m30') ||
        slug.includes('thermal') ||
        slug.includes('search-light') ||
        slug.includes('ranger') ||
        slug.includes('ralcam')
      );
    case 'Body-Worn Surveillance':
      return (
        pTags.has('Body-Worn Cameras') ||
        slug.includes('body')
      );
    case 'Action Cameras':
      return (
        pTags.has('Action Cameras') ||
        slug.includes('gopro') ||
        slug.includes('hero') ||
        slug.includes('max')
      );

    // --- Defense: Navigation & GPS ---
    case 'GNSS / Navigation Devices':
      return (
        pTags.has('GPS & GNSS') ||
        pTags.has('GNSS / RTK Receivers') ||
        pTags.has('Wearable GPS & Smartwatches') ||
        slug.includes('fenix') ||
        slug.includes('instinct') ||
        slug.includes('race') ||
        slug.includes('gnss')
      );
    case 'Compasses':
      return (
        pTags.has('Compasses') ||
        pTags.has('Compasses & Field Navigation') ||
        pTags.has('Geological Compasses') ||
        slug.includes('mc2') ||
        slug.includes('kb-14') ||
        slug.includes('mb-6') ||
        slug.includes('pm-5')
      );

    // --- Defense: Optics & Observation ---
    case 'Binoculars':
      return pTags.has('Binoculars');
    case 'Spotting Scopes':
      return pTags.has('Spotting Scopes');
    case 'Laser Rangefinders':
      return pTags.has('Laser Rangefinders');
    case 'Rifle Scopes / Tactical Optics':
      return (
        pTags.has('Rifle Scopes & Tactical Optics') ||
        pTags.has('Rifle Scopes')
      );
    case 'Tripods & Supports':
      return (
        pTags.has('Tripods & Accessories') ||
        pTags.has('Tripods & Supports')
      );

    // --- Defense: Communication Systems ---
    case 'Two-Way Radios':
      return (
        pTags.has('Two-Way Radios') ||
        slug.includes('bfr') ||
        slug.includes('tk-') ||
        slug.includes('r2') ||
        slug.includes('sl1600')
      );
    case 'Digital / Tactical Radios':
      return (
        pTags.has('Digital / DMR Radios') ||
        pTags.has('Tactical Communications') ||
        slug.includes('dmr') ||
        slug.includes('drr') ||
        slug.includes('nx-') ||
        slug.includes('r7') ||
        slug.includes('dp4400') ||
        slug.includes('dp4801')
      );
    case 'Communication Accessories / Base Stations':
      return (
        pTags.has('Communication Accessories') ||
        pTags.has('Base Stations') ||
        slug.includes('battery') ||
        slug.includes('base') ||
        slug.includes('bfb')
      );

    // --- Defense: Rugged Computing ---
    case 'Rugged Laptops':
      return pTags.has('Rugged Laptops');
    case 'Rugged Tablets':
      return pTags.has('Rugged Tablets');
    case 'Rugged Mobile Computing':
      return (
        pTags.has('Rugged Mobile Computing') ||
        slug.includes('fc2') ||
        slug.includes('controller')
      );

    // --- Defense: Field Operations Products ---
    case 'Tactical Communications':
      return (
        pTags.has('Tactical Communications') ||
        pTags.has('Two-Way Radios') ||
        pTags.has('Digital / DMR Radios')
      );
    case 'Tactical Illumination & Searchlights':
      return (
        pTags.has('Infrared & Illumination') ||
        pTags.has('Torches') ||
        pTags.has('Headlamps') ||
        pTags.has('Helmet-Mounted Lights') ||
        pTags.has('Infrared Search Lights') ||
        slug.includes('torch') ||
        slug.includes('light') ||
        slug.includes('peli')
      );
    case 'Field Navigation & Compasses':
      return (
        pTags.has('Compasses & Field Navigation') ||
        pTags.has('Handheld GPS') ||
        pTags.has('Wearable GPS & Smartwatches') ||
        pTags.has('GPS & GNSS') ||
        slug.includes('mc2') ||
        slug.includes('kb-14') ||
        slug.includes('race') ||
        slug.includes('gpsmap') ||
        slug.includes('pm-5')
      );
    case 'Night & Thermal Observation':
      return (
        pTags.has('Thermal Cameras') ||
        pTags.has('Night Vision Devices') ||
        pTags.has('Thermal & Night Observation') ||
        slug.includes('lynx') ||
        slug.includes('nvd') ||
        slug.includes('swift')
      );
    case 'Rugged Computing & Surveillance':
      return (
        pTags.has('Rugged Laptops') ||
        pTags.has('Rugged Tablets') ||
        pTags.has('Surveillance') ||
        slug.includes('toughbook') ||
        slug.includes('cp-plus') ||
        slug.includes('camera')
      );

    // --- Mining & Geology Filters ---
    case 'Geological Field Tools':
      return (
        pTags.has('Geological Field Tools') ||
        pTags.has('Geological Hammers & Tools') ||
        pTags.has('Sample Collection & Storage')
      );
    case 'Compasses & Pocket Transits':
      return (
        pTags.has('Geological Compasses') ||
        pTags.has('Compasses & Field Navigation') ||
        pTags.has('Geological Compasses / Pocket Transits') ||
        pTags.has('Clinometers & Forest Measurement') ||
        pTags.has('Clinometers & Hypsometers') ||
        slug.includes('brunton') ||
        slug.includes('breithaupt')
      );
    case 'Survey Instruments & Accessories':
      return (
        pTags.has('Total Stations & Levels') ||
        pTags.has('Survey & Measurement') ||
        pTags.has('Survey Accessories') ||
        pTags.has('Tripods & Accessories') ||
        pTags.has('Tripods & Supports') ||
        slug.includes('total-station') ||
        slug.includes('level') ||
        slug.includes('na730') ||
        slug.includes('rugby') ||
        slug.includes('carbon') ||
        slug.includes('tripod')
      );
    case 'Mapping & GNSS':
      return (
        pTags.has('Mapping & GNSS') ||
        pTags.has('GPS & GNSS') ||
        pTags.has('GNSS / RTK Receivers') ||
        pTags.has('Handheld GPS') ||
        slug.includes('gpsmap') ||
        slug.includes('montana') ||
        slug.includes('etrex') ||
        slug.includes('gnss') ||
        slug.includes('fc2')
      );
    case 'Pocket Transits':
      return (
        pTags.has('Geological Compasses / Pocket Transits') ||
        slug.includes('transit') ||
        slug.includes('axis') ||
        slug.includes('gekom') ||
        slug.includes('gebru') ||
        slug.includes('cocla') ||
        slug.includes('cobru')
      );
    case 'Baseplate & Field Compasses':
      return (
        pTags.has('Field Compasses / Baseplate Compasses') ||
        pTags.has('Compasses & Field Navigation') ||
        slug.includes('geolite') ||
        slug.includes('truarc') ||
        slug.includes('necli')
      );
    case 'Borescopes & Video Inspection':
      return (
        pTags.has('Borescopes & Endoscopes') ||
        pTags.has('Industrial Inspection') ||
        slug.includes('ralcam')
      );
    case 'Hand Lenses & Magnifiers':
      return (
        pTags.has('Hand Lenses & Inspection') ||
        pTags.has('Pocket Magnifiers') ||
        pTags.has('Field Hand Lens / Loupe') ||
        slug.includes('lens')
      );
    case 'Rugged Tablets & Controllers':
      return (
        pTags.has('Rugged Tablets') ||
        pTags.has('Rugged Mobile Computing') ||
        pTags.has('Data Collectors & Controllers') ||
        slug.includes('toughbook-g2') ||
        slug.includes('toughbook-33') ||
        slug.includes('toughbook-s1') ||
        slug.includes('fc2')
      );
    case 'Distance Measurement':
      return (
        pTags.has('Distance Measurement') ||
        pTags.has('Laser Distance Meters') ||
        pTags.has('Laser Rangefinders') ||
        pTags.has('Field Measuring Rods') ||
        slug.includes('disto') ||
        slug.includes('distance') ||
        slug.includes('measuring-tape')
      );

    default:
      if (pTags.has(filter)) return true;
      return productMatchesFilter(product, filter, subcategoryId);
  }
}

/**
 * Returns active canonical filters with accurate product counts for a specialized subcategory page.
 */
export function getSpecializedSubcategoryFilters(
  subcategoryId: string,
  subcategoryProducts: Product[]
): { tag: string; count: number }[] {
  const allowedFilters = SPECIALIZED_FILTER_GROUPS[subcategoryId] || [];

  return allowedFilters
    .map(filter => {
      const count = subcategoryProducts.filter(p =>
        productMatchesSpecializedFilter(p, filter, subcategoryId)
      ).length;
      return { tag: filter, count };
    })
    .filter(f => f.count > 0);
}
