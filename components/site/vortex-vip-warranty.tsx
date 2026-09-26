import { ExternalLink } from 'lucide-react';

interface VortexVipWarrantyProps {
  className?: string;
}

export function VortexVipWarranty({ className = '' }: VortexVipWarrantyProps) {
  return (
    <aside
      className={`vortex-warranty-card ${className}`}
      aria-label="Vortex VIP Lifetime Warranty"
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
              VORTEX VIP® WARRANTY
            </span>
            <span className="warranty-coverage-tag">MANUFACTURER LIFETIME WARRANTY</span>
          </div>

          <h3 className="warranty-headline">
            UNLIMITED. UNCONDITIONAL. LIFETIME WARRANTY.
          </h3>

          <p className="warranty-description">
            Coverage is provided by Vortex Optics and is subject to Vortex&apos;s official warranty terms and regional eligibility.
          </p>

          <a
            className="warranty-terms-link"
            href="https://vortexoptics.com/vip-warranty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View official warranty terms</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </aside>
  );
}
