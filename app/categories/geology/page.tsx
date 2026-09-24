'use client';
import { useState } from 'react';
import { ArrowUpRight, Compass, Hammer, Search, Navigation, BookOpen, Sparkles, Filter, Radio, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { geologySubcategories } from '@/lib/geology-categories';

const subcategoryIcons = [Compass, Hammer, Search, Navigation, BookOpen, Sparkles, Filter, Radio];

export default function GeologyCategory() {
  const [quote, setQuote] = useState(false);
  const [quoteEquipment, setQuoteEquipment] = useState('');

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
        <span>Geology</span>
      </div>
      <section className="hero mode-field" aria-label="Geology Category" style={{ minHeight: '50vh', paddingTop: '4rem' }}>
        <div className="hero-landscape" style={{ backgroundImage: "url('/images/geology.webp')" }}/>
        <div className="hero-shade"/>
        <div className="hero-topline" style={{ top: '80px' }}><span><i className="status-dot"/> CATEGORY</span><span>GEOLOGY</span></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="yellow-rule"/> GEO / 02</div>
          <h1>GEOLOGICAL<br/>PRODUCTS</h1>
          <p>Map structures, measure strike and dip, inspect minerals, and equip field expeditions with verified geological tools.</p>
        </div>
      </section>

      <section className="categories-section section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="section-number">01</span> SUB-CATEGORIES</span>
            <h2>CHOOSE YOUR<br/><span>PRODUCTS.</span></h2>
          </div>
          <div className="section-intro">
            <p>Explore our 8 specialized geological sectors.<br/>Select a subcategory to browse instruments, tools, and specifications.</p>
          </div>
        </div>
        <div className="mission-grid">
          {geologySubcategories.map((sub, index) => {
            const Icon = subcategoryIcons[index % subcategoryIcons.length];
            const bgImage = sub.image || '/images/geology.webp';
            return (
              <a key={sub.id} href={`/categories/geology/${sub.slug}`} className="mission mission-geology reveal is-visible">
                 <img src={bgImage} alt={sub.name} loading="lazy" width={700} height={850}/>
                 <div className="mission-overlay"/>
                 <div className="mission-top"><span>{sub.code || `SUB / ${(index+1).toString().padStart(2, '0')}`}</span><Icon size={21}/></div>
                 <div className="mission-content">
                   <h3>{sub.name}</h3>
                   {sub.description && (
                     <p style={{ fontSize: '13px', color: '#c5ccbc', margin: '-14px 0 20px', lineHeight: 1.45, opacity: 0.9 }}>
                       {sub.description}
                     </p>
                   )}
                   <div><span>Explore products</span><ArrowUpRight size={22}/></div>
                 </div>
              </a>
            );
          })}
        </div>
      </section>

      <Footer onQuote={() => openQuote()} />
      <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment}/>
    </main>
  );
}
