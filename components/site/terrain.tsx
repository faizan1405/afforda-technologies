'use client';
import { useEffect, useRef } from 'react';

// A projected elevation mesh. No WebGL context or rendering dependency required.
export default function Terrain({ mode }: { mode: 'terrain' | 'field' }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    let width = 0, height = 0, frame = 0, visible = true, px = 0, py = 0, tx = 0, ty = 0;
    const hero = canvas.parentElement!;
    const device = hero.querySelector<HTMLElement>('.hero-device');
    let deviceBounds: DOMRect | null = null;
    let dx = 0, dy = 0, targetDx = 0, targetDy = 0;
    const lines = Array.from({ length: coarse ? 22 : 37 }, (_, row) =>
      Array.from({ length: 65 }, (_, col) => {
        const x = col / 64 * 2 - 1, z = row / (coarse ? 21 : 36) * 2 - 1;
        const h = Math.exp(-((x-.28)**2*3+(z+.2)**2*2))*0.75 + Math.exp(-((x+.6)**2*6+(z-.25)**2*4))*.45 + Math.sin(x*9+z*4)*Math.cos(z*7)*.045;
        return [x, z, h];
      })
    );
    function draw() {
      frame = 0;
      if (!visible || !canvas || !ctx) return;
      px += (tx - px) * .07; py += (ty - py) * .07;
      dx += (targetDx - dx) * .07; dy += (targetDy - dy) * .07;
      if (Math.abs(targetDx - dx) < .001) dx = targetDx;
      if (Math.abs(targetDy - dy) < .001) dy = targetDy;
      device?.style.setProperty('--device-hover-x', `${dx * 24}px`);
      device?.style.setProperty('--device-hover-y', `${dy * 18}px`);
      device?.style.setProperty('--device-tilt-x', `${-dy * 8}deg`);
      device?.style.setProperty('--device-tilt-y', `${dx * 12}deg`);
      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / height));
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = .65;
      const alpha = (mode === 'terrain' ? .28 : .07) * (1 - progress * .75);
      ctx.strokeStyle = `rgba(221,237,160,${alpha})`;
      const centerX = width * .66 + px * 20, centerY = height * .8 + py * 15;
      lines.forEach((line, index) => {
        ctx.beginPath();
        line.forEach(([x,z,h], i) => {
          const angle = -.19 + px*.06;
          const rx = x*Math.cos(angle)-z*Math.sin(angle), rz = x*Math.sin(angle)+z*Math.cos(angle);
          const sx = centerX+rx*width*.54;
          const sy = centerY+rz*height*.25-h*height*(.3-progress*.1);
          if (i===0) ctx.moveTo(sx,sy); else ctx.lineTo(sx,sy);
        });
        ctx.stroke();
        if (index % 9 === 0 && width>700) {
          ctx.fillStyle=`rgba(229,242,177,${alpha*1.6})`;ctx.font='9px monospace';
          ctx.fillText(String(2400+index*40), centerX+width*.43, centerY+(index/36-.5)*height*.5);
        }
      });
      hero.style.setProperty('--parallax-x', `${px*10}px`);
      hero.style.setProperty('--parallax-y', `${py*8+progress*45}px`);
      hero.style.setProperty('--scroll-blend',String(1-progress*.75));
      if (!reduced && (Math.abs(tx-px)>.001||Math.abs(ty-py)>.001||dx!==targetDx||dy!==targetDy)) frame=requestAnimationFrame(draw);
    }
    const schedule = () => { if(!frame && visible) frame=requestAnimationFrame(draw); };
    const resize = () => {
      width=hero.clientWidth;height=hero.clientHeight;
      const dpr=Math.min(window.devicePixelRatio||1,coarse?1:1.5);
      canvas.width=width*dpr;canvas.height=height*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);schedule();
    };
    const move = (event: PointerEvent) => {if(reduced||coarse)return;const r=hero.getBoundingClientRect();tx=(event.clientX-r.left)/r.width-.5;ty=(event.clientY-r.top)/r.height-.5;schedule();};
    const leave = () => {tx=0;ty=0;schedule();};
    const deviceMove = (event: PointerEvent) => {
      if (reduced || coarse || event.pointerType === 'touch' || !device) return;
      // Keep the hit area stable while the image tilts and shifts inside it.
      const bounds = deviceBounds ??= device.getBoundingClientRect();
      targetDx = Math.max(-.5, Math.min(.5, (event.clientX - bounds.left) / bounds.width - .5));
      targetDy = Math.max(-.5, Math.min(.5, (event.clientY - bounds.top) / bounds.height - .5));
      schedule();
    };
    const deviceLeave = () => {targetDx=0;targetDy=0;deviceBounds=null;schedule();};
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)schedule();});
    observer.observe(hero);
    const ro = new ResizeObserver(resize);ro.observe(hero);
    hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',leave);
    device?.addEventListener('pointerenter',deviceMove);
    device?.addEventListener('pointermove',deviceMove);
    device?.addEventListener('pointerleave',deviceLeave);
    device?.addEventListener('pointercancel',deviceLeave);
    if(!reduced)window.addEventListener('scroll',schedule,{passive:true});
    resize();
    return ()=>{cancelAnimationFrame(frame);observer.disconnect();ro.disconnect();hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',leave);window.removeEventListener('scroll',schedule);device?.removeEventListener('pointerenter',deviceMove);device?.removeEventListener('pointermove',deviceMove);device?.removeEventListener('pointerleave',deviceLeave);device?.removeEventListener('pointercancel',deviceLeave);};
  }, [mode]);
  return <canvas className="terrain-canvas" ref={ref} aria-hidden="true"/>;
}
