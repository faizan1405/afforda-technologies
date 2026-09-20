'use client';
import { useState } from 'react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';

export default function CareersPage() {
  const [quote, setQuote] = useState(false);

  return (
    <main id="top" className="detail-page">
      <Header onQuote={() => setQuote(true)} />
      <section className="product-detail-hero" style={{ padding: '8rem 2rem 4rem', minHeight: '60vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow"><span className="yellow-rule"/> CAREERS AT AFFORDA</span>
          <h1>Work With Us.</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', margin: '2rem 0', color: 'var(--text)' }}>
            We’re always interested in connecting with talented people who are passionate about technology, field operations and solving real-world challenges.
          </p>
          <div className="detail-actions">
            <a className="button button-yellow" href="https://wa.me/919818320178?text=Hello%20AFFORDA%20Technologies,%20I%20would%20like%20to%20inquire%20about%20career%20opportunities." target="_blank" rel="noopener noreferrer">
              Contact for Opportunities
            </a>
          </div>
        </div>
      </section>
      <Footer onQuote={() => setQuote(true)} />
      <QuoteDialog open={quote} onOpenChange={setQuote} />
    </main>
  );
}
