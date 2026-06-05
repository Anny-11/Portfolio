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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        {/* Right: Desktop Text Links (with Icons next to them) */}
        <div style={{ display: 'flex', gap: '1.75rem' }} className="nav-desktop-links">
          {NAV_LINKS.map(({ label, id, icon }) => (
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
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: hoveredId === id || activeId === id ? '#D4A96A' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.2s',
                padding: '0.25rem 0',
                borderBottom: hoveredId === id || activeId === id ? '1px solid #D4A96A' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <svg 
                width="14" height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {icon}
              </svg>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Right Mobile Menu Trigger Button (3 Dots) */}
        <button
          className="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#D4A96A',
            padding: '0.5rem',
            display: 'none', // Managed by responsive CSS below
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="19" r="2"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar Menu Drawer Overlay */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          
          <div className="mobile-drawer-links">
            {NAV_LINKS.map(({ label, id, icon }) => (
              <button
                key={id}
                onClick={() => {
                  scrollTo(id)
                  setMobileMenuOpen(false)
                }}
                className={`mobile-drawer-link-btn ${activeId === id ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <svg 
                  width="16" height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {icon}
                </svg>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

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

        /* Mobile drawer background overlay */
        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        
        .mobile-drawer.open {
          opacity: 1;
          pointer-events: auto;
        }
        
        /* Drawer sidebar slide element */
        .mobile-drawer-content {
          position: fixed;
          top: 0;
          right: -300px;
          bottom: 0;
          width: 280px;
          background: #0A0A0A;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .mobile-drawer.open .mobile-drawer-content {
          right: 0;
        }
        
        .mobile-drawer-close {
          align-self: flex-end;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
        }

        .mobile-drawer-close:hover {
          color: #D4A96A;
        }
        
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .mobile-drawer-link-btn {
          background: none;
          border: none;
          text-align: left;
          font-family: "DM Mono", monospace;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
          padding: 0.75rem 0;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.25s ease;
        }

        .mobile-drawer-link-btn:hover {
          color: #fff;
          padding-left: 0.25rem;
        }
        
        .mobile-drawer-link-btn.active {
          color: #D4A96A;
          border-bottom-color: #D4A96A;
          padding-left: 0.5rem;
        }

        @media (max-width: 992px) {
          /* Hide desktop text links on Mobile/Tablet */
          .nav-desktop-links { 
            display: none !important; 
          }
          
          /* Tighten up mobile padding */
          .nav-container {
            padding: 0 1.5rem;
          }

          /* Show mobile menu trigger button */
          .mobile-menu-trigger {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
