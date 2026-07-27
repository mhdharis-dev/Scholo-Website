import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    workEmail: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const generatedId = Math.floor(100000 + Math.random() * 900000);
    setRefId(`SCH-${generatedId}`);

    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeULr3vBVZZqaOrbV2WmyngAXy15k_LVC_vSsso3tUqpvwUsg/formResponse";
    
    const body = new URLSearchParams({
      'entry.2024017143': formData.fullName,
      'entry.698394504': formData.schoolName,
      'entry.2019077321': formData.workEmail,
      'entry.1428281385': formData.phone,
    });

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-info">
            <h2>Transform Your School Administration Today</h2>
            <p>
              Schedule a personalized walkthrough of Scholo. Discover how our 3-tier platform saves time, eliminates paper records, and connects your school community.
            </p>

            <div className="cta-features-list">
              <div className="cta-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Instant live demonstration setup
              </div>
              <div className="cta-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Tailored onboarding for your institution
              </div>
              <div className="cta-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Dedicated support team
              </div>
            </div>

            <div className="contact-channels">
              <a
                href="https://wa.me/919544234298?text=Hello%20Scholo%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20School%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn whatsapp"
              >
                <span>WhatsApp Instant Msg</span>
              </a>
              <a
                href="https://www.instagram.com/app.scholo?igsh=MWRvbzB3b2FoYXA2bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn instagram"
              >
                <span>Instagram Profile</span>
              </a>
              <a href="mailto:app.scholo@gmail.com" className="channel-btn email">
                <span>app.scholo@gmail.com</span>
              </a>
              <a href="tel:+919544234298" className="channel-btn phone">
                <span>9544234298</span>
              </a>
            </div>
          </div>

          <div className="cta-form-card">
            <h3>Request Live Demo</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="e.g. Dr. Rajesh Kumar"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="schoolName">School / Institution Name *</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  className="form-input"
                  placeholder="e.g. St. Xavier International School"
                  required
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="workEmail">Work Email *</label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  className="form-input"
                  placeholder="principal@school.edu"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Confirm Demo Request \u2192'}
              </button>

              {submitted && (
                <div className="form-success-msg" style={{ display: 'block' }}>
                  Thank you! Your demo request has been submitted. Our team will contact you within 24 hours. (Ref: {refId})
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
