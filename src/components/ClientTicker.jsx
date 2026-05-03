import { CLIENT_LOGOS } from '../data/data'

export default function ClientTicker() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <div style={{ background: '#052E16', padding: '18px 0', overflow: 'hidden' }}>
      <p
        style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: '#4B5A4F',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Trusted by industry leaders worldwide
      </p>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <span
              key={i}
              style={{ fontSize: '14px', fontWeight: 800, color: '#374940', letterSpacing: '0.05em' }}
            >
              {name}
              <span style={{ color: '#16A34A', marginLeft: '24px' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}