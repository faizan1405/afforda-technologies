'use client';
import { useState } from 'react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';

export default function AboutPage() {
  const [quote, setQuote] = useState(false);

  return (
    <main id="top" className="detail-page">
      <Header onQuote={() => setQuote(true)} />
      <section className="product-detail-hero" style={{ padding: '8rem 2rem 4rem', minHeight: '60vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow"><span className="yellow-rule"/> ABOUT AFFORDA</span>
          <h1>Field Technology & Products.</h1>
          <div style={{ fontSize: '1.25rem', lineHeight: '1.6', margin: '2rem 0', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              AFFORDA Technologies supplies professional field technology and equipment for demanding environments.
            </p>
            <p>
              Industries served include forestry, wildlife research, surveying, geology, navigation, inspection and related field operations.
            </p>
            <p>
              Our focus is on reliable technology, practical applications and helping customers select suitable products. We specialize in product sourcing and consultation for India-focused operations.
            </p>
          </div>
        </div>
      </section>
      <Footer onQuote={() => setQuote(true)} />
      <QuoteDialog open={quote} onOpenChange={setQuote} />
    </main>
  );
}
