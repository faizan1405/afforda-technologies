'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { products, type Product } from '@/lib/catalogue';
import { forestTagsBySubcategory } from '@/lib/forest-categories';

function ProductLink({ product }: { product: Product }) {
  const spec1 = product.specs[0]?.[1];
  const spec2 = product.specs[1]?.[1];

  return (
    <a className="product-panel" href={`/products/${product.slug}`}>
      <div className="product-visual">
        <span className="product-type">{product.label}</span>
        <img
          src={`/images/${product.image}.webp`}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          width={500}
          height={400}
        />
        <span className="product-open">
          <ArrowUpRight size={20} />
        </span>
        <span className="product-cross" aria-hidden="true">+</span>
      </div>
      <div className="product-caption">
        <span>{product.brand}</span>
        <h3>{product.name}</h3>
        {(spec1 || spec2) && (
          <p>
            {spec1}
            {spec1 && spec2 && <span> / </span>}
            {spec2}
          </p>
        )}
      </div>
    </a>
  );
}

export default function SubcategoryClient({ subcategory }: { subcategory: { id: string; name: string; slug: string } }) {
  const [quote, setQuote] = useState(false);
  const [quoteEquipment, setQuoteEquipment] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = forestTagsBySubcategory[subcategory.id] || [];
  
  let subProducts = products.filter(p => p.subcategories?.includes(subcategory.id));
  
  if (activeTag) {
    subProducts = subProducts.filter(p => p.tags?.includes(activeTag));
  }

  function openQuote(equipment = '') {
    setQuoteEquipment(equipment);
    setQuote(true);
  }

  return (
    <main id="top">
      <Header onQuote={() => openQuote()} />
      <div className="product-breadcrumb">
        <a href="/#equipment"><ArrowLeft size={14}/> Products</a>
        <span>/</span>
        <a href="/categories/forest-wildlife">Forest & Wildlife</a>
        <span>/</span>
        <span>{subcategory.name}</span>
      </div>
      
      <section className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="section-heading" style={{ marginBottom: '2.5rem' }}>
          <div>
            <span className="eyebrow"><span className="yellow-rule"/> {subcategory.name.toUpperCase()}</span>
            <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase', margin: '1rem 0' }}>
              {subcategory.name}
            </h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '15px', margin: 0 }}>
              {subProducts.length} products available in this sector.
            </p>
          </div>
        </div>

        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}>
            <button 
              onClick={() => setActiveTag(null)}
              className={`button ${activeTag === null ? 'button-yellow' : 'button-outline'}`}
              style={{ minHeight: '40px', padding: '8px 16px', fontSize: '13px' }}
            >
              All Products ({products.filter(p => p.subcategories?.includes(subcategory.id)).length})
            </button>
            {tags.map(tag => (
              <button 
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`button ${activeTag === tag ? 'button-yellow' : 'button-outline'}`}
                style={{ minHeight: '40px', padding: '8px 16px', fontSize: '13px' }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {subProducts.length > 0 ? (
          <div className="catalogue-grid" style={{ padding: 0 }}>
            {subProducts.map(p => <ProductLink key={p.slug} product={p} />)}
          </div>
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', background: 'var(--surface-sunken)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3>No specific products listed online yet.</h3>
            <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '20px' }}>
              Our full catalogue includes {subcategory.name.toLowerCase()}.
            </p>
            <button className="button button-yellow" onClick={() => openQuote(subcategory.name)}>
              Inquire about {subcategory.name} <ArrowUpRight size={18}/>
            </button>
          </div>
        )}
      </section>
      
      <Footer onQuote={() => openQuote()} />
      <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment}/>
    </main>
  );
}
