import { SOLUTIONS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Solutions() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="solutions" className="section" style={{ background: '#F0FDF4' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Solutions</span>
          <h2>
            <span>Enterprise-Grade</span> Business Solutions
          </h2>
          <p>
            Pre-built accelerators and custom engineering to solve your toughest challenges.
          </p>
        </div>

        <div className="grid-3">
          {SOLUTIONS.map(({ title, emoji, desc }, i) => (
            <div
              key={title}
              className={`card fade-up d${Math.min(i + 1, 6)}${visible ? ' visible' : ''}`}
              style={{ padding: '28px 24px', background: '#fff' }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  background: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px',
                }}
              >
                {emoji}
              </div>

              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#0A0F0D',
                  marginBottom: '10px',
                }}
              >
                {title}
              </h3>

              <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7, marginBottom: '16px' }}>
                {desc}
              </p>

              <span
                style={{ color: '#16A34A', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
              >
                Learn more →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}