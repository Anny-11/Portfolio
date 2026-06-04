// src/components/Contact.jsx
import { useState } from 'react'
import useInView from '../hooks/useInView'
import Label from './ui/Label'
import CornerCard from './ui/CornerCard'

const CONTACT_LINKS = [
  { label: 'Email', value: 'varshv8@gmail.com', href: 'mailto:varshv8@gmail.com', icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/varshini1116/', href: 'https://linkedin.com/in/varshini1116/', icon: '↗' },
]

export default function Contact() {
  const [ref, visible] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSent(true)

    // Trigger local mail client to actually prepare the email
    const recipient = 'varshv8@gmail.com'
    const subject = `Portfolio Contact from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const set = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(30px)',
    transition: `all 0.7s ${delay}s ease`,
  })

  return (
    <section
      id="contact"
      style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem', ...fadeStyle(0) }}>
          <Label center>Get In Touch</Label>

          <h2 style={styles.heading}>
            Let's have a conversation<br />
            <em style={{ color: '#D4A96A' }}>worth having.</em>
          </h2>

          <p style={styles.sub}>
            Whether it's an internship, a collaboration, or just a good problem
            to think through together — reach out.
          </p>

          {/* Links row */}
          <div style={styles.linksRow}>
            {CONTACT_LINKS.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                style={styles.link}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A96A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <span style={{ color: '#D4A96A' }}>{icon}</span>
                {value}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={fadeStyle(0.2)}>
          <CornerCard>
            {/* Success banner */}
            {sent && (
              <div style={styles.successBanner}>
                Message sent — I'll get back to you soon.
              </div>
            )}

            {/* Name + Email row */}
            <div className="form-two-col" style={{ marginBottom: '1rem' }}>
              <div>
                <input
                  className="form-input"
                  placeholder="Name"
                  value={form.name}
                  onChange={set('name')}
                />
                {errors.name && <p style={styles.err}>{errors.name}</p>}
              </div>
              <div>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={set('email')}
                />
                {errors.email && <p style={styles.err}>{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.5rem' }}>
              <textarea
                className="form-input form-textarea"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => {
                  set('message')(e)
                  // Auto-resizing logic
                  e.target.style.height = 'auto'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }}
              />
              {errors.message && <p style={styles.err}>{errors.message}</p>}
            </div>

            {/* Submit */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={handleSubmit}
                style={{
                  ...styles.submitBtn,
                  background: sent ? '#7EB8A4' : '#D4A96A',
                }}
                onMouseEnter={(e) => !sent && (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                {sent ? '✓ Sent!' : 'Send Message'}
              </button>
            </div>
          </CornerCard>
        </div>
      </div>

      <style>{`
        .form-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-textarea {
          resize: none;
          min-height: 120px;
          max-height: 300px;
          overflow-y: auto;
          box-sizing: border-box;
        }
        .form-textarea::-webkit-scrollbar {
          width: 6px;
        }
        .form-textarea::-webkit-scrollbar-thumb {
          background: rgba(212,169,106,0.3);
          border-radius: 4px;
        }
        @media (max-width: 540px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Styles ─────────────────────────────────────────────── */
const styles = {
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#fff',
    margin: '1rem 0 0.75rem',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  sub: {
    fontFamily: '"Lora", serif',
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.45)',
    fontStyle: 'italic',
    marginTop: '0.5rem',
  },
  linksRow: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2rem 0 0',
  },
  link: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    letterSpacing: '0.1em',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'color 0.2s',
  },
  successBanner: {
    background: 'rgba(126,184,164,0.12)',
    border: '1px solid rgba(126,184,164,0.3)',
    borderRadius: '2px',
    padding: '0.85rem 1rem',
    marginBottom: '1.5rem',
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.72rem',
    letterSpacing: '0.08em',
    color: '#7EB8A4',
    textAlign: 'center',
  },
  err: {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.6rem',
    color: '#e07070',
    marginTop: '0.4rem',
    letterSpacing: '0.06em',
  },
  submitBtn: {
    padding: '0.9rem 2.5rem',
    color: '#0A0A0A',
    border: 'none',
    cursor: 'pointer',
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    borderRadius: '2px',
  },
}
