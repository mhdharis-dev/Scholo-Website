export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero-section" id="overview">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Enterprise Student Management
            </div>

            <h1 className="hero-title">
              Smart School Administration, <span>Simplified.</span>
            </h1>

            <p className="hero-description">
              Connect school administrators, teachers, and parents in one real-time ecosystem. Manage attendance, student records, timetables, and exam performance effortlessly.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
                Request Demo &rarr;
              </button>
              <a
                href="https://wa.me/919544234298?text=Hello%20Scholo%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20School%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.4)' }}
              >
                WhatsApp Chat
              </a>
            </div>

            <div className="trust-bar">
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Cloud Firestore Sync
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Cross-Platform Web & Mobile
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Flutter & Riverpod
              </div>
            </div>
          </div>

          <div className="hero-visual-showcase">
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                <div className="browser-address">https://admin.scholo.app/dashboard</div>
              </div>
              <div className="browser-body">
                <img
                  src="/assets/screens/admin_dashboard.png"
                  alt="Scholo Admin Web Console Desktop Dashboard"
                />
              </div>
            </div>

            <div className="phone-mockup hero-phone-floating">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="/assets/screens/teacher_Home Page - Short.png"
                  alt="Scholo Teacher App Interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
