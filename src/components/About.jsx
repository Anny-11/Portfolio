// src/components/About.jsx
// ── IMAGE SLOT ──────────────────────────────────────────────
// To add your photo:
//   1. Drop your image in src/assets/images/avatar.jpg
//   2. Uncomment the import line below
//   3. Pass it to <ImageSlot src={avatarImg} />
// ────────────────────────────────────────────────────────────

import useInView from '../hooks/useInView'
import Label from './ui/Label'
import CornerCard from './ui/CornerCard'

const INFO_ROWS = [
  ['Background', 'Software Systems, Integrated M.Sc. '],
  ['Interested in', 'Product Design, Data Analysis'],
  ['Approach', 'Curiosity-driven, not credential-driven'],
  ['Strengths', 'Analytical thinking, communication'],
  ['Currently', 'Open to internships & collaborations'],
  ['Based in', 'India'],
]

export default function About() {
  const [ref, visible] = useInView()

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(40px)',
    transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
  })

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div style={styles.grid} className="about-two-col">
        {/* ── Left column: heading + text ── */}
        <div style={fadeStyle(0)}>
          <Label>About</Label>

          <h2 style={styles.heading}>
            Systems thinker.<br />
            People observer.<br />
            <em style={{ color: '#D4A96A' }}>Problem finder.</em>
          </h2>

          <div style={{ marginTop: '3rem' }}>
            <p style={styles.para}>
              I'm a Software Systems student with a stronger pull toward understanding
              people than writing code. I'm drawn to the question of <em>why</em> things
              work or fail — in products, in systems, in teams. That curiosity has shaped
              how I think more than any textbook.
            </p>
            <p style={{ ...styles.para, marginTop: '1.25rem' }}>
              I've had some exposure to UI/UX and Figma, and I find product thinking
              genuinely interesting — the intersection of user psychology, business logic,
              and systems design. I'm not an expert in any one area yet, but I'm someone
              who asks the right questions, stays curious, and learns by doing.
            </p>
            <p style={{ ...styles.para, marginTop: '1.25rem' }}>
              Outside academics, I've led teams, organised events, and seen firsthand how
              clarity — or the lack of it — determines outcomes.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.resumeBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8C484'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#D4A96A'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* ── Right column: floating info card ── */}
        <div style={fadeStyle(0.2)}>
          <div className="floating-card-wrapper">
            <CornerCard style={{ marginTop: '0', background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(10px)' }}>
              {INFO_ROWS.map(([k, v], i) => (
                <div
                  key={k}
                  style={{
                    marginBottom: i < INFO_ROWS.length - 1 ? '1.5rem' : 0,
                    paddingBottom: i < INFO_ROWS.length - 1 ? '1.5rem' : 0,
                    borderBottom: i < INFO_ROWS.length - 1
                      ? '1px solid rgba(255,255,255,0.06)'
                      : 'none',
                  }}
                >
                  <div style={styles.infoKey}>{k}</div>
                  <div style={styles.infoVal}>{v}</div>
                </div>
              ))}
            </CornerCard>
          </div>
        </div>
      </div>

      {/* Responsive grid & animations */}
      <style>{`
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .floating-card-wrapper {
          animation: floatCard 6s ease-in-out infinite;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .about-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Styles ─────────────────────────────────────────────── */
const styles = {
  resumeBtn: {
    display: 'inline-block',
    padding: '0.85rem 2.25rem',
    background: '#D4A96A',
    color: '#0A0A0A',
    textDecoration: 'none',
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 600,
    borderRadius: '2px',
    transition: 'all 0.25s ease',
  },
  grid: {},
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    color: '#fff',
    margin: '1rem 0 2rem',
    lineHeight: 1.1,
  },
  para: {
    fontFamily: '"Lora", serif',
    fontSize: '1.05rem',
    lineHeight: 1.9,
    color: 'rgba(255,255,255,0.6)',
  },
  infoKey: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.62rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#D4A96A',
    marginBottom: '0.35rem',
  },
  infoVal: {
    fontFamily: '"Lora", serif',
    fontSize: '0.92rem',
    color: 'rgba(255,255,255,0.72)',
  },
}
