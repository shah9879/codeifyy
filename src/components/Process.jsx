import { PROCESS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Process() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section-sm" style={{ background: '#F0FDF4' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Our Process</span>
          <h2>
            How We <span>Deliver Excellence</span>
          </h2>
          <p>A 5-step engagement model refined across 150+ projects.</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid #D1FAE5',
          }}
        >
          {PROCESS.map(({ n, title, desc }, i) => (
            <div
              key={n}
              className={`fade-up d${i + 1}${visible ? ' visible' : ''}`}
              style={{
                flex: '1 1 180px',
                padding: '28px 22px',
                background: '#fff',
                borderRight: i < PROCESS.length - 1 ? '1px solid #D1FAE5' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F0FDF4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff'
              }}
            >
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: '13px',
                  color: '#16A34A',
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                }}
              >
                {n}
              </div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#0A0F0D',
                  marginBottom: '8px',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}