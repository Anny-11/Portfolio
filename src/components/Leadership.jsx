// src/components/Leadership.jsx
import { useState } from 'react'
import useInView     from '../hooks/useInView'
import Label         from './ui/Label'
import leadership    from '../data/leadership'

export default function Leadership() {
  const [ref, visible] = useInView()

  return (
    <section
      id="leadership"
      style={{
        padding:    'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={ref}
          style={{
            marginBottom: '3.5rem',
            opacity:      visible ? 1 : 0,
            transform:    visible ? 'none' : 'translateY(30px)',
            transition:   'all 0.7s ease',
          }}
        >
          <Label>Experience & Leadership</Label>
          <h2 style={styles.heading}>
            Working with people,<br />
            <em style={{ color: '#D4A96A' }}>not just with ideas.</em>
          </h2>
          <p style={styles.sub}>
            Real experience in coordination, communication, and getting things
            done with teams.
          </p>
        </div>

        {/* Cards */}
        <div className="leadership-grid">
          {leadership.map((item, i) => (
            <LeadershipCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Card ──────────────────────────────────────────────── */
function LeadershipCard({ item, index }) {
  const [cardRef, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'none' : 'translateY(40px)',
        transition:   `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease`,
        background:   'rgba(255,255,255,0.03)',
        border:       '1px solid rgba(255,255,255,0.07)',
        borderRadius: '4px',
        padding:      '2.25rem',
        position:     'relative',
        overflow:     'hidden',
      }}
    >
      {/* Left colour bar */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          left:       0,
          top:        0,
          bottom:     0,
          width:      '3px',
          background: item.accent,
          opacity:    hovered ? 1 : 0.25,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Role + period */}
      <div
        style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-start',
          marginBottom:   '0.5rem',
          flexWrap:       'wrap',
          gap:            '0.5rem',
        }}
      >
        <h3 style={styles.role}>{item.role}</h3>
        <span style={styles.period}>{item.period}</span>
      </div>

      {/* Organisation */}
      <div
        style={{
          fontFamily:    '"DM Mono", monospace',
          fontSize:      '0.62rem',
          letterSpacing: '0.12em',
          color:         item.accent,
          textTransform: 'uppercase',
          marginBottom:  '1.1rem',
        }}
      >
        {item.org}
      </div>

      {/* Summary */}
      <p style={styles.summary}>{item.summary}</p>

      {/* Key takeaway */}
      <div style={styles.takeawayBox}>
        <div style={styles.takeawayLabel}>Key takeaway</div>
        <p style={styles.takeawayQuote}>"{item.impact}"</p>
      </div>
    </div>
  )
}

/* ── Styles ─────────────────────────────────────────────── */
const styles = {
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize:   'clamp(2rem, 5vw, 3.5rem)',
    color:      '#fff',
    margin:     '1rem 0 0.75rem',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  sub: {
    fontFamily: '"Lora", serif',
    fontSize:   '1rem',
    color:      'rgba(255,255,255,0.45)',
    fontStyle:  'italic',
  },
  role: {
    fontFamily: '"Playfair Display", serif',
    fontSize:   '1.2rem',
    color:      '#fff',
    fontWeight: 600,
    margin:     0,
  },
  period: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.62rem',
    color:         'rgba(255,255,255,0.3)',
    letterSpacing: '0.1em',
    whiteSpace:    'nowrap',
  },
  summary: {
    fontFamily: '"Lora", serif',
    fontSize:   '0.92rem',
    lineHeight: 1.8,
    color:      'rgba(255,255,255,0.58)',
    margin:     '0 0 1.25rem',
  },
  takeawayBox: {
    borderTop:  '1px solid rgba(255,255,255,0.07)',
    paddingTop: '1rem',
  },
  takeawayLabel: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.58rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.28)',
    marginBottom:  '0.4rem',
  },
  takeawayQuote: {
    fontFamily:  '"Lora", serif',
    fontSize:    '0.9rem',
    fontStyle:   'italic',
    lineHeight:  1.75,
    color:       'rgba(255,255,255,0.65)',
    margin:      0,
  },
}
