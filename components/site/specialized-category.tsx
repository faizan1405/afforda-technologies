'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Crosshair, Mountain } from 'lucide-react';
import { Footer, Header, QuoteDialog } from '@/components/site/shared';
import { products, type Product } from '@/lib/catalogue';
import type { SpecializedCategory, SpecializedSubcategory } from '@/lib/specialized-categories';

function ProductLink({ product }: { product: Product }) {
  return <a className="product-panel" href={`/products/${product.slug}`}>
    <div className="product-visual"><span className="product-type">{product.label}</span><img src={`/images/${product.image}.webp`} alt={`${product.brand} ${product.name}`} loading="lazy" width={500} height={400}/><span className="product-open"><ArrowUpRight size={20}/></span><span className="product-cross" aria-hidden="true">+</span></div>
    <div className="product-caption"><span>{product.brand}</span><h3>{product.name}</h3><p>{product.specs[0]?.[1]}<span> / </span>{product.specs[1]?.[1]}</p></div>
  </a>;
}

export function SpecializedCategoryPage({ category }: { category: SpecializedCategory }) {
  const [quote, setQuote] = useState(false);
  const Icon = category.id === 'defense' ? Crosshair : Mountain;
  const cardClass = category.id === 'defense' ? 'mission-thermal' : 'mission-geology';

  return <main id="top">
    <Header onQuote={() => setQuote(true)} />
    <div className="product-breadcrumb"><a href="/#equipment"><ArrowLeft size={14}/> Products</a><span>/</span><span>{category.name}</span></div>
    <section className="hero mode-field" aria-label={`${category.name} Category`} style={{ minHeight: '50vh', paddingTop: '4rem' }}>
      <div className="hero-landscape" style={{ backgroundImage: `url('/images/${category.image}.webp')` }}/>
      <div className="hero-shade"/>
      <div className="hero-topline" style={{ top: '80px' }}><span><i className="status-dot"/> CATEGORY</span><span>{category.name.toUpperCase()}</span></div>
      <div className="hero-content"><div className="eyebrow"><span className="yellow-rule"/> {category.code}</div><h1>{category.name.toUpperCase()}</h1><p>{category.mission}</p></div>
    </section>
    <section className="categories-section section-padding">
      <div className="section-heading"><div><span className="eyebrow"><span className="section-number">01</span> SUB-CATEGORIES</span><h2>CHOOSE YOUR<br/><span>PRODUCTS.</span></h2></div></div>
      <div className="mission-grid">
        {category.subcategories.map((sub, index) => <a key={sub.id} href={`${category.path}/${sub.slug}`} className={`mission ${cardClass} reveal is-visible`}>
          <img src={`/images/${category.image}.webp`} alt="" loading="lazy" width={700} height={850}/>
          <div className="mission-overlay"/>
          <div className="mission-top"><span>SUB / {String(index + 1).padStart(2, '0')}</span><Icon size={21}/></div>
          <div className="mission-content"><h3>{sub.name}</h3><div><span>Explore products</span><ArrowUpRight size={22}/></div></div>
        </a>)}
      </div>
    </section>
    <Footer onQuote={() => setQuote(true)} />
    <QuoteDialog open={quote} onOpenChange={setQuote} equipment={category.name}/>
  </main>;
}

export function SpecializedSubcategoryPage({ category, subcategory }: { category: SpecializedCategory; subcategory: SpecializedSubcategory }) {
  const [quote, setQuote] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const matchingProducts = products.filter(product => product.subcategories?.includes(subcategory.id));
  const visibleProducts = activeTag ? matchingProducts.filter(product => product.tags?.includes(activeTag)) : matchingProducts;

  return <main id="top">
    <Header onQuote={() => setQuote(true)} />
    <div className="product-breadcrumb"><a href="/#equipment"><ArrowLeft size={14}/> Products</a><span>/</span><a href={category.path}>{category.name}</a><span>/</span><span>{subcategory.name}</span></div>
    <section className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="section-heading" style={{ marginBottom: '2rem' }}><div><span className="eyebrow"><span className="yellow-rule"/> {subcategory.name.toUpperCase()}</span><h1 style={{ fontSize: 'var(--text-6xl)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>{subcategory.name}</h1></div></div>
      {subcategory.tags && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
        <button onClick={() => setActiveTag(null)} className={`button ${activeTag === null ? 'button-yellow' : 'button-outline'}`}>All Products</button>
        {subcategory.tags.map(tag => <button key={tag} onClick={() => setActiveTag(tag)} className={`button ${activeTag === tag ? 'button-yellow' : 'button-outline'}`}>{tag}</button>)}
      </div>}
      <div className="catalogue-grid">{visibleProducts.map(product => <ProductLink key={product.slug} product={product}/>)}</div>
    </section>
    <Footer onQuote={() => setQuote(true)} />
    <QuoteDialog open={quote} onOpenChange={setQuote} equipment={subcategory.name}/>
  </main>;
}
