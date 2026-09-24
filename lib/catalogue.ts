export type Product = {
  slug: string; name: string; brand: string; category: string; image: string;
  gallery: string[]; label: string; summary: string; specs: [string, string][];
  features: string[]; page: number;
  subcategories?: string[];
  categoryIds?: string[];
  tags?: string[];
  systemComponents?: {
    slug: string;
    role: string;
    name: string;
    summary: string;
    image: string;
  }[];
  customWhatsAppMessage?: string;
  packageNotice?: {
    text: string;
    packageSlug: string;
    packageTitle: string;
  };
  datasheetUrl?: string;
};

export const categories = [
  { id: 'forestry', name: 'Forestry & Wildlife', short: 'Into the wild.', subtitle: 'Observe without disturbing.', mission: 'Wildlife monitoring, habitat research and remote observation.', image: 'forest', code: 'BIO / 01' },
  { id: 'geology', name: 'Geological Products', short: 'Read the earth.', subtitle: 'Every layer tells a story.', mission: 'Map structures, measure bearings and document the ground beneath your feet.', image: 'geology', code: 'GEO / 02' },
  { id: 'surveying', name: 'Surveying & DGPS', short: 'Every point matters.', subtitle: 'Find your position. Define your ground.', mission: 'Field positioning and navigation. Talk to our team about DGPS and survey-specific requirements.', image: 'surveying', code: 'GNSS / 03' },
  { id: 'navigation', name: 'Mapping & Navigation', short: 'Know your next move.', subtitle: 'Confidence in every coordinate.', mission: 'Handheld GPS and dependable navigation instruments for unfamiliar ground.', image: 'navigation', code: 'NAV / 04' },
  { id: 'thermal', name: 'Thermal & Night Vision', short: 'Beyond the visible.', subtitle: 'A different way to see.', mission: 'Reveal heat signatures and observe in low light with dedicated field imaging products.', image: 'thermal', code: 'IR / 05' },
  { id: 'optics', name: 'Optics', short: 'Bring the distant closer.', subtitle: 'Clarity changes everything.', mission: 'High-definition binoculars and observation optics for detail at a distance.', image: 'optics', code: 'OPT / 06' },
  { id: 'inspection', name: 'Inspection / Borescope Systems', short: 'Reach the unseen.', subtitle: 'Answers in the smallest spaces.', mission: 'Articulating inspection cameras for engines, machinery and difficult-to-access spaces.', image: 'inspection', code: 'INS / 07' },
  { id: 'computing', name: 'Rugged Computing', short: 'Work beyond the office.', subtitle: 'Your field is your workspace.', mission: 'Rugged mobile computing for collecting, managing and using data on location.', image: 'computing', code: 'RUG / 08' },
  { id: 'communication', name: 'Field Communication', short: 'Keep your team connected.', subtitle: 'A clear line in challenging terrain.', mission: 'Portable radio products for coordinated operations in the field.', image: 'communication', code: 'COM / 09' },
  { id: 'defense', name: 'Defense & Paramilitary', short: 'Stay field ready.', subtitle: 'Awareness in every condition.', mission: 'Explore existing imaging, navigation, optics, communication and computing equipment for demanding field operations.', image: 'thermal', code: 'FLD / 10' },
  { id: 'mining', name: 'Mining & Geology', short: 'Read the terrain.', subtitle: 'Measure the ground.', mission: 'Explore existing geological instruments, mapping equipment, inspection tools and rugged computing for field work.', image: 'geology', code: 'GEO / 11' },
] as const;

