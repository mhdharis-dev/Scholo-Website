import { useState, useEffect } from 'react';

export default function Header({ onOpenDemo, onNavigate, currentPath = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const isPrivacyPage = currentPath.includes('privacy');

  useEffect(() => {
    if (isPrivacyPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPrivacyPage]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isPrivacyPage) {
      if (onNavigate) {
        onNavigate('/', targetId);
      } else {
        window.location.href = '/' + targetId;
      }
      return;
    }

    setActiveSection(targetId.replace('#', ''));
    history.replaceState(null, '', targetId);

    const elem = document.querySelector(targetId);
    if (elem) {
      const offsetTop = elem.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled || isPrivacyPage ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <a
            href="/"
            className="brand-logo"
            aria-label="Scholo Home"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('/');
            }}
          >
            <div className="logo-glow-wrapper">
              <img src="/assets/logo/Scholo_LogoTransperent.png" alt="Scholo Logo" />
            </div>
            <div className="brand-text-group">
              <span className="brand-text">Scholo</span>
              <span className="brand-badge">App</span>
            </div>
          </a>

          {/* Minimal 4-Item Navigation Menu */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="/#overview"
                className={`nav-link ${!isPrivacyPage && activeSection === 'overview' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#overview')}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="/#features"
                className={`nav-link ${!isPrivacyPage && activeSection === 'features' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#screens"
                className={`nav-link ${!isPrivacyPage && activeSection === 'screens' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#screens')}
              >
                App Screens
              </a>
            </li>
            <li>
              <a
                href="/#download"
                className={`nav-link nav-highlight ${!isPrivacyPage && activeSection === 'download' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#download')}
              >
                <span>📱 Download</span>
                <span className="nav-new-pill">Play Store</span>
              </a>
            </li>
          </ul>

          {/* Action CTA */}
          <div className="nav-actions">
            <button className="btn btn-primary nav-cta-btn js-open-demo-modal" onClick={onOpenDemo}>
              <span>Request Demo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
