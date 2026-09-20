'use client';
import { useState } from 'react';
import { ArrowUpRight, Trees, ArrowLeft } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { forestSubcategories } from '@/lib/forest-categories';

export default function ForestWildlifeCategory() {
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
        <a href="/#equipment"><ArrowLeft size={14}/> Equipment</a>
        <span>/</span>
        <span>Forest & Wildlife</span>
      </div>
      <section className="hero mode-field" aria-label="Forest & Wildlife Category" style={{ minHeight: '50vh', paddingTop: '4rem' }}>
        <div className="hero-landscape" style={{ backgroundImage: "url('/images/forest.webp')" }}/>
        <div className="hero-shade"/>
        <div className="hero-topline" style={{ top: '80px' }}><span><i className="status-dot"/> CATEGORY</span><span>FOREST & WILDLIFE</span></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="yellow-rule"/> BIO / 01</div>
          <h1>FOREST &<br/>WILDLIFE</h1>
          <p>Wildlife monitoring, habitat research and remote observation.</p>
        </div>
      </section>
      
      <section className="categories-section section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="section-number">01</span> SUB-CATEGORIES</span>
            <h2>CHOOSE YOUR<br/><span>EQUIPMENT.</span></h2>
          </div>
        </div>
        <div className="mission-grid">
          {forestSubcategories.map((sub, index) => (
            <a key={sub.id} href={`/categories/forest-wildlife/${sub.slug}`} className="mission mission-forestry reveal is-visible">
               <img src={`/images/forest.webp`} alt="" loading="lazy" width={700} height={850}/>
               <div className="mission-overlay"/>
               <div className="mission-top"><span>SUB / {(index+1).toString().padStart(2, '0')}</span><Trees size={21}/></div>
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
