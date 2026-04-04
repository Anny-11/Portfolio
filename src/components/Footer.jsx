// src/components/Footer.jsx

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        padding: '2rem clamp(1.5rem, 5vw, 4rem)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={styles.text}>© 2025 Anny. All rights reserved.</span>

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
