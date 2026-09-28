import { categories, products, productBelongsToCategory } from '../lib/catalogue';
import {
  CATEGORY_FILTER_GROUPS,
  TAG_ALIASES,
  normalizeProductTag,
  getProductCanonicalTags,
  productMatchesFilter,
  getCategoryFilters,
  CANONICAL_PRODUCT_TYPES,
} from '../lib/product-taxonomy';

console.log('=== CANONICAL TAXONOMY VERIFICATION ===\n');
console.log(`Global Canonical Product Types Count: ${CANONICAL_PRODUCT_TYPES.length}`);
console.log(CANONICAL_PRODUCT_TYPES.map(t => `  - ${t}`).join('\n'));

console.log('\n=== VERIFYING EVERY CATEGORY ===');
let overallPass = true;

for (const cat of categories) {
  const catProducts = products.filter(p => productBelongsToCategory(p, cat.id));
  const activeFilters = getCategoryFilters(cat.id, catProducts);

  console.log(`\n-------------------------------------------------------`);
  console.log(`CATEGORY: ${cat.name} (${cat.id})`);
  console.log(`Product Count: ${catProducts.length}`);
  console.log(`Active Canonical Filters Count: ${activeFilters.length}`);
  console.log(`Filters & Counts:`);
  for (const f of activeFilters) {
    console.log(`  - ${f.tag}: ${f.count} products`);
  }

  // Check that union of products covers 100% of catProducts
  const coveredSlugs = new Set<string>();
  for (const f of activeFilters) {
    const matching = catProducts.filter(p => productMatchesFilter(p, f.tag, cat.id));
    matching.forEach(p => coveredSlugs.add(p.slug));
  }

  const uncovered = catProducts.filter(p => !coveredSlugs.has(p.slug));
  if (uncovered.length > 0) {
    overallPass = false;
    console.log(`FAIL: ${uncovered.length} UNCOVERED PRODUCTS:`, uncovered.map(p => p.slug));
  } else {
    console.log(`PASS: All ${catProducts.length} products covered by canonical filters!`);
  }
}

console.log(`\n=======================================================`);
console.log(`FINAL STATUS: ${overallPass ? 'ALL 11 CATEGORIES PASSED 100%' : 'FAILURES OCCURRED'}`);
console.log(`=======================================================`);
