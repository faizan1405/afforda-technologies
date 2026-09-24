'use client';

import { useState, useMemo, useEffect } from 'react';
import { ArrowUpRight, Filter, X } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { categories, products, productBelongsToCategory } from '@/lib/catalogue';
import { navigationBrands, matchProductBrand } from '@/lib/navigation-data';

export default function ProductsPage() {
  const [quote, setQuote] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string>('all');
  const [activeBrand, setActiveBrand] = useState<string>('all');

  // Read URL params on client mount and whenever popstate or custom filter event fires
  useEffect(() => {
    const syncFiltersFromUrl = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const urlBrand = params.get('brand');
      const urlCategory = params.get('category');
      setActiveBrand(urlBrand || 'all');
      setActiveCategory(urlCategory || 'all');
    };

    syncFiltersFromUrl();
    window.addEventListener('popstate', syncFiltersFromUrl);
    window.addEventListener('brand-filter-change', syncFiltersFromUrl);

    return () => {
      window.removeEventListener('popstate', syncFiltersFromUrl);
      window.removeEventListener('brand-filter-change', syncFiltersFromUrl);
    };
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter(p => productBelongsToCategory(p, activeCategory));
    }
    if (activeBrand !== 'all') {
      result = result.filter(p => matchProductBrand(p, activeBrand));
    }
    if (activeTag !== 'all') {
      result = result.filter(p => p.tags?.includes(activeTag));
    }
    return result;
  }, [activeCategory, activeBrand, activeTag]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach(p => {
      p.tags?.forEach(t => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

  const allBrands = useMemo(() => {
    const brandSet = new Set<string>();
    navigationBrands.forEach(b => brandSet.add(b.name));
    products.forEach(p => {
      if (p.brand && p.brand !== 'AFFORDA') {
        brandSet.add(p.brand);
      }
    });
    return Array.from(brandSet).sort();
  }, []);

  const handleBrandChange = (brand: string) => {
    setActiveBrand(brand);
    const url = new URL(window.location.href);
    if (brand === 'all') {
      url.searchParams.delete('brand');
    } else {
      url.searchParams.set('brand', brand);
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveTag('all');
    const url = new URL(window.location.href);
    if (cat === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', cat);
    }
    window.history.replaceState({}, '', url.toString());
  };

  const clearAllFilters = () => {
    setActiveBrand('all');
    setActiveCategory('all');
    setActiveTag('all');
    const url = new URL(window.location.href);
    url.searchParams.delete('brand');
    url.searchParams.delete('category');
    window.history.replaceState({}, '', url.toString());
  };

  const hasActiveFilters = activeCategory !== 'all' || activeBrand !== 'all' || activeTag !== 'all';

  return (
    <main id="top" className="detail-page">
      <Header onQuote={() => setQuote(true)} />

      <section className="product-detail-hero" style={{ padding: '8rem 2rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span className="eyebrow"><span className="yellow-rule"/> THE FIELD SELECTION</span>
          <h1>
            {activeBrand !== 'all' ? `${activeBrand} Products.` : 'All Products.'}
          </h1>

          <div style={{ margin: '2rem 0 1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Category Filter */}
            <select
              value={activeCategory}
              onChange={e => handleCategoryChange(e.target.value)}
              aria-label="Filter by Category"
              style={{
                padding: '0.6rem 1rem',
                background: '#121611',
                color: '#fff',
                border: activeCategory !== 'all' ? '1px solid var(--yellow)' : '1px solid #333c2e',
                borderRadius: '2px',
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Categories</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>

            {/* Brand Filter */}
            <select
              value={activeBrand}
              onChange={e => handleBrandChange(e.target.value)}
              aria-label="Filter by Brand"
              style={{
                padding: '0.6rem 1rem',
                background: '#121611',
                color: '#fff',
                border: activeBrand !== 'all' ? '1px solid var(--yellow)' : '1px solid #333c2e',
                borderRadius: '2px',
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Brands</option>
              {allBrands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>

            {/* Product Type Filter */}
            <select
              value={activeTag}
              onChange={e => setActiveTag(e.target.value)}
              aria-label="Filter by Product Type"
              style={{
                padding: '0.6rem 1rem',
                background: '#121611',
                color: '#fff',
                border: activeTag !== 'all' ? '1px solid var(--yellow)' : '1px solid #333c2e',
                borderRadius: '2px',
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Product Types</option>
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                style={{
                  background: 'transparent',
                  border: '1px solid #444e3e',
                  color: '#b6c2ad',
                  padding: '0.55rem 1rem',
                  borderRadius: '2px',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s'
                }}
              >
                <X size={14} /> Clear all filters
              </button>
            )}
          </div>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.75rem', fontSize: '0.82rem' }}>
              <span style={{ color: '#8d9982', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Filter size={13} /> Active:
              </span>
              {activeBrand !== 'all' && (
                <span style={{ background: '#1c2419', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 10px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Brand: {activeBrand}
                  <button onClick={() => handleBrandChange('all')} aria-label="Remove brand filter" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>×</button>
                </span>
              )}
              {activeCategory !== 'all' && (
                <span style={{ background: '#1c2419', border: '1px solid #4f5d44', color: '#e0e7da', padding: '3px 10px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Category: {categories.find(c => c.id === activeCategory)?.name || activeCategory}
                  <button onClick={() => handleCategoryChange('all')} aria-label="Remove category filter" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>×</button>
                </span>
              )}
              {activeTag !== 'all' && (
                <span style={{ background: '#1c2419', border: '1px solid #4f5d44', color: '#e0e7da', padding: '3px 10px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Type: {activeTag}
                  <button onClick={() => setActiveTag('all')} aria-label="Remove type filter" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>×</button>
                </span>
              )}
              <span style={{ color: '#88947d', marginLeft: 'auto' }}>
                Showing {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
              </span>
            </div>
          )}

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
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No products found matching the selected filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="button button-yellow"
                  style={{ minHeight: '44px', padding: '10px 20px', fontSize: '14px' }}
                >
                  Clear all filters
                </button>
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
