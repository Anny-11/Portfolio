// src/components/Projects.jsx
import { useState, useEffect } from 'react'
import useInView      from '../hooks/useInView'
import Label          from './ui/Label'
import ImageSlot      from './ui/ImageSlot'
import projects      from '../data/projects'

export default function Projects() {
  const [ref, visible] = useInView()
  const [selectedItem, setSelectedItem] = useState(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedItem])

  return (
    <section
      id="projects"
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
          <Label>Projects</Label>
          <h2 style={styles.heading}>Things I've thought through</h2>
          <p style={styles.sub}>
            No tech stack dumps or list of features — just real problems I explored, how I solved them, and what I took away. Tap a project to view the BTS.
          </p>
        </div>

        {/* Cards grid */}
        <div className="work-grid">
          {projects.map((item, i) => (
            <ProjectCard key={item.id} item={item} index={i} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {/* BTS Modal Overlay */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedItem(null)}>✕</button>
            <div style={styles.modalBody}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ ...styles.title, fontSize: '2.2rem', margin: 0, color: selectedItem.accent }}>
                    {selectedItem.title}
                  </h3>
                  {selectedItem.git && selectedItem.git !== '#' && (
                    <a href={selectedItem.git} target="_blank" rel="noreferrer" style={{ color: selectedItem.accent, display: 'flex', alignItems: 'center', transition: 'opacity 0.2s', marginTop: '5px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1} title="View Source on GitHub">
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <span style={{...styles.year, fontSize: '0.8rem', opacity: 0.7, color: selectedItem.accent }}>{selectedItem.year}</span>
              </div>
              
              <p style={{...styles.what, fontSize: '1.1rem', color: '#fff', marginBottom: '2rem'}}>
                {selectedItem.what}
              </p>

              {/* Tags inside modal */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {selectedItem.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily:    '"DM Mono", monospace',
                      fontSize:      '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding:       '0.4rem 0.8rem',
                      border:        `1px solid ${selectedItem.accent}40`,
                      color:         selectedItem.accent,
                      borderRadius:  '2px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Problem */}
                <div style={styles.modalSection}>
                  <div style={{ ...styles.metaKey, color: selectedItem.accent, fontSize: '0.7rem' }}>The Problem</div>
                  <p style={{...styles.metaVal, fontSize: '1rem'}}>{selectedItem.problem}</p>
                </div>
                
                {/* Solution */}
                <div style={styles.modalSection}>
                  <div style={{ ...styles.metaKey, color: selectedItem.accent, fontSize: '0.7rem' }}>The Solution</div>
                  <p style={{...styles.metaVal, fontSize: '1rem'}}>{selectedItem.solution}</p>
                </div>

                {/* What I Learned */}
                <div style={styles.modalSection}>
                  <div style={{ ...styles.metaKey, color: selectedItem.accent, fontSize: '0.7rem' }}>What I Learned</div>
                  <p style={{...styles.metaVal, fontSize: '1rem'}}>{selectedItem.learned}</p>
                </div>

                {/* Images grid inside modal */}
                {selectedItem.images && selectedItem.images.length > 0 && (
                  <div style={styles.imageGrid}>
                    {selectedItem.images.map((imgUrl, idx) => (
                      <div key={idx} style={styles.imageWrapper}>
                        <img src={imgUrl} alt={`Project BTS ${idx}`} style={styles.projectImage} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

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

function ProjectCard({ item, index, onClick }) {
  const [cardRef, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'none' : 'translateY(50px)',
        transition: `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease, background 0.3s ease, border-color 0.3s ease`,
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border:     `1px solid rgba(255,255,255,${hovered ? '0.15' : '0.07'})`,
        borderRadius: '4px',
        padding:    '2.25rem',
        position:   'relative',
        overflow:   'hidden',
        cursor:     'pointer',
        display:    'flex',
        flexDirection: 'column'
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

      {/* Title & Link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
        <h3 style={{ ...styles.title, color: hovered ? item.accent : '#fff', margin: 0 }}>
          {item.title}
        </h3>
        {item.git && item.git !== '#' && (
          <a 
            href={item.git} 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: hovered ? item.accent : 'rgba(255,255,255,0.4)', transition: 'color 0.2s, opacity 0.2s', marginTop: '2px', marginLeft: '0.5rem' }} 
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} 
            onMouseLeave={(e) => e.currentTarget.style.opacity = 1} 
            title="View Source on GitHub"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>

      {/* What */}
      <p style={styles.what}>{item.what}</p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
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

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', fontStyle: 'italic', transition: 'color 0.3s ease', color: hovered ? '#fff' : 'rgba(255,255,255,0.4)' }}>
        Tap to view BTS ➔
      </div>
    </div>
  )
}

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
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(5px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    animation: 'fadeIn 0.3s ease',
  },
  modalContent: {
    position: 'relative',
    background: '#111',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '3rem',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
    animation: 'slideUp 0.3s ease',
  },
  closeButton: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  modalSection: {
    background: 'rgba(255,255,255,0.02)',
    borderLeft: '2px solid rgba(255,255,255,0.1)',
    padding: '1.2rem',
    borderRadius: '0 4px 4px 0',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
}
