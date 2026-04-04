// src/components/ui/ImageSlot.jsx
// Displays an image if provided, otherwise shows a hatched placeholder.
// Props:
//   src    — imported image or URL (can be null)
//   alt    — alt text
//   accent — hex colour for the hatch pattern
//   height — CSS height string e.g. "180px"
//   style  — extra inline styles on the wrapper

export default function ImageSlot({
  src    = null,
  alt    = '',
  accent = '#D4A96A',
  height = '180px',
  style  = {},
}) {
  const wrapStyle = {
    position: 'relative',
    width: '100%',
    height,
    borderRadius: '4px',
    overflow: 'hidden',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    ...style,
  }

  if (src) {
    return (
      <div style={wrapStyle}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }

  // ── Placeholder: hatched SVG pattern ──
  const patId = `hatch-${accent.replace('#', '')}`
  return (
    <div style={wrapStyle}>
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0, opacity: 0.2 }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patId}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="1" y="1"
              width="16" height="16"
              rx="2"
              fill="none"
              stroke={accent}
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patId})`} />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.18)',
            textTransform: 'uppercase',
          }}
        >
          Add Image
        </span>
      </div>
    </div>
  )
}
