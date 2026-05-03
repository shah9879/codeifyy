import useTyping from '../hooks/useTyping'
import useInView from '../hooks/useInView'

const TYPING_WORDS = ['Scales With You', 'Ships On Time', 'Lasts a Decade', 'Wins Markets']

const DASHBOARD_METRICS = [
  { label: 'Active Sprints',      val: '12 Running',    color: '#16A34A' },
  { label: 'Deploys Today',       val: '4 Successful',  color: '#2563EB' },
  { label: 'Code Coverage',       val: '94.7%',         color: '#166534' },
  { label: 'System Uptime',       val: '99.98%',        color: '#D97706' },
  { label: 'Open Critical Bugs',  val: '0',             color: '#16A34A' },
]

const VELOCITY = [55, 62, 48, 70, 65, 80, 74]

const TRUST_BADGES = [
  ['🔒', 'ISO 27001'],
  ['✅', 'SOC 2 Ready'],
  ['⚡', '5-Day Onboard'],
  ['🌍', '3 Time Zones'],
]

export default function Hero() {
  const typed = useTyping(TYPING_WORDS, 75, 2000)
  const [ref, visible] = useInView(0.05)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '110px 5vw 70px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(155deg, #F0FDF4 0%, #ffffff 65%)',
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid"
        style={{
          position: 'absolute', inset: 0,
          opacity: 0.65, zIndex: 0,
        }}
      />
      {/* Glow blob */}
      <div
        style={{
          position: 'absolute', top: '-18%', right: '-6%',
          width: '640px', height: '640px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.11) 0%, transparent 68%)',
          zIndex: 0,
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div className="flex-row">

          {/* ── Left column ── */}
          <div style={{ flex: '1 1 55%' }}>

            {/* Top badges */}
            <div className={`fade-up${visible ? ' visible' : ''}`} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span className="badge">🚀 Top-Rated Software Partner</span>
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', background: '#F0FDF4',
                  borderRadius: '10px', border: '1.5px solid #D1FAE5',
                }}
              >
                <span style={{ fontSize: '16px' }}>⭐</span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0A0F0D' }}>4.9 / 5.0</div>
                  <div style={{ fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>Clutch · 80+ Reviews</div>
                </div>
              </div>
            </div>

            {/* Headline with typing effect */}
            <h1
              className={`fade-up d1${visible ? ' visible' : ''}`}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5.2vw, 64px)',
                lineHeight: 1.07,
                letterSpacing: '-0.035em',
                color: '#0A0F0D',
                marginBottom: '22px',
              }}
            >
              Software That
              <br />
              <span style={{ color: '#16A34A' }}>{typed}</span>
              <span className="cursor" />
            </h1>

            {/* Subheading */}
            <p
              className={`fade-up d2${visible ? ' visible' : ''}`}
              style={{
                fontSize: '17px', color: '#4B5563',
                lineHeight: 1.77, maxWidth: '520px', marginBottom: '36px',
              }}
            >
              Codeifyy partners with startups, SMEs, and enterprises to deliver
              scalable software, AI-powered systems, and digital transformation —
              on time, every time.
            </p>

            {/* CTAs */}
            <div
              className={`fade-up d3${visible ? ' visible' : ''}`}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
              <button
                className="btn-primary"
                style={{ fontSize: '15px', padding: '14px 32px' }}
                onClick={() => go('contact')}
              >
                Start Your Project →
              </button>
              <button className="btn-outline" onClick={() => go('services')}>
                View Services
              </button>
            </div>

            {/* Trust strip */}
            <div
              className={`fade-up d4${visible ? ' visible' : ''}`}
              style={{
                display: 'flex',
                borderRadius: '12px',
                border: '1.5px solid #D1FAE5',
                overflow: 'hidden',
                background: '#fff',
                width: 'fit-content',
              }}
            >
              {TRUST_BADGES.map(([ico, label], i) => (
                <div
                  key={label}
                  style={{
                    padding: '11px 18px',
                    borderRight: i < TRUST_BADGES.length - 1 ? '1px solid #D1FAE5' : 'none',
                    display: 'flex', alignItems: 'center', gap: '7px',
                  }}
                >
                  <span style={{ fontSize: '13px' }}>{ico}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0A0F0D', whiteSpace: 'nowrap' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — dashboard card ── */}
          <div
            className={`fade-up d2${visible ? ' visible' : ''}`}
            style={{ flex: '1 1 40%', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ width: '100%', maxWidth: '420px', position: 'relative' }}>
              <div
                className="card"
                style={{ padding: '26px', boxShadow: '0 28px 72px rgba(22,163,74,0.13)' }}
              >
                {/* Window chrome */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '20px' }}>
                  {['#EF4444', '#F59E0B', '#22C55E'].map((c) => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                  ))}
                  <div
                    style={{
                      flex: 1, margin: '0 10px', height: '22px',
                      background: '#F0FDF4', borderRadius: '6px',
                      display: 'flex', alignItems: 'center', paddingLeft: '10px',
                    }}
                  >
                    <span style={{ fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                      codeifyy.dev — live dashboard
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                {DASHBOARD_METRICS.map(({ label, val, color }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '10px 0', borderBottom: '1px solid #D1FAE5',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: '#4B5563' }}>{label}</span>
                    <span style={{ fontSize: '13px', fontWeight: 800, color }}>{val}</span>
                  </div>
                ))}

                {/* Velocity chart */}
                <div style={{ marginTop: '16px', background: '#F0FDF4', borderRadius: '10px', padding: '12px 14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#4B5563', marginBottom: '8px' }}>
                    WEEKLY VELOCITY (story pts)
                  </div>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '38px' }}>
                    {VELOCITY.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${(h / 80) * 100}%`,
                          borderRadius: '3px',
                          background: i === VELOCITY.length - 1 ? '#16A34A' : 'rgba(22,163,74,0.25)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute', top: '-14px', right: '-14px',
                  background: '#16A34A', color: '#fff',
                  borderRadius: '12px', padding: '9px 16px',
                  fontSize: '12px', fontWeight: 800,
                  boxShadow: '0 8px 24px rgba(22,163,74,0.4)',
                }}
              >
                AI-Powered ✦
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}