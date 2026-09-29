export default function ValuePillars() {
  const pillars = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      badge: "Command Center",
      title: "Centralized Web Control",
      desc: "Manage multiple school branches, staff directories, student enrollment records, fee ledgers, and master timetables in real-time.",
      metric: "100% Cloud-Synchronized",
      gradient: "from-blue",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      badge: "Teacher Productivity",
      title: "Teacher Mobile Workspace",
      desc: "Empower faculty to take period attendance in 10 seconds, input exam marks effortlessly, and broadcast class announcements on the go.",
      metric: "10-Sec Attendance Logging",
      gradient: "from-indigo",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      badge: "Family Trust",
      title: "Real-Time Parent Portal",
      desc: "Parents receive instant smartphone push alerts for attendance, view subject-wise test results, track school events, and review fee schedules.",
      metric: "Instant Push Notifications",
      gradient: "from-purple",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      badge: "Actionable Insights",
      title: "Instant Analytics & Reports",
      desc: "One-click generation of student report cards, attendance statistics, class averages, and exportable CSV reports for institutional compliance.",
      metric: "Zero Manual Paperwork",
      gradient: "from-cyan",
    },
  ];

  return (
    <section className="problem-section" id="advantages">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">WHY INSTITUTIONS CHOOSE SCHOLO</div>
          <h2 className="section-title">Built for Modern Educational Excellence</h2>
          <p className="section-subtitle">
            Scholo bridges administrative complexity with intuitive tools tailored specifically for school directors, educators, and families.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div className={`pillar-card pillar-${pillar.gradient}`} key={idx}>
              <div className="pillar-header-row">
                <div className="pillar-icon">
                  {pillar.icon}
                </div>
                <span className="pillar-badge-pill">{pillar.badge}</span>
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>

              <div className="pillar-footer">
                <span className="pillar-metric-tag">
                  <span className="metric-dot"></span>
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
