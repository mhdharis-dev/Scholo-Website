import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to set up Scholo for our school?",
      answer:
        "Full setup takes less than 24 hours. Our onboarding specialist assists your team in importing student and teacher records, configuring classrooms, and setting up role-based access for immediate live use.",
    },
    {
      question: "What devices support the Teacher and Parent mobile apps?",
      answer:
        "The Teacher and Parent applications are cross-platform mobile apps built with Flutter, optimized for both Android smartphones and iPhones (iOS).",
    },
    {
      question: "How does the 3-tier architecture benefit our school?",
      answer:
        "Scholo provides dedicated interfaces tailored for each user group: an Admin Web Console for directors (full record & schedule control), a Teacher Mobile App (one-tap attendance & marks entry), and a Parent Mobile Portal (instant attendance push alerts, gradebooks, and circulars).",
    },
    {
      question: "Is student and school data secure on Scholo?",
      answer:
        "Absolutely. Scholo is powered by Google Cloud Firestore featuring AES-256 encryption at rest, TLS 1.3 in transit, automated backups, and granular Role-Based Access Control (RBAC).",
    },
    {
      question: "How can I schedule a live demonstration for my school board?",
      answer:
        "You can click any 'Request Demo' button on the site or contact us directly via WhatsApp (+91 95442 34298) or email (app.scholo@gmail.com). Our system specialist will walk your management team through a personalized live demo within 24 hours.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">Everything You Need to Know About Scholo</h2>
          <p className="section-subtitle">
            Have questions about onboarding, features, or security? Find fast answers below.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
