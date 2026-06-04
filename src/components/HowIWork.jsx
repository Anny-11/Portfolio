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
          {/* Box 1: Questions */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>It starts with a question.</h3>
            <ul style={styles.questionList}>
              <li style={styles.questionItem}>Why do notes get lost in chats?</li>
              <li style={styles.questionItem}>Why does obstacle detection stop at detection?</li>
              <li style={styles.questionItem}>Why can't multiple tasks run the way I need them to?</li>
            </ul>
          </div>

          {/* Box 2: Exploration */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Then comes exploration.</h3>
            <p style={styles.para}>
              I break the problem down, think through edge cases, sketch possible solutions, and try to understand what people actually need.
            </p>
          </div>

          {/* Box 3: Build */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Then I build.</h3>
            <p style={styles.para}>
              Using technology and AI-assisted tools, I turn ideas into prototypes and test whether the solution genuinely solves the original problem.
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
  questionList: {
    margin: 0,
    paddingLeft: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  questionItem: {
    fontFamily: '"Lora", serif',
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.7)',
    fontStyle: 'italic',
    lineHeight: 1.5,
  },
  para: {
    fontFamily: '"Lora", serif',
    fontSize: '1.02rem',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.65)',
    margin: 0,
  },
}
