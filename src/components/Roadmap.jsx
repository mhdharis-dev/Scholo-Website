export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Online In-App Fee Payment Gateway",
      desc: "Direct in-app fee settlement with UPI, cards, and netbanking, featuring automated instant digital receipts.",
      status: "Live Deployment",
      statusClass: "status-live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      title: "Multi-Channel Emergency SMS & WhatsApp Alerts",
      desc: "Instant priority broadcast channels for urgent institution alerts, unexpected weather holidays, and absentee notices.",
      status: "Rolling Out",
      statusClass: "status-rolling",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
    },
    {
      title: "Dynamic Grading Rubrics & GPA Engine",
      desc: "Custom grading scales (CBSE, ICSE, State Boards), automated ranking, and customizable PDF transcript printing.",
      status: "Active Development",
      statusClass: "status-dev",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "Real-Time School Bus GPS Fleet Tracking",
      desc: "Live route telemetry and geofenced arrival notifications for parents ensuring safe daily student transit.",
      status: "Q4 2026",
      statusClass: "status-future",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="roadmap-section" id="roadmap">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">INNOVATION ROADMAP</div>
          <h2 className="section-title">Continuously Evolving Platform Capabilities</h2>
          <p className="section-subtitle">
            Upcoming product milestones designed to empower educational leadership and elevate parent satisfaction.
          </p>
        </div>

        <div className="roadmap-grid">
          {roadmapItems.map((item, idx) => (
            <div className="roadmap-card" key={idx}>
              <div className="roadmap-card-header">
                <div className="roadmap-icon">{item.icon}</div>
                <span className={`roadmap-badge ${item.statusClass}`}>
                  <span className="status-dot"></span>
                  {item.status}
                </span>
              </div>
              <h3 className="roadmap-title">{item.title}</h3>
              <p className="roadmap-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
