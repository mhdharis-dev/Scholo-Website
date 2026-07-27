export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <>
      {activeModal === 'privacy' && (
        <div className="modal-overlay active" aria-hidden="false">
          <div className="modal-content" role="dialog" aria-labelledby="privacyTitle">
            <button className="modal-close" aria-label="Close modal" onClick={onClose}>&times;</button>
            <h3 id="privacyTitle" style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--navy)' }}>
              Privacy Policy
            </h3>
            <div>
              <p style={{ marginBottom: '14px', color: 'var(--slate-text)' }}>
                Scholo Inc. takes educational data privacy seriously.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.6, color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                <li><strong>1. Data Collection:</strong> We collect school info, teacher registries, student rosters, phone configurations, and grades purely to provide management services.</li>
                <li><strong>2. Data Processing & Hosting:</strong> All database entries reside on secure Firebase Firestore instances. Media assets are uploaded directly to verified Cloudinary storage.</li>
                <li><strong>3. Data Sharing:</strong> Student and teacher records are never shared, sold, or distributed to third-party advertising companies. Your records belong exclusively to your school code.</li>
                <li><strong>4. Information Security:</strong> We enforce encryption algorithms to protect credentials and private records. Administrators can view, update, or soft-delete data anytime.</li>
                <li><strong>5. Compliance:</strong> Our platform is engineered to align with global privacy standards regarding educational records and student directories.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'terms' && (
        <div className="modal-overlay active" aria-hidden="false">
          <div className="modal-content" role="dialog" aria-labelledby="termsTitle">
            <button className="modal-close" aria-label="Close modal" onClick={onClose}>&times;</button>
            <h3 id="termsTitle" style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--navy)' }}>
              Terms of Service
            </h3>
            <div>
              <p style={{ marginBottom: '10px', color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                Welcome to Scholo School Management Platform.
              </p>
              <p style={{ marginBottom: '14px', color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                By accessing and using this software, you agree to comply with the following Terms and Conditions:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.6, color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                <li><strong>1. Permitted Use:</strong> This dashboard is provided solely to authorized educational institutions for administering student, teacher, and classroom data. Unauthorized access or reverse engineering is strictly prohibited.</li>
                <li><strong>2. Account Security:</strong> Administrators must safeguard login credentials. You are entirely responsible for all administrative actions taken under your account.</li>
                <li><strong>3. Data Integrity:</strong> You represent and warrant that all information supplied regarding students, admissions, and teachers is accurate and lawful.</li>
                <li><strong>4. Intellectual Property:</strong> The software structure, logo, code, and interfaces are the exclusive property of Scholo Inc.</li>
                <li><strong>5. Liability Limitations:</strong> Scholo Inc. is not liable for data deletions caused by user error. All administrative deletions must verify via Recycle Bin.</li>
                <li><strong>6. Service Updates:</strong> We reserve the right to deploy updates, modifications, or temporary suspensions for security patches and service improvements.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'security' && (
        <div className="modal-overlay active" aria-hidden="false">
          <div className="modal-content" role="dialog" aria-labelledby="securityTitle">
            <button className="modal-close" aria-label="Close modal" onClick={onClose}>&times;</button>
            <h3 id="securityTitle" style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--navy)' }}>
              Security Standards
            </h3>
            <div>
              <p style={{ marginBottom: '14px', color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                Scholo Inc. implements enterprise-grade infrastructure security for school management platforms.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.6, color: 'var(--slate-text)', fontSize: '0.9rem' }}>
                <li><strong>1. Google Cloud Firebase:</strong> End-to-end multi-region data replication with continuous real-time cloud backup.</li>
                <li><strong>2. Transport & Storage Encryption:</strong> SSL/TLS 256-bit encryption in transit and AES-256 encryption at rest.</li>
                <li><strong>3. Role-Based Access Control (RBAC):</strong> Strict cryptographic authorization separating Admin, Teacher, and Parent scopes.</li>
                <li><strong>4. Soft Deletion Recovery:</strong> System Recycle Bin prevents accidental data loss with multi-step administrative restore capability.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
