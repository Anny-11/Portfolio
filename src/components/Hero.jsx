// src/components/Hero.jsx
import { useEffect, useRef } from 'react'
import avatarImg from '../assets/images/avatar.jpg'

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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      {/* Cursor-following amber orb */}
      <div
        ref={orbRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,169,106,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />

      {/* Background image with gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, #0A0A0A 95%), url(${avatarImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Subtle grid lines */}
      <div className="bg-grid" aria-hidden="true" style={{ opacity: 0.5, zIndex: 0 }} />

      {/* Fixed social links in the side corner */}
      <div
        style={{
          position: 'fixed',
          right: 'clamp(1rem, 3vw, 2rem)',
          bottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          zIndex: 100,
        }}
      >
        <a href="https://www.linkedin.com/in/varshini1116/" target="_blank" rel="noreferrer" className="animate-fadeUp hover:text-[#D4A96A] transition-colors duration-300" style={styles.socialLink}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="https://github.com/Anny-11" target="_blank" rel="noreferrer" className="animate-fadeUp-d1 hover:text-[#D4A96A] transition-colors duration-300" style={styles.socialLink}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://medium.com/@varshv8" target="_blank" rel="noreferrer" className="animate-fadeUp-d2 hover:text-[#D4A96A] transition-colors duration-300" style={styles.socialLink}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.52 3.058v.404h-7.14v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
          </svg>
        </a>
        <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.15)' }} className="animate-fadeUp-d3" />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>

        {/* Status badge */}
        <div className="animate-fadeUp-d2" style={styles.badge}>
          Open to opportunities · 2025
        </div>

        {/* Name */}
        <h1 className="animate-fadeUp-d1" style={styles.name}>
          Varshini N P
        </h1>

        {/* Role */}
        <p className="animate-fadeUp-d2" style={styles.role}>
          Software Systems Student | Product & UX Enthusiast
        </p>

        {/* Tagline */}
        <p className="animate-fadeUp-d3" style={styles.tagline}>
          "Understanding users, solving problems, and exploring the intersection of product, business, and technology."
        </p>

        {/* CTA buttons */}
        <div className="animate-fadeUp-d5" style={styles.ctaRow}>
          <HeroButton
            primary
            onClick={() => scrollTo('projects')}
          >
            View Projects
          </HeroButton>
          <HeroButton onClick={() => scrollTo('contact')}>
            Contact
          </HeroButton>
          <HeroButton as="a" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </HeroButton>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fadeUp-d5" style={styles.scrollIndicator}>
          <div
            className="animate-pulse-slow"
            style={{
              width: '1px',
              height: '48px',
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
function HeroButton({ children, onClick, primary = false, as, href, target, rel }) {
  const base = {
    padding: '0.85rem 2.25rem',
    border: 'none',
    cursor: 'pointer',
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition: 'all 0.25s ease',
    borderRadius: '2px',
    textDecoration: 'none',
    display: 'inline-block',
  }

  const primaryStyle = { ...base, background: '#D4A96A', color: '#0A0A0A', fontWeight: 600 }
  const outlineStyle = { ...base, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }

  const handleEnter = (e) => {
    if (primary) {
      e.currentTarget.style.background = '#E8C484'
      e.currentTarget.style.transform = 'translateY(-2px)'
    } else {
      e.currentTarget.style.borderColor = '#D4A96A'
      e.currentTarget.style.color = '#D4A96A'
    }
  }
  const handleLeave = (e) => {
    if (primary) {
      e.currentTarget.style.background = '#D4A96A'
      e.currentTarget.style.transform = 'translateY(0)'
    } else {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
      e.currentTarget.style.color = '#fff'
    }
  }

  const Component = as || 'button'

  return (
    <Component
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={primary ? primaryStyle : outlineStyle}
    >
      {children}
    </Component>
  )
}

/* ── Styles ────────────────────────────────────────────── */
const styles = {
  avatarWrapper: {
    marginBottom: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid rgba(212,169,106,0.3)',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  socialLink: {
    color: 'rgba(255,255,255,0.6)',
  },
  badge: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.72rem',
    letterSpacing: '0.25em',
    color: '#D4A96A',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  name: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 'clamp(3.5rem, 10vw, 8rem)',
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: '-0.02em',
    color: '#fff',
    margin: 0,
  },
  role: {
    fontFamily: '"DM Mono", monospace',
    fontSize: 'clamp(0.62rem, 2vw, 0.82rem)',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    marginTop: '1.25rem',
  },
  tagline: {
    fontFamily: '"Lora", serif',
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    color: 'rgba(255,255,255,0.58)',
    fontStyle: 'italic',
    marginTop: '2rem',
    lineHeight: 1.7,
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '6rem',
    flexWrap: 'wrap',
  },
  scrollIndicator: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  scrollLabel: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.6rem',
    color: 'rgba(255,255,255,0.3)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
}
