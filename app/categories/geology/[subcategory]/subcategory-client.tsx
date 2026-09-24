'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { products, type Product } from '@/lib/catalogue';
import { geologyTagsBySubcategory, type GeologySubcategory } from '@/lib/geology-categories';

function ProductLink({ product }: { product: Product }) {
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
        <p>
          {product.specs[0]?.[1]}
          {product.specs[1]?.[1] && <span> / {product.specs[1][1]}</span>}
        </p>
      </div>
    </a>
  );
}

export default function SubcategoryClient({ subcategory }: { subcategory: GeologySubcategory }) {
  const [quote, setQuote] = useState(false);
  const [quoteEquipment, setQuoteEquipment] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = geologyTagsBySubcategory[subcategory.id] || [];

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
        <a href="/categories/geology">Geology</a>
        <span>/</span>
        <span>{subcategory.name}</span>
      </div>

      <section className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="section-heading" style={{ marginBottom: '2rem' }}>
          <div>
            <span className="eyebrow"><span className="yellow-rule"/> {subcategory.name.toUpperCase()}</span>
            <h1 style={{ fontSize: 'var(--text-6xl)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>{subcategory.name}</h1>
          </div>
        </div>

        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
             <button
                onClick={() => setActiveTag(null)}
                className={`button ${activeTag === null ? 'button-yellow' : 'button-outline'}`}
             >
                All Products
             </button>
             {tags.map(tag => (
               <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`button ${activeTag === tag ? 'button-yellow' : 'button-outline'}`}
               >
                  {tag}
               </button>
             ))}
          </div>
        )}

        {subProducts.length > 0 ? (
          <div className="catalogue-grid">
            {subProducts.map(p => <ProductLink key={p.slug} product={p} />)}
          </div>
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', background: 'var(--surface-sunken)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3>No specific products listed online yet.</h3>
            <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '20px' }}>Our full catalogue includes {subcategory.name.toLowerCase()}.</p>
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
