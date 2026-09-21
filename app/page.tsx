'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, Crosshair, Trees, Mountain, Compass, Radio, ScanLine, Satellite, Laptop, Focus, ChevronRight, MapPin, Check, Layers, Navigation } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header, Footer, QuoteDialog } from '@/components/site/shared';
import Terrain from '@/components/site/terrain';
import CategorySlider from '@/components/site/category-slider';
import { categories, products, finderOptions, findEquipment, type Product } from '@/lib/catalogue';

const icons = [Trees, Mountain, Satellite, Compass, ScanLine, Focus, Crosshair, Laptop, Radio, Crosshair, Mountain];
const featuredSlugs = new Set([
  'vortex-viper-hd', 'garmin-gpsmap-65s', 'hikmicro-lynx-lh25',
  'browning-strike-force-pro-dcl', 'brunton-geolite', 'panasonic-toughbook',
  'ralcam-h408b', 'brutforce-field-radio', 'minox-nvd-650',
  'suunto-mc2', 'audiomoth', 'hikmicro-e20-plus',
]);
const featured = products.filter(product => featuredSlugs.has(product.slug));
const reticleLabels: Record<string, string> = {
  forestry: 'OBSERVATION ZONE',
  geology: 'STRATA / STRIKE',
  surveying: 'POINT ACQUIRED',
  navigation: 'WAYPOINT / FIX',
  thermal: 'IR SPECTRUM',
  optics: '10× / FOCUS',
  inspection: 'BORE PROBE',
  computing: 'TELEMETRY ACTIVE',
  communication: 'RF LINK ACTIVE',
  defense: 'FIELD AWARENESS',
  mining: 'GROUND SURVEY',
};

function ProductLink({product, compact=false}: {product:Product;compact?:boolean}) {
 return <a className={compact?'compact-product':'product-panel'} href={`/products/${product.slug}`}>
   <div className="product-visual"><span className="product-type">{product.label}</span><img src={`/images/${product.image}.webp`} alt={`${product.brand} ${product.name}`} loading="lazy" width={500} height={400}/><span className="product-open"><ArrowUpRight size={20}/></span><span className="product-cross" aria-hidden="true">+</span></div>
   <div className="product-caption"><span>{product.brand}</span><h3>{product.name}</h3>{!compact&&<p>{product.specs[0][1]}<span> / </span>{product.specs[1][1]}</p>}</div>
 </a>;
}

