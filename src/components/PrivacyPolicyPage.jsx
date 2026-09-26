import { useEffect } from 'react';

export default function PrivacyPolicyPage({ onNavigate, onOpenDemo }) {
  useEffect(() => {
    document.title = 'Privacy Policy | Scholo — Student Management Platform';
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      const offsetTop = elem.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-page">
      {/* Privacy Hero Header */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <div className="privacy-breadcrumb">
              <button 
                onClick={() => onNavigate('/')} 
                className="breadcrumb-link"
              >
                &larr; Back to Home
              </button>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Privacy Policy</span>
            </div>
            <h1 className="privacy-hero-title">Privacy Policy & Educational Data Protection</h1>
            <p className="privacy-hero-subtitle">
              Comprehensive operational guidelines on how Scholo collects, processes, secures, and handles student, parent, teacher, and school data across our 3-tier ecosystem.
            </p>

            <div className="privacy-meta-pills">
              <span className="meta-pill"><i className="pill-icon">🛡️</i> Children & Minor Data Protected</span>
              <span className="meta-pill"><i className="pill-icon">🔐</i> 256-Bit TLS & AES Encryption</span>
              <span className="meta-pill"><i className="pill-icon">🚫</i> Zero Data Sales & No Ads</span>
              <span className="meta-pill"><i className="pill-icon">⚡</i> Firebase & Cloudinary Powered</span>
              <span className="meta-pill"><i className="pill-icon">📅</i> Effective Date: September 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar & Sections */}
      <section className="privacy-body-section">
        <div className="container">
          <div className="privacy-layout">
            
            {/* Table of Contents Sidebar */}
            <aside className="privacy-sidebar">
              <div className="sidebar-sticky-card">
                <h3 className="sidebar-title">Table of Contents</h3>
                <nav className="sidebar-nav">
                  <a href="#student-info" onClick={(e) => handleNavClick(e, 'student-info')} className="sidebar-link">
                    1. Student Information
                  </a>
                  <a href="#parent-info" onClick={(e) => handleNavClick(e, 'parent-info')} className="sidebar-link">
                    2. Parent Information
                  </a>
                  <a href="#teacher-info" onClick={(e) => handleNavClick(e, 'teacher-info')} className="sidebar-link">
                    3. Teacher Information
                  </a>
                  <a href="#account-login" onClick={(e) => handleNavClick(e, 'account-login')} className="sidebar-link">
                    4. Account & Login Data
                  </a>
                  <a href="#attendance" onClick={(e) => handleNavClick(e, 'attendance')} className="sidebar-link">
                    5. Attendance Tracking
                  </a>
                  <a href="#marks" onClick={(e) => handleNavClick(e, 'marks')} className="sidebar-link">
                    6. Marks & Exam Grades
                  </a>
                  <a href="#timetables" onClick={(e) => handleNavClick(e, 'timetables')} className="sidebar-link">
                    7. Timetables & Schedules
                  </a>
                  <a href="#school-info" onClick={(e) => handleNavClick(e, 'school-info')} className="sidebar-link">
                    8. School Information
                  </a>
                  <a href="#data-storage" onClick={(e) => handleNavClick(e, 'data-storage')} className="sidebar-link">
                    9. Data Storage Architecture
                  </a>
                  <a href="#firebase-services" onClick={(e) => handleNavClick(e, 'firebase-services')} className="sidebar-link">
                    10. Firebase & Cloud Services
                  </a>
                  <a href="#cloudinary" onClick={(e) => handleNavClick(e, 'cloudinary')} className="sidebar-link">
                    11. Cloudinary File Hosting
                  </a>
                  <a href="#data-sharing" onClick={(e) => handleNavClick(e, 'data-sharing')} className="sidebar-link">
                    12. Data Sharing & Non-Sale
                  </a>
                  <a href="#data-deletion" onClick={(e) => handleNavClick(e, 'data-deletion')} className="sidebar-link">
                    13. Data Deletion & Retention
                  </a>
                  <a href="#children-data" onClick={(e) => handleNavClick(e, 'children-data')} className="sidebar-link">
                    14. Children & Minor Privacy
                  </a>
                  <a href="#contact-info" onClick={(e) => handleNavClick(e, 'contact-info')} className="sidebar-link">
                    15. Contact & Privacy Officer
                  </a>
                </nav>

                <div className="sidebar-help-box">
                  <h4>Need Assistance?</h4>
                  <p>Have questions about your school's data privacy or GDPR/FERPA compliance?</p>
                  <button onClick={onOpenDemo} className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '10px' }}>
                    Contact Privacy Team
                  </button>
                </div>
              </div>
            </aside>

            {/* Privacy Details Content */}
            <main className="privacy-content">
              
              {/* Introduction Card */}
              <div className="privacy-card highlight-card">
                <h2>Our Privacy Commitment</h2>
                <p>
                  At <strong>Scholo</strong>, we recognize that educational institutions handle highly sensitive data concerning minors, educators, and families. This Privacy Policy details our data practices across the Scholo B2B Admin Web Console, Teacher Mobile App, and Parent Mobile App.
                </p>
                <p>
                  We operate strictly under a <strong>no-advertising</strong> and <strong>no-data-monetization</strong> model. All educational records stored within Scholo remain the exclusive property of the subscribing school institution.
                </p>
              </div>

              {/* 1. Student Information */}
              <div id="student-info" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 1</span>
                  <h3>Student Information</h3>
                </div>
                <p>
                  Scholo collects and processes student personal information strictly for legitimate educational and administrative purposes as directed by the subscribing school administration.
                </p>
                <div className="info-grid">
                  <div className="info-item">
                    <h4>Data Points Collected</h4>
                    <ul>
                      <li>Full Legal Name & Preferred Name</li>
                      <li>Unique Student ID / Roll Number</li>
                      <li>Grade Level, Class & Division/Section</li>
                      <li>Date of Birth & Gender</li>
                      <li>Student Avatar / Profile Photo</li>
                      <li>Enrolled Subjects & Academic Track</li>
                    </ul>
                  </div>
                  <div className="info-item">
                    <h4>Usage & Access Control</h4>
                    <ul>
                      <li>Used to generate class rosters and digital ID badges</li>
                      <li>Linked to attendance logs and academic report cards</li>
                      <li>Accessible only to verified school admins, assigned class teachers, and linked parents</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Parent Information */}
              <div id="parent-info" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 2</span>
                  <h3>Parent & Guardian Information</h3>
                </div>
                <p>
                  To facilitate seamless home-to-school communication and instant updates, Scholo stores parent and guardian contact records provided during admission or school registration.
                </p>
                <div className="info-grid">
                  <div className="info-item">
                    <h4>Data Points Collected</h4>
                    <ul>
                      <li>Parent / Legal Guardian Full Name</li>
                      <li>Verified Mobile Phone Number & Email Address</li>
                      <li>Relationship to Student (Father, Mother, Guardian)</li>
                      <li>Emergency Contact Details</li>
                      <li>Parent Mobile App Device Push Tokens</li>
                    </ul>
                  </div>
                  <div className="info-item">
                    <h4>Usage & Protection</h4>
                    <ul>
                      <li>Used for multi-factor SMS/OTP logins in Parent App</li>
                      <li>Receives instant push notifications for attendance & marks</li>
                      <li>Enables direct communication with class teachers</li>
                      <li>Protected against unauthorized external access</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Teacher Information */}
              <div id="teacher-info" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 3</span>
                  <h3>Teacher & Staff Information</h3>
                </div>
                <p>
                  Teacher profiles enable access control, subject assignment, timetable distribution, and attendance marking validation across our mobile and web applications.
                </p>
                <div className="info-grid">
                  <div className="info-item">
                    <h4>Data Points Collected</h4>
                    <ul>
                      <li>Teacher Full Name & Staff Employee ID</li>
                      <li>Institutional Email & Contact Phone Number</li>
                      <li>Subject Specializations & Class Teacher Allocations</li>
                      <li>Teacher Profile Photo</li>
                      <li>App Access Logs & Device Tokens</li>
                    </ul>
                  </div>
                  <div className="info-item">
                    <h4>Operational Scopes</h4>
                    <ul>
                      <li>Grants role-based authorization to mark daily attendance</li>
                      <li>Allows recording exam grades and subject evaluations</li>
                      <li>Displays assigned period schedules and substitution notices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Account & Login Information */}
              <div id="account-login" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 4</span>
                  <h3>Account & Login Information</h3>
                </div>
                <p>
                  Account credentials and authentication sessions are safeguarded using industry-standard identity protocols to prevent unauthorized portal access.
                </p>
                <ul className="styled-list">
                  <li><strong>Authentication Credentials:</strong> Passwords are never stored in plain text. All user authentication is handled via cryptographically hashed tokens managed by Google Firebase Authentication.</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Each user account is strictly bound to a designated role (Super Admin, School Admin, Teacher, or Parent) with localized access permissions.</li>
                  <li><strong>Security Audits & IP Logs:</strong> We log login timestamps, IP addresses, browser user-agents, and failed authentication attempts to monitor system integrity and block brute-force attempts.</li>
                </ul>
              </div>

              {/* 5. Attendance Tracking Data */}
              <div id="attendance" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 5</span>
                  <h3>Attendance Tracking Data</h3>
                </div>
                <p>
                  Real-time attendance recording is a core feature of the Scholo ecosystem, bridging the gap between school administration and parents.
                </p>
                <ul className="styled-list">
                  <li><strong>Attendance Logs:</strong> Daily attendance records include status (Present, Absent, Late, Half-Day, Excused), exact entry timestamps, and teacher verification signatures.</li>
                  <li><strong>Leave Applications:</strong> Reason for absence, parent-submitted medical certificates or notes, and administrator approval statuses.</li>
                  <li><strong>Automated Notifications:</strong> When a student is marked absent, real-time alerts are immediately dispatched via FCM push notifications and SMS to registered parent devices.</li>
                </ul>
              </div>

              {/* 6. Marks & Academic Records */}
              <div id="marks" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 6</span>
                  <h3>Marks, Grades & Performance Analytics</h3>
                </div>
                <p>
                  Academic evaluations, subject marks, and report card generations are stored securely to provide longitudinal growth insights to parents and educators.
                </p>
                <ul className="styled-list">
                  <li><strong>Evaluation Metrics:</strong> Internal assessment scores, midterm/final examination marks, practical grades, and assignment feedback comments.</li>
                  <li><strong>Report Card Generation:</strong> Automated calculations for total percentages, grade point averages (GPA), class ranks, and teacher remarks.</li>
                  <li><strong>Data Confidentiality:</strong> Student marks are visible only to the specific student's parents, relevant subject teachers, and school administrators. Grade statistics are aggregated anonymously for institutional performance analytics.</li>
                </ul>
              </div>

              {/* 7. Timetables & Schedules */}
              <div id="timetables" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 7</span>
                  <h3>Timetables & Class Schedules</h3>
                </div>
                <p>
                  Scholo manages institutional period allocations, bell timings, subject timetables, and teacher substitution rosters.
                </p>
                <ul className="styled-list">
                  <li><strong>Class Schedules:</strong> Weekly master timetables displaying period hours, subject names, classroom/lab locations, and assigned instructors.</li>
                  <li><strong>Exam Routines:</strong> Test schedules, hall ticket seating arrangements, and exam dates published to student/parent portals.</li>
                  <li><strong>Substitution Logs:</strong> Real-time teacher absence substitution updates transmitted to staff mobile apps.</li>
                </ul>
              </div>

              {/* 8. School Information */}
              <div id="school-info" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 8</span>
                  <h3>School & Institutional Information</h3>
                </div>
                <p>
                  We store institutional metadata required to personalize and configure each school's isolated digital workspace code.
                </p>
                <ul className="styled-list">
                  <li><strong>Institutional Metadata:</strong> Official school name, institution code/ID, affiliation details, campus address, and official contact phone/email.</li>
                  <li><strong>Branding Assets:</strong> School crests, logos, principal signatures for report cards, and custom banner imagery.</li>
                  <li><strong>Administrative Preferences:</strong> Grading scales, attendance threshold rules, academic calendar dates, and custom fee/notice configurations.</li>
                </ul>
              </div>

              {/* 9. Data Storage Architecture */}
              <div id="data-storage" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 9</span>
                  <h3>Data Storage & Infrastructure Security</h3>
                </div>
                <p>
                  Scholo leverages enterprise-grade cloud infrastructure engineered to meet global data protection and uptime standards.
                </p>
                <div className="security-features-grid">
                  <div className="sec-feature">
                    <div className="sec-icon">🔒</div>
                    <h4>Encryption in Transit</h4>
                    <p>All data exchanged between client apps and backend servers is encrypted using modern TLS 1.3 / SSL standards.</p>
                  </div>
                  <div className="sec-feature">
                    <div className="sec-icon">🗄️</div>
                    <h4>Encryption at Rest</h4>
                    <p>Databases and file stores utilize AES-256 bit hardware-level encryption to secure stored files and data entries.</p>
                  </div>
                  <div className="sec-feature">
                    <div className="sec-icon">🌐</div>
                    <h4>Multi-Region Redundancy</h4>
                    <p>Data is stored in high-availability, multi-zone data centers with automatic failover and daily automated backups.</p>
                  </div>
                  <div className="sec-feature">
                    <div className="sec-icon">🛡️</div>
                    <h4>Isolated Tenant Data</h4>
                    <p>Each school's dataset is logically isolated with strict database-level security rules preventing cross-school data access.</p>
                  </div>
                </div>
              </div>

              {/* 10. Firebase & Cloud Services */}
              <div id="firebase-services" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 10</span>
                  <h3>Firebase & Google Cloud Services Used</h3>
                </div>
                <p>
                  Scholo utilizes Google Cloud Platform and Firebase enterprise services for backend orchestration, real-time database sync, and mobile notifications.
                </p>
                <div className="table-responsive">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Firebase Service</th>
                        <th>Functionality & Purpose</th>
                        <th>Data Handled</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Firebase Authentication</strong></td>
                        <td>Manages user identities, secure phone/email OTP logins, and JWT tokens.</td>
                        <td>Phone numbers, email addresses, password hashes, auth tokens.</td>
                      </tr>
                      <tr>
                        <td><strong>Cloud Firestore</strong></td>
                        <td>NoSQL real-time cloud database hosting school structures, attendance, & marks.</td>
                        <td>Student rosters, marks, timetables, attendance entries, school metadata.</td>
                      </tr>
                      <tr>
                        <td><strong>Firebase Cloud Messaging (FCM)</strong></td>
                        <td>Dispatches real-time push notifications to Parent and Teacher mobile devices.</td>
                        <td>Device tokens, alert payloads (attendance status, exam notifications).</td>
                      </tr>
                      <tr>
                        <td><strong>Firebase Security Rules</strong></td>
                        <td>Enforces database-level role authorization for Admin, Teacher, and Parent scopes.</td>
                        <td>Cryptographic rule evaluations for incoming API requests.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 11. Cloudinary File Hosting */}
              <div id="cloudinary" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 11</span>
                  <h3>Cloudinary for Uploaded Files & Media</h3>
                </div>
                <p>
                  For media optimization, document storage, and fast global image delivery, Scholo utilizes <strong>Cloudinary</strong> media cloud platform.
                </p>
                <ul className="styled-list">
                  <li><strong>Media Assets Stored:</strong> Student profile photos, teacher avatars, school logos, report card attachment PDFs, homework images, and circular documents.</li>
                  <li><strong>Security & Access Protection:</strong> Uploaded assets are processed via authenticated APIs. Private educational documents are assigned tokenized CDN URLs preventing public search engine indexing or arbitrary URL guessing.</li>
                  <li><strong>Optimization & CDN:</strong> Cloudinary delivers auto-compressed web images to ensure fast app performance even on low-bandwidth mobile networks.</li>
                </ul>
              </div>

              {/* 12. Data Sharing */}
              <div id="data-sharing" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 12</span>
                  <h3>Data Sharing & Non-Sale Guarantee</h3>
                </div>
                <p>
                  We maintain a strict and unambiguous data privacy posture regarding third-party data sharing.
                </p>
                <div className="guarantee-box">
                  <div className="guarantee-badge">Strict Guarantee</div>
                  <h4>Zero Selling, Renting, or Advertising Use</h4>
                  <p>
                    Scholo <strong>NEVER</strong> sells, rents, leases, or monetizes student, parent, teacher, or school data. We do not build advertising profiles, display targeted ads, or share data with data brokers or marketing networks.
                  </p>
                </div>
                <ul className="styled-list" style={{ marginTop: '16px' }}>
                  <li><strong>Authorized Internal Sharing:</strong> Information is visible strictly within your institution between verified Admins, assigned Teachers, and linked Parents based on role permissions.</li>
                  <li><strong>Third-Party Infrastructure Processors:</strong> Cloud service providers (Google Cloud / Firebase, Cloudinary) process data strictly on our behalf under contractual obligations complying with strict data privacy standard SLAs.</li>
                  <li><strong>Legal Compliance:</strong> We disclose data only if required by a court order or subpoena from a valid law enforcement agency, following immediate notice to the affected educational institution unless prohibited by law.</li>
                </ul>
              </div>

              {/* 13. Data Deletion */}
              <div id="data-deletion" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 13</span>
                  <h3>Data Deletion, Retention & Erasure Requests</h3>
                </div>
                <p>
                  Educational institutions retain full ownership and control over their data lifecycle, including soft deletion and permanent data purge rights.
                </p>
                <div className="deletion-steps-grid">
                  <div className="step-card">
                    <span className="step-number">01</span>
                    <h4>Soft Deletion (Recycle Bin)</h4>
                    <p>Accidentally deleted student records or marks remain in a protected Recycle Bin for 30 days before permanent erasure, allowing quick administrative restoration.</p>
                  </div>
                  <div className="step-card">
                    <span className="step-number">02</span>
                    <h4>User Erasure Requests</h4>
                    <p>Parents, teachers, or students wishing to request data deletion can submit a formal request through their school admin or directly to our Privacy Team at <code>app.scholo@gmail.com</code>.</p>
                  </div>
                  <div className="step-card">
                    <span className="step-number">03</span>
                    <h4>Contract Termination</h4>
                    <p>Upon subscription termination, all active school records are hard-purged from live databases within 30 days and permanently deleted from backup archives within 60 days.</p>
                  </div>
                </div>
              </div>

              {/* 14. Children's Data Privacy */}
              <div id="children-data" className="privacy-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 14</span>
                  <h3>Children's & Student Data Privacy Protections</h3>
                </div>
                <p>
                  Scholo is specifically engineered to protect minors and comply with global student privacy frameworks (including COPPA principles, FERPA standards, and GDPR child protections).
                </p>
                <ul className="styled-list">
                  <li><strong>School Authorization Model:</strong> Scholo contracts directly with educational institutions. Schools act as authorized agents to collect student information strictly for educational and administrative purposes.</li>
                  <li><strong>No Commercial Exploitation:</strong> Student data is never subjected to behavioral tracking, automated profiling, or targeted commercial promotions.</li>
                  <li><strong>Parental Inspection Rights:</strong> Parents have the right to inspect, review, and request corrections to their child's educational records through their linked school administration.</li>
                </ul>
              </div>

              {/* 15. Contact Information */}
              <div id="contact-info" className="privacy-card contact-card">
                <div className="card-header-badge">
                  <span className="badge-tag">Section 15</span>
                  <h3>Contact Information & Data Protection Officer</h3>
                </div>
                <p>
                  If you have questions, privacy inquiries, or wish to exercise data rights under applicable regulations, please reach out to our dedicated Data Privacy Team:
                </p>

                <div className="contact-details-grid">
                  <div className="contact-tile">
                    <div className="tile-icon">📧</div>
                    <div>
                      <div className="tile-label">Privacy Email</div>
                      <a href="mailto:app.scholo@gmail.com" className="tile-value">app.scholo@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-tile">
                    <div className="tile-icon">📞</div>
                    <div>
                      <div className="tile-label">Support & Privacy Hotline</div>
                      <a href="tel:+919544234298" className="tile-value">+91 95442 34298</a>
                    </div>
                  </div>

                  <div className="contact-tile">
                    <div className="tile-icon">💬</div>
                    <div>
                      <div className="tile-label">WhatsApp Privacy Helpdesk</div>
                      <a 
                        href="https://wa.me/919544234298?text=Hello%20Scholo%20Privacy%20Team%2C%20I%20have%20a%20privacy%20question." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="tile-value"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="contact-tile">
                    <div className="tile-icon">⏳</div>
                    <div>
                      <div className="tile-label">Response SLA</div>
                      <div className="tile-value">Within 24 &ndash; 48 Hours</div>
                    </div>
                  </div>
                </div>

                <div className="privacy-footer-cta">
                  <button onClick={() => onNavigate('/')} className="btn btn-secondary">
                    &larr; Return to Main Website
                  </button>
                  <button onClick={onOpenDemo} className="btn btn-primary">
                    Request School Demo &rarr;
                  </button>
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
