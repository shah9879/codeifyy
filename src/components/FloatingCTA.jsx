import useScrollProgress from '../hooks/useScrollProgress'

export default function FloatingCTA() {
  const { showFloat } = useScrollProgress()

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 300,
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        background: '#052E16',
        borderRadius: '50px',
        padding: '10px 14px 10px 20px',
        boxShadow: '0 8px 40px rgba(5, 46, 22, 0.5)',
        border: '1px solid rgba(34, 197, 94, 0.2)',
        opacity: showFloat ? 1 : 0,
        transform: showFloat ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: showFloat ? 'all' : 'none',
        transition: 'opacity 0.35s, transform 0.35s',
      }}
    >
      <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Got a project?
      </span>
      <button
        onClick={() => go('contact')}
        className="btn-primary"
        style={{ borderRadius: '40px', padding: '8px 20px', fontSize: '13px' }}
      >
        Free Quote →
      </button>
    </div>
  )
}