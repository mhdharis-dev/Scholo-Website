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

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('/privacy-policy');
    } else {
      window.location.href = '/privacy-policy';
    }
  };

  return (
    <header className={`header ${scrolled || isPrivacyPage ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a
            href="/"
            className="brand-logo"
            aria-label="Scholo Home"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('/');
            }}
          >
            <img src="/assets/logo/Scholo_LogoTransperent.png" alt="Scholo Logo" />
            <span className="brand-text">Scholo</span>
          </a>

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
                href="/#solutions"
                className={`nav-link ${!isPrivacyPage && activeSection === 'solutions' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#solutions')}
              >
                3-Tier Solution
              </a>
            </li>
            <li>
              <a
                href="/#roadmap"
                className={`nav-link ${!isPrivacyPage && activeSection === 'roadmap' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#roadmap')}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className={`nav-link ${!isPrivacyPage && activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#testimonials"
                className={`nav-link ${!isPrivacyPage && activeSection === 'testimonials' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className={`nav-link ${!isPrivacyPage && activeSection === 'faq' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#faq')}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className={`nav-link ${isPrivacyPage ? 'active' : ''}`}
                onClick={handlePrivacyClick}
              >
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
              Request Demo &rarr;
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

