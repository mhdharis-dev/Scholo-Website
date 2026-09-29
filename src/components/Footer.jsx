import { APP_LINKS } from '../config/appLinks';

export default function Footer({ onOpenLegal, onNavigate }) {
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/privacy-policy');
    } else {
      window.location.href = '/privacy-policy';
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid-minimal">
          {/* Brand info */}
          <div className="footer-brand">
            <a 
              href="/" 
              className="brand-logo footer-logo" 
              aria-label="Scholo Home"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/');
                }
              }}
            >
              <img src="/assets/logo/Scholo_LogoTransperent.png" alt="Scholo Logo" />
              <div className="brand-text-group">
                <span className="brand-text">Scholo</span>
                <span className="brand-badge-footer">App</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              A Smarter School, A Brighter Future. The mobile-first student management system for students, attendance, marks, and timetables.
            </p>

            <div className="footer-app-links">
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-store-pill"
                title="Google Play Store"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.352-.61-.84-.61-1.396V3.21c0-.556.242-1.044.61-1.396zM15.207 13.414l2.457 2.457-12.247 7.072 9.79-9.529zm0-2.828L5.417 1.057l12.247 7.072-2.457 2.457zm1.414 1.414l3.155 1.821c.883.51.883 1.34 0 1.85l-3.155 1.821-2.121-2.121 2.121-2.121z"/>
                </svg>
                <span>Google Play</span>
              </a>

              <a
                href="#download"
                className="footer-store-pill"
                title="Download App"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Center</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <a href="/#overview">Overview</a>
              <a href="/#features">Core Features</a>
              <a href="/#screens">App Screens Tour</a>
              <a href="/#download">Google Play Download</a>
              <a href="/#contact">Request Live Demo</a>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="footer-title">Modules</h4>
            <div className="footer-links">
              <a href="/#features">👥 Students Directory</a>
              <a href="/#features">📅 1-Tap Attendance</a>
              <a href="/#features">📝 Marks & Grades</a>
              <a href="/#features">⏰ Timetable & Schedules</a>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href={`mailto:${APP_LINKS.supportEmail}`}>{APP_LINKS.supportEmail}</a>
              <a href={`tel:${APP_LINKS.supportPhone}`}>{APP_LINKS.supportPhone}</a>
              <a
                href={`https://wa.me/${APP_LINKS.supportWhatsApp}?text=Hello%20Scholo%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20School%20Management%20System.`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-chat-link"
              >
                <span>WhatsApp Live Chat</span>
              </a>
              <a
                href={APP_LINKS.creatorPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-portfolio-link"
              >
                <span>Creator Portfolio ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Scholo. A Smarter School, A Brighter Future.
          </div>
          <div className="footer-legal-links">
            <a
              href="/privacy-policy"
              onClick={handlePrivacyClick}
              className="legal-link"
            >
              Privacy Policy
            </a>
            <button
              onClick={() => onOpenLegal('terms')}
              className="legal-link-btn"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('security')}
              className="legal-link-btn"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
