import { APP_LINKS } from '../config/appLinks';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">ENGINEERED FOR EXCELLENCE</div>
          <h2 className="section-title">The Vision Behind Scholo</h2>
          <p className="section-subtitle">
            Engineered from the ground up to solve real operational bottlenecks faced by school administrators, teachers, and parents.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: What Scholo Delivers */}
          <div className="about-card app-overview-card">
            <div className="about-card-top">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="card-top-tag">SaaS Architecture</span>
            </div>

            <h3>All-in-One Cloud Ecosystem</h3>
            <p>
              <strong>Scholo</strong> eliminates fragmented software tools. Instead of disparate spreadsheets, paper attendance registers, and manual SMS systems, Scholo integrates your entire school into a single unified cloud database.
            </p>

            <ul className="about-highlights">
              <li>
                <div className="highlight-icon">✓</div>
                <span><strong>Admin Web Console:</strong> Comprehensive data governance, student record archives, fee reconciliations, and timetable generator.</span>
              </li>
              <li>
                <div className="highlight-icon">✓</div>
                <span><strong>Teacher Mobile App:</strong> Zero-friction daily workflow with 10-second period attendance logging, exam grading, and notices.</span>
              </li>
              <li>
                <div className="highlight-icon">✓</div>
                <span><strong>Parent Mobile Portal:</strong> Real-time transparent visibility into attendance, exam report cards, school events, and payment receipts.</span>
              </li>
            </ul>

            <div className="about-cta-bar">
              <a href="#download" className="btn-link-scroll">
                <span>Explore Mobile Downloads &rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 2: Founder & Engineer Profile */}
          <div className="about-card creator-card">
            <div className="about-card-top">
              <div className="about-card-icon creator-icon-accent">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="card-top-tag verified">Founder & Lead Developer</span>
            </div>

            <div className="creator-profile-header">
              <div className="creator-avatar-badge">MH</div>
              <div>
                <h3 className="creator-name">Muhammed Haris</h3>
                <p className="creator-role">Software Architect & Product Engineer</p>
              </div>
            </div>

            <p className="creator-bio">
              Driven by a mission to modernize education management, Muhammed Haris designed Scholo with enterprise-level stability, bank-grade encryption, and consumer-grade intuitive user experience.
            </p>

            <div className="creator-stats-chips">
              <div className="creator-chip">
                <strong>Full-Stack</strong>
                <span>React & Cloud</span>
              </div>
              <div className="creator-chip">
                <strong>Security First</strong>
                <span>Role-Based Auth</span>
              </div>
              <div className="creator-chip">
                <strong>Real-Time</strong>
                <span>Sub-second Sync</span>
              </div>
            </div>

            <div className="creator-actions">
              <a
                href={APP_LINKS.creatorPortfolioUrl}
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
