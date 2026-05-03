import { AWARDS } from '../data/data'
import useInView from '../hooks/useInView'

export default function Awards() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section-sm" style={{ background: '#fff' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Awards & Recognition</span>
          <h2>
            Recognised by the <span>Best in the Industry</span>
          </h2>
        </div>

        <div className="grid-6">
          {AWARDS.map(({ title, year, emoji }, i) => (
            <div
              key={title}
              className={`fade-up d${Math.min(i + 1, 6)}${visible ? ' visible' : ''}`}
              style={{
                textAlign: 'center',
                padding: '24px 14px',
                borderRadius: '14px',
                border: '1.5px solid #D1FAE5',
                background: '#F0FDF4',
                transition: 'all 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#16A34A'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,163,74,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D1FAE5'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>{emoji}</div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#0A0F0D',
                  marginBottom: '4px',
                  lineHeight: 1.4,
                }}
              >
                {title}
              </div>
              <div style={{ fontSize: '11px', color: '#4B5563', fontWeight: 600 }}>{year}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}