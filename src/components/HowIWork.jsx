// src/components/HowIWork.jsx
import useInView from '../hooks/useInView'
import Label from './ui/Label'

export default function HowIWork() {
  const [ref, visible] = useInView()

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(40px)',
    transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
  })

  return (
    <section
      id="how-i-work"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'rgba(255,255,255,0.005)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div style={fadeStyle(0)}>
        <Label>Approach</Label>
        <h2 style={styles.heading}>
          How I Work
        </h2>
        <h3 style={styles.subHeading}>
          I usually start with a problem rather than the technology.
        </h3>
        
        <div style={styles.grid}>
          <div style={styles.col}>
            <p style={styles.para}>
              Most of my projects begin with an everyday frustration, a question, or an observation. I spend time understanding the problem, sketching ideas, and thinking through possible solutions before moving to implementation.
            </p>
          </div>
          <div style={styles.col}>
            <p style={styles.para}>
              I use AI tools as part of my workflow, allowing me to focus on problem-solving, user needs, and product thinking while turning ideas into working prototypes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 700,
    color: '#fff',
    margin: '1rem 0 1rem',
    lineHeight: 1.1,
  },
  subHeading: {
    fontFamily: '"Lora", serif',
    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
    color: '#D4A96A',
    fontWeight: 500,
    margin: '0 0 3rem 0',
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginTop: '2rem',
  },
  col: {
    background: 'rgba(255,255,255,0.02)',
    borderLeft: '2px solid rgba(212,169,106,0.3)',
    padding: '2rem',
    borderRadius: '0 4px 4px 0',
  },
  para: {
    fontFamily: '"Lora", serif',
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.65)',
    margin: 0,
  },
}
