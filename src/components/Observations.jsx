// src/components/Observations.jsx
import { useState }  from 'react'
import useInView      from '../hooks/useInView'
import Label          from './ui/Label'
import observations   from '../data/observations'

export default function Observations() {
  const [ref, visible] = useInView()

  return (
    <section
      id="thinking"
      style={{
        padding:    'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

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
          <Label>Observations & Thinking</Label>
          <h2 style={styles.heading}>Things I've noticed</h2>
          <p style={styles.sub}>
            How I think about users, products, and systems — in my own words.
          </p>
        </div>

        {/* Observation cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {observations.map((obs, i) => (
            <ObsCard key={obs.id} obs={obs} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Single observation card ───────────────────────────── */
function ObsCard({ obs, index }) {
  const [cardRef, visible] = useInView(0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'none' : 'translateY(30px)',
        background:   hovered ? 'rgba(212,169,106,0.04)' : 'rgba(255,255,255,0.02)',
        border:       '1px solid rgba(255,255,255,0.07)',
        borderLeft:   `3px solid ${hovered ? '#D4A96A' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '0 4px 4px 0',
        padding:      '2rem',
        display:      'flex',
        gap:          '1rem',
        transition:   `opacity 0.6s ${index * 0.1}s ease, transform 0.6s ${index * 0.1}s ease, background 0.25s, border-color 0.25s`,
      }}
    >
      {/* Icon glyph */}
      <span
        style={{
          fontFamily:  '"DM Mono", monospace',
          fontSize:    '1.1rem',
          color:       hovered ? '#D4A96A' : 'rgba(255,255,255,0.2)',
          flexShrink:  0,
          marginTop:   '0.1rem',
          transition:  'color 0.25s',
          lineHeight:  1,
        }}
      >
        {obs.icon}
      </span>

      <div>
        <h3
          style={{
            fontFamily:  '"Playfair Display", serif',
            fontSize:    '1.05rem',
            color:       '#fff',
            margin:      '0 0 0.75rem',
            fontWeight:  600,
            lineHeight:  1.3,
          }}
        >
          {obs.title}
        </h3>
        <p
          style={{
            fontFamily: '"Lora", serif',
            fontSize:   '0.92rem',
            lineHeight: 1.85,
            color:      'rgba(255,255,255,0.55)',
            margin:     0,
          }}
        >
          {obs.body}
        </p>
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
  },
  sub: {
    fontFamily: '"Lora", serif',
    fontSize:   '1rem',
    color:      'rgba(255,255,255,0.45)',
    fontStyle:  'italic',
  },
}
