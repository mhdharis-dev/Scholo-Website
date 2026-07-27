import { useState } from 'react';

export default function ThreeTierSolution({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

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
            📱 Teacher App
          </button>
          <button
            className={`tab-btn ${activeTab === 'parent' ? 'active' : ''}`}
            onClick={() => setActiveTab('parent')}
          >
            👨‍👩‍👧 Parent App
          </button>
        </div>

        {/* Tier 1: Admin Web Console */}
        {(activeTab === 'all' || activeTab === 'admin') && (
          <div className="feature-block">
            <div className="feature-content">
              <span className="feature-tag">Console Tier 01</span>
              <h3 className="feature-title">Admin Web Console</h3>
              <p className="feature-description">
                Complete command center for principals and school directors with full data control.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Record Management:</strong> Add, edit, delete, and restore student/teacher profiles via Recycle Bin.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Schedules & Timetables:</strong> Configure classrooms, subjects, and master schedules.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Fee & Event Oversight:</strong> Monitor fee statuses, school events, and notifications.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>System Monitoring:</strong> Live activity logs and role-based permissions.</div>
                </div>
              </div>
              <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
                Schedule Admin Demo
              </button>
            </div>

            <div className="feature-media">
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot red"></div>
                    <div className="browser-dot yellow"></div>
                    <div className="browser-dot green"></div>
                  </div>
                  <div className="browser-address">https://admin.scholo.app/students</div>
                </div>
                <div className="browser-body">
                  <img
                    src="/assets/screens/admin_dashboard.png"
                    alt="Scholo Admin Web Console Tier Interface"
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
                    />
                  </div>
                </div>
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/assets/screens/teacher_Records Page.png"
                      alt="Teacher Records Page Interface"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-content">
              <span className="feature-tag">Mobile Tier 02</span>
              <h3 className="feature-title">Teacher Mobile App</h3>
              <p className="feature-description">
                Fast mobile workflow enabling teachers to manage daily classroom activities on the go.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Instant Attendance:</strong> Mark period attendance with one-tap status toggles.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Grade Logbook:</strong> Enter exam and assignment scores directly into student records.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Class Timetable:</strong> View daily subject schedules and assigned rooms.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Parent Broadcasts:</strong> Send homework reminders and student updates.</div>
                </div>
              </div>
              <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
                Request Teacher App Demo
              </button>
            </div>
          </div>
        )}

        {/* Tier 3: Parent Mobile App */}
        {(activeTab === 'all' || activeTab === 'parent') && (
          <div className="feature-block">
            <div className="feature-content">
              <span className="feature-tag">Mobile Tier 03</span>
              <h3 className="feature-title">Parent Mobile Portal</h3>
              <p className="feature-description">
                Complete transparency for parents to track their child’s academic progress and attendance.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Live Attendance Tracker:</strong> Instant push notifications for attendance and absences.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Digital Gradebook:</strong> View subject-wise performance metrics and exam report cards.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>School Circulars:</strong> Receive official announcements, holiday notices, and event schedules.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-icon">&check;</div>
                  <div><strong>Fee Deadlines:</strong> Transparent payment history and upcoming fee reminders.</div>
                </div>
              </div>
              <button className="btn btn-primary js-open-demo-modal" onClick={onOpenDemo}>
                Explore Parent Portal
              </button>
            </div>

            <div className="feature-media">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="phone-mockup" style={{ maxWidth: '220px' }}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/assets/screens/Parent Home Page - short.png"
                      alt="Parent App Home Interface"
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
