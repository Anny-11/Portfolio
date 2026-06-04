// src/components/Skills.jsx
import { useMemo } from 'react'
import useInView   from '../hooks/useInView'
import Label       from './ui/Label'
import skillGroups from '../data/skills'

export default function Skills() {
  const [ref, visible] = useInView()

  // Group the skills category-wise instead of mixing them
  const groupedCloud = useMemo(() => {
    const flat = []
    skillGroups.forEach(group => {
      // Sort within the group by level (largest first) to make it look nice
      const sortedSkills = [...group.skills].sort((a, b) => b.level - a.level)
      sortedSkills.forEach(skill => {
        flat.push({ ...skill, accent: group.accent, groupName: group.group })
      })
    })

    return flat
  }, [])

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
            marginBottom: '3.5rem',
            opacity:      visible ? 1 : 0,
            transform:    visible ? 'none' : 'translateY(30px)',
            transition:   'all 0.7s ease',
          }}
        >
          <Label>Capabilities</Label>
          <h2 style={styles.heading}>
            Not just lines of code.<br />
            <em style={{ color: '#D4A96A' }}>Systems & Execution.</em>
          </h2>
          <p style={styles.sub}>
            Visualizing my toolkit. The larger the bubble, the deeper my focus and proficiency.
          </p>
        </div>

        {/* Legend */}
        <div style={styles.legendContainer}>
          {skillGroups.map(group => (
            <div key={group.group} style={styles.legendItem}>
              <div style={{...styles.legendDot, background: group.accent}}></div>
              <span>{group.group}</span>
            </div>
          ))}
        </div>

        {/* Cloud Container */}
        <div className="skill-cloud">
          {groupedCloud.map((item, i) => (
            <SkillPill key={`${item.groupName}-${item.label}`} item={item} index={i} containerVisible={visible} />
          ))}
        </div>

      </div>

      <style>{`
        .skill-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem 0;
        }

        .skill-pill {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          cursor: default;
          display: flex;
          align-items: center;
        }
        
        .skill-pill:hover {
          transform: translateY(-8px) scale(1.05) !important;
          z-index: 10;
        }



        @media (max-width: 640px) {
          .skill-cloud {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

/* ── Pill ──────────────────────────────────────────────── */
function SkillPill({ item, index, containerVisible }) {
  const [ref, visible] = useInView(0)
  
  // Dynamic scaling based on item.level (range 50 - 95 expected)
  // Base level math so 50 is normal size, 95 is huge.
  const scaleFactor = Math.max(0.7, (item.level / 100))
  const fontSize = `${(scaleFactor * 1.5) + 0.2}rem`
  const padVertical = `${scaleFactor * 0.8}rem`
  const padHorizontal = `${scaleFactor * 1.6}rem`

  return (
    <div
      className="skill-pill"
      ref={ref}
      style={{
        opacity:    containerVisible ? 1 : 0,
        transform:  containerVisible ? 'none' : 'scale(0.8) translateY(20px)',
        transition: `opacity 0.6s ${index * 0.04}s ease, transform 0.6s ${index * 0.04}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        
        // Dynamic design
        background: `linear-gradient(135deg, ${item.accent}15, ${item.accent}05)`,
        border:     `1px solid ${item.accent}40`,
        color:      item.level >= 80 ? '#fff' : 'rgba(255,255,255,0.8)',
        
        borderRadius: '100px',
        fontSize:     `clamp(0.9rem, ${fontSize}, 2.5rem)`,
        fontWeight:   item.level >= 85 ? 600 : 400,
        fontFamily:   item.level >= 80 ? '"Playfair Display", serif' : '"DM Mono", monospace',
        padding:      `clamp(0.5rem, ${padVertical}, 1.5rem) clamp(1rem, ${padHorizontal}, 3rem)`,
        letterSpacing: item.level < 80 ? '0.05em' : 'normal',
        
        boxShadow:    `0 4px 20px -5px ${item.accent}00`,
        backdropFilter: 'blur(4px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 10px 30px -10px ${item.accent}60`
        e.currentTarget.style.borderColor = `${item.accent}80`
        e.currentTarget.style.background = `linear-gradient(135deg, ${item.accent}30, ${item.accent}10)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 20px -5px ${item.accent}00`
        e.currentTarget.style.borderColor = `${item.accent}40`
        e.currentTarget.style.background = `linear-gradient(135deg, ${item.accent}15, ${item.accent}05)`
      }}
    >
      <span>{item.label}</span>
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
  legendContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginBottom: '3rem',
    padding: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255,255,255,0.6)',
  },
  legendDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  }
}
