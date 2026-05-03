import { TESTIMONIALS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Testimonials() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Testimonials</span>
          <h2>
            What Our <span>Clients Say</span>
          </h2>
          <p>Don't take our word for it — here's what real clients say.</p>
        </div>

        <div className="grid-3">
          {TESTIMONIALS.map(({ name, role, stars, quote }, i) => (
            <div
              key={name}
              className={`card fade-up d${i + 1}${visible ? ' visible' : ''}`}
              style={{ padding: '28px 24px' }}
            >
              {/* Stars */}
              <div style={{ marginBottom: '14px' }}>
                {Array.from({ length: stars }).map((_, j) => (
                  <span key={j} style={{ color: '#F59E0B', fontSize: '15px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#4B5563',
                  lineHeight: 1.77,
                  fontStyle: 'italic',
                  marginBottom: '20px',
                }}
              >
                "{quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#DCFCE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    color: '#16A34A',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  {name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#0A0F0D' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: '#4B5563' }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}