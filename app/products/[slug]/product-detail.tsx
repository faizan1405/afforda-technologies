'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Crosshair, MessageCircle, Plus, Minus, FileText } from 'lucide-react';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import { brandDescriptions, categories, products, whatsAppUrl, type Product } from '@/lib/catalogue';

export default function ProductDetail({ product }: { product: Product }) {
  const [quote, setQuote] = useState(false);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const related = products.filter(p => p.slug !== product.slug && (p.category === product.category || p.brand === product.brand)).slice(0, 3);
  const recommendations = related.length ? related : products.filter(p => p.slug !== product.slug).slice(0, 3);

  const whatsappMessage = product.customWhatsAppMessage || `Hello AFFORDA Technologies, I’m interested in the ${product.brand} ${product.name}. Please share configuration and quotation details.`;

  return (
    <main id="top" className="detail-page">
      <Header onQuote={() => setQuote(true)} />
      <div className="product-breadcrumb">
        <a href="/#equipment"><ArrowLeft size={14} /> Products</a>
        <span>/</span>
        <span>{categories.find(c => c.id === product.category)?.name}</span>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-detail-hero">
        <div className="detail-gallery">
          <div className={`detail-image ${zoom ? 'is-zoomed' : ''}`}>
            <span className="detail-image-meta">{product.label}</span>
            <img
              key={active}
              src={`/images/${product.gallery[active]}.webp`}
              alt={`${product.brand} ${product.name} — view ${active + 1}`}
              width={800}
              height={700}
              fetchPriority="high"
            />
            <Crosshair className="detail-reticle" size={20} />
            <button
              className="zoom-button"
              onClick={() => setZoom(!zoom)}
              aria-label={zoom ? 'Zoom out product image' : 'Zoom in product image'}
              aria-pressed={zoom}
            >
              {zoom ? <Minus size={19} /> : <Plus size={19} />}
            </button>
            <span className="detail-view-count">
              {String(active + 1).padStart(2, '0')} / {String(product.gallery.length).padStart(2, '0')}
            </span>
          </div>
          <div className="gallery-thumbnails" role="group" aria-label="Product image gallery">
            {product.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => { setActive(i); setZoom(false); }}
                aria-label={`Show product view ${i + 1}`}
                aria-pressed={active === i}
              >
                <img src={`/images/${img}.webp`} alt="" width={100} height={85} />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-overview">
          <span className="eyebrow"><span className="yellow-rule" />{product.brand.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <span className="detail-label">{product.label}</span>
          <p>{product.summary}</p>

          {product.packageNotice && (
            <div className="package-notice-box">
              <div>
                <span>TURNKEY RTK SYSTEM AVAILABLE</span>
                <strong>{product.packageNotice.text}</strong>
              </div>
              <a href={`/products/${product.packageNotice.packageSlug}`}>
                {product.packageNotice.packageTitle} <ArrowRight size={16} />
              </a>
            </div>
          )}

          <div className="detail-key-specs">
            {product.specs.slice(0, 2).map(([key, value]) => (
              <div key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="detail-actions">
            <button className="button button-yellow" onClick={() => setQuote(true)}>
              Request a quote <ArrowUpRight size={20} />
            </button>
            <a
              className="button button-outline"
              href={whatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Discuss on WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="detail-availability">Configuration, availability and delivery confirmed with your quotation.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
            {product.datasheetUrl && (
              <a
                className="text-link catalogue-source"
                href={product.datasheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <FileText size={16} /> Download Official Datasheet (PDF) <ArrowUpRight size={16} />
              </a>
            )}
            <a
              className="text-link catalogue-source"
              href={`/afforda-catalogue.pdf#page=${product.page}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View in the AFFORDA catalogue <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {product.systemComponents && product.systemComponents.length > 0 && (
        <section className="detail-system-package">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span className="section-number">00</span> SYSTEM ARCHITECTURE</span>
              <h2>COMPLETE SYSTEM<br /><span>INCLUDES.</span></h2>
              <p className="system-package-intro">
                This turnkey GNSS RTK survey kit combines the high-power GBASE base station, the dual-camera visual-assist SG6L rover, and the FC2 Android field controller running MateSurvey.
              </p>
            </div>
          </div>
          <div className="system-components-grid">
            {product.systemComponents.map((item, idx) => (
              <a href={`/products/${item.slug}`} key={item.slug} className="system-component-card">
                <div className="system-card-top">
                  <span className="system-card-num">COMPONENT 0{idx + 1}</span>
                  <span className="system-card-role">{item.role}</span>
                </div>
                <div className="system-card-visual">
                  <img src={`/images/${item.image}.webp`} alt={item.name} loading="lazy" width={360} height={300} />
                  <span className="system-card-arrow"><ArrowUpRight size={16} /></span>
                </div>
                <div className="system-card-info">
                  <span className="system-card-type">{item.role}</span>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <span className="system-card-cta">
                    Explore component specifications <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="detail-information">
        <div>
          <span className="eyebrow">01 / FIELD CAPABILITIES</span>
          <h2>Built for the task.</h2>
          <ul>
            {product.features.map(f => (
              <li key={f}><Check size={17} />{f}</li>
            ))}
          </ul>
        </div>
        <div className="specifications">
          <span className="eyebrow">02 / TECHNICAL DETAILS</span>
          <h2>Precision, specified.</h2>
          <dl>
            {product.specs.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p>Key specifications and field-use details. Exact configuration may vary by model or selected variant.</p>
        </div>
      </section>

      <section className="detail-brand">
        <span className="eyebrow">THE NAME BEHIND THE PRODUCTS</span>
        <div>
          <h2>{product.brand}</h2>
          <p>{brandDescriptions[product.brand] || 'Specialized professional field, forestry, surveying, and wildfire equipment engineered for precision, durability, and demanding terrain.'}</p>
        </div>
      </section>

      <section className="related-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CONTINUE YOUR EXPLORATION</span>
            <h2>COMPLETE YOUR FIELD KIT.</h2>
          </div>
          <a className="text-link" href="/#equipment">All products <ArrowRight size={17} /></a>
        </div>
        <div className="related-products">
          {recommendations.map(p => (
            <a href={`/products/${p.slug}`} key={p.slug}>
              <div>
                <img src={`/images/${p.image}.webp`} alt={`${p.brand} ${p.name}`} loading="lazy" width={400} height={300} />
                <ArrowUpRight size={21} />
              </div>
              <span>{p.brand}</span>
              <h3>{p.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <Footer onQuote={() => setQuote(true)} />
      <QuoteDialog open={quote} onOpenChange={setQuote} equipment={`${product.brand} ${product.name}`} />
    </main>
  );
}
