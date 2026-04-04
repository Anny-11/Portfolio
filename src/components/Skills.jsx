// src/components/Skills.jsx
import { useEffect, useRef } from 'react'
import useInView              from '../hooks/useInView'
import Label                  from './ui/Label'
import skillGroups            from '../data/skills'

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
            marginBottom: '3.5rem',
            opacity:      visible ? 1 : 0,
            transform:    visible ? 'none' : 'translateY(30px)',
            transition:   'all 0.7s ease',
          }}
        >
          <Label>Capabilities</Label>
          <h2 style={styles.heading}>
            Skills &{' '}
            <em style={{ color: '#D4A96A' }}>Where I'm at</em>
          </h2>
          <p style={styles.sub}>
            Honest about what I know, honest about what I'm still learning.
          </p>
        </div>

        {/* Three skill group columns */}
        <div className="skills-columns">
          {skillGroups.map((group) => (
            <SkillGroup key={group.group} group={group} />
          ))}
        </div>
      </div>

      <style>{`
        .skills-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
        }
        @media (max-width: 900px) {
          .skills-columns { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Skill group (one column) ──────────────────────────── */
function SkillGroup({ group }) {
  const [ref, visible] = useInView(0.2)

  return (
    <div ref={ref}>
      {/* Group label */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div
          style={{
            fontFamily:    '"DM Mono", monospace',
            fontSize:      '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         group.accent,
            marginBottom:  '0.5rem',
          }}
        >
          {group.group}
        </div>
        <div
          style={{
            height:     '1px',
            background: `linear-gradient(90deg, ${group.accent}60, transparent)`,
          }}
        />
      </div>

      {/* Skill bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.label}
            skill={skill}
            index={i}
            accent={group.accent}
            groupVisible={visible}
          />
        ))}
      </div>
    </div>
  )
}

/* ── Single skill bar ──────────────────────────────────── */
function SkillBar({ skill, index, accent, groupVisible }) {
  const fillRef = useRef(null)

  useEffect(() => {
    if (!fillRef.current) return
    if (groupVisible) {
      const timer = setTimeout(() => {
        fillRef.current.style.width = `${skill.level}%`
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [groupVisible, skill.level, index])

  return (
    <div
      style={{
        opacity:    groupVisible ? 1 : 0,
        transform:  groupVisible ? 'none' : 'translateX(-16px)',
        transition: `opacity 0.6s ${index * 0.08}s ease, transform 0.6s ${index * 0.08}s ease`,
      }}
    >
      {/* Label row */}
      <div
        style={{
          display:        'flex',
          justifyContent: 'space-between',
          marginBottom:   '0.45rem',
        }}
      >
        <span
          style={{
            fontFamily:    '"DM Mono", monospace',
            fontSize:      '0.68rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.62)',
          }}
        >
          {skill.label}
        </span>
        <span
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize:   '0.68rem',
            color:      accent,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height:       '2px',
          background:   'rgba(255,255,255,0.08)',
          borderRadius: '1px',
          overflow:     'hidden',
        }}
      >
        <div
          ref={fillRef}
          style={{
            height:       '100%',
            width:        '0%',
            background:   accent,
            borderRadius: '1px',
            transition:   `width 1.2s cubic-bezier(0.23, 1, 0.32, 1)`,
          }}
        />
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
