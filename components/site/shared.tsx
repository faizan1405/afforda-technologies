'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { whatsAppUrl } from '@/lib/catalogue';

export function Header({ onQuote, home = false }: { onQuote: () => void; home?: boolean }) {
  const [menu, setMenu] = useState(false);
  return <header className={`site-header ${home?'':'detail-header'}`}>
    <a href="/" className="brand" aria-label="AFFORDA Technologies home"><img src="/images/afforda-logo.jpeg" alt="AFFORDA Technologies" width={164} height={94}/></a>
    <nav aria-label="Main navigation"><a href="/#equipment">Category <span>⌄</span></a><a href="/products">Products</a><a href="/careers">Careers</a><a href="/about">About</a></nav>
    <div className="header-actions"><button onClick={onQuote} className="button button-yellow nav-quote">Request a quote <ArrowUpRight size={17}/></button><button className="menu-toggle" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    {menu&&<nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{[['Category','equipment'],['Products','products'],['Careers','careers'],['About','about']].map(([name,id])=><a key={id} href={id === 'equipment' ? '/#equipment' : `/${id}`} onClick={()=>setMenu(false)}>{name}<ArrowUpRight size={18}/></a>)}</nav>}
  </header>;
}

export function QuoteDialog({ open, onOpenChange, equipment = '' }: {open:boolean;onOpenChange:(open:boolean)=>void;equipment?:string}) {
  const [prepared,setPrepared]=useState('');
  const [draft,setDraft]=useState<Record<string,string>>({});
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();const data=new FormData(event.currentTarget);
    setDraft(Object.fromEntries([...data.entries()].map(([key,value])=>[key,String(value)])));
    const message=`Hello AFFORDA Technologies, I would like to request a quote.\n\nName: ${data.get('name')}\nOrganization: ${data.get('organization')||'Not specified'}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nEquipment: ${data.get('equipment')||'Please recommend suitable equipment'}\nQuantity: ${data.get('quantity')}\nRequirement: ${data.get('requirement')}`;
    setPrepared(message);
  }
  return <Dialog open={open} onOpenChange={value=>{onOpenChange(value);if(!value){setPrepared('');setDraft({});}}}>
    <DialogContent className="quote-dialog">
      <span className="eyebrow"><span className="yellow-rule"/> LET’S EQUIP YOUR NEXT MISSION</span>
      <DialogTitle className="dialog-heading">Request a quote.</DialogTitle>
      <DialogDescription className="dialog-description">Tell us what your field demands. Our team will help you choose the right equipment.</DialogDescription>
      {prepared?<div className="quote-prepared" role="status"><MessageCircle size={36}/><h3>Your inquiry is ready.</h3><p>Continue to WhatsApp to review and send your request to AFFORDA. Your request has not been sent yet.</p><pre>{prepared}</pre><a className="button button-yellow" href={whatsAppUrl(prepared)} target="_blank" rel="noopener noreferrer">Continue to WhatsApp <ArrowUpRight size={18}/></a><button className="text-link" onClick={()=>setPrepared('')}>Edit request <ArrowRight size={16}/></button></div>:<form className="quote-form" onSubmit={submit}>
        <div className="form-row"><label>Your name <span>*</span><input name="name" autoComplete="name" defaultValue={draft.name} required maxLength={100} placeholder="Full name"/></label><label>Organization<input name="organization" autoComplete="organization" defaultValue={draft.organization} maxLength={160} placeholder="Company or institution"/></label></div>
        <div className="form-row"><label>Email <span>*</span><input name="email" type="email" autoComplete="email" defaultValue={draft.email} required maxLength={180} placeholder="you@organization.com"/></label><label>Phone <span>*</span><input name="phone" type="tel" autoComplete="tel" defaultValue={draft.phone} required minLength={7} maxLength={25} pattern="[+0-9() .\-]{7,25}" placeholder="+91"/></label></div>
        <div className="form-row equipment-form-row"><label>Equipment<input name="equipment" defaultValue={draft.equipment??equipment} maxLength={200} placeholder="Product or category"/></label><label>Quantity<input name="quantity" type="number" min={1} max={10000} defaultValue={draft.quantity??1} required/></label></div>
        <label>Your field requirements <span>*</span><textarea name="requirement" defaultValue={draft.requirement} required maxLength={2000} rows={3} placeholder="Tell us about the application, specifications or project timeline."/></label>
        <p className="form-note">Your details will be included in a WhatsApp message for you to review and send. Nothing is submitted automatically.</p>
        <button className="button button-yellow" type="submit">Prepare quote request <ArrowUpRight size={19}/></button>
      </form>}
      <div className="dialog-phone"><Phone size={14}/><span>Prefer to call?</span><a href="tel:+919818320178">9818320178</a></div>
    </DialogContent>
  </Dialog>;
}

export function WhatsAppButton(){return <a className="whatsapp-float" href={whatsAppUrl('Hello AFFORDA Technologies, I would like help choosing field equipment.')} target="_blank" rel="noopener noreferrer" aria-label="Contact AFFORDA on WhatsApp"><MessageCircle size={23}/><span>Let’s talk</span><i/></a>;}

export function Footer({onQuote}:{onQuote:()=>void}){
return <><section className="contact-section" id="contact"><div className="contact-coordinates" aria-hidden="true">+ FIELD SUPPORT / INDIA</div><div><span className="eyebrow"><span className="yellow-rule"/> YOUR NEXT EXPEDITION STARTS HERE</span><h2>Big terrain.<br/><span>Bigger possibilities.</span></h2></div><div className="contact-details"><p>Tell us where you’re headed.<br/>We’ll help you get equipped.</p><button className="button button-yellow" onClick={onQuote}>Request a quote <ArrowUpRight size={20}/></button><div className="phone-links"><a href="tel:+919818320178">9818320178 <ArrowUpRight size={15}/></a><a href="tel:+919555903186">+91 95559 03186 <ArrowUpRight size={15}/></a></div></div></section><footer className="footer"><div><a href="/" className="footer-wordmark">AFFORDA<span>TECHNOLOGIES</span></a><p>Precision for the world outside.</p></div><div className="footer-links"><a href="/#equipment">Explore equipment</a><a href="/#finder">Equipment finder</a><a href="/afforda-catalogue.pdf" target="_blank" rel="noopener noreferrer">Product catalogue <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AFFORDA Technologies.</span><span>BUILT FOR THE FIELD. READY FOR WHAT’S NEXT.</span><a href="#top" aria-label="Back to top">BACK TO TOP ↑</a></div></footer><WhatsAppButton/></>;
}
