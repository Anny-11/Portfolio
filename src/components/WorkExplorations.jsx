// src/components/WorkExplorations.jsx
import { useState } from 'react'
import useInView      from '../hooks/useInView'
import Label          from './ui/Label'
import ImageSlot      from './ui/ImageSlot'
import explorations   from '../data/explorations'

export default function WorkExplorations() {
  const [ref, visible] = useInView()

  return (
    <section
      id="work"
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
          <Label>Work & Explorations</Label>
          <h2 style={styles.heading}>Things I've thought through</h2>
          <p style={styles.sub}>
            No formal case studies — just real problems I explored, what I noticed,
            and what I took away.
          </p>
        </div>

        {/* Cards grid */}
        <div style={styles.grid}>
          {explorations.map((item, i) => (
            <ExplorationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Card ──────────────────────────────────────────────── */
function ExplorationCard({ item, index }) {
  const [cardRef, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'none' : 'translateY(50px)',
        transition: `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease`,
        background: 'rgba(255,255,255,0.03)',
        border:     '1px solid rgba(255,255,255,0.07)',
        borderRadius: '4px',
        padding:    '2.25rem',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Top accent line on hover */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          top:        0,
          left:       0,
          right:      0,
          height:     '2px',
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
          opacity:    hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* ─── PROJECT COVER IMAGE ─────────────────────────
          In src/data/explorations.js, set image: work1
          after importing your file.
      ──────────────────────────────────────────────────── */}
      <ImageSlot
        src={item.image}
        alt={`${item.title} cover`}
        accent={item.accent}
        height="160px"
        style={{ marginBottom: '1.5rem' }}
      />

      {/* Index + year row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span style={styles.num}>0{item.id}</span>
        <span style={styles.year}>{item.year}</span>
      </div>

      {/* Title */}
      <h3 style={{ ...styles.title, color: hovered ? item.accent : '#fff' }}>
        {item.title}
      </h3>

      {/* What */}
      <p style={styles.what}>{item.what}</p>

      {/* Focus */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ ...styles.metaKey, color: item.accent }}>What I focused on</div>
        <p style={styles.metaVal}>{item.focus}</p>
      </div>

      {/* Learned */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ ...styles.metaKey, color: 'rgba(255,255,255,0.3)' }}>What I learned</div>
        <p style={styles.metaVal}>{item.learned}</p>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {item.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily:    '"DM Mono", monospace',
              fontSize:      '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding:       '0.3rem 0.7rem',
              border:        `1px solid ${item.accent}40`,
              color:         item.accent,
              borderRadius:  '2px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Styles ─────────────────────────────────────────────── */
const styles = {
  grid: {},   // actual class applied via JSX className below (see grid div)
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize:   'clamp(2rem, 5vw, 3.5rem)',
    color:      '#fff',
    margin:     '1rem 0 0.75rem',
    fontWeight: 700,
  },
  sub: {
    fontFamily: '"Lora", serif',
    fontSize:   '1rem',
    color:      'rgba(255,255,255,0.45)',
    fontStyle:  'italic',
  },
  num: {
    fontFamily:  '"DM Mono", monospace',
    fontSize:    '2rem',
    fontWeight:  700,
    color:       'rgba(255,255,255,0.06)',
    lineHeight:  1,
  },
  year: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.65rem',
    color:         'rgba(255,255,255,0.3)',
    letterSpacing: '0.15em',
  },
  title: {
    fontFamily:  '"Playfair Display", serif',
    fontSize:    '1.35rem',
    fontWeight:  600,
    margin:      '0 0 0.6rem',
    transition:  'color 0.2s',
  },
  what: {
    fontFamily: '"Lora", serif',
    fontSize:   '0.88rem',
    lineHeight: 1.75,
    color:      'rgba(255,255,255,0.45)',
    fontStyle:  'italic',
    margin:     '0 0 1.25rem',
  },
  metaKey: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.58rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom:  '0.35rem',
  },
  metaVal: {
    fontFamily: '"Lora", serif',
    fontSize:   '0.88rem',
    lineHeight: 1.75,
    color:      'rgba(255,255,255,0.58)',
    margin:     0,
  },
}
