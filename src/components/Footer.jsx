export default function Footer({ onOpenLegal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="brand-logo" style={{ color: 'var(--white)' }} aria-label="Scholo Home">
              <img src="/assets/logo/Scholo_LogoTransperent.png" alt="Scholo Logo Mark" />
              <span className="brand-text" style={{ color: 'var(--white)' }}>Scholo</span>
            </a>
            <p>
              The next-generation student management platform empowering school administrators, teachers, and parents with real-time digital synchronization.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Platform Tiers</h4>
            <div className="footer-links">
              <a href="#solutions">Admin Web Console</a>
              <a href="#solutions">Teacher Mobile App</a>
              <a href="#solutions">Parent Mobile App</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Product</h4>
            <div className="footer-links">
              <a href="#overview">Overview</a>
              <a href="#solutions">3-Tier Ecosystem</a>
              <a href="#roadmap">Innovation Roadmap</a>
              <a href="#about">About & Developer</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Request Demo</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Contact & Support</h4>
            <div className="footer-links">
              <a href="mailto:app.scholo@gmail.com">app.scholo@gmail.com</a>
              <a href="tel:+919544234298">+91 95442 34298</a>
              <a
                href="https://wa.me/919544234298?text=Hello%20Scholo%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20School%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#25D366', fontWeight: 600 }}
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://www.instagram.com/app.scholo?igsh=MWRvbzB3b2FoYXA2bA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E1306C', fontWeight: 600 }}
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Scholo. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => onOpenLegal('privacy')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('security')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
            >
              Security Standards
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
