import { Shield, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AffordaWarrantyProps {
  brand?: string;
  className?: string;
}

export function AffordaWarranty({ brand, className = '' }: AffordaWarrantyProps) {
  const isVortex = brand?.toLowerCase().includes('vortex');

  return (
    <aside
      className={`afforda-warranty-card ${className}`}
      aria-label="AFFORDA VIP Lifetime Warranty"
    >
      <div className="warranty-inner">
        {/* Shield Badge Visual */}
        <div className="warranty-badge-container">
          <div className="warranty-shield-badge">
            <svg
              className="warranty-shield-svg"
              viewBox="0 0 48 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer Shield Frame */}
              <path
                d="M24 2L4 9.5V23.5C4 36.2 12.5 47.9 24 51.5C35.5 47.9 44 36.2 44 23.5V9.5L24 2Z"
                stroke="var(--yellow, #e6f146)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(230, 241, 70, 0.05)"
              />
              {/* Inner Shield Frame */}
              <path
                d="M24 6.5L8 12.5V23.5C8 33.8 14.8 43.4 24 46.5C33.2 43.4 40 33.8 40 23.5V12.5L24 6.5Z"
                stroke="rgba(230, 241, 70, 0.45)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              {/* Center Checkmark */}
              <path
                d="M17 24.5L22 29.5L31 19.5"
                stroke="var(--yellow, #e6f146)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Tactical Crosshair Ticks */}
              <line x1="24" y1="2" x2="24" y2="5" stroke="var(--yellow, #e6f146)" strokeWidth="1.5" />
              <line x1="24" y1="48" x2="24" y2="51" stroke="var(--yellow, #e6f146)" strokeWidth="1.5" />
              <line x1="4" y1="23.5" x2="7" y2="23.5" stroke="var(--yellow, #e6f146)" strokeWidth="1.5" />
              <line x1="41" y1="23.5" x2="44" y2="23.5" stroke="var(--yellow, #e6f146)" strokeWidth="1.5" />
            </svg>
            <span className="warranty-shield-label">VIP</span>
          </div>
        </div>

        {/* Warranty Content */}
        <div className="warranty-content">
          <div className="warranty-header-row">
            <span className="warranty-kicker">
              <span className="warranty-status-dot" />
              AFFORDA VIP WARRANTY
            </span>
            <span className="warranty-coverage-tag">SELLER LIFETIME COMMITMENT</span>
          </div>

          <h3 className="warranty-headline">
            UNLIMITED. UNCONDITIONAL. LIFETIME WARRANTY.
          </h3>

          <p className="warranty-description">
            Every piece of equipment sold by AFFORDA Technologies includes our comprehensive seller lifetime service warranty. If your product is damaged, fails, or requires service during field operations, AFFORDA will repair or service it unconditionally at no charge.
          </p>

          <div className="warranty-features-row">
            <span className="warranty-feature-chip">
              <CheckCircle2 size={12} className="feature-icon" /> 100% Fully Covered
            </span>
            <span className="warranty-feature-chip">
              <CheckCircle2 size={12} className="feature-icon" /> Zero Service Fees
            </span>
            <span className="warranty-feature-chip">
              <CheckCircle2 size={12} className="feature-icon" /> Direct Field Support
            </span>
          </div>

          {isVortex && (
            <p className="vortex-note">
              * Official Vortex Optics products also carry the manufacturer’s VIP Lifetime Warranty.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
