// src/components/Nav.jsx
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Figma', id: 'figma' },
  { label: 'Thinking', id: 'thinking' },
  { label: 'Skills', id: 'skills' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            color: '#D4A96A',
            fontWeight: 500,
            padding: 0,
          }}
        >
          Anny.
        </button>

        {/* Desktop links */}
        <div
          style={{ display: 'flex', gap: '2rem' }}
          className="nav-desktop-links"
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: hoveredId === id ? '#D4A96A' : 'rgba(255,255,255,0.5)',
                transition: 'color 0.2s',
                padding: 0,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="nav-mobile-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: 0,
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '64px',
            background: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            zIndex: 99,
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.75rem',
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Responsive styles injected once */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-btn    { display: block !important; }
        }
      `}</style>
    </>
  )
}
