import * as fs from 'fs';
import * as path from 'path';
import { categories, products, productBelongsToCategory } from '../lib/catalogue';

const reportLines: string[] = [];

function log(line = '') {
  reportLines.push(line);
}

log('# Phase 6 — Global Category / Tag Taxonomy Audit (BEFORE)');
log(`Generated at: ${new Date().toISOString()}`);
log(`Total Products: ${products.length}`);

const allUniqueTags = new Set<string>();
products.forEach(p => p.tags?.forEach(t => allUniqueTags.add(t)));
log(`Total Unique Tags across all products: ${allUniqueTags.size}\n`);

// Summary Table
log('## Top-Level Categories Summary');
log('| Category ID | Category Name | Product Count | Unique Tags Count |');
log('|---|---|---|---|');

const categoryData: Array<{
  id: string;
  name: string;
  productCount: number;
  tags: [string, number][];
}> = [];

for (const cat of categories) {
  const catProducts = products.filter(p => productBelongsToCategory(p, cat.id));
  const tagCounts: Record<string, number> = {};

  for (const p of catProducts) {
    if (!p.tags) continue;
    for (const t of p.tags) {
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    }
  }

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  categoryData.push({
    id: cat.id,
    name: cat.name,
    productCount: catProducts.length,
    tags: sortedTags,
  });

  log(`| \`${cat.id}\` | ${cat.name} | ${catProducts.length} | ${sortedTags.length} |`);
}

log('\n---\n');

// Detail for each category
for (const cat of categoryData) {
  log(`## Category: ${cat.name} (\`${cat.id}\`)`);
  log(`- **Product Count**: ${cat.productCount}`);
  log(`- **Unique Tags Count**: ${cat.tags.length}\n`);

  log('### Current Tags and Usage Counts:');
  for (const [tag, count] of cat.tags) {
    log(`- \`${tag}\`: ${count} product(s)`);
  }
  log('');

  // Overlap & Synonym Detection
  log('### Detected Likely Overlaps / Synonyms / Micro-tags:');
  const tagList = cat.tags.map(t => t[0]);

  // Group tags by common key words or roots
  const stemGroups: Record<string, string[]> = {
    'GPS / GNSS': tagList.filter(t => /gps|gnss|navigation/i.test(t)),
    'Thermal / Heat': tagList.filter(t => /thermal|thermography|radiometric|heat/i.test(t)),
    'Night Vision / IR': tagList.filter(t => /night|nvg|infrared|\bir\b/i.test(t)),
    'Optics / Binoculars / Scopes': tagList.filter(t => /optics|ocular|binocular|monocular|spotting|scope|rangefinder/i.test(t)),
    'Compasses / Bearings': tagList.filter(t => /compass|transit|clinometer|bearing|sighting/i.test(t)),
    'Inspection / Borescopes': tagList.filter(t => /borescope|endoscope|inspection/i.test(t)),
    'Cameras / Traps / Surveillance': tagList.filter(t => /camera|cctv|surveillance|trap/i.test(t)),
    'Radio / Communications': tagList.filter(t => /radio|communication|transceiver|dmr|pmr|p25/i.test(t)),
    'Computing / Tablets': tagList.filter(t => /comput|laptop|tablet|toughbook/i.test(t)),
    'Hammers / Tools / Cutting': tagList.filter(t => /hammer|pick|chisel|bar|axe|chainsaw|cutting|felling/i.test(t)),
    'Measurement / Books / Scales / Loupes': tagList.filter(t => /measur|book|scale|loupe|lens|ruler|tape|caliper/i.test(t)),
  };

  let foundAnyGroup = false;
  for (const [groupName, matches] of Object.entries(stemGroups)) {
    if (matches.length > 1) {
      foundAnyGroup = true;
      log(`- **${groupName} (${matches.length} variants)**: ${matches.map(m => `\`${m}\``).join(', ')}`);
    }
  }
  if (!foundAnyGroup) {
    log('- None detected by keyword clusters.');
  }

  log('\n---\n');
}

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'audit-results.md'), reportLines.join('\n'), 'utf-8');
console.log('Taxonomy audit written to scripts/audit-results.md');
