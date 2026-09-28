import { products } from '../lib/catalogue';
import { forestSubcategories, forestTagsBySubcategory } from '../lib/forest-categories';
import { geologySubcategories, geologyTagsBySubcategory } from '../lib/geology-categories';
import { defenseCategory, miningCategory } from '../lib/specialized-categories';
import { productMatchesSpecializedFilter, getSpecializedSubcategoryFilters } from '../lib/product-taxonomy';

console.log('=== TESTING SPECIALIZED SUBCATEGORY ROUTES ===\n');

const allSubs = [
  ...forestSubcategories.map(s => ({ ...s, section: 'Forestry', tags: forestTagsBySubcategory[s.id] || [] })),
  ...geologySubcategories.map(s => ({ ...s, section: 'Geology', tags: geologyTagsBySubcategory[s.id] || [] })),
  ...defenseCategory.subcategories.map(s => ({ ...s, section: 'Defense', tags: s.tags || [] })),
  ...miningCategory.subcategories.map(s => ({ ...s, section: 'Mining', tags: s.tags || [] })),
];

let allPassed = true;

for (const sub of allSubs) {
  const subProducts = products.filter(p => p.subcategories?.includes(sub.id));
  const availableFilters = getSpecializedSubcategoryFilters(sub.id, subProducts);
  console.log(`[${sub.section}] Subcategory: "${sub.name}" (${sub.id}) - Total Products: ${subProducts.length} - Active Filters: ${availableFilters.length}`);
  
  const covered = new Set<string>();
  for (const filter of availableFilters) {
    const matches = subProducts.filter(p => productMatchesSpecializedFilter(p, filter.tag, sub.id));
    console.log(`  Filter: "${filter.tag}" -> Count: ${filter.count} (Matches: ${matches.length})`);
    matches.forEach(p => covered.add(p.slug));
  }
  
  const uncovered = subProducts.filter(p => !covered.has(p.slug));
  if (uncovered.length > 0) {
    allPassed = false;
    console.error(`  >>> ERROR: ${uncovered.length} orphan products in ${sub.id}:`, uncovered.map(p => p.slug));
  } else {
    console.log(`  >>> PASSED: 100% coverage, 0 orphans.\n`);
  }
}

if (!allPassed) {
  console.error('\nFAILED: Some subcategories had orphan products.');
  process.exit(1);
} else {
  console.log('\nSUCCESS: All 22 subcategories passed with 100% coverage!');
}
