export default function SuccessModal({ isOpen, onClose, refId }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" aria-hidden="false">
      <div className="modal-content" role="dialog" aria-labelledby="successTitle" style={{ textAlign: 'center', padding: '36px 28px', maxWidth: '440px' }}>
        <button className="modal-close" aria-label="Close modal" onClick={onClose}>
          &times;
        </button>

        <div style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, #DEF7EC 0%, #BCF0DA 100%)',
          color: '#0E9F6E',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: '0 8px 20px rgba(14, 159, 110, 0.2)'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 id="successTitle" style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '8px' }}>
          Request Submitted Successfully!
        </h3>

        <p style={{ fontSize: '0.925rem', color: 'var(--slate-text)', lineHeight: 1.6, marginBottom: '16px' }}>
          Thank you! Our school system specialist will reach out within <strong>24 hours</strong>.
        </p>

        <div style={{
          background: 'var(--bg-lavender)',
          border: '1px solid var(--border-light)',
          padding: '8px 16px',
          borderRadius: 'var(--border-radius-sm)',
          fontSize: '0.875rem',
          fontWeight: '700',
          color: 'var(--primary)',
          display: 'inline-block',
          marginBottom: '24px'
        }}>
          Ref: {refId}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={`https://wa.me/919544234298?text=Hello%20Scholo%20Team%2C%20I%20just%20submitted%20a%20demo%20request%20(${refId})%20and%20would%20like%20quick%20assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ background: '#25D366', color: '#FFFFFF', fontWeight: 600 }}
          >
            Chat on WhatsApp Now
          </a>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
