import { useState } from 'react';
import { APP_LINKS } from '../config/appLinks';

export default function AppDownloadSection() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = [
    {
      title: 'Attendance',
      caption: 'Manage Attendance Effortlessly',
      image: '/assets/onboarding/screen1_attendance.png',
      icon: '📅',
    },
    {
      title: 'Organization',
      caption: 'Keep Everything Organized',
      image: '/assets/onboarding/screen2_organized.png',
      icon: '📂',
    },
    {
      title: 'Connect',
      caption: 'Connect School & Parents',
      image: '/assets/onboarding/screen3_connect.png',
      icon: '👨‍👩‍👧',
    },
    {
      title: 'Welcome',
      caption: 'A Smarter School, A Brighter Future',
      image: '/assets/onboarding/screen4_welcome.png',
      icon: '🏫',
    },
  ];

  const current = screens[activeScreenIndex];

  return (
    <section className="app-download-section" id="download">
      <div className="container">
        <div className="download-promo-card">
          <div className="download-glow-circle circle-1"></div>
          <div className="download-glow-circle circle-2"></div>

          <div className="download-grid">
            {/* Left Content Column */}
            <div className="download-content">
              <div className="promo-pill">
                <span className="pill-dot"></span>
                <span>OFFICIAL MOBILE APPLICATION</span>
              </div>

              <h2 className="download-title">
                Get Scholo On <span>Google Play</span>
              </h2>

              <p className="download-desc">
                Everything school administrators, educators, and parents need in their pocket. Real-time student attendance, exam marks, timetables, and instant school notices.
              </p>

              {/* Minimal 4-Points Checklist */}
              <div className="download-features-grid">
                <div className="download-feature-chip">
                  <div className="chip-icon">👥</div>
                  <div>
                    <strong>Students Directory</strong>
                    <span>Class rosters & parent info</span>
                  </div>
                </div>

                <div className="download-feature-chip">
                  <div className="chip-icon">📅</div>
                  <div>
                    <strong>1-Tap Attendance</strong>
                    <span>Fast period attendance logging</span>
                  </div>
                </div>

                <div className="download-feature-chip">
                  <div className="chip-icon">📝</div>
                  <div>
                    <strong>Marks & Grades</strong>
                    <span>Exam scores & digital report cards</span>
                  </div>
                </div>

                <div className="download-feature-chip">
                  <div className="chip-icon">⏰</div>
                  <div>
                    <strong>Smart Timetable</strong>
                    <span>Daily period schedules & rooms</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Download Buttons Box */}
              <div className="download-buttons-box">
                <div className="download-buttons-header">
                  <span className="box-badge">OFFICIAL DOWNLOAD LINK</span>
                  <span className="box-sub">Android 8.0+ Compatible</span>
                </div>

                <div className="download-buttons-row">
                  {/* Google Play Store Button */}
                  <a
                    href={APP_LINKS.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-btn google-play-btn"
                    id="play-store-download-btn"
                  >
                    <div className="store-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.352-.61-.84-.61-1.396V3.21c0-.556.242-1.044.61-1.396zM15.207 13.414l2.457 2.457-12.247 7.072 9.79-9.529zm0-2.828L5.417 1.057l12.247 7.072-2.457 2.457zm1.414 1.414l3.155 1.821c.883.51.883 1.34 0 1.85l-3.155 1.821-2.121-2.121 2.121-2.121z"/>
                      </svg>
                    </div>
                    <div className="store-text">
                      <span className="store-sub">GET IT ON</span>
                      <span className="store-name">Google Play</span>
                    </div>
                    <div className="btn-shine"></div>
                  </a>

                  {/* WhatsApp Quick Request */}
                  <a
                    href={`https://wa.me/${APP_LINKS.supportWhatsApp}?text=Hello%20Scholo%20Team%2C%20please%20send%20me%20the%20App%20Download%20Link.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-btn app-store-btn"
                  >
                    <div className="store-icon" style={{ color: '#25D366' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.974.55 1.761.812 2.796.812 3.179 0 5.767-2.587 5.767-5.766.002-3.18-2.585-5.767-5.767-5.767zm7.534 5.766c-.002 4.148-3.376 7.521-7.525 7.521-1.309 0-2.591-.341-3.719-.99l-4.142 1.086 1.106-4.037c-.718-1.187-1.097-2.55-1.096-3.95.002-4.148 3.376-7.522 7.526-7.522 4.149.001 7.524 3.375 7.525 7.522"/>
                      </svg>
                    </div>
                    <div className="store-text">
                      <span className="store-sub">NEED HELP?</span>
                      <span className="store-name">WhatsApp Us</span>
                    </div>
                  </a>
                </div>

                <div className="download-footer-info">
                  <div className="compatibility-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Google Play Testing Version
                  </div>
                  <div className="compatibility-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Real-Time Cloud Synchronization
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Interactive Phone Screen Viewer */}
            <div className="download-visual">
              {/* Screen Selector Pills */}
              <div className="phone-role-switcher">
                {screens.map((s, idx) => (
                  <button
                    key={idx}
                    className={`role-tab-btn ${activeScreenIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveScreenIndex(idx)}
                  >
                    <span className="role-icon">{s.icon}</span>
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Phone Mockup Frame with Real Onboarding Screen */}
              <div className="phone-showcase-stage">
                <div className="phone-glow-backing"></div>

                <div
                  className="phone-mockup-frame"
                  onClick={() => setActiveScreenIndex((prev) => (prev + 1) % screens.length)}
                  style={{ cursor: 'pointer' }}
                  title="Click to switch screen"
                >
                  <div className="phone-speaker-bar"></div>
                  
                  <div className="phone-inner-screen">
                    <div className="screen-image-wrapper fade-in" key={current.image}>
                      <img
                        src={current.image}
                        alt={current.caption}
                        loading="lazy"
                      />
                      <div className="screen-caption">{current.caption}</div>
                    </div>
                  </div>
                </div>

                {/* QR Code Quick Scan Card */}
                <div className="qr-scan-card">
                  <div className="qr-code-box">
                    <svg viewBox="0 0 100 100" width="60" height="60" className="qr-svg">
                      <rect width="100" height="100" fill="#ffffff" rx="6" />
                      <rect x="10" y="10" width="26" height="26" rx="3" fill="#0B1736" />
                      <rect x="15" y="15" width="16" height="16" rx="2" fill="#ffffff" />
                      <rect x="19" y="19" width="8" height="8" rx="1" fill="#2563EB" />
                      <rect x="64" y="10" width="26" height="26" rx="3" fill="#0B1736" />
                      <rect x="69" y="15" width="16" height="16" rx="2" fill="#ffffff" />
                      <rect x="73" y="19" width="8" height="8" rx="1" fill="#2563EB" />
                      <rect x="10" y="64" width="26" height="26" rx="3" fill="#0B1736" />
                      <rect x="15" y="69" width="16" height="16" rx="2" fill="#ffffff" />
                      <rect x="19" y="73" width="8" height="8" rx="1" fill="#2563EB" />
                      <rect x="42" y="14" width="6" height="6" fill="#2563EB" />
                      <rect x="52" y="20" width="6" height="6" fill="#0B1736" />
                      <rect x="42" y="30" width="6" height="6" fill="#0B1736" />
                      <rect x="50" y="40" width="6" height="6" fill="#2563EB" />
                      <rect x="14" y="44" width="6" height="6" fill="#0B1736" />
                      <rect x="24" y="52" width="6" height="6" fill="#2563EB" />
                      <rect x="38" y="48" width="6" height="6" fill="#0B1736" />
                      <rect x="48" y="56" width="6" height="6" fill="#2563EB" />
                      <rect x="62" y="44" width="6" height="6" fill="#0B1736" />
                      <rect x="72" y="52" width="6" height="6" fill="#2563EB" />
                      <rect x="82" y="44" width="6" height="6" fill="#0B1736" />
                      <rect x="42" y="68" width="6" height="6" fill="#2563EB" />
                      <rect x="52" y="76" width="6" height="6" fill="#0B1736" />
                      <rect x="64" y="68" width="6" height="6" fill="#0B1736" />
                      <rect x="76" y="74" width="6" height="6" fill="#2563EB" />
                      <rect x="84" y="82" width="6" height="6" fill="#0B1736" />
                    </svg>
                  </div>
                  <div className="qr-info">
                    <span className="qr-badge">Instant Scan</span>
                    <p className="qr-title">Scan to Install</p>
                    <span className="qr-sub">Open camera on mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
