import fs from 'fs';
import path from 'path';
import { products, type Product } from '../lib/catalogue';

console.log('========================================================');
console.log('PHASE 7 — GARMIN HANDHELD GPS EXPANSION AUDIT');
console.log('========================================================\n');

// 1. Total products count
console.log(`Total Products Count: ${products.length} (Expected: 340)`);

// 2. Garmin products
const garminProducts = products.filter(p => p.brand.toLowerCase() === 'garmin');
console.log(`Garmin Brand Products Count: ${garminProducts.length} (Expected: 12)`);

// 3. Check 5 new products
const expectedNewSlugs = [
  'garmin-etrex-22x',
  'garmin-etrex-32x',
  'garmin-montana-710',
  'garmin-gps-12h',
  'garmin-gpsmap-79s'
];

let allNewPresent = true;
for (const slug of expectedNewSlugs) {
  const p = products.find(prod => prod.slug === slug);
  if (!p) {
    console.error(`FAIL: Missing product ${slug}`);
    allNewPresent = false;
  } else {
    console.log(`PASS: Found ${slug} -> "${p.name}" (Brand: ${p.brand}, Category: ${p.category})`);
    console.log(`      Categories: ${JSON.stringify(p.categoryIds)}`);
    console.log(`      Subcategories: ${JSON.stringify(p.subcategories)}`);
    console.log(`      Tags: ${JSON.stringify(p.tags)}`);
    console.log(`      Specs count: ${p.specs?.length}, Features count: ${p.features?.length}`);
  }
}

// 4. Duplicate slug check
const slugCounts = new Map<string, number>();
products.forEach(p => {
  slugCounts.set(p.slug, (slugCounts.get(p.slug) || 0) + 1);
});
const duplicateSlugs = [...slugCounts.entries()].filter(([_, count]) => count > 1);
console.log(`\nDuplicate Slugs Count: ${duplicateSlugs.length}`);
if (duplicateSlugs.length > 0) {
  console.error('FAIL: Duplicate slugs found:', duplicateSlugs);
}

// 5. Alias collision check
const allIdent = new Map<string, string>();
let aliasCollisions = 0;
products.forEach(p => {
  if (allIdent.has(p.slug)) {
    console.error(`Collision: slug ${p.slug} already registered for ${allIdent.get(p.slug)}`);
    aliasCollisions++;
  }
  allIdent.set(p.slug, p.slug);
  p.aliases?.forEach(a => {
    if (allIdent.has(a) && allIdent.get(a) !== p.slug) {
      console.error(`Collision: alias ${a} of ${p.slug} collides with ${allIdent.get(a)}`);
      aliasCollisions++;
    }
    allIdent.set(a, p.slug);
  });
});
console.log(`Alias Collisions Count: ${aliasCollisions}`);

// 6. Check existing garmin-gpsmap-65s
const gpsmap65s = products.filter(p => p.slug === 'garmin-gpsmap-65s');
console.log(`\ngarmin-gpsmap-65s instances: ${gpsmap65s.length} (Expected: 1)`);
if (gpsmap65s.length === 1) {
  const p = gpsmap65s[0];
  console.log(`gpsmap-65s Name: "${p.name}"`);
  console.log(`gpsmap-65s Image: "${p.image}"`);
  console.log(`gpsmap-65s Tags: ${JSON.stringify(p.tags)}`);
  console.log(`gpsmap-65s CategoryIds: ${JSON.stringify(p.categoryIds)}`);
  console.log(`gpsmap-65s Specs count: ${p.specs?.length}`);
}

// 7. Verify naming requirements
const gps12h = products.find(p => p.slug === 'garmin-gps-12h');
if (gps12h) {
  const isCorrect = gps12h.name === 'GPS 12H';
  console.log(`\nGPS 12H Name Verification: "${gps12h.name}" (Correct: ${isCorrect})`);
  if (!isCorrect) console.error('FAIL: GPS 12H should NOT be named GPSMAP 12H');
}

const gpsmap79s = products.find(p => p.slug === 'garmin-gpsmap-79s');
if (gpsmap79s) {
  const isCorrect = gpsmap79s.name === 'GPSMAP® 79s';
  console.log(`GPSMAP 79s Name Verification: "${gpsmap79s.name}" (Correct: ${isCorrect})`);
}

// 8. Image asset verification
console.log('\n--- IMAGE ASSET VERIFICATION ---');
let missingImages = 0;
const allGarminImages = [
  ...garminProducts.map(p => p.image),
  ...garminProducts.flatMap(p => p.gallery || [])
];
const uniqueGarminImages = [...new Set(allGarminImages)];
for (const img of uniqueGarminImages) {
  const imgPath = path.join(process.cwd(), 'public/images', `${img}.webp`);
  if (!fs.existsSync(imgPath)) {
    console.error(`FAIL: Missing image public/images/${img}.webp`);
    missingImages++;
  } else {
    const stat = fs.statSync(imgPath);
    if (stat.size === 0) {
      console.error(`FAIL: Empty image public/images/${img}.webp`);
      missingImages++;
    } else {
      console.log(`PASS: public/images/${img}.webp exists (${stat.size} bytes)`);
    }
  }
}
console.log(`Missing / Broken Images Count: ${missingImages}`);

// 9. Price leakage check
console.log('\n--- PRICE LEAKAGE CHECK ---');
let priceLeaks = 0;
const pricePattern = /[₹$]|MRP|Sale Price|Price:/i;
for (const p of garminProducts) {
  const textBlob = JSON.stringify({
    name: p.name,
    summary: p.summary,
    specs: p.specs,
    features: p.features,
    label: p.label
  });
  if (pricePattern.test(textBlob)) {
    console.error(`FAIL: Price pattern detected in ${p.slug}!`);
    priceLeaks++;
  }
}
console.log(`Price Leaks Count in Garmin Products: ${priceLeaks}`);

// 10. Warranty leakage check
console.log('\n--- WARRANTY LEAKAGE CHECK ---');
let warrantyLeaks = 0;
for (const p of garminProducts) {
  const textBlob = JSON.stringify({
    name: p.name,
    summary: p.summary,
    specs: p.specs,
    features: p.features,
    label: p.label
  }).toLowerCase();
  if (textBlob.includes('vortex') || textBlob.includes('vip warranty')) {
    console.error(`FAIL: Vortex VIP warranty leaked into ${p.slug}!`);
    warrantyLeaks++;
  }
}
console.log(`Warranty Leaks Count in Garmin Products: ${warrantyLeaks}`);

console.log('\n========================================================');
console.log('AUDIT COMPLETED');
console.log('========================================================');