export const products: Product[] = [
  // --- Existing Field Technology Products (Preserved & Cleaned of Legacy Subcategories) ---
  { slug:'vortex-viper-hd',name:'Viper® HD',brand:'Vortex Optics',category:'optics',image:'viper',gallery:['viper','viper-front'],label:'HD BINOCULARS',summary:'An HD optical system, rugged rubber armor and a comfortable field harness. A clear view of the details that matter.',specs:[['Available configurations','8×42 / 10×50 / 12×50'],['Optical system','High definition'],['Lens coating','XR™ fully multi-coated'],['Protection','ArmorTek®'],['Carry system','GlassPak harness included']],features:['HD glass for resolution and color fidelity','Phase-corrected roof prisms for contrast','Rubber armor for a secure grip','GlassPak chest harness for comfortable field carry'],page:5,subcategories:['defense-optics'],categoryIds:['optics','defense'],tags:['Binoculars'] },
  { slug:'garmin-gpsmap-65s',name:'Handheld GPS (GPSMAP® 65s)',brand:'Garmin',category:'navigation',image:'gpsmap',gallery:['gpsmap'],label:'MULTI-BAND GPS',summary:'Find your way in challenging environments with multi-band positioning, expanded satellite support and a sunlight-readable color display.',specs:[['Display','2.6-inch color'],['Positioning','Multi-band GNSS'],['Battery life','Up to 16 hours in GPS mode'],['Navigation','Built-in navigation sensors (ABC)'],['Planning','Garmin Explore compatibility']],features:['Multi-band technology for challenging locations','Sunlight-readable color display','Built-in 3-axis compass & barometric altimeter','Plan and organize with the Garmin Explore app'],page:12,subcategories:['geological-field-mapping','gps-survey-mapping-products','defense-navigation','defense-field-operations','mining-field-mapping','mining-mapping','mining-distance'],categoryIds:['navigation','geology','defense','mining','surveying'],tags:['Handheld GPS','GPS/GNSS Devices','GPS','GPS / GNSS Receivers'] },
  { slug:'hikmicro-lynx-lh25',name:'LYNX LH25 2.0',brand:'HIKMICRO',category:'thermal',image:'lynx',gallery:['lynx','lynx-side'],label:'THERMAL MONOCULAR',summary:'A compact thermal monocular that reveals subtle heat signatures, with a sensitive detector and a detailed OLED view.',specs:[['Detector resolution','384 × 288'],['Lens','25 mm, F1.0'],['Thermal sensitivity','NETD <20 mK'],['Detection range','Up to 1,200 m'],['Weight','275 g'],['Battery life','Up to 6.5 hours']],features:['12 μm detector with high thermal sensitivity','1024 × 768 OLED display','Replaceable rechargeable Li-ion battery','Compact and ergonomic field design'],page:40,subcategories:['defense-thermal','defense-surveillance','wildlife-monitoring-surveillance'],categoryIds:['thermal','defense','forestry'],tags:['Thermal & Night Observation','Thermal Cameras','Thermal Monoculars','Infrared Observation'] },
  { slug:'browning-strike-force-pro-dcl',name:'Strike Force Pro DCL',brand:'Browning',category:'forestry',image:'browning',gallery:['browning'],label:'WILDLIFE TRAIL CAMERA',summary:'Dual camera lens technology captures the field by day and night, with a fast trigger for fleeting wildlife encounters.',specs:[['Image resolution','26 megapixels'],['Trigger speed','0.15 seconds'],['Flash range','Up to 130 ft'],['Viewing screen','1.5-inch color'],['Lens system','Dual camera lens technology']],features:['Separate lens technology optimized for day and night','Fast trigger for wildlife monitoring','On-camera color viewing screen','Long-range flash capability'],page:21,subcategories:['defense-surveillance','wildlife-monitoring-surveillance'],categoryIds:['forestry','defense'],tags:['Camera Traps'] },
  { slug:'brunton-geolite',name:'Geo Lite™ Transit F-5030',brand:'Brunton',category:'geology',image:'geolite-open',gallery:['geolite-open','geolite'],label:'GEOLOGICAL TRANSIT COMPASS',summary:'Compact aluminum geological transit combining direct-read azimuth measurement with a hinge clinometer for strike and dip field readings.',specs:[['Model','Geo Lite™ Transit F-5030'],['Body Construction','Compact aluminum body (approx. 30% smaller than full-size transit)'],['Azimuth Accuracy','±0.5° with 1° graduations (0–360° azimuth scale)'],['Vertical Angle','±1° with 1° graduations (±90° range)'],['Declination Adjustment','Tool-free magnetic declination adjustment ±180°'],['Needle Dampening','Induction damped needle on sapphire jewel suspension'],['Leveling Vials','Dual bubble vials (circular and tubular)'],['Sighting System','Precision mirror with sighting hole and sighting line'],['Protection','Silicone protective cover included'],['Mounting','Tripod mountable with 1/4-20 threading']],features:['Compact lightweight aluminum body roughly 30% smaller than traditional pocket transits','High-precision azimuth accuracy of ±0.5° with 1° graduations on a 0–360° scale','Integrated vertical clinometer reads slope and dip to ±1° across ±90° range','User-friendly tool-free magnetic declination adjustment with ±180° range','Induction damped needle stabilizes quickly for fast and repeatable field readings','Dual bubble vials (tubular and circular) ensure perfect level alignment','Reflective sighting mirror with center sighting hole for accurate bearing acquisition','Supplied with custom silicone protective cover for field impact resistance'],page:27,subcategories:['geological-field-mapping','mining-field-mapping','mining-survey','mining-compasses'],categoryIds:['geology','mining'],tags:['Geological Compasses / Pocket Transits','Field Compasses / Baseplate Compasses'] },
  { slug:'panasonic-toughbook',name:'TOUGHBOOK FZ-55',brand:'Panasonic Toughbook',category:'computing',image:'toughbook',gallery:['toughbook'],label:'RUGGED FIELD COMPUTING',summary:'A modular laptop platform for demanding mobile work. Ask our team to configure a TOUGHBOOK around your field applications.',specs:[['Product family','Panasonic TOUGHBOOK'],['Catalogue model','FZ-55'],['Form factor','Rugged laptop'],['Configuration','Confirmed with your quotation']],features:['Built for mobile field workflows','Flexible configuration options','Suitable for field data collection and review','Project-specific configuration support'],page:47,subcategories:['defense-rugged','defense-field-operations','mining-rugged'],categoryIds:['computing','defense','mining'],tags:['Rugged Tablets'] },
  { slug:'vortex-diamondback-hd',name:'Diamondback® HD',brand:'Vortex Optics',category:'optics',image:'diamondback',gallery:['diamondback','diamondback-side'],label:'HD BINOCULARS',summary:'Rugged observation optics with HD glass, protective lens coatings and a ready-to-deploy harness.',specs:[['Available configurations','8×42 / 10×50 / 10×42'],['Optical system','High definition'],['Lenses','Fully multi-coated'],['Protection','ArmorTek® coating'],['Carry system','GlassPak harness included']],features:['Phase correction for enhanced resolution','Rubber armor for a non-slip grip','Scratch-resistant exterior lens coating','Shock-resistant construction'],page:4,subcategories:['defense-optics'],categoryIds:['optics','defense'],tags:['Binoculars'] },
  { slug:'garmin-montana-700',name:'Montana® 700',brand:'Garmin',category:'navigation',image:'montana',gallery:['montana'],label:'TOUCHSCREEN GPS',summary:'Large-format navigation for journeys on foot or by vehicle, combining a 5-inch touchscreen with outdoor navigation sensors.',specs:[['Display','5-inch touchscreen'],['Positioning','Multiple GNSS networks'],['Battery life','18+ hours in GPS mode'],['Navigation sensors','Altimeter, barometer, compass'],['Mapping','Routable roads and trails']],features:['Large touchscreen for clear map viewing','Rugged construction for outdoor navigation','ABC sensors for awareness in the field','Mapping support for roads and trails'],page:15,subcategories:['defense-navigation','defense-field-operations','mining-field-mapping','mining-mapping','mining-distance'],categoryIds:['navigation','defense','mining'],tags:['GPS/GNSS Devices','GPS'] },
  { slug:'ralcam-h408b',name:'H408B Borescope',brand:'Ralcam',category:'inspection',image:'ralcam',gallery:['ralcam'],label:'ARTICULATING INSPECTION',summary:'Inspect confined spaces with an articulating camera and a dedicated display, built for automotive and machinery inspection.',specs:[['Display','4.3-inch'],['Camera resolution','1920 × 1080'],['Probe diameter','8.5 mm'],['Battery','Replaceable 2,600 mAh'],['Lighting','10 adjustable LEDs']],features:['Articulating lens for difficult viewing angles','Capture images and video','High-temperature protection','Dedicated screen for on-site inspections'],page:17,subcategories:['mining-inspection'],categoryIds:['inspection','mining'] },
  { slug:'brutforce-field-radio',name:'BFR-001 License-Free Walkie-Talkie',brand:'BRUTFORCE',category:'communication',image:'radio',gallery:['radio','radio-side'],label:'LICENSE-FREE FIELD RADIO',summary:'License-free two-way field radio operating on the 446 MHz band with 16 channels, up to 5 km line-of-sight range, and a long-life 2,600 mAh Li-ion battery.',specs:[['Model','BFR-001'],['Frequency range','446.00–446.02 MHz (License-free UHF)'],['Channels','16 pre-programmed channels with CTCSS/DCS'],['Operating range','Up to 5 km (line-of-sight depending on terrain)'],['Battery','2,600 mAh Li-ion rechargeable battery'],['Operating temperature','−25°C to +55°C'],['Compliance','WPC Approved (License-free in India)']],features:['16 pre-set channels with CTCSS/DCS sub-codes for private team coordination','Up to 5 km range depending on line-of-sight for field and mountain operations','WPC approved for license-free professional operation across India','Rugged compact housing with voice-operated VOX and emergency alert'],page:34,subcategories:['field-communication-expedition-support','defense-communication','defense-field-operations'],categoryIds:['communication','geology','defense'],tags:['Field Radios'] },
  { slug:'brunton-compro-transit',name:'ComPro™ Composite Transit F-5008',brand:'Brunton',category:'geology',image:'compro',gallery:['compro'],label:'COMPOSITE POCKET TRANSIT',summary:'Ultralight composite transit housing professional transit internals with induction dampening, precision NdFeB cast magnet, and dual sighting tools.',specs:[['Model','ComPro™ Composite Transit F-5008'],['Body Material','Composite body material (reduces weight & protects against magnetic interference)'],['Azimuth Accuracy','±0.5° with 1° graduations (0–360° or quad options)'],['Clinometer Accuracy','±0.5° with 1° graduations (90° range or 100% grade scale)'],['Declination Adjustment','Tool-free magnetic declination adjustment (±180°)'],['Magnetic System','NdFeB rare-earth cast magnet needle on sapphire jewel bearing'],['Dampening','Induction dampening for rapid needle settling'],['Sighting System','Precision sighting mirror with sighting hole and sighting line'],['Environmental','Waterproof sealed housing'],['Mounting','Tripod mountable with standard ball-and-socket tripod mount']],features:['Composite body reduces overall carry weight and eliminates local magnetic interference','Precision compass azimuth accuracy of ±0.5° with 1° graduations','Vertical clinometer provides ±0.5° accuracy with 1° graduations and 10-minute vernier reading','Cast NdFeB rare-earth disc magnet on sapphire jewel bearing delivers rapid, reliable settling','Tool-free magnetic declination adjustment allows swift true north calibration in the field','Waterproof sealed body designed to withstand harsh outdoor geological and mine environments','Precision sighting mirror with see-through window and front/rear sighting guides','Ball and socket tripod mount compatibility for stabilized station mapping'],page:30,subcategories:['geological-field-mapping','mining-field-mapping','mining-survey','mining-compasses'],categoryIds:['geology','mining','surveying'],tags:['Geological Compasses / Pocket Transits'] },
  { slug:'brunton-f-5012-axis',name:'Axis™ Pocket Transit F-5012',brand:'Brunton',category:'geology',image:'placeholder',gallery:['placeholder'],label:'AXIS POCKET TRANSIT',summary:'Patented dual-axis pocket transit enabling simultaneous measurement of strike and dip, trend and plunge, dip and dip direction, and bearings on a single setup.',specs:[['Model','Axis™ Pocket Transit F-5012'],['Hinge Design','Dual-axis hollow hinge allows measurement of strike & dip simultaneously'],['Azimuth Accuracy','±0.5° with 1° graduations (0–360° or 0–90° quad)'],['Clinometer Accuracy','±0.5° with 1° graduations'],['Declination Adjustment','Tool-free adjustable magnetic declination ±180°'],['Bearing / Dampening','Sapphire jewel bearing with induction damping'],['Level Vials','Internal tubular and circular level vials'],['Water Resistance','IPX7 / waterproof and submersible to 3 m for 30 min'],['Body Construction','CNC-machined hard-anodized aluminum body'],['Mounting','Tripod mountable with standard ball-and-socket mount']],features:['Dual-axis hollow hinge allows simultaneous measurement of strike and dip on any bedding surface (contact, foliation, or lineation)','High-precision compass azimuth accuracy of ±0.5° with 1° graduations','Vertical clinometer accuracy of ±0.5° with 1° graduations for dip and vertical angles','NdFeB cast rare-earth magnet mounted on sapphire jewel bearing with induction damping','Tool-free magnetic declination adjustment adjustable to ±180°','IPX7 waterproof construction submersible to 3 meters for 30 minutes','CNC-machined hard-anodized aluminum body designed for rugged field longevity','Internal circular and tubular level vials for stabilized direct-contact and sighting operations'],page:31,subcategories:['geological-field-mapping','mining-field-mapping','mining-survey','mining-compasses'],categoryIds:['geology','mining'],tags:['Geological Compasses / Pocket Transits'] },
  { slug:'minox-nvd-650',name:'NVD 650',brand:'MINOX',category:'thermal',image:'minox',gallery:['minox','minox-back'],label:'DIGITAL NIGHT VISION',summary:'A digital monocular with an IR emitter and recording capability for observation in low-light field conditions.',specs:[['Optical magnification','6×'],['Digital magnification','5×'],['IR wavelength','850 nm'],['IR range','Up to 350 m'],['Use','Day and night']],features:['Built-in IR emitter','Night recording functionality','Rail for additional IR illumination','Daytime use supported'],page:45,subcategories:['defense-night','defense-surveillance','wildlife-monitoring-surveillance'],categoryIds:['thermal','defense','forestry'],tags:['Thermal & Night Observation','Night Vision Devices','Infrared Observation'] },
  { slug:'suunto-mc2',name:'MC-2 Mirror Compass',brand:'Suunto',category:'navigation',image:'suunto',gallery:['suunto'],label:'PRECISION NAVIGATION',summary:'A sighting compass with a mirror, clinometer and adjustable declination correction for considered route finding.',specs:[['Needle','Jewel-bearing steel'],['Capsule','Liquid-filled'],['Declination','Adjustable correction'],['Measurement','Sighting and clinometer'],['Variant','Confirm hemisphere and scale']],features:['Sighting mirror and notch for bearings','Luminescent markings for low light','Baseplate with magnifying lens','Detachable snap-lock lanyard'],page:41,subcategories:['defense-navigation','defense-field-operations'],categoryIds:['navigation','defense'],tags:['Compasses','Forestry Compasses'] },
  { slug:'audiomoth',name:'AudioMoth',brand:'Open Acoustic Devices',category:'forestry',image:'audiomoth',gallery:['audiomoth','audiomoth-case'],label:'ACOUSTIC MONITORING',summary:'A compact full-spectrum acoustic logger for listening to the natural world, with an optional protective field case.',specs:[['Sample rate','Up to 384 kHz'],['Processor','EFM32 Gecko'],['Microphone','Analog MEMS'],['Protective option','IPX7 waterproof case']],features:['Full-spectrum acoustic logging','Compact field-deployment format','Protective case with compression O-ring','Case strap for straightforward installation'],page:44,subcategories:['wildlife-monitoring-surveillance'],categoryIds:['forestry'],tags:['Bioacoustics & Acoustic Monitoring','Autonomous Recording Units','Acoustic Recorders'] },
  { slug:'hikmicro-e20-plus',name:'E20 Plus',brand:'HIKMICRO',category:'thermal',image:'e20',gallery:['e20','e20-side'],label:'SMARTPHONE THERMAL CAMERA',summary:'A lightweight thermal accessory for compatible Android phones, with USB-C connection and HIKMICRO Sight app support.',specs:[['Connection','USB Type-C'],['Power consumption','360 mW'],['Weight','26 g'],['Operating temperature','−10°C to 50°C'],['Protection level','IP40']],features:['Compact thermal module for mobile observation','Powered through the connected device','HIKMICRO Sight app compatibility','Lightweight 26 g design'],page:39,tags:['Thermal Cameras'] },

  // =========================================================================
  // 1. FOREST MEASUREMENT & INVENTORY (Subcategory ID: forest-measurement-inventory)
  // =========================================================================
  {
    slug: 'diameter-tape-dbh-tape',
    name: 'Diameter Tape / DBH Tape',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'diameter-tape-dbh-tape',
    gallery: ['diameter-tape-dbh-tape'],
    label: 'FORESTRY MEASUREMENT',
    summary: 'Forestry measuring tape designed for quick measurement of tree diameter and circumference during forest inventory and field surveys.',
    specs: [
      ['Product Type', 'Forestry Diameter Tape'],
      ['Primary Use', 'Tree Diameter / DBH Measurement'],
      ['Measurement Application', 'Diameter & Circumference'],
      ['Field Application', 'Forest Inventory & Stand Cruising'],
      ['Format', 'Portable Measuring Tape']
    ],
    features: [
      'Direct-reading diameter at breast height (DBH) scale',
      'Dual graduations for tree diameter and circumference',
      'Flexible durable blade suitable for rough tree bark',
      'Compact and portable design for daily forest inventory'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Diameter Tape']
  },
  {
    slug: 'digital-tree-caliper',
    name: 'Digital Tree Caliper',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'digital-tree-caliper',
    gallery: ['digital-tree-caliper'],
    label: 'FORESTRY CALIPER',
    summary: 'Electronic forestry caliper designed for measuring tree stem diameters and timber logs with rapid digital readout during forest inventory.',
    specs: [
      ['Product Type', 'Electronic Tree Caliper'],
      ['Primary Use', 'Tree Diameter Measurement'],
      ['Display Type', 'Digital LCD Screen'],
      ['Measurement Application', 'Stem Diameter & Log Scaling'],
      ['Field Application', 'Forest Mensuration & Inventory'],
      ['Operation', 'Electronic Sliding Caliper']
    ],
    features: [
      'Digital display for rapid and clear diameter readings',
      'Sliding beam caliper mechanism for standing trees and logs',
      'Designed for timber cruising and forest mensuration',
      'Lightweight field-ready construction for outdoor inventory'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Tree Calipers']
  },
  {
    slug: 'wheeler-caliper',
    name: 'Wheeler Caliper',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'wheeler-caliper',
    gallery: ['wheeler-caliper'],
    label: 'OPTICAL DENDROMETER',
    summary: 'Optical dendrometer instrument designed for measuring upper-stem diameters of standing trees from the ground without climbing.',
    specs: [
      ['Product Type', 'Optical Dendrometer'],
      ['Primary Use', 'Upper-Stem Diameter Measurement'],
      ['Measurement Method', 'Ground-Based Optical Sighting'],
      ['Application', 'Standing Tree Volume Estimation'],
      ['Field Application', 'Forest Mensuration & Research'],
      ['Format', 'Handheld Optical Instrument']
    ],
    features: [
      'Measures upper-stem diameters directly from ground level',
      'Pentaprism optical sighting system for standing timber',
      'Eliminates need for tree climbing during stem analysis',
      'Supports tree volume estimation and upper-log assessment'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory']
  },
  {
    slug: 'tree-height-meter',
    name: 'Tree Height Meter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'tree-height-meter',
    gallery: ['tree-height-meter'],
    label: 'HEIGHT MEASUREMENT',
    summary: 'Specialized forestry sighting instrument designed for calculating tree heights and vertical elevations in forest inventory and stand management.',
    specs: [
      ['Product Type', 'Forestry Height Meter'],
      ['Primary Use', 'Tree Height & Vertical Elevation'],
      ['Measurement Method', 'Optical Trigonometric Sighting'],
      ['Application', 'Timber Volume & Stand Profiling'],
      ['Field Application', 'Forest Inventory & Cruising'],
      ['Format', 'Handheld Sighting Tool']
    ],
    features: [
      'Direct sighting scale for vertical angle and tree height',
      'Calculates standing tree heights from measured baseline distances',
      'Compact handheld form factor for all-day field cruising',
      'Aids in timber volume estimation and stand profiling'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Height Meter']
  },
  {
    slug: 'clinometer',
    name: 'Clinometer',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'clinometer',
    gallery: ['clinometer'],
    label: 'SLOPE & HEIGHT SIGHTING',
    summary: 'Handheld optical instrument designed for measuring slope angles, vertical gradients, and elevations during forestry surveying and trail layout.',
    specs: [
      ['Product Type', 'Handheld Clinometer'],
      ['Primary Use', 'Slope & Gradient Measurement'],
      ['Measurement Type', 'Angular Degrees & Percentage Slope'],
      ['Application', 'Topographic & Forestry Sighting'],
      ['Field Application', 'Trail Layout & Stand Cruising'],
      ['Operation', 'Optical Direct Sighting']
    ],
    features: [
      'Measures terrain slope angles and vertical gradients',
      'Supports height calculations from known baseline distances',
      'Damped scale movement for quick and stable sighting readings',
      'Rugged pocket-sized housing for forestry timber surveys'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Clinometer']
  },
  {
    slug: 'hypsometer',
    name: 'Hypsometer',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'hypsometer',
    gallery: ['hypsometer'],
    label: 'FORESTRY HYPSOMETER',
    summary: 'Precision forestry instrument designed for measuring standing tree heights, slope inclinations, and canopy levels during timber cruising.',
    specs: [
      ['Product Type', 'Forestry Hypsometer'],
      ['Primary Use', 'Standing Tree Height Measurement'],
      ['Measurement Application', 'Tree Height & Canopy Levels'],
      ['Target Environment', 'Forest Stands & Woodlands'],
      ['Field Application', 'Timber Cruising & Mensuration'],
      ['Format', 'Handheld Field Instrument']
    ],
    features: [
      'Calculates tree heights using distance and inclination angles',
      'Supports multi-point height and canopy layer measurements',
      'Streamlines standing timber volume inventory and stand profiling',
      'Compact handheld unit suited for dense woodland terrain'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Hypsometer']
  },
  {
    slug: 'relaskop',
    name: 'Relaskop',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'relaskop',
    gallery: ['relaskop'],
    label: 'STAND CRUISE INSTRUMENT',
    summary: 'Specialized optical point-sampling instrument designed for estimating forest basal area, tree height, and stand volume without fixed plot boundaries.',
    specs: [
      ['Product Type', 'Optical Relascope Instrument'],
      ['Primary Use', 'Basal Area & Stand Volume Estimation'],
      ['Measurement Method', 'Bitterlich Point Sampling'],
      ['Slope Compensation', 'Internal Automatic Scale Correction'],
      ['Field Application', 'Forest Mensuration & Stand Cruising'],
      ['Format', 'Precision Optical Instrument']
    ],
    features: [
      'Variable radius plot sampling per Bitterlich relascope method',
      'Automatic slope angle correction for basal area estimation',
      'Measures upper-stem tree diameters and tree heights',
      'Suitable for professional forest inventory and stand cruising'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Relaskop']
  },
  {
    slug: 'wedge-prism',
    name: 'Wedge Prism',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'wedge-prism',
    gallery: ['wedge-prism'],
    label: 'VARIABLE RADIUS CRUISING',
    summary: 'Precision optical glass prism used in forest inventory for variable-radius plot sampling and rapid basal area factor determination.',
    specs: [
      ['Product Type', 'Forestry Optical Wedge Prism'],
      ['Primary Use', 'Variable-Radius Plot Sampling'],
      ['Measurement Application', 'Basal Area Factor (BAF) Tally'],
      ['Optical Principle', 'Refractive Image Displacement'],
      ['Field Application', 'Forest Stand Cruising'],
      ['Format', 'Compact Optical Prism']
    ],
    features: [
      'Optical light refraction for tree tallying in point sampling',
      'Facilitates rapid basal area calculation without measuring tape',
      'Precision ground optical glass for clear displacement sighting',
      'Compact pocket-sized tool essential for timber cruising kits'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Wedge Prism']
  },
  {
    slug: 'densiometer',
    name: 'Densiometer',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'densiometer',
    gallery: ['densiometer'],
    label: 'CANOPY COVER ESTIMATION',
    summary: 'Forestry canopy instrument designed for estimating overstory forest canopy cover and solar exposure during ecological and wildlife habitat studies.',
    specs: [
      ['Product Type', 'Spherical Densiometer'],
      ['Primary Use', 'Forest Canopy Cover Estimation'],
      ['Measurement Type', 'Canopy Density & Overstory Closure'],
      ['Application', 'Ecological Surveys & Habitat Monitoring'],
      ['Field Application', 'Forestry & Watershed Assessment'],
      ['Format', 'Handheld Sighting Mirror']
    ],
    features: [
      'Reflective grid mirror for forest canopy density estimation',
      'Supports forest light penetration and cover monitoring',
      'Assists wildlife habitat and stream buffer evaluations',
      'Pocket-sized field instrument with protective closure'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Densiometer']
  },
  {
    slug: 'bark-gauge',
    name: 'Bark Gauge',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'bark-gauge',
    gallery: ['bark-gauge'],
    label: 'BARK THICKNESS GAUGE',
    summary: 'Specialized forestry hand tool designed for measuring the thickness of tree bark to determine wood volume under bark.',
    specs: [
      ['Product Type', 'Forestry Bark Thickness Gauge'],
      ['Primary Use', 'Tree Bark Thickness Measurement'],
      ['Measurement Application', 'Wood Volume Under Bark (DUB)'],
      ['Application', 'Forest Inventory & Growth Assessment'],
      ['Field Application', 'Timber Scaling & Forestry Studies'],
      ['Operation', 'Manual Penetration Gauge']
    ],
    features: [
      'Graduated shaft penetrates bark to indicate thickness',
      'Aids in accurate timber volume calculations under bark',
      'Helps assess bark thickness for tree health and fire vulnerability',
      'Durable hand tool with comfortable wood or composite handle'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Bark Gauge']
  },
  {
    slug: 'increment-borer',
    name: 'Increment Borer',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'increment-borer',
    gallery: ['increment-borer'],
    label: 'TREE CORE SAMPLER',
    summary: 'Precision core sampling tool designed for extracting clean wood cores from living trees to evaluate annual rings, age, and growth rates.',
    specs: [
      ['Product Type', 'Tree Core Increment Borer'],
      ['Primary Use', 'Tree Age & Growth Rate Sampling'],
      ['Sampling Application', 'Wood Core Extraction & Ring Analysis'],
      ['Field Application', 'Dendrochronology & Forest Ecology'],
      ['Tool Components', 'Hollow Auger Bit, Extractor & Handle'],
      ['Operation', 'Manual Hand Corer']
    ],
    features: [
      'Extracts wood cores with minimal damage to living trees',
      'Allows counting of annual growth rings for age determination',
      'Assists in dendrochronology, wood decay, and health inspection',
      'Includes hollow threaded auger bit, extractor spoon, and handle'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Increment Borer']
  },
  {
    slug: 'tally-counter',
    name: 'Tally Counter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'tally-counter',
    gallery: ['tally-counter'],
    label: 'FIELD COUNTING TOOL',
    summary: 'Handheld mechanical tally counter designed for tracking stem counts, wildlife sightings, seed numbers, and inventory units in outdoor environments.',
    specs: [
      ['Product Type', 'Handheld Tally Counter'],
      ['Primary Use', 'Field Counting & Unit Tracking'],
      ['Operation', 'Manual Mechanical Push-Button'],
      ['Reset Mechanism', 'Rotary Quick-Reset Knob'],
      ['Field Application', 'Timber Cruising, Wildlife & Plant Census'],
      ['Power Requirement', 'None (Mechanical Operation)']
    ],
    features: [
      'Push-button mechanical click mechanism for incremental counting',
      'Instant reset knob to return counter to zero',
      'Comfortable finger ring for secure handling during cruising',
      'Operates reliably without batteries in all weather conditions'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Tally Counter']
  },
  {
    slug: 'loggers-tape',
    name: 'Logger’s Tape',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'loggers-tape',
    gallery: ['loggers-tape'],
    label: 'TIMBER & LOG MEASURING',
    summary: 'Heavy-duty retractable measuring tape designed for measuring log lengths and tree diameters during timber scaling and logging operations.',
    specs: [
      ['Product Type', 'Logger’s Retractable Measuring Tape'],
      ['Primary Use', 'Log Length & Timber Diameter Measurement'],
      ['Measurement Application', 'Log Scaling & Bucking'],
      ['Retraction Mechanism', 'Automatic Spring Rewind'],
      ['Field Application', 'Timber Harvesting & Forestry Scaling'],
      ['Format', 'Belt-Mountable Heavy-Duty Reel']
    ],
    features: [
      'Spring-rewind mechanism for quick blade retraction in brush',
      'Equipped with release hook or horseshoe nail for log ends',
      'Graduated for direct measurement of lengths and tree diameters',
      'Rugged casing engineered for rough timber harvesting environments'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Loggers Tape']
  },
  {
    slug: 'measuring-tape',
    name: 'Measuring Tape',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'measuring-tape',
    gallery: ['measuring-tape'],
    label: 'LONG REEL TAPE',
    summary: 'Long-length field measuring tape designed for survey layout, plot boundary establishment, transect lines, and distance measurement across rugged ground.',
    specs: [
      ['Product Type', 'Long Reel Measuring Tape'],
      ['Primary Use', 'Field Distance Measurement'],
      ['Measurement Application', 'Sample Plot Layout & Transect Lines'],
      ['Retraction Type', 'Manual Folding Rewind Handle'],
      ['Field Application', 'Forest Inventory & Survey Layout'],
      ['Format', 'Portable Reel Tape']
    ],
    features: [
      'Open-reel or closed-casing design for distance layout',
      'Dual metric and imperial measurement graduations',
      'Non-conductive flexible blade resists moisture and stretching',
      'Folding rewind crank for smooth tape retrieval in the field'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory'],
    categoryIds: ['forestry'],
    tags: ['Forest Measurement & Inventory', 'Measuring Tape']
  },
  {
    slug: 'laser-rangefinder',
    name: 'Laser Rangefinder',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'laser-rangefinder',
    gallery: ['laser-rangefinder'],
    label: 'DISTANCE & HEIGHT MEASUREMENT',
    summary: 'Compact electro-optical rangefinder designed for rapid distance and height measurements across woodland terrain, open fields, and survey plots.',
    specs: [
      ['Product Type', 'Handheld Laser Rangefinder'],
      ['Primary Use', 'Distance & Height Measurement'],
      ['Measurement Technology', 'Electro-Optical Laser Ranging'],
      ['Application', 'Plot Boundary & Tree Height Layout'],
      ['Field Application', 'Forestry Mensuration & Surveying'],
      ['Format', 'Monocular Handheld Unit']
    ],
    features: [
      'Rapid optical laser distance measurement to field targets',
      'Supports vertical angle and horizontal distance calculation',
      'Aids in establishing plot radii and measuring tree heights',
      'Handheld ergonomic body with weather-resistant sealing'
    ],
    page: 1,
    subcategories: ['forest-measurement-inventory', 'gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['Forest Measurement & Inventory', 'Laser Rangefinder']
  },

  // =========================================================================
  // 2. GPS, SURVEY & MAPPING PRODUCTS (Subcategory ID: gps-survey-mapping-products)
  // =========================================================================
  {
    slug: 'geomate-gnss-receiver',
    name: 'GeoMate Complete GNSS RTK System',
    brand: 'GeoMate',
    category: 'surveying',
    image: 'geomate-gnss-receiver',
    gallery: ['geomate-gnss-receiver', 'geomate-gbase-gnss', 'geomate-sg6l-gnss', 'geomate-fc2-controller'],
    label: 'TURNKEY GNSS RTK SYSTEM',
    summary: 'Turnkey surveying and DGPS positioning system combining the GeoMate GBASE high-power UHF base station, the GeoMate SG6L visual-assist laser rover, and the GeoMate FC2 rugged field controller with MateSurvey software for centimetre-grade accuracy across surveying, forestry, mining, and geodetic applications.',
    customWhatsAppMessage: 'Hello AFFORDA Technologies, I would like a quote and availability for the GeoMate Complete GNSS RTK System (GBASE Base + SG6L Rover + FC2 Controller).',
    specs: [
      ['System Type', 'Complete GNSS RTK Base + Rover + Field Controller Solution'],
      ['Base Station', 'GeoMate GBASE (1608 Channels, Internal 5W UHF, LongRun up to 30 km)'],
      ['Rover Receiver', 'GeoMate SG6L (1892 Channels, 50 m Green Laser, Dual AR Cameras, 60° IMU)'],
      ['Field Controller', 'GeoMate FC2 (5.5" HD+ Touchscreen, Android 10, MateSurvey Pre-installed)'],
      ['RTK Accuracy', 'Horizontal: 8 mm + 1 ppm RMS / Vertical: 15 mm + 1 ppm RMS'],
      ['Constellation Support', 'GPS, GLONASS, Galileo, BeiDou, QZSS, NavIC, SBAS'],
      ['UHF Radio Range', 'Up to 15 km standard (up to 30 km in LongRun™ mode)'],
      ['Tilt Compensation', 'Calibration-free 60° IMU tilt measurement on rover'],
      ['Environmental Protection', 'IP67 (Base) / IP68 (Rover & Controller), 2 m drop resistant'],
      ['Field Workflow', 'Complete field-to-office survey, stakeout, boundary & cadastral workflow']
    ],
    features: [
      'Complete turnkey survey kit: GBASE base station + SG6L rover + FC2 field controller + MateSurvey software',
      'Multi-constellation tracking across 1608/1892 channels for ultra-fast RTK fix in challenging canopy or urban canyons',
      'High-power 5W internal UHF transceiver on GBASE operating up to 15 km (30 km in LongRun mode) without external radio hassles',
      'SG6L rover equipped with 50 m green millimetre laser and dual AR cameras for stakeout, inaccessible points, and photogrammetry',
      'Calibration-free 60° IMU tilt compensation immune to magnetic interference for rapid, accurate pole-tilt survey',
      'FC2 Android controller with sunlight-readable 5.5" display, physical alphanumeric keypad, and 8,000 mAh battery for 14+ hours continuous operation',
      'Pre-installed MateSurvey software supporting standard CAD/GIS formats, stakeout modes, road design, and geodetic coordinate systems',
      'Supplied with carbon-fibre rover pole, heavy-duty base tripod with tribrach and adapter, dual-bay chargers, and rugged transport cases'
    ],
    systemComponents: [
      {
        slug: 'geomate-gbase-gnss',
        role: 'BASE STATION',
        name: 'GeoMate GBASE GNSS',
        summary: '1608-channel geodetic base receiver with internal 5W UHF radio (up to 30 km LongRun range), dual hot-swappable batteries, and IP67 rugged enclosure.',
        image: 'geomate-gbase-gnss'
      },
      {
        slug: 'geomate-sg6l-gnss',
        role: 'ROVER RECEIVER',
        name: 'GeoMate SG6L GNSS',
        summary: '1892-channel lightweight visual rover featuring a 50 m green laser, dual AR cameras for stakeout and 3D modeling, and 60° calibration-free IMU tilt compensation.',
        image: 'geomate-sg6l-gnss'
      },
      {
        slug: 'geomate-fc2-controller',
        role: 'FIELD CONTROLLER',
        name: 'GeoMate FC2 Controller',
        summary: 'Rugged Android 10 handheld controller featuring a 5.5" sunlight-readable HD+ display, alphanumeric keypad, 8000 mAh battery, and MateSurvey software.',
        image: 'geomate-fc2-controller'
      }
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products', 'geological-field-mapping', 'mining-mapping'],
    categoryIds: ['surveying', 'forestry', 'geology', 'mining'],
    tags: ['GNSS / RTK Receivers', 'RTK / DGPS', 'GPS / GNSS Receivers', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'geomate-gbase-gnss',
    name: 'GeoMate GBASE GNSS Base Station',
    brand: 'GeoMate',
    category: 'surveying',
    image: 'geomate-gbase-gnss',
    gallery: ['geomate-gbase-gnss', 'geomate-gbase-gnss-2'],
    label: 'BASE STATION GNSS RECEIVER',
    summary: 'Dedicated geodetic GNSS base station engineered with 1608 channels, an integrated high-power 5W UHF transceiver with LongRun range up to 30 km, dual hot-swappable batteries for uninterrupted operation, and an OLED status screen.',
    customWhatsAppMessage: 'Hello AFFORDA Technologies, I would like a quote and specifications for the GeoMate GBASE GNSS Base Station.',
    packageNotice: {
      text: 'Part of the turnkey GeoMate surveying package with SG6L Rover & FC2 Controller.',
      packageSlug: 'geomate-gnss-receiver',
      packageTitle: 'View Complete RTK System'
    },
    datasheetUrl: '/datasheets/GBase_DS_EN.pdf',
    specs: [
      ['Channels', '1608 channels multi-constellation GNSS'],
      ['Constellations Tracked', 'GPS (L1 C/A, L2C, L2P, L5), GLONASS (L1, L2), BeiDou (B1I, B2I, B3I, B1C, B2a, B2b), Galileo (E1, E5a, E5b, E6), QZSS (L1, L2, L5), SBAS (L1)'],
      ['Internal UHF Radio', 'Integrated 5W UHF transceiver (410–470 MHz), GeoMate / TrimTalk / SATEL compatible'],
      ['Radio Range', 'Up to 15 km standard UHF; up to 30 km in LongRun™ mode'],
      ['RTK Positioning Accuracy', 'Horizontal: 8 mm + 1 ppm RMS / Vertical: 15 mm + 1 ppm RMS'],
      ['Post-Processed Static', 'Horizontal: 2.5 mm + 0.5 ppm RMS / Vertical: 5 mm + 0.5 ppm RMS'],
      ['Power System', 'Dual hot-swappable 7.2V / 6800 mAh Li-ion batteries (up to 12 hours Base transmit at 5W)'],
      ['External Power Input', '9–28 V DC with overvoltage and reverse-polarity protection'],
      ['Display & Controls', '0.96-inch OLED screen with multi-function keys & LED indicators'],
      ['Communications', 'Bluetooth 5.0, Wi-Fi 802.11 b/g/n, 4G LTE modem (NTRIP Caster & Client), USB Type-C, RS232'],
      ['Internal Storage', '32 GB internal memory supporting raw RINEX / observation logging up to 20 Hz'],
      ['Environmental Protection', 'IP67 dust & waterproof, withstands 2 m pole drop onto concrete'],
      ['Dimensions & Weight', '160 mm × 160 mm × 103 mm | 1.65 kg (with dual batteries)'],
      ['Operating Temperature', '-40°C to +75°C']
    ],
    features: [
      '1608-channel tracking engine captures all active GNSS constellations and frequencies for unmatched satellite availability',
      'Internal 5W UHF radio covers up to 15 km standard and up to 30 km in LongRun mode without external amplifier boxes',
      'Dual hot-swappable batteries allow continuous static or RTK base broadcast without powering down',
      'Integrated 4G cellular modem provides standalone NTRIP Caster / Server functionality directly from the base station',
      'High-contrast 0.96-inch OLED display enables quick configuration of radio frequency, transmit power, and station coordinates in the field',
      'Built-in web user interface accessible via Wi-Fi for comprehensive station setup, firmware updates, and remote RINEX downloads',
      'IP67 ruggedized magnesium-alloy chassis built to survive extreme weather, dust storms, and harsh jobsite handling'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products', 'mining-mapping'],
    categoryIds: ['surveying', 'forestry', 'mining'],
    tags: ['GNSS / RTK Receivers', 'RTK / DGPS', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'geomate-sg6l-gnss',
    name: 'GeoMate SG6L GNSS Visual Laser Rover',
    brand: 'GeoMate',
    category: 'surveying',
    image: 'geomate-sg6l-gnss',
    gallery: ['geomate-sg6l-gnss', 'geomate-sg6l-gnss-2'],
    label: 'VISUAL LASER GNSS ROVER',
    summary: 'Ultra-compact 800 g visual RTK rover with 1892 channels, integrated 50 m green millimetre laser for non-contact measurement, dual augmented reality cameras for immersive stakeout, and 60° calibration-free IMU tilt compensation.',
    customWhatsAppMessage: 'Hello AFFORDA Technologies, I would like a quote and specifications for the GeoMate SG6L GNSS Visual Laser Rover.',
    packageNotice: {
      text: 'Available individually or as part of the turnkey GeoMate Complete RTK System.',
      packageSlug: 'geomate-gnss-receiver',
      packageTitle: 'View Complete RTK System'
    },
    datasheetUrl: '/datasheets/SG6L_Geomate_DS_EN.pdf',
    specs: [
      ['Channels', '1892 channels multi-constellation GNSS'],
      ['Constellations Tracked', 'GPS (L1 C/A, L1C, L2C, L2P, L5), GLONASS (L1, L2, L3), BeiDou (B1I, B2I, B3I, B1C, B2a, B2b), Galileo (E1, E5a, E5b, E6), QZSS (L1, L2, L5), NavIC (L5), SBAS'],
      ['Visual Measurement / Laser', 'Integrated green laser pointer & distance meter (range up to 50 m, accuracy ±(2 mm + 0.1 mm/m))'],
      ['Dual AR Cameras', '2 MP front camera for AR stakeout + 5 MP bottom camera for image measurement / 3D photogrammetry'],
      ['IMU Tilt Compensation', 'Calibration-free 60° IMU tilt sensor immune to magnetic interference (tilt accuracy < 2 cm at 30°)'],
      ['RTK Positioning Accuracy', 'Horizontal: 8 mm + 1 ppm RMS / Vertical: 15 mm + 1 ppm RMS'],
      ['Laser Surveying Accuracy', 'Centimetre-level coordinate measurement at distances up to 50 m without pole placement'],
      ['Internal UHF Radio', 'Built-in receiving / transmitting UHF radio (410–470 MHz)'],
      ['Cellular & Wireless', 'Bluetooth 5.3, Wi-Fi 802.11 b/g/n, NFC one-tap pairing, 4G LTE network RTK'],
      ['Battery & Autonomy', 'Integrated 9600 mAh Li-ion battery supporting up to 18 hours continuous rover operation'],
      ['Fast Charging', 'USB Type-C PD 15W fast charge (fully recharged in ~3.5 hours)'],
      ['Environmental Protection', 'IP68 certified waterproof & dustproof, 2 m drop onto concrete'],
      ['Weight & Dimensions', '800 g | 133 mm diameter × 87 mm height'],
      ['Operating Temperature', '-40°C to +75°C']
    ],
    features: [
      '1892-channel tracking engine with full constellation support ensures rapid RTK fix in under 5 seconds even under dense tree cover or urban canyons',
      'Integrated 50 m green millimetre laser measures inaccessible or hazardous points (cliffs, ravines, transformer yards, highway medians) with point-and-click ease',
      'Dual augmented reality (AR) cameras project intuitive 3D field arrows on live screen for effortless stakeout and photogrammetric 3D point cloud generation',
      'Third-generation calibration-free 60° IMU tilt sensor eliminates pole leveling, boosting daily survey productivity by over 30%',
      'Featherweight 800 g magnesium-aluminum alloy body reduces operator fatigue during long days in the field',
      '9,600 mAh high-capacity internal battery provides 18 hours of continuous operation on a single charge with Type-C power bank charging',
      'IP68 environmental rating ensures complete submersion protection and total resistance to fine dust, sand, and heavy downpours'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products', 'geological-field-mapping', 'mining-mapping'],
    categoryIds: ['surveying', 'forestry', 'geology', 'mining'],
    tags: ['GNSS / RTK Receivers', 'RTK / DGPS', 'GPS / GNSS Receivers', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'geomate-fc2-controller',
    name: 'GeoMate FC2 Field Controller',
    brand: 'GeoMate',
    category: 'surveying',
    image: 'geomate-fc2-controller',
    gallery: ['geomate-fc2-controller', 'geomate-fc2-controller-2', 'geomate-fc2-controller-3'],
    label: 'RUGGED FIELD DATA CONTROLLER',
    summary: 'Professional handheld field controller powered by Android 10, featuring a 5.5-inch sunlight-readable HD+ multi-touch display, full physical alphanumeric keypad, 8000 mAh all-day battery, and pre-installed MateSurvey software.',
    customWhatsAppMessage: 'Hello AFFORDA Technologies, I would like a quote and specifications for the GeoMate FC2 Field Controller with MateSurvey.',
    packageNotice: {
      text: 'Supplied standard with the turnkey GeoMate Complete RTK System.',
      packageSlug: 'geomate-gnss-receiver',
      packageTitle: 'View Complete RTK System'
    },
    specs: [
      ['Operating System', 'Android 10.0 with Google Mobile Services (GMS)'],
      ['Processor', 'Helio Octa-core 2.0 GHz high-performance processor'],
      ['Memory & Storage', '4 GB RAM + 64 GB ROM (expandable up to 128 GB via microSD)'],
      ['Display', '5.5-inch IPS HD+ (1440 × 720) sunlight-readable capacitive touch screen (supports wet hand / glove mode)'],
      ['Keypad', 'Full physical alphanumeric keypad with customizable shortcut keys and dedicated survey buttons'],
      ['Battery & Runtime', '8000 mAh rechargeable Li-ion battery providing up to 14+ hours continuous surveying'],
      ['Charging', 'USB Type-C with PE+ 2.0 fast charging (≤ 4 hours full charge)'],
      ['Wireless Connectivity', '4G LTE dual-SIM dual-standby, Wi-Fi 802.11 a/b/g/n/ac (2.4/5 GHz), Bluetooth 5.0, NFC'],
      ['GNSS Chipset', 'Internal GPS, GLONASS, BeiDou, Galileo receiver for autonomous GIS positioning'],
      ['Integrated Camera', '13 MP rear camera with autofocus and flash + 5 MP front camera'],
      ['Field Software', 'GeoMate MateSurvey professional field software pre-installed (CAD, stakeout, COGO, roading)'],
      ['Durability Rating', 'IP68 waterproof and dustproof, MIL-STD-810H compliant, 1.5 m drop onto concrete'],
      ['Weight & Dimensions', '225 mm × 80 mm × 23 mm | 460 g (with battery)'],
      ['Operating Temperature', '-30°C to +60°C']
    ],
    features: [
      '5.5-inch sunlight-readable HD+ multi-touch screen operable in torrential rain, bright direct sunlight, and with heavy survey gloves',
      'Full alphanumeric physical keypad provides tactile, positive feedback for high-speed coordinate entry and field coding without mis-touches',
      '8,000 mAh high-capacity battery delivers over 14 hours of continuous RTK network surveying and screen-on time',
      'Pre-installed MateSurvey software offers comprehensive field surveying modules: topographic survey, CAD stakeout, road design, curve calculation, and GIS attribute collection',
      'Seamless compatibility with GeoMate GBASE, SG6L, and other NMEA-compatible GNSS and total station instruments via Bluetooth and Wi-Fi',
      'IP68 and MIL-STD-810H military-grade rugged enclosure resists water submersion, heavy dust ingress, and accidental drops on rocky terrain',
      'Dual 4G Nano-SIM slots provide rock-solid internet connection for CORS / NTRIP networks and instant cloud project sync'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products', 'mining-rugged', 'defense-rugged'],
    categoryIds: ['surveying', 'forestry', 'computing', 'mining'],
    tags: ['GNSS Controllers', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'professional-gnss-receiver',
    name: 'Professional GNSS Receiver',
    brand: 'AFFORDA',
    category: 'surveying',
    image: 'professional-gnss-receiver',
    gallery: ['professional-gnss-receiver'],
    label: 'GNSS SURVEY RECEIVER',
    summary: 'High-precision multi-constellation GNSS receiver designed for geodetic surveying, topographic mapping, and precision field positioning. For complete turnkey base-and-rover RTK setups, see our GeoMate Complete GNSS RTK System.',
    packageNotice: {
      text: 'Looking for a complete RTK setup? Check out the GeoMate Complete GNSS RTK System.',
      packageSlug: 'geomate-gnss-receiver',
      packageTitle: 'GeoMate Turnkey RTK'
    },
    specs: [
      ['Product Type', 'Survey GNSS Receiver'],
      ['Primary Use', 'Geodetic Surveying & Precision Mapping'],
      ['Positioning Mode', 'Base, Rover & Static Operations'],
      ['Constellation Support', 'Multi-Constellation GNSS'],
      ['Field Application', 'Cadastral, Topographic & Boundary Surveys'],
      ['Housing Rating', 'Rugged Field Enclosure']
    ],
    features: [
      'Multi-constellation satellite tracking for field positioning',
      'Designed for base and rover survey workflows',
      'Rugged weatherproof housing for harsh environmental conditions',
      'Integrates with survey controllers and mapping software'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GNSS / RTK Receivers', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'rtk-dgps',
    name: 'RTK / DGPS',
    brand: 'AFFORDA',
    category: 'surveying',
    image: 'rtk-dgps',
    gallery: ['rtk-dgps'],
    label: 'RTK POSITIONING SYSTEM',
    summary: 'High-accuracy satellite positioning system used for professional surveying, boundary mapping, and precise field data collection. For ready-to-deploy base and rover hardware, explore the GeoMate Complete GNSS RTK System.',
    packageNotice: {
      text: 'Looking for a turnkey Base + Rover RTK kit? Explore GeoMate GNSS solutions.',
      packageSlug: 'geomate-gnss-receiver',
      packageTitle: 'GeoMate Turnkey RTK'
    },
    specs: [
      ['System Type', 'GNSS RTK / DGPS'],
      ['Primary Use', 'Precision Positioning'],
      ['Application', 'Surveying & Mapping'],
      ['Typical Configuration', 'Base + Rover'],
      ['Field Workflow', 'Real-Time Positioning']
    ],
    features: [
      'RTK / DGPS positioning workflow',
      'Suitable for professional surveying',
      'Supports base and rover operation',
      'Designed for high-accuracy mapping'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GNSS / RTK Receivers', 'RTK / DGPS', 'GPS, Survey & Mapping Products']
  },
  {
    slug: 'sub-meter-gps',
    name: 'Sub-meter GPS',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'sub-meter-gps',
    gallery: ['sub-meter-gps'],
    label: 'SUB-METER MAPPING GPS',
    summary: 'Field-ready handheld GNSS mapping receiver designed for GIS data collection, asset management, and environmental resource surveys requiring sub-meter precision.',
    specs: [
      ['Product Type', 'GIS Mapping GPS Receiver'],
      ['Primary Use', 'Sub-Meter Field Mapping & Asset Logging'],
      ['Differential Support', 'SBAS / DGPS Differential Processing'],
      ['Application', 'Natural Resources & Utility Inventory'],
      ['Field Workflow', 'GIS Data Collection & Waypoint Logging'],
      ['Format', 'Rugged Handheld Field Unit']
    ],
    features: [
      'Optimized for GIS asset mapping and utility inventory',
      'Differential correction support for sub-meter mapping workflows',
      'Integrated antenna and sunlight-readable display interface',
      'Rugged drop-resistant casing built for all-weather fieldwork'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Sub-meter GPS']
  },
  {
    slug: 'centimeter-mm-accuracy-gnss',
    name: 'Centimeter / mm-accuracy GNSS',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'centimeter-mm-accuracy-gnss',
    gallery: ['centimeter-mm-accuracy-gnss'],
    label: 'HIGH-PRECISION GNSS',
    summary: 'Geodetic-grade satellite positioning system designed for boundary surveying, geodetic control networks, and engineering applications demanding centimeter-to-millimeter precision.',
    specs: [
      ['Product Type', 'High-Precision Geodetic GNSS'],
      ['Primary Use', 'Control Surveys & Geodetic Measurement'],
      ['Workflow Modes', 'Real-Time Kinematic (RTK) & Static'],
      ['Application', 'Boundary, Cadastral & Engineering Layout'],
      ['Mounting Compatibility', 'Survey Tribrach & Range Pole'],
      ['Field Enclosure', 'Weatherproof Geodetic Housing']
    ],
    features: [
      'Geodetic survey positioning for engineering control points',
      'Supports static post-processing and real-time kinematic modes',
      'Multi-frequency signal tracking for robust multipath mitigation',
      'Compatible with precision survey tripods and tribrachs'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Precision GNSS']
  },
  {
    slug: 'electronic-data-collector',
    name: 'Electronic Data Collector',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'electronic-data-collector',
    gallery: ['electronic-data-collector'],
    label: 'SURVEY FIELD CONTROLLER',
    summary: 'Rugged handheld field controller designed for logging survey observations, managing coordinate databases, and operating GNSS and total station instruments.',
    specs: [
      ['Product Type', 'Survey Field Controller / Data Collector'],
      ['Primary Use', 'Survey Instrument Control & Data Logging'],
      ['Input Interface', 'Touchscreen & Physical Alpha-Numeric Keypad'],
      ['Supported Equipment', 'GNSS Receivers & Total Stations'],
      ['Application', 'Field Stakeout, Topo Mapping & COGO'],
      ['Enclosure Style', 'Rugged Handheld Field Controller']
    ],
    features: [
      'Directly interfaces with GNSS receivers and total stations',
      'Sunlight-readable touchscreen with physical survey keypad',
      'Runs industry-standard field survey and stakeout software',
      'All-weather drop-proof and dustproof field construction'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Data Collector']
  },
  {
    slug: 'digital-compass',
    name: 'Digital Compass',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'digital-compass',
    gallery: ['digital-compass'],
    label: 'ELECTRONIC BEARING COMPASS',
    summary: 'Electronic sighting compass designed for orientation, bearing measurement, and azimuth data capture during geological and topographic field surveys.',
    specs: [
      ['Product Type', 'Electronic Digital Compass'],
      ['Primary Use', 'Field Heading & Azimuth Measurement'],
      ['Display Type', 'Digital LCD Screen'],
      ['Declination Support', 'Adjustable Magnetic Declination'],
      ['Application', 'Orientation, Sighting & Field Navigation'],
      ['Format', 'Handheld Electronic Instrument']
    ],
    features: [
      'Digital electronic sensor for magnetic and true azimuths',
      'Backlit LCD screen for reading bearings in poor light',
      'Integrated declination adjustment for accurate directional work',
      'Pocket-sized handheld casing suited for field navigation'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Digital Compass']
  },
  {
    slug: 'staff-compass',
    name: 'Staff Compass',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'staff-compass',
    gallery: ['staff-compass'],
    label: 'MOUNTABLE SURVEY COMPASS',
    summary: 'Mountable survey compass designed for attaching to a Jacob’s staff or tripod to shoot precise bearings in forestry and boundary surveys.',
    specs: [
      ['Product Type', 'Staff / Forestry Survey Compass'],
      ['Primary Use', 'Boundary Line Layout & Survey Bearings'],
      ['Mounting Interface', 'Jacob’s Staff & Tripod Socket'],
      ['Sighting Mechanism', 'Folding Sighting Vanes'],
      ['Field Application', 'Timber Boundary Surveys & Cruising'],
      ['Operation', 'Damped Magnetic Sighting']
    ],
    features: [
      'Mounts onto Jacob’s staff or ball-and-socket tripod adaptors',
      'Large graduated dial with folding sighting vanes for alignments',
      'Needle dampening mechanism for fast, stable settling in the field',
      'Engineered for timber cruising and forest boundary line running'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Staff Compass']
  },
  {
    slug: 'altimeter',
    name: 'Altimeter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'altimeter',
    gallery: ['altimeter'],
    label: 'BAROMETRIC ALTIMETER',
    summary: 'Barometric field instrument designed for determining elevations, altitude changes, and atmospheric pressure gradients during mountainous field surveying and ecological mapping.',
    specs: [
      ['Product Type', 'Barometric Field Altimeter'],
      ['Primary Use', 'Elevation & Altitude Profiling'],
      ['Measurement Principle', 'Barometric Atmospheric Pressure'],
      ['Adjustment', 'Calibratable Zero / Reference Bezel'],
      ['Field Application', 'Mountain Surveys & Topographic Profiling'],
      ['Format', 'Pocket-Sized Field Instrument']
    ],
    features: [
      'Measures atmospheric pressure to indicate relative elevations',
      'Rotary bezel for zeroing and altitude calibration at known points',
      'Ideal for topographical profiling in remote mountainous terrain',
      'Mechanical analog or digital design needing no external connections'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Altimeter']
  },
  {
    slug: 'total-station',
    name: 'Total Station',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'total-station',
    gallery: ['total-station'],
    label: 'OPTICAL SURVEY INSTRUMENT',
    summary: 'Electronic optical survey instrument combining an electronic theodolite and distance meter for measuring precise angles and slopes in construction and land surveying.',
    specs: [
      ['Product Type', 'Electronic Total Station'],
      ['Primary Use', 'Angular & Distance Survey Measurement'],
      ['Measurement Components', 'Electronic Theodolite & EDM'],
      ['Targeting Modes', 'Prism & Reflectorless Sighting'],
      ['Field Application', 'Boundary, Topographic & Engineering Surveys'],
      ['Mounting Interface', 'Standard Survey Tribrach & Tripod']
    ],
    features: [
      'Measures horizontal angles, vertical angles, and slope distances',
      'Integrated microprocessor computes coordinates and elevations',
      'Prism and reflectorless targeting options for diverse field targets',
      'Mounts on standard survey tripods with optical or laser plummet'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Total Station']
  },
  {
    slug: 'automatic-level',
    name: 'Automatic Level',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'automatic-level',
    gallery: ['automatic-level'],
    label: 'OPTICAL SURVEY LEVEL',
    summary: 'Optical surveying instrument featuring an internal self-leveling compensator for establishing accurate horizontal lines of sight and differential elevation leveling.',
    specs: [
      ['Product Type', 'Optical Automatic Level'],
      ['Primary Use', 'Differential Leveling & Elevation Transfer'],
      ['Leveling Mechanism', 'Internal Self-Leveling Compensator'],
      ['Targeting System', 'Optical Telescope with Sighting Reticle'],
      ['Field Application', 'Construction, Grade & Topographic Leveling'],
      ['Mounting Base', 'Standard 5/8-inch Tripod Thread']
    ],
    features: [
      'Internal magnetically or air-damped compensator for self-leveling',
      'High-clarity optical telescope with crosshair reticle',
      'Endless horizontal tangent drives for precise staff targeting',
      'Rugged baseplate designed for standard flat- or dome-head tripods'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Automatic Level']
  },
  {
    slug: 'survey-tripod',
    name: 'Survey Tripod',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'survey-tripod',
    gallery: ['survey-tripod'],
    label: 'INSTRUMENT FIELD TRIPOD',
    summary: 'Stable field tripod engineered to support total stations, GNSS base receivers, automatic levels, and survey targets across uneven terrain.',
    specs: [
      ['Product Type', 'Survey Instrument Tripod'],
      ['Primary Use', 'Instrument Stabilization & Ground Setup'],
      ['Mounting Head', 'Flat / Dome Head with 5/8-inch Thread'],
      ['Leg Mechanism', 'Extendable Legs with Quick-Lock Clamps'],
      ['Ground Interface', 'Pointed Metal Spurred Feet'],
      ['Supported Instruments', 'Total Stations, Levels & GNSS Antennas']
    ],
    features: [
      'Heavy-duty legs with pointed metal feet for firm ground anchor',
      'Quick-clamp or screw-lock leg extension mechanisms',
      'Standard 5/8-inch thread mount compatible with survey equipment',
      'Shoulder carry strap and leg retainers for convenient transit'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Survey Tripod']
  },
  {
    slug: 'measuring-rod',
    name: 'Measuring Rod',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'measuring-rod',
    gallery: ['measuring-rod'],
    label: 'SURVEY LEVELING ROD',
    summary: 'Telescopic or folding graduated rod designed for optical leveling sightings, grade verification, and height measurements in surveying operations.',
    specs: [
      ['Product Type', 'Surveying Leveling Rod'],
      ['Primary Use', 'Elevation Sightings & Grade Measurement'],
      ['Graduation Style', 'High-Contrast Metric / Imperial Scales'],
      ['Section Mechanism', 'Telescopic Extension with Positive Lock'],
      ['Application', 'Differential Leveling & Height Verification'],
      ['Field Pairing', 'Optical Levels & Rotary Laser Receivers']
    ],
    features: [
      'Graduated with bold, high-contrast leveling markings',
      'Telescopic interlocking sections with secure locking buttons',
      'Durable non-conductive and weather-resistant construction',
      'Pairs with automatic levels, laser detectors, and total stations'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Measuring Rod']
  },
  {
    slug: 'plot-markers',
    name: 'Plot Markers',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'plot-markers',
    gallery: ['plot-markers'],
    label: 'SURVEY GROUND MARKERS',
    summary: 'Durable ground markers designed for designating permanent sample plots, survey control points, boundary corners, and forestry research stations.',
    specs: [
      ['Product Type', 'Survey & Plot Ground Markers'],
      ['Primary Use', 'Sample Plot & Boundary Station Identification'],
      ['Installation Method', 'Ground Insertion Stake / Pin'],
      ['Surface Feature', 'Stampable Identification Cap / Flag'],
      ['Field Application', 'Forest Inventory Plots & Cadastral Points'],
      ['Durability Focus', 'Corrosion-Resistant Outdoor Ground Placement']
    ],
    features: [
      'High-visibility marker heads for quick identification in dense brush',
      'Corrosion-resistant ground stake or pin designed for long-term placement',
      'Suitable for stamping or scribing station numbers and coordinates',
      'Resists displacement from weather, wildlife, and ground movement'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Plot Markers']
  },
  {
    slug: 'flagging-tape',
    name: 'Flagging Tape',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'flagging-tape',
    gallery: ['flagging-tape'],
    label: 'HIGH-VISIBILITY MARKING',
    summary: 'High-visibility non-adhesive marking tape designed for flagging timber boundaries, sample trees, trail layouts, and survey lines in outdoor environments.',
    specs: [
      ['Product Type', 'High-Visibility Flagging Ribbon'],
      ['Primary Use', 'Visual Boundary & Target Marking'],
      ['Tape Format', 'Non-Adhesive Flexible Roll'],
      ['Handling', 'Hand-Tearable & Easy-Knotting'],
      ['Field Application', 'Forestry Cruising, Trail Layout & Survey Lines'],
      ['Visibility', 'Bright Outdoor Fluorescent & Standard Tones']
    ],
    features: [
      'Vibrant high-contrast coloration visible through dense forest canopy',
      'Flexible non-adhesive ribbon easy to tie and tear by hand',
      'Weather-resistant material maintains color against sunlight and rain',
      'Supplied in compact rolls suitable for pocket or vest carry'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Flagging Tape']
  },
  {
    slug: 'field-data-recorder',
    name: 'Field Data Recorder',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'field-data-recorder',
    gallery: ['field-data-recorder'],
    label: 'ELECTRONIC FIELD RECORDER',
    summary: 'Rugged mobile data collection unit engineered for capturing forestry measurements, ecological observations, and geographic records under outdoor field conditions.',
    specs: [
      ['Product Type', 'Rugged Field Data Recorder'],
      ['Primary Use', 'Field Observation & Forestry Data Capture'],
      ['User Interface', 'Sunlight-Readable Display & Field Controls'],
      ['Data Handling', 'Digital Form Entry & Database Export'],
      ['Field Application', 'Forest Inventory & Environmental Monitoring'],
      ['Protection Class', 'Ruggedized Weatherproof Construction']
    ],
    features: [
      'Dedicated field form software support for rapid attribute entry',
      'High-durability casing resistant to drops, dust, and rainfall',
      'Sunlight-readable display designed for outdoor readability',
      'Wireless connectivity for exporting collected field databases'
    ],
    page: 1,
    subcategories: ['gps-survey-mapping-products'],
    categoryIds: ['forestry', 'surveying'],
    tags: ['GPS, Survey & Mapping Products', 'Field Data Recorder']
  },

  // =========================================================================
  // 3. FOREST FIRE-FIGHTING PRODUCTS (Subcategory ID: forest-fire-fighting-products)
  // =========================================================================
  {
    slug: 'backpack-fire-pump',
    name: 'Backpack Fire Pump',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'PORTABLE WATER APPARATUS',
    summary: 'Collapsible or rigid backpack reservoir with hand-operated slide trombone pump, designed for mop-up and initial attack on wildland spot fires.',
    specs: [
      ['Product Type', 'Wildland Backpack Fire Pump'],
      ['Primary Use', 'Mop-Up & Spot Fire Suppression'],
      ['Pump Mechanism', 'Manual Slide Trombone Pump'],
      ['Nozzle Function', 'Adjustable Stream & Cone Spray'],
      ['Field Application', 'Wildland Firefighting & Line Patrol'],
      ['Portability', 'Wearable Backpack Harness']
    ],
    features: [
      'Dual-action brass hand slide pump delivers steady water spray',
      'Ergonomic backpack harness with padded straps for hiking steep lines',
      'Adjustable nozzle switches between straight stream and wide spray',
      'Wide-mouth fill opening with internal debris filter screen'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Backpack Fire Pump']
  },
  {
    slug: 'portable-fire-pump',
    name: 'Portable Fire Pump',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FORESTRY FIRE PUMP',
    summary: 'Engine-driven portable water pump designed for wildland firefighting crews to draft water from natural sources and supply pressurized attack lines.',
    specs: [
      ['Product Type', 'Portable Wildland Fire Pump'],
      ['Primary Use', 'Wildfire Water Delivery & Drafting'],
      ['Operation', 'Gasoline Engine Centrifugal Pump'],
      ['Suction Application', 'Natural Water Bodies & Folding Tanks'],
      ['Field Application', 'Wildland Hose Lays & Remote Fire Attack'],
      ['Format', 'Packable Tubular Steel Carry Frame']
    ],
    features: [
      'High-pressure centrifugal pump head engineered for forestry hose lays',
      'Equipped with transport frame or pack harness for remote line carry',
      'Capable of drafting water from streams, lakes, and portable tanks',
      'Spark-arrested exhaust suitable for hazardous dry forest zones'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Portable Fire Pump']
  },
  {
    slug: 'fire-rake',
    name: 'Fire Rake',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIRELINE HAND TOOL',
    summary: 'Wildland firefighting hand tool used for clearing vegetation, loose debris and combustible material while preparing fire lines.',
    specs: [
      ['Product Type', 'Wildland Fire Rake'],
      ['Primary Use', 'Fire-Line Preparation'],
      ['Application', 'Vegetation & Debris Clearing'],
      ['Operation', 'Manual'],
      ['Field Category', 'Forest Fire Fighting']
    ],
    features: [
      'Designed for fire-line preparation',
      'Helps clear vegetation and debris',
      'Suitable for wildfire field operations',
      'Long-handle manual tool'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Rake']
  },
  {
    slug: 'fire-swatter',
    name: 'Fire Swatter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FLAME SMOTHERING TOOL',
    summary: 'Manual firefighting tool equipped with a flexible reinforced rubber flap, designed for smothering grass fires, ground embers, and low-intensity brush blazes.',
    specs: [
      ['Product Type', 'Wildland Fire Flapper / Swatter'],
      ['Primary Use', 'Grass Fire Suppression & Embers Smothering'],
      ['Tool Mechanism', 'Oxygen Deprivation Surface Impact'],
      ['Working Head', 'Heavy-Duty Reinforced Rubber Flap'],
      ['Field Application', 'Grassland & Low-Fuel Wildfire Initial Attack'],
      ['Operation', 'Long-Handle Manual Swatting']
    ],
    features: [
      'Flexible heat-resistant rubber flap smothers surface fires by oxygen starvation',
      'Heavy-duty steel socket connection secures flap to handle',
      'Long wooden or fiberglass handle keeps firefighter at safe distance',
      'Effective for fast knockdown in open grass and brush fields'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Swatter']
  },
  {
    slug: 'pulaski-forestry-axe',
    name: 'Pulaski Forestry Axe',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'DUAL-PURPOSE FIRE AXE',
    summary: 'Dual-purpose wildland firefighting hand tool combining a sharp cutting axe blade with a narrow grubbing mattock for digging and chopping.',
    specs: [
      ['Product Type', 'Pulaski Forestry Axe'],
      ['Primary Use', 'Fire-Line Trenching & Root Chopping'],
      ['Blade Configuration', 'Combination Axe Blade & Grubbing Mattock'],
      ['Tool Head', 'Solid Forged High-Carbon Steel'],
      ['Field Application', 'Wildland Control Line Construction'],
      ['Operation', 'Heavy-Duty Manual Hand Tool']
    ],
    features: [
      'Single forged head with axe bit for chopping roots and logs',
      'Integrated mattock adze blade for trenching and digging mineral soil',
      'Essential tool for cutting containment lines down to bare dirt',
      'Mounted on durable hickory or reinforced fiberglass handle'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Pulaski Axe']
  },
  {
    slug: 'forestry-axe',
    name: 'Forestry Axe',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'TIMBER & CLEARING AXE',
    summary: 'Specialized cutting axe designed for limbing, felling small timber, and clearing brush while establishing wildfire containment lines and access trails.',
    specs: [
      ['Product Type', 'Single-Bit Forestry Axe'],
      ['Primary Use', 'Fuel Clearing, Chopping & Limbing'],
      ['Head Construction', 'Drop-Forged High-Strength Steel'],
      ['Handle Style', 'Curved Ergonomic Forestry Pattern'],
      ['Field Application', 'Wildland Handline Construction & Trail Clearing'],
      ['Operation', 'Manual Chopping Tool']
    ],
    features: [
      'Thin, razor-sharp forged bit profiled for efficient wood cutting',
      'Ergonomic curved handle balances swing power and control',
      'Designed for clearing downed timber, snags, and heavy fuel lines',
      'Essential cutting gear for wildland hand crews and forestry scouts'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Forestry Axe']
  },
  {
    slug: 'mcleod-tool',
    name: 'McLeod Tool',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'RAKE & HOE COMBINATION',
    summary: 'Two-in-one wildland firefighting tool featuring a wide scraping hoe blade on one side and heavy rake tines on the other for fire-line clearing.',
    specs: [
      ['Product Type', 'McLeod Fire Tool / Rake-Hoe'],
      ['Primary Use', 'Scraping Mineral Soil & Raking Litter'],
      ['Head Design', 'Combination Scraping Blade & Rake Tines'],
      ['Tool Material', 'Tempered High-Strength Steel'],
      ['Field Application', 'Wildland Firebreak Preparation'],
      ['Operation', 'Heavy-Duty Manual Hoeing & Raking']
    ],
    features: [
      'Hoe edge cuts duff, roots, and scrapes soil to mineral earth',
      'Sturdy rake tines gather combustible litter and loose pine needles',
      'Reversible single head for efficient dual-purpose line construction',
      'Fitted with long handle for maximum leverage and ergonomic stance'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'McLeod Tool']
  },
  {
    slug: 'fire-beater',
    name: 'Fire Beater',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIRE SUPPRESSION BEATER',
    summary: 'Handheld fire suppression tool with flexible metal or mesh tines designed for beating out grass fires and suppressing surface flames on wildland lines.',
    specs: [
      ['Product Type', 'Wildland Fire Beater'],
      ['Primary Use', 'Extinguishing Surface Flames & Grass Fires'],
      ['Head Construction', 'Flexible Beater Assembly'],
      ['Handle Type', 'Long Insulated Hand Grip'],
      ['Field Application', 'Wildland Perimeter Control & Mop-Up'],
      ['Operation', 'Manual Flame Beating']
    ],
    features: [
      'Flexible beating head dampens and extinguishes surface flames',
      'Effective for controlling perimeter grass fires and smoldering brush',
      'Long heat-insulated handle provides safe standoff from heat and smoke',
      'Lightweight manual design for continuous patrolling along firebreaks'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Beater']
  },
  {
    slug: 'drip-torch',
    name: 'Drip Torch',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'PRESCRIBED BURNING TORCH',
    summary: 'Liquid-fuel backfiring and burnout canister designed for igniting controlled prescribed burns and burning out fuel ahead of advancing wildfires.',
    specs: [
      ['Product Type', 'Forestry Drip Torch'],
      ['Primary Use', 'Backfiring & Controlled Burnout Operations'],
      ['Ignition Mechanism', 'Reversible Burner Wand with Fuel Loop'],
      ['Safety Features', 'Flashback Check Valve & Tank Breather'],
      ['Field Application', 'Prescribed Burning & Wildfire Containment'],
      ['Fuel Compatibility', 'Standard Diesel / Fuel Mix']
    ],
    features: [
      'Pours burning fuel droplets onto forest litter to initiate controlled fire',
      'Reversible burner spout with check valve prevents flashback into tank',
      'Heavy-duty fuel canister with secure seal and breather valve',
      'Standard equipment for burnout crews and prescribed fire operations'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Drip Torch']
  },
  {
    slug: 'fire-shelter',
    name: 'Fire Shelter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'EMERGENCY SAFETY SHELTER',
    summary: 'Emergency deployable personal survival shelter engineered to reflect radiant heat and trap breathable air during catastrophic wildfire entrapment situations.',
    specs: [
      ['Product Type', 'Emergency Wildland Fire Shelter'],
      ['Primary Use', 'Wildland Firefighter Entrapment Survival'],
      ['Protection Principle', 'Radiant Heat Reflection & Air Trapping'],
      ['Deployment Mechanism', 'Rapid-Pull Deployment Straps'],
      ['Field Application', 'Wildfire Personal Safety Equipment'],
      ['Carry Format', 'Folded Belt-Pack Deployment Case']
    ],
    features: [
      'Reflects radiant heat and insulates against convective gas exposure',
      'Rapid deployment pull-straps allow quick entry in emergency burnovers',
      'Compact folded format fits inside dedicated web gear belt pouches',
      'Hold-down floor flaps maintain ground seal using body weight'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Shelter']
  },
  {
    slug: 'fire-weather-meter',
    name: 'Fire Weather Meter',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'HANDHELD WEATHER METER',
    summary: 'Handheld environmental weather meter designed for monitoring relative humidity, wind speed, air temperature, and fuel moisture conditions on wildfire incidents.',
    specs: [
      ['Product Type', 'Fire Weather Environmental Meter'],
      ['Primary Use', 'Fire Behavior Weather Monitoring'],
      ['Monitored Parameters', 'Wind Speed, Temperature & Relative Humidity'],
      ['Calculated Indices', 'Dew Point & Fuel Moisture Potential'],
      ['Field Application', 'Incident Safety, Prescribed Burns & Behavior Forecasting'],
      ['Format', 'Rugged Handheld Environmental Instrument']
    ],
    features: [
      'Measures key fire weather indices including wind speed and relative humidity',
      'Calculates dew point and probability of ignition for behavior modeling',
      'Compact handheld sensor designed for line scouts and safety officers',
      'High-contrast backlit display for clear reading in smoke and sunlight'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Weather Meter']
  },
  {
    slug: 'weather-monitoring-kit',
    name: 'Weather Monitoring Kit',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIELD WEATHER KIT',
    summary: 'Comprehensive field weather kit equipped with psychrometer, wind gauge, and tables for evaluating localized microclimates and wildfire fire danger indices.',
    specs: [
      ['Product Type', 'Wildland Weather Monitoring Kit'],
      ['Primary Use', 'Localized Fire Danger & Microclimate Assessment'],
      ['Included Instruments', 'Sling Psychrometer, Wind Meter & Calculator'],
      ['Assessment Capability', 'Relative Humidity, Wet Bulb & Wind Velocity'],
      ['Field Application', 'Wildfire Field Command & Prescribed Burns'],
      ['Packaging', 'Durable Field Storage Case']
    ],
    features: [
      'Measures ambient temperature, wet bulb temperature, and wind speed',
      'Includes psychrometric tables for manual relative humidity determination',
      'Encased in a protective belt kit or durable canvas field pouch',
      'Essential gear for fire behavior analysts and division supervisors'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Weather Kit']
  },
  {
    slug: 'water-tank',
    name: 'Water Tank',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'MOBILE WATER STORAGE',
    summary: 'Portable self-supporting or rigid water storage tank designed for relay pumping, helicopter bucket dipping, and staging water reserves at wildland firelines.',
    specs: [
      ['Product Type', 'Portable Wildland Water Storage Tank'],
      ['Primary Use', 'Fireline Water Staging & Relay Pumping'],
      ['Structure Style', 'Self-Supporting / Collapsible Reservoir'],
      ['Plumbing Ports', 'Drafting & Discharge Flange Connections'],
      ['Field Application', 'Helicopter Dipping & Forestry Hose Support'],
      ['Transport Format', 'Compact Foldable Storage']
    ],
    features: [
      'Rapidly sets up on remote staging pads without rigid frame assembly',
      'Heavy-duty abrasion and puncture-resistant fabric lining',
      'Equipped with discharge fittings for drafting pumps and hose lines',
      'Folds compactly for vehicle transport or aerial drop deployment'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Water Tank']
  },
  {
    slug: 'fire-hose',
    name: 'Fire Hose',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'WILDLAND FIRE HOSE',
    summary: 'Lightweight single-jacket synthetic fire hose engineered for high-pressure water delivery across steep, rocky, and rough wildland firefighting terrain.',
    specs: [
      ['Product Type', 'Wildland Forestry Fire Hose'],
      ['Primary Use', 'Pressurized Water Delivery on Wildfires'],
      ['Jacket Construction', 'High-Tenacity Synthetic Single Jacket'],
      ['Coupling Compatibility', 'Standard Forestry Thread / Quarter-Turn Quick-Connect'],
      ['Field Application', 'Remote Hose Lays & Lateral Attack Lines'],
      ['Handling', 'Lightweight Flexible Pack-In Line']
    ],
    features: [
      'Engineered for lightweight pack-in and steep grade deployment',
      'High abrasion resistance against rocks, thorns, and brush',
      'Compatible with standard forestry threaded or quick-connect couplings',
      'Resistant to mildew, rot, and ozone degradation without drying'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Hose']
  },
  {
    slug: 'hose-reel',
    name: 'Hose Reel',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIELD HOSE REEL',
    summary: 'Heavy-duty field hose reel designed for rapid deployment, storage, and retrieval of wildland booster and delivery hose lines on fire attack vehicles.',
    specs: [
      ['Product Type', 'Wildland Fire Hose Reel'],
      ['Primary Use', 'Hose Deployment, Storage & Retrieval'],
      ['Drive Mechanism', 'Manual Hand Crank / Auxiliary Rewind'],
      ['Mounting Compatibility', 'Vehicle Beds, Trailers & Pump Skids'],
      ['Swivel Assembly', 'High-Pressure Continuous Flow Joint'],
      ['Field Application', 'Wildland Mobile Apparatus & Fire Skids']
    ],
    features: [
      'Smooth rewind mechanism for rapid retrieval of forestry hose',
      'High-pressure fluid swivel joint prevents kinking under active pressure',
      'Locking pin and drag brake prevent unintended spooling in rough transit',
      'Mounts onto fire utility vehicles, pump skids, and trailers'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Hose Reel']
  },
  {
    slug: 'portable-water-pump',
    name: 'Portable Water Pump',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'PORTABLE WATER PUMP',
    summary: 'Compact lightweight water pump designed for wildland crews to draft water from streams, ponds, or shallow springs to supply fireline sprinkler setups.',
    specs: [
      ['Product Type', 'Portable Forestry Water Drafting Pump'],
      ['Primary Use', 'Water Transfer & Remote Sprinkler Supply'],
      ['Suction Source', 'Rivers, Streams, Ponds & Shallow Wells'],
      ['Power Unit', 'Compact Spark-Arrested Gasoline Engine'],
      ['Field Application', 'Wildland Mop-Up & Water Supply Relays'],
      ['Portability', 'Hand-Carry Frame / Backpack Compatible']
    ],
    features: [
      'High-suction drafting capability from natural water sources',
      'Spark-arrested engine design for safe operation in dry forest zones',
      'Abrasion-resistant impeller handles sandy and sedimented natural water',
      'Equipped with carry handle or backpack harness for remote transport'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Portable Water Pump']
  },
  {
    slug: 'fire-extinguisher',
    name: 'Fire Extinguisher',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'EQUIPMENT EXTINGUISHER',
    summary: 'Rugged multi-purpose fire extinguisher designed for immediate first-response fire suppression on forestry machinery, harvesting equipment, and field base camps.',
    specs: [
      ['Product Type', 'Equipment Fire Extinguisher'],
      ['Primary Use', 'Machinery & Field Camp Emergency Suppression'],
      ['Target Hazards', 'Fuels, Timber Residues & Electrical Fires'],
      ['Mounting Interface', 'Heavy-Duty Shock-Resistant Vehicle Bracket'],
      ['Readiness Indicator', 'Visual Dial Pressure Gauge'],
      ['Field Application', 'Forestry Machinery, Utility Trucks & Base Camps']
    ],
    features: [
      'Fast discharge of extinguishing agent for rapid fuel knockdown',
      'Corrosion-resistant metal valve assembly and durable steel cylinder',
      'Integrated pressure gauge provides instant visual readiness verification',
      'Supplied with heavy-duty vehicle mounting bracket to resist vibrations'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Fire Extinguisher']
  },
  {
    slug: 'firefighting-backpack',
    name: 'Firefighting Backpack',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'WILDLAND PACK',
    summary: 'Ergonomic load-bearing field pack designed for wildland firefighters to carry fire shelters, hydration reservoirs, hand tools, and emergency line gear.',
    specs: [
      ['Product Type', 'Wildland Firefighter Line Pack'],
      ['Primary Use', 'Gear, Water & Fire Shelter Transport'],
      ['Dedicated Pouches', 'Emergency Fire Shelter & Hydration Reservoir'],
      ['Harness System', 'Padded Ergonomic Hip & Shoulder Suspension'],
      ['Fabric Durability', 'Heat-Resistant Ballistic Textile'],
      ['Field Application', 'Wildland Firefighting Line Operations']
    ],
    features: [
      'Dedicated quick-access deployment pouch for emergency fire shelter',
      'Ergonomic hip belt transfers heavy pack weight away from shoulders',
      'Integrated sleeves for hydration bladders and fireline accessories',
      'Constructed with heat-resistant, high-abrasion ballistic fabric'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'Firefighting Backpack']
  },
  {
    slug: 'personal-protective-equipment',
    name: 'Personal Protective Equipment',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'WILDLAND PPE',
    summary: 'Comprehensive wildland firefighting protective ensemble designed to protect crews from radiant heat, falling embers, sharp debris, and rugged terrain hazards.',
    specs: [
      ['Product Type', 'Wildland Firefighter PPE Ensemble'],
      ['Primary Use', 'Thermal & Physical Protection on Firelines'],
      ['Core Components', 'FR Apparel, Forestry Helmet, Goggles & Gloves'],
      ['Thermal Defense', 'Flame-Resistant Construction'],
      ['Field Application', 'Wildfire Suppression & Prescribed Burn Operations'],
      ['Design Focus', 'Heat Protection & Field Breathability']
    ],
    features: [
      'Flame-resistant protective apparel designed for high heat and breathability',
      'High-impact forestry helmet shields against overhead branches and snags',
      'Heat-resistant eye protection goggles and neck shroud for ember defense',
      'Heavy-duty leather gloves engineered for tool handling and heat protection'
    ],
    page: 1,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Forest Fire-Fighting Products', 'PPE']
  },

  // =========================================================================
  // 4. WILDLIFE MONITORING & SURVEILLANCE (Subcategory ID: wildlife-monitoring-surveillance)
  // =========================================================================

  // --- Camera Traps (Generic Families) ---
  {
    slug: 'ir-camera-trap',
    name: 'IR Camera Trap',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'INFRARED TRAIL CAMERA',
    summary: 'Infrared camera trap designed for non-invasive day and night wildlife monitoring and covert perimeter surveillance.',
    specs: [
      ['Product Type', 'Infrared Camera Trap'],
      ['Primary Use', 'Non-Invasive Wildlife Monitoring'],
      ['Flash Type', 'Infrared (IR) Illumination'],
      ['Application', 'Fauna Surveys & Forest Surveillance'],
      ['Monitoring Method', 'Motion-Activated Passive Infrared (PIR)'],
      ['Field Category', 'Wildlife Monitoring & Surveillance']
    ],
    features: [
      'Motion-activated infrared imaging for low-disturbance nocturnal recording',
      'Designed for wildlife population census and ecological research',
      'Weatherproof field enclosure engineered for remote outdoor deployments',
      'Supports daytime color capture and covert nighttime monochrome capture'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Camera Traps', 'Infrared Observation']
  },
  {
    slug: 'white-flash-camera-trap',
    name: 'White Flash Camera Trap',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'COLOR FLASH TRAIL CAMERA',
    summary: 'Color flash camera trap designed to capture high-clarity full-color wildlife imagery by day and night for species identification.',
    specs: [
      ['Product Type', 'White Flash Camera Trap'],
      ['Primary Use', 'Full-Color Night Wildlife Photography'],
      ['Flash Type', 'White Xenon / LED Flash'],
      ['Application', 'Species Identification & Coat Pattern Analysis'],
      ['Monitoring Method', 'Motion-Activated Sensor'],
      ['Field Category', 'Wildlife Monitoring & Surveillance']
    ],
    features: [
      'Full-color nocturnal photographic capture for definitive specimen identification',
      'Essential for individual animal marking and coat pattern identification studies',
      'Automatic daylight and nocturnal switching mechanism',
      'Durable field-deployable housing for long-term ecological monitoring'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Camera Traps']
  },
  {
    slug: 'gsm-camera-trap',
    name: 'GSM Camera Trap',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'CELLULAR TRAIL CAMERA',
    summary: 'Cellular-enabled camera trap designed to transmit wildlife and surveillance images directly from the field over mobile networks.',
    specs: [
      ['Product Type', 'Cellular / GSM Camera Trap'],
      ['Primary Use', 'Real-Time Remote Field Monitoring'],
      ['Data Transmission', 'Cellular Wireless Network (SIM-based)'],
      ['Application', 'Anti-Poaching Patrol & Remote Habitat Surveillance'],
      ['Monitoring Method', 'Motion-Triggered Remote Alert & Capture'],
      ['Field Category', 'Wildlife Monitoring & Surveillance']
    ],
    features: [
      'Remote image transmission to mobile devices and email servers',
      'Ideal for anti-poaching operations and real-time animal activity monitoring',
      'Remote configuration and status reporting capabilities',
      'Rugged weather-sealed construction for harsh field environments'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Camera Traps', 'Wildlife Tracking']
  },
  {
    slug: 'solar-camera-trap',
    name: 'Solar Camera Trap',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'SOLAR-POWERED TRAIL CAMERA',
    summary: 'Self-sustaining camera trap equipped with integrated solar charging for extended remote deployments without frequent battery servicing.',
    specs: [
      ['Product Type', 'Solar-Powered Camera Trap'],
      ['Primary Use', 'Extended-Duration Autonomous Monitoring'],
      ['Power Solution', 'Integrated Solar Panel & Rechargeable Power System'],
      ['Application', 'Long-Term Ecological Studies & Remote Field Research'],
      ['Monitoring Method', 'Continuous Motion-Activated Surveillance'],
      ['Field Category', 'Wildlife Monitoring & Surveillance']
    ],
    features: [
      'Continuous autonomous operation enabled by solar power harvesting',
      'Minimizes human disturbance in sensitive habitats by reducing battery-check visits',
      'All-weather field construction engineered for year-round remote deployment',
      'Automatic power management for uninterrupted wildlife recording'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Camera Traps']
  },

  // --- Binoculars (Official Vortex Optics) ---
  {
    slug: 'vortex-triumph-hd-10x42',
    name: 'Triumph® HD 10x42',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-triumph-hd-10x42',
    gallery: ['vortex-triumph-hd-10x42'],
    label: 'HD FIELD BINOCULARS',
    summary: 'Entry-level high-definition observation binoculars featuring select glass elements, fully multi-coated lenses, and an ergonomic True Open Hinge design.',
    specs: [
      ['Magnification', '10x'],
      ['Objective Lens Diameter', '42 mm'],
      ['Linear Field of View', '334 ft / 1000 yds (6.4°)'],
      ['Eye Relief', '17.0 mm'],
      ['Close Focus', '15.3 ft'],
      ['Interpupillary Distance', '55 mm – 75 mm'],
      ['Weight', '22.9 oz (649 g)'],
      ['Environmental', 'Waterproof, Fogproof (Nitrogen gas purged), Shockproof']
    ],
    features: [
      'HD Optical System with select glass elements for resolution and color fidelity',
      'Fully multi-coated lenses with anti-reflective coatings on all air-to-glass surfaces',
      'True Open Hinge roof prism design for superior ergonomics and reduced fatigue',
      'Rubber armor provides a secure non-slip grip and durable external protection',
      'Includes GlassPak binocular harness, comfort neck strap, and protective covers'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Binoculars', 'Optics & Observation']
  },
  {
    slug: 'vortex-crossfire-hd-10x50',
    name: 'Crossfire® HD 10x50',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-crossfire-hd-10x50',
    gallery: ['vortex-crossfire-hd-10x50'],
    label: 'HD OBSERVATION BINOCULARS',
    summary: 'Full-sized 50 mm objective binoculars engineered for outstanding low-light observation, high resolution, and wide-angle wildlife reconnaissance.',
    specs: [
      ['Magnification', '10x'],
      ['Objective Lens Diameter', '50 mm'],
      ['Linear Field of View', '320 ft / 1000 yds (6.1°)'],
      ['Eye Relief', '17.0 mm'],
      ['Close Focus', '6.0 ft'],
      ['Interpupillary Distance', '60 mm – 76 mm'],
      ['Weight', '30.4 oz (862 g)'],
      ['Environmental', 'Waterproof, Fogproof (Nitrogen gas purged), Shockproof']
    ],
    features: [
      'Large 50 mm objective lenses collect maximum light for dawn and dusk observation',
      'HD Optical System optimized for edge-to-edge sharpness and reduced chromatic aberration',
      'Fully multi-coated optical surfaces for elevated light transmission',
      'True Open Hinge body with non-slip rubber armor and tripod adapter compatibility',
      'Includes GlassPak binocular harness case, rainguard, and tethered lens caps'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Binoculars', 'Optics & Observation']
  },
  {
    slug: 'vortex-diamondback-hd-10x50',
    name: 'Diamondback® HD 10x50',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-diamondback-hd-10x50',
    gallery: ['vortex-diamondback-hd-10x50'],
    label: 'HD HUNTING & OBSERVATION BINOCULARS',
    summary: 'High-performance field binoculars featuring dielectric prism coatings, ArmorTek scratch resistance, and an argon-purged chassis for demanding field conditions.',
    specs: [
      ['Magnification', '10x'],
      ['Objective Lens Diameter', '50 mm'],
      ['Linear Field of View', '315 ft / 1000 yds (6.0°)'],
      ['Eye Relief', '17.0 mm'],
      ['Close Focus', '6.0 ft'],
      ['Interpupillary Distance', '60 mm – 75 mm'],
      ['Weight', '29.6 oz (839 g)'],
      ['Environmental', 'Waterproof & Fogproof (Argon gas purged), Shockproof']
    ],
    features: [
      'HD Optical System with dielectric multilayer prism coatings for high contrast and brightness',
      'ArmorTek ultra-hard exterior coating protects lenses from scratches, oil, and dirt',
      'Phase-corrected roof prisms for enhanced resolution and true color reproduction',
      'Argon purged and O-ring sealed for dependable fogproof and waterproof performance',
      'Includes GlassPak binocular chest harness for hands-free field carry'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Binoculars', 'Optics & Observation']
  },

  // --- Spotting Scopes (Official Vortex Optics) ---
  {
    slug: 'vortex-diamondback-hd-20-60x85',
    name: 'Diamondback® HD 20-60x85',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-diamondback-hd-20-60x85',
    gallery: ['vortex-diamondback-hd-20-60x85'],
    label: 'HD SPOTTING SCOPE',
    summary: 'Long-range spotting scope equipped with an 85 mm objective lens and smooth helical focus for high-definition wildlife observation across distant horizons.',
    specs: [
      ['Magnification', '20-60x'],
      ['Objective Lens Diameter', '85 mm'],
      ['Linear Field of View', '108 ft – 60 ft / 1000 yds (2.1° – 1.1°)'],
      ['Eye Relief', '18.3 mm – 20.3 mm'],
      ['Close Focus', '24.6 ft'],
      ['Length', '16.0 in (Angled)'],
      ['Weight', '60.9 oz (1,726 g)'],
      ['Mounting', 'Arca-Swiss compatible tripod foot & 1/4"-20 socket'],
      ['Environmental', 'Waterproof & Fogproof (Argon gas purged), Shockproof']
    ],
    features: [
      'Large 85 mm objective gathers exceptional light in dawn and dusk conditions',
      'Helical focus wheel delivers smooth snag-free focusing in field situations',
      'Built-in Arca-Swiss compatible tripod foot mounts directly without extra adapter plates',
      'ArmorTek coating protects exterior lenses from scratches, dirt, and water droplets',
      'Argon gas purged and O-ring sealed for extreme weatherproof reliability'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Spotting Scopes', 'Optics & Observation']
  },
  {
    slug: 'vortex-razor-hd-27-60x85',
    name: 'Razor® HD 27-60x85',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-razor-hd-27-60x85',
    gallery: ['vortex-razor-hd-27-60x85'],
    label: 'PREMIUM HD SPOTTING SCOPE',
    summary: 'Flagship spotting scope featuring an apochromatic APO optical system, index-matched lenses, and XR Plus coatings for edge-to-edge optical resolution.',
    specs: [
      ['Magnification', '27-60x'],
      ['Objective Lens Diameter', '85 mm'],
      ['Linear Field of View', '117 ft – 68 ft / 1000 yds (2.2° – 1.3°)'],
      ['Eye Relief', '16.7 mm – 17.0 mm'],
      ['Close Focus', '16.4 ft'],
      ['Length', '15.5 in'],
      ['Weight', '65.6 oz (1,860 g)'],
      ['Optical System', 'APO Apochromatic with HD Glass'],
      ['Environmental', 'Waterproof & Fogproof (Argon gas purged), ArmorTek']
    ],
    features: [
      'APO Apochromatic System corrects chromatic aberration across the visual spectrum',
      'XR Plus fully multi-coated lenses provide maximum light transmission in low light',
      'Dielectric prism coatings provide bright, clear, color-accurate viewing',
      'Directly mounts to Arca-Swiss tripod heads with integrated foot',
      'Magnesium alloy chassis with rugged protective rubber armor'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Spotting Scopes', 'Optics & Observation']
  },

  // --- Monocular (Official Vortex Optics) ---
  {
    slug: 'vortex-solo-8x36',
    name: 'Solo® 8x36',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-solo-8x36',
    gallery: ['vortex-solo-8x36'],
    label: 'COMPACT FIELD MONOCULAR',
    summary: 'Compact 8x36 monocular offering bright views, full weatherproofing, and an integrated utility clip for agile field scouting and wildlife observation.',
    specs: [
      ['Magnification', '8x'],
      ['Objective Lens Diameter', '36 mm'],
      ['Linear Field of View', '393 ft / 1000 yds (7.5°)'],
      ['Eye Relief', '18.0 mm'],
      ['Close Focus', '16.4 ft'],
      ['Length', '4.9 in (12.4 cm)'],
      ['Weight', '9.7 oz (275 g)'],
      ['Optical System', 'Super-Definition (SD) Optical System'],
      ['Environmental', 'Waterproof & Fogproof (Nitrogen gas purged)']
    ],
    features: [
      'Fully multi-coated lenses deliver bright images and reduced glare',
      'Integrated multi-position utility clip attaches securely to belts, webbing, or vest',
      'Generous 18.0 mm eye relief with adjustable twist-up eyecup for eyeglass wearers',
      'Rubber armor casing delivers a non-slip grip and exterior impact protection',
      'Nitrogen purged and O-ring sealed for dependable waterproof performance'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Monoculars', 'Optics & Observation']
  },

  // --- Laser Rangefinders (Official Vortex Optics) ---
  {
    slug: 'vortex-razor-hd-4000-gb',
    name: 'Razor® HD 4000 GB',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-razor-hd-4000-gb',
    gallery: ['vortex-razor-hd-4000-gb'],
    label: 'BALLISTIC LASER RANGEFINDER',
    summary: 'Extreme-distance 4,000-yard laser rangefinder with an integrated GeoBallistics solver, on-board environmental sensors, and Bluetooth device pairing.',
    specs: [
      ['Max Range (Reflective)', 'Up to 4,000 yards'],
      ['Range (Tree)', 'Up to 2,500 yards'],
      ['Range (Deer)', 'Up to 2,200 yards'],
      ['Magnification', '7x'],
      ['Objective Lens Diameter', '25 mm'],
      ['Linear Field of View', '341 ft / 1000 yds (6.5°)'],
      ['Accuracy', '±0.5 yds (<200 yds) / ±1 yd (200–1000 yds) / ±2 yds (>1000 yds)'],
      ['Ballistic Engine', 'On-board GeoBallistics® Solver'],
      ['Sensors', 'Built-in Temperature, Pressure, and Humidity Sensors'],
      ['Weight', '10.1 oz (286 g)']
    ],
    features: [
      'On-board GeoBallistics solver computes real-time wind and elevation corrections',
      'Internal environmental sensors monitor temperature, barometric pressure, and humidity',
      'Bluetooth connectivity synchronizes with the GeoBallistics app and Kestrel wind meters',
      'Four targeting modes: Normal, First, Last, and Extended Laser Range (ELR)',
      'Rugged magnesium chassis with rubber armor and waterproof construction'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Laser Rangefinders', 'Optics & Observation']
  },
  {
    slug: 'vortex-triumph-hd-850',
    name: 'Triumph® HD 850',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-triumph-hd-850',
    gallery: ['vortex-triumph-hd-850'],
    label: 'COMPACT LASER RANGEFINDER',
    summary: 'Lightweight 850-yard laser rangefinder featuring HD glass, angle-compensated Horizontal Component Distance mode, and rapid scan ranging.',
    specs: [
      ['Max Range (Reflective)', 'Up to 850 yards'],
      ['Range (Tree)', 'Up to 500 yards'],
      ['Range (Deer)', 'Up to 350 yards'],
      ['Magnification', '5x'],
      ['Objective Lens Diameter', '21 mm'],
      ['Accuracy', '±0.5 yds at 100 yards'],
      ['Ranging Modes', 'HCD (Angle-Compensated) & LOS (Line of Sight)'],
      ['Target Modes', 'Normal, First, Last'],
      ['Weight', '4.6 oz (130 g)']
    ],
    features: [
      'Horizontal Component Distance (HCD) mode provides true angle-compensated distance',
      'Scan feature provides continuous distance readings while panning across terrain',
      'First and Last targeting modes isolate foreground targets or animals in brush',
      'HD Optical System with fully multi-coated lenses for crisp target acquisition',
      'Ultra-lightweight 4.6 oz pocket-sized chassis with waterproof protection'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Laser Rangefinders', 'Optics & Observation']
  },
  {
    slug: 'vortex-diamondback-hd-2000',
    name: 'Diamondback® HD 2000',
    brand: 'Vortex Optics',
    category: 'optics',
    image: 'vortex-diamondback-hd-2000',
    gallery: ['vortex-diamondback-hd-2000'],
    label: 'LONG-RANGE LASER RANGEFINDER',
    summary: 'Versatile 2,000-yard laser rangefinder with red OLED display, 7x magnification, and ArmorTek lens coatings for fast distance acquisition.',
    specs: [
      ['Max Range (Reflective)', 'Up to 2,000 yards'],
      ['Range (Tree)', 'Up to 1,800 yards'],
      ['Range (Deer)', 'Up to 1,400 yards'],
      ['Magnification', '7x'],
      ['Objective Lens Diameter', '24 mm'],
      ['Linear Field of View', '335 ft / 1000 yds (6.4°)'],
      ['Display Type', 'High-contrast Red OLED'],
      ['Accuracy', '±1 yd at 100 yards'],
      ['Weight', '7.6 oz (215 g)']
    ],
    features: [
      'Rapid laser engine accurately ranges trees out to 1,800 yards and reflective targets to 2,000 yards',
      'Red OLED display maintains clear visibility in low-light forest and field scenarios',
      'HCD angle-compensated mode and Line of Sight (LOS) mode with continuous scan',
      'ArmorTek ultra-hard lens coating resists scratches, rain, and field grime',
      'Waterproof and shockproof construction with soft-touch rubber armor'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'optics'],
    tags: ['Laser Rangefinders', 'Optics & Observation']
  },

  // --- Thermal & Night Observation Products ---
  {
    slug: 'seek-thermal-camera',
    name: 'Seek Thermal Camera',
    brand: 'Seek Thermal',
    category: 'thermal',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'THERMAL IMAGING CAMERA',
    summary: 'Handheld thermal imaging product family engineered for heat signature detection, wildlife tracking, search and rescue, and forest surveillance.',
    specs: [
      ['Product Family', 'Seek Thermal Handheld Imaging Series'],
      ['Manufacturer', 'Seek Thermal'],
      ['Primary Use', 'Thermal Observation & Heat Signature Detection'],
      ['Application', 'Wildlife Surveys, Forest Patrol & Search and Rescue'],
      ['Sensor Type', 'Long-Wave Infrared (LWIR) Thermal Sensor'],
      ['Field Category', 'Thermal & Night Observation / Forest Surveillance']
    ],
    features: [
      'Detects animal and human thermal signatures in complete darkness, dense brush, and foliage',
      'Compact handheld form factor suitable for mobile field patrol and scouting',
      'Provides real-time thermal contrast for ecological research and security monitoring',
      'Project-specific configuration supported based on operational range requirements'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'thermal'],
    tags: ['Thermal & Night Observation', 'Thermal Cameras', 'Infrared Observation']
  },
  {
    slug: 'hikmicro-habrok-multi-spectrum-binocular',
    name: 'HIKMICRO HABROK Multi-Spectrum Binocular',
    brand: 'HIKMICRO',
    category: 'thermal',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'MULTI-SPECTRUM BINOCULARS',
    summary: 'All-in-one multi-spectrum binocular series integrating thermal imaging, digital day and night cameras, and laser rangefinding for 24/7 wildlife observation.',
    specs: [
      ['Product Family', 'HIKMICRO HABROK Multi-Spectrum Series'],
      ['Manufacturer', 'HIKMICRO'],
      ['Imaging Technology', 'Multi-Spectrum (Thermal + Digital Daytime & Night Vision)'],
      ['Primary Use', '24/7 Wildlife Observation & Field Surveillance'],
      ['Integrated Tools', 'Thermal Sensor, Optical Camera & Laser Rangefinder'],
      ['Application', 'Wildlife Census, Anti-Poaching Patrol & Habitat Research']
    ],
    features: [
      'Combines high-sensitivity thermal detector with high-resolution digital optical camera',
      'Integrated laser rangefinder delivers rapid distance measurement to observed subjects',
      'Traditional binocular form factor delivers comfortable two-eye viewing over long vigils',
      'Built-in infrared illuminator and smart digital processing for total darkness monitoring',
      'Supports HIKMICRO Sight app for field recording, streaming, and firmware updates'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'thermal', 'optics'],
    tags: ['Thermal & Night Observation', 'Thermal Binoculars', 'Infrared Observation', 'Binoculars']
  },

  // --- Bioacoustics & Acoustic Monitoring Products ---
  {
    slug: 'song-meter-micro-2',
    name: 'Song Meter Micro 2',
    brand: 'Wildlife Acoustics',
    category: 'forestry',
    image: 'song-meter-micro-2',
    gallery: ['song-meter-micro-2'],
    label: 'AUTONOMOUS ACOUSTIC RECORDER',
    summary: 'Compact, weatherproof passive acoustic recording unit designed for autonomous long-term audio monitoring of birds, amphibians, and terrestrial wildlife.',
    specs: [
      ['Microphone', 'Built-in omnidirectional acoustic microphone'],
      ['Audio Format', 'Single-channel 16-bit PCM (.WAV)'],
      ['Sample Rates', '8, 12, 16, 22.05, 24, 32, 44.1, 48, 96, 192, 256 kHz'],
      ['Battery Life', 'Up to 280 hours recording (4 AA alkaline batteries)'],
      ['Storage Capacity', '1 microSD card slot (supports up to 2 TB)'],
      ['Weather Rating', 'IP67 waterproof and weatherproof enclosure'],
      ['Dimensions', '4.0 in × 2.8 in × 1.4 in (102 mm × 71 mm × 35 mm)'],
      ['Weight', '0.26 lb / 118 g (without batteries)'],
      ['Configuration', 'Wireless Bluetooth via Song Meter Configurator App (iOS/Android)']
    ],
    features: [
      'Autonomous scheduled recording for bioacoustic surveys of birds, frogs, and mammals',
      'Rugged IP67 weatherproof polycarbonate housing requires no secondary protective case',
      'Wireless Bluetooth configuration via free iOS and Android mobile applications',
      'Up to 280 hours of recording time powered by four standard AA batteries',
      'Full software compatibility with Wildlife Acoustics Kaleidoscope Pro analysis suite'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics & Acoustic Monitoring', 'Autonomous Recording Units', 'Acoustic Recorders']
  },
  {
    slug: 'wildlife-microphone',
    name: 'Wildlife Microphone',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'ACOUSTIC FIELD MICROPHONE',
    summary: 'Field-grade directional and omnidirectional microphone designed for recording wildlife vocalizations and environmental soundscapes.',
    specs: [
      ['Product Type', 'Wildlife Field Microphone'],
      ['Primary Use', 'Bioacoustic Field Recording & Vocalization Capture'],
      ['Application', 'Birdsong, Mammal & Amphibian Acoustic Monitoring'],
      ['Frequency Response', 'Audible Spectrum Sound Capture'],
      ['Field Category', 'Bioacoustics & Acoustic Monitoring']
    ],
    features: [
      'Low-noise acoustic element tailored for capturing faint animal calls in the wild',
      'Weather-resistant outdoor construction for wet field and canopy environments',
      'Compatible with standard field recorders and autonomous recording units',
      'Includes wind-noise dampening foam shield for blustery outdoor conditions'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics & Acoustic Monitoring', 'Acoustic Recorders']
  },
  {
    slug: 'ultrasonic-wildlife-detector',
    name: 'Ultrasonic Wildlife Detector',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'ULTRASONIC FIELD DETECTOR',
    summary: 'Broadband ultrasonic detection system designed to monitor, detect, and record high-frequency echolocation calls and insect bioacoustics.',
    specs: [
      ['Product Type', 'Ultrasonic Wildlife Detector'],
      ['Primary Use', 'Ultrasonic Echolocation & Insect Bioacoustics'],
      ['Detection Range', 'Ultrasonic Acoustic Frequencies'],
      ['Application', 'Chiroptera Surveys & High-Frequency Wildlife Research'],
      ['Field Category', 'Bioacoustics & Acoustic Monitoring']
    ],
    features: [
      'Broadband frequency detection engineered for high-frequency animal vocalizations',
      'Real-time frequency division and heterodyne listening capabilities',
      'Field-portable design suitable for nighttime transects and stationary logging',
      'Output formats compatible with standard bioacoustic sound analysis software'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics & Acoustic Monitoring', 'Autonomous Recording Units', 'Acoustic Recorders']
  },
  {
    slug: 'bat-detector',
    name: 'Bat Detector',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIELD BAT DETECTOR',
    summary: 'Handheld and static bat detection instrument for identifying bat species by converting inaudible ultrasonic echolocation calls into audible sound.',
    specs: [
      ['Product Type', 'Electronic Bat Detector'],
      ['Primary Use', 'Bat Echolocation Monitoring & Species Identification'],
      ['Audio Conversion', 'Heterodyne / Frequency Division Audio Output'],
      ['Application', 'Nocturnal Biodiversity Surveys & Forest Roost Studies'],
      ['Field Category', 'Bioacoustics & Acoustic Monitoring']
    ],
    features: [
      'Converts high-frequency bat echolocation pulses into audible acoustic signals',
      'Adjustable tuning frequency for discriminating between sympatric bat species',
      'Headphone output and auxiliary recording jack for simultaneous audio logging',
      'Compact lightweight format designed for nighttime forest bat inventory'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics & Acoustic Monitoring', 'Acoustic Recorders']
  },
  {
    slug: 'acoustic-sensor',
    name: 'Acoustic Sensor',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'FIELD ACOUSTIC SENSOR',
    summary: 'Continuous acoustic sensing node engineered for habitat noise monitoring, gun-shot detection, chainsaw monitoring, and forest health auditing.',
    specs: [
      ['Product Type', 'Autonomous Acoustic Sensing Node'],
      ['Primary Use', 'Eco-Acoustic Monitoring & Threat Detection'],
      ['Application', 'Chainsaw / Gunshot Detection & Soundscape Analysis'],
      ['Monitoring Mode', 'Continuous Environmental Acoustic Sensing'],
      ['Field Category', 'Bioacoustics & Acoustic Monitoring']
    ],
    features: [
      'Continuous acoustic environmental sampling for passive ecological monitoring',
      'Capable of detecting anomalous forest noises including illegal logging and gunshots',
      'Low-power consumption engineered for multi-week field deployment',
      'Weather-sealed enclosure resistant to humidity, rain, and temperature swings'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics & Acoustic Monitoring', 'Autonomous Recording Units']
  },

  // --- Wildlife Tracking (GPS Collars) ---
  {
    slug: 'gps-wildlife-tracking-collar',
    name: 'GPS Wildlife Tracking Collar',
    brand: 'AFFORDA',
    category: 'forestry',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'WILDLIFE TELEMETRY COLLAR',
    summary: 'Animal-borne GPS telemetry collar designed for spatial tracking, home-range mapping, and movement ecology research in terrestrial wildlife.',
    specs: [
      ['Product Type', 'GPS Wildlife Telemetry Collar'],
      ['Primary Use', 'Animal Tracking & Movement Ecology Research'],
      ['Positioning Method', 'Satellite-Based GPS Positioning'],
      ['Application', 'Terrestrial Mammal Migration & Territory Mapping'],
      ['Field Category', 'Wildlife Tracking & Telemetry']
    ],
    features: [
      'Satellite-based position logging for spatial movement and home-range analysis',
      'Durable weather-resistant collar strap designed for wild animal deployment',
      'Activity sensor for behavioral state recording and mortality monitoring',
      'Configured to operational study specifications based on target species requirements'
    ],
    page: 1,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'navigation'],
    tags: ['Wildlife Tracking', 'GPS Wildlife Collars']
  },

  // =========================================================================
  // GEOLOGICAL PRODUCTS CATALOGUE
  // =========================================================================

  // --- 1. Geological Compasses & Clinometers ---
  {
    slug: 'brunton-geo-pocket-transit-f-5010',
    name: 'Geo Pocket Transit F-5010',
    brand: 'Brunton',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'GEOLOGICAL POCKET TRANSIT',
    summary: 'Milled aluminum geological pocket transit engineered with a fast NdFeB rare-earth needle, hinge clinometer, and flat bottom for low-angle strike and dip measurements.',
    specs: [
      ['Model', 'Geo Pocket Transit F-5010 (0–360° Azimuth)'],
      ['Body Construction', 'CNC-machined aluminum body'],
      ['Hinge Inclinometer', 'Hinge inclinometer allowing simultaneous dip & strike measurement'],
      ['Azimuth Accuracy', '±0.5° with 1° graduations (0–360° azimuth scale)'],
      ['Vertical Accuracy', '±0.5° with 1° graduations'],
      ['Declination Adjustment', 'Tool-free magnetic declination adjustable ±180°'],
      ['Magnetic System', 'Rare-earth NdFeB cast magnet on sapphire jewel bearing'],
      ['Needle Dampening', 'Induction damped needle for rapid settling'],
      ['Environmental', 'Waterproof sealed construction'],
      ['Mounting', 'Tripod mountable with standard ball-and-socket mount']
    ],
    features: [
      'Solid CNC-machined billet aluminum body for maximum field durability',
      'Hinge inclinometer allows simultaneous trend and plunge or dip and strike measurement',
      'Precision NdFeB rare-earth magnetic needle on sapphire jewel suspension',
      'Induction dampening for rapid needle settling in demanding conditions',
      'Tool-free declination adjustment with full ±180° range',
      'Waterproof sealed construction protects optics and movement from moisture',
      'Flat bottom with non-slip silicone foot facilitates low-angle strike and dip readings',
      'Standard tripod mount threading compatible with transit ball-and-socket mounts'
    ],
    page: 31,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Compasses / Pocket Transits']
  },
  {
    slug: 'brunton-truarc-15',
    name: 'TruArc™ 15 Compass',
    brand: 'Brunton',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'MIRRORED BASEPLATE COMPASS',
    summary: 'Professional mirrored baseplate compass featuring TruArc™ Global Needle, dual clinometers for slope and height estimation, and tool-free declination adjustment.',
    specs: [
      ['Model', 'TruArc™ 15 (F-TRUARC15)'],
      ['Sighting System', 'Precision sighting mirror with sighting notch'],
      ['Needle System', 'TruArc™ Global Needle (works worldwide without rebalancing)'],
      ['Declination Adjustment', 'Tool-less declination adjustment (±180°)'],
      ['Clinometer', 'Integrated clinometer for dip and slope measurement'],
      ['Resolution', '1° azimuth resolution with magnified readout'],
      ['Baseplate Scales', 'Baseplate with imperial and metric scales'],
      ['Low-Light Readout', 'Luminous markings on dial and needle']
    ],
    features: [
      'TruArc™ Global Needle operates accurately across northern and southern hemispheres',
      'Integrated sighting mirror and notch for precise bearing acquisition',
      'Tool-less magnetic declination adjustment allows fast true north alignment',
      'Dual clinometer system for geological dip angles and slope height measurement',
      'Magnified readout on 1° resolution azimuth dial for clear field sightings',
      'Transparent baseplate marked with imperial and metric map scales',
      'Luminous markings for low-light observation and nighttime navigation'
    ],
    page: 31,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-compasses'],
    categoryIds: ['geology', 'navigation', 'mining'],
    tags: ['Geological Compasses / Pocket Transits', 'Field Compasses / Baseplate Compasses']
  },
  {
    slug: 'brunton-truarc-20',
    name: 'TruArc™ 20 Compass',
    brand: 'Brunton',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'ADVANCED SIGHTING COMPASS',
    summary: 'Advanced mirrored sighting compass featuring TruArc™ Global Needle, dual-angle clinometer, sighting mirror, and protective rubber foot storing interchangeable reference cards.',
    specs: [
      ['Model', 'TruArc™ 20 (F-TRUARC20)'],
      ['Compass Type', 'Full-featured professional baseplate compass'],
      ['Sighting System', 'Sighting mirror with sighting line and notch'],
      ['Needle System', 'TruArc™ Global Needle system (balanced for worldwide use)'],
      ['Declination Adjustment', 'Tool-less declination adjustment'],
      ['Clinometer', 'Clinometer for dip and slope measurement'],
      ['Leveling', 'Integrated bubble level for precise planar orientation'],
      ['Readout & Optics', 'Map magnifier and 1° azimuth resolution'],
      ['Low-Light Navigation', 'Luminous dial and bearing markings']
    ],
    features: [
      'Full-featured professional baseplate compass with global needle system',
      'Sighting mirror with V-notch for taking accurate field bearings',
      'Tool-less declination adjustment ensures rapid synchronization with true north',
      'Integrated clinometer allows fast measurement of rock dip and terrain slopes',
      'Built-in bubble level guarantees horizontal alignment during readings',
      'Map magnifier and 1° resolution dial for fine topographic cartography',
      'Protective cover and rubber foot with storage for field reference cards and UTM romer scales',
      'High-contrast luminous markings for reliable reading in low-light conditions'
    ],
    page: 31,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-compasses'],
    categoryIds: ['geology', 'navigation', 'mining'],
    tags: ['Geological Compasses / Pocket Transits', 'Field Compasses / Baseplate Compasses']
  },
  {
    slug: 'brunton-truarc-5',
    name: 'TruArc™ 5 Compass',
    brand: 'Brunton',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'BASEPLATE MAPPING COMPASS',
    summary: 'Oversized baseplate mapping compass with global needle balance, tool-free declination adjustment, and an integrated map magnifier for detailed cartographic navigation.',
    specs: [
      ['Model', 'TruArc™ 5 (F-TRUARC5)'],
      ['Compass Type', 'Baseplate mapping compass'],
      ['Needle System', 'TruArc™ Global Needle system (tilts up to 20° for worldwide balance)'],
      ['Declination Adjustment', 'Tool-less declination adjustment'],
      ['Resolution', '2° azimuth resolution'],
      ['Map Scales', 'Metric and imperial map scales with inch/mm rules'],
      ['Included Accessories', 'Lanyard included with quick-release clip']
    ],
    features: [
      'Baseplate mapping compass engineered for rapid orienteering and field geology',
      'TruArc™ Global Needle system operates worldwide without needle drag or rebalancing',
      'Tool-less declination adjustment allows fast switching between magnetic and true north',
      '2° resolution dial with high-contrast markings for straightforward bearing transfer',
      'Metric and imperial map scales with inch/mm rulers for precise map navigation',
      'Transparent oversized baseplate with built-in map magnifier for contour reading',
      'Durable lanyard included for secure neck or wrist carry during traversing'
    ],
    page: 31,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-compasses'],
    categoryIds: ['geology', 'navigation', 'mining'],
    tags: ['Geological Compasses / Pocket Transits', 'Field Compasses / Baseplate Compasses']
  },
  {
    slug: 'breithaupt-3031-gekom',
    name: '3031 GEKOM N Pro Basic Stratum Compass',
    brand: 'Breithaupt Kassel',
    category: 'geology',
    image: 'breithaupt-3031-gekom',
    gallery: ['breithaupt-3031-gekom'],
    label: 'STRATUM COMPASS',
    summary: 'German-engineered stratum compass designed for structural geology, enabling single-operation dip angle and dip azimuth measurement via the Clar method.',
    specs: [
      ['Model', '3031 GEKOM N Pro'],
      ['Measurement method', 'Prof. Dr. Clar two-circle stratum system'],
      ['Azimuth circle', '60 mm diameter, 2° graduation (1° estimation)'],
      ['Clinometer range', '±90° (1° graduation)'],
      ['Dip circle', '270° reading visible from above'],
      ['Declination adjustment', '±60°'],
      ['Housing', 'Waterproof one-piece light metal alloy']
    ],
    features: [
      'Single-operation measurement of dip azimuth and dip angle per Clar method',
      'Vertical circle readable directly from above during planar contact',
      'Automatic needle arrest when lid is closed to protect jewel bearing',
      'Rugged non-magnetic light alloy body built for harsh field mapping'
    ],
    page: 28,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Compasses / Pocket Transits']
  },
  {
    slug: 'breithaupt-3032-gebru',
    name: '3032 GEBRU Universal Pocket Transit',
    brand: 'Breithaupt Kassel',
    category: 'geology',
    image: 'breithaupt-3032-gebru',
    gallery: ['breithaupt-3032-gebru'],
    label: 'UNIVERSAL POCKET TRANSIT',
    summary: 'Universal geological transit combining the Clar stratum method, Brunton sighting, and traditional strike and dip measurement in a single German-crafted instrument.',
    specs: [
      ['Model', '3032 GEBRU'],
      ['Measurement modes', 'Clar stratum method, Brunton sighting, strike & dip'],
      ['Horizontal circle', '360° (1° graduation)'],
      ['Vertical circle', '270° (2° graduation)'],
      ['Internal clinometer', '180° (1° graduation)'],
      ['Declination adjustment', '±60°'],
      ['Housing', 'Waterproof one-piece light metal housing (330 g)']
    ],
    features: [
      'Hybrid measurement system supporting Clar, Brunton, and strike/dip workflows',
      'Integrated diopter for simultaneous sighting and needle observation',
      'Top-reading vertical circle and internal level-controlled clinometer',
      'Tripod mount compatible for high-precision topographic station work'
    ],
    page: 28,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Compasses / Pocket Transits']
  },
  {
    slug: 'brunton-omnislope',
    name: 'OmniSlope Sighting Inclinometer',
    brand: 'Brunton',
    category: 'geology',
    image: 'brunton-omnislope',
    gallery: ['brunton-omnislope'],
    label: 'SIGHTING INCLINOMETER',
    summary: 'Precision sighting inclinometer offering 10x magnification, multiple slope scales, and a damped pendulum mechanism for geological dip, slope, and height determination.',
    specs: [
      ['Model', 'OmniSlope'],
      ['Angular accuracy', '±0.5°'],
      ['Optics', '10× magnification with focusing eyepiece'],
      ['Measurement scales', '0–90° slope, 0–150% grade, 66-ft forestry chain'],
      ['Pendulum mechanism', 'Precision damped 180° range pendulum'],
      ['Housing', 'CNC-machined anodized aluminum with protective cover'],
      ['Mounting', '1/4-20 tripod thread and Jacob\'s staff mount']
    ],
    features: [
      'Direct-reading optical scale with adjustable focus for clear field sighting',
      'Dual-purpose design functions as sighting unit or contact inclinometer',
      'Precision damped pendulum delivers fast, stable angle measurements',
      'Rugged anodized aluminum body with protective silicone boot'
    ],
    page: 28,
    subcategories: ['geological-field-mapping', 'forest-measurement-inventory', 'mining-survey'],
    categoryIds: ['geology', 'forestry', 'mining'],
    tags: ['Geological Compasses / Pocket Transits']
  },

  // --- 2. Geological Hammers & Rock Tools ---
  {
    slug: 'estwing-e3-22p',
    name: 'Rock Pick Pointed Tip',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'POINTED TIP ROCK PICK',
    summary: 'The industry-standard geological rock pick forged from solid American steel with a pointed tip, smooth striking face, and bonded Shock Reduction Grip®.',
    specs: [
      ['Model', 'E3-22P'],
      ['Head Weight', '22 oz / 616 g'],
      ['Overall Length', '13 in / 330 mm'],
      ['Construction', 'Single-piece forged solid American steel'],
      ['Grip Type', 'Molded Shock Reduction Grip® (reduces impact vibration up to 70%)'],
      ['Head Design', 'Pointed tip with smooth flat striking face']
    ],
    features: [
      'Solid one-piece forged steel construction eliminates joint failure',
      'Pointed tip engineered for prying, breaking, and sampling rock formations',
      'Smooth striking face for driving geological chisels and splitting specimens',
      'Patented Shock Reduction Grip® absorbs impact shock and protects hands',
      'The benchmark geological hammer trusted by field geologists worldwide',
      'Manufactured in Rockford, Illinois, USA'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Hammers', 'Rock Hammers', 'Rock Picks']
  },
  {
    slug: 'estwing-e3-24blc',
    name: 'Bricklayer / Mason’s Hammer E3-24BLC',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'MASON & FIELD HAMMER',
    summary: 'Solid steel mason’s hammer featuring a wide chisel edge and smooth striking face, widely utilized in geological field operations for splitting stratified rock.',
    specs: [
      ['Model', 'E3-24BLC'],
      ['Head Weight', '24 oz / 672 g'],
      ['Overall Length', '11.25 in / 286 mm'],
      ['Construction', 'Single-piece forged solid American steel'],
      ['Grip Type', 'Bonded Shock Reduction Grip® with nylon end cap'],
      ['Head Design', 'Chisel cutting edge with smooth flat striking face']
    ],
    features: [
      'Forged in one piece from high-grade solid American steel',
      'Wide chisel edge suitable for splitting layered rock, trimming, and sampling',
      'Smooth striking face for high-force strikes on rock and masonry',
      'Bonded Shock Reduction Grip® reduces vibrations caused by impact',
      'Durable nylon end cap for setting and tapping specimens',
      'Made in the USA'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Hammers', 'Field Hammers']
  },
  {
    slug: 'estwing-e3-23lp',
    name: 'Rock Pick Pointed Tip (Long Handle)',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'LONG-HANDLE ROCK PICK',
    summary: 'Extended 16-inch handle geological rock pick forged from solid steel, providing extra leverage, striking force, and prying reach for demanding rock outcrop work.',
    specs: [
      ['Model', 'E3-23LP'],
      ['Head Weight', '22 oz / 616 g'],
      ['Overall Length', '16 in / 406 mm'],
      ['Construction', 'Single-piece forged solid American steel'],
      ['Grip Type', 'Molded Shock Reduction Grip®'],
      ['Head Design', 'Pointed tip with smooth flat striking face']
    ],
    features: [
      'Extended 16-inch handle provides increased leverage and striking velocity',
      'Solid one-piece forged American steel construction ensures unmatched strength',
      'Pointed tip for precise fracture propagation and mineral extraction',
      'Smooth striking face for delivering solid impacts to outcrops and chisels',
      'Shock Reduction Grip® cushions hands from repetitive impact shock',
      'Made in the USA'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Hammers', 'Rock Hammers', 'Rock Picks']
  },
  {
    slug: 'estwing-engineers-hammer-e6-48e',
    name: 'Engineer’s Hammer E6-48E',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'HEAVY ENGINEER’S HAMMER',
    summary: 'Heavyweight 48 oz solid steel engineer’s hammer designed for heavy geological fieldwork, demolition, striking star drills, and fracturing dense rock boulders.',
    specs: [
      ['Model', 'E6-48E'],
      ['Head Weight', '48 oz / 1344 g (3 lb head)'],
      ['Overall Length', '14.75 in / 375 mm'],
      ['Construction', 'Single-piece forged solid American steel'],
      ['Grip Type', 'Bonded Shock Reduction Grip® with blue UV coating'],
      ['Head Design', 'Dual crowned bevel striking faces']
    ],
    features: [
      'Heavy 48 oz head delivers maximum force for breaking hard rocks and driving chisels',
      'Forged in one piece from high-carbon solid American steel',
      'Dual machined striking faces with beveled edges to prevent chipping',
      'Bonded Shock Reduction Grip® significantly reduces impact vibration',
      'Well-balanced weight distribution for controlled powerful strikes',
      'Made in Rockford, Illinois, USA'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Hammers', 'Engineer’s Hammers', 'Field Hammers']
  },
  {
    slug: 'estwing-rock-pick-square-head-e6-24pc',
    name: 'Rock Pick (Square Head) E6-24PC',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'SQUARE HEAD ROCK PICK',
    summary: 'Heavy-duty rock pick featuring a larger square striking face for improved target contact and power when splitting dense minerals or driving chisels.',
    specs: [
      ['Model', 'E6-24PC ("Big Blue")'],
      ['Head Weight', '24 oz / 680 g'],
      ['Overall Length', '13.5 in / 343 mm'],
      ['Construction', 'Single-piece forged solid American steel'],
      ['Grip Type', 'Shock Reduction Grip® with nylon end cap'],
      ['Head Design', 'Large square striking face with pointed pick tip']
    ],
    features: [
      'Larger square striking face increases contact area and strike accuracy',
      'Pointed tip engineered for prying, breaking, and extracting rock specimens',
      'Solid American steel forged in one continuous piece for ultimate durability',
      'Shock Reduction Grip® dampens impact vibration for all-day field comfort',
      'High-visibility blue finish with durable nylon end cap',
      'Made in the USA'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Hammers', 'Rock Hammers', 'Rock Picks']
  },

  // --- 3. Geological Prospecting & Gold Pans ---
  {
    slug: 'estwing-plastic-gold-pan',
    name: 'Plastic Gold Pan',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'MINERAL PROSPECTING PAN',
    summary: 'High-impact plastic gold pan featuring dual riffles and a textured drop-center design to rapidly separate and trap fine gold and heavy minerals.',
    specs: [
      ['Model Family', 'BP10, BP12, BP14, BP16'],
      ['Available Sizes', '10 in (254 mm) / 12 in (305 mm) / 14 in (356 mm) / 16 in (406 mm)'],
      ['Material', 'Heavy-duty rust-proof and chemical-resistant plastic'],
      ['Riffle Design', 'Dual fine and coarse riffles with drop-center trap'],
      ['Color', 'High-contrast dark finish for gold visibility'],
      ['Portability', 'Built-in lanyard attachment hole']
    ],
    features: [
      'Dual fine and coarse riffles catch both coarse flakes and fine placer gold',
      'Drop-center design traps heavy minerals efficiently during swirling',
      'Lightweight chemical-resistant and rust-proof plastic construction',
      'Dark high-contrast color makes gold flakes easily visible against black sands',
      'Lanyard hole molded into rim for easy field transport and drying',
      'Available in four field-tested diameters: 10", 12", 14", and 16"'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Gold Pans', 'Prospecting Tools']
  },
  {
    slug: 'estwing-steel-gold-pan',
    name: 'Steel Gold Pan',
    brand: 'Estwing',
    category: 'geology',
    image: 'placeholder',
    gallery: ['placeholder'],
    label: 'SOLID STEEL PROSPECTING PAN',
    summary: 'Classic solid American steel gold pan built for heavy-duty geological prospecting with precision-creased riffles to retain heavy minerals and placer gold.',
    specs: [
      ['Model Family', '#10-10, #12-12, #14-14, #16-16'],
      ['Available Sizes', '10 in (254 mm) / 12 in (305 mm) / 14 in (356 mm) / 16 in (406 mm)'],
      ['Material', 'Solid American steel'],
      ['Design', 'Precision-engineered creases for mineral retention'],
      ['Origin', 'Made in the USA'],
      ['Carry Feature', 'Pre-punched rim hole for lanyard or carabiner hanging']
    ],
    features: [
      'Forged from solid American steel for extreme durability and long field life',
      'Precision creases along the interior wall effectively trap heavy black sands and gold',
      'Can be heat-treated and blued in the field for seasoned separation performance',
      'Pre-punched rim hole for convenient tethering and backpack carry',
      'Traditional choice of field geologists and professional placer prospectors',
      'Available in four standard sizes: 10", 12", 14", and 16"'
    ],
    page: 46,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Gold Pans', 'Prospecting Tools']
  },
  {
    slug: 'estwing-rock-chisels',
    name: 'Estwing Rock Chisels',
    brand: 'Estwing',
    category: 'geology',
    image: 'estwing-rock-chisels',
    gallery: ['estwing-rock-chisels'],
    label: 'GEOLOGICAL ROCK CHISELS',
    summary: 'Heavy-duty forged steel geological chisels designed for splitting rock strata, extraction, and trimming field specimens.',
    specs: [
      ['Product range', 'Estwing Geological Cold & Rock Chisels'],
      ['Verified models', 'ERC-7C (7"), ERC-8C (8"), ERC-9C (9"), ERC-12C (12")'],
      ['Material', 'Forged high-carbon alloy steel'],
      ['Striking cap', 'Reinforced polymer cap with enlarged striking target'],
      ['Grip', 'Shock Reduction vinyl cushion grip with hand protector'],
      ['Origin', 'Made in USA']
    ],
    features: [
      'High-carbon steel forged specifically for rock splitting and sample extraction',
      'Available in multiple lengths and blade widths (7", 8", 9", and 12")',
      'Heavy polymer striking cap protects hands and provides large strike area',
      'Durable vinyl cushion grip absorbs shock during heavy hammer strikes'
    ],
    page: 29,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Rock Chisels', 'Geological Hammers', 'Rock Hammers', 'Rock Picks']
  },

  // --- 3. Hand Lenses & Magnification ---
  {
    slug: 'geological-hand-lens',
    name: 'Geological Hand Lens',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'geological-hand-lens',
    gallery: ['geological-hand-lens'],
    label: 'FIELD MAGNIFIER LOUPE',
    summary: 'Standard 10x 21mm geological hand lens with distortion-free optical glass and a durable folding metal casing for outcrop mineral examination.',
    specs: [
      ['Magnification', '10×'],
      ['Lens diameter', '21 mm'],
      ['Optical glass', 'Achromatic optical glass element'],
      ['Casing', 'Chrome-plated brass swivel frame'],
      ['Attachment', 'Lanyard loop integrated into casing'],
      ['Application', 'Hand-specimen petrography and mineral grain inspection']
    ],
    features: [
      '10x magnification standard for geological field examination',
      '21 mm clear aperture provides wide field of view for grain identification',
      'Swivel metal case protects lens elements from scratches in the field',
      'Compact pocket format with lanyard hole for secure field carry'
    ],
    page: 30,
    subcategories: ['geological-field-mapping', 'mining-inspection'],
    categoryIds: ['geology', 'mining'],
    tags: ['Field Loupes', 'Field Hand Lens / Loupe', 'Pocket Magnifiers']
  },
  {
    slug: 'geo-premier-triplet-hand-lens',
    name: 'GEO Premier Triplet Hand Lens 10× 20.5mm',
    brand: 'GEO Premier',
    category: 'geology',
    image: 'geo-premier-triplet-hand-lens',
    gallery: ['geo-premier-triplet-hand-lens'],
    label: 'TRIPLET GEOLOGICAL LOUPE',
    summary: 'Professional 10x 20.5mm triplet hand lens featuring three bonded optical glass elements for edge-to-edge color correction and high-clarity petrographic analysis.',
    specs: [
      ['Magnification', '10×'],
      ['Viewing aperture', '20.5 mm diameter'],
      ['Lens construction', 'Achromatic & aplanatic triplet (3 bonded optical lenses)'],
      ['Body style', 'Hexagonal metal casing with knurled textured grip'],
      ['Color correction', 'Corrected for chromatic and spherical aberration'],
      ['Inclusions', 'Protective leather pouch and lanyard attachment point']
    ],
    features: [
      'Three bonded optical lenses eliminate distortion and color fringing',
      'Hexagonal housing designed for firm grip in wet and muddy field conditions',
      'Generous 20.5 mm aperture allows ample light entry for crystal analysis',
      'Supplied with fitted genuine leather pouch for field protection'
    ],
    page: 30,
    subcategories: ['geological-field-mapping', 'mining-inspection'],
    categoryIds: ['geology', 'mining'],
    tags: ['Triplet Hand Lenses', 'Field Hand Lens / Loupe', 'Pocket Magnifiers']
  },

  // --- 4. GPS, Mapping & Distance Measurement ---
  {
    slug: 'garmin-etrex-se',
    name: 'eTrex® SE Handheld GPS',
    brand: 'Garmin',
    category: 'navigation',
    image: 'garmin-etrex-se',
    gallery: ['garmin-etrex-se'],
    label: 'MULTI-GNSS HANDHELD GPS',
    summary: 'Easy-to-use handheld navigator with battery life up to 1,800 hours in expedition mode, high-contrast monochrome display, and multi-GNSS satellite support.',
    specs: [
      ['Display', '2.2-inch transflective monochrome (240 × 320 pixels)'],
      ['Satellite systems', 'Multi-GNSS: GPS, GLONASS, Galileo, BeiDou, QZSS'],
      ['Battery life', 'Up to 168 hours (Standard) / Up to 1,800 hours (Expedition mode)'],
      ['Battery type', '2 AA batteries (field replaceable)'],
      ['Interface', 'USB-C'],
      ['Water rating', 'IPX7 (waterproof)'],
      ['Connectivity', 'Bluetooth® wireless / Garmin Explore™ compatible']
    ],
    features: [
      'Multi-GNSS tracking delivers dependable positioning in deep canyons and heavy cover',
      'High-contrast 2.2" sunlight-readable display',
      'Unmatched battery stamina: up to 75 days in expedition mode',
      'Pair with the Garmin Explore app for route planning and active weather'
    ],
    page: 13,
    subcategories: ['geological-field-mapping', 'gps-survey-mapping-products', 'defense-navigation', 'mining-field-mapping', 'mining-mapping'],
    categoryIds: ['navigation', 'geology', 'defense', 'mining'],
    tags: ['Handheld GPS', 'GPS/GNSS Devices', 'GPS', 'GPS / GNSS Receivers']
  },
  {
    slug: 'garmin-gpsmap-65',
    name: 'GPSMAP® 65 Handheld GPS',
    brand: 'Garmin',
    category: 'navigation',
    image: 'garmin-gpsmap-65',
    gallery: ['garmin-gpsmap-65'],
    label: 'MULTI-BAND GNSS NAVIGATOR',
    summary: 'Rugged button-operated handheld GPS with multi-band satellite technology and preloaded TopoActive maps for accurate field positioning.',
    specs: [
      ['Display', '2.6-inch sunlight-readable 65K color TFT (160 × 240 pixels)'],
      ['Satellite positioning', 'Multi-band GNSS (GPS, GLONASS, Galileo, QZSS, IRNSS)'],
      ['Preloaded maps', 'Routable TopoActive maps'],
      ['Internal memory', '16 GB internal storage, microSD card expansion'],
      ['Battery life', 'Up to 16 hours in GPS mode (2 AA batteries)'],
      ['Water rating', 'IPX7']
    ],
    features: [
      'Multi-band frequency support reduces multipath error in dense terrain',
      'Preloaded routable TopoActive mapping for trails and terrain contours',
      'Reliable button operation designed for wet, muddy, or gloved field hands',
      'Expanded satellite reception across five global navigation constellations'
    ],
    page: 13,
    subcategories: ['geological-field-mapping', 'gps-survey-mapping-products', 'defense-navigation', 'mining-field-mapping', 'mining-mapping'],
    categoryIds: ['navigation', 'geology', 'defense', 'mining'],
    tags: ['Handheld GPS', 'GPS/GNSS Devices', 'GPS', 'GPS / GNSS Receivers']
  },
  {
    slug: 'leica-disto-laser-distance-meter',
    name: 'Leica DISTO™ Laser Distance Meter',
    brand: 'Leica Geosystems',
    category: 'surveying',
    image: 'leica-disto-laser-distance-meter',
    gallery: ['leica-disto-laser-distance-meter'],
    label: 'LASER DISTANCE METER',
    summary: 'Professional handheld laser distance meter engineered by Leica Geosystems for millimeter-accurate distance, height, and area measurements in surveying and geology.',
    specs: [
      ['Product Type', 'Handheld Laser Distance Meter'],
      ['Brand / Series', 'Leica Geosystems DISTO™ Series'],
      ['Standard Accuracy', '±1.0 mm to ±1.5 mm (ISO 16331-1)'],
      ['Typical Range', '0.05 m to 150 m (variant dependent)'],
      ['Connectivity', 'Bluetooth® Smart'],
      ['Protection Class', 'IP54 / IP65 Dust & Splash Water Resistant']
    ],
    features: [
      'Millimeter-accurate laser distance measurement tested to ISO 16331-1',
      'Integrated tilt sensor for indirect heights and horizontal distances',
      'Clear backlit display optimized for indoor and outdoor field readability',
      'Bluetooth® Smart interface for rapid wireless data transfer to mobile apps',
      'Rugged drop-tested housing with dust and water spray protection'
    ],
    page: 14,
    subcategories: ['geological-field-mapping', 'mining-survey', 'mining-distance'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['Laser Distance Meters', 'Distance Measurement']
  },

  // --- 5. Field Notebooks, Pens & Measuring Tools ---
  {
    slug: 'chartwell-collimation-book-2426',
    name: 'Chartwell Collimation Book – 2426',
    brand: 'Chartwell',
    category: 'geology',
    image: 'chartwell-collimation-book-2426',
    gallery: ['chartwell-collimation-book-2426'],
    label: 'WATERPROOF SURVEY BOOK',
    summary: 'The benchmark survey field notebook for recording leveling, collimation, and elevations, made with 50% rag wet-strength paper that remains legible when wet.',
    specs: [
      ['Model', '2426'],
      ['Format', 'Collimation leveling layout (BS, IS, FS, HPC, RL, Distance)'],
      ['Pages', '160 pages (80 leaves)'],
      ['Dimensions', '192 × 120 mm (pocket size)'],
      ['Paper quality', '50% cotton rag wet-strength waterproof paper'],
      ['Binding', 'Casebound with rot-proof nylon thread and wipe-clean cover']
    ],
    features: [
      'High cotton rag wet-strength paper retains strength and writeability in rain',
      'Printed with permanent waterproof ink that will not smudge or fade',
      'Casebound format folds completely flat for comfortable field recording',
      'Rounded corners reduce pocket wear during long field days'
    ],
    page: 31,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'surveying', 'mining'],
    tags: ['Field Notebooks', 'Survey Books', 'Geological Scales']
  },
  {
    slug: 'edding-mapping-pen-01',
    name: 'Edding Mapping Pen 0.1',
    brand: 'Edding',
    category: 'geology',
    image: 'edding-mapping-pen-01',
    gallery: ['edding-mapping-pen-01'],
    label: 'FINE TECHNICAL MAPPING PEN',
    summary: 'High-precision 0.1mm technical fineliner with waterproof, lightfast pigment ink, designed for fine geological drafting, contouring, and field notation.',
    specs: [
      ['Stroke width', '0.1 mm ultra-fine line'],
      ['Tip design', 'Metal-framed synthetic nib for precision ruler work'],
      ['Ink type', 'Water-based permanent pigment ink'],
      ['Lightfastness', 'Highly lightfast, smudge-proof, and waterproof when dry']
    ],
    features: [
      '0.1 mm line width ideal for dense geological maps and fine structural symbols',
      'Metal-sheathed tip prevents nib damage against scales and protractors',
      'Lightfast archival ink prevents fading in field notebooks and published maps',
      'Smudge-resistant formulation performs on synthetic and wet-strength papers'
    ],
    page: 31,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Mapping Pens & Markers', 'Field Pens', 'Geological Scales']
  },
  {
    slug: 'edding-mapping-pen-03',
    name: 'Edding Mapping Pen 0.3',
    brand: 'Edding',
    category: 'geology',
    image: 'edding-mapping-pen-03',
    gallery: ['edding-mapping-pen-03'],
    label: 'TECHNICAL MAPPING PEN',
    summary: 'Precision 0.3mm fineliner pen with waterproof archival pigment ink, engineered for geological boundary lines, structural symbols, and notebook entries.',
    specs: [
      ['Stroke width', '0.3 mm medium-fine line'],
      ['Tip design', 'Metal-clad synthetic nib'],
      ['Ink formulation', 'Archival waterproof and lightfast pigment ink'],
      ['Application', 'Geological field mapping, lithology logs, and notes']
    ],
    features: [
      '0.3 mm stroke delivers optimal balance of fine detail and clear visibility',
      'Archival pigment ink will not bleed through wet-strength survey paper',
      'Long metal collar facilitates accurate drawing alongside set-squares and rulers',
      'Ventilated safety cap with pocket clip'
    ],
    page: 31,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Mapping Pens & Markers', 'Field Pens', 'Geological Scales']
  },
  {
    slug: 'edding-mapping-pen-05',
    name: 'Edding Mapping Pen 0.5',
    brand: 'Edding',
    category: 'geology',
    image: 'edding-mapping-pen-05',
    gallery: ['edding-mapping-pen-05'],
    label: 'GEOLOGICAL DRAFTING PEN',
    summary: 'Durable 0.5mm technical pen with permanent waterproof pigment ink, ideal for major geological boundaries, outcrop legends, and core logging.',
    specs: [
      ['Stroke width', '0.5 mm line width'],
      ['Tip design', 'Metal-supported robust synthetic nib'],
      ['Ink type', 'Permanent, waterproof, and lightfast pigment ink'],
      ['Application', 'Major contact lines, stratigraphic logs, and headings']
    ],
    features: [
      '0.5 mm robust line width for high-clarity structural and stratigraphic drafting',
      'Fade-resistant and smear-proof once dry on standard and synthetic papers',
      'Durable metal-sheathed tip withstands pressure during rigorous field recording',
      'Reliable constant ink flow without blotting'
    ],
    page: 31,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Mapping Pens & Markers', 'Field Pens', 'Geological Scales']
  },
  {
    slug: 'staedtler-pigment-liner-mapping-pen',
    name: 'Staedtler Pigment Liner Mapping Pen',
    brand: 'Staedtler',
    category: 'geology',
    image: 'staedtler-pigment-liner-mapping-pen',
    gallery: ['staedtler-pigment-liner-mapping-pen'],
    label: 'ARCHIVAL FIELD LINER',
    summary: 'Indelible technical pigment liner pen engineered for geological documentation, conforming to ISO 14145-2 archival standards with 18-hour CAP OFF technology.',
    specs: [
      ['Ink standard', 'Indelible pigment ink (ISO 14145-2 certified)'],
      ['Tip construction', 'Long metal tip for drafting rulers and templates'],
      ['CAP OFF technology', 'Can be left uncapped for up to 18 hours without drying up'],
      ['Lightfastness', 'Extreme lightfastness and waterproof on paper']
    ],
    features: [
      'ISO 14145-2 certified archival indelible ink ensures permanent legal records',
      'CAP OFF feature allows seamless operation during intermittent field observations',
      'Erasable when used on drafting film; non-bleeding on wet-strength paper',
      'Sturdy metal pocket clip and robust polypropylene barrel'
    ],
    page: 31,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Mapping Pens & Markers', 'Field Pens', 'Geological Scales']
  },
  {
    slug: 'china-graph-pencils',
    name: 'China Graph Pencils',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'china-graph-pencils',
    gallery: ['china-graph-pencils'],
    label: 'ROCK & CORE MARKING PENCILS',
    summary: 'Specialized wax-based chinagraph pencils designed to write cleanly on wet rock faces, drill core, polished minerals, glass, and metal without scratching.',
    specs: [
      ['Core composition', 'Heavy pigmented wax formulation'],
      ['Applicable surfaces', 'Rough rock, drill cores, wet samples, glass, metal, plastic'],
      ['Design', 'Peel-off paper wrapping with pull-string (no sharpener needed)'],
      ['Moisture resistance', 'Fully waterproof and moisture resistant']
    ],
    features: [
      'Writes effortlessly on damp, wet, or polished rock and core surfaces',
      'Pull-string paper wrapping eliminates the need for knife or pencil sharpener in the field',
      'Non-porous pigment stays legible in extreme weather and core-washing conditions',
      'Wipes cleanly off non-porous surfaces when no longer needed'
    ],
    page: 32,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Mapping Pens & Markers', 'Field Markers', 'Geological Scales']
  },
  {
    slug: 'geological-measuring-tape',
    name: 'Geological Measuring Tape',
    brand: 'AFFORDA',
    category: 'geology',
    image: 'geological-measuring-tape',
    gallery: ['geological-measuring-tape'],
    label: 'FIELD SURVEY TAPE',
    summary: 'Heavy-duty open-frame fiberglass measuring tape designed for geological outcrop measurement, stratigraphic section logging, and field survey baselines.',
    specs: [
      ['Length options', '30 m / 50 m open-frame / 100 m configurations'],
      ['Blade material', 'Heavy-duty non-conductive fiberglass with PVC coating'],
      ['Frame style', 'Impact-resistant ABS open frame with ground spike'],
      ['Graduations', 'Metric millimeter and centimeter markings on high-contrast background'],
      ['Rewind system', 'High-speed geared 3:1 rewind crank']
    ],
    features: [
      'Non-conductive, non-stretch fiberglass blade resists water, mud, and dirt',
      'Open-frame design allows easy rinsing of sediment after muddy field use',
      'High-speed rewind handle quickly reels in long baseline measurements',
      'End hook and ground stake provide secure anchoring for solo field measuring'
    ],
    page: 32,
    subcategories: ['geological-field-mapping', 'mining-survey', 'mining-distance'],
    categoryIds: ['geology', 'surveying', 'mining'],
    tags: ['Measuring Tapes', 'Field Measuring Rods', 'Geological Scales']
  },

  // --- 6. Mineral Hardness & Property Testing ---
  {
    slug: 'acid-bottles',
    name: 'Acid Bottles',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'acid-bottles',
    gallery: ['acid-bottles'],
    label: 'CARBONATE TEST DROPPER BOTTLE',
    summary: 'Chemical-resistant polyethylene dropper bottles designed for safely storing and dispensing dilute hydrochloric acid (10% HCl) to test for carbonate effervescence.',
    specs: [
      ['Capacity options', '30 ml / 60 ml'],
      ['Material', 'Acid-resistant polyethylene (LDPE/HDPE)'],
      ['Dispensing mechanism', 'Precision micro-dropper spout with captive protective cap'],
      ['Application', 'Effervescence testing for calcite, dolomite, and carbonate minerals']
    ],
    features: [
      'Chemically inert polymer withstands corrosive dilute hydrochloric acid',
      'Controlled drop-by-drop dispenser minimizes spillage and waste',
      'Leak-proof screw cap prevents accidental discharge inside field rucksacks',
      'Essential pocket tool for distinguishing limestone, marble, and dolostone'
    ],
    page: 33,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Acid Testing', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'mohs-hardness-tile',
    name: 'Mohs Hardness Tile',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'mohs-hardness-tile',
    gallery: ['mohs-hardness-tile'],
    label: 'MINERAL HARDNESS REFERENCE',
    summary: 'Calibrated glass testing plate with a known Mohs hardness of 5.5, used by geologists to quickly differentiate softer minerals from quartz and harder silicates.',
    specs: [
      ['Hardness reference', 'Mohs 5.5 (calibrated float plate glass)'],
      ['Dimensions', '75 × 25 mm (3 × 1 inches)'],
      ['Edge finish', 'Polished beveled safety edges'],
      ['Application', 'Standard comparative hardness test for unknown field specimens']
    ],
    features: [
      'Calibrated Mohs 5.5 hardness index for accurate mineral identification',
      'Scratch vs be scratched test instantly isolates quartz, feldspar, and calcite',
      'Smooth ground edges ensure safe handling in field rucksacks and kits',
      'Reusable testing surface suitable for field surveys and laboratory classes'
    ],
    page: 33,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Mohs Hardness Testing', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'pendulum-pencil-magnet',
    name: 'Pendulum Pencil Magnet',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'pendulum-pencil-magnet',
    gallery: ['pendulum-pencil-magnet'],
    label: 'PENDULUM MAGNETIC TESTER',
    summary: 'Sensitive pendulum-style magnetic tester housed in a pen format, using a free-hanging magnet to detect weak magnetic fields in rocks and drill core.',
    specs: [
      ['Mechanism', 'Gimballed / suspended free-swinging pendulum magnet'],
      ['Magnet type', 'Rare-earth neodymium element'],
      ['Housing', 'Aluminum pen body with pocket clip and screw cap'],
      ['Application', 'Detection of magnetite, ilmenite, and pyrrhotite in hand specimens']
    ],
    features: [
      'Free-hanging magnetic pendulum detects subtle magnetic susceptibility',
      'Identifies weakly magnetic minerals that stationary bar magnets miss',
      'Pen format with shirt-pocket clip for effortless field access',
      'Protective threaded cap shields internal pendulum mechanism during transit'
    ],
    page: 33,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Magnetic Scribers', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'steel-point-scriber',
    name: 'Steel Point Scriber',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'steel-point-scriber',
    gallery: ['steel-point-scriber'],
    label: 'HARDENED STEEL SCRIBER',
    summary: 'Hardened tool steel scriber calibrated to approximately Mohs 5.5–6.0, used for scratch testing minerals and marking structural lines on field specimens.',
    specs: [
      ['Point material', 'Hardened and tempered carbon tool steel (~Mohs 5.5–6.0)'],
      ['Handle', 'Knurled aluminum body for non-slip grip'],
      ['Length', 'Approx. 140 mm'],
      ['Application', 'Mohs scratch testing, outcrop sample scribing, and specimen labeling']
    ],
    features: [
      'Calibrated hardened steel tip tests minerals against Mohs 5.5 threshold',
      'Knurled grip ensures positive control when scribing hard rock specimens',
      'Fine ground point allows precision scratching on millimeter-scale mineral grains',
      'Durable all-metal build engineered for tough field conditions'
    ],
    page: 33,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Mohs Hardness Testing', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'streak-plates-black',
    name: 'Streak Plates – Black',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'streak-plates-black',
    gallery: ['streak-plates-black'],
    label: 'UNGLAZED BLACK PORCELAIN',
    summary: 'Unglazed black porcelain streak tile with a hardness of approximately Mohs 6.5–7.0, essential for diagnostic powder testing of pale, white, and metallic minerals.',
    specs: [
      ['Material', 'Unglazed high-density black porcelain'],
      ['Hardness', 'Approx. Mohs 6.5–7.0'],
      ['Dimensions', '50 × 50 mm (2 × 2 inches)'],
      ['Target minerals', 'Light-colored, white, and reflective minerals (fluorite, talc, gypsum)']
    ],
    features: [
      'Matte black unglazed surface provides maximum contrast for pale powders',
      'Mohs 6.5–7.0 hardness pulverizes all softer minerals to verify true streak',
      'Double-sided testing surface extends usable life in the field',
      'Easily cleaned with water and abrasive pad for repeated testing'
    ],
    page: 34,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Streak Plates', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'streak-plates-white',
    name: 'Streak Plates – White',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'streak-plates-white',
    gallery: ['streak-plates-white'],
    label: 'UNGLAZED WHITE PORCELAIN',
    summary: 'Classic unglazed white porcelain streak tile (Mohs 6.5–7.0) used for revealing the diagnostic powder streak of dark, metallic, and ore minerals like hematite and pyrite.',
    specs: [
      ['Material', 'Unglazed high-density white porcelain'],
      ['Hardness', 'Approx. Mohs 6.5–7.0'],
      ['Dimensions', '50 × 50 mm (2 × 2 inches)'],
      ['Target minerals', 'Dark and metallic minerals (hematite: reddish-brown; pyrite: greenish-black)']
    ],
    features: [
      'Standard white unglazed porcelain reveals distinct diagnostic mineral streaks',
      'Unmasks true mineral identity independent of surface weathering or tarnish',
      'Dual testing faces for extended fieldwork sessions',
      'Standard 50 × 50 mm format fits inside any field testing wallet or kit'
    ],
    page: 34,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Streak Plates', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'swing-magnetic-pen',
    name: 'Swing Magnetic Pen',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'swing-magnetic-pen',
    gallery: ['swing-magnetic-pen'],
    label: 'PIVOTING MAGNETIC PEN',
    summary: 'Precision aluminum pen tool with an internal pivoting magnet that freely swings towards ferromagnetic minerals in hand specimens and core samples.',
    specs: [
      ['Design', 'Low-friction internal pivoting magnetic needle indicator'],
      ['Material', 'Precision-turned aluminum with anodized finish'],
      ['Indicator', 'High-sensitivity swing response to magnetic minerals'],
      ['Form factor', 'Pen-style housing with pocket clip']
    ],
    features: [
      'Pivoting swing indicator defects visibly toward minute ferromagnetic content',
      'Distinguishes weakly magnetic minerals without sticking or specimen contamination',
      'Pocket-clip design ensures immediate availability during logging and mapping',
      'Machined aluminum housing protects pivot needle from field drops'
    ],
    page: 34,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Magnetic Scribers', 'Property Testing', 'Prospecting Tools']
  },
  {
    slug: 'tungsten-carbide-scriber-with-magnet-black',
    name: 'Tungsten Carbide Scriber with Magnet – Black',
    brand: 'Faithfull',
    category: 'geology',
    image: 'tungsten-carbide-scriber-with-magnet-black',
    gallery: ['tungsten-carbide-scriber-with-magnet-black'],
    label: 'TUNGSTEN SCRIBER & MAGNET',
    summary: 'Dual-ended field testing instrument featuring an ultra-hard tungsten carbide scriber tip (Mohs 8.5–9.0) on one end and a permanent neodymium magnet on the other.',
    specs: [
      ['Scriber point', 'Ultra-hard tungsten carbide tip (~Mohs 8.5–9.0)'],
      ['Opposite end', 'Permanent neodymium magnetic pickup and tester'],
      ['Handle', 'Black anodized aluminum with non-slip knurled grip'],
      ['Clip', 'Steel pocket clip for secure shirt/vest carry']
    ],
    features: [
      'Tungsten carbide tip scratches through glass, quartz, and hardened steel',
      'Integrated tail magnet tests for magnetic attraction in a single hand motion',
      'Heavy knurled black handle delivers firm grip even in wet field conditions',
      'Combines two essential geological property tests in one rugged tool'
    ],
    page: 34,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Magnetic Scribers', 'Mohs Hardness Testing', 'Property Testing', 'Prospecting Tools']
  },

  // --- 7. Geological Sieves & Sample Analysis ---
  {
    slug: '100mm-glenammer-sieves',
    name: '100mm Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '100mm-glenammer-sieves',
    gallery: ['100mm-glenammer-sieves'],
    label: 'ANALYTICAL TEST SIEVE',
    summary: 'Compact 100mm (4-inch) precision stainless steel test sieves manufactured in the UK to ISO 3310-1 standards for fine particle and sediment sorting.',
    specs: [
      ['Diameter', '100 mm (approx. 4 inches)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Stainless steel woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11'],
      ['Aperture availability', 'Full range from 20 microns to multiple millimeters']
    ],
    features: [
      'Fully stainless steel non-magnetic body and woven wire mesh',
      'Laser-etched serial numbers and aperture specifications for traceability',
      'Precision seamless frame design eliminates cross-sample entrapment',
      'Compact 100mm diameter ideal for portable field testing and small lab batches'
    ],
    page: 35,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Analytical Test Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: '150mm-glenammer-sieves',
    name: '150mm Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '150mm-glenammer-sieves',
    gallery: ['150mm-glenammer-sieves'],
    label: 'ANALYTICAL TEST SIEVE',
    summary: 'Medium-format 150mm (6-inch) stainless steel analytical sieves built to ISO 3310 standards for sedimentary analysis, aggregate sizing, and lab classification.',
    specs: [
      ['Diameter', '150 mm (approx. 6 inches)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Stainless steel woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11'],
      ['Aperture availability', 'Full range from micron to millimeter sizes']
    ],
    features: [
      'Precision manufactured by Glenammer Engineering in the United Kingdom',
      'Smooth transitions between body and mesh prevent particle accumulation',
      'Conforms to British and international testing standards',
      '150mm diameter provides intermediate sample volume capacity'
    ],
    page: 35,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Analytical Test Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: '200mm-glenammer-sieves',
    name: '200mm Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '200mm-glenammer-sieves',
    gallery: ['200mm-glenammer-sieves'],
    label: 'STANDARD TEST SIEVE',
    summary: 'Industry-standard 200mm full-height stainless steel test sieves (50mm depth) built for geological and geotechnical particle size distribution analysis.',
    specs: [
      ['Diameter', '200 mm (7.9 inches)'],
      ['Depth', '50 mm (full height)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Precision stainless steel woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11'],
      ['Aperture range', 'Available from 20 microns up to coarse millimeter grades']
    ],
    features: [
      'Standard 200mm format compatible with all standard laboratory sieve shakers',
      'Non-magnetic stainless steel prevents interference with magnetic minerals',
      'Full 50mm depth accommodates substantial geological sample volumes',
      'Laser-etched identification and individual calibration certification options'
    ],
    page: 35,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Analytical Test Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: '200mm-half-height-glenammer-sieves',
    name: '200mm Half Height Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '200mm-half-height-glenammer-sieves',
    gallery: ['200mm-half-height-glenammer-sieves'],
    label: 'HALF HEIGHT TEST SIEVE',
    summary: 'Space-saving 200mm diameter half-height sieves (25mm depth) that allow double the number of sieves to be stacked in a single shaker run.',
    specs: [
      ['Diameter', '200 mm (7.9 inches)'],
      ['Depth', '25 mm (half height)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Precision woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11']
    ],
    features: [
      'Half-height 25mm depth doubles stack capacity on standard shaker columns',
      'Ideal for comprehensive multi-fraction granulometric grain size analysis',
      'Fully sealed stainless steel construction prevents specimen loss',
      'Interlocks securely with full-height 200mm lids and receiving pans'
    ],
    page: 35,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Half Height Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: '300mm-glenammer-sieves',
    name: '300mm Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '300mm-glenammer-sieves',
    gallery: ['300mm-glenammer-sieves'],
    label: 'LARGE FORMAT SIEVE',
    summary: 'Large 300mm diameter full-height stainless steel analytical sieves (75mm depth) designed for large volume sediment, soil, and crushed rock analysis.',
    specs: [
      ['Diameter', '300 mm (approx. 12 inches)'],
      ['Depth', '75 mm (full height)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Heavy-duty woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11']
    ],
    features: [
      'Large 300mm surface area processes high-mass geological and gravel samples',
      'Heavy-duty stainless steel frame handles abrasive aggregate agitation',
      'Individually laser-engraved with certified aperture details',
      'Designed for both automated mechanical shaker and manual sieving'
    ],
    page: 36,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Analytical Test Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: '300mm-half-height-glenammer-sieves',
    name: '300mm Half Height Glenammer Sieves',
    brand: 'Glenammer Engineering',
    category: 'geology',
    image: '300mm-half-height-glenammer-sieves',
    gallery: ['300mm-half-height-glenammer-sieves'],
    label: 'LARGE HALF HEIGHT SIEVE',
    summary: 'Shallow 300mm diameter half-height sieves (40mm depth) providing a wide sorting area with reduced stack height for large geological laboratories.',
    specs: [
      ['Diameter', '300 mm (approx. 12 inches)'],
      ['Depth', '40 mm (half height)'],
      ['Body material', 'Stainless steel (non-magnetic)'],
      ['Mesh type', 'Heavy-duty woven wire mesh'],
      ['Standards compliance', 'ISO 3310-1 / BS 410 / ASTM E11']
    ],
    features: [
      'Wide 300mm diameter provides rapid separation without excessive vertical stack height',
      'Precision non-magnetic stainless steel resists corrosion from wet sample washing',
      'Seamless body contour ensures fast, complete specimen recovery',
      'Conforms to international particle sizing specifications'
    ],
    page: 36,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Half Height Sieves', 'Geological Sieves', 'Prospecting Tools']
  },
  {
    slug: 'geo-sieves',
    name: 'Geo-Sieves Stackable Field Set',
    brand: 'Northern Geological Supplies',
    category: 'geology',
    image: 'geo-sieves',
    gallery: ['geo-sieves'],
    label: 'STACKABLE FIELD SIEVE SET',
    summary: 'A complete 6-sieve portable field set made in Britain with durable molded polymer trays, high-quality nylon mesh, lid, and collecting base pan.',
    specs: [
      ['Set configuration', '6 nested sieves with matching lid and receiver base pan'],
      ['Mesh apertures included', '2.0 mm, 1.0 mm, 0.5 mm, 0.25 mm, 0.125 mm, 0.063 mm'],
      ['Mesh material', 'High-quality durable nylon mesh'],
      ['Tray material', 'Impact-resistant black molded polymer'],
      ['Weight', '3.2 kg (complete set)'],
      ['Origin', 'Made in Great Britain']
    ],
    features: [
      'Complete 6-tier nested sieve stack with six Wentworth grain-size intervals',
      'Lightweight molded polymer construction ideal for field expeditions and students',
      'Includes tight-fitting lid and collection pan for zero-loss sample shaking',
      'Nylon mesh resists moisture and cleans easily in running stream water'
    ],
    page: 36,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Field Sieve Sets', 'Geological Sieves', 'Prospecting Tools']
  },

  // --- 8. Field Communication & Expedition Support ---
  {
    slug: 'lifestraw-go-series',
    name: 'LifeStraw Go Series Water Filter Bottle',
    brand: 'LifeStraw',
    category: 'geology',
    image: 'lifestraw-go-series',
    gallery: ['lifestraw-go-series'],
    label: 'EXPEDITION SUPPORT / HYDRATION',
    summary: 'Advanced two-stage water filtration bottle for remote expeditions, removing bacteria, parasites, and microplastics while reducing chlorine and improving taste.',
    specs: [
      ['Filtration technology', '2-stage membrane microfilter + activated carbon filter'],
      ['Pore size', '0.2 microns'],
      ['Filtration performance', 'Removes 99.999999% bacteria (E. coli), 99.999% parasites, 99.999% microplastics'],
      ['Filter lifespan', 'Microfilter: up to 4,000 L (1,000 gal) / Carbon: up to 100 L (26 gal)'],
      ['Capacity options', '650 ml (22 fl oz) / 1 L options'],
      ['Material', 'BPA-free 50% post-consumer recycled plastic / stainless steel options'],
      ['Testing standards', 'Meets US EPA & NSF P231 drinking water standards']
    ],
    features: [
      'Two-stage filtration protects against bacteria, parasites, microplastics, and silt',
      'Activated carbon capsule reduces chlorine, odors, and organic chemicals',
      'Essential hydration and personal safety equipment for remote field camps',
      'Durable BPA-free bottle with leak-proof carry cap and carabiner loop'
    ],
    page: 37,
    subcategories: ['geological-field-mapping'],
    categoryIds: ['geology'],
    tags: ['Hydration & Water Filtration', 'Expedition Support']
  }

];

export const brandDescriptions: Record<string,string> = {
  'AFFORDA':'Specialized supplier of professional field, forestry, surveying, and wildfire management equipment.',
  'GeoMate':'Professional GNSS positioning, RTK surveying, visual laser rovers, and rugged field data-collection systems.',
  'Vortex Optics':'A closer connection to the world beyond. Discover HD binoculars and precision observation optics.',
  'Garmin':'Find your position and your next destination with purpose-built handheld navigation.',
  'Brunton':'Tools for reading the earth. Explore geological transits and precision field compasses.',
  'Browning':'Observe life in the wild with dedicated trail-camera technology.',
  'Brutforce':'Keep field teams connected with portable communication products.',
  'Ralcam':'Reach difficult spaces with articulating inspection camera systems.',
  'HIKMICRO':'See temperature and heat signatures with portable thermal imaging.',
  'Panasonic Toughbook':'Rugged computing platforms configured for mobile professional work.',
  'DGPS solutions':'Tell us your survey accuracy, correction network and field workflow requirements. Our team will help identify an appropriate DGPS solution.',
  'Suunto':'Dependable sighting compasses and navigation tools for the field.',
  'MINOX':'Digital night vision for observation beyond daylight.',
  'Open Acoustic Devices':'Compact acoustic loggers for ecological research and wildlife monitoring.',
  'Breithaupt Kassel':'Precision German stratum compasses, geological pocket transits, and surveying instruments crafted since 1762.',
  'Estwing':'The standard in solid steel geological hammers, rock picks, and chisels forged in the USA since 1923.',
  'Leica Geosystems':'Industry benchmark precision measuring solutions, total stations, and laser distance meters.',
  'Glenammer Engineering':'High-precision analytical test sieves manufactured in the United Kingdom to ISO and ASTM international standards.',
  'GEO Premier':'Professional optical triplet hand lenses and geological inspection loupes.',
  'Northern Geological Supplies':'Comprehensive geological, mining, exploration tools, and sample testing supplies.',
  'Chartwell':'Specialized waterproof survey books and collimation notebooks built for harsh outdoor environments.',
  'Edding':'Precision German fine technical drafting and mapping markers engineered for archival permanence.',
  'Staedtler':'Renowned drafting, mapping, and indelible pigment liner pens designed for professional accuracy.',
  'Faithfull':'Dependable precision scribers, marking instruments, and trades tools for demanding field use.',
  'LifeStraw':'Advanced membrane microfiltration systems providing safe drinking water in remote field and expedition environments.',
  'Wildlife Acoustics':'Pioneering autonomous bioacoustic and ultrasonic monitoring systems designed for wildlife ecological research.',
  'Seek Thermal':'High-performance infrared thermal imaging sensors and handheld cameras for field observation and surveillance.',
};

export const finderOptions: Record<string, Record<string, string[]>> = {
  'Forestry & Wildlife': {
    'Forest Measurement': ['diameter-tape-dbh-tape', 'digital-tree-caliper', 'clinometer', 'hypsometer', 'laser-rangefinder'],
    'Mapping & Navigation': ['geomate-gnss-receiver', 'geomate-sg6l-gnss', 'garmin-gpsmap-65s', 'professional-gnss-receiver', 'rtk-dgps', 'laser-rangefinder'],
    'Fire Suppression': ['backpack-fire-pump', 'portable-fire-pump', 'pulaski-forestry-axe', 'drip-torch', 'fire-weather-meter'],
    'Wildlife monitoring': ['browning-strike-force-pro-dcl', 'audiomoth', 'song-meter-micro-2', 'vortex-triumph-hd-10x42', 'ir-camera-trap', 'gps-wildlife-tracking-collar'],
    'Night observation': ['hikmicro-lynx-lh25', 'minox-nvd-650'],
  },
  'Surveying & Mapping': {
    'Navigation': ['garmin-gpsmap-65s', 'garmin-montana-700'],
    'DGPS positioning': ['geomate-gnss-receiver', 'geomate-gbase-gnss', 'geomate-sg6l-gnss', 'rtk-dgps', 'professional-gnss-receiver'],
    'Field computing': ['geomate-fc2-controller', 'panasonic-toughbook', 'electronic-data-collector'],
  },
  'Geology & Research': {
    'Compass & transit measurement': ['brunton-f-5012-axis', 'brunton-geolite', 'brunton-compro-transit', 'brunton-geo-pocket-transit-f-5010', 'brunton-truarc-15', 'brunton-truarc-20', 'brunton-truarc-5', 'breithaupt-3031-gekom', 'breithaupt-3032-gebru', 'brunton-omnislope'],
    'Rock sampling & hammers': ['estwing-e3-22p', 'estwing-e3-24blc', 'estwing-e3-23lp', 'estwing-engineers-hammer-e6-48e', 'estwing-rock-pick-square-head-e6-24pc', 'estwing-rock-chisels', 'estwing-plastic-gold-pan', 'estwing-steel-gold-pan'],
    'Magnification & loupes': ['geo-premier-triplet-hand-lens', 'geological-hand-lens'],
    'Mapping & GNSS': ['geomate-gnss-receiver', 'geomate-sg6l-gnss', 'garmin-etrex-se', 'garmin-gpsmap-65', 'garmin-gpsmap-65s'],
    'Field notebooks & measuring': ['chartwell-collimation-book-2426', 'edding-mapping-pen-01', 'geological-measuring-tape'],
    'Mineral property testing': ['tungsten-carbide-scriber-with-magnet-black', 'mohs-hardness-tile', 'streak-plates-white', 'acid-bottles'],
    'Sample sieving & analysis': ['200mm-glenammer-sieves', 'geo-sieves'],
    'Expedition communication & hydration': ['brutforce-field-radio', 'lifestraw-go-series'],
  },
  'Industrial Inspection': { 'Confined-space inspection':['ralcam-h408b'], 'Thermal observation':['hikmicro-e20-plus','hikmicro-lynx-lh25'], 'Field computing':['panasonic-toughbook'] },
  'Field Operations': { 'Team communication':['brutforce-field-radio'], 'Navigation':['garmin-gpsmap-65s','suunto-mc2'], 'Night observation':['hikmicro-lynx-lh25','minox-nvd-650'] },
  'Defense & Paramilitary': {
    'Thermal Imaging':['hikmicro-lynx-lh25'],
    'Night Vision':['minox-nvd-650'],
    'GPS / Navigation':['garmin-gpsmap-65s','garmin-montana-700','suunto-mc2'],
    'Binoculars / Optics':['vortex-viper-hd','vortex-diamondback-hd'],
    'Communication':['brutforce-field-radio'],
    'Rugged Computing':['panasonic-toughbook'],
    'Surveillance / Monitoring':['browning-strike-force-pro-dcl','hikmicro-lynx-lh25','minox-nvd-650'],
  },
  'Mining & Geology': {
    'Geological Survey': ['brunton-f-5012-axis', 'brunton-geolite', 'brunton-compro-transit', 'brunton-geo-pocket-transit-f-5010', 'brunton-truarc-15', 'brunton-truarc-20', 'brunton-truarc-5', 'breithaupt-3031-gekom', 'breithaupt-3032-gebru', 'brunton-omnislope', 'estwing-e3-22p', 'estwing-e3-24blc', 'estwing-e3-23lp', 'estwing-engineers-hammer-e6-48e', 'estwing-rock-pick-square-head-e6-24pc', 'estwing-plastic-gold-pan', 'estwing-steel-gold-pan'],
    'Mapping / GNSS': ['geomate-gnss-receiver', 'geomate-gbase-gnss', 'geomate-sg6l-gnss', 'garmin-gpsmap-65s', 'garmin-gpsmap-65', 'garmin-etrex-se', 'garmin-montana-700'],
    'Compasses / Pocket Transits': ['brunton-f-5012-axis', 'brunton-geolite', 'brunton-compro-transit', 'brunton-geo-pocket-transit-f-5010', 'brunton-truarc-15', 'brunton-truarc-20', 'brunton-truarc-5', 'breithaupt-3031-gekom', 'breithaupt-3032-gebru'],
    'Geological Hammers / Rock Picks': ['estwing-e3-22p', 'estwing-e3-24blc', 'estwing-e3-23lp', 'estwing-engineers-hammer-e6-48e', 'estwing-rock-pick-square-head-e6-24pc', 'estwing-rock-chisels'],
    'Distance Measurement': ['leica-disto-laser-distance-meter', 'garmin-gpsmap-65s', 'garmin-montana-700'],
    'Rugged Computing': ['geomate-fc2-controller', 'panasonic-toughbook'],
    'Field Inspection': ['geo-premier-triplet-hand-lens', 'ralcam-h408b'],
  },
};

export function findEquipment(industry: string, requirement: string) {
  const options = finderOptions[industry];
  if (!options || !Object.hasOwn(options, requirement)) throw new Error('Choose a valid industry and requirement.');
  return products.filter(p => options[requirement].includes(p.slug));
}
export function productBelongsToCategory(product: Product, categoryId: string) {
  return product.category === categoryId || product.categoryIds?.includes(categoryId) === true;
}
export const whatsAppUrl = (message: string) => `https://wa.me/919818320178?text=${encodeURIComponent(message)}`;
