'use client';
import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { categories, products, type Product } from '@/lib/catalogue';

export default function ProductsPage() {
  const [quote, setQuote] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activeTag !== 'all') {
      result = result.filter(p => p.tags?.includes(activeTag));
    }
    return result;
  }, [activeCategory, activeTag]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach(p => {
      p.tags?.forEach(t => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <main id="top" className="detail-page">
      <Header onQuote={() => setQuote(true)} />
      
      <section className="product-detail-hero" style={{ padding: '8rem 2rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span className="eyebrow"><span className="yellow-rule"/> THE FIELD SELECTION</span>
          <h1>All Products.</h1>
          
          <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <select 
              value={activeCategory} 
              onChange={e => { setActiveCategory(e.target.value); setActiveTag('all'); }}
              style={{ padding: '0.5rem 1rem', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
            >
              <option value="all">All Categories</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>

            <select 
              value={activeTag} 
              onChange={e => setActiveTag(e.target.value)}
              style={{ padding: '0.5rem 1rem', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
            >
              <option value="all">All Product Types</option>
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          
          <div className="catalogue-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', display: 'grid' }}>
            {filteredProducts.map(p => (
              <a key={p.slug} href={`/products/${p.slug}`} className="product-panel compact-product" style={{ textDecoration: 'none' }}>
                <div className="product-visual">
                  <span className="product-type">{p.label}</span>
                  <img src={`/images/${p.image}.webp`} alt={`${p.brand} ${p.name}`} loading="lazy" width={500} height={400} />
                  <span className="product-open"><ArrowUpRight size={20}/></span>
                </div>
                <div className="product-caption" style={{ padding: '1.5rem', background: '#0a0a0a' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#888', textTransform: 'uppercase' }}>{p.brand}</span>
                  <h3 style={{ margin: '0.25rem 0', fontSize: '1.25rem', color: '#fff' }}>{p.name}</h3>
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--yellow)', fontWeight: 500 }}>
                    View Product <ArrowUpRight size={16}/>
                  </div>
                </div>
              </a>
            ))}
            {filteredProducts.length === 0 && (
              <div style={{ gridColumn: '1 / -1', padding: '4rem 0', textAlign: 'center', color: '#888' }}>
                No products found matching the selected filters.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer onQuote={() => setQuote(true)} />
      <QuoteDialog open={quote} onOpenChange={setQuote} />
    </main>
  );
}
