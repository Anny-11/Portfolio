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
  ['Background', 'Software Systems, M.Sc. Integrated'],
  ['Exploring', 'Product Management, Product Design, UX'],
  ['Approach', 'Curious, analytical, and open to learning'],
  ['Strengths', 'Problem Solving, Leadership, Communication'],
  ['Current Role', 'Product Intelligence Intern'],
  ['Based In', 'Coimbatore, India'],
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
            People observer.<br />
            Problem finder.<br />
            <em style={{ color: '#D4A96A' }}>Always figuring things out.</em>
          </h2>

          <div style={{ marginTop: '3rem' }}>
            <p style={styles.para}>
              I'm a Software Systems student who gradually realized that I enjoy understanding people and problems more than just writing code.
            </p>
            <p style={{ ...styles.para, marginTop: '1.25rem' }}>
              Over time, I found myself becoming curious about why people use certain products, what influences their decisions, and how technology can solve real-world challenges. That curiosity led me to explore areas like product management, design, and user experience.
            </p>
            <p style={{ ...styles.para, marginTop: '1.25rem' }}>
              Through projects, leadership roles, and my current internship, I've been learning how ideas take shape, how teams work together, and how products are built around user needs. I'm still exploring where I fit best, but I enjoy asking questions, understanding different perspectives, and finding better ways to solve problems.
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
