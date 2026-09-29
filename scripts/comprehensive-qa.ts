import fs from 'fs';
import path from 'path';
import { products, categories, productBelongsToCategory } from '../lib/catalogue';
import { brandDatabase, getBrandInfo } from '../lib/brand-info';
import { navigationBrands, matchProductBrand } from '../lib/navigation-data';
import {
  CANONICAL_PRODUCT_TYPES,
  CATEGORY_FILTER_GROUPS,
  TAG_ALIASES,
  getProductCanonicalTags,
  productMatchesFilter,
  getCategoryFilters,
  getSpecializedSubcategoryFilters,
  productMatchesSpecializedFilter
} from '../lib/product-taxonomy';
import { defenseCategory } from '../lib/specialized-categories';

console.log('========================================================');
console.log('COMPREHENSIVE CANON & GOPRO QA AUDIT');
console.log('========================================================\n');

// 1. Product Counts
console.log(`Total Products: ${products.length}`);
const canonProds = products.filter(p => p.brand === 'Canon');
const goproProds = products.filter(p => p.brand === 'GoPro');
console.log(`Canon Products Count: ${canonProds.length}`);
console.log(`GoPro Products Count: ${goproProds.length}`);

// 2. Slug uniqueness
const slugs = new Set<string>();
const duplicateSlugs: string[] = [];
for (const p of products) {
  if (slugs.has(p.slug)) duplicateSlugs.push(p.slug);
  slugs.add(p.slug);
}
console.log(`Duplicate Slugs Count: ${duplicateSlugs.length}`);
if (duplicateSlugs.length > 0) console.log('Duplicate slugs:', duplicateSlugs);

// 3. Image existence
const imagesDir = path.resolve('public/images');
const missingImages: string[] = [];
for (const p of products) {
  const mainImg = path.join(imagesDir, `${p.image}.webp`);
  if (!fs.existsSync(mainImg)) missingImages.push(`${p.slug} main: ${p.image}.webp`);
  for (const g of p.gallery) {
    const galImg = path.join(imagesDir, `${g}.webp`);
    if (!fs.existsSync(galImg)) missingImages.push(`${p.slug} gallery: ${g}.webp`);
  }
}
console.log(`Missing / Broken Images Count: ${missingImages.length}`);
if (missingImages.length > 0) console.log('Missing images:', missingImages);

// 4. Price leakage in new products
const priceRegex = /[$₹]|INR|MRP|Price:/i;
const priceLeaks: string[] = [];
for (const p of [...canonProds, ...goproProds]) {
  const jsonStr = JSON.stringify(p);
  if (priceRegex.test(jsonStr)) {
    priceLeaks.push(`${p.slug} contains price characters!`);
  }
}
console.log(`Price Leaks Count in New Products: ${priceLeaks.length}`);
if (priceLeaks.length > 0) console.log('Price leaks:', priceLeaks);

// 5. Brand Database & Profile check
console.log('\n--- BRAND PROFILES ---');
const canonInfo = getBrandInfo('Canon');
console.log('Canon Brand Info:', canonInfo);
console.log('Canon has website field:', Boolean(canonInfo?.website));

const goproInfo = getBrandInfo('GoPro');
console.log('GoPro Brand Info:', goproInfo);
console.log('GoPro has website field:', Boolean(goproInfo?.website));

// 6. Navigation Brands check
console.log('\n--- NAVIGATION BRANDS ---');
const navCanon = navigationBrands.find(b => b.name === 'Canon');
const navGoPro = navigationBrands.find(b => b.name === 'GoPro');
console.log('Canon in navigationBrands:', Boolean(navCanon));
console.log('GoPro in navigationBrands:', Boolean(navGoPro));

// 7. Canon Defense & Optics Visibility
console.log('\n--- CANON VISIBILITY ---');
const opticsProds = products.filter(p => productBelongsToCategory(p, 'optics'));
const defenseProds = products.filter(p => productBelongsToCategory(p, 'defense'));
const defenseOpticsProds = products.filter(p => p.subcategories?.includes('defense-optics'));

const canonInOptics = canonProds.filter(p => productBelongsToCategory(p, 'optics'));
const canonInDefense = canonProds.filter(p => productBelongsToCategory(p, 'defense'));
const canonInDefenseOptics = canonProds.filter(p => p.subcategories?.includes('defense-optics'));
console.log(`Canon in /category/optics: ${canonInOptics.length} / ${canonProds.length}`);
console.log(`Canon in /category/defense: ${canonInDefense.length} / ${canonProds.length}`);
console.log(`Canon in defense-optics subcategory: ${canonInDefenseOptics.length} / ${canonProds.length}`);

// Check Canon 12x36 IS III specifically
const c12x36 = products.find(p => p.slug === 'canon-12x36-is-iii');
console.log('Canon 12x36 IS III present:', Boolean(c12x36));
if (c12x36) {
  console.log('  Name:', c12x36.name);
  console.log('  Brand:', c12x36.brand);
  console.log('  Category:', c12x36.category);
  console.log('  CategoryIds:', c12x36.categoryIds);
  console.log('  Subcategories:', c12x36.subcategories);
  console.log('  Tags:', c12x36.tags);
  console.log('  Specs count:', c12x36.specs.length);
  console.log('  Features count:', c12x36.features.length);
}

// 8. GoPro Taxonomy & Visibility
console.log('\n--- GOPRO VISIBILITY ---');
const goproInDefense = goproProds.filter(p => productBelongsToCategory(p, 'defense'));
const goproInSurveillance = goproProds.filter(p => p.subcategories?.includes('defense-surveillance'));
const goproInFieldOps = goproProds.filter(p => p.subcategories?.includes('defense-field-operations'));
console.log(`GoPro in /category/defense: ${goproInDefense.length} / ${goproProds.length}`);
console.log(`GoPro in defense-surveillance: ${goproInSurveillance.length} / ${goproProds.length}`);
console.log(`GoPro in defense-field-operations: ${goproInFieldOps.length} / ${goproProds.length}`);

// 9. MatchProductBrand check
console.log('\n--- BRAND FILTER MATCHING ---');
const matchedCanon = products.filter(p => matchProductBrand(p, 'Canon'));
const matchedGoPro = products.filter(p => matchProductBrand(p, 'GoPro'));
console.log(`matchProductBrand('Canon'): ${matchedCanon.length} products`);
console.log(`matchProductBrand('GoPro'): ${matchedGoPro.length} products`);

console.log('\n========================================================');
console.log('AUDIT COMPLETE');
console.log('========================================================');
