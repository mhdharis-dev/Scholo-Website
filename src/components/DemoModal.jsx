import { useState } from 'react';

export default function DemoModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    modalFullName: '',
    modalSchoolName: '',
    modalWorkEmail: '',
    modalPhone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const generatedId = Math.floor(100000 + Math.random() * 900000);
    const formattedRefId = `SCH-${generatedId}`;
    setRefId(formattedRefId);

    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeULr3vBVZZqaOrbV2WmyngAXy15k_LVC_vSsso3tUqpvwUsg/formResponse";
    
    const body = new URLSearchParams({
      'entry.2024017143': formData.modalFullName,
      'entry.698394504': formData.modalSchoolName,
      'entry.2019077321': formData.modalWorkEmail,
      'entry.1428281385': formData.modalPhone,
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
        onClose();
        if (onSuccess) onSuccess(formattedRefId);
      })
      .catch(() => {
        setSubmitting(false);
        setSubmitted(true);
        onClose();
        if (onSuccess) onSuccess(formattedRefId);
      });
  };

  return (
    <div className="modal-overlay active" aria-hidden="false">
      <div className="modal-content" role="dialog" aria-labelledby="modalTitle">
        <button className="modal-close" aria-label="Close modal" onClick={onClose}>
          &times;
        </button>

        <h3 id="modalTitle" style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
          Schedule a Live Scholo Demo
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-text)', marginBottom: '20px' }}>
          Fill out your details to get a personalized walkthrough of our 3-tier school platform.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="modalFullName">Full Name *</label>
            <input
              type="text"
              id="modalFullName"
              name="modalFullName"
              className="form-input"
              placeholder="e.g. Dr. Rajesh Kumar"
              required
              value={formData.modalFullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalSchoolName">School / Institution Name *</label>
            <input
              type="text"
              id="modalSchoolName"
              name="modalSchoolName"
              className="form-input"
              placeholder="e.g. St. Xavier International School"
              required
              value={formData.modalSchoolName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalWorkEmail">Work Email *</label>
            <input
              type="email"
              id="modalWorkEmail"
              name="modalWorkEmail"
              className="form-input"
              placeholder="principal@school.edu"
              required
              value={formData.modalWorkEmail}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalPhone">Phone Number *</label>
            <input
              type="tel"
              id="modalPhone"
              name="modalPhone"
              className="form-input"
              placeholder="+91 98765 43210"
              required
              value={formData.modalPhone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit-btn" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Demo Request \u2192'}
          </button>

          {submitted && (
            <div className="form-success-msg" style={{ display: 'block' }}>
              Thank you! Your demo request has been submitted. Our team will contact you within 24 hours. (Ref: {refId})
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
