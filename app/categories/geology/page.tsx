'use client';
import { useState } from 'react';
import { ArrowUpRight, Mountain, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { geologySubcategories } from '@/lib/geology-categories';

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
          <h1>GEOLOGY</h1>
          <p>Map structures, measure bearings and document the ground beneath your feet.</p>
        </div>
      </section>

      <section className="categories-section section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="section-number">01</span> SUB-CATEGORIES</span>
            <h2>CHOOSE YOUR<br/><span>PRODUCTS.</span></h2>
          </div>
        </div>
        <div className="mission-grid">
          {geologySubcategories.map((sub, index) => (
            <a key={sub.id} href={`/categories/geology/${sub.slug}`} className="mission mission-geology reveal is-visible">
               <img src={`/images/geology.webp`} alt="" loading="lazy" width={700} height={850}/>
               <div className="mission-overlay"/>
               <div className="mission-top"><span>SUB / {(index+1).toString().padStart(2, '0')}</span><Mountain size={21}/></div>
               <div className="mission-content">
                 <h3>{sub.name}</h3>
                 <div><span>Explore products</span><ArrowUpRight size={22}/></div>
               </div>
            </a>
          ))}
        </div>
      </section>

      <Footer onQuote={() => openQuote()} />
      <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment}/>
    </main>
  );
}
