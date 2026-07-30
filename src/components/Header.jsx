import { useState, useEffect } from 'react';

export default function Header({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
        const newHash = `#${current}`;
        if (window.location.hash !== newHash) {
          history.replaceState(null, '', newHash);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId.replace('#', ''));
    history.replaceState(null, '', targetId);

    const elem = document.querySelector(targetId);
    if (elem) {
      const offsetTop = elem.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="brand-logo" aria-label="Scholo Home" onClick={(e) => handleNavClick(e, '#overview')}>
            <img src="/assets/logo/Scholo_LogoTransperent.png" alt="Scholo Logo" />
            <span className="brand-text">Scholo</span>
          </a>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="#overview"
                className={`nav-link ${activeSection === 'overview' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#overview')}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className={`nav-link ${activeSection === 'solutions' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#solutions')}
              >
                3-Tier Solution
              </a>
            </li>
            <li>
              <a
                href="#security"
                className={`nav-link ${activeSection === 'security' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#security')}
              >
                Security & Stack
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className={`nav-link ${activeSection === 'roadmap' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#roadmap')}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#faq')}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
              Request Demo &rarr;
            </button>
            <button
              className="mobile-toggle"
              aria-label="Toggle Navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
