import { APP_LINKS } from '../config/appLinks';

export default function Hero({ onOpenDemo }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const offsetTop = elem.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="overview">
      <div className="hero-radial-glow"></div>

      <div className="container">
        <div className="hero-grid-focused">
          {/* Left Column: Clean, Minimal Promotional Copy */}
          <div className="hero-content">
            <div className="hero-badge-animated">
              <span className="badge-pulse-dot"></span>
              <span className="badge-text">SCHOLO • A Smarter School, A Brighter Future</span>
            </div>

            <h1 className="hero-title">
              Smart School Administration, <span className="gradient-text">Made Effortless.</span>
            </h1>

            <p className="hero-description">
              The modern mobile-first management system connecting school administrators, teachers, and parents. Track daily attendance, manage student records, record exam marks, and organize timetables with real-time cloud sync.
            </p>

            {/* Core 4 Quick Feature Pills */}
            <div className="hero-feature-pills">
              <div className="feature-pill">
                <span className="pill-emoji">👥</span>
                <span>Students</span>
              </div>
              <div className="feature-pill">
                <span className="pill-emoji">📅</span>
                <span>Attendance</span>
              </div>
              <div className="feature-pill">
                <span className="pill-emoji">📝</span>
                <span>Marks</span>
              </div>
              <div className="feature-pill">
                <span className="pill-emoji">⏰</span>
                <span>Timetable</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, '#download')}
                className="btn btn-download-hero"
                id="hero-download-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.352-.61-.84-.61-1.396V3.21c0-.556.242-1.044.61-1.396zM15.207 13.414l2.457 2.457-12.247 7.072 9.79-9.529zm0-2.828L5.417 1.057l12.247 7.072-2.457 2.457zm1.414 1.414l3.155 1.821c.883.51.883 1.34 0 1.85l-3.155 1.821-2.121-2.121 2.121-2.121z"/>
                </svg>
                <span>Download on Google Play</span>
              </a>

              <button className="btn btn-primary hero-btn-glow js-open-demo-modal" onClick={onOpenDemo}>
                <span>Request Live Demo &rarr;</span>
              </button>

              <a
                href={`https://wa.me/${APP_LINKS.supportWhatsApp}?text=Hello%20Scholo%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20School%20Management%20System.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-hero"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.974.55 1.761.812 2.796.812 3.179 0 5.767-2.587 5.767-5.766.002-3.18-2.585-5.767-5.767-5.767zm7.534 5.766c-.002 4.148-3.376 7.521-7.525 7.521-1.309 0-2.591-.341-3.719-.99l-4.142 1.086 1.106-4.037c-.718-1.187-1.097-2.55-1.096-3.95.002-4.148 3.376-7.522 7.526-7.522 4.149.001 7.524 3.375 7.525 7.522"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick interactive tour shortcut */}
            <div className="hero-explore-hint">
              <a href="#screens" onClick={(e) => scrollToSection(e, '#screens')}>
                <span>👉 Explore interactive app screens below</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Official Scholo Poster Artwork */}
          <div className="hero-poster-showcase">
            <div className="poster-aura-glow"></div>
            
            <div className="poster-card-wrapper">
              <img
                src="/assets/onboarding/scholo_hero_poster.png"
                alt="Scholo - A Smarter School, A Brighter Future"
                className="hero-poster-image"
                loading="eager"
              />

              {/* Interactive badge chip on poster */}
              <div className="poster-floating-chip">
                <div className="chip-indicator"></div>
                <div className="chip-text">
                  <strong>Play Store Testing Ready</strong>
                  <span>Android 8.0+ Compatible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
