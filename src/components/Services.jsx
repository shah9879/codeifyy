import { useState } from 'react'
import { SERVICES } from '../data/data'
import useInView from '../hooks/useInView'

export default function Services() {
  const [active, setActive] = useState(0)
  const [ref, visible] = useInView(0.1)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="section" style={{ background: '#F0FDF4' }}>
      <div className="section-inner">

        {/* Heading */}
        <div ref={ref} className="section-head">
          <span className="badge">Services</span>
          <h2>
            Full-Lifecycle <span>Development Services</span>
          </h2>
          <p>
            From idea to production-ready — we cover the entire software development lifecycle.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          {SERVICES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                border: `1.5px solid ${active === i ? '#16A34A' : '#D1FAE5'}`,
                background: active === i ? '#16A34A' : '#fff',
                color: active === i ? '#fff' : '#4B5563',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* Service detail panel */}
        <div className="card" style={{ padding: '36px 40px', background: '#fff' }}>
          <div className="flex-row" style={{ alignItems: 'flex-start', gap: '48px' }}>

            {/* Left info */}
            <div style={{ flex: '1 1 38%' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {SERVICES[active].icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: '24px',
                  color: '#0A0F0D',
                  marginBottom: '12px',
                }}
              >
                {SERVICES[active].title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#4B5563',
                  lineHeight: 1.77,
                  marginBottom: '24px',
                }}
              >
                We deliver high-performance{' '}
                {SERVICES[active].title.toLowerCase()} solutions tailored to your
                business goals — clean code, documented APIs, and scalable
                architecture from day one.
              </p>

              {/* Mini stats */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                {[['2wks', 'First Sprint'], ['24h', 'Response Time']].map(([val, label]) => (
                  <div
                    key={label}
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      background: '#F0FDF4',
                      borderRadius: '10px',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 800,
                        fontSize: '22px',
                        color: '#16A34A',
                      }}
                    >
                      {val}
                    </div>
                    <div style={{ fontSize: '11px', color: '#4B5563', fontWeight: 600, marginTop: '3px' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary" onClick={() => go('contact')}>
                Discuss Your Project →
              </button>
            </div>

            {/* Right — service items */}
            <div
              style={{
                flex: '1 1 58%',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
              }}
            >
              {SERVICES[active].items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    background: '#F0FDF4',
                    borderRadius: '8px',
                    border: '1px solid #D1FAE5',
                  }}
                >
                  <span style={{ color: '#16A34A', fontWeight: 800, fontSize: '12px', flexShrink: 0 }}>
                    ✓
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#0A0F0D', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}