'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { products, productBelongsToCategory, type Product } from '@/lib/catalogue';

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
        <span className="product-cross" aria-hidden="true">
          +
        </span>
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

import type { Category } from './page';

interface CategoryClientProps {
  category: Category;
}

export default function CategoryClient({ category }: CategoryClientProps) {
  const [quote, setQuote] = useState(false);
  const [quoteEquipment, setQuoteEquipment] = useState('');

  const categoryProducts = products.filter(p => productBelongsToCategory(p, category.id));

  function openQuote(equipment = '') {
    setQuoteEquipment(equipment || category.name);
    setQuote(true);
  }

  return (
    <main id="top">
      <Header onQuote={() => openQuote()} />

      <div className="product-breadcrumb">
        <a href="/#equipment">
          <ArrowLeft size={14} /> Products
        </a>
        <span>/</span>
        <span>{category.name}</span>
      </div>

      <section
        className="hero mode-field"
        aria-label={`${category.name} Category`}
        style={{ minHeight: '50vh', paddingTop: '4rem' }}
      >
        <div
          className="hero-landscape"
          style={{ backgroundImage: `url('/images/${category.image}.webp')` }}
        />
        <div className="hero-shade" />
        <div className="hero-topline" style={{ top: '80px' }}>
          <span>
            <i className="status-dot" /> CATEGORY
          </span>
          <span>{category.name.toUpperCase()}</span>
        </div>
        <div className="hero-content">
          <div className="eyebrow">
            <span className="yellow-rule" /> {category.code}
          </div>
          <h1>{category.name.toUpperCase()}</h1>
          <p>{category.mission}</p>
          <div className="hero-actions">
            <button className="button button-yellow" onClick={() => openQuote()}>
              Request a quote <ArrowUpRight size={18} />
            </button>
            {category.id === 'forestry' && (
              <a className="button button-outline" href="/categories/forest-wildlife">
                Explore 15 subcategories <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      {category.id === 'forestry' && (
        <section
          style={{
            maxWidth: '1200px',
            margin: '2rem auto 0',
            padding: '1.5rem 2rem',
            background: 'rgba(221, 237, 160, 0.08)',
            border: '1px solid rgba(221, 237, 160, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                color: 'var(--yellow)',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              SPECIALIZED CATALOGUE
            </span>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>
              Looking for specialized Forest &amp; Wildlife categories?
            </strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
              Browse our detailed subcategory breakdown for forestry, ecology and research.
            </p>
          </div>
          <a className="button button-yellow" href="/categories/forest-wildlife">
            View Forest &amp; Wildlife Subcategories <ArrowUpRight size={17} />
          </a>
        </section>
      )}

      {category.id === 'surveying' && (
        <section
          style={{
            maxWidth: '1200px',
            margin: '2rem auto 0',
            padding: '1.5rem 2rem',
            background: 'rgba(221, 237, 160, 0.08)',
            border: '1px solid rgba(221, 237, 160, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                color: 'var(--yellow)',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              DGPS &amp; GNSS CONSULTATION
            </span>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>
              Tailored DGPS and survey-grade positioning systems
            </strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
              DGPS selection depends on accuracy requirements, base-rover configurations, and site conditions.
            </p>
          </div>
          <button
            className="button button-yellow"
            onClick={() => openQuote('DGPS positioning — surveying consultation')}
          >
            Discuss DGPS requirements <ArrowUpRight size={17} />
          </button>
        </section>
      )}

      {category.id === 'geology' && (
        <section
          style={{
            maxWidth: '1200px',
            margin: '2rem auto 0',
            padding: '1.5rem 2rem',
            background: 'rgba(221, 237, 160, 0.08)',
            border: '1px solid rgba(221, 237, 160, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                color: 'var(--yellow)',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              SPECIALIZED CATALOGUE
            </span>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>
              Looking for specialized Geological products categories?
            </strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
              Browse our detailed subcategory breakdown for geological field and mapping products.
            </p>
          </div>
          <a className="button button-yellow" href="/categories/geology">
            View Geology Subcategories <ArrowUpRight size={17} />
          </a>
        </section>
      )}

      <section className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="section-heading" style={{ marginBottom: '2rem' }}>
          <div>
            <span className="eyebrow">
              <span className="section-number">01</span> {category.name.toUpperCase()}
            </span>
            <h2>
              FEATURED<br />
              <span>PRODUCTS.</span>
            </h2>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="catalogue-grid">
            {categoryProducts.map(p => (
              <ProductLink key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              background: 'var(--surface-sunken)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
            }}
          >
            <h3>Custom configuration required for this category.</h3>
            <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '20px' }}>
              Our complete catalogue includes professional products for {category.name.toLowerCase()}.
            </p>
            <button className="button button-yellow" onClick={() => openQuote(category.name)}>
              Inquire about {category.name} <ArrowUpRight size={18} />
            </button>
          </div>
        )}

        <div
          style={{
            marginTop: '3.5rem',
            padding: '40px 30px',
            textAlign: 'center',
            background: 'var(--surface-sunken)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '0.8rem',
              letterSpacing: '1px',
              color: 'var(--yellow)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            NEED SPECIFIC CONFIGURATIONS?
          </span>
          <h3>Looking for other models in {category.name}?</h3>
          <p
            style={{
              color: 'var(--muted)',
              marginTop: '10px',
              marginBottom: '20px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            We supply products to government institutions, research organizations, and field teams across India.
            Contact us for formal quotes, technical datasheets, and availability.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="button button-yellow" onClick={() => openQuote(category.name)}>
              Request quotation <ArrowUpRight size={18} />
            </button>
            <a
              className="button button-outline"
              href="/afforda-catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF Catalogue <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer onQuote={() => openQuote()} />
      <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment} />
    </main>
  );
}
