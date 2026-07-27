export default function SecurityStack() {
  return (
    <section className="security-section" id="security">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#60A5FA', borderColor: 'rgba(96,165,250,0.3)' }}>
            ENTERPRISE SECURITY & INFRASTRUCTURE
          </div>
          <h2 className="section-title">Built on Trusted Cloud Infrastructure</h2>
          <p className="section-subtitle">
            Scholo protects institutional data with industry-leading encryption protocols and real-time cloud synchronization.
          </p>
        </div>

        <div className="security-grid">
          <div className="security-card">
            <div className="sec-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="sec-title">Google Cloud Firebase</h3>
            <p className="sec-desc">
              Multi-region Cloud Firestore database with real-time data synchronization and automatic daily backups.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="sec-title">256-Bit SSL Encryption</h3>
            <p className="sec-desc">
              All data transmitted between web dashboards, mobile apps, and servers is encrypted with TLS 1.3 standards.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="sec-title">Flutter & Riverpod Stack</h3>
            <p className="sec-desc">
              High-performance reactive state management engineered in Dart and Flutter for seamless web and mobile performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
