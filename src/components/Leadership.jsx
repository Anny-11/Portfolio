// src/components/Leadership.jsx
import { useState, useEffect } from 'react'
import useInView     from '../hooks/useInView'
import Label         from './ui/Label'
import leadership    from '../data/leadership'

export default function Leadership() {
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
            done with teams. Tap a card to see more details.
          </p>
        </div>

        {/* Cards */}
        <div className="leadership-grid">
          {leadership.map((item, i) => (
            <LeadershipCard key={item.id} item={item} index={i} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedItem(null)}>
              ✕
            </button>
            <div style={styles.modalBody}>
              <h3 style={{...styles.role, fontSize: '2rem', marginBottom: '0.5rem', lineHeight: 1.2}}>{selectedItem.role}</h3>
              <div style={{...styles.period, fontSize: '1rem', marginBottom: '1.5rem', whiteSpace: 'normal', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center'}}>
                {selectedItem.link && selectedItem.link !== '#' ? (
                  <a href={selectedItem.link} target="_blank" rel="noreferrer" style={{ color: selectedItem.accent, textDecoration: 'underline' }}>{selectedItem.org}</a>
                ) : (
                  <span style={{ color: selectedItem.accent }}>{selectedItem.org}</span>
                )}
                <span style={{ opacity: 0.5 }}>|</span> <span>{selectedItem.period}</span>
              </div>
              
              <p style={{...styles.summary, fontSize: '1.05rem', color: '#fff'}}>{selectedItem.summary}</p>
              
              {selectedItem.details && selectedItem.details.length > 0 && (
                <ul style={styles.detailsList}>
                  {selectedItem.details.map((detail, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem' }}>{detail}</li>
                  ))}
                </ul>
              )}

              {selectedItem.images && selectedItem.images.length > 0 && (
                <div style={styles.imageGrid}>
                  {selectedItem.images.map((imgUrl, idx) => (
                    <div key={idx} style={styles.imageWrapper}>
                      <img src={imgUrl} alt={`Event ${idx}`} style={styles.eventImage} />
                    </div>
                  ))}
                </div>
              )}

              <div style={{...styles.takeawayBox, marginTop: '2rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px'}}>
                <div style={styles.takeawayLabel}>Key takeaway</div>
                <p style={{...styles.takeawayQuote, fontSize: '1.1rem'}}>"{selectedItem.impact}"</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ── Card ──────────────────────────────────────────────── */
function LeadershipCard({ item, index, onClick }) {
  const [cardRef, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'none' : 'translateY(40px)',
        transition:   `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease, border-color 0.3s ease, background 0.3s ease`,
        background:   hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border:       `1px solid rgba(255,255,255,${hovered ? '0.15' : '0.07'})`,
        borderRadius: '4px',
        padding:      '2.25rem',
        position:     'relative',
        overflow:     'hidden',
        cursor:       'pointer',
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
          width:      hovered ? '4px' : '3px',
          background: item.accent,
          opacity:    hovered ? 1 : 0.25,
          transition: 'all 0.3s ease',
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
          textTransform: 'uppercase',
          marginBottom:  '1.1rem',
        }}
        onClick={(e) => {
          if (item.link && item.link !== '#') e.stopPropagation();
        }}
      >
        {item.link && item.link !== '#' ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: item.accent,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            {item.org} ↗
          </a>
        ) : (
          <span style={{ color: item.accent }}>{item.org}</span>
        )}
      </div>

      {/* Summary */}
      <p style={styles.summary}>{item.summary}</p>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.8rem', fontStyle: 'italic', transition: 'color 0.3s ease', color: hovered ? '#fff' : 'rgba(255,255,255,0.4)' }}>
        Tap to view details ➔
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
    textAlign:  'justify',
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
  detailsList: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: '"Lora", serif',
    fontSize: '1rem',
    lineHeight: 1.8,
    paddingLeft: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'justify',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  eventImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  }
}

