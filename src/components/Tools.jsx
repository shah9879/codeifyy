import { useState } from 'react'
import { TOOLS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Tools() {
  const [active, setActive] = useState('Frontend')
  const [ref, visible] = useInView(0.1)
  const categories = Object.keys(TOOLS)

  return (
    <section className="section-sm" style={{ background: '#F0FDF4' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Tech Stack</span>
          <h2>
            Tools & Technologies <span>We Master</span>
          </h2>
          <p>Best-in-class tooling for every layer of your stack.</p>
        </div>

        {/* Category pills */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '7px 18px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'inherit',
                background: active === cat ? '#16A34A' : '#DCFCE7',
                color: active === cat ? '#fff' : '#166534',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool pills */}
        <div
          className={`fade-up${visible ? ' visible' : ''}`}
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {TOOLS[active].map((tool) => (
            <div
              key={tool}
              style={{
                padding: '12px 24px',
                borderRadius: '40px',
                background: '#fff',
                border: '1.5px solid #D1FAE5',
                fontSize: '14px',
                fontWeight: 700,
                color: '#0A0F0D',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#16A34A'
                e.currentTarget.style.color = '#16A34A'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(22,163,74,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D1FAE5'
                e.currentTarget.style.color = '#0A0F0D'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              {tool}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}