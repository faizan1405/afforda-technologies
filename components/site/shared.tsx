'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { whatsAppUrl, COMPANY_PHONE_PRIMARY, COMPANY_PHONE_SECONDARY } from '@/lib/catalogue';

export { Header } from './header';

export function WhatsAppIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.42C8.87 7.42 8.54 7.5 8.26 7.8C7.98 8.11 7.2 8.84 7.2 10.32C7.2 11.8 8.28 13.22 8.43 13.42C8.58 13.62 10.55 16.67 13.58 17.97C14.3 18.28 14.86 18.47 15.3 18.61C16.02 18.84 16.68 18.81 17.2 18.73C17.78 18.64 18.99 18 19.24 17.29C19.5 16.59 19.5 15.99 19.42 15.86C19.34 15.74 19.14 15.67 18.84 15.52C18.54 15.37 17.06 14.64 16.79 14.54C16.51 14.44 16.31 14.39 16.11 14.69C15.91 14.99 15.34 15.67 15.17 15.86C15 16.06 14.83 16.09 14.53 15.94C14.23 15.79 13.26 15.47 12.12 14.45C11.23 13.66 10.63 12.68 10.46 12.38C10.28 12.08 10.44 11.92 10.59 11.77C10.72 11.64 10.89 11.42 11.04 11.25C11.19 11.07 11.24 10.95 11.34 10.75C11.44 10.55 11.39 10.37 11.31 10.22C11.24 10.07 10.63 8.59 10.38 7.99C10.13 7.4 9.88 7.48 9.69 7.47C9.52 7.46 9.32 7.42 9.07 7.42Z" />
    </svg>
  );
}

