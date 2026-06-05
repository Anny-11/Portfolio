// src/components/Skills.jsx
import useInView from '../hooks/useInView'
import Label from './ui/Label'
import { exploringAreas } from '../data/skills'

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section
      id="skills"
      style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div
          ref={ref}
          style={{
            marginBottom: '4rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <Label>Areas of Focus & Interests</Label>
          <h2 style={styles.heading}>
            Mindset, Design &<br />
            <em style={{ color: '#D4A96A' }}>Technical Foundations.</em>
          </h2>
          <p style={styles.sub}>
            Exploring user needs, system architectures, and the toolkits that bridge them.
          </p>
        </div>

        {/* Merged Exploring Grid */}
        <div 
          className="exploring-grid" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '2rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          }}
        >
          {exploringAreas.map((area, idx) => (
            <div 
              key={area.title} 
              className="exploring-card"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderLeft: `4px solid ${area.accent}`,
                borderTop: '1px solid rgba(255,255,255,0.03)',
                borderRight: '1px solid rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                e.currentTarget.style.borderColor = `${area.accent}40`
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = `0 12px 40px -10px ${area.accent}20`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div>
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.35rem',
                  color: '#fff',
                  margin: '0 0 0.75rem 0',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {area.title}
                </h3>
                <p style={{
                  fontFamily: '"Lora", serif',
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.65)',
                  margin: 0,
                  lineHeight: '1.6',
                  textAlign: 'justify'
                }}>
                  {area.desc}
                </p>
              </div>

              {/* Skills/Bubbles Container */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginTop: '0.5rem',
              }}>
                {area.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="skill-pill"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: `linear-gradient(135deg, ${skill.accent}12, ${skill.accent}04)`,
                      border: `1px solid ${skill.accent}30`,
                      borderRadius: '100px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontFamily: '"Lora", serif',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      padding: '0.45rem 0.95rem',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'default',
                      backdropFilter: 'blur(4px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${skill.accent}70`
                      e.currentTarget.style.background = `linear-gradient(135deg, ${skill.accent}20, ${skill.accent}08)`
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${skill.accent}30`
                      e.currentTarget.style.background = `linear-gradient(135deg, ${skill.accent}12, ${skill.accent}04)`
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'
                    }}
                  >
                    <span style={{ 
                      marginRight: '6px', 
                      display: 'inline-block', 
                      width: '5px', 
                      height: '5px', 
                      borderRadius: '50%', 
                      background: skill.accent 
                    }}></span>
                    {skill.label}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .exploring-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
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
  }
}

