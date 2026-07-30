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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Paperless Administration
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Instant Mobile Sync
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                24/7 Dedicated Support
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
                <div className="browser-address">https://scholo.netlify.app/</div>
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