export default function Home() {
 const [quote,setQuote]=useState(false);
 const [quoteEquipment,setQuoteEquipment]=useState('');
 const [mode,setMode]=useState<'terrain'|'field'>('terrain');
 const [industry,setIndustry]=useState('Forestry & Wildlife');
 const [requirement,setRequirement]=useState('Wildlife monitoring');
 const [finderResult,setFinderResult]=useState<{industry:string;requirement:string}|null>(null);
 const autoplay=useRef(Autoplay({delay:2000,stopOnMouseEnter:true,stopOnInteraction:false}));
 const [productRail,productRailApi]=useEmblaCarousel({loop:true,align:'start'},[autoplay.current]);
 const [railIndex,setRailIndex]=useState(0);
 const recommendations=finderResult?findEquipment(finderResult.industry,finderResult.requirement):[];
 function openQuote(equipment=''){setQuoteEquipment(equipment);setQuote(true);}
 function advanceProducts(direction:number){if(!productRailApi)return;direction<0?productRailApi.scrollPrev():productRailApi.scrollNext();autoplay.current.reset();}
 function chooseIndustry(value:string){setIndustry(value);setRequirement(Object.keys(finderOptions[value])[0]);setFinderResult(null);}
 useEffect(()=>{
   const els=document.querySelectorAll('.reveal');
   const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.08});
   els.forEach(el=>observer.observe(el));return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
   if(!productRailApi)return;
   const updateIndex=()=>setRailIndex(productRailApi.selectedScrollSnap());
   updateIndex();
   productRailApi.on('select',updateIndex).on('reInit',updateIndex);
   return()=>{productRailApi.off('select',updateIndex).off('reInit',updateIndex);};
 },[productRailApi]);
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
 <a className="skip-link" href="#equipment">Skip to products</a>
 <Header home onQuote={()=>openQuote()}/>
 <section className={`hero mode-${mode}`} aria-label="Explore beyond limits">
   <div className="hero-landscape"/><div className="hero-shade"/><Terrain mode={mode}/>
   <div className="hero-topline"><span><i className="status-dot"/> ENGINEERED FOR THE EXTRAORDINARY</span><span>FIELD TECHNOLOGY / INDIA</span></div>
   <div className="hero-content"><div className="eyebrow"><span className="yellow-rule"/> THE WORLD IS YOUR FIELD.</div><h1>EXPLORE<br/>BEYOND<br/><em>LIMITS.</em></h1><p>Precision technology for forestry, surveying,<br className="desktop-break"/> geology, mapping and field operations.</p><div className="hero-actions"><a className="button button-yellow" href="#equipment">Explore products <ArrowUpRight size={19}/></a><button className="button button-outline" onClick={()=>openQuote()}>Request a quote <ArrowUpRight size={18}/></button></div></div>
   <CategorySlider onSelectCategory={(catId) => window.location.href = catId === 'forestry' ? '/categories/forest-wildlife' : catId === 'geology' ? '/categories/geology' : `/category/${catId}`} />
   <div className="terrain-label" aria-label="Illustrative expedition coordinates"><span>+ 30°44′ N / 79°04′ E</span><span>ELEV. 3,840 M <i/></span><span className="terrain-simulation">EXPEDITION VISUALIZATION</span></div>
   <div className="terrain-controls" role="group" aria-label="Terrain view"><button aria-pressed={mode==='terrain'} onClick={()=>setMode('terrain')}><Layers size={14}/> Terrain</button><button aria-pressed={mode==='field'} onClick={()=>setMode('field')}><Mountain size={14}/> Field</button></div>
   <div className="hero-bottom"><a href="#equipment"><ArrowDown size={16}/> SCROLL TO EXPLORE</a><span>PRECISE BY DESIGN. &nbsp; READY FOR ANY TERRAIN.</span><span className="compass">N <Navigation size={22}/></span></div>
 </section>
 <div className="field-strip"><span><Crosshair size={17}/> PURPOSE-BUILT PRODUCTS</span><span><Mountain size={17}/> REAL-WORLD CAPABILITY</span><span><Compass size={17}/> EXPERT PRODUCT GUIDANCE</span><a href="#finder">FIND YOUR FIELD ADVANTAGE <ArrowUpRight size={16}/></a></div>
 <section className="categories-section section-padding" id="equipment">
  <div className="section-heading reveal"><div><span className="eyebrow"><span className="section-number">01</span> EXPLORE BY CATEGORY</span><h2>YOUR MISSION.<br/><span>YOUR PRODUCTS.</span></h2></div><div className="section-intro"><p>From the forest floor to the furthest ridgeline.<br/>Find the tools that belong in your field.</p><a className="text-link" href="/products">Explore all products <ArrowUpRight size={19}/></a></div></div>
   <div className="mission-grid">
     {categories.map((c, index) => {
       const Icon = icons[categories.indexOf(c)];
       const reticleLabel = reticleLabels[c.id] || 'ACQUIRED';
       const href = c.id === 'forestry' ? '/categories/forest-wildlife' : c.id === 'geology' ? '/categories/geology' : c.id === 'defense' ? '/categories/defense-paramilitary' : c.id === 'mining' ? '/categories/mining-geology' : `/category/${c.id}`;
       return <a key={c.id} href={href} className={`mission mission-${c.id} reveal`} style={{ '--delay': `${(index % 3) * 90}ms`, textDecoration: 'none', display: 'block' } as CSSProperties} onPointerMove={e => {
         const r = e.currentTarget.getBoundingClientRect();
         e.currentTarget.style.setProperty('--lens-x', `${e.clientX - r.left}px`);
         e.currentTarget.style.setProperty('--lens-y', `${e.clientY - r.top}px`);
       }}>
         <img src={`/images/${c.image}.webp`} alt="" loading="lazy" width={700} height={850}/>
         <div className="mission-overlay"/>
         <div className="mission-top"><span>{c.code}</span><Icon size={21}/></div>
         <div className="mission-reticle" aria-hidden="true"><span/><i/><small>{reticleLabel}</small></div>
         {c.id === 'optics' && <div className="lens-effect" aria-hidden="true"/>}
         <div className="mission-content">
           <span className="mission-kicker">{c.subtitle}</span>
           <h3>{c.name}</h3>
           <div><span>Explore mission</span><ArrowUpRight size={22}/></div>
         </div>
       </a>;
     })}
   </div>
  </section>
 <section className="product-section section-padding" id="products">
   <div className="section-heading reveal"><div><span className="eyebrow"><span className="section-number">02</span> THE FIELD SELECTION</span><h2>EXCEPTIONAL TOOLS.<br/><span>EXTRAORDINARY POSSIBILITIES.</span></h2></div><div className="rail-controls"><button aria-label="Previous products" onClick={()=>advanceProducts(-1)}><ArrowLeft size={20}/></button><button aria-label="Next products" onClick={()=>advanceProducts(1)}><ArrowRight size={20}/></button></div></div>
   <div className="product-rail" ref={productRail} aria-label="Featured products, swipe horizontally for more products"><div className="product-rail-inner">{featured.map(p=><ProductLink key={p.slug} product={p}/>)}</div></div>
   <div className="rail-footer"><span>SELECTED FOR YOUR NEXT EXPEDITION</span><div className="rail-track"><i style={{width:`${100/featured.length}%`,left:`${railIndex/featured.length*100}%`}}/></div><span>{String(railIndex+1).padStart(2,'0')} <span className="muted">/ {String(featured.length).padStart(2,'0')}</span></span></div>
 </section>
 <section className="finder-section section-padding" id="finder">
  <div className="finder-map" aria-hidden="true"/>
  <div className="finder-heading reveal"><span className="eyebrow"><span className="section-number">03</span> FIND YOUR PRODUCTS</span><div><h2>THE RIGHT TOOL.<br/><span>FOR YOUR TERRAIN.</span></h2><p>Tell us your industry and what you need to do.<br/>We’ll point you in the right direction.</p></div></div>
  <div className="finder-workflow"><div className="finder-step"><label id="industry-label"><span>01</span> YOUR INDUSTRY</label><Select value={industry} onValueChange={v=>{if(v)chooseIndustry(v);}}><SelectTrigger className="finder-select" aria-labelledby="industry-label"><SelectValue/></SelectTrigger><SelectContent>{Object.keys(finderOptions).map(i=><SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select></div><ChevronRight className="finder-arrow" size={24}/><div className="finder-step"><label id="requirement-label"><span>02</span> YOUR REQUIREMENT</label><Select value={requirement} onValueChange={v=>{if(v){setRequirement(v);setFinderResult(null);}}}><SelectTrigger className="finder-select" aria-labelledby="requirement-label"><SelectValue/></SelectTrigger><SelectContent>{Object.keys(finderOptions[industry]).map(r=><SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent></Select></div><button className="button button-yellow finder-submit" onClick={()=>setFinderResult({industry,requirement})}>Find my products <ArrowUpRight size={20}/></button></div>
  {finderResult?<div className="finder-results" aria-live="polite"><div className="finder-results-heading"><span><Check size={16}/> {recommendations.length>0?`${recommendations.length} matches for ${finderResult.requirement.toLowerCase()}`:'LET’S DEFINE YOUR SURVEY REQUIREMENTS'}</span><button onClick={()=>setFinderResult(null)}>Reset <span>↺</span></button></div>{recommendations.length>0?<div className="recommendations">{recommendations.map(p=><a key={p.slug} href={`/products/${p.slug}`}><img src={`/images/${p.image}.webp`} alt={p.name} width={160} height={160}/><div><span>{p.brand}</span><h3>{p.name}</h3><p>{p.label}</p></div><ArrowUpRight size={23}/></a>)}</div>:<div className="finder-consult"><p>DGPS selection depends on required accuracy, correction access and site conditions. Share these with our team for a tailored recommendation.</p><button className="button button-yellow" onClick={()=>openQuote('DGPS positioning — surveying consultation')}>Talk to a specialist <ArrowUpRight size={18}/></button></div>}</div>:<div className="finder-bottom"><span><MapPin size={14}/> YOUR NEXT STEP, MADE SIMPLE.</span><button className="text-link" onClick={()=>openQuote('Product recommendation')}>Need expert guidance? <ArrowUpRight size={16}/></button></div>}
 </section>
 <Footer onQuote={()=>openQuote()}/>
 <QuoteDialog open={quote} onOpenChange={setQuote} equipment={quoteEquipment}/>
  </main>;
}
