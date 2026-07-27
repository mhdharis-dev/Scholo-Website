export default function ValuePillars() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">CORE ADVANTAGES</div>
          <h2 className="section-title">Built for Modern Educational Leadership</h2>
          <p className="section-subtitle">
            Scholo bridges administrative complexity with intuitive apps tailored specifically for school principals, educators, and families.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="pillar-title">Central Control</h3>
            <p className="pillar-desc">
              Manage school branches, master timetables, fee tracking, and teacher allocations from one responsive web dashboard.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="pillar-title">Teacher Mobility</h3>
            <p className="pillar-desc">
              Teachers mark daily attendance, log subject marks, and view class rosters directly from their smartphones.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="pillar-title">Parent Engagement</h3>
            <p className="pillar-desc">
              Parents receive real-time updates on attendance alerts, exam gradebooks, fee dues, and teacher notes.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 className="pillar-title">Instant Reports</h3>
            <p className="pillar-desc">
              Generate instant performance analytics, attendance summaries, and official transcripts with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
