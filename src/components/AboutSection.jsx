export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">ABOUT SCHOLO & DEVELOPER</div>
          <h2 className="section-title">Built for Modern Educational Excellence</h2>
          <p className="section-subtitle">
            Discover the vision behind Scholo and how our platform transforms school administration.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: What the App Does */}
          <div className="about-card app-overview-card">
            <div className="about-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3>What Scholo Does</h3>
            <p>
              <strong>Scholo</strong> is an all-in-one, 3-tier Student Management System engineered to seamlessly connect school directors, teachers, and parents in real time.
            </p>

            <ul className="about-highlights">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Admin Web Console:</strong> Master dashboard for record management, timetables, fee tracking, and system-wide security.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Teacher Mobile App:</strong> Fast mobile tools for one-tap period attendance, exam marks entry, and direct parent announcements.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Parent Portal:</strong> Real-time push notifications for attendance, digital gradebooks, circulars, and fee deadlines.</span>
              </li>
            </ul>

            <div className="playstore-container">
              <button
                className="playstore-btn disabled"
                onClick={() => alert("Scholo Google Play App Store link is coming soon! Request a live demo to test the preview version.")}
                title="Google Play Download Link Coming Soon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.55.45-1 1-1h.25l10.87 8.5L4.25 19.5H4c-.55 0-1-.45-1-1zm1.75-15.36L13.12 12 4.75 18.86V5.14zM16.5 12L5.85 3.65l11.4 6.65c.5.29.5.91 0 1.2L16.5 12zm0 0l-10.65 8.35 11.4-6.65c.5-.29.5-.91 0-1.2L16.5 12z"/>
                </svg>
                <div className="playstore-text">
                  <span className="playstore-sub">GET IT ON</span>
                  <span className="playstore-title">Google Play (Coming Soon)</span>
                </div>
              </button>
            </div>
          </div>

          {/* Card 2: Creator / Developer Profile */}
          <div className="about-card creator-card">
            <div className="about-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Created By Muhammed Haris</h3>
            <p className="creator-role">Founder & Software Engineer</p>
            <p className="creator-bio">
              Scholo was conceptualized, designed, and developed by <strong>Muhammed Haris</strong> to empower educational institutions with modern digital workflows and paperless communication.
            </p>

            <div className="creator-actions">
              <a
                href="https://muhammed-haris-personal-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary portfolio-btn"
              >
                <span>View Creator Portfolio</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
