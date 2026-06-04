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
          It starts with a question.
        </h3>
        
        {/* Questions Grid */}
        <div style={styles.questionsGrid}>
          <div style={styles.questionCard}>
            <span style={styles.questionNum}>?</span>
            <p style={styles.questionText}>"Why do notes get lost in chats?"</p>
          </div>
          <div style={styles.questionCard}>
            <span style={styles.questionNum}>?</span>
            <p style={styles.questionText}>"Why does obstacle detection stop at detection?"</p>
          </div>
          <div style={styles.questionCard}>
            <span style={styles.questionNum}>?</span>
            <p style={styles.questionText}>"Why can't multiple tasks run the way I need them to?"</p>
          </div>
        </div>

        {/* Process Flow */}
        <div style={styles.flowGrid}>
          <div style={styles.flowCol}>
            <h4 style={styles.stepTitle}>Then comes exploration.</h4>
            <p style={styles.para}>
              I break the problem down, think through edge cases, sketch possible solutions, and try to understand what people actually need.
            </p>
          </div>
          
          <div style={styles.flowCol}>
            <h4 style={styles.stepTitle}>Then I build.</h4>
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
  questionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  questionCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '4px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  questionNum: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    color: '#D4A96A',
    opacity: 0.5,
    fontWeight: 600,
    lineHeight: 1,
  },
  questionText: {
    fontFamily: '"Lora", serif',
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.6,
    fontStyle: 'italic',
    margin: 0,
  },
  flowGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '3rem',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '3rem',
  },
  flowCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  stepTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  para: {
    fontFamily: '"Lora", serif',
    fontSize: '1rem',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.6)',
    margin: 0,
  },
}
