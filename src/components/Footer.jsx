// src/components/Footer.jsx

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="footer-container">
        <span style={styles.text}>© Anny. All rights reserved.</span>

        {/* Back to top */}
        <button
          onClick={scrollTop}
          style={{
            ...styles.text,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'color 0.2s',
            color: 'rgba(255,255,255,0.25)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A96A')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
        >
          Back to top ↑
        </button>

        <span style={styles.text}>Built with curiosity, not credentials.</span>
      </footer>

      <style>{`
        .footer-container {
          padding: 2rem clamp(1.5rem, 5vw, 4rem);
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
            padding-bottom: 4rem; /* Additional bottom padding for mobile spacing */
          }
        }
      `}</style>
    </>
  )
}

const styles = {
  text: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.65rem',
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.1em',
  },
}
