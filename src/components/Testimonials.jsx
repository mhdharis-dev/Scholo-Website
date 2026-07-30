export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Scholo transformed our daily administration. Managing attendance and report cards used to take hours of manual paper entry. Now our teachers update everything from their phones in seconds.",
      author: "Dr. Rajesh Kumar",
      role: "Principal",
      school: "St. Xavier International School",
      rating: 5,
      avatarBg: "linear-gradient(135deg, #1d9bf0 0%, #1E40C2 100%)",
      initials: "RK",
    },
    {
      quote:
        "The 3-tier ecosystem is brilliant. Parents receive instant push notifications for absences, which eliminated dozens of daily phone inquiries at our front office.",
      author: "Anitha Ramesh",
      role: "Academic Coordinator",
      school: "Greenfield Academy",
      rating: 5,
      avatarBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      initials: "AR",
    },
    {
      quote:
        "Data security and real-time cloud sync were critical for us. Scholo's Firebase backend gives us total confidence that student records are safe and accessible anywhere.",
      author: "Fr. Thomas Varghese",
      role: "School Director",
      school: "Sacred Heart High School",
      rating: 5,
      avatarBg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
      initials: "TV",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">TRUSTED BY EDUCATIONAL LEADERS</div>
          <h2 className="section-title">What School Directors & Educators Say</h2>
          <p className="section-subtitle">
            Real experiences from institutions managing attendance, marks, and parent communication with Scholo.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>

              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.avatarBg }}>
                  {t.initials}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{t.author}</h4>
                  <p className="author-role">{t.role}, {t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
