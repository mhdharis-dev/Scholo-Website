import { useState } from 'react';

export default function RoiCalculator({ onOpenDemo }) {
  const [studentCount, setStudentCount] = useState(650);

  // Dynamic calculations based on student count
  // Average school saves ~12 minutes per student per month in attendance, marks, report card compilation
  const hoursSavedPerMonth = Math.round((studentCount * 0.22));
  // Average paper & printing + SMS cost savings: ~Rs 85 per student per year
  const paperCostSavedYearly = Math.round(studentCount * 85);
  // Parent front-desk phone inquiries reduced by 80%
  const callsSavedPerWeek = Math.round(studentCount * 0.45);

  return (
    <section className="roi-calculator-section" id="savings-calculator">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">INTERACTIVE IMPACT CALCULATOR</div>
          <h2 className="section-title">See How Much Time & Cost Scholo Saves Your School</h2>
          <p className="section-subtitle">
            Adjust your school’s student strength to calculate monthly admin hours recovered and paper expenses eliminated.
          </p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-interactive-side">
            <div className="calc-slider-box">
              <div className="slider-header">
                <label htmlFor="student-slider" className="slider-label">
                  Total Enrolled Students:
                </label>
                <div className="student-counter-display">
                  <span className="counter-number">{studentCount.toLocaleString()}</span>
                  <span className="counter-unit">Students</span>
                </div>
              </div>

              <input
                id="student-slider"
                type="range"
                min="100"
                max="3000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="custom-range-slider"
              />

              <div className="slider-ticks">
                <span>100</span>
                <span>500</span>
                <span>1,000</span>
                <span>2,000</span>
                <span>3,000+</span>
              </div>
            </div>

            <div className="calc-info-notes">
              <div className="info-note-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Automated period attendance replaces manual ledger roll-calls.</span>
              </div>
              <div className="info-note-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Digital report cards eradicate bulk semester paper printing.</span>
              </div>
              <div className="info-note-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2952E3" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Real-time parent notifications eliminate routine attendance calls.</span>
              </div>
            </div>
          </div>

          <div className="calculator-results-side">
            <div className="results-card">
              <div className="result-metric-item highlight-metric">
                <span className="metric-tag">Admin Staff Time Recovered</span>
                <div className="metric-value-row">
                  <span className="metric-number">~{hoursSavedPerMonth}</span>
                  <span className="metric-unit">Hours / Month</span>
                </div>
                <p className="metric-desc">Equates to over {(hoursSavedPerMonth / 8).toFixed(1)} full workdays given back to teaching every month.</p>
              </div>

              <div className="result-metrics-subgrid">
                <div className="sub-metric-card">
                  <span className="sub-metric-icon">📄</span>
                  <span className="sub-metric-label">Annual Paper & SMS Saved</span>
                  <strong className="sub-metric-value">₹{paperCostSavedYearly.toLocaleString()}</strong>
                </div>

                <div className="sub-metric-card">
                  <span className="sub-metric-icon">📞</span>
                  <span className="sub-metric-label">Front-Desk Calls Reduced</span>
                  <strong className="sub-metric-value">~{callsSavedPerWeek}/wk</strong>
                </div>
              </div>

              <div className="calculator-cta-box">
                <button className="btn btn-primary calc-cta-btn" onClick={onOpenDemo}>
                  Claim These Savings — Request Demo &rarr;
                </button>
                <span className="cta-micro-copy">No setup fees. Free trial for prospective schools.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
