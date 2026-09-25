'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ChevronDown, Compass, Trees, Mountain, Shield, Satellite } from 'lucide-react';
import {
  navigationCategories,
  navigationIndustries,
  navigationBrands
} from '@/lib/navigation-data';

interface HeaderProps {
  onQuote: () => void;
  home?: boolean;
}

export function Header({ onQuote, home = false }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'category' | 'industries' | 'brands' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<'category' | 'industries' | 'brands' | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Dropdown hover timers for smooth intent handling
  const handleMouseEnter = (dropdown: 'category' | 'industries' | 'brands') => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  const toggleDropdown = (dropdown: 'category' | 'industries' | 'brands') => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  const toggleMobileAccordion = (section: 'category' | 'industries' | 'brands') => {
    setMobileAccordion(prev => (prev === section ? null : section));
  };

  const handleBrandClick = (queryParam: string, href: string, e: React.MouseEvent) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (pathname === '/products' || pathname.startsWith('/products/')) {
      e.preventDefault();
      const url = new URL(window.location.origin + '/products');
      url.searchParams.set('brand', queryParam);
      window.history.pushState({}, '', url.toString());
      window.dispatchEvent(new Event('brand-filter-change'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine active states based on current route
  const isProductsActive = pathname === '/products' || pathname.startsWith('/products/');
  const isCareersActive = pathname === '/careers';
  const isAboutActive = pathname === '/about';
  const isCategoryActive = pathname.startsWith('/category/') || pathname.startsWith('/categories/');
  const isIndustryActive =
    pathname.startsWith('/categories/forest-wildlife') ||
    pathname.startsWith('/category/surveying') ||
    pathname.startsWith('/categories/mining-geology') ||
    pathname.startsWith('/categories/defense-paramilitary') ||
    pathname.startsWith('/categories/geology');

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'forestry-wildlife':
        return <Trees size={16} />;
      case 'surveying-dgps':
        return <Satellite size={16} />;
      case 'mining-geology':
        return <Mountain size={16} />;
      case 'defense-paramilitary':
        return <Shield size={16} />;
      case 'geological-research':
        return <Compass size={16} />;
      default:
        return <Compass size={16} />;
    }
  };

  return (
    <header
      ref={headerRef}
      className={`site-header ${home ? 'home-header' : 'detail-header'} ${scrolled ? 'is-scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}
    >
      <div className="site-header-container">
        {/* Logo */}
        <a
          href="/"
          className="brand"
          aria-label="AFFORDA Technologies home"
          onClick={() => {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
          }}
        >
          <img
            src="/images/afforda-logo.png"
            alt="AFFORDA Technologies"
            width={188}
            height={68}
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          {/* 1. Category Dropdown */}
          <div
            className={`nav-item nav-item-dropdown ${activeDropdown === 'category' ? 'is-open' : ''}`}
            onMouseEnter={() => handleMouseEnter('category')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${activeDropdown === 'category' ? 'is-open' : ''} ${isCategoryActive && !isIndustryActive ? 'is-active' : ''}`}
              onClick={() => toggleDropdown('category')}
              aria-expanded={activeDropdown === 'category'}
              aria-haspopup="true"
              aria-label="Category navigation menu"
            >
              <span>Category</span>
              <ChevronDown size={14} className="dropdown-caret" />
            </button>

            {/* Category Dropdown Panel */}
            <div className="dropdown-menu dropdown-category" role="menu">
              <div className="dropdown-header">
                <span className="dropdown-kicker">PRODUCT DOMAINS</span>
                <span className="dropdown-badge">11 CATEGORIES</span>
              </div>
              <div className="dropdown-grid-2col">
                {navigationCategories.map(cat => {
                  const isCurrent = pathname === cat.href;
                  return (
                    <a
                      key={cat.id}
                      href={cat.href}
                      className={`dropdown-item ${isCurrent ? 'is-current' : ''}`}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="item-content">
                        <span className="item-code">{cat.code}</span>
                        <span className="item-title">{cat.name}</span>
                      </div>
                      <ArrowUpRight size={14} className="item-arrow" />
                    </a>
                  );
                })}
              </div>
              <div className="dropdown-footer">
                <a
                  href="/#equipment"
                  className="dropdown-footer-link"
                  onClick={() => setActiveDropdown(null)}
                >
                  Explore equipment catalogue <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Products (Direct Link) */}
          <div className="nav-item">
            <a
              href="/products"
              className={`nav-link ${isProductsActive ? 'is-active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Products</span>
            </a>
          </div>

          {/* 3. Industries Dropdown */}
          <div
            className={`nav-item nav-item-dropdown ${activeDropdown === 'industries' ? 'is-open' : ''}`}
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${activeDropdown === 'industries' ? 'is-open' : ''} ${isIndustryActive ? 'is-active' : ''}`}
              onClick={() => toggleDropdown('industries')}
              aria-expanded={activeDropdown === 'industries'}
              aria-haspopup="true"
              aria-label="Industries navigation menu"
            >
              <span>Industries</span>
              <ChevronDown size={14} className="dropdown-caret" />
            </button>

            {/* Industries Dropdown Panel */}
            <div className="dropdown-menu dropdown-industries" role="menu">
              <div className="dropdown-header">
                <span className="dropdown-kicker">OPERATIONAL SECTORS</span>
                <span className="dropdown-badge">5 CORE INDUSTRIES</span>
              </div>
              <div className="dropdown-list">
                {navigationIndustries.map(ind => {
                  const isCurrent = pathname === ind.href;
                  return (
                    <a
                      key={ind.id}
                      href={ind.href}
                      className={`dropdown-item industry-dropdown-item ${isCurrent ? 'is-current' : ''}`}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="industry-icon-box">
                        {getIndustryIcon(ind.id)}
                      </div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">{ind.name}</span>
                          <span className="item-tag">{ind.code}</span>
                        </div>
                        <span className="item-desc">{ind.desc}</span>
                      </div>
                      <ArrowUpRight size={15} className="item-arrow" />
                    </a>
                  );
                })}
              </div>
              <div className="dropdown-footer">
                <a
                  href="/#finder"
                  className="dropdown-footer-link"
                  onClick={() => setActiveDropdown(null)}
                >
                  Need sector recommendations? Try Product Finder <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* 4. Brands Dropdown */}
          <div
            className={`nav-item nav-item-dropdown ${activeDropdown === 'brands' ? 'is-open' : ''}`}
            onMouseEnter={() => handleMouseEnter('brands')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${activeDropdown === 'brands' ? 'is-open' : ''}`}
              onClick={() => toggleDropdown('brands')}
              aria-expanded={activeDropdown === 'brands'}
              aria-haspopup="true"
              aria-label="Brands navigation menu"
            >
              <span>Brands</span>
              <ChevronDown size={14} className="dropdown-caret" />
            </button>

            {/* Brands Dropdown Panel */}
            <div className="dropdown-menu dropdown-brands" role="menu">
              <div className="dropdown-header">
                <span className="dropdown-kicker">MANUFACTURERS & BRANDS</span>
                <span className="dropdown-badge">12 FEATURED BRANDS</span>
              </div>
              <div className="dropdown-grid-2col">
                {navigationBrands.map(b => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="dropdown-item brand-dropdown-item"
                    role="menuitem"
                    onClick={(e) => handleBrandClick(b.queryParam, b.href, e)}
                  >
                    <div className="item-content">
                      <span className="item-title">{b.name}</span>
                      <span className="item-desc">{b.specialty}</span>
                    </div>
                    <ArrowUpRight size={13} className="item-arrow" />
                  </a>
                ))}
              </div>
              <div className="dropdown-footer">
                <a
                  href="/products"
                  className="dropdown-footer-link"
                  onClick={() => setActiveDropdown(null)}
                >
                  View all brands in catalogue <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* 5. Careers (Direct Link) */}
          <div className="nav-item">
            <a
              href="/careers"
              className={`nav-link ${isCareersActive ? 'is-active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Careers</span>
            </a>
          </div>

          {/* 6. About (Direct Link) */}
          <div className="nav-item">
            <a
              href="/about"
              className={`nav-link ${isAboutActive ? 'is-active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>About</span>
            </a>
          </div>
        </nav>

        {/* Header Actions: Request a Quote CTA & Hamburger Button */}
        <div className="header-actions">
          <button
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
              onQuote();
            }}
            className="button button-yellow nav-quote"
            aria-label="Request a quote for equipment"
          >
            <span>Request a quote</span>
            <ArrowUpRight size={16} className="nav-quote-arrow" />
          </button>

          <button
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-inner">
            {/* Category Accordion */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-nav-accordion-btn ${mobileAccordion === 'category' ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('category')}
                aria-expanded={mobileAccordion === 'category'}
              >
                <span>Category</span>
                <ChevronDown size={18} className="mobile-caret" />
              </button>
              {mobileAccordion === 'category' && (
                <div className="mobile-subnav">
                  {navigationCategories.map(cat => (
                    <a
                      key={cat.id}
                      href={cat.href}
                      className="mobile-subnav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{cat.name}</span>
                      <span className="mobile-tag">{cat.code}</span>
                    </a>
                  ))}
                  <a
                    href="/#equipment"
                    className="mobile-subnav-link mobile-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Explore all categories</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
            </div>

            {/* Products Link */}
            <a
              href="/products"
              className={`mobile-nav-direct-link ${isProductsActive ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Products</span>
              <ArrowUpRight size={18} />
            </a>

            {/* Industries Accordion */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-nav-accordion-btn ${mobileAccordion === 'industries' ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('industries')}
                aria-expanded={mobileAccordion === 'industries'}
              >
                <span>Industries</span>
                <ChevronDown size={18} className="mobile-caret" />
              </button>
              {mobileAccordion === 'industries' && (
                <div className="mobile-subnav">
                  {navigationIndustries.map(ind => (
                    <a
                      key={ind.id}
                      href={ind.href}
                      className="mobile-subnav-link industry-sublink"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="mobile-subnav-text">
                        <div className="mobile-subnav-title">{ind.name}</div>
                        <div className="mobile-subnav-desc">{ind.desc}</div>
                      </div>
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                  <a
                    href="/#finder"
                    className="mobile-subnav-link mobile-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Product Finder tool</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
            </div>

            {/* Brands Accordion */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-nav-accordion-btn ${mobileAccordion === 'brands' ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('brands')}
                aria-expanded={mobileAccordion === 'brands'}
              >
                <span>Brands</span>
                <ChevronDown size={18} className="mobile-caret" />
              </button>
              {mobileAccordion === 'brands' && (
                <div className="mobile-subnav mobile-brands-grid">
                  {navigationBrands.map(b => (
                    <a
                      key={b.name}
                      href={b.href}
                      className="mobile-subnav-link brand-sublink"
                      onClick={(e) => handleBrandClick(b.queryParam, b.href, e)}
                    >
                      <div className="mobile-subnav-text">
                        <div className="mobile-subnav-title">{b.name}</div>
                        <div className="mobile-subnav-desc">{b.specialty}</div>
                      </div>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                  <a
                    href="/products"
                    className="mobile-subnav-link mobile-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>View all brands</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
            </div>

            {/* Careers Link */}
            <a
              href="/careers"
              className={`mobile-nav-direct-link ${isCareersActive ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Careers</span>
              <ArrowUpRight size={18} />
            </a>

            {/* About Link */}
            <a
              href="/about"
              className={`mobile-nav-direct-link ${isAboutActive ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
              <ArrowUpRight size={18} />
            </a>

            {/* Mobile Quote CTA */}
            <div className="mobile-quote-container">
              <button
                className="button button-yellow mobile-quote-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuote();
                }}
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
