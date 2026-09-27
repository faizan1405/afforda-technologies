import type { Product } from '@/lib/catalogue';

export const phase5Phase2aProducts: Product[] = [
  // =========================================================================
  // BRAND 1: GEOMATE (Surveying & RTK GNSS)
  // =========================================================================
  {
    slug: 'geomate-sg7-gnss',
    aliases: ['geomate-sg7', 'sg7-gnss'],
    name: 'GeoMate SG7 IMU-RTK GNSS Receiver',
    brand: 'GeoMate',
    category: 'surveying',
    image: 'geomate-sg7-gnss',
    gallery: ['geomate-sg7-gnss'],
    label: 'HIGH-PRECISION IMU-RTK GNSS RECEIVER',
    summary: 'Premium 1608-channel multi-constellation GNSS RTK receiver featuring calibration-free IMU tilt compensation up to 60°, integrated 4G LTE modem, internal transmit/receive UHF radio, and IP67 magnesium alloy rugged housing.',
    specs: [
      ['Channel Tracking', '1608 multi-constellation channels tracking GPS, GLONASS, Galileo, BeiDou, QZSS, and SBAS'],
      ['Tilt Compensation', 'Calibration-free IMU tilt compensation up to 60° with 2.5 cm survey accuracy'],
      ['RTK Positioning Accuracy', 'Horizontal: 8 mm + 1 ppm RMS; Vertical: 15 mm + 1 ppm RMS'],
      ['Internal Radio Modem', 'Integrated TX/RX UHF radio transceiver (410–470 MHz) with selectable power up to 2W'],
      ['Wireless & Cellular', 'Integrated 4G LTE modem, Wi-Fi 802.11 b/g/n, Bluetooth 5.0, and NFC touch-connect'],
      ['Battery & Autonomy', 'Dual internal high-capacity batteries delivering up to 15 hours continuous RTK rover operation; USB-C fast charging'],
      ['Ingress & Drop Protection', 'IP67 dust and waterproof rating; withstands 2-meter pole drop onto concrete'],
      ['Operating Temperature', '-40°C to +75°C (-40°F to +167°F)']
    ],
    features: [
      '1608-channel multi-frequency architecture tracks all global GNSS constellations simultaneously',
      'Calibration-free IMU tilt compensation allows accurate surveying at pole angles up to 60 degrees',
      'Integrated internal UHF radio and 4G modem eliminate external cables and external battery packs',
      'IP67 sealed magnesium alloy chassis withstands severe rain, sandstorms, and 2-meter drops',
      'One-touch NFC pairing connects immediately to field controllers running MateSurvey software'
    ],
    page: 30,
    subcategories: ['gps-survey-mapping-products', 'geological-field-mapping', 'mining-mapping'],
    categoryIds: ['surveying', 'geology', 'mining'],
    tags: ['GNSS Receivers', 'RTK Rover', 'Surveying Equipment', 'DGPS']
  },

  // =========================================================================
  // BRAND 2: WILDLIFE ACOUSTICS (Bioacoustics & Ultrasonic Monitoring)
  // =========================================================================
  {
    slug: 'wildlife-acoustics-song-meter-sm4bat-fs',
    aliases: ['song-meter-sm4bat-fs', 'sm4bat-fs'],
    name: 'Song Meter SM4BAT FS Bioacoustic Recorder',
    brand: 'Wildlife Acoustics',
    category: 'forestry',
    image: 'wildlife-acoustics-song-meter-sm4bat-fs',
    gallery: ['wildlife-acoustics-song-meter-sm4bat-fs'],
    label: 'FULL-SPECTRUM ULTRASONIC BAT RECORDER',
    summary: 'Industry-standard weatherproof bioacoustic recorder engineered for long-term automated ultrasonic bat surveys, capturing full-spectrum 16-bit audio up to 500 kHz across months of field deployment.',
    specs: [
      ['Recording Technology', 'Full-spectrum 16-bit PCM WAV recording; sample rates of 256, 384, and 500 kHz'],
      ['Ultrasonic Channels', '1 ultrasonic channel compatible with SMM-U1 and SMM-U2 omnidirectional microphones'],
      ['Storage Capacity', 'Dual SDXC/SDHC memory card slots supporting up to 2 TB total storage'],
      ['Power Supply', '4 D-cell alkaline or NiMH rechargeable batteries; external power input (5–12V DC)'],
      ['Field Battery Life', 'Up to 250–300 hours of ultrasonic recording on 4 D-cell alkaline batteries'],
      ['Housing & Weatherproofing', 'Weatherproof polycarbonate housing with integrated lockable hasp; IP67 rated'],
      ['Operating Temperature', '-20°C to +50°C (-4°F to 122°F)'],
      ['Dimensions & Weight', '218 x 186 x 78 mm; approx. 1.2 kg with batteries']
    ],
    features: [
      'High-fidelity full-spectrum recording captures fine echolocation harmonics up to 250 kHz',
      'Dual high-capacity SD card bays store terabytes of unattended acoustic data over seasonal surveys',
      'Rugged weatherproof lockable polycarbonate chassis protects against monsoons and predator interference',
      'Configurable advanced acoustic triggers reduce silent noise files and maximize memory efficiency',
      'Fully compatible with Kaleidoscope Pro software for automated bat species classification'
    ],
    page: 38,
    subcategories: ['wildlife-monitoring-surveillance'],
    categoryIds: ['forestry', 'defense'],
    tags: ['Bioacoustic Recorders', 'Ultrasonic Bat Detectors', 'Wildlife Monitoring', 'Acoustic Recorders']
  },

  // =========================================================================
  // BRAND 3: HUSQVARNA (Forestry PPE & Operations)
  // =========================================================================
  {
    slug: 'husqvarna-technical-forest-helmet',
    aliases: ['husqvarna-helmet', 'technical-forest-helmet'],
    name: 'Husqvarna Technical Forest Helmet',
    brand: 'Husqvarna',
    category: 'forestry',
    image: 'husqvarna-technical-forest-helmet',
    gallery: ['husqvarna-technical-forest-helmet'],
    label: 'PROFESSIONAL FORESTRY SAFETY HELMET',
    summary: 'Lightweight professional forestry safety helmet system featuring integrated hearing protection, an UltraVision etched metal mesh visor for optimal light transmission, and a patented UV expiry indicator.',
    specs: [
      ['Safety Standards', 'Certified to EN 397 and ANSI Z89.1-2009 Class G, E'],
      ['Hearing Protection', 'Integrated earmuffs certified to EN 352-3; SNR 26 dB noise reduction rating'],
      ['Visor System', 'Etched metal UltraVision mesh visor providing only 20% light reduction and clear tree-crown view'],
      ['UV Expiry Indicator', 'Visual UV sensor disc indicates polymer degradation and shell replacement timeline'],
      ['Suspension & Adjustment', '6-point textile harness with single-hand ergonomic ratcheting dial'],
      ['Shell Material', 'Impact-resistant, UV-stabilized ABS polymer with ventilation slots and neck guard'],
      ['Weight', 'approx. 690 g complete with visor and hearing protectors']
    ],
    features: [
      'Free-view UltraVision mesh visor allows an unhindered upward field of view when inspecting tree crowns',
      'Ergonomic ratchet dial allows fast, precise sizing adjustment even while wearing heavy work gloves',
      'Patented UV indicator turns red as sunlight exposure accumulates, signaling when the shell requires renewal',
      'Integrated 26 dB hearing protection shields eardrums from continuous high-decibel chainsaw operation',
      'Optimized ventilation channels and moisture-wicking sweatband maintain comfort in humid tropical climates'
    ],
    page: 44,
    subcategories: ['forestry-tools-cutting-equipment', 'field-safety-ppe'],
    categoryIds: ['forestry'],
    tags: ['Forestry Safety & PPE', 'Protective Helmets', 'Forestry Equipment', 'Chainsaw Safety']
  },
  {
    slug: 'husqvarna-functional-chainsaw-chaps',
    aliases: ['husqvarna-chaps', 'functional-chainsaw-chaps'],
    name: 'Husqvarna Functional Chainsaw Protective Chaps',
    brand: 'Husqvarna',
    category: 'forestry',
    image: 'husqvarna-functional-chainsaw-chaps',
    gallery: ['husqvarna-functional-chainsaw-chaps'],
    label: 'CLASS 1 CHAINSAW PROTECTIVE CHAPS',
    summary: 'Heavy-duty chainsaw protective chaps featuring multi-layer cut-retardant fabric meeting Class 1 (20 m/s) safety standards, 1000D Cordura® reinforced knees and ankles, and adjustable quick-release leg buckles.',
    specs: [
      ['Cut Protection Rating', 'Class 1 (20 m/s chainsaw speed) certified to EN ISO 11393-2 / ASTM F1897'],
      ['Protective Material', '9-layer cut-retardant polyester and Kevlar® blend designed to clog chainsaw sprockets instantly'],
      ['Outer Fabric', 'Heavy-duty 1000 Denier Cordura® reinforcement on knee and lower leg impact zones'],
      ['High-Visibility Styling', 'Fluorescent safety orange front panel with reflective Husqvarna branding and piping'],
      ['Fastening System', 'Adjustable nylon waist belt with heavy-duty quick-release buckles and calf straps'],
      ['Length & Fit', 'Universal adjustable fit (approx. 90–105 cm overall length)'],
      ['Total Weight', 'approx. 1.35 kg']
    ],
    features: [
      '9-layer protective padding instantly binds the chainsaw drive sprocket upon contact to prevent lacerations',
      'Rugged 1000D Cordura reinforcement resists thorny underbrush, briars, and abrasive wet logs',
      'Open-back apron construction ensures optimal air circulation during demanding physical logging in warm climates',
      'High-visibility safety orange with reflective accents ensures field operators remain visible to vehicle crews',
      'Quick-release snap buckles allow rapid donning and removal over standard field work trousers'
    ],
    page: 44,
    subcategories: ['forestry-tools-cutting-equipment', 'field-safety-ppe'],
    categoryIds: ['forestry'],
    tags: ['Chainsaw Protective Gear', 'Forestry PPE', 'Field Safety Gear', 'Forestry Equipment']
  },

  // =========================================================================
  // BRAND 4: FIREFLY FIRE PUMPS (Forest Firefighting & Mobile Pumping)
  // =========================================================================
  {
    slug: 'firefly-mfp-800-p',
    aliases: ['firefly-mfp-800', 'mfp-800-p'],
    name: 'Firefly MFP 800-P Portable Fire Pump',
    brand: 'Firefly Fire Pumps',
    category: 'forestry',
    image: 'firefly-mfp-800-p',
    gallery: ['firefly-mfp-800-p'],
    label: 'MEDIUM-PRESSURE PORTABLE FIRE PUMP',
    summary: 'High-performance petrol portable fire pump delivering 800 LPM at 5 bar pressure with rotary vane priming, stainless steel wrap-around protective frame, electric start, and high-intensity flood lamp.',
    specs: [
      ['Pump Construction', 'Single-stage centrifugal pump constructed from hard-anodized marine grade aluminum alloy'],
      ['Rated Performance', '800 LPM @ 5.0 bar; Maximum discharge up to 1200 LPM @ 3.0 bar'],
      ['Engine Type', '4-Stroke Air-Cooled V-Twin Petrol Engine (18–23 HP @ 3,600 rpm)'],
      ['Priming Mechanism', 'Belt-driven rotary vane primer; lifts water from 7.0 meters depth within 24 seconds'],
      ['Inlet & Outlet', '100 mm (4") round thread suction inlet; 65 mm (2.5") instantaneous discharge valve'],
      ['Fuel Capacity', '8.5 Liters (delivering > 1.5 hours continuous full-load pumping)'],
      ['Starting System', '12V DC electric key start standard with auxiliary manual recoil rope start'],
      ['Frame & Lighting', 'Heavy-duty stainless steel tubular cradle with 4 folding handles and LED flood lamp']
    ],
    features: [
      'High discharge output of 800 LPM at 5 bar provides forceful suppression lines for wildland perimeter defense',
      'Quick rotary vane priming achieves suction from deep ravines, ponds, or rivers up to 7 meters in 24 seconds',
      'Ergonomically mounted control panel features pressure gauges, throttle control, and low-oil warning',
      'Four-point folding carrying handles and anti-vibration mountings facilitate rapid deployment across uneven terrain',
      'Integrated halogen/LED flood lamp ensures safe operational lighting during nighttime forest firefighting'
    ],
    page: 45,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Fire Pumps & Backpack Pumps', 'Forest Firefighting', 'Portable Pumps', 'Fire Suppression']
  },
  {
    slug: 'firefly-mfp-1300-p',
    aliases: ['firefly-mfp-1300', 'mfp-1300-p'],
    name: 'Firefly MFP 1300-P High-Capacity Portable Fire Pump',
    brand: 'Firefly Fire Pumps',
    category: 'forestry',
    image: 'firefly-mfp-1300-p',
    gallery: ['firefly-mfp-1300-p'],
    label: 'HIGH-CAPACITY PORTABLE FIRE PUMP (EN 14466)',
    summary: 'High-capacity portable fire pump certified to EN 14466 (PFPN 10-750), delivering 1300 LPM at 7 bar and 750 LPM at 10 bar with twin discharge valves for major forest fire suppression and relay pumping.',
    specs: [
      ['Certification', 'Certified to EN 14466 standard for Portable Fire Pumps (Classification PFPN 10-750)'],
      ['Rated Pumping Output', '1300 LPM @ 7.0 bar; 750 LPM @ 10.0 bar; Maximum flow up to 1600 LPM'],
      ['Engine Platform', '4-Stroke 2-cylinder V-Twin Petrol Engine (approx. 35 HP @ 3,600 rpm) with electric start'],
      ['Priming System', 'Fast automatic reciprocating exhaust ejector / rotary vane primer lifting up to 7.5 meters'],
      ['Inlets & Outlets', '100 mm (4") suction inlet with strainer; Dual 65 mm (2.5") screw-down globe discharge valves'],
      ['Materials & Seals', 'Corrosion-resistant light alloy casting with stainless steel pump shaft and mechanical seal'],
      ['Fuel Supply', '15-liter fuel capacity for extended multi-hour continuous operations'],
      ['Dimensions & Frame', 'Stainless steel wrap-around protective tubular frame with wheel kit provisions']
    ],
    features: [
      'Powerful 1300 LPM output at 7 bar supports multiple simultaneous attack hose lines or high-volume water relays',
      'Certified to strict European EN 14466 fire service standards for durability and pressure endurance',
      'Dual independently controlled 65 mm delivery outlets allow versatile branch-line splits during major fire incidents',
      'Robust stainless steel carrying cage protects internal components from falling branches and rough vehicle transit',
      'Deep suction lift capability enables drafting from open canals, reservoirs, and natural mountain streams'
    ],
    page: 45,
    subcategories: ['forest-fire-fighting-products'],
    categoryIds: ['forestry'],
    tags: ['Fire Pumps & Backpack Pumps', 'Forest Firefighting', 'High Capacity Pumps', 'Wildfire Defense']
  },

  // =========================================================================
  // BRAND 5: NIGHTFOX (Digital Night Vision & Covert Observation)
  // =========================================================================
  {
    slug: 'nightfox-swift-2-pro',
    aliases: ['nightfox-swift-2', 'swift-2-pro'],
    name: 'Nightfox Swift 2 Pro Night Vision Goggles',
    brand: 'Nightfox',
    category: 'thermal',
    image: 'nightfox-swift-2-pro',
    gallery: ['nightfox-swift-2-pro'],
    label: 'HANDS-FREE DUAL-IR NIGHT VISION GOGGLES',
    summary: 'Head and helmet-mountable 1x magnification digital night vision goggles featuring an ultra-wide 54° field of view, switchable 850nm and covert 940nm infrared LEDs, Full HD 1080p recording, and Wilcox G24 helmet mount compatibility.',
    specs: [
      ['Optical Magnification', '1x true optical magnification (ideal for walking, driving, and close-quarters tactical navigation)'],
      ['Field of View', '54° ultra-wide field of view for natural peripheral spatial awareness'],
      ['Infrared Illumination', 'Dual IR wavelengths: 850nm (130m range) and 940nm covert invisible LED (90m range)'],
      ['Video Recording', 'Full HD 1080p video recording with integrated microphone onto MicroSD (up to 64GB)'],
      ['Mounting Compatibility', 'Compatible with standard tactical headgear and Wilcox G24 style dovetail helmet mounts'],
      ['Internal Display', 'Dual internal LCD displays with rubberized eyecup and adjustable pupillary distance'],
      ['Battery & Runtime', 'Built-in 3200 mAh USB-C rechargeable lithium battery providing up to 5 hours runtime'],
      ['Weight', 'approx. 360 g']
    ],
    features: [
      'True 1x optical magnification allows natural depth perception and confident foot movement in pitch darkness',
      'Dual-wavelength IR allows instantaneous switching between long-range 850nm and covert 940nm stealth observation',
      'Wilcox G24 shroud compatibility enables seamless mounting to military and tactical high-cut bump helmets',
      'Integrated 1080p recording captures high-definition evidence footage directly onto a micro SD card',
      'Lightweight 360g ergonomic design minimizes neck fatigue during prolonged night patrols and scouting missions'
    ],
    page: 28,
    subcategories: ['defense-night', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['thermal', 'defense', 'forestry'],
    tags: ['Night Vision Goggles', 'Tactical Night Vision', 'Helmet Mount NVG', 'Wildlife Monitoring']
  },
  {
    slug: 'nightfox-prowl',
    aliases: ['nightfox-prowl-monocular', 'prowl-nvg'],
    name: 'Nightfox Prowl Night Vision Monocular',
    brand: 'Nightfox',
    category: 'thermal',
    image: 'nightfox-prowl',
    gallery: ['nightfox-prowl'],
    label: 'COMPACT HANDHELD & HELMET-MOUNT MONOCULAR',
    summary: 'Ultra-compact digital night vision monocular featuring 1x optical magnification, dual 850nm/940nm infrared illumination, Full HD 1080p video recording, and versatile handheld or helmet-mounted operation.',
    specs: [
      ['Optical System', '1x optical magnification with up to 2x digital zoom'],
      ['Infrared Modes', 'Dual wavelength IR LEDs: 850nm high-power (130m range) and 940nm covert mode (90m range)'],
      ['Sensor & Video Resolution', 'High-sensitivity CMOS night vision sensor recording 1080p FHD video at 30 fps with audio'],
      ['Internal Monitor', 'High-resolution circular internal display with soft contoured rubber eyecup'],
      ['Helmet Mounting', 'Includes dovetail adapter compatible with standard tactical helmet arm mounts'],
      ['Power & Charging', 'USB-C rechargeable internal 3200 mAh lithium-ion battery with up to 5 hours runtime'],
      ['Memory Card Support', 'MicroSD card slot supporting cards up to 32 GB'],
      ['Dimensions & Weight', 'approx. 225 g; compact pocket-sized form factor (125 x 52 x 65 mm)']
    ],
    features: [
      'Pocket-sized 225g chassis provides grab-and-go night observation for solo wildlife rangers and patrol officers',
      'Switchable 850nm and 940nm illuminator modes balance illumination reach against zero visual signature',
      'Helmet mounting capability allows hands-free walking, surveillance, and equipment handling in zero daylight',
      'Crisp 1080p video recording documents animal movement and perimeter breaches with audio capture',
      'Fast USB-C recharging eliminates the logistical burden of carrying disposable AA batteries into remote terrain'
    ],
    page: 28,
    subcategories: ['defense-night', 'defense-surveillance', 'wildlife-monitoring-surveillance'],
    categoryIds: ['thermal', 'defense', 'forestry'],
    tags: ['Night Vision Monoculars', 'Tactical Optics', 'Night Observation', 'Wildlife Monitoring']
  },

  // =========================================================================
  // BRAND 6: EDDING (Geological Field Marking & Specimen Labeling)
  // =========================================================================
  {
    slug: 'edding-8014-laboratory-marker',
    aliases: ['edding-8014', 'e-8014-marker'],
    name: 'Edding 8014 Laboratory & Field Specimen Marker',
    brand: 'Edding',
    category: 'geology',
    image: 'edding-8014-laboratory-marker',
    gallery: ['edding-8014-laboratory-marker'],
    label: 'TEMPERATURE-RESISTANT FIELD SPECIMEN MARKER',
    summary: 'Precision archival marker tested and approved by TÜV Saarland, engineered for extreme temperature resistance from -183°C up to +500°C on aluminium, waterproof, and chemically resistant for geological and laboratory sample marking.',
    specs: [
      ['Stroke Width & Nib', 'Extra-fine round bullet nib (approx. 1.0 mm) for precise labeling on small specimen containers'],
      ['Thermal Endurance', 'Extreme temperature endurance from -183°C (liquid nitrogen) up to +500°C (on aluminium surfaces)'],
      ['Ink Properties', 'Permanent, quick-drying, waterproof, smudge-proof, and lightfast black pigment ink'],
      ['Chemical Resistance', 'Highly resistant to alcohols, disinfectants, acetone, and common geological acid reagents'],
      ['Official Certification', 'Tested and officially approved by TÜV Saarland for specialized laboratory and industrial use'],
      ['Surface Compatibility', 'Rock sample bags, petri dishes, glass slides, cryo-vials, core sample containers, polished slabs'],
      ['Cap & Barrel', 'Clip cap with roll-stop mechanism; durable polypropylene barrel construction']
    ],
    features: [
      'Withstands severe temperature extremes from -183°C cryo-storage up to +500°C heat without fading or blurring',
      'Fine 1.0 mm bullet nib allows legible handwriting on small core tags, mineral sample bags, and glass microscope slides',
      'Chemically inert ink resists field solvents, acid washes, and environmental weathering over multi-year storage',
      'Quick-drying formulation eliminates smudging immediately upon writing on non-porous plastics and metals',
      'TÜV Saarland certified durability guarantees reliable archival identification for scientific and mining repositories'
    ],
    page: 49,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Geological Markers', 'Field Mapping Supplies', 'Sample Identification', 'Archival Markers']
  },
  {
    slug: 'edding-750-industrial-paint-marker',
    aliases: ['edding-750', 'e-750-paint-marker'],
    name: 'Edding 750 Industrial Paint Marker',
    brand: 'Edding',
    category: 'geology',
    image: 'edding-750-industrial-paint-marker',
    gallery: ['edding-750-industrial-paint-marker'],
    label: 'HEAVY-DUTY INDUSTRIAL PAINT MARKER',
    summary: 'Robust industrial paint marker featuring highly opaque lacquer-like pigment ink that writes permanently on dark, dusty, oily, and rough geological rock surfaces, metal core trays, and timber, heat-resistant up to 400°C.',
    specs: [
      ['Stroke Width & Tip', 'Medium bullet nib (approx. 2.0 – 4.0 mm) with pump-action flow control'],
      ['Ink Formulation', 'Lacquer-like, highly opaque pigment ink with low odor and no added toluene/xylene'],
      ['Heat Resistance', 'Heat resistant up to 400°C (white and silver markings remain visible up to 1000°C)'],
      ['Weather & Wear', 'Exceptionally waterproof, lightfast, weatherproof, and abrasion-resistant on rough surfaces'],
      ['Valve Mechanism', 'Pump-action valve mechanism ensuring continuous, controlled paint flow onto porous materials'],
      ['Substrate Suitability', 'Rough stone, drilled rock cores, drill core trays, rusty steel, timber, glass, and rubber'],
      ['Barrel Construction', 'Sturdy aluminum barrel designed for rough handling in mining and exploration environments']
    ],
    features: [
      'High-opacity lacquer ink produces intense, highly visible markings on pitch-black basalt, wet shale, and oily drill core',
      'Heat resistant up to 400°C, ensuring survey markings survive geochemical processing and hot industrial conditions',
      'Robust aluminum casing survives field drops, toolbox crushing, and harsh outdoor weather',
      'Weatherproof and UV-stable pigment formula prevents fading under direct sun exposure in open-pit quarries',
      'Precision pump valve ensures uniform paint coverage without leaking or drying out during intermittent field use'
    ],
    page: 49,
    subcategories: ['geological-field-mapping', 'mining-field-mapping'],
    categoryIds: ['geology', 'mining'],
    tags: ['Industrial Paint Markers', 'Geological Markers', 'Core Tray Marking', 'Field Accessories']
  },

  // =========================================================================
  // BRAND 7: PANASONIC TOUGHBOOK (Rugged Mobile Computing)
  // =========================================================================
  {
    slug: 'panasonic-toughbook-g2',
    aliases: ['toughbook-g2', 'panasonic-fz-g2'],
    name: 'Panasonic TOUGHBOOK G2',
    brand: 'Panasonic Toughbook',
    category: 'computing',
    image: 'panasonic-toughbook-g2',
    gallery: ['panasonic-toughbook-g2'],
    label: 'FULLY RUGGED 10.1" MODULAR TABLET',
    summary: '10.1-inch fully rugged Windows tablet engineered for extreme field environments, featuring MIL-STD-810H and IP65 durability, 1000-nit sunlight-viewable glove/rain touchscreen, hot-swappable battery, and modular expansion bays.',
    specs: [
      ['Display & Touch', '10.1" Active Matrix (TFT) WUXGA (1920 x 1200) Touchscreen (up to 1,000 cd/m², glove & rain modes) + IP55 Digitizer Pen'],
      ['Processor & Operating System', 'Intel® Core™ i5-10310U / i5-1245U vPro™ processor; Windows 11 Pro 64-bit'],
      ['Memory & Storage', '16 GB to 32 GB DDR4 RAM; 512 GB to 1 TB quick-release NVMe OPAL SSD with integrated heater'],
      ['Rugged Certifications', 'MIL-STD-810H certified, MIL-STD-461G compliant, IP65 water and dust resistant, 180 cm (6-foot) drop tested'],
      ['Modular xPAK Expansion', 'Top and rear expansion areas for barcode reader, thermal camera, LAN port, or smart card reader'],
      ['Battery & Runtime', 'Hot-swappable battery system; up to 12 hours (standard) or 18.5 hours (extended battery pack)'],
      ['Operating Temperature', '-29°C to +63°C (-20°F to 145°F)'],
      ['Dimensions & Weight', '279 x 188 x 23.5 mm; approx. 1.19 kg (tablet only)']
    ],
    features: [
      '10.1-inch 1000-nit high-brightness display provides crystal-clear readability in direct desert sunlight',
      'Fully certified to MIL-STD-810H and IP65, surviving 6-foot drops onto concrete and torrential rainstorms',
      'User-swappable xPAK modular bays allow field technicians to add thermal imaging or 2D barcode scanners',
      'Hot-swappable twin battery capability enables 24/7 continuous operation without system rebooting',
      'Magnesium alloy chassis with raised corner elastomer bumpers protects internal electronics from extreme shock'
    ],
    page: 47,
    subcategories: ['defense-rugged', 'defense-field-operations', 'mining-rugged'],
    categoryIds: ['computing', 'defense', 'mining'],
    tags: ['Rugged Tablets', 'Fully Rugged Computing', 'Field Data Collection', 'Defense Computing']
  },
  {
    slug: 'panasonic-toughbook-33',
    aliases: ['toughbook-33', 'panasonic-cf-33'],
    name: 'Panasonic TOUGHBOOK 33',
    brand: 'Panasonic Toughbook',
    category: 'computing',
    image: 'panasonic-toughbook-33',
    gallery: ['panasonic-toughbook-33'],
    label: 'FULLY RUGGED 12.0" 2-IN-1 DETACHABLE',
    summary: '12.0-inch fully rugged 2-in-1 detachable notebook featuring a 3:2 aspect ratio 1200-nit QHD display, dual hot-swappable batteries, MIL-STD-810H and IP65 protection, and full-featured detachable backlit keyboard.',
    specs: [
      ['Form Factor', '2-in-1 detachable fully rugged PC (usable as standalone tablet or complete clamshell notebook)'],
      ['Display', '12.0" QHD (2160 x 1440) 3:2 aspect ratio Dual-Touch (10-finger capacitive + IP55 digitizer pen, up to 1,200 cd/m²)'],
      ['Processor Platform', 'Intel® Core™ i5 / i7 vPro™ processor; Windows 11 Pro 64-bit'],
      ['Memory & Storage', '16 GB to 32 GB LPDDR4x RAM; 512 GB to 1 TB quick-release NVMe SSD with heater'],
      ['Rugged Testing', 'MIL-STD-810H certified, MIL-STD-461G compliant, IP65 dust and water sealed, 120 cm (4-foot) drop tested'],
      ['Battery Configuration', 'Twin hot-swappable user-replaceable batteries providing up to 10 hours (standard) or 20 hours (extended)'],
      ['Keyboard & Docking', 'Detachable premium backlit chiclet keyboard with built-in handle and dual vehicle dock pass-through'],
      ['Dimensions & Weight', '313 x 288 x 46 mm (laptop mode); approx. 2.76 kg (laptop) / 1.53 kg (tablet only)']
    ],
    features: [
      '3:2 aspect ratio display renders 15% more vertical spreadsheet and mapping data than traditional 16:9 screens',
      'Ultra-bright 1200-nit touchscreen with glove and rain modes ensures flawless readability in glare or driving rain',
      'Innovative 2-in-1 latch mechanism allows instant detachment of the lightweight tablet for mobile inspections',
      'Twin hot-swappable batteries allow battery exchange in the field without suspending active mapping software',
      'Integrated carry handle, rugged magnesium casing, and reinforced port covers withstand aggressive field duties'
    ],
    page: 47,
    subcategories: ['defense-rugged', 'defense-field-operations', 'mining-rugged'],
    categoryIds: ['computing', 'defense', 'mining'],
    tags: ['Rugged Laptops', '2-in-1 Detachable', 'Fully Rugged Computing', 'Field Computing']
  },
  {
    slug: 'panasonic-toughbook-s1',
    aliases: ['toughbook-s1', 'panasonic-fz-s1'],
    name: 'Panasonic TOUGHBOOK S1',
    brand: 'Panasonic Toughbook',
    category: 'computing',
    image: 'panasonic-toughbook-s1',
    gallery: ['panasonic-toughbook-s1'],
    label: 'RUGGED 7.0" ANDROID FIELD TABLET',
    summary: 'Ergonomic 7.0-inch rugged Android tablet engineered for mobile one-handed field operations, featuring Qualcomm octa-core processing, MIL-STD-810H and IP65/IP67 durability, 500-nit outdoor touchscreen, and warm-swap battery.',
    specs: [
      ['Display', '7.0" WXGA (1280 x 800) IPS color LCD with anti-reflective coating (up to 500 cd/m², glove and rain touch modes)'],
      ['Operating System & CPU', 'Qualcomm® Snapdragon™ 660 Octa-Core processor (up to 2.2 GHz); Android 11 / 12'],
      ['Memory & Storage', '4 GB LPDDR4 RAM; 64 GB eMMC 5.1 storage expandable via MicroSDXC card slot'],
      ['Ingress & Drop Testing', 'MIL-STD-810H certified; IP65 and IP67 dust and water submersible; 150 cm (5-foot) drop resistant'],
      ['Battery & Runtime', 'User-replaceable warm-swappable battery; up to 8 hours (standard) or 14 hours (extended battery)'],
      ['Wireless Connectivity', '4G LTE with Band 14 FirstNet®, Wi-Fi 802.11 a/b/g/n/ac/d/h/i/r/k/v/w, Bluetooth 5.0, NFC'],
      ['Camera Configuration', '13 MP rear autofocus camera with LED flash; 5 MP front-facing camera'],
      ['Dimensions & Weight', '193 x 131 x 22.9 mm; approx. 426 g (with standard battery)']
    ],
    features: [
      'Compact 426g ergonomic profile with contoured grips fits comfortably in one hand for continuous inventory scanning',
      'IP65/IP67 waterproof rating allows full submersion in shallow water, wet forestry ravines, and dusty mining pits',
      '500-nit outdoor display with rain sensing mode prevents ghost touches when operated during tropical downpours',
      'Warm-swappable battery architecture lets operators replace drained packs without shutting down active GIS apps',
      'Enterprise-grade Panasonic COMPASS suite ensures long-term Android security patches and fleet management'
    ],
    page: 47,
    subcategories: ['defense-rugged', 'defense-field-operations', 'mining-rugged'],
    categoryIds: ['computing', 'defense', 'mining'],
    tags: ['Rugged Tablets', 'Android Rugged Tablet', 'Field Data Collection', 'Handheld Computing']
  },

  // =========================================================================
  // BRAND 8: BREITHAUPT KASSEL (Geological Compasses & Precision Transits)
  // =========================================================================
  {
    slug: 'breithaupt-3030-cocla',
    aliases: ['breithaupt-cocla', 'cocla-stratum-compass'],
    name: '3030 COCLA Stratum Compass',
    brand: 'Breithaupt Kassel',
    category: 'geology',
    image: 'breithaupt-3030-cocla',
    gallery: ['breithaupt-3030-cocla'],
    label: 'PRECISION CLAR METHOD STRATUM COMPASS',
    summary: 'World-renowned geological stratum compass designed for measuring the azimuth of dip and the angle of dip in a single operation according to the Clar method, featuring eddy current damping and external declination adjustment.',
    specs: [
      ['Measurement Method', 'Simultaneous two-axis Clar method (measures azimuth of dip and dip angle in one single operation)'],
      ['Compass Circle', '50 mm graduated circle with 1° / 1g graduation and anti-clockwise numbering for direct azimuth reading'],
      ['Dip Clinometer', 'Integrated lid clinometer with 0°–90° reading and 1° graduation'],
      ['Needle System', 'Precision magnetic needle with eddy current copper-ring damping and automatic lid arrestor'],
      ['Declination Adjustment', 'External mechanical gear declination setting (±30° / ±30g)'],
      ['Housing Construction', 'Rugged, non-magnetic cast light alloy housing with anodized finish'],
      ['Leveling', 'Integrated circular spirit level on compass face and tubular level on lid'],
      ['Dimensions & Weight', 'Closed: 72 x 93 x 27 mm; Weight: approx. 270 g']
    ],
    features: [
      'Unique Clar design allows instantaneous one-step reading of structural rock strike, dip direction, and dip angle',
      'Eddy current damping brings the magnetic needle to a rapid rest without mechanical needle bounce',
      'Automatic needle arresting mechanism locks the jewel bearing securely when the protective lid is closed',
      'Integrated external declination gear allows quick correction for local magnetic variation without opening the seal',
      'Precision-machined non-magnetic German alloy casing ensures lifetime reliability in demanding mining environments'
    ],
    page: 48,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining', 'surveying'],
    tags: ['Geological Compasses', 'Stratum Compasses', 'Clar Compass', 'Field Measurement']
  },
  {
    slug: 'breithaupt-necli',
    aliases: ['breithaupt-clinometer', 'necli-clinometer'],
    name: 'NECLI Optical Hand Clinometer',
    brand: 'Breithaupt Kassel',
    category: 'geology',
    image: 'breithaupt-necli',
    gallery: ['breithaupt-necli'],
    label: 'HIGH-PRECISION OPTICAL HAND CLINOMETER',
    summary: 'High-precision optical sighting clinometer designed for rapid, parallax-free determination of slope angles, heights, and gradients, featuring a vertical circle oscillating on precision miniature ball bearings with liquid damping.',
    specs: [
      ['Sighting Optics', 'Parallax-free internal optical sighting system with adjustable diopter focusing eyepiece'],
      ['Graduation Scales', 'Four available simultaneous graduations: ±90° (1° increments) and ±100% / ±150% gradient scales'],
      ['Bearing Suspension', 'Vertical graduated circle mounted on precision miniature ball bearings for ultra-smooth movement'],
      ['Damping System', 'Low-viscosity transparent damping fluid ensures fast settlement within 2 seconds'],
      ['Measuring Accuracy', 'Direct reading to 0.5° (estimated to 0.25°); Height estimation accuracy within ±1%'],
      ['Housing Material', 'Solid die-cast non-magnetic light-metal housing with black anodized anti-glare finish'],
      ['Tripod Thread', 'Standard 1/4" brass tripod thread integrated into the base for stationary stand mounting'],
      ['Dimensions & Weight', '100 x 55 x 22 mm; approx. 195 g']
    ],
    features: [
      'Parallax-free optical sighting combines the target object and internal measurement scale in a single sharp visual field',
      'Precision jewel and ball bearing suspension guarantees friction-free tilting and immediate settling under 2 seconds',
      'Dual degree and percent gradient scales allow simultaneous reading of slope percentages and vertical degrees',
      'Integrated 1/4" tripod mount provides rock-solid stability for geodetic gradient profiling and tree height measurement',
      'Sealed non-magnetic aluminum alloy chassis resists dust, splashing water, and extreme field temperatures'
    ],
    page: 48,
    subcategories: ['geological-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining', 'surveying'],
    tags: ['Clinometers', 'Optical Clinometers', 'Survey Measurement', 'Height Meters']
  },
  {
    slug: 'breithaupt-cobru',
    aliases: ['breithaupt-pocket-transit', 'cobru-transit'],
    name: 'COBRU Universal Pocket Transit',
    brand: 'Breithaupt Kassel',
    category: 'geology',
    image: 'breithaupt-cobru',
    gallery: ['breithaupt-cobru'],
    label: 'PRECISION UNIVERSAL POCKET TRANSIT',
    summary: 'Universal geological pocket transit compass of the Brunton type featuring a 63 mm azimuth circle, adjustable clinometer with spirit level, precision sighting mirror with hairline, and ±30° declination adjustment.',
    specs: [
      ['Compass Circle', '63 mm diameter graduated circle with 1° / 1g resolution; 0°–360° azimuth numbering'],
      ['Magnetic Needle', '50 mm precision induction-damped magnetic needle with movable inclination counterweight'],
      ['Clinometer System', 'Built-in adjustable clinometer with tubular level measuring vertical angles ±90° (1° resolution)'],
      ['Sighting System', 'Large mirror lid with central sighting hairline and folding sighting vane for high-precision azimuth bearings'],
      ['Declination Setting', 'Internal gearing allows precise magnetic declination correction up to ±30° / ±30g'],
      ['Leveling Spirit Levels', 'Circular spirit level for horizontal leveling; tubular spirit level for vertical inclination reading'],
      ['Enclosure Material', 'Robust non-magnetic die-cast light metal with hard anodized protective finish'],
      ['Dimensions & Weight', 'Closed: 75 x 85 x 35 mm; Weight: approx. 280 g']
    ],
    features: [
      'Traditional Brunton-style transit layout enables direct sighting, mirror reflection sighting, and tripod surveying',
      'Movable counterweight on needle ensures balanced horizontal rotation anywhere across northern and southern zones',
      'High-visibility tubular spirit level coupled to the clinometer allows precise geological bed inclination measurement',
      'Integrated declination adjustment gear provides effortless calibration against regional magnetic variance',
      'Precision folding sighting arms allow accurate long-range triangulations and structural strike recordings'
    ],
    page: 48,
    subcategories: ['geological-field-mapping', 'mining-field-mapping', 'mining-survey', 'mining-compasses'],
    categoryIds: ['geology', 'mining', 'surveying'],
    tags: ['Pocket Transits', 'Geological Compasses', 'Survey Measurement', 'Field Transits']
  },

  // =========================================================================
  // BRAND 9: KENWOOD (Professional Communication Systems)
  // =========================================================================
  {
    slug: 'kenwood-tk-3701d',
    aliases: ['kenwood-tk3701d', 'protalk-tk-3701d'],
    name: 'ProTalk® TK-3701D Digital Transceiver',
    brand: 'Kenwood',
    category: 'communication',
    image: 'kenwood-tk-3701d',
    gallery: ['kenwood-tk-3701d'],
    label: 'LICENSE-FREE DIGITAL & ANALOGUE TWO-WAY RADIO',
    summary: 'Professional license-free digital dPMR446 and analogue PMR446 portable two-way radio featuring AMBE+2™ vocoder technology for crystal-clear audio, IP54/55 weather sealing, and MIL-STD-810 C/D/E/F/G military-grade durability.',
    specs: [
      ['Frequency Range', 'License-free PMR446 (Analogue: 446.0–446.2 MHz; Digital dPMR446: 446.1–446.2 MHz)'],
      ['Channel Capacity', '48 channels (16 analogue PMR446 channels + 32 digital dPMR446 channels across 3 zones)'],
      ['RF Output Power', '0.5 Watts ERP (compliant with European and international license-free standards)'],
      ['Audio Output & Vocoder', '1 Watt powerful audio amplifier with BTL design; AMBE+2™ digital vocoder for crisp voice'],
      ['Durability & Ingress', 'IP54/IP55 water jet and dust resistance; certified to MIL-STD-810 C, D, E, F, and G (11 categories)'],
      ['Battery & Runtime', 'High-capacity KNB-45L Li-ion battery delivering up to 18 hours (Battery Saver On)'],
      ['Operating Temperature', '-30°C to +60°C (-22°F to +140°F)'],
      ['Dimensions & Weight', '54 x 123 x 33.5 mm; approx. 280 g (with battery and antenna)']
    ],
    features: [
      'Dual digital/analogue capability allows seamless communication with legacy PMR446 fleets while upgrading to digital clarity',
      'Advanced AMBE+2 vocoder eliminates background wind, chainsaw, and engine noise during remote forestry work',
      'Rugged IP54/55 aluminum die-cast chassis survives rainstorms, dusty quarry perimeters, and repeated 1.2m drops',
      '48 programmed channels across 3 zones prevent cross-talk and channel congestion on busy expedition worksites',
      'Long-lasting 18-hour battery pack ensures dependable communication across full 12-hour field operations'
    ],
    page: 26,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Field Communications', 'License-Free Radios', 'Digital Transceivers']
  },
  {
    slug: 'kenwood-nx-1300de',
    aliases: ['kenwood-nx1300', 'nx-1300de'],
    name: 'NEXEDGE® NX-1300DE UHF Digital Transceiver',
    brand: 'Kenwood',
    category: 'communication',
    image: 'kenwood-nx-1300de',
    gallery: ['kenwood-nx-1300de'],
    label: 'COMMERCIAL DMR & ANALOGUE UHF TRANSCEIVER',
    summary: 'Professional DMR Tier II and FM analogue UHF portable two-way radio featuring automatic digital/analogue mixed mode, 7-colour LED status indicator, 5W RF output, IP54/55/67 immersion protection, and MIL-STD-810 compliance.',
    specs: [
      ['Frequency Band', 'UHF (400–470 MHz) commercial and industrial frequency spectrum'],
      ['Protocol Support', 'DMR Tier II (ETSI TS 102 361-1/2/3 compliant) and FM Analogue conventional'],
      ['RF Power Output', 'Selectable 5W (High) / 4W / 1W (Low) for tailored range and battery preservation'],
      ['Channels & Zones', 'Up to 64 channels across 4 zones (Standard keypad model)'],
      ['Ingress Protection', 'IP54, IP55, and IP67 immersion waterproof (submersible up to 1 meter for 30 minutes)'],
      ['Military Standards', 'MIL-STD-810 C, D, E, F, G, and H standards for shock, vibration, dust, and rain'],
      ['Audio Processing', 'Renowned Kenwood audio quality with Texas Instruments DSP and 1000 mW audio output'],
      ['Safety Alert Features', 'Emergency call key, Lone Worker alert, and optional motion-activated Man Down sensor']
    ],
    features: [
      'Mixed Mode operation automatically detects incoming DMR digital or FM analogue signals and replies in the same mode',
      'IP67 submersible housing survives total drop immersion in marshland, stream beds, and torrential rains',
      '7-colour LED light-bar on the top panel gives instantaneous visual feedback of call status and battery health',
      'High 5-watt transmit power ensures reliable long-range penetration through dense forest canopies and rocky ridges',
      'Programmable Emergency and Lone Worker protocols transmit emergency beacon signals to base stations automatically'
    ],
    page: 26,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Field Communications', 'DMR Radios', 'Tactical Radios']
  },
  {
    slug: 'kenwood-nx-3320e',
    aliases: ['kenwood-nx3320', 'nx-3320e'],
    name: 'NEXEDGE® NX-3320E UHF Multi-Protocol Transceiver',
    brand: 'Kenwood',
    category: 'communication',
    image: 'kenwood-nx-3320e',
    gallery: ['kenwood-nx-3320e'],
    label: 'MULTI-PROTOCOL NXDN & DMR UHF TRANSCEIVER',
    summary: 'Enterprise-grade multi-protocol digital transceiver supporting both NXDN and DMR Tier II protocols plus FM analogue, integrated GPS receiver and Bluetooth, active noise cancellation, and IP54/55/67 immersion protection.',
    specs: [
      ['Frequency Coverage', 'UHF (400–520 MHz wideband coverage)'],
      ['Multi-Protocol Architecture', 'NXDN conventional & trunked, DMR Tier II conventional, and FM Analogue'],
      ['GPS Positioning', 'Built-in high-sensitivity GPS receiver and antenna for automatic personnel location'],
      ['Bluetooth Connectivity', 'Integrated Bluetooth 4.0 for wireless covert headsets and hands-free operations'],
      ['RF Output', '5W / 4W / 1W selectable output power'],
      ['Audio Processing', 'Dual-microphone Active Noise Cancellation (ANC) with hardware DSP for extreme ambient noise suppression'],
      ['Ingress & Shock', 'IP54, IP55, and IP67 certified immersion protection; MIL-STD-810 C/D/E/F/G/H certified'],
      ['Encryption Options', 'Built-in 56-bit DES encryption standard; optional 256-bit AES encryption module support']
    ],
    features: [
      'Multi-protocol flexibility allows operation on NXDN or DMR digital networks without replacing radio hardware',
      'Integrated GPS module automatically transmits geospatial coordinates to command base stations during field emergencies',
      'Built-in Bluetooth enables hands-free wireless audio kits and integration with vehicle communication hubs',
      'Dual-mic Active Noise Cancellation filters out heavy machinery, helicopter, and chainsaw noise from transmitted voice',
      'Hardware 56-bit DES encryption protects mission-critical security, anti-poaching, and defense transmissions'
    ],
    page: 26,
    subcategories: ['defense-communication', 'defense-field-operations', 'field-communication-expedition-support'],
    categoryIds: ['communication', 'defense'],
    tags: ['Two-Way Radios', 'Field Communications', 'GPS Radios', 'Encrypted Radios']
  },

  // =========================================================================
  // BRAND 10: SUUNTO (Precision Sighting & Expedition Navigation)
  // =========================================================================
  {
    slug: 'suunto-kb-14-360',
    aliases: ['suunto-kb-14', 'suunto-kb14'],
    name: 'Suunto KB-14/360 Precision Bearing Compass',
    brand: 'Suunto',
    category: 'navigation',
    image: 'suunto-kb-14-360',
    gallery: ['suunto-kb-14-360'],
    label: 'HIGH-PRECISION HAND-HELD BEARING COMPASS',
    summary: 'Hand-held precision sighting bearing compass used worldwide by foresters, surveyors, geologists, and navigators, featuring an optical sighting reading scale with 1/3° accuracy, sapphire jewel bearing, and anodized alloy body.',
    specs: [
      ['Reading Accuracy', '1/3° (20\') optical reading accuracy with 0.5° graduation intervals'],
      ['Sighting Optics', 'Optical diopter sighting system with adjustable lens focusing for parallax-free bearing'],
      ['Bearing Suspension', 'High-damped damping liquid with sapphire jewel pivot bearing for instant steady reading'],
      ['Housing Construction', 'Anodized corrosion-resistant light-alloy housing with lanyard attachment hole'],
      ['Tripod Mounting', 'Built-in 1/4" brass tripod thread in the base for stationary survey setups'],
      ['Declination Setting', 'Available with internal declination correction scale'],
      ['Operating Temperature', '-30°C to +60°C (-22°F to +140°F)'],
      ['Dimensions & Weight', '77 x 52 x 15 mm; Weight: approx. 93 g']
    ],
    features: [
      'Optical sighting design allows direct, instantaneous bearing readings accurate to 1/3 of a degree',
      'Liquid-filled damping chamber and sapphire bearing ensure rapid needle settling without vibration',
      'Compact 93g anodized aluminum alloy body resists drops, moisture, and corrosion in coastal or tropical climates',
      'Integrated 1/4" tripod thread allows mounting on survey poles and camera tripods for high-accuracy triangulation',
      'Trusted worldwide as the gold standard sighting instrument for forest inventory, mining exploration, and military navigation'
    ],
    page: 24,
    subcategories: ['defense-navigation', 'defense-field-operations'],
    categoryIds: ['navigation', 'defense', 'surveying'],
    tags: ['Bearing Compasses', 'Precision Compasses', 'Field Navigation', 'Surveying Compasses']
  },
  {
    slug: 'suunto-pm-5-360',
    aliases: ['suunto-pm-5', 'suunto-pm5'],
    name: 'Suunto PM-5/360 Optical Clinometer & Height Meter',
    brand: 'Suunto',
    category: 'navigation',
    image: 'suunto-pm-5-360',
    gallery: ['suunto-pm-5-360'],
    label: 'PRECISION OPTICAL CLINOMETER & HEIGHT METER',
    summary: 'Professional optical sighting clinometer used globally by foresters, surveyors, and geologists for rapid, high-accuracy measurement of heights, vertical angles, slopes, and gradients, featuring dual 0–90° and 0–150% scales.',
    specs: [
      ['Scale Graduations', 'Dual scales: Degrees (0–90° with 0.5° graduation) and Percent (0–150% gradient with 1% graduation)'],
      ['Reading Accuracy', '1/4° optical resolution; height readings direct to 0.5m / 0.5ft with trigonometric baseline'],
      ['Sighting Optics', 'Parallax-free optical diopter viewfinder with adjustable focusing eye-lens'],
      ['Card Suspension', 'Liquid-damped card assembly oscillating on a precision sapphire jewel bearing'],
      ['Body Material', 'Heavy-duty anodized light-alloy aluminum housing with lanyard attachment loop'],
      ['Mounting Socket', 'Built-in 1/4" brass tripod socket on base'],
      ['Operating Range', '-30°C to +60°C (-22°F to +140°F)'],
      ['Dimensions & Weight', '77 x 52 x 15 mm; Weight: approx. 94 g']
    ],
    features: [
      'Dual degree and percentage scales allow simultaneous recording of slope gradient and vertical angle in one look',
      'Optical viewfinder allows user to sight target object and measurement reticle simultaneously with zero parallax',
      'Liquid damping fluid and sapphire jewel pivot eliminate scale shaking for instant, rock-solid readings',
      'Compact 94g anodized alloy pocket body fits easily into field vests and withstands aggressive outdoor field abuse',
      'Indispensable field tool for forest canopy height estimation, geological slope stability, and telecoms tower surveys'
    ],
    page: 24,
    subcategories: ['defense-navigation', 'defense-field-operations'],
    categoryIds: ['navigation', 'forestry', 'geology'],
    tags: ['Clinometers', 'Height Meters', 'Forestry Measurement', 'Slope Measurement']
  },
  {
    slug: 'suunto-mb-6-global',
    aliases: ['suunto-mb-6', 'suunto-mb6'],
    name: 'Suunto MB-6 Global Matchbox Sighting Compass',
    brand: 'Suunto',
    category: 'navigation',
    image: 'suunto-mb-6-global',
    gallery: ['suunto-mb-6-global'],
    label: 'GLOBALLY BALANCED MATCHBOX SIGHTING COMPASS',
    summary: 'Rugged matchbox-style mirror sighting compass featuring Suunto’s patented globally balanced needle technology for worldwide operation, built-in clinometer for vertical slopes, and adjustable declination correction.',
    specs: [
      ['Needle Technology', 'Patented Suunto Global Needle (balanced for operation in both Northern and Southern hemispheres)'],
      ['Bearing Resolution', '2° resolution with 2° graduations on azimuth bezel'],
      ['Clinometer Scale', 'Integrated vertical clinometer measuring slope angles from -90° to +90° (2° increments)'],
      ['Sighting Mechanism', 'Matchbox sliding housing with lid mirror, sighting hole, and luminescent notch'],
      ['Declination Correction', 'Adjustable declination screw on back plate with included calibration tool'],
      ['Enclosure Protection', 'Heavy-duty high-impact composite matchbox casing that slides shut to protect internal glass'],
      ['Temperature Rating', '-30°C to +60°C (-22°F to +140°F)'],
      ['Dimensions & Weight', '67 x 47 x 22 mm (closed); Weight: approx. 57 g']
    ],
    features: [
      'Patented Global Needle functions seamlessly worldwide across both hemispheres without tilting or binding',
      'Sliding matchbox enclosure completely encloses the compass capsule and mirror to protect against crushing and grit',
      'Sighting mirror with sighting hole enables precise triangulation bearings to distant peaks and landmarks',
      'Integrated clinometer provides instant slope gradient readings for avalanche risk assessment and geological bedding',
      'Luminescent bezel markings allow accurate compass navigation and bearing holds in deep dusk and night conditions'
    ],
    page: 24,
    subcategories: ['defense-navigation', 'defense-field-operations'],
    categoryIds: ['navigation', 'defense'],
    tags: ['Sighting Compasses', 'Mirror Compasses', 'Global Compasses', 'Field Navigation']
  },
  {
    slug: 'suunto-race-2',
    aliases: ['suunto-race', 'race-2'],
    name: 'Suunto Race 2 AMOLED GPS Sports Watch',
    brand: 'Suunto',
    category: 'navigation',
    image: 'suunto-race-2',
    gallery: ['suunto-race-2'],
    label: 'HIGH-PERFORMANCE AMOLED EXPEDITION GPS WATCH',
    summary: 'Flagship outdoor and expedition GPS watch featuring a brilliant 1.43" AMOLED touchscreen, dual-band multi-GNSS tracking, free offline worldwide topographic maps, HRV recovery analytics, and up to 40 days battery life.',
    specs: [
      ['Display', '1.43-inch AMOLED high-brightness touchscreen (466 x 466 pixels) with digital crown navigation'],
      ['Lens & Bezel Material', 'Sapphire crystal glass with high-grade Titanium / Stainless Steel bezel'],
      ['Satellite Positioning', 'Dual-frequency L1 + L5 GNSS tracking GPS, GLONASS, Galileo, BeiDou, and QZSS'],
      ['Mapping & Navigation', 'Free global offline topographic maps with terrain contours, trails, and breadcrumb route navigation'],
      ['Battery Performance', 'Daily smartwatch mode: Up to 26–40 days; All-Systems Dual-Band GPS: Up to 40–50 hours; Tour mode: Up to 120 hours'],
      ['Water & Shock Durability', '100 meters water resistance (10 ATM); tested to military standards for thermal and shock resistance'],
      ['Integrated Sensors', 'Barometric Altimeter, 3-axis Compass, Optical Wrist HR, HRV measurement, Pulse Oximeter'],
      ['Dimensions & Weight', '49 x 49 x 13.3 mm; approx. 69 g (Titanium) to 83 g (Stainless Steel)']
    ],
    features: [
      'Vibrant 1.43-inch AMOLED touchscreen paired with an intuitive digital crown allows fluid map zooming and menu navigation',
      'Free global offline vector topographic maps downloadable directly via Wi-Fi ensure absolute navigation autonomy off-grid',
      'Dual-frequency L1/L5 GNSS receiver delivers pinpoint accuracy in deep canyons, dense alpine forests, and steep mountain valleys',
      'Incredible battery life provides up to 50 continuous hours of high-precision dual-band GPS tracking on single charge',
      'Advanced Heart Rate Variability (HRV) recovery metrics monitor physical fatigue and expedition readiness'
    ],
    page: 24,
    subcategories: ['defense-navigation'],
    categoryIds: ['navigation', 'defense'],
    tags: ['Smartwatches', 'Expedition GPS', 'AMOLED Watches', 'Wearable Navigation']
  }
];
