import { useState, useEffect } from 'react';

const ONBOARDING_SCREENS = [
  {
    id: 1,
    title: 'Manage Attendance Effortlessly',
    subtitle: 'Mark and track student attendance quickly and easily.',
    tag: 'ATTENDANCE',
    icon: '📅',
    color: '#2563EB',
    image: '/assets/onboarding/screen1_attendance.png',
  },
  {
    id: 2,
    title: 'Keep Everything Organized',
    subtitle: 'Manage students, marks, timetables and school information in one place.',
    tag: 'ALL-IN-ONE',
    icon: '📂',
    color: '#F59E0B',
    image: '/assets/onboarding/screen2_organized.png',
  },
  {
    id: 3,
    title: 'Connect School and Parents',
    subtitle: 'Keep parents informed with attendance, marks and timetable updates.',
    tag: 'COMMUNICATION',
    icon: '👨‍👩‍👧',
    color: '#10B981',
    image: '/assets/onboarding/screen3_connect.png',
  },
  {
    id: 4,
    title: 'A Smarter School, A Brighter Future',
    subtitle: 'Everything your school needs to operate seamlessly in the cloud.',
    tag: 'WELCOME',
    icon: '🏫',
    color: '#6366F1',
    image: '/assets/onboarding/screen4_welcome.png',
  },
];

export default function AppScreensTour() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ONBOARDING_SCREENS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ONBOARDING_SCREENS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ONBOARDING_SCREENS.length) % ONBOARDING_SCREENS.length);
  };

  const currentScreen = ONBOARDING_SCREENS[activeIndex];

  return (
    <section className="screens-tour-section" id="screens">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">INTERACTIVE APP PREVIEW</div>
          <h2 className="section-title">Explore the Scholo Mobile Experience</h2>
          <p className="section-subtitle">
            See how Scholo simplifies school administration step by step. Tap the screens or features below to test the interface.
          </p>
        </div>

        <div className="screens-tour-layout">
          {/* Interactive Screen Navigation Cards (Left) */}
          <div className="tour-nav-cards">
            {ONBOARDING_SCREENS.map((screen, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={screen.id}
                  className={`tour-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    '--card-accent': screen.color,
                  }}
                >
                  <div className="tour-card-icon" style={{ background: `${screen.color}15`, color: screen.color }}>
                    {screen.icon}
                  </div>
                  <div className="tour-card-content">
                    <span className="tour-card-tag" style={{ color: screen.color }}>
                      {screen.tag} • SCREEN {idx + 1}
                    </span>
                    <h3 className="tour-card-title">{screen.title}</h3>
                    <p className="tour-card-sub">{screen.subtitle}</p>
                  </div>
                  <div className="tour-card-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Realistic Interactive Phone Stage (Right) */}
          <div className="tour-phone-stage">
            <div className="tour-phone-glow" style={{ background: `${currentScreen.color}25` }}></div>

            <div className="tour-phone-wrapper">
              {/* Phone Device Bezel */}
              <div className="tour-phone-device" onClick={handleNext} title="Click to view next screen">
                <div className="phone-notch-bar"></div>

                <div className="tour-phone-screen">
                  <img
                    key={currentScreen.id}
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="tour-screen-img fade-in"
                  />
                </div>

                <div className="tour-phone-overlay-hint">
                  <span>Tap to view next &rarr;</span>
                </div>
              </div>

              {/* Navigation Controls under phone */}
              <div className="tour-controls-bar">
                <button className="tour-arrow-btn" onClick={handlePrev} aria-label="Previous screen">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <div className="tour-dots-row">
                  {ONBOARDING_SCREENS.map((_, i) => (
                    <button
                      key={i}
                      className={`tour-dot ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to screen ${i + 1}`}
                    />
                  ))}
                </div>

                <button className="tour-arrow-btn" onClick={handleNext} aria-label="Next screen">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
