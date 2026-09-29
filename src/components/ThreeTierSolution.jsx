import { useState } from 'react';

export default function ThreeTierSolution({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

  const scrollToDownload = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#download');
    if (elem) {
      const offsetTop = elem.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">PLATFORM ECOSYSTEM</div>
          <h2 className="section-title">Integrated 3-Tier Architecture</h2>
          <p className="section-subtitle">
            Purpose-built interfaces designed specifically for administrators, teachers, and parents to streamline operations and communication.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="tier-tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Tiers
          </button>
          <button
            className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            💻 Admin Web Console
          </button>
          <button
            className={`tab-btn ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => setActiveTab('teacher')}
          >
            📱 Teacher Mobile App
          </button>
          <button
            className={`tab-btn ${activeTab === 'parent' ? 'active' : ''}`}
            onClick={() => setActiveTab('parent')}
          >
            👨‍👩‍👧 Parent Mobile App
          </button>
        </div>

        {/* Tier 1: Admin Web Console */}
        {(activeTab === 'all' || activeTab === 'admin') && (
          <div className="feature-block">
            <div className="feature-content">
              <div className="tier-header-badge">
                <span className="tier-num">TIER 01</span>
                <span className="tier-device">Desktop / Web Browser</span>
              </div>
              <h3 className="feature-title">Admin Web Console</h3>
              <p className="feature-description">
                The centralized command center for principals and school directors. Enjoy full data governance, granular access controls, and real-time oversight over all classrooms.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Student & Faculty Records:</strong> Instant registration, profile updates, and safe archive/recovery with Recycle Bin.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Schedules & Timetable Matrix:</strong> Configure periods, subject allocations, and teacher room assignments.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Fee & Financial Tracking:</strong> Track term fee collections, outstanding dues, and export financial summaries.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>System Audits & Security:</strong> Live access logs, role-based authorization, and automated backups.</div>
                </div>
              </div>
              <div className="tier-action-row">
                <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
                  Schedule Admin Console Demo &rarr;
                </button>
              </div>
            </div>

            <div className="feature-media">
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot red"></div>
                    <div className="browser-dot yellow"></div>
                    <div className="browser-dot green"></div>
                  </div>
                  <div className="browser-address">https://scholo.scholomates.com/admin/dashboard</div>
                </div>
                <div className="browser-body">
                  <img
                    src="/assets/screens/admin_dashboard.png"
                    alt="Scholo Admin Web Console Tier Interface"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tier 2: Teacher Mobile App */}
        {(activeTab === 'all' || activeTab === 'teacher') && (
          <div className="feature-block reverse">
            <div className="feature-media">
              <div className="dual-phone-container">
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/assets/screens/teacher_Home Page - Short.png"
                      alt="Teacher App Home Interface"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/assets/screens/teacher_Records Page.png"
                      alt="Teacher Records Page Interface"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-content">
              <div className="tier-header-badge">
                <span className="tier-num">TIER 02</span>
                <span className="tier-device">Mobile App (Android / iOS)</span>
              </div>
              <h3 className="feature-title">Teacher Mobile App</h3>
              <p className="feature-description">
                Fast, friction-free mobile tool designed for educators. Mark period attendance in seconds and input exam scores without waiting for staff room PCs.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>1-Tap Daily Attendance:</strong> Mark present/absent with instant push triggers to parents.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Mobile Marks Ledger:</strong> Enter unit tests, term exams, and assignments directly.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Daily Timetable View:</strong> Always know your next assigned class, subject, and room number.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Class Announcements:</strong> Dispatch homework notes and reminders directly to families.</div>
                </div>
              </div>
              <div className="tier-action-row">
                <a href="#download" onClick={scrollToDownload} className="btn btn-primary">
                  <span>Download Teacher App</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.352-.61-.84-.61-1.396V3.21c0-.556.242-1.044.61-1.396zM15.207 13.414l2.457 2.457-12.247 7.072 9.79-9.529zm0-2.828L5.417 1.057l12.247 7.072-2.457 2.457zm1.414 1.414l3.155 1.821c.883.51.883 1.34 0 1.85l-3.155 1.821-2.121-2.121 2.121-2.121z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tier 3: Parent Mobile App */}
        {(activeTab === 'all' || activeTab === 'parent') && (
          <div className="feature-block">
            <div className="feature-content">
              <div className="tier-header-badge">
                <span className="tier-num">TIER 03</span>
                <span className="tier-device">Mobile App (Android / iOS)</span>
              </div>
              <h3 className="feature-title">Parent Mobile Portal</h3>
              <p className="feature-description">
                Total peace of mind for families. Parents stay proactively informed regarding their child’s safety, classroom attendance, academic milestones, and fee timelines.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Live Attendance Notifications:</strong> Instant push notification the minute attendance is recorded.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Digital Progress Cards:</strong> View exam percentages, subject marks, and rank summaries.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Official School Bulletins:</strong> Never miss a holiday circular, parent-teacher meet, or school event.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&#10003;</div>
                  <div><strong>Fee Reminders & Receipts:</strong> Track term fee due dates with automated payment confirmations.</div>
                </div>
              </div>
              <div className="tier-action-row">
                <a href="#download" onClick={scrollToDownload} className="btn btn-primary">
                  <span>Get Parent Portal App</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.352-.61-.84-.61-1.396V3.21c0-.556.242-1.044.61-1.396zM15.207 13.414l2.457 2.457-12.247 7.072 9.79-9.529zm0-2.828L5.417 1.057l12.247 7.072-2.457 2.457zm1.414 1.414l3.155 1.821c.883.51.883 1.34 0 1.85l-3.155 1.821-2.121-2.121 2.121-2.121z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="feature-media">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="phone-mockup" style={{ maxWidth: '240px' }}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/assets/screens/Parent Home Page - short.png"
                      alt="Parent App Home Interface"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
