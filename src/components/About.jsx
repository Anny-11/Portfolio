// src/components/About.jsx
// ── IMAGE SLOT ──────────────────────────────────────────────
// To add your photo:
//   1. Drop your image in src/assets/images/avatar.jpg
//   2. Uncomment the import line below
//   3. Pass it to <ImageSlot src={avatarImg} />
// ────────────────────────────────────────────────────────────

import avatarImg from '../assets/images/avatar.jpg'

import useInView from '../hooks/useInView'
import Label from './ui/Label'
import CornerCard from './ui/CornerCard'
import ImageSlot from './ui/ImageSlot'

const INFO_ROWS = [
  ['Background', 'Software Systems, B.Tech'],
  ['Interested in', 'Product Design, PM, Business / MBA'],
  ['Approach', 'Curiosity-driven, not credential-driven'],
  ['Strengths', 'Analytical thinking, people & systems'],
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
      style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}
    >
      <div style={styles.grid} className="about-two-col">

        {/* ── Left column: text ── */}
        <div style={fadeStyle(0)}>
          <Label>About</Label>

          <h2 style={styles.heading}>
            Systems thinker.<br />
            People observer.<br />
            <em style={{ color: '#D4A96A' }}>Problem finder.</em>
          </h2>

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
        </div>

        {/* ── Right column: avatar + info card ── */}
        <div style={fadeStyle(0.2)}>

          {/* ─── YOUR PHOTO GOES HERE ─────────────────────────
              Replace `src={null}` with `src={avatarImg}` after
              dropping avatar.jpg into src/assets/images/
          ──────────────────────────────────────────────────── */}
          <div style={styles.avatarWrapper}>
            <ImageSlot
              src={avatarImg}           // ← swap with avatarImg
              alt="Varshini — profile photo"
              accent="#D4A96A"
              height="260px"
              style={{ borderRadius: '50%', border: '1px solid rgba(212,169,106,0.25)' }}
            />
            {/* Decorative pulsing ring */}
            <div className="avatar-ring" aria-hidden="true" />
          </div>

          {/* Info card */}
          <CornerCard style={{ marginTop: '2rem' }}>
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

      {/* Responsive grid */}
      <style>{`
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
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
  avatarWrapper: {
    position: 'relative',
    width: '220px',
    margin: '0 auto',
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
