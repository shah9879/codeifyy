import { CASE_STUDIES } from '../data/data'
import useInView from '../hooks/useInView'

export default function CaseStudies() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="work" className="section" style={{ background: '#fff' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Case Studies</span>
          <h2>
            Real Results for <span>Real Clients</span>
          </h2>
          <p>
            Measurable outcomes backed by engineering excellence.
          </p>
        </div>

        <div className="grid-3">
          {CASE_STUDIES.map(({ tag, title, result, tech }, i) => (
            <div
              key={title}
              className={`card fade-up d${i + 1}${visible ? ' visible' : ''}`}
              style={{
                padding: '28px 24px',
                background: '#fff',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '4px',
                  background: '#16A34A',
                  borderRadius: '16px 16px 0 0',
                }}
              />

              {/* Tag */}
              <span
                style={{
                  display: 'inline-block',
                  background: '#DCFCE7',
                  color: '#166534',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '14px',
                  letterSpacing: '0.06em',
                }}
              >
                {tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#0A0F0D',
                  marginBottom: '12px',
                  lineHeight: 1.35,
                }}
              >
                {title}
              </h3>

              {/* Result */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  background: '#F0FDF4',
                  borderRadius: '10px',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#16A34A', fontWeight: 800 }}>✓</span>
                <span style={{ fontSize: '13px', color: '#166534', fontWeight: 700 }}>{result}</span>
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      background: '#F3F4F6',
                      color: '#374151',
                      borderRadius: '20px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span style={{ color: '#16A34A', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                View case study →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}