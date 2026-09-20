'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, Crosshair, Trees, Mountain, Compass, Radio, ScanLine, Satellite, Laptop, Focus, ChevronRight, MapPin, Check, Layers, Navigation } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import Terrain from '@/components/site/terrain';
import { categories, products, brandDescriptions, finderOptions, findEquipment, type Product } from '@/lib/catalogue';

const icons = [Trees, Mountain, Satellite, Compass, ScanLine, Focus, Crosshair, Laptop, Radio];
const featured = products.slice(0,6);
const mainMissions = ['forestry','surveying','optics'];
const brands = Object.keys(brandDescriptions);

function ProductLink({product, compact=false}: {product:Product;compact?:boolean}) {
 return <a className={compact?'compact-product':'product-panel'} href={`/products/${product.slug}`}>
   <div className="product-visual"><span className="product-type">{product.label}</span><img src={`/images/${product.image}.webp`} alt={`${product.brand} ${product.name}`} loading="lazy" width={500} height={400}/><span className="product-open"><ArrowUpRight size={20}/></span><span className="product-cross" aria-hidden="true">+</span></div>
   <div className="product-caption"><span>{product.brand}</span><h3>{product.name}</h3>{!compact&&<p>{product.specs[0][1]}<span> / </span>{product.specs[1][1]}</p>}</div>
 </a>;
}

export default function Home() {
 const [quote,setQuote]=useState(false);
 const [quoteEquipment,setQuoteEquipment]=useState('');
 const [category,setCategory]=useState<string|null>(null);
 const [mode,setMode]=useState<'terrain'|'field'>('terrain');
 const [brand,setBrand]=useState('Vortex Optics');
 const [industry,setIndustry]=useState('Forestry & Wildlife');
 const [requirement,setRequirement]=useState('Wildlife monitoring');
 const [finderResult,setFinderResult]=useState<{industry:string;requirement:string}|null>(null);
 const productRail=useRef<HTMLDivElement>(null);
 const brandRail=useRef<HTMLDivElement>(null);
 const [railIndex,setRailIndex]=useState(0);
 const [railAtEnd,setRailAtEnd]=useState(false);
 const selectedCategory=categories.find(c=>c.id===category);
 const categoryProducts=products.filter(p=>p.category===category||(category==='surveying'&&p.category==='navigation'));
 const brandProducts=products.filter(p=>p.brand===brand);
 const recommendations=finderResult?findEquipment(finderResult.industry,finderResult.requirement):[];
 function openQuote(equipment=''){setQuoteEquipment(equipment);setQuote(true);}
 function advanceProducts(direction:number){const rail=productRail.current;if(!rail)return;const first=rail.firstElementChild as HTMLElement;const gap=parseFloat(getComputedStyle(rail).columnGap)||0;rail.scrollBy({left:direction*(first.offsetWidth+gap),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 function chooseIndustry(value:string){setIndustry(value);setRequirement(Object.keys(finderOptions[value])[0]);setFinderResult(null);}
 useEffect(()=>{
   const els=document.querySelectorAll('.reveal');
   const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.08});
   els.forEach(el=>observer.observe(el));return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
   type ModelContext={registerTool:(tool:unknown,options:{signal:AbortSignal})=>unknown};
   const context=(document as unknown as {modelContext?:ModelContext}).modelContext;
   if(!context?.registerTool)return;
   const lifecycle=new AbortController();
   const tool={name:'find_field_equipment',title:'Find field equipment',description:'Choose an industry and requirement, display matching AFFORDA catalogue products, and return links. This does not submit an inquiry.',inputSchema:{type:'object',properties:{industry:{type:'string',enum:Object.keys(finderOptions)},requirement:{type:'string',description:'A valid requirement for the chosen industry: '+Object.entries(finderOptions).map(([k,v])=>`${k}: ${Object.keys(v).join(', ')}`).join('; ')}},required:['industry','requirement'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:async(input:unknown)=>{const value=input as Record<string,unknown>;if(!value||typeof value.industry!=='string'||typeof value.requirement!=='string')throw new Error('Industry and requirement must be strings.');const matches=findEquipment(value.industry,value.requirement);setIndustry(value.industry);setRequirement(value.requirement);setFinderResult({industry:value.industry,requirement:value.requirement});document.getElementById('finder')?.scrollIntoView({behavior:'instant'});await new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve())));return {products:matches.map(p=>({name:p.name,brand:p.brand,url:`/products/${p.slug}`})),consultationRequired:matches.length===0};}};
   try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{/* Unsupported implementations leave the ordinary finder available. */}
   return()=>lifecycle.abort();
 },[]);
 return <main id="top">
 <a className="skip-link" href="#equipment">Skip to equipment</a>
 <Header home onQuote={()=>openQuote()}/>
 <section className={`hero mode-${mode}`} aria-label="Explore beyond limits">
   <div className="hero-landscape"/><div className="hero-shade"/><Terrain mode={mode}/>
   <div className="hero-topline"><span><i className="status-dot"/> ENGINEERED FOR THE EXTRAORDINARY</span><span>FIELD TECHNOLOGY / INDIA</span></div>
   <div className="hero-content"><div className="eyebrow"><span className="yellow-rule"/> THE WORLD IS YOUR FIELD.</div><h1>EXPLORE<br/>BEYOND<br/><em>LIMITS.</em></h1><p>Precision technology for forestry, surveying,<br className="desktop-break"/> geology, mapping and field operations.</p><div className="hero-actions"><a className="button button-yellow" href="#equipment">Explore equipment <ArrowUpRight size={19}/></a><button className="button button-outline" onClick={()=>openQuote()}>Request a quote <ArrowUpRight size={18}/></button></div></div>
   <a className="hero-device" href="/products/vortex-viper-hd" aria-label="Explore Vortex Viper HD binoculars"><div className="device-orbit"/><span className="device-cross"><Crosshair size={22}/></span><img src="/images/viper-hero.webp" alt="Vortex Viper HD binoculars" width={1341} height={1173} fetchPriority="high"/><div className="device-tag"><span>OPTICAL PRECISION / 01</span><strong>VORTEX VIPER® HD</strong><span>See what lies beyond. <ArrowUpRight size={16}/></span></div></a>
   <div className="terrain-label" aria-label="Illustrative expedition coordinates"><span>+ 30°44′ N / 79°04′ E</span><span>ELEV. 3,840 M <i/></span><span className="terrain-simulation">EXPEDITION VISUALIZATION</span></div>
   <div className="terrain-controls" role="group" aria-label="Terrain view"><button aria-pressed={mode==='terrain'} onClick={()=>setMode('terrain')}><Layers size={14}/> Terrain</button><button aria-pressed={mode==='field'} onClick={()=>setMode('field')}><Mountain size={14}/> Field</button></div>
   <div className="hero-bottom"><a href="#equipment"><ArrowDown size={16}/> SCROLL TO EXPLORE</a><span>PRECISE BY DESIGN. &nbsp; READY FOR ANY TERRAIN.</span><span className="compass">N <Navigation size={22}/></span></div>
 </section>
 <div className="field-strip"><span><Crosshair size={17}/> PURPOSE-BUILT EQUIPMENT</span><span><Mountain size={17}/> REAL-WORLD CAPABILITY</span><span><Compass size={17}/> EXPERT PRODUCT GUIDANCE</span><a href="#finder">FIND YOUR FIELD ADVANTAGE <ArrowUpRight size={16}/></a></div>
 <section className="categories-section section-padding" id="equipment">
  <div className="section-heading reveal"><div><span className="eyebrow"><span className="section-number">01</span> EXPLORE BY CATEGORY</span><h2>YOUR MISSION.<br/><span>YOUR EQUIPMENT.</span></h2></div><div className="section-intro"><p>From the forest floor to the furthest ridgeline.<br/>Find the tools that belong in your field.</p><button className="text-link" onClick={()=>setCategory('all')}>Explore all equipment <ArrowUpRight size={19}/></button></div></div>
  <div className="mission-grid">
    {mainMissions.map((id,index)=>{const c=categories.find(c=>c.id===id)!;const Icon=icons[categories.indexOf(c)];return <button key={id} className={`mission mission-${id} reveal`} onClick={()=>setCategory(id)} style={{'--delay':`${index*90}ms`} as CSSProperties} onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--lens-x',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--lens-y',`${e.clientY-r.top}px`);}}><img src={`/images/${c.image}.webp`} alt="" loading="lazy" width={700} height={850}/><div className="mission-overlay"/><div className="mission-top"><span>{c.code}</span><Icon size={21}/></div><div className="mission-reticle" aria-hidden="true"><span/><i/><small>{id==='forestry'?'OBSERVATION ZONE':id==='surveying'?'POINT ACQUIRED':'10× / FOCUS'}</small></div>{id==='optics'&&<div className="lens-effect" aria-hidden="true"/>}<div className="mission-content"><span className="mission-kicker">{c.subtitle}</span><h3>{c.name}</h3><div><span>Explore mission</span><ArrowUpRight size={22}/></div></div></button>})}
  </div>
  <div className="other-missions reveal">{categories.filter(c=>!mainMissions.includes(c.id)).map(c=>{const Icon=icons[categories.indexOf(c)];return <button key={c.id} onClick={()=>setCategory(c.id)}><span className="mission-index">{String(categories.indexOf(c)+1).padStart(2,'0')}</span><Icon size={21}/><span>{c.name}</span><ArrowUpRight size={19}/></button>})}</div>
 </section>
 <section className="product-section section-padding" id="products">
   <div className="section-heading reveal"><div><span className="eyebrow"><span className="section-number">02</span> THE FIELD SELECTION</span><h2>EXCEPTIONAL TOOLS.<br/><span>EXTRAORDINARY POSSIBILITIES.</span></h2></div><div className="rail-controls"><button aria-label="Previous products" onClick={()=>advanceProducts(-1)} disabled={railIndex===0}><ArrowLeft size={20}/></button><button aria-label="Next products" onClick={()=>advanceProducts(1)} disabled={railAtEnd}><ArrowRight size={20}/></button></div></div>
   <div className="product-rail" ref={productRail} tabIndex={0} aria-label="Featured equipment, scroll horizontally for more products" onScroll={e=>{const rail=e.currentTarget;const first=rail.firstElementChild as HTMLElement;const gap=parseFloat(getComputedStyle(rail).columnGap)||0;setRailIndex(Math.round(rail.scrollLeft/(first.offsetWidth+gap)));setRailAtEnd(rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-5);}}>{featured.map(p=><ProductLink key={p.slug} product={p}/>)}</div>
   <div className="rail-footer"><span>SELECTED FOR YOUR NEXT EXPEDITION</span><div className="rail-track"><i style={{width:`${100/featured.length}%`,left:`${Math.min(railIndex,featured.length-1)/featured.length*100}%`}}/></div><span>{String(railIndex+1).padStart(2,'0')} <span className="muted">/ 06</span></span></div>
 </section>
 <section className="brands-section section-padding" id="brands">
   <div className="section-heading reveal"><div><span className="eyebrow"><span className="section-number">03</span> EXPLORE BY BRAND</span><h2>GREAT EQUIPMENT.<br/><span>EXCEPTIONAL NAMES.</span></h2></div><p className="section-intro">Explore the specialists behind your field kit.<br/>One destination. A world of capability.</p></div>
   <div className="brand-explorer"><div className="brand-rail" ref={brandRail} role="group" aria-label="Choose an equipment brand">{brands.map((name,index)=><button key={name} className={`brand-option brand-${index} ${name===brand?'selected':''}`} aria-pressed={name===brand} onClick={()=>setBrand(name)}><span>{name==='Panasonic Toughbook'?<>Panasonic<small>TOUGHBOOK</small></>:name==='Vortex Optics'?<>VORTEX<small>OPTICS</small></>:name==='Open Acoustic Devices'?<>Open Acoustic<small>DEVICES</small></>:name}</span><i/></button>)}</div><button className="brand-next" aria-label="Scroll to more brands" onClick={()=>brandRail.current?.scrollBy({left:500,behavior:'smooth'})}><ArrowRight size={20}/></button></div>
   <div className="brand-detail" key={brand}><div><span className="eyebrow">THE BRAND IN FOCUS</span><h3>{brand}</h3><p>{brandDescriptions[brand]}</p>{brandProducts.length>0?<button className="text-link" onClick={()=>setCategory(`brand:${brand}`)}>Explore {brand} <ArrowUpRight size={18}/></button>:<button className="text-link" onClick={()=>openQuote('DGPS solutions')}>Discuss your requirements <ArrowUpRight size={18}/></button>}</div><div className="brand-products">{brandProducts.slice(0,2).map(p=><a key={p.slug} href={`/products/${p.slug}`}><img src={`/images/${p.image}.webp`} alt={p.name} loading="lazy" width={300} height={240}/><span>{p.name}<ArrowUpRight size={16}/></span></a>)}{brandProducts.length===0&&<div className="dgps-brand"><Satellite size={64}/><span>POSITIONED FOR PRECISION.</span><p>Application-led DGPS consultation</p></div>}</div></div>
 </section>
 <section className="finder-section section-padding" id="finder">
  <div className="finder-map" aria-hidden="true"/>
  <div className="finder-heading reveal"><span className="eyebrow"><span className="section-number">04</span> FIND YOUR EQUIPMENT</span><div><h2>THE RIGHT TOOL.<br/><span>FOR YOUR TERRAIN.</span></h2><p>Tell us your industry and what you need to do.<br/>We’ll point you in the right direction.</p></div></div>
  <div className="finder-workflow"><div className="finder-step"><label id="industry-label"><span>01</span> YOUR INDUSTRY</label><Select value={industry} onValueChange={v=>{if(v)chooseIndustry(v);}}><SelectTrigger className="finder-select" aria-labelledby="industry-label"><SelectValue/></SelectTrigger><SelectContent>{Object.keys(finderOptions).map(i=><SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select></div><ChevronRight className="finder-arrow" size={24}/><div className="finder-step"><label id="requirement-label"><span>02</span> YOUR REQUIREMENT</label><Select value={requirement} onValueChange={v=>{if(v){setRequirement(v);setFinderResult(null);}}}><SelectTrigger className="finder-select" aria-labelledby="requirement-label"><SelectValue/></SelectTrigger><SelectContent>{Object.keys(finderOptions[industry]).map(r=><SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent></Select></div><button className="button button-yellow finder-submit" onClick={()=>setFinderResult({industry,requirement})}>Find my equipment <ArrowUpRight size={20}/></button></div>
  {finderResult?<div className="finder-results" aria-live="polite"><div className="finder-results-heading"><span><Check size={16}/> {recommendations.length>0?`${recommendations.length} matches for ${finderResult.requirement.toLowerCase()}`:'LET’S DEFINE YOUR SURVEY REQUIREMENTS'}</span><button onClick={()=>setFinderResult(null)}>Reset <span>↺</span></button></div>{recommendations.length>0?<div className="recommendations">{recommendations.map(p=><a key={p.slug} href={`/products/${p.slug}`}><img src={`/images/${p.image}.webp`} alt={p.name} width={160} height={160}/><div><span>{p.brand}</span><h3>{p.name}</h3><p>{p.label}</p></div><ArrowUpRight size={23}/></a>)}</div>:<div className="finder-consult"><p>DGPS selection depends on required accuracy, correction access and site conditions. Share these with our team for a tailored recommendation.</p><button className="button button-yellow" onClick={()=>openQuote('DGPS positioning — surveying consultation')}>Talk to a specialist <ArrowUpRight size={18}/></button></div>}</div>:<div className="finder-bottom"><span><MapPin size={14}/> YOUR NEXT STEP, MADE SIMPLE.</span><button className="text-link" onClick={()=>openQuote('Equipment recommendation')}>Need expert guidance? <ArrowUpRight size={16}/></button></div>}
 </section>
 <Footer onQuote={()=>openQuote()}/>
 <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment}/>
 <Dialog open={category!==null} onOpenChange={open=>{if(!open)setCategory(null);}}><DialogContent className="catalogue-dialog"><div className={`catalogue-dialog-banner ${category==='thermal'?'thermal-banner':''}`} style={{backgroundImage:`linear-gradient(90deg,#111b12e8,#111b1280),url('/images/${selectedCategory?.image||'terrain'}.webp')`}}><span className="eyebrow">{selectedCategory?.code||'AFFORDA / FIELD EQUIPMENT'}</span><DialogTitle className="dialog-heading">{selectedCategory?.name||(category?.startsWith('brand:')?category.slice(6):'Explore all equipment')}</DialogTitle><DialogDescription className="dialog-description">{selectedCategory?.mission||(category?.startsWith('brand:')?brandDescriptions[category.slice(6)]:'Purpose-built equipment for your next field operation.')}</DialogDescription>{category==='surveying'&&<button className="button button-yellow" onClick={()=>{setCategory(null);openQuote('DGPS solutions');}}>Discuss DGPS requirements <ArrowUpRight size={16}/></button>}</div><div className="catalogue-grid">{(category==='all'?products:category?.startsWith('brand:')?products.filter(p=>p.brand===category.slice(6)):categoryProducts).map(p=><ProductLink key={p.slug} product={p} compact/>)}</div><div className="catalogue-dialog-footer"><span>Need a specific model or configuration?</span><button className="text-link" onClick={()=>{const equipment=selectedCategory?.name||brand;setCategory(null);openQuote(equipment);}}>Ask our team <ArrowUpRight size={17}/></button></div></DialogContent></Dialog>
 </main>;
}
