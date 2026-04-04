// src/components/ui/CornerCard.jsx
// A card with amber corner bracket accents (top-left + bottom-right).
// Wrap any content inside it.

export default function CornerCard({ children, className = '' }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '4px',
        padding: '2.5rem',
      }}
      className={className}
    >
      {/* Top-left corner */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          width: '40px',
          height: '40px',
          borderTop: '2px solid #D4A96A',
          borderLeft: '2px solid #D4A96A',
        }}
      />
      {/* Bottom-right corner */}
      <div
        style={{
          position: 'absolute',
          bottom: '-1px',
          right: '-1px',
          width: '40px',
          height: '40px',
          borderBottom: '2px solid #D4A96A',
          borderRight: '2px solid #D4A96A',
        }}
      />

      {children}
    </div>
  )
}
