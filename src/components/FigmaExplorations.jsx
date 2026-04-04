// src/components/FigmaExplorations.jsx
import { useState }   from 'react'
import useInView       from '../hooks/useInView'
import Label           from './ui/Label'
import ImageSlot       from './ui/ImageSlot'
import figmaWork       from '../data/figmaWork'

export default function FigmaExplorations() {
  const [ref, visible] = useInView()

  return (
    <section
      id="figma"
      style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}
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
          <Label>Design Explorations</Label>
          <h2 style={styles.heading}>Figma Work</h2>
          <p style={styles.sub}>
            Explorations, not finished products. Learning by doing — layouts, flows,
            and usability thinking in practice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="figma-grid">
          {figmaWork.map((item, i) => (
            <FigmaCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .figma-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 600px) {
          .figma-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Card ──────────────────────────────────────────────── */
function FigmaCard({ item, index }) {
  const [cardRef, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'none' : 'scale(0.97)',
        transition:   `opacity 0.6s ${index * 0.1}s ease, transform 0.6s ${index * 0.1}s ease`,
        background:   'rgba(255,255,255,0.03)',
        border:       `1px solid ${hovered ? item.accent + '50' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '4px',
        padding:      '1.75rem',
        cursor:       'pointer',
      }}
    >
      {/* ─── FIGMA SCREENSHOT ────────────────────────────
          In src/data/figmaWork.js, set image: figma1
          after importing your exported Figma frame.
      ──────────────────────────────────────────────────── */}
      <ImageSlot
        src={item.image}
        alt={`${item.title} — Figma frame`}
        accent={item.accent}
        height="150px"
        style={{ marginBottom: '1.25rem' }}
      />

      {/* Title */}
      <h3
        style={{
          fontFamily:  '"Playfair Display", serif',
          fontSize:    '1.05rem',
          color:       hovered ? item.accent : '#fff',
          margin:      '0 0 0.5rem',
          transition:  'color 0.2s',
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: '"Lora", serif',
          fontSize:   '0.85rem',
          lineHeight: 1.7,
          color:      'rgba(255,255,255,0.48)',
          fontStyle:  'italic',
          margin:     '0 0 1rem',
        }}
      >
        {item.desc}
      </p>

      {/* What was explored */}
      <div>
        <span
          style={{
            fontFamily:    '"DM Mono", monospace',
            fontSize:      '0.58rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color:         item.accent,
          }}
        >
          Explored →{' '}
        </span>
        <span
          style={{
            fontFamily:    '"DM Mono", monospace',
            fontSize:      '0.62rem',
            color:         'rgba(255,255,255,0.35)',
          }}
        >
          {item.explored}
        </span>
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
