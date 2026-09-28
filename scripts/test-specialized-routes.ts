import { products } from '../lib/catalogue';
import { forestSubcategories, forestTagsBySubcategory } from '../lib/forest-categories';
import { geologySubcategories, geologyTagsBySubcategory } from '../lib/geology-categories';
import { defenseCategory, miningCategory } from '../lib/specialized-categories';
import { productMatchesFilter } from '../lib/product-taxonomy';

console.log('=== TESTING SPECIALIZED SUBCATEGORY ROUTES ===\n');

// 1. Forest & Wildlife subcategories
console.log('--- Forest & Wildlife Subcategories ---');
for (const sub of forestSubcategories) {
  const subProducts = products.filter(p => p.subcategories?.includes(sub.id));
  console.log(`Subcategory: "${sub.name}" (${sub.id}) - Products: ${subProducts.length}`);
  const tags = forestTagsBySubcategory[sub.id] || [];
  for (const tag of tags) {
    const directMatches = subProducts.filter(p => p.tags?.includes(tag));
    const taxonomyMatches = subProducts.filter(p => productMatchesFilter(p, tag));
    console.log(`  Tag: "${tag}" -> Direct: ${directMatches.length} | Taxonomy: ${taxonomyMatches.length}`);
  }
}

// 2. Geology subcategories
console.log('\n--- Geology Subcategories ---');
for (const sub of geologySubcategories) {
  const subProducts = products.filter(p => p.subcategories?.includes(sub.id));
  console.log(`Subcategory: "${sub.name}" (${sub.id}) - Products: ${subProducts.length}`);
  const tags = geologyTagsBySubcategory[sub.id] || [];
  for (const tag of tags) {
    const directMatches = subProducts.filter(p => p.tags?.includes(tag));
    const taxonomyMatches = subProducts.filter(p => productMatchesFilter(p, tag));
    console.log(`  Tag: "${tag}" -> Direct: ${directMatches.length} | Taxonomy: ${taxonomyMatches.length}`);
  }
}

// 3. Defense subcategories
console.log('\n--- Defense Subcategories ---');
for (const sub of defenseCategory.subcategories) {
  const subProducts = products.filter(p => p.subcategories?.includes(sub.id));
  console.log(`Subcategory: "${sub.name}" (${sub.id}) - Products: ${subProducts.length}`);
  const tags = sub.tags || [];
  for (const tag of tags) {
    const directMatches = subProducts.filter(p => p.tags?.includes(tag));
    const taxonomyMatches = subProducts.filter(p => productMatchesFilter(p, tag));
    console.log(`  Tag: "${tag}" -> Direct: ${directMatches.length} | Taxonomy: ${taxonomyMatches.length}`);
  }
}

// 4. Mining subcategories
console.log('\n--- Mining Subcategories ---');
for (const sub of miningCategory.subcategories) {
  const subProducts = products.filter(p => p.subcategories?.includes(sub.id));
  console.log(`Subcategory: "${sub.name}" (${sub.id}) - Products: ${subProducts.length}`);
}
