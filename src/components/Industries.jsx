import { INDUSTRIES } from '../data/data'
import useInView from '../hooks/useInView'

export default function Industries() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="industries" className="section" style={{ background: '#fff' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Industries</span>
          <h2>
            Built for <span>Every Sector</span>
          </h2>
          <p>
            Deep domain expertise across 12+ verticals means we speak your industry's language.
          </p>
        </div>

        <div
          className={`fade-up${visible ? ' visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
          }}
        >
          {INDUSTRIES.map(({ name, icon }) => (
            <div
              key={name}
              className="card"
              style={{
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '24px' }}>{icon}</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#0A0F0D' }}>{name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}