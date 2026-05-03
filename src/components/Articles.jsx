import { ARTICLES } from '../data/data'
import useInView from '../hooks/useInView'

export default function Articles() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section-sm" style={{ background: '#fff' }}>
      <div className="section-inner">

        <div ref={ref} className="section-head">
          <span className="badge">Insights</span>
          <h2>
            From the <span>Engineering Blog</span>
          </h2>
          <p>Technical deep-dives, trends, and lessons from the field.</p>
        </div>

        <div className="grid-3">
          {ARTICLES.map(({ tag, emoji, title, date }, i) => (
            <div
              key={title}
              className={`card fade-up d${i + 1}${visible ? ' visible' : ''}`}
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: '110px',
                  background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '44px',
                }}
              >
                {emoji}
              </div>

              {/* Content */}
              <div style={{ padding: '18px 22px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#16A34A',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </span>

                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#0A0F0D',
                    margin: '8px 0 12px',
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#4B5563' }}>{date}</span>
                  <span style={{ fontSize: '13px', color: '#16A34A', fontWeight: 700 }}>Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}