import type { Product } from '@/lib/catalogue';

export const phase5Phase2bProducts: Product[] = [
  // =========================================================================
  // BRAND 1: LEICA GEOSYSTEMS (Surveying & Laser Measurement)
  // =========================================================================
  {
    slug: 'leica-disto-d5',
    aliases: ['disto-d5', 'leica-d5'],
    name: 'Leica DISTO™ D5 Outdoor Laser Distance Meter',
    brand: 'Leica Geosystems',
    category: 'surveying',
    image: 'leica-disto-d5',
    gallery: ['leica-disto-d5'],
    label: 'OUTDOOR LASER DISTANCE METER WITH POINTFINDER',
    summary: 'High-precision outdoor laser distance meter equipped with a 4x digital Pointfinder camera, gesture-triggered contactless measurement, 200-meter range, and Bluetooth 5.0 for direct transfer to CAD and GIS workflows.',
    specs: [
      ['Measuring Range', '0.05 m to 200 m (0.16 ft to 660 ft)'],
      ['Standard Accuracy', '±1.0 mm (ISO 16331-1 certified)'],
      ['Digital Pointfinder', 'High-resolution color camera with 4x digital zoom and target crosshairs'],
      ['Tilt Sensor', '360° high-precision digital inclination sensor with 0.1° resolution'],
      ['Special Functions', 'Gesture trigger measurement, Smart Horizontal, profile measurement, area/volume, P2P ready'],
      ['Wireless Connectivity', 'Bluetooth® 5.0 Smart interface for iOS, Android, and Windows CAD applications'],
      ['Display', '2.4-inch high-contrast color IPS display with scratch-resistant glass'],
      ['Battery System', 'Rechargeable Li-ion battery pack delivering up to 4,000 individual measurements per charge'],
      ['Environmental Sealing', 'IP54 dust and splash water protection'],
      ['Operating Temperature', '-10°C to +50°C (14°F to 122°F)']
    ],
    features: [
      'Digital Pointfinder with 4x zoom locates measurement targets clearly even under direct brilliant sunlight',
      'Contactless gesture trigger allows steady, vibration-free triggering without physically touching the device',
      'Integrated 360-degree tilt sensor calculates exact indirect horizontal distances past vegetation and barriers',
      'Bluetooth 5.0 connects directly with Leica DISTO Plan mobile software to generate instant 2D and 3D floorplans',
      'Tested and certified to ISO 16331-1 precision standards ensuring millimeter accuracy across real field conditions'
    ],
    page: 14,
    subcategories: ['geological-field-mapping', 'mining-survey', 'mining-distance'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['Laser Distance Meters', 'Surveying Equipment', 'Distance Measurement', 'Field Measurement']
  },
  {
    slug: 'leica-disto-x6',
    aliases: ['disto-x6', 'leica-x6'],
    name: 'Leica DISTO™ X6 Rugged Point-to-Point Laser Distance Meter',
    brand: 'Leica Geosystems',
    category: 'surveying',
    image: 'leica-disto-x6',
    gallery: ['leica-disto-x6'],
    label: 'EXTREME RUGGED P2P LASER DISTANCE METER',
    summary: 'Heavy-duty laser distance meter engineered for harsh construction sites and geological surveys, featuring IP65 waterproof housing, 2-meter drop survival, 250-meter range, and complete Point-to-Point 3D measurement capabilities.',
    specs: [
      ['Measuring Range', '0.05 m to 250 m (0.16 ft to 820 ft)'],
      ['Standard Accuracy', '±1.0 mm (ISO 16331-1 certified)'],
      ['Pointfinder Camera', 'Crystal-clear color camera with 4x digital zoom and automatic crosshairs'],
      ['3D Point-to-Point (P2P)', 'Full 3D spatial coordinate capture when paired with DST 360-X smart adapter'],
      ['Display', '2.8-inch high-clarity IPS touch display with scratch-resistant Dragontrail glass'],
      ['Durability Standard', 'IP65 dust-tight and water-jet protected; drop-tested from 2 meters onto solid concrete'],
      ['Data Memory', 'Stores 300 CAD / DXF measurement captures with timestamped 3D spatial points'],
      ['Data Interfaces', 'Bluetooth® 5.0 Smart, USB-C interface for data export and battery charging'],
      ['Power Autonomy', 'Internal high-capacity Li-ion battery providing up to 4,000 measurements per charge'],
      ['Operating Temperature', '-10°C to +50°C (14°F to 122°F)']
    ],
    features: [
      'Full Point-to-Point measurement calculates distance between any two remote points from a single standing position',
      'IP65 water-jet resistant and 2-meter drop-tested enclosure built to endure severe mud, downpours, and jobsite accidents',
      'Responsive 2.8-inch touch display provides fast zoom navigation and clear reading in adverse outdoor lighting',
      'Exports raw 3D spatial coordinates and DXF CAD data directly to mobile devices and office workstations',
      'Integrated multi-sensor core tracks horizontal and vertical angles simultaneously for advanced volume calculations'
    ],
    page: 14,
    subcategories: ['geological-field-mapping', 'mining-survey', 'mining-distance'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['Laser Distance Meters', 'Surveying Equipment', '3D Measurement', 'P2P Technology']
  },
  {
    slug: 'leica-na730-plus',
    aliases: ['leica-na730', 'na730-plus', 'na730'],
    name: 'Leica NA730 Plus Automatic Optical Level',
    brand: 'Leica Geosystems',
    category: 'surveying',
    image: 'leica-na730-plus',
    gallery: ['leica-na730-plus'],
    label: '30X PRECISION AUTOMATIC OPTICAL LEVEL',
    summary: 'Jobsite-proven 30x optical automatic level featuring a magnetically damped compensator, nitrogen-filled anti-fog optics, IP57 water resistance, and 0.7 mm standard deviation per 1 km double-run leveling.',
    specs: [
      ['Optical Magnification', '30x high-contrast erect telescope image'],
      ['Standard Deviation (1 km double-run)', '0.7 mm (with parallel plate micrometer) / 1.2 mm standard'],
      ['Objective Aperture', '40 mm diameter with anti-reflective optical coatings'],
      ['Shortest Focusing Distance', '0.7 m (2.3 ft) for precision near-field work'],
      ['Compensator System', 'Magnetically damped pendulum compensator with ±15 arc minute working range'],
      ['Setting Accuracy', '< 0.3 arc seconds'],
      ['Horizontal Circle', '360° / 400 gon graduations with continuous double-sided fine drive'],
      ['Environmental Protection', 'IP57 water submersible protection (dust and water immersion resistant)'],
      ['Gas Filling', 'Nitrogen-purged telescope barrel completely preventing internal condensation'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)']
    ],
    features: [
      'Precision 30x optical magnification resolves fine millimeter staff divisions across extended sight lengths',
      'Rugged magnetically dampened compensator automatically stabilizes the line of sight against heavy equipment vibration',
      'Nitrogen-purged sealed telescope tube prevents fogging and moisture ingress in high-humidity tropical conditions',
      'IP57 immersion-tested housing allows uninterrupted survey operations during heavy downpours and muddy trenching',
      'Friction-braked horizontal drive with endless fine motion screws enables fast, effortless target alignment'
    ],
    page: 15,
    subcategories: ['geological-field-mapping', 'mining-survey'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['Optical Levels', 'Auto Levels', 'Surveying Equipment', 'Precision Leveling']
  },
  {
    slug: 'leica-rugby-610',
    aliases: ['rugby-610', 'leica-rugby'],
    name: 'Leica Rugby 610 Rotating Laser Level',
    brand: 'Leica Geosystems',
    category: 'surveying',
    image: 'leica-rugby-610',
    gallery: ['leica-rugby-610'],
    label: 'ONE-BUTTON HORIZONTAL ROTATING LASER',
    summary: 'Ultra-tough horizontal self-leveling rotating laser level featuring simple one-button operation, IP67 waterproof construction, 600-meter working diameter, and long-lasting lithium-ion power for site elevation control.',
    specs: [
      ['Operating Range', '600 m (2,000 ft) diameter with Rod Eye digital receiver'],
      ['Self-Leveling Accuracy', '±2.0 mm at 30 m (±3/32 in at 100 ft)'],
      ['Self-Leveling Range', '±5° automatic horizontal self-leveling'],
      ['Rotation Speed', '10 rps (600 rpm) continuous horizontal plane'],
      ['Laser Diode Type', '635 nm visible red laser class 2 (< 1 mW)'],
      ['Housing Class', 'IP67 fully waterproof, dust-tight, and impact-resistant overmold chassis'],
      ['Drop Resistance', 'Survives 1.5-meter direct tripod knockdown onto hard ground'],
      ['Battery Options', 'Long-life Li-ion pack (up to 40 hours continuous runtime) or standard alkaline (up to 60 hours)'],
      ['Tripod Mount', 'Standard 5/8"-11 survey instrument thread'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)']
    ],
    features: [
      'Simple one-touch interface eliminates site setup errors and requires zero operator training to deploy',
      'IP67 military-grade sealed chassis operates reliably submerged under water and during relentless monsoon rains',
      'Generous 600-meter operational diameter covers extensive commercial grading and civil infrastructure projects',
      'Automatic elevation alert (H.I. warning) shuts down rotation if the tripod is bumped to prevent inaccurate grading',
      'Compatible with Rod Eye 140 Classic and Rod Eye 160 Digital receivers for instant millimeter elevation readout'
    ],
    page: 15,
    subcategories: ['geological-field-mapping', 'mining-survey'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['Rotating Lasers', 'Laser Levels', 'Surveying Equipment', 'Elevation Control']
  },

  // =========================================================================
  // BRAND 2: MOTOROLA SOLUTIONS (Tactical & Field Communications)
  // =========================================================================
  {
    slug: 'motorola-mototrbo-r7',
    aliases: ['mototrbo-r7', 'motorola-r7', 'r7-radio'],
    name: 'MOTOTRBO™ R7 Digital Portable Two-Way Radio',
    brand: 'Motorola Solutions',
    category: 'communication',
    image: 'motorola-mototrbo-r7',
    gallery: ['motorola-mototrbo-r7'],
    label: 'FLAGSHIP DIGITAL TWO-WAY TACTICAL RADIO',
    summary: 'Flagship DMR digital portable two-way radio featuring game-changing game-changing adaptive dual-microphone noise cancellation, loud 102-phon speaker output, IP68 submersibility, Wi-Fi 5, Bluetooth 5.2, and MIL-STD-810H ruggedness.',
    specs: [
      ['Frequency Bands', 'VHF (136–174 MHz) or UHF (400–527 MHz)'],
      ['Channel Capacity', 'Up to 1,000 channels with full numeric keypad and color display'],
      ['Audio Output & Loudness', 'Up to 102 phons loudness with dual-microphone Adaptive Dual Microphone Noise Suppression'],
      ['Digital Protocol', 'DMR Tier II Conventional, IP Site Connect, Capacity Plus, and Capacity Max trunking'],
      ['Wireless Connectivity', 'Wi-Fi 2.4/5.0 GHz (802.11 a/b/g/n/ac), Bluetooth® 5.2, and GNSS (GPS, GLONASS, Galileo, BeiDou)'],
      ['Battery Performance', 'IMPRES™ smart Li-ion battery providing up to 28 hours runtime (5/5/90 duty cycle)'],
      ['Ingress Protection', 'Dual rated IP66 (high-pressure water jets) and IP68 (submersion 2 meters for 2 hours)'],
      ['Military Specifications', 'MIL-STD-810 C/D/E/F/G/H certified for shock, drop, vibration, and extreme temperature'],
      ['Safety & Security', 'Man Down (Fall Alert), Lone Worker, emergency orange button, WPA3 Wi-Fi security, AES-256 encryption'],
      ['Dimensions & Weight', '132 × 56 × 35 mm; 316 g with slim battery']
    ],
    features: [
      'Advanced dual-microphone adaptive noise cancellation isolates user voice over roaring machinery and engine noise',
      'Ultra-loud 102-phon speaker with Automatic Acoustic Feedback Suppression ensures transmissions are heard in deafening environments',
      'Rugged IP66/IP68 dual sealing survives high-pressure decontamination hose-downs and full submersion in deep muddy water',
      'Integrated Wi-Fi 5 and Bluetooth 5.2 enable rapid wireless codeplug programming and connection to wireless tactical audio accessories',
      'Comprehensive safety suite includes automated Man Down sensor, Lone Worker timers, and hardware-accelerated AES-256 encryption'
    ],
    page: 20,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Field Communications', 'Tactical Radios', 'DMR']
  },
  {
    slug: 'motorola-mototrbo-dp4400e',
    aliases: ['mototrbo-dp4400e', 'motorola-dp4400e', 'dp4400e'],
    name: 'MOTOTRBO™ DP4400e Heavy-Duty Digital Two-Way Radio',
    brand: 'Motorola Solutions',
    category: 'communication',
    image: 'motorola-mototrbo-dp4400e',
    gallery: ['motorola-mototrbo-dp4400e'],
    label: 'HEAVY-DUTY INDUSTRIAL DMR PORTABLE RADIO',
    summary: 'Proven non-display digital two-way radio built for extreme field and industrial operations, delivering IP68 waterproof submersibility, intelligent audio adjustment, 32 channels, and IMPRES battery management.',
    specs: [
      ['Frequency Band Options', 'VHF (136–174 MHz) or UHF (403–527 MHz)'],
      ['Channel Capacity', '32 pre-programmed operational channels'],
      ['RF Power Output', 'VHF: 5W / 1W; UHF: 4W / 1W'],
      ['Audio Technology', 'Intelligent Audio automatically adjusts radio volume based on ambient background noise'],
      ['Operating Modes', 'Analogue conventional, DMR Tier II digital, IP Site Connect, Capacity Plus'],
      ['Ingress Protection', 'IP68 fully dust-tight and submersible to 2 meters for 2 hours in water'],
      ['Battery Autonomy', 'Up to 29 hours continuous duty on IMPRES high-capacity Li-ion battery'],
      ['Military Standard', 'MIL-STD-810 C/D/E/F/G compliance across 11 environmental parameters'],
      ['Dimensions & Weight', '130 × 55 × 36 mm; 355 g with standard IMPRES battery pack'],
      ['Operating Temperature', '-30°C to +60°C (-22°F to +140°F)']
    ],
    features: [
      'IP68 submersible casing survives 2 hours underwater at 2-meter depth and protects internal circuitry from industrial dust',
      'Intelligent Audio system monitors ambient jobsite sound levels and dynamically boosts volume to prevent missed calls',
      'Dual analog and digital operation provides smooth phased transitions from legacy analog fleets to modern DMR infrastructure',
      'IMPRES battery management optimizes charge cycles, extends overall cell longevity, and reports real-time battery health',
      'Programmable emergency button triggers priority emergency alert calls and broadcasts location alarms to command dispatch'
    ],
    page: 20,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Field Communications', 'Industrial Radios', 'DMR']
  },
  {
    slug: 'motorola-mototrbo-dp4801e',
    aliases: ['mototrbo-dp4801e', 'motorola-dp4801e', 'dp4801e'],
    name: 'MOTOTRBO™ DP4801e Full Keypad Digital Two-Way Radio',
    brand: 'Motorola Solutions',
    category: 'communication',
    image: 'motorola-mototrbo-dp4801e',
    gallery: ['motorola-mototrbo-dp4801e'],
    label: 'FULL KEYPAD DIGITAL PORTABLE RADIO WITH GPS',
    summary: 'High-tier DMR digital portable radio featuring a full alphanumeric keypad, 5-line color display, integrated multi-constellation GNSS, Bluetooth 4.0, integrated Wi-Fi, Man Down alert, and IP68 submersibility.',
    specs: [
      ['Frequency Coverage', 'VHF (136–174 MHz) or UHF (403–527 MHz)'],
      ['Channel Capacity', '1,000 channels with full alphanumeric keyboard and 5-line color display'],
      ['Display', 'High-contrast 5-line transflective color LCD with day/night modes'],
      ['Location Tracking', 'Integrated high-precision GNSS receiver tracking GPS and GLONASS constellations'],
      ['Wireless Connectivity', 'Integrated Bluetooth® 4.0 LE and integrated Wi-Fi for remote over-the-air codeplug updates'],
      ['Audio Output', '0.5W internal speaker with Intelligent Audio, Acoustic Feedback Suppressor, and IMPRES audio'],
      ['Durability Standard', 'IP68 submersible (2 m for 2 hours) and MIL-STD-810 C/D/E/F/G military certified'],
      ['Integrated Sensors', 'Built-in 3-axis accelerometer for automated Man Down / Fall Detection alarms'],
      ['Encryption & Privacy', 'Basic privacy, Enhanced 40-bit privacy, and optional AES-256 digital encryption'],
      ['Operating Temperature', '-30°C to +60°C (-22°F to +140°F)']
    ],
    features: [
      'Full keypad and 5-line color screen facilitate text messaging, work order ticket management, and contact directory dialing',
      'Integrated GPS/GLONASS sends precise real-time operative coordinates to dispatch consoles for fleet tracking and geofencing',
      'Built-in accelerometer initiates automated Man Down emergency alerts if a field operator falls or remains motionless',
      'Over-the-air Wi-Fi software management enables remote programming updates without physically retrieving radios from the field',
      'IP68 submersible sealing ensures relentless performance across heavy downpours, river crossings, and dust-choked mine sites'
    ],
    page: 20,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'GPS Radios', 'Field Communications', 'Tactical Radios']
  },
  {
    slug: 'motorola-sl1600',
    aliases: ['mototrbo-sl1600', 'motorola-sl-1600', 'sl1600'],
    name: 'MOTOTRBO™ SL1600 Ultra-Slim Portable Radio',
    brand: 'Motorola Solutions',
    category: 'communication',
    image: 'motorola-sl1600',
    gallery: ['motorola-sl1600'],
    label: 'ULTRA-SLIM PROFESSIONAL DMR FIELD RADIO',
    summary: 'Ultra-slim 22 mm profile portable two-way radio combining shatterproof Active View matrix LED display, Range Max advanced RF antenna design, dual digital/analog modes, and IP54 ruggedness for agile security and scouting teams.',
    specs: [
      ['Frequency Options', 'VHF (136–174 MHz) or UHF (403–470 MHz)'],
      ['Channel Capacity', '99 channels with fast top-channel rotary toggle'],
      ['Physical Profile', 'Ultra-slim 22 mm (0.9 in) body thickness; weight only 166 g with battery'],
      ['Display Technology', 'Shatterproof Active View matrix LED display integrated directly behind rugged radio casing'],
      ['Antenna Technology', 'Range Max patented internal antenna architecture maximizing RF range in compact body'],
      ['RF Power Output', 'VHF: 3W digital / 2W analog; UHF: 3W digital / 2W analog'],
      ['Battery Autonomy', 'Up to 14.6 hours digital runtime on slim 2,300 mAh Li-ion battery (5/5/90 duty cycle)'],
      ['Charging Interface', 'Standard Micro-USB port for flexible charging via vehicle adaptors, power banks, or wall plugs'],
      ['Ingress & Durability', 'IP54 dust and splash resistant; MIL-STD-810 C/D/E/F/G certified'],
      ['Operating Temperature', '-30°C to +60°C (-22°F to +140°F)']
    ],
    features: [
      'Ultra-thin 22 mm body slips easily into chest pockets and tactical vests without hindering movement or agility',
      'Innovative Active View display illuminates matrix LEDs through the radio housing to eliminate cracked screen vulnerabilities',
      'Range Max antenna design and high-sensitivity receiver deliver long-distance communication comparable to full-size radios',
      'Micro-USB charging interface allows field recharging using portable battery banks, vehicle sockets, and standard chargers',
      'Dual DMR digital and analog capability enables flawless cross-compatibility across mixed commercial radio networks'
    ],
    page: 21,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Slim Radios', 'Field Communications', 'DMR']
  },

  // =========================================================================
  // BRAND 3: SWAROVSKI OPTIK (Premium European Observation Optics)
  // =========================================================================
  {
    slug: 'swarovski-el-10x42',
    aliases: ['swarovski-el-10x42-swarovision', 'el-10x42'],
    name: 'SWAROVSKI OPTIK EL 10x42 Swarovision Binoculars',
    brand: 'Swarovski Optik',
    category: 'optics',
    image: 'swarovski-el-10x42',
    gallery: ['swarovski-el-10x42'],
    label: 'PREMIUM EUROPEAN 10X42 OBSERVATION BINOCULARS',
    summary: 'Legendary Austrian observation binoculars engineered with iconic open-bridge EL wrap-around grip, SWAROVISION field flattener lenses, 90% light transmission, and nitrogen-purged 4-meter waterproof magnesium chassis.',
    specs: [
      ['Magnification', '10x precision optical power'],
      ['Objective Lens Diameter', '42 mm high-transmission objective'],
      ['Field of View', '112 m at 1,000 m (336 ft at 1,000 yds / 6.4° apparent FOV)'],
      ['Optical System', 'SWAROVISION field flattener lenses with HD fluoride glass elements'],
      ['Optical Coatings', 'SWAROBRIGHT, SWAROTOP, SWARODUR, and SWAROCLEAN multi-coatings'],
      ['Light Transmission', '90% daylight light transmission value'],
      ['Exit Pupil & Eye Relief', '4.2 mm exit pupil; 20 mm generous eye relief with twist-in eyecups'],
      ['Close Focus Distance', '3.3 m (10.8 ft) for detailed short-range botanical and insect study'],
      ['Housing & Water Sealing', 'Magnesium alloy chassis with ergonomic EL wrap-around grip; waterproof to 4 m (13 ft)'],
      ['Operating Temperature', '-25°C to +55°C (-13°F to +131°F)']
    ],
    features: [
      'Field flattener lenses eliminate spherical aberration and maintain razor-sharp contrast right to the very outer edges of view',
      'Fluoride HD glass resolves minute plumage, fur patterns, and distant camouflage that ordinary glass fails to distinguish',
      'Proprietary open-bridge EL wrap-around design guarantees steady, single-handed grip even when wearing thick winter gloves',
      'SWAROCLEAN non-stick lens coating repels raindrops, resin, tree sap, and dust for effortless maintenance in the field',
      'Robust magnesium alloy body purged with inert nitrogen resists severe thermal shock and complete water immersion to 4 meters'
    ],
    page: 10,
    subcategories: ['defense-optics', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'defense', 'forestry'],
    tags: ['Binoculars', 'Observation Optics', 'European Optics', 'Wildlife Observation']
  },
  {
    slug: 'swarovski-nl-pure-10x42',
    aliases: ['nl-pure-10x42', 'swarovski-nl-pure'],
    name: 'SWAROVSKI OPTIK NL Pure 10x42 Binoculars',
    brand: 'Swarovski Optik',
    category: 'optics',
    image: 'swarovski-nl-pure-10x42',
    gallery: ['swarovski-nl-pure-10x42'],
    label: 'GROUNDBREAKING WIDE-FIELD OBSERVATION BINOCULARS',
    summary: 'Revolutionary flagship observation binoculars featuring the widest field of view in its class (133 m at 1,000 m), an ergonomic wasp-waist contour tailored to the human hand, SWAROVISION optics, and optional forehead rest support.',
    specs: [
      ['Magnification', '10x magnification'],
      ['Objective Lens Diameter', '42 mm aperture'],
      ['Field of View', '133 m at 1,000 m (399 ft at 1,000 yds / 7.6° field angle) — largest in 10x category'],
      ['Optical System', 'SWAROVISION field flattener lenses with fluorite HD optical elements'],
      ['Coating Technologies', 'SWAROBRIGHT, SWAROTOP, SWARODUR, and SWAROCLEAN coatings'],
      ['Light Transmission', '91% light transmission across the visible spectrum'],
      ['Eye Relief', '18 mm comfortable eye relief with multi-stop turnable eyecups'],
      ['Close Focus', '2.0 m (6.6 ft) for close-proximity macro observation'],
      ['Body Construction', 'Contoured ergonomic wasp-waist magnesium chassis; waterproof to 4 m (13 ft)'],
      ['Operating Temperature', '-25°C to +55°C (-13°F to +131°F)']
    ],
    features: [
      'Unrivaled 133-meter field of view virtually eliminates black border tunnels and delivers a fully immersive visual experience',
      'Wasp-waist contoured chassis fits the natural anatomy of the hand for effortlessly stable, fatigue-free prolonged scanning',
      'SWAROVISION field flattener technology ensures razor-sharp detail from the dead center all the way to the peripheral boundary',
      'Fluorite glass composition produces true-to-nature color fidelity and resolves microscopic plumage patterns in low twilight',
      'Compatible with the optional ergonomic FRP forehead rest providing tripod-like viewing steadiness during handheld operation'
    ],
    page: 10,
    subcategories: ['defense-optics', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'defense', 'forestry'],
    tags: ['Binoculars', 'Observation Optics', 'European Optics', 'Wide Angle Optics']
  },
  {
    slug: 'swarovski-atx-interior-85',
    aliases: ['swarovski-atx-85', 'atx-interior-85', 'atx-25-60x85'],
    name: 'SWAROVSKI OPTIK ATX 25-60x85 Spotting Scope System',
    brand: 'Swarovski Optik',
    category: 'optics',
    image: 'swarovski-atx-interior-85',
    gallery: ['swarovski-atx-interior-85'],
    label: 'MODULAR ANGLED OBSERVATION SPOTTING SCOPE',
    summary: 'Premium modular angled spotting scope system combining an 85 mm objective module with the ATX eyepiece module, featuring 25-60x magnification, SWAROVISION HD optics, and smooth single-handed zoom and focus operation.',
    specs: [
      ['Magnification Range', '25x to 60x continuous optical zoom'],
      ['Objective Lens Diameter', '85 mm high-aperture objective module'],
      ['Field of View', '41 m to 23 m at 1,000 m (124 ft to 68 ft at 1,000 yds)'],
      ['Exit Pupil Diameter', '3.4 mm to 1.4 mm'],
      ['Eye Relief', '20 mm across the entire zoom range'],
      ['Optical System', 'SWAROVISION field flattener lenses with high-definition fluoride glass'],
      ['Modular Design', 'Two-part separable system (eyepiece module + objective module) for compact transport'],
      ['Zoom & Focus Control', 'Adjacent co-axial focus and zoom rings located directly adjacent for one-handed adjustment'],
      ['Waterproofing', 'Nitrogen-filled; waterproof to 4 m (13 ft) depth'],
      ['Operating Temperature', '-25°C to +55°C (-13°F to +131°F)']
    ],
    features: [
      'Modular two-piece architecture allows objective and eyepiece modules to be detached for easy, safe transport in field packs',
      'Generous 85 mm objective lens gathers vast amounts of light, enabling critical target identification at dusk and dawn',
      'Co-axial zoom and focus rings allow rapid one-handed target tracking and sharp refocusing without releasing the scope',
      'Angled eyepiece configuration enables comfortable long-duration observation from low hides, tripods, and vehicle mounts',
      'Integrated rotating tripod collar with Arca-Swiss compatible foot locks seamlessly into professional pan-tilt heads'
    ],
    page: 11,
    subcategories: ['defense-optics', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'defense', 'forestry'],
    tags: ['Spotting Scopes', 'Observation Optics', 'European Optics', 'Long-Range Surveillance']
  },
  {
    slug: 'swarovski-cl-companion-8x30',
    aliases: ['cl-companion-8x30', 'swarovski-cl-companion'],
    name: 'SWAROVSKI OPTIK CL Companion 8x30 Compact Binoculars',
    brand: 'Swarovski Optik',
    category: 'optics',
    image: 'swarovski-cl-companion-8x30',
    gallery: ['swarovski-cl-companion-8x30'],
    label: 'COMPACT EXPEDITION OBSERVATION BINOCULARS',
    summary: 'Ultra-compact 490-gram Austrian expedition binoculars offering an expansive 132-meter field of view, bright 8x optical clarity, shock-absorbing rubber armor, and waterproof construction for agile mobile observation.',
    specs: [
      ['Magnification', '8x magnification power'],
      ['Objective Lens Diameter', '30 mm effective diameter'],
      ['Field of View', '132 m at 1,000 m (396 ft at 1,000 yds / 7.6° field angle)'],
      ['Light Transmission', '90% high optical transmission value'],
      ['Exit Pupil & Eye Relief', '3.8 mm exit pupil; 16 mm eye relief with twist-up eyecups'],
      ['Close Focus Distance', '3.0 m (9.8 ft)'],
      ['Weight & Form Factor', 'Ultralight 490 g (17.3 oz); compact 127 × 118 × 55 mm footprint'],
      ['Optical Coatings', 'SWAROBRIGHT, SWARODUR, and SWAROTOP multi-coatings'],
      ['Waterproofing', 'Nitrogen-purged, waterproof to 4 m (13 ft) water depth'],
      ['Operating Temperature', '-25°C to +55°C (-13°F to +131°F)']
    ],
    features: [
      'Featherweight 490 g profile ensures all-day neck comfort during grueling high-altitude and backcountry foot patrols',
      'Wide 132-meter field of view allows swift visual tracking of flying raptors and rapid situational awareness scans',
      'High 90% light transmission delivers vibrant, color-accurate imagery despite the compact 30 mm objective diameter',
      'Shock-absorbing textured rubber armoring provides secure grip in rain while shielding optical prisms from accidental bumps',
      'Nitrogen-purged airtight housing prevents internal glass fogging during dramatic temperature shifts in mountainous terrain'
    ],
    page: 11,
    subcategories: ['defense-optics', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'defense', 'forestry'],
    tags: ['Binoculars', 'Compact Binoculars', 'Observation Optics', 'European Optics']
  },

  // =========================================================================
  // BRAND 4: MINOX (Trail Cameras & Outdoor Optics)
  // =========================================================================
  {
    slug: 'minox-dtc-460',
    aliases: ['dtc-460', 'minox-460'],
    name: 'MINOX DTC 460 Slim Trail Camera',
    brand: 'MINOX',
    category: 'forestry',
    image: 'minox-dtc-460',
    gallery: ['minox-dtc-460'],
    label: 'ULTRA-SLIM COVERT WILDLIFE TRAIL CAMERA',
    summary: 'Ultra-flat 34 mm trail camera featuring interchangeable camouflage front panels that blend seamlessly into bark textures, 12 MP resolution, invisible 940 nm infrared flash, and rapid 0.7-second shutter trigger.',
    specs: [
      ['Photo Resolution', '12 MP, 8 MP, 5 MP interpolated / 2 MP native sensor'],
      ['Video Resolution', '1080p Full HD video recording with audio (15 or 30 fps)'],
      ['Trigger Speed', '0.7-second fast trigger response'],
      ['Infrared Flash', 'Invisible 940 nm black infrared LEDs with up to 15 m (50 ft) nighttime flash range'],
      ['PIR Motion Sensor', 'High-sensitivity passive infrared sensor with 60° detection angle'],
      ['Chassis Depth', 'Ultra-slim 34 mm depth with interchangeable snap-on camouflage front panels'],
      ['Display', '2.4-inch color TFT monitor integrated inside weatherproof door'],
      ['Storage', 'SD/SDHC memory card slot supporting cards up to 32 GB'],
      ['Power Supply', '8 × 1.5V AA batteries with up to 6 months standby battery life'],
      ['Weatherproofing', 'IP67 fully waterproof, dustproof, and corrosion resistant']
    ],
    features: [
      'Ultra-slim 34 mm depth hugs tree trunks flatly, preventing accidental discovery by trespassers or curious animals',
      'Interchangeable front camouflage panels easily swap to match birch bark, rough pine, or dense deciduous backgrounds',
      'Completely invisible 940 nm black infrared flash captures crisp nighttime wildlife behaviors without casting a visible glow',
      'Internal 2.4-inch color display allows immediate on-site image review and camera angle adjustment without a separate viewer',
      'Extremely low standby power consumption delivers up to six months of uninterrupted ecological research recording'
    ],
    page: 25,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Camera Traps', 'Trail Cameras', 'Wildlife Monitoring', 'Infrared Cameras']
  },
  {
    slug: 'minox-dtc-1200',
    aliases: ['dtc-1200', 'minox-1200-4g', 'minox-dtc-1200-4g'],
    name: 'MINOX DTC 1200 4G Cellular Trail Camera',
    brand: 'MINOX',
    category: 'forestry',
    image: 'minox-dtc-1200',
    gallery: ['minox-dtc-1200'],
    label: '4G LTE CLOUD TRANSMISSION TRAIL CAMERA',
    summary: 'State-of-the-art 4G LTE cellular trail camera equipped with an integrated multi-roaming SIM card and cloud app connectivity, delivering 20 MP photos, Full HD video, 60 black LEDs, and 0.6-second trigger speed.',
    specs: [
      ['Network Connectivity', '4G LTE cellular transmission with integrated pre-activated multi-roaming eSIM / SIM'],
      ['Photo Resolution', '20 MP, 16 MP, 12 MP, 8 MP, 5 MP high-resolution image captures'],
      ['Video Quality', '1080p Full HD video recording with clear sound recording'],
      ['Trigger Speed', '0.6-second ultra-responsive motion trigger time'],
      ['Night Flash', '60 high-efficiency 940 nm black LEDs providing up to 20 m (65 ft) illumination'],
      ['Display', '2.0-inch color TFT display for live menu navigation and image playback'],
      ['Cloud & App Management', 'MINOX Trail Cam smartphone app (iOS & Android) with automatic cloud photo push'],
      ['GPS Geotagging', 'Integrated GPS module embeds precise geographic coordinates onto every captured photo'],
      ['Power Requirements', '12 × AA batteries or external 12V DC power input'],
      ['Protection Class', 'IP67 fully waterproof and dustproof outdoor enclosure']
    ],
    features: [
      'Integrated multi-roaming SIM connects automatically to the strongest available cellular carrier across remote reserves',
      'Instant cloud photo transmission delivers real-time wildlife and perimeter alerts directly to smartphones and laptops',
      '60 invisible 940 nm black LEDs flood the nighttime scene without alerting poachers or spooking nocturnal fauna',
      'Built-in GPS geotagging stamps exact latitude, longitude, moon phase, and temperature data directly onto imagery',
      'IP67 weatherproof casing withstands relentless monsoons, snow, and extreme tropical humidity without moisture ingress'
    ],
    page: 25,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Cellular Trail Cameras', 'Camera Traps', '4G Surveillance', 'Wildlife Monitoring']
  },
  {
    slug: 'minox-x-active-8x44',
    aliases: ['minox-x-active', 'x-active-8x44'],
    name: 'MINOX X-active 8x44 All-Round Binoculars',
    brand: 'MINOX',
    category: 'optics',
    image: 'minox-x-active-8x44',
    gallery: ['minox-x-active-8x44'],
    label: 'ALL-ROUND OUTDOOR & FORESTRY BINOCULARS',
    summary: 'Versatile German-engineered binoculars featuring 8x magnification with high-light-gathering 44 mm objective lenses, an ergonomic open-bridge aluminum chassis, 136-meter field of view, and waterproof sealing down to 5 meters.',
    specs: [
      ['Magnification', '8x magnification power'],
      ['Objective Lens Diameter', '44 mm large-aperture objective'],
      ['Field of View', '136 m at 1,000 m (408 ft at 1,000 yds / 7.8° field angle)'],
      ['Twilight Factor', '18.7 for superior low-light evening observation'],
      ['Optical System', 'Phase-corrected roof prisms with multi-coated M* optical glass elements'],
      ['Exit Pupil & Eye Relief', '5.25 mm exit pupil; 19.5 mm eye relief with turnable eyecups'],
      ['Close Focus', '2.5 m (8.2 ft) for near-range tracking'],
      ['Chassis Material', 'Rugged, lightweight aluminum housing with ergonomic comfort bridge'],
      ['Waterproofing', 'Nitrogen-purged; waterproof down to 5.0 m (16.4 ft) water depth'],
      ['Operating Temperature', '-10°C to +50°C (14°F to 122°F)']
    ],
    features: [
      'Enlarged 44 mm objective lenses deliver substantially brighter images than standard 42 mm glass in dawn and dusk conditions',
      'Open comfort bridge design allows secure, non-slip single-handed grip during active foot trekking across rugged terrain',
      'Phase-corrected BaK-4 roof prisms with M* multi-coatings guarantee neutral color rendition and high-contrast acuity',
      'Nitrogen gas filling prevents internal optical fogging during abrupt temperature shifts between vehicles and humid forest air',
      'Waterproof sealing down to 5 meters ensures complete instrument survival if dropped into streams or flooded trenches'
    ],
    page: 26,
    subcategories: ['defense-optics', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'forestry'],
    tags: ['Binoculars', 'Observation Optics', 'Forestry Optics', 'All-Round Binoculars']
  },
  {
    slug: 'minox-x-lite-10x42',
    aliases: ['minox-x-lite', 'x-lite-10x42'],
    name: 'MINOX X-lite 10x42 Hunting & Nature Binoculars',
    brand: 'MINOX',
    category: 'optics',
    image: 'minox-x-lite-10x42',
    gallery: ['minox-x-lite-10x42'],
    label: 'LIGHTWEIGHT NATURE & PATROL BINOCULARS',
    summary: 'Lightweight 610-gram nature observation binoculars combining 10x magnification, neutral color reproduction, high contrast, nitrogen-filled waterproof polycarbonate housing, and twist-up eyecups for eyeglass wearers.',
    specs: [
      ['Magnification', '10x magnification'],
      ['Objective Lens Diameter', '42 mm objective diameter'],
      ['Field of View', '106 m at 1,000 m (318 ft at 1,000 yds / 6.1° field angle)'],
      ['Twilight Factor', '20.5 for detailed twilight resolution'],
      ['Exit Pupil & Eye Relief', '4.2 mm exit pupil; 15 mm eye relief with turnable twist-up eyecups'],
      ['Close Focus Distance', '3.2 m (10.5 ft)'],
      ['Chassis Material', 'Shock-resistant lightweight polycarbonate housing with protective rubber armor'],
      ['Optical Quality', 'Fully multi-coated optics with phase-corrected roof prism system'],
      ['Waterproofing', 'Nitrogen-filled; waterproof to IPX7 standards (1 m submersion for 30 minutes)'],
      ['Operating Temperature', '-10°C to +50°C (14°F to 122°F)']
    ],
    features: [
      'Lightweight 610 g polycarbonate housing reduces carry fatigue during extended wilderness expeditions and boundary surveys',
      '10x magnification brings distant wildlife, suspicious movement, and forestry landmarks into sharp, distinct focus',
      'High-contrast fully multi-coated optics render vivid, true-to-life colors across mixed open terrain and canopy shade',
      'Turnable twist-up eyecups with multiple click-stops provide complete, unvignetted field of view for spectacle wearers',
      'IPX7 waterproof construction withstands torrential rainstorms, high humidity, and accidental puddle immersion'
    ],
    page: 26,
    subcategories: ['defense-optics', 'wildlife-monitoring-surveillance'],
    categoryIds: ['optics', 'forestry'],
    tags: ['Binoculars', 'Observation Optics', 'Lightweight Binoculars', 'Nature Observation']
  },

  // =========================================================================
  // BRAND 5: SEEK THERMAL (High-Performance Thermal Imaging)
  // =========================================================================
  {
    slug: 'seek-thermal-reveal-pro',
    aliases: ['seek-reveal-pro', 'revealpro', 'reveal-pro'],
    name: 'Seek Thermal RevealPRO Handheld Thermal Imaging Camera',
    brand: 'Seek Thermal',
    category: 'thermal',
    image: 'seek-thermal-reveal-pro',
    gallery: ['seek-thermal-reveal-pro'],
    label: 'STANDALONE HIGH-RESOLUTION THERMAL CAMERA',
    summary: 'High-resolution handheld thermal imaging camera featuring a 320 × 240 thermal sensor (76,800 pixels), wide 32° field of view, 550-meter detection range, integrated 300-lumen LED flashlight, and Level and Span temperature isolation.',
    specs: [
      ['Thermal Sensor Resolution', '320 × 240 (76,800 temperature measurement pixels)'],
      ['Detection Distance', 'Up to 550 m (1,800 ft) thermal target detection range'],
      ['Field of View (FOV)', '32° horizontal field of view'],
      ['Temperature Range', '-40°C to +330°C (-40°F to +626°F)'],
      ['Frame Rate', 'FastFrame > 15 Hz for smooth real-time scanning'],
      ['Display', '2.4-inch color display with durable Corning® Gorilla® Glass lens'],
      ['Integrated Worklight', 'High-output 300-lumen LED flashlight with independent controls'],
      ['Measurement Tools', 'Spot temperature, Level and Span control, customizable emissivity, 9 color palettes'],
      ['Battery Autonomy', 'Internal rechargeable Li-ion battery providing up to 4 hours continuous thermal runtime'],
      ['Internal Storage', '4 GB internal memory storing up to 4,000 thermal radiometric images']
    ],
    features: [
      'True 320 × 240 thermal sensor delivers 76,800 individual temperature measurement pixels for extraordinary image clarity',
      'Level and Span controls allow operators to isolate critical temperature ranges and identify hidden heat anomalies immediately',
      'Detects human and animal thermal signatures out to 550 meters in total darkness, dense fog, and dense undergrowth',
      'Corning Gorilla Glass display and rugged overmolded rubber housing withstand rough field handling and heavy drops',
      'Integrated 300-lumen tactical LED flashlight provides immediate visible illumination at the touch of a single button'
    ],
    page: 45,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-night', 'defense-surveillance'],
    categoryIds: ['thermal', 'forestry', 'defense'],
    tags: ['Thermal Cameras', 'Thermal Imaging', 'Handheld Thermal', 'Night Observation']
  },
  {
    slug: 'seek-thermal-reveal-firepro-x',
    aliases: ['seek-firepro-x', 'reveal-firepro', 'firepro-x'],
    name: 'Seek Thermal Reveal FirePRO X Tactical Thermal Camera',
    brand: 'Seek Thermal',
    category: 'thermal',
    image: 'seek-thermal-reveal-firepro-x',
    gallery: ['seek-thermal-reveal-firepro-x'],
    label: 'TACTICAL SEARCH & RESCUE THERMAL IMAGER',
    summary: 'Rugged personal tactical thermal imaging camera engineered for extreme heat environments and search and rescue, featuring a 320 × 240 thermal sensor, IP67 waterproof rating, 300-lumen light, and one-touch image capture.',
    specs: [
      ['Thermal Sensor', '320 × 240 VOx microbolometer (76,800 pixels)'],
      ['Field of View', '32° wide field of view for room-clearing situational awareness'],
      ['Detection Range', '12 inches to 1,800 feet (0.3 m to 550 m)'],
      ['Temperature Range', '-20°C to +550°C (-4°F to +1,022°F) high-temperature operational range'],
      ['Thermal Sensitivity', '< 70 mK (0.07°C) NEDT sensitivity'],
      ['Frame Rate', '> 15 Hz FastFrame motion tracking'],
      ['Durability & Ingress', 'IP67 fully waterproof and dustproof; engineered to withstand extreme radiant heat and 2-meter drops'],
      ['Display', '2.4-inch high-contrast display with scratch-resistant Corning® Gorilla® Glass'],
      ['Tactical Flashlight', 'Integrated 300-lumen LED worklight with strobe capability'],
      ['Battery Performance', 'Rechargeable lithium battery providing up to 3.5 hours continuous thermal imaging']
    ],
    features: [
      'High-resolution 320 × 240 thermal core cuts through blinding smoke, dust storms, and total darkness to locate victims',
      'IP67 waterproof rating and ruggedized high-temperature chassis withstand harsh tactical operations and chemical washdowns',
      'One-touch image recording captures radiometric evidence images instantly to internal memory for post-incident reporting',
      'Three dedicated operational modes (Color, Survey, and Fire) optimize color contrast for specific search and rescue scenarios',
      'Compact ergonomic form factor mounts securely onto gear harnesses or slips into turnout gear pockets for rapid deployment'
    ],
    page: 45,
    subcategories: ['defense-night', 'defense-surveillance', 'defense-field-operations'],
    categoryIds: ['thermal', 'defense'],
    tags: ['Thermal Cameras', 'Search and Rescue', 'Tactical Thermal', 'Firefighting Cameras']
  },
  {
    slug: 'seek-thermal-compactpro',
    aliases: ['seek-compact-pro', 'compactpro', 'compact-pro'],
    name: 'Seek Thermal CompactPRO Smartphone High-Resolution Thermal Imager',
    brand: 'Seek Thermal',
    category: 'thermal',
    image: 'seek-thermal-compactpro',
    gallery: ['seek-thermal-compactpro'],
    label: 'HIGH-RESOLUTION SMARTPHONE THERMAL IMAGING CAMERA',
    summary: 'High-resolution smartphone thermal camera featuring a 320 × 240 thermal core, 32° FOV, 550-meter range, -40°C to 330°C temperature measurement, and direct USB-C connection for immediate thermal inspection on mobile devices.',
    specs: [
      ['Thermal Sensor Resolution', '320 × 240 (76,800 measurement pixels)'],
      ['Detection Range', 'Up to 550 m (1,800 ft) detection; 150 m identification range'],
      ['Field of View (FOV)', '32° horizontal field of view with adjustable focus lens'],
      ['Temperature Range', '-40°C to +330°C (-40°F to +626°F)'],
      ['Frame Rate', '< 9 Hz (compliant with international export regulations) / 15 Hz FastFrame variant'],
      ['Lens Focus', 'Manual focusable optical element for pinpoint sharpness from 6 inches to infinity'],
      ['Device Interface', 'Direct USB-C connection compatible with Android and iOS smartphones and tablets'],
      ['Software Features', 'Radiometric temperature recording, high/low delta alerts, Level & Span, 9 color palettes'],
      ['Power Supply', 'Low-power design powered directly from connected smartphone battery (no external charging needed)'],
      ['Housing Construction', 'Durable magnesium alloy housing with protective waterproof pocket carry case']
    ],
    features: [
      'Turns standard Android and iOS mobile devices into professional 76,800-pixel thermal radiometric inspection tools',
      'Adjustable focus lens allows operators to focus sharply on micro-circuitry inches away or scan forest perimeters 500 meters out',
      'Comprehensive mobile app provides professional radiometric temperature measurement, spot probes, and report generation',
      'Draws minimal power directly from the host phone port, ensuring the camera is always ready without charging separate batteries',
      'Solid magnesium housing survives demanding field drops and fits easily into uniform pockets inside its waterproof carry case'
    ],
    page: 46,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-night', 'inspection-equipment'],
    categoryIds: ['thermal', 'inspection', 'forestry'],
    tags: ['Thermal Cameras', 'Mobile Thermal', 'Smartphone Thermal', 'Radiometric Inspection']
  },
  {
    slug: 'seek-thermal-attackpro',
    aliases: ['seek-attackpro', 'attackpro', 'attack-pro'],
    name: 'Seek Thermal AttackPRO Heavy-Duty Decision-Making Thermal Imager',
    brand: 'Seek Thermal',
    category: 'thermal',
    image: 'seek-thermal-attackpro',
    gallery: ['seek-thermal-attackpro'],
    label: 'DECISION-MAKING TACTICAL THERMAL IMAGER',
    summary: 'Heavy-duty decision-making tactical thermal camera featuring a 320 × 240 thermal core, revolutionary Mixed Gain technology, wide 57° field of view, ergonomic pistol grip, and durable IP67 high-heat construction.',
    specs: [
      ['Thermal Sensor', '320 × 240 uncooled VOx microbolometer (76,800 pixels)'],
      ['Mixed Gain Technology', 'Simultaneously displays high and low temperature regions in razor detail without mode switching'],
      ['Field of View', '57° ultra-wide horizontal field of view for comprehensive spatial awareness'],
      ['Temperature Range', '-20°C to +550°C (-4°F to +1,022°F)'],
      ['Frame Rate', '25 Hz high-speed real-time refresh rate'],
      ['Durability Standards', 'IP67 fully waterproof; survives direct 2-meter drops and severe radiant heat exposure'],
      ['Display', '3.5-inch high-contrast sunlight-readable display with Gorilla Glass protection'],
      ['Form Factor', 'Ergonomic pistol-grip handle engineered for gloved tactical operation'],
      ['Battery Performance', 'Quick-swap lithium-ion battery delivering up to 6 hours continuous operation'],
      ['Integrated Worklight', '300-lumen wide-beam LED illumination light']
    ],
    features: [
      'Mixed Gain technology renders hot fire and cool structural surroundings simultaneously without losing peripheral detail',
      'Expansive 57-degree field of view lets operators inspect entire rooms and forest tree lines in a single glance',
      'Ergonomic pistol grip with balanced weight distribution is effortlessly operated with heavy tactical and firefighting gloves',
      'High 25 Hz frame rate delivers fluid, lag-free thermal video during fast-paced tactical entries and rescue operations',
      'Rugged IP67 housing survives extreme thermal shock, torrential rainstorms, and impact against solid concrete'
    ],
    page: 46,
    subcategories: ['defense-night', 'defense-surveillance', 'defense-field-operations'],
    categoryIds: ['thermal', 'defense'],
    tags: ['Thermal Cameras', 'Tactical Thermal', 'Search and Rescue', 'Decision Making Cameras']
  },

  // =========================================================================
  // BRAND 6: OPEN ACOUSTIC DEVICES (Bioacoustics & Acoustic Logging)
  // =========================================================================
  {
    slug: 'hydromoth',
    aliases: ['hydromoth-logger', 'underwater-audiomoth'],
    name: 'HydroMoth Autonomous Underwater Acoustic Logger',
    brand: 'Open Acoustic Devices',
    category: 'forestry',
    image: 'hydromoth',
    gallery: ['hydromoth'],
    label: 'AUTONOMOUS UNDERWATER BIOACOUSTIC LOGGER',
    summary: 'Specialized underwater autonomous acoustic logger engineered for marine bioacoustics and freshwater ecology, recording up to 384 kHz sample rate with low clock drift and an integrated magnetic reed switch for wet-environment control.',
    specs: [
      ['Acoustic Sample Rates', '8, 16, 32, 48, 96, 192, 250, 384 kHz full-spectrum audio recording'],
      ['Hydrophone / Sensor', 'Integrated low-noise MEMS acoustic sensor with high ultrasonic bandwidth response'],
      ['Clock Stability', 'Precision temperature-compensated 32.768 kHz MEMS oscillator with ultra-low clock drift'],
      ['Switching Mechanism', 'Internal magnetic reed switch enabling contactless power and recording control without opening case'],
      ['Storage Media', 'MicroSD card slot supporting FAT32 cards up to 128 GB and beyond'],
      ['Audio Format', 'Uncompressed 16-bit PCM WAV audio files with configurable gain settings'],
      ['Power Supply', '3 × AA alkaline or NiMH rechargeable batteries; external power connector'],
      ['Enclosure Compatibility', 'Designed for official HydroMoth underwater pressure housing rated to deep aquatic deployments'],
      ['Indicator LEDs', 'Re-positioned high-visibility diagnostic LEDs visible through thick aquatic casings'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)']
    ],
    features: [
      'Records full-spectrum aquatic audio up to 384 kHz to capture cetacean echolocation, snapping shrimp, and fish vocalizations',
      'Built-in magnetic reed switch allows researchers to start, stop, or check status using an external magnet in wet environments',
      'Upgraded precision MEMS oscillator minimizes clock drift across prolonged underwater submersions and cold water thermoclines',
      'Configurable bandpass filters and threshold triggering record target vocalizations while preserving battery and storage',
      'Seamlessly integrated with open-source AudioMoth Configuration App and Flash App for rapid schedule programming'
    ],
    page: 44,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics', 'Acoustic Loggers', 'Underwater Bioacoustics', 'Marine Research']
  },
  {
    slug: 'audiomoth-ipx7-waterproof-case',
    aliases: ['audiomoth-case', 'audiomoth-waterproof-case', 'audiomoth-housing'],
    name: 'AudioMoth Official IPX7 Waterproof Field Enclosure',
    brand: 'Open Acoustic Devices',
    category: 'forestry',
    image: 'audiomoth-ipx7-waterproof-case',
    gallery: ['audiomoth-ipx7-waterproof-case'],
    label: 'IPX7 WEATHERPROOF ACOUSTIC DEPLOYMENT ENCLOSURE',
    summary: 'Precision-engineered injection-molded polycarbonate protective field case designed specifically for AudioMoth 1.0, 1.1, and 1.2 loggers, featuring an acoustic vent membrane, compression O-ring, and tree-mount strap loops.',
    specs: [
      ['Compatibility', 'AudioMoth 1.0.0, 1.1.0, 1.2.0, and AudioMoth GPS hardware variants'],
      ['Ingress Protection Rating', 'IPX7 waterproof rating (submersible to 1 meter depth for 30 minutes)'],
      ['Acoustic Vent Membrane', 'High-performance ePTFE protective acoustic membrane allowing sound passage while blocking liquid water'],
      ['Material', 'Impact-resistant UV-stabilized polycarbonate with secure stainless steel clasp closure'],
      ['Sealing Mechanism', 'Precision-molded silicone compression O-ring gasket preventing moisture and insect ingress'],
      ['Mounting Options', 'Dual rear strap loops for standard 25 mm webbing and integrated zip-tie slots for tree trunks'],
      ['Internal Security', 'Snug internal ribbing holds AudioMoth firmly in place without microphone distortion'],
      ['Dimensions & Weight', '95 × 60 × 35 mm; 70 g lightweight construction'],
      ['Environmental Durability', 'Resists tropical downpours, salt spray, direct UV sunlight, and extreme forest humidity'],
      ['Operating Temperature', '-30°C to +70°C (-22°F to +158°F)']
    ],
    features: [
      'Acoustic membrane vent permits full-spectrum audio capture from audible to ultrasound while totally sealing against rain',
      'IPX7 submersible rating safeguards sensitive circuit boards against flash floods, torrential downpours, and condensation',
      'Rugged UV-stabilized polycarbonate chassis survives harsh tropical field deployments and abrasive tree bark contact',
      'Integrated strap loops and zip-tie channels provide secure, theft-resistant attachment to branches, fenceposts, and tripods',
      'Easy-to-operate stainless steel latch mechanism allows swift battery and SD card replacement during rapid field service'
    ],
    page: 44,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Acoustic Enclosures', 'AudioMoth Accessories', 'Waterproof Cases', 'Bioacoustics']
  },
  {
    slug: 'audiomoth-gps',
    aliases: ['audiomoth-gps-logger', 'audiomoth-gps-hat'],
    name: 'AudioMoth GPS Autonomous Acoustic Logger',
    brand: 'Open Acoustic Devices',
    category: 'forestry',
    image: 'audiomoth-gps',
    gallery: ['audiomoth-gps'],
    label: 'GPS-SYNCHRONIZED AUTONOMOUS ACOUSTIC LOGGER',
    summary: 'GPS-synchronized autonomous bioacoustic logger featuring sub-microsecond time alignment, automated spatial coordinate logging, and full-spectrum recording for acoustic localization and Time Difference of Arrival (TDoA) arrays.',
    specs: [
      ['Time Synchronization', 'Sub-microsecond (< 1 µs) time synchronization derived from integrated GNSS timing pulses'],
      ['GNSS Receiver', 'High-sensitivity multi-constellation GPS / GLONASS receiver module with active patch antenna'],
      ['Acoustic Sample Rates', 'Configurable from 8 kHz up to 384 kHz full-spectrum uncompressed audio recording'],
      ['Microphone Sensor', 'Low-noise analog MEMS microphone with configurable analog preamplifier gain'],
      ['Data Logging', 'Embeds precise geographic coordinates (latitude, longitude, altitude) and UTC timestamps directly into WAV metadata'],
      ['Clock Drift Correction', 'Continuous GPS clock disciplining eliminates crystal drift during long multi-month deployments'],
      ['Storage Interface', 'MicroSD card slot supporting high-speed FAT32 memory cards up to 128 GB and higher'],
      ['Power Requirements', '3 × AA alkaline or NiMH cells; optional external solar / battery input'],
      ['Array Application', 'Engineered for Time Difference of Arrival (TDoA) acoustic localization and animal tracking arrays'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)']
    ],
    features: [
      'Sub-microsecond GPS time synchronization enables precise multi-station acoustic triangulation and 3D flight path mapping',
      'Automatically logs exact satellite coordinates and UTC time directly into WAV file headers for automated GIS analysis',
      'Discipline circuitry corrects local crystal oscillator drift, ensuring perfect synchronization across entire sensor arrays',
      'Full-spectrum recording up to 384 kHz captures everything from low-frequency elephant rumbles to high-frequency bat echolocation',
      'Low-power sleep scheduling wakes the GPS receiver periodically to refresh clock calibration without exhausting field batteries'
    ],
    page: 44,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics', 'Acoustic Loggers', 'GPS Acoustic', 'Acoustic Localization']
  },
  {
    slug: 'audiomoth-usb-microphone',
    aliases: ['audiomoth-usb', 'audiomoth-dev-mic', 'audiomoth-microphone'],
    name: 'AudioMoth USB High-Speed Acoustic Monitoring Microphone',
    brand: 'Open Acoustic Devices',
    category: 'forestry',
    image: 'audiomoth-usb-microphone',
    gallery: ['audiomoth-usb-microphone'],
    label: 'HIGH-SPEED USB ACOUSTIC & ULTRASONIC SENSOR',
    summary: 'High-speed configurable USB acoustic and ultrasonic microphone supporting real-time audio streaming up to 384 kHz, digital filtering, and direct connection to laptops, Raspberry Pi field stations, and automated acoustic monitoring networks.',
    specs: [
      ['Streaming Sample Rates', '192 kHz, 250 kHz, 384 kHz, and standard audio rates (48 kHz / 96 kHz) over USB'],
      ['Acoustic Sensor', 'High-sensitivity analog MEMS microphone with flat frequency response into ultrasonic frequencies'],
      ['Interface', 'Standard USB 2.0 full-speed interface compliant with USB Audio Class (UAC) standards'],
      ['Host Compatibility', 'Plug-and-play operation with Windows, macOS, Linux, and Raspberry Pi OS (no proprietary drivers required)'],
      ['Real-Time Software', 'Supported by AudioMoth Live App for live scrolling spectrogram and waveform displays'],
      ['Digital Filtering', 'User-configurable low-pass, high-pass, and bandpass hardware and software filtering options'],
      ['Power Consumption', 'Bus-powered directly from host USB connection (5V DC, < 100 mA)'],
      ['Audio Quality', '16-bit uncompressed high-fidelity PCM audio stream'],
      ['Form Factor', 'Compact board form factor with protective housing and tripod mounting threading'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)']
    ],
    features: [
      'Streams real-time full-spectrum acoustic data up to 384 kHz directly to field laptops and automated processing nodes',
      'Standard USB Audio Class compatibility allows immediate integration into custom Python, Audacity, and Raven audio workflows',
      'Low power draw allows months of continuous autonomous monitoring when paired with Raspberry Pi and miniature solar units',
      'AudioMoth Live App provides real-time scrolling spectrograms for interactive bat detection and biodiversity demonstrations',
      'Ideal for fixed ecological monitoring towers, laboratory acoustic chambers, and insect bioacoustic analysis'
    ],
    page: 45,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry'],
    tags: ['Bioacoustics', 'USB Microphones', 'Ultrasonic Microphones', 'Acoustic Sensors']
  },

  // =========================================================================
  // BRAND 7: KEEPGUARD (Trail Cameras & Wildlife Surveillance)
  // =========================================================================
  {
    slug: 'keepguard-kg795',
    aliases: ['keepguard-795', 'kg795'],
    name: 'KeepGuard KG795 HD Fast-Trigger Camera Trap',
    brand: 'KeepGuard',
    category: 'forestry',
    image: 'keepguard-kg795',
    gallery: ['keepguard-kg795'],
    label: 'HIGH-SPEED HD NON-CELLULAR CAMERA TRAP',
    summary: 'High-speed professional camera trap engineered for rigorous wildlife research and perimeter security, delivering 30 MP photos, 1080p Full HD video, a blistering 0.25-second trigger speed, and invisible 940 nm No-Glow night flash.',
    specs: [
      ['Photo Resolution', '30 MP, 24 MP, 20 MP, 16 MP, 8 MP, 5 MP high-definition image sensor'],
      ['Video Resolution', '1080p Full HD video (1920 × 1080) with clear audio recording'],
      ['Trigger Speed', 'Ultra-fast 0.25-second motion trigger response time'],
      ['Detection Range', 'Up to 30 m (100 ft) multi-zone PIR motion detection range'],
      ['Night Vision Flash', '48 high-output 940 nm No-Glow black infrared LEDs (invisible to humans and wildlife)'],
      ['Flash Range', 'Up to 25 m (85 ft) night illumination distance'],
      ['Display Screen', '2.4-inch color LCD display for field image review and intuitive menu setup'],
      ['Memory Capacity', 'SD / SDHC memory card slot supporting up to 64 GB storage'],
      ['Power Configuration', '8 × AA batteries or external 12V DC input; up to 12 months standby autonomy'],
      ['Weatherproofing Rating', 'IP67 fully waterproof, dustproof, and corrosion resistant']
    ],
    features: [
      'Blistering 0.25-second trigger speed captures fast-moving animals and vehicles squarely in frame without edge blur',
      '48 invisible 940 nm No-Glow LEDs provide bright, balanced night illumination without emitting any visible red glow',
      'High-resolution 30 MP still capture and Full HD video document subtle animal markings, ear tags, and license plates',
      'IP67 sealed rugged housing protects sensitive electronics from heavy monsoon deluges, mud splashes, and deep dust storms',
      'Built-in 2.4-inch color LCD enables instant on-site footage review and precise aiming alignment without carrying a laptop'
    ],
    page: 32,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Camera Traps', 'Trail Cameras', 'Wildlife Monitoring', 'Anti-Poaching']
  },
  {
    slug: 'keepguard-kw561',
    aliases: ['keepguard-561', 'kw561'],
    name: 'KeepGuard KW561 Dual-Sensor Wildlife Trail Camera',
    brand: 'KeepGuard',
    category: 'forestry',
    image: 'keepguard-kw561',
    gallery: ['keepguard-kw561'],
    label: 'COMPACT DUAL-SENSOR WILDLIFE TRAIL CAMERA',
    summary: 'Compact stealth scouting camera featuring dedicated dual daytime and nighttime optical sensors, 30 MP image capture, 1080p 60fps video, 0.25-second trigger time, and an ultra-covert owl-inspired compact form factor.',
    specs: [
      ['Dual Sensor System', 'Dedicated high-dynamic daytime color sensor + specialized high-sensitivity nighttime monochrome sensor'],
      ['Photo Resolution', '30 MP, 16 MP, 5 MP high-resolution still capture'],
      ['Video Quality', '1080p Full HD video recording at smooth 60 frames per second with sound'],
      ['Trigger Speed', '0.25-second instant motion trigger time'],
      ['Infrared Flash', '48 pcs invisible 940 nm No-Glow black infrared LEDs'],
      ['Detection & Flash Range', 'Up to 25 m (82 ft) motion detection and night illumination range'],
      ['Form Factor', 'Ultra-compact mini body (125 × 90 × 50 mm) for discreet placement in dense foliage'],
      ['Display', 'Internal 2.0-inch color TFT screen for setup and playback'],
      ['Power Requirements', '8 × AA batteries with ultra-low standby current (< 0.15 mA) delivering up to 8 months standby'],
      ['Weatherproofing', 'IP67 waterproof and weather-sealed against harsh climatic exposure']
    ],
    features: [
      'Dual dedicated sensors deliver rich, true-to-life daytime color and grain-free, high-contrast night vision recordings',
      'Ultra-compact stealth body is easily concealed in tree forks and rocky outcrops where standard cameras are easily spotted',
      'Smooth 1080p 60fps video recording captures fast wingbeats and swift predator sprints without motion judder',
      'Completely dark 940 nm infrared LEDs illuminate nocturnal scenes invisibly, preventing camera theft and animal avoidance',
      'IP67 sealed exterior endures driving torrential rain, swamp humidity, and extreme seasonal temperature swings'
    ],
    page: 32,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Camera Traps', 'Trail Cameras', 'Wildlife Monitoring', 'Dual Sensor Cameras']
  },
  {
    slug: 'keepguard-kw571-4g',
    aliases: ['keepguard-571', 'kw571', 'keepguard-kw571'],
    name: 'KeepGuard KW571 4G Live Video Streaming Trail Camera',
    brand: 'KeepGuard',
    category: 'forestry',
    image: 'keepguard-kw571-4g',
    gallery: ['keepguard-kw571-4g'],
    label: '4G LIVE VIDEO STREAMING CELLULAR TRAIL CAMERA',
    summary: 'Advanced 4G cellular trail camera capable of live on-demand video streaming, two-way audio communication, 30 MP photo capture, 1080p video, cloud storage push, and solar panel power integration for remote anti-poaching.',
    specs: [
      ['Cellular Connectivity', '4G LTE multi-band cellular module supporting live video streaming and cloud data transmission'],
      ['Live Stream Protocol', 'Real-time on-demand video feed via mobile app with two-way voice intercom'],
      ['Photo Resolution', '30 MP, 24 MP, 16 MP, 8 MP still image capture'],
      ['Video Quality', '1080p Full HD video recording at 30 fps with sound'],
      ['Trigger Speed', '0.3-second rapid motion trigger response'],
      ['Night Vision', '48 high-performance 940 nm invisible infrared LEDs (up to 25 m range)'],
      ['PIR Motion Sensor', 'Multi-zone passive infrared motion sensor with 65° wide field of detection'],
      ['App & Cloud Integration', 'Dedicated mobile app (iOS & Android) with instantaneous push notifications and remote setting changes'],
      ['Power Options', '8 × AA batteries, external 12V DC input, or dedicated solar panel charging kit'],
      ['Environmental Sealing', 'IP67 waterproof, dust-tight, and corrosion-resistant construction']
    ],
    features: [
      'Real-time 4G live video streaming allows control center operators to inspect remote forest sites on demand',
      'Instant cellular push notifications deliver captured photos and video clips to mobile phones within seconds of triggering',
      'Two-way voice communication enables remote audio broadcast to warn off trespassers or instruct field rangers',
      'Compatible with external solar panels for perpetual, maintenance-free perimeter surveillance in deep forest reserves',
      'Covert 940 nm No-Glow infrared night vision records nocturnal intruders without casting any detectable light'
    ],
    page: 33,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Cellular Trail Cameras', '4G Surveillance', 'Live Streaming Cameras', 'Anti-Poaching']
  },
  {
    slug: 'keepguard-kg891',
    aliases: ['keepguard-891', 'kg891'],
    name: 'KeepGuard KG891 Dual-Lens Night Vision Camera Trap',
    brand: 'KeepGuard',
    category: 'forestry',
    image: 'keepguard-kg891',
    gallery: ['keepguard-kg891'],
    label: 'DUAL-LENS PROFESSIONAL WILDLIFE CAMERA TRAP',
    summary: 'Professional-grade dual-lens camera trap featuring independent optical pathways for day and night, 32 MP photo resolution, 4K video recording, 0.25-second trigger, and 30-meter detection range for ecological surveys.',
    specs: [
      ['Optical System', 'Dual optical lens system with separate calibrated daytime and nocturnal sensors'],
      ['Photo Resolution', '32 MP, 20 MP, 14 MP, 5 MP high-definition image capture'],
      ['Video Resolution', '4K Ultra HD (3840 × 2160) at 30 fps and 1080p at 60 fps with audio'],
      ['Trigger Speed', '0.25-second ultra-responsive motion trigger time'],
      ['Infrared Flash', '48 pcs 940 nm invisible black infrared LEDs with up to 30 m (100 ft) night illumination'],
      ['Detection Range', 'Up to 30 m (100 ft) sensitive motion detection zone with adjustable PIR sensitivity'],
      ['Display', '2.4-inch color LCD screen with protected menu keys for effortless on-site configuration'],
      ['Storage Support', 'SD / SDHC memory card slot supporting high-speed cards up to 128 GB'],
      ['Power Source', '8 × AA batteries or external 12V DC power pack; up to 12 months standby current'],
      ['Weatherproofing', 'IP67 fully waterproof, dustproof, and corrosion resistant']
    ],
    features: [
      'Dual-lens architecture eliminates noisy internal mechanical IR cut filters, ensuring silent, reliable day-to-night transitions',
      '4K Ultra HD video recording captures exquisite physical details, behavioral interactions, and individual animal identifiers',
      'Long-distance 30-meter detection range monitors broad wildlife corridors, watering holes, and logging access roads',
      'Invisible 940 nm night flash delivers clear nocturnal images without producing visible light that could spook animals',
      'IP67 military-grade weather sealing withstands prolonged immersion, torrential downpours, and intense summer heat'
    ],
    page: 33,
    subcategories: ['wildlife-monitoring-surveillance', 'defense-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Camera Traps', 'Trail Cameras', '4K Wildlife Cameras', 'Dual Lens Cameras']
  },

  // =========================================================================
  // BRAND 8: CP PLUS (Perimeter Security & Advanced Surveillance)
  // =========================================================================
  {
    slug: 'cp-plus-4g-solar-ptz-camera',
    aliases: ['cp-z44r', 'cp-plus-4g-solar', 'cp-plus-solar-ptz'],
    name: 'CP PLUS 4G Solar-Powered PTZ Perimeter Camera',
    brand: 'CP PLUS',
    category: 'defense',
    image: 'cp-plus-4g-solar-ptz-camera',
    gallery: ['cp-plus-4g-solar-ptz-camera'],
    label: 'OFF-GRID 4G SOLAR-POWERED PTZ CAMERA',
    summary: 'Autonomous off-grid perimeter camera featuring 4MP Quad HD resolution, integrated 7W high-efficiency solar panel, 18,000mAh lithium battery pack, built-in 4G SIM connectivity, full 350° pan rotation, and full-color night vision.',
    specs: [
      ['Video Resolution', '4MP Quad HD (2560 × 1440) @ 25/30 fps'],
      ['Power System', 'Integrated 7W monocrystalline solar panel with built-in 18,000mAh rechargeable lithium battery pack'],
      ['Network Connectivity', 'Built-in 4G LTE cellular module supporting standard micro SIM cards (no Wi-Fi required)'],
      ['Pan / Tilt Range', 'Horizontal Pan: 350° continuous; Vertical Tilt: 90° for full perimeter visual coverage'],
      ['Night Vision System', 'Full-color night vision with dual smart spotlights and high-power infrared LEDs (up to 30 m range)'],
      ['AI Detection', 'Integrated AI PIR human body detection with smart motion tracking and instant push alerts'],
      ['Audio Interface', 'Two-way audio with built-in high-sensitivity microphone and loud 2W siren speaker'],
      ['Local Storage', 'Micro SD card slot supporting up to 256 GB; optional cloud storage integration'],
      ['Weather Sealing', 'IP66 weatherproof rated housing engineered for harsh outdoor environments'],
      ['Operating Temperature', '-10°C to +55°C (14°F to 131°F)']
    ],
    features: [
      'Self-sustaining solar power system with 18,000mAh battery operates completely off-grid without electrical cabling',
      'Integrated 4G LTE connectivity transmits live video streams and alert notifications across cellular networks anywhere',
      '350-degree pan and 90-degree tilt provide broad spatial coverage of remote construction sites, farms, and boundary lines',
      'Dual illumination system delivers crisp full-color night video or discreet infrared recording up to 30 meters',
      'AI-powered human detection filters out falling leaves, rain, and small pests to prevent false perimeter alarm fatigue'
    ],
    page: 40,
    subcategories: ['defense-surveillance', 'defense-field-operations'],
    categoryIds: ['defense', 'communication'],
    tags: ['PTZ Cameras', '4G Cameras', 'Solar Cameras', 'Perimeter Security']
  },
  {
    slug: 'cp-plus-outdoor-ir-bullet',
    aliases: ['cp-urc-tc24pl2c', 'cp-plus-bullet', 'cp-plus-ir-bullet'],
    name: 'CP PLUS 2.4MP Outdoor IR Bullet Surveillance Camera',
    brand: 'CP PLUS',
    category: 'defense',
    image: 'cp-plus-outdoor-ir-bullet',
    gallery: ['cp-plus-outdoor-ir-bullet'],
    label: 'WEATHERPROOF 2.4MP OUTDOOR IR BULLET CAMERA',
    summary: 'Rugged outdoor infrared bullet camera engineered for facility boundary surveillance and checkpoint monitoring, featuring 2.4MP Full HD imaging, 20-meter Smart IR night vision, built-in microphone, and IP67 weather sealing.',
    specs: [
      ['Image Sensor', '2.4MP high-sensitivity CMOS sensor (1920 × 1080 resolution)'],
      ['Video Output', 'Selectable 4-in-1 video output (AHD / HDCVI / HDTVI / CVBS) for universal system compatibility'],
      ['Lens Options', '3.6 mm wide-angle fixed focal lens (88° horizontal field of view)'],
      ['Smart IR Night Vision', 'High-power infrared LEDs with Smart IR technology (up to 20 m / 65 ft night range)'],
      ['Audio Recording', 'Built-in high-fidelity microphone for integrated audio-over-coax transmission'],
      ['Minimum Illumination', '0.02 Lux / F2.0 (color), 0 Lux with IR illumination active'],
      ['Image Enhancement', 'Digital Wide Dynamic Range (DWDR), 2D-DNR noise reduction, Auto White Balance (AWB), BLC'],
      ['Housing Construction', 'Rugged metal front shield with durable polycarbonate barrel; IP67 weather rated'],
      ['Power Requirements', '12V DC (±30% broad voltage tolerance for unstable electrical networks)'],
      ['Operating Temperature', '-40°C to +60°C (-40°F to +140°F)']
    ],
    features: [
      '2.4MP Full HD imaging resolves sharp vehicular detail, facial features, and boundary activity across day and night',
      'Smart IR night vision automatically modulates infrared intensity as subjects approach, preventing overexposed washouts',
      'Built-in audio microphone records clear ambient conversations and audio evidence over existing video cabling',
      'IP67 weatherproof rating and wide -40°C to +60°C operating range survive extreme desert heat and severe tropical downpours',
      'Four-in-one signal switchability integrates smoothly into existing legacy analog and modern high-definition DVR fleets'
    ],
    page: 40,
    subcategories: ['defense-surveillance', 'defense-field-operations'],
    categoryIds: ['defense'],
    tags: ['Bullet Cameras', 'CCTV Cameras', 'Outdoor Surveillance', 'Perimeter Security']
  },
  {
    slug: 'cp-plus-25x-network-ptz',
    aliases: ['cp-unp-d2521l10', 'cp-plus-25x-ptz', 'cp-unp-ptz'],
    name: 'CP PLUS 2MP 25x Network IR PTZ Speed Dome Camera',
    brand: 'CP PLUS',
    category: 'defense',
    image: 'cp-plus-25x-network-ptz',
    gallery: ['cp-plus-25x-network-ptz'],
    label: '25X OPTICAL ZOOM NETWORK PTZ SPEED DOME',
    summary: 'High-performance 2MP network IR PTZ speed dome camera equipped with powerful 25x optical zoom, 100-meter Smart IR night illumination, 360° endless pan, Starlight technology, and deep learning perimeter protection.',
    specs: [
      ['Image Sensor & Resolution', '2MP 1/2.8" STARVIS™ CMOS sensor (1920 × 1080 @ 50/60 fps)'],
      ['Optical & Digital Zoom', 'Powerful 25x optical zoom (4.8 mm to 120 mm) with 16x digital zoom'],
      ['Night Vision Range', 'High-efficiency infrared array providing up to 100 m (328 ft) Smart IR illumination'],
      ['Pan / Tilt Speed', '360° endless continuous pan rotation; pan speed up to 240°/s; tilt range -15° to +90°'],
      ['Starlight Technology', 'Ultra-low-light Starlight sensitivity: 0.005 Lux @ F1.6 (color), 0 Lux with IR'],
      ['Dynamic Range', 'True 120 dB Wide Dynamic Range (WDR) and 3D Digital Noise Reduction (3D-DNR)'],
      ['Deep Learning Analytics', 'Tripwire intrusion, boundary crossing, human/vehicle classification, abandoned object detection'],
      ['Video Compression', 'Smart H.265+ / H.265 / H.264+ / H.264 with triple-stream capability'],
      ['Ingress & Surge Protection', 'IP66 weatherproof rating with 6,000V lightning and surge protection'],
      ['Power Supply', '12V DC / 3A or Power over Ethernet Plus (PoE+ 802.3at)']
    ],
    features: [
      'Powerful 25x optical zoom resolves license plates and individual identities at distances exceeding 100 meters',
      'Starlight sensor technology maintains rich color imagery in deep twilight before activating 100-meter infrared illumination',
      'Continuous 360-degree endless rotation sweeps expansive industrial compounds, airfields, and border perimeters swiftly',
      'Deep learning algorithms accurately classify humans and vehicles, triggering automated target tracking and alarm dispatches',
      'IP66 weatherproofing and 6kV surge suppression safeguard the camera against severe lightning storms and outdoor exposure'
    ],
    page: 41,
    subcategories: ['defense-surveillance', 'defense-field-operations'],
    categoryIds: ['defense'],
    tags: ['PTZ Cameras', 'Speed Dome Cameras', 'Long-Range Surveillance', 'Perimeter Security']
  },
  {
    slug: 'cp-plus-16ch-4k-nvr',
    aliases: ['cp-unr-4k2162', 'cp-plus-16ch-nvr', 'cp-plus-nvr'],
    name: 'CP PLUS 16-Channel 4K AI Network Video Recorder',
    brand: 'CP PLUS',
    category: 'defense',
    image: 'cp-plus-16ch-4k-nvr',
    gallery: ['cp-plus-16ch-4k-nvr'],
    label: '16-CHANNEL 4K AI NETWORK VIDEO RECORDER',
    summary: 'High-capacity 16-channel 4K network video recorder engineered for command post and enterprise facility surveillance, featuring up to 12MP recording resolution, dual SATA storage bays up to 20TB, AI perimeter protection, and 4K HDMI output.',
    specs: [
      ['IP Channel Input', '16 IP camera channels with up to 144 Mbps incoming recording bandwidth'],
      ['Recording Resolution', 'Supports 12MP, 8MP (4K), 6MP, 5MP, 4MP, 3MP, 1080p, 720p IP cameras'],
      ['Storage Capacity', 'Dual SATA HDD interfaces supporting up to 20 TB total internal storage (2 × 10 TB drives)'],
      ['Video Output', 'Simultaneous 1 × 4K HDMI (3840 × 2160) and 1 × VGA monitor outputs'],
      ['Video Compression', 'Smart H.265+ / H.265 / Smart H.264+ / H.264 dual-stream decoding'],
      ['AI Intelligence', 'Supports camera-based face recognition, perimeter protection (tripwire & intrusion), SMD Plus human/vehicle filtering'],
      ['Network Interface', '1 × RJ-45 10/100/1000 Mbps self-adaptive Gigabit Ethernet port'],
      ['Auxiliary Ports', '2 × USB 2.0 ports (for mouse and flash drive backup); RCA audio input/output'],
      ['Remote Access', 'iCMOB and gCMOB mobile applications (iOS/Android), KVMS Pro central management software'],
      ['Operating Temperature', '-10°C to +55°C (14°F to 131°F)']
    ],
    features: [
      'Simultaneous 16-channel IP camera recording handles comprehensive enterprise facilities and multi-building campuses',
      '4K Ultra HD HDMI output provides razor-sharp multi-screen viewing on large command center monitor walls',
      'Smart H.265+ compression slashes storage and bandwidth overhead by up to 70% without sacrificing forensic video detail',
      'Dual SATA drive bays support up to 20 TB of continuous video archive retention for statutory compliance and auditing',
      'Intuitive gCMOB and iCMOB mobile platforms allow secure live viewing and playback from smartphones anywhere in the world'
    ],
    page: 41,
    subcategories: ['defense-surveillance', 'defense-field-operations'],
    categoryIds: ['defense', 'computing'],
    tags: ['Network Video Recorders', 'NVR', 'Surveillance Systems', 'CCTV Recorders']
  }
];