export function QuoteDialog({ open, onOpenChange, equipment = '' }: { open: boolean; onOpenChange: (open: boolean) => void; equipment?: string }) {
  const [prepared, setPrepared] = useState('');
  const [draft, setDraft] = useState<Record<string, string>>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(Object.fromEntries([...data.entries()].map(([key, value]) => [key, String(value)])));
    const message = `Hello AFFORDA Technologies, I would like to request a quote.\n\nName: ${data.get('name')}\nOrganization: ${data.get('organization') || 'Not specified'}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nProduct: ${data.get('equipment') || 'Please recommend suitable products'}\nQuantity: ${data.get('quantity')}\nRequirement: ${data.get('requirement')}`;
    setPrepared(message);
  }

  return (
    <Dialog open={open} onOpenChange={value => { onOpenChange(value); if (!value) { setPrepared(''); setDraft({}); } }}>
      <DialogContent className="quote-dialog">
        <span className="eyebrow"><span className="yellow-rule" /> LET&apos;S EQUIP YOUR NEXT MISSION</span>
        <DialogTitle className="dialog-heading">Request a quote.</DialogTitle>
        <DialogDescription className="dialog-description">Tell us what your field demands. Our team will help you choose the right products.</DialogDescription>
        
        {prepared ? (
          <div className="quote-prepared" role="status">
            <WhatsAppIcon size={36} className="text-[#25D366]" />
            <h3>Your inquiry is ready.</h3>
            <p>Continue to WhatsApp to review and send your request to AFFORDA. Your request has not been sent yet.</p>
            <pre>{prepared}</pre>
            <a className="button button-yellow" href={whatsAppUrl(prepared, COMPANY_PHONE_PRIMARY)} target="_blank" rel="noopener noreferrer">
              Continue to WhatsApp <ArrowUpRight size={18} />
            </a>
            <button className="text-link" onClick={() => setPrepared('')}>Edit request <ArrowRight size={16} /></button>
          </div>
        ) : (
          <form className="quote-form" onSubmit={submit}>
            <div className="form-row">
              <label>Your name <span>*</span>
                <input name="name" autoComplete="name" defaultValue={draft.name} required maxLength={100} placeholder="Full name" />
              </label>
              <label>Organization
                <input name="organization" autoComplete="organization" defaultValue={draft.organization} maxLength={160} placeholder="Company or institution" />
              </label>
            </div>
            <div className="form-row">
              <label>Email <span>*</span>
                <input name="email" type="email" autoComplete="email" defaultValue={draft.email} required maxLength={180} placeholder="you@organization.com" />
              </label>
              {/* Preserved Customer Phone Field */}
              <label>Phone <span>*</span>
                <input name="phone" type="tel" autoComplete="tel" defaultValue={draft.phone} required minLength={7} maxLength={25} pattern="[+0-9() .\-]{7,25}" placeholder="+91" />
              </label>
            </div>
            <div className="form-row equipment-form-row">
              <label>Product
                <input name="equipment" defaultValue={draft.equipment ?? equipment} maxLength={200} placeholder="Product or category" />
              </label>
              <label>Quantity
                <input name="quantity" type="number" min={1} max={10000} defaultValue={draft.quantity ?? 1} required />
              </label>
            </div>
            <label>Your field requirements <span>*</span>
              <textarea name="requirement" defaultValue={draft.requirement} required maxLength={2000} rows={3} placeholder="Tell us about the application, specifications or project timeline." />
            </label>
            <p className="form-note">Your details will be included in a WhatsApp message for you to review and send. Nothing is submitted automatically.</p>
            <button className="button button-yellow" type="submit">Prepare quote request <ArrowUpRight size={19} /></button>
          </form>
        )}

        {/* Replaced Visible Phone Number with Two WhatsApp Icon Action Buttons */}
        <div className="dialog-whatsapp-section">
          <span className="dialog-whatsapp-label">Direct WhatsApp Inquiries:</span>
          <div className="dialog-whatsapp-buttons">
            <a
              className="whatsapp-desk-btn"
              href={whatsAppUrl("Hello AFFORDA Technologies, I would like to inquire about equipment and quotations.", COMPANY_PHONE_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with AFFORDA Sales & Quotations on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              <span>Sales &amp; Quotations</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              className="whatsapp-desk-btn"
              href={whatsAppUrl("Hello AFFORDA Technologies, I would like to speak with technical support regarding equipment specifications.", COMPANY_PHONE_SECONDARY)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with AFFORDA Technical Support on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              <span>Technical Support</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsAppUrl("Hello AFFORDA Technologies, I would like help choosing products.", COMPANY_PHONE_PRIMARY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact AFFORDA on WhatsApp"
    >
      <WhatsAppIcon size={23} />
      <span>Let&apos;s talk</span>
      <i />
    </a>
  );
}

export function Footer({ onQuote }: { onQuote: () => void }) {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-coordinates" aria-hidden="true">+ FIELD SUPPORT / INDIA</div>
        <div>
          <span className="eyebrow"><span className="yellow-rule" /> YOUR NEXT EXPEDITION STARTS HERE</span>
          <h2>Big terrain.<br /><span>Bigger possibilities.</span></h2>
        </div>
        <div className="contact-details">
          <p>Tell us where you&apos;re headed.<br />We&apos;ll help you get equipped.</p>
          <button className="button button-yellow" onClick={onQuote}>
            Request a quote <ArrowUpRight size={20} />
          </button>
          
          {/* Replaced Visible Phone Text with Two WhatsApp Icon Action Buttons */}
          <div className="footer-whatsapp-group">
            <span className="footer-whatsapp-eyebrow">DIRECT WHATSAPP FIELD SUPPORT</span>
            <div className="footer-whatsapp-buttons">
              <a
                className="footer-whatsapp-btn"
                href={whatsAppUrl("Hello AFFORDA Technologies, I would like to inquire about field equipment and quotations.", COMPANY_PHONE_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with AFFORDA Equipment & Quotations on WhatsApp"
              >
                <WhatsAppIcon size={20} />
                <span>Equipment &amp; Quotations</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                className="footer-whatsapp-btn"
                href={whatsAppUrl("Hello AFFORDA Technologies, I would like to discuss technical solutions and requirements.", COMPANY_PHONE_SECONDARY)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with AFFORDA Field Solutions on WhatsApp"
              >
                <WhatsAppIcon size={20} />
                <span>Field Solutions &amp; Support</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a href="/" className="footer-wordmark">AFFORDA<span>TECHNOLOGIES</span></a>
          <p>Precision for the world outside.</p>
        </div>
        <div className="footer-links">
          <a href="/#equipment">Explore products</a>
          <a href="/finder">Product Finder</a>
          <a href="/afforda-catalogue.pdf" target="_blank" rel="noopener noreferrer">
            Product catalogue <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AFFORDA Technologies.</span>
          <span>BUILT FOR THE FIELD. READY FOR WHAT&apos;S NEXT.</span>
          <a href="#top" aria-label="Back to top">BACK TO TOP ↑</a>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
}
