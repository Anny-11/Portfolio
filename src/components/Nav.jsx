// src/components/Nav.jsx
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { 
    label: 'About', 
    id: 'about',
    icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>
  },
  {
    label: 'Approach',
    id: 'how-i-work',
    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>
  },
  { 
    label: 'Experience', 
    id: 'experience',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>
  },
  { 
    label: 'Projects', 
    id: 'projects',
    icon: <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>
  },
  { 
    label: 'Skills', 
    id: 'skills',
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>
  },
  { 
    label: 'Leadership', 
    id: 'leadership',
    icon: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>
  },
  { 
    label: 'Contact', 
    id: 'contact',
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>
  },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      // Background shift for navbar
      setScrolled(window.scrollY > 40)
      
      // Scroll spy logic for active highlighting
      const scrollY = window.scrollY + window.innerHeight / 3
      let current = ''
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id)
        if (el && el.offsetTop <= scrollY) {
          current = NAV_LINKS[i].id
          break
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* UNIFIED TOP NAVBAR */}
      <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        {/* Left: Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="logo-btn"
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
            flexShrink: 0,
          }}
        >
          Anny.
        </button>

        {/* Right: Desktop Text Links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop-links">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
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
                color: hoveredId === id || activeId === id ? '#D4A96A' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.2s',
                padding: '0.25rem 0',
                borderBottom: hoveredId === id || activeId === id ? '1px solid #D4A96A' : '1px solid transparent',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: Mobile Icon Links (Unified inside the same navbar) */}
        <div className="nav-mobile-icons">
          {NAV_LINKS.map(({ label, id, icon }) => {
            const isActive = activeId === id
            return (
              <button
                key={id}
                className="icon-link-btn"
                onClick={() => scrollTo(id)}
                title={label} /* Built-in hover tooltip */
                aria-label={label}
              >
                <div className={`icon-container ${isActive ? 'active' : ''}`}>
                  <svg 
                    width="18" height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </div>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Responsive styles */}
      <style>{`
        /* Desktop Top Navbar layout */
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .nav-container.scrolled {
          backdrop-filter: blur(20px);
          background: rgba(10,10,10,0.88);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Hide mobile icons on PC */
        .nav-mobile-icons {
          display: none;
        }

        @media (max-width: 768px) {
          /* Hide desktop text links on Mobile */
          .nav-desktop-links { 
            display: none !important; 
          }
          
          /* Tighten up mobile padding */
          .nav-container {
            padding: 0 1rem;
            gap: 1rem;
          }

          /* Show mobile icons, housed within the top bar on the right */
          .nav-mobile-icons {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            overflow-x: auto;
            flex-grow: 1;
            justify-content: flex-end;
            /* Hide scrollbar */
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .nav-mobile-icons::-webkit-scrollbar {
            display: none;
          }

          .icon-link-btn {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            flex-shrink: 0;
          }

          .icon-container {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(10,10,10,0.5);
            color: rgba(255,255,255,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .icon-container.active {
            color: #111;
            background: #D4A96A;
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(212,169,106,0.3);
          }
        }
      `}</style>
    </>
  )
}
