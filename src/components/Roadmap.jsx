export default function Roadmap() {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">INNOVATION ROADMAP</div>
          <h2 className="section-title">Continuously Evolving Platform Capabilities</h2>
          <p className="section-subtitle">
            Upcoming feature releases designed to further empower school leaders, teachers, and parents.
          </p>
        </div>

        <div className="roadmap-grid">
          <div className="roadmap-card">
            <span className="roadmap-badge">Active Deployment</span>
            <div className="roadmap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="roadmap-title">Online Fee Payment Gateway</h3>
            <p className="roadmap-desc">Direct in-app fee payments for parents with automated digital receipt generation.</p>
          </div>

          <div className="roadmap-card">
            <span className="roadmap-badge">Active Deployment</span>
            <div className="roadmap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <h3 className="roadmap-title">Automated SMS Alerts</h3>
            <p className="roadmap-desc">Instant SMS broadcasts for emergency announcements and absentee alerts.</p>
          </div>

          <div className="roadmap-card">
            <span className="roadmap-badge">Active Deployment</span>
            <div className="roadmap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="roadmap-title">Custom Exam Grading Schemes</h3>
            <p className="roadmap-desc">Flexible grading rubrics, GPA calculators, and customizable report card layouts.</p>
          </div>

          <div className="roadmap-card">
            <span className="roadmap-badge">Active Deployment</span>
            <div className="roadmap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="roadmap-title">Live School Bus GPS Tracking</h3>
            <p className="roadmap-desc">Real-time route tracking for parents ensuring student transport safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
