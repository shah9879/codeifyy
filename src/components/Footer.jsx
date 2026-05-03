import { useState } from 'react'
import { SOCIAL_LINKS } from '../data/data'

const CONTACT_SUBJECTS = [
  'Custom Web Development',
  'Mobile App Development',
  'eCommerce Development',
  'CMS / WordPress',
  'AI / Chatbot Development',
  'ERP / CRM Solution',
  'Staff Augmentation',
  'General Inquiry',
]

const FOOTER_LINKS = ['Services', 'Industries', 'Solutions', 'Case Studies', 'Blog', 'Careers']

const CONTACT_INFO = [
  { icon: '📧', val: 'hello@codeifyy.com' },
  { icon: '📞', val: '+92 300 000 0000' },
  { icon: '📍', val: 'Karachi, Pakistan' },
]

const TRUST_BADGES = [
  { ico: '⭐', title: 'Clutch 4.9',   sub: '80+ Reviews' },
  { ico: '🏆', title: 'GoodFirms',    sub: 'Top Company' },
  { ico: '🔒', title: 'ISO 27001',    sub: 'Certified' },
  { ico: '✅', title: 'SOC 2',        sub: 'Compliant' },
]

export default function Footer() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    company: '', subject: '', message: '',
  })

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.message) return
    setSubmitted(true)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    color: '#fff',
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    fontFamily: 'inherit',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: '12px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.5)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <footer id="contact" style={{ background: '#052E16', padding: '80px 5vw 36px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

        {/* ── CTA Banner ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #14532D, #16A34A)',
            borderRadius: '20px',
            padding: '52px 56px',
            marginBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: '-50px', right: '-50px',
              width: '280px', height: '280px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
            }}
          />
          <div
            style={{
              position: 'relative', zIndex: 1,
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 3vw, 34px)',
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                }}
              >
                Ready to Build Something Great?
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', maxWidth: '460px' }}>
                Free technical consultation + project estimate within 24 hours. No commitments.
              </p>
            </div>
            <button
              className="btn-white"
              style={{ fontSize: '15px', padding: '14px 32px', flexShrink: 0 }}
              onClick={() => go('cform')}
            >
              Get Free Consultation →
            </button>
          </div>
        </div>

        {/* ── Contact section ── */}
        <div
          id="cform"
          style={{
            display: 'flex',
            gap: '64px',
            marginBottom: '64px',
            flexWrap: 'wrap',
          }}
        >

          {/* Left — info + trust badges */}
          <div style={{ flex: '1 1 300px' }}>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '24px',
                color: '#fff',
                marginBottom: '12px',
              }}
            >
              Let's Talk
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.77,
                marginBottom: '28px',
              }}
            >
              Tell us about your project. We'll respond with a detailed proposal
              and timeline within one business day.
            </p>

            {CONTACT_INFO.map(({ icon, val }) => (
              <div
                key={val}
                style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}
              >
                <span style={{ fontSize: '16px' }}>{icon}</span>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  {val}
                </span>
              </div>
            ))}

            {/* Trust badges */}
            <div
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >
              {TRUST_BADGES.map(({ ico, title, sub }) => (
                <div
                  key={title}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{ico}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>
                      {title}
                    </div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div
            style={{
              flex: '1 1 440px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '18px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: '22px',
                    color: '#fff',
                    marginBottom: '10px',
                  }}
                >
                  Message Received!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7 }}>
                  Our team will reach out within 24 hours. We look forward to connecting with you!
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#fff',
                    marginBottom: '6px',
                  }}
                >
                  Contact Us
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                  {/* Name row */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="firstName"
                        placeholder="John Smith"
                        value={form.firstName}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        name="lastName"
                        placeholder="+1 234 567 8900"
                        value={form.lastName}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label style={labelStyle}>Company / Organisation</label>
                    <input
                      name="company"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>Subject *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: form.subject ? '#fff' : 'rgba(255,255,255,0.4)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    >
                      <option value="" style={{ background: '#052E16' }}>Select a subject</option>
                      {CONTACT_SUBJECTS.map((s) => (
                        <option key={s} value={s} style={{ background: '#052E16' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, minHeight: '96px', resize: 'vertical' }}
                      onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '15px',
                      borderRadius: '10px',
                      background: '#22C55E',
                      color: '#fff',
                      border: 'none',
                      fontFamily: 'inherit',
                      fontWeight: 700,
                      cursor: 'pointer',
                      marginTop: '4px',
                      transition: 'background 0.2s, transform 0.15s',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#16A34A'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#22C55E'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Send Message →
                  </button>

                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    🔒 Your information is kept strictly confidential.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Footer bottom ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px' }}>

          {/* Top row: logo + nav */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '19px',
                color: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Code<span style={{ color: '#22C55E' }}>ifyy</span>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {FOOTER_LINKS.map((l) => (
                <span
                  key={l}
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom row: copyright + social icons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
              © 2025 Codeifyy · All rights reserved.
            </span>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIAL_LINKS.map(({ label, href, color, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = color
                    e.currentTarget.style.borderColor = color
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}