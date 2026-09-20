'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Crosshair } from 'lucide-react';

export interface CategorySlide {
  id: string;
  num: string;
  kicker: string;
  name: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  coords: string;
  technicalTag: string;
  imageTransform?: string;
}

export const categorySlides: CategorySlide[] = [
  {
    id: 'optics',
    num: '01',
    kicker: 'FIELD OPTICS / 01',
    name: 'OPTICS',
    label: 'Binoculars, spotting scopes and rangefinders',
    description: 'Precision vision for demanding environments.',
    image: '/images/viper-hero.webp',
    imageAlt: 'HD Binoculars and Observation Optics',
    coords: 'LAT 30°44′ N / LON 79°04′ E',
    technicalTag: 'HD OPTICAL SYSTEM // 10×42',
    imageTransform: 'rotate(-12deg) scale(1.02)'
  },
  {
    id: 'navigation',
    num: '02',
    kicker: 'NAVIGATION SYSTEMS / 02',
    name: 'MAPPING & NAVIGATION',
    label: 'GPS and field navigation equipment',
    description: 'Reliable positioning wherever the field takes you.',
    image: '/images/gpsmap.webp',
    imageAlt: 'Multi-Band GPS and Field Navigation',
    coords: 'MULTI-BAND GNSS // FIX: 3D',
    technicalTag: 'EXPANDED SATELLITE TRACKING',
    imageTransform: 'rotate(-6deg) scale(1.05)'
  },
  {
    id: 'surveying',
    num: '03',
    kicker: 'GNSS & SURVEY / 03',
    name: 'SURVEYING & DGPS',
    label: 'Professional surveying and positioning systems',
    description: 'Centimeter-grade accuracy for engineering and land survey.',
    image: '/images/drone.webp',
    imageAlt: 'Professional Surveying and Aerial Mapping Systems',
    coords: 'RTK BASELINE 0.01M // DATUM: WGS84',
    technicalTag: 'AERIAL & FIELD POSITIONING',
    imageTransform: 'rotate(-4deg) scale(1.04)'
  },
  {
    id: 'forestry',
    num: '04',
    kicker: 'FIELD MONITORING / 04',
    name: 'FORESTRY & WILDLIFE',
    label: 'Trail cameras and field monitoring equipment',
    description: 'Autonomous sensing and recording in remote habitats.',
    image: '/images/browning.webp',
    imageAlt: 'Wildlife Trail Camera and Field Monitoring',
    coords: 'TRIGGER 0.15S // RADIANT IR',
    technicalTag: 'WILDLIFE OBSERVATION ZONE',
    imageTransform: 'rotate(-5deg) scale(1.03)'
  },
  {
    id: 'thermal',
    num: '05',
    kicker: 'THERMAL IMAGING / 05',
    name: 'THERMAL & INSPECTION',
    label: 'Thermal imaging and borescope systems',
    description: 'Heat signatures and articulating optics beyond the visible spectrum.',
    image: '/images/lynx.webp',
    imageAlt: 'Thermal Imaging Monocular and Inspection Systems',
    coords: 'NETD <20mK // 384×288 OLED',
    technicalTag: 'IR DETECTION RANGE: 1,200M',
    imageTransform: 'rotate(-10deg) scale(1.06)'
  },
  {
    id: 'geology',
    num: '06',
    kicker: 'GEOLOGICAL SYSTEMS / 06',
    name: 'GEOLOGICAL EQUIPMENT',
    label: 'Compasses, transit instruments and geological tools',
    description: 'Direct-read azimuth, dip measurement and structural mapping.',
    image: '/images/geolite-open.webp',
    imageAlt: 'Geological Pocket Transit and Precision Compass',
    coords: 'STRIKE / DIP AZIMUTH 2°',
    technicalTag: 'INDUCTION DAMPENED TRANSIT',
    imageTransform: 'rotate(7deg) scale(1.04)'
  }
];

interface CategorySliderProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategorySlider({ onSelectCategory }: CategorySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = categorySlides.length;

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index >= currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay timer: 2.9 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2900);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Window-level keyboard listener (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.closest('[role="dialog"]'))
      ) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = categorySlides[currentIndex];

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(currentSlide.id);
    } else {
      const el = document.getElementById('equipment');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    /* oxlint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */
    <section
      className="category-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Field Technology Category Showcase"
    >
      {/* Topographic range rings and reticle backing */}
      <div className="slider-orbit" aria-hidden="true">
        <div className="slider-orbit-inner" />
        <div className="slider-orbit-crosshair-h" />
        <div className="slider-orbit-crosshair-v" />
      </div>

      <span className="slider-cross" aria-hidden="true">
        <Crosshair size={22} />
      </span>

      {/* Atmospheric depth glow */}
      <div className="slider-atmospheric-glow" aria-hidden="true" />

      {/* Product Category Showcase Slides */}
      <div className="slider-stage">
        {categorySlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`slider-slide ${isActive ? 'is-active' : 'is-inactive'} direction-${direction}`}
              aria-hidden={!isActive}
            >
              {/* Product Visual */}
              <div className="slider-visual-wrapper">
                {/* oxlint-disable-next-line next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="slider-image"
                  style={{
                    transform: slide.imageTransform || 'none'
                  }}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  width={1100}
                  height={950}
                />
              </div>

              {/* Technical subtle coordinates overlay for active category */}
              <div className="slider-tech-overlay" aria-hidden="true">
                <span className="tech-coord">{slide.coords}</span>
                <span className="tech-metric">{slide.technicalTag}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Category Information Tag (Bottom-Right) */}
      <div className="slider-category-tag" key={`tag-${currentSlide.id}`}>
        <div className="tag-top">
          <span className="tag-status">
            <i className="tag-dot" /> {currentSlide.kicker}
          </span>
          <span className="tag-index">{currentSlide.num} / {String(total).padStart(2, '0')}</span>
        </div>
        <strong className="tag-title">{currentSlide.name}</strong>
        <p className="tag-desc">{currentSlide.description}</p>
        <button
          className="tag-explore"
          onClick={handleExplore}
          aria-label={`Explore ${currentSlide.name} Category`}
        >
          <span>Explore Category</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Slider Controls: Minimal Previous/Next & Segmented Progress */}
      <div className="slider-controls" aria-label="Slider navigation">
        <div className="slider-progress" aria-label="Slide indicators">
          {categorySlides.map((_, i) => (
            <button
              key={i}
              className={`slider-progress-seg ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}: ${categorySlides[i].name}`}
            />
          ))}
        </div>

        <div className="slider-arrows">
          <button
            className="slider-arrow"
            onClick={prevSlide}
            aria-label="Previous category"
            title="Previous category"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            className="slider-arrow"
            onClick={nextSlide}
            aria-label="Next category"
            title="Next category"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
