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
        
        {/* 3-Box Grid */}
        <div style={styles.grid}>
          {/* Box 1: Notice */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Notice</h3>
            <p style={styles.para}>
              Most of my projects begin with a frustration, limitation, or question I encounter in everyday life.
            </p>
          </div>

          {/* Box 2: Explore */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Explore</h3>
            <p style={styles.para}>
              I spend time understanding the problem, questioning assumptions, and sketching possible solutions before jumping into implementation.
            </p>
          </div>

          {/* Box 3: Build */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Build</h3>
            <p style={styles.para}>
              I use technology and AI-assisted tools to turn ideas into prototypes and learn through iteration.
            </p>
          </div>
        </div>

        {/* Highlighted Quote at Bottom */}
        <div style={styles.quoteWrapper}>
          <p style={styles.quoteText}>
            "I don't usually start with code. I start with a problem."
          </p>
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
    margin: '1rem 0 3rem',
    lineHeight: 1.1,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    background: 'rgba(255,255,255,0.02)',
    borderLeft: '2px solid rgba(212,169,106,0.3)',
    padding: '2.5rem 2rem',
    borderRadius: '0 4px 4px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  cardTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#D4A96A',
    margin: 0,
  },
  para: {
    fontFamily: '"Lora", serif',
    fontSize: '1.02rem',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.65)',
    margin: 0,
    textAlign: 'justify',
  },
  quoteWrapper: {
    marginTop: '4rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '3rem',
    textAlign: 'center',
  },
  quoteText: {
    fontFamily: '"Lora", serif',
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontStyle: 'italic',
    color: '#fff',
    margin: 0,
    opacity: 0.85,
    lineHeight: 1.5,
  },
}
