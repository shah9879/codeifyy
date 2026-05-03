import { useState } from 'react'
import { FAQS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Faqs() {
  const [open, setOpen] = useState(null)
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section-sm" style={{ background: '#F0FDF4' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">FAQs</span>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>Everything you need to know before getting started.</p>
        </div>

        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className={`fade-up d${Math.min(i + 1, 5)}${visible ? ' visible' : ''}`}
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: `1.5px solid ${open === i ? '#16A34A' : '#D1FAE5'}`,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '17px 22px',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#0A0F0D' }}>
                  {q}
                </span>
                <span
                  style={{
                    color: '#16A34A',
                    fontSize: '22px',
                    fontWeight: 700,
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div
                  style={{
                    padding: '0 22px 18px',
                    fontSize: '14px',
                    color: '#4B5563',
                    lineHeight: 1.77,
                  }}
                >
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}