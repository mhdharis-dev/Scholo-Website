export default function CoreFeatures() {
  const features = [
    {
      id: 'students',
      title: 'Students Management',
      tag: 'DIRECTORY & PROFILES',
      description: 'Centralized directory for all student admissions, classroom rosters, contact records, and parent profiles.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bullet: 'Complete student database in one place',
      color: '#2563EB',
    },
    {
      id: 'attendance',
      title: '1-Tap Daily Attendance',
      tag: 'FAST PERIOD LOGGING',
      description: 'Teachers mark period-wise attendance in seconds. Parents receive instant real-time alerts for absences.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <polyline points="9 16 11 18 15 14" />
        </svg>
      ),
      bullet: 'Real-time push alerts to parents',
      color: '#10B981',
    },
    {
      id: 'marks',
      title: 'Exam Marks & Grades',
      tag: 'INSTANT PROGRESS CARDS',
      description: 'Record test and semester exam scores effortlessly. Generate digital progress cards and grade summaries.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      bullet: 'Subject-wise performance tracking',
      color: '#7C3AED',
    },
    {
      id: 'timetable',
      title: 'Timetables & Schedules',
      tag: 'CLASSROOM SCHEDULES',
      description: 'View daily period timetables, subject allocations, assigned rooms, and official institution notices.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      bullet: 'Structured daily class schedules',
      color: '#F59E0B',
    },
  ];

  return (
    <section className="core-features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">CORE CAPABILITIES</div>
          <h2 className="section-title">Everything Your School Needs, Nothing It Doesn't</h2>
          <p className="section-subtitle">
            Focused, fast, and intuitive tools engineered specifically for school administrations, teachers, and families.
          </p>
        </div>

        <div className="core-features-grid">
          {features.map((feat) => (
            <div className="core-feature-card" key={feat.id} style={{ '--accent-color': feat.color }}>
              <div className="core-feature-icon" style={{ background: `${feat.color}15`, color: feat.color }}>
                {feat.icon}
              </div>
              <span className="core-feature-tag">{feat.tag}</span>
              <h3 className="core-feature-title">{feat.title}</h3>
              <p className="core-feature-desc">{feat.description}</p>
              <div className="core-feature-badge">
                <span className="bullet-dot" style={{ background: feat.color }}></span>
                <span>{feat.bullet}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
