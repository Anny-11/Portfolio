// src/components/Hero.jsx
import { useEffect, useRef } from 'react'

export default function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return
      orbRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        position:       'relative',
        overflow:       'hidden',
        padding:        '0 clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      {/* Cursor-following amber orb */}
      <div
        ref={orbRef}
        aria-hidden="true"
        style={{
          position:   'fixed',
          top:        0,
          left:       0,
          width:      '600px',
          height:     '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,169,106,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex:     0,
          transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />

      {/* Subtle grid lines */}
      <div className="bg-grid" aria-hidden="true" />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>

        {/* Status badge */}
        <div className="animate-fadeUp" style={styles.badge}>
          Open to opportunities · 2025
        </div>

        {/* Name */}
        <h1 className="animate-fadeUp-d1" style={styles.name}>
          Varshini
        </h1>

        {/* Role */}
        <p className="animate-fadeUp-d2" style={styles.role}>
          Product Thinking Enthusiast · Software Systems Student
        </p>

        {/* Tagline */}
        <p className="animate-fadeUp-d3" style={styles.tagline}>
          "Understanding users, analyzing problems, and building meaningful solutions"
        </p>

        {/* CTA buttons */}
        <div className="animate-fadeUp-d4" style={styles.ctaRow}>
          <HeroButton
            primary
            onClick={() => scrollTo('work')}
          >
            View Work
          </HeroButton>
          <HeroButton onClick={() => scrollTo('contact')}>
            Contact
          </HeroButton>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fadeUp-d5" style={styles.scrollIndicator}>
          <div
            className="animate-pulse-slow"
            style={{
              width:      '1px',
              height:     '48px',
              background: 'linear-gradient(to bottom, transparent, #D4A96A)',
            }}
          />
          <span style={styles.scrollLabel}>Scroll</span>
        </div>
      </div>
    </section>
  )
}

/* ── Sub-component: CTA button ─────────────────────────── */
function HeroButton({ children, onClick, primary = false }) {
  const base = {
    padding:       '0.85rem 2.25rem',
    border:        'none',
    cursor:        'pointer',
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition:    'all 0.25s ease',
    borderRadius:  '2px',
  }

  const primaryStyle = { ...base, background: '#D4A96A', color: '#0A0A0A', fontWeight: 600 }
  const outlineStyle = { ...base, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }

  const handleEnter = (e) => {
    if (primary) {
      e.currentTarget.style.background = '#E8C484'
      e.currentTarget.style.transform  = 'translateY(-2px)'
    } else {
      e.currentTarget.style.borderColor = '#D4A96A'
      e.currentTarget.style.color       = '#D4A96A'
    }
  }
  const handleLeave = (e) => {
    if (primary) {
      e.currentTarget.style.background = '#D4A96A'
      e.currentTarget.style.transform  = 'translateY(0)'
    } else {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
      e.currentTarget.style.color       = '#fff'
    }
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={primary ? primaryStyle : outlineStyle}
    >
      {children}
    </button>
  )
}

/* ── Styles ────────────────────────────────────────────── */
const styles = {
  badge: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.72rem',
    letterSpacing: '0.25em',
    color:         '#D4A96A',
    textTransform: 'uppercase',
    marginBottom:  '2rem',
  },
  name: {
    fontFamily:    '"Playfair Display", serif',
    fontSize:      'clamp(3.5rem, 10vw, 8rem)',
    fontWeight:    700,
    lineHeight:    0.95,
    letterSpacing: '-0.02em',
    color:         '#fff',
    margin:        0,
  },
  role: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      'clamp(0.62rem, 2vw, 0.82rem)',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.4)',
    marginTop:     '1.25rem',
  },
  tagline: {
    fontFamily:  '"Lora", serif',
    fontSize:    'clamp(1rem, 2.5vw, 1.2rem)',
    color:       'rgba(255,255,255,0.58)',
    fontStyle:   'italic',
    marginTop:   '2rem',
    lineHeight:  1.7,
  },
  ctaRow: {
    display:        'flex',
    gap:            '1rem',
    justifyContent: 'center',
    marginTop:      '3rem',
    flexWrap:       'wrap',
  },
  scrollIndicator: {
    marginTop:      '5rem',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    gap:            '0.5rem',
  },
  scrollLabel: {
    fontFamily:    '"DM Mono", monospace',
    fontSize:      '0.6rem',
    color:         'rgba(255,255,255,0.3)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
}
