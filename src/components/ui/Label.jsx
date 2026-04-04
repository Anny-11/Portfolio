// src/components/ui/Label.jsx
// Small amber label with a leading line — used in every section header.

export default function Label({ children, center = false }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        justifyContent: center ? 'center' : 'flex-start',
      }}
    >
      <div style={{ width: '24px', height: '1px', background: '#D4A96A', flexShrink: 0 }} />
      <span
        style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          color: '#D4A96A',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
    </div>
  )
}
