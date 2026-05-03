import { useState } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

const NAV_LINKS = ['Services', 'Industries', 'Solutions', 'Work', 'Contact']

export default function Navbar() {
  const { scrolled } = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #D1FAE5' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 5vw',
      }}
    >
      <style>{`
        .nav-link {
          color: #4B5563;
          font-size: 14px;
          font-weight: 600;
          padding: 4px 0;
          position: relative;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 2px;
          background: #16A34A;
          transition: width 0.2s;
        }
        .nav-link:hover { color: #16A34A; }
        .nav-link:hover::after { width: 100%; }

        .mobile-menu {
          display: none;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0A0F0D;
          border-radius: 2px;
          transition: all 0.2s;
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu.open {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px 0 20px;
            border-top: 1px solid #D1FAE5;
            margin-top: 4px;
          }
          .mobile-menu .nav-link {
            font-size: 15px;
            padding: 10px 0;
          }
          .mobile-menu .btn-primary {
            width: 100%;
            justify-content: center;
            margin-top: 8px;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: '21px',
            letterSpacing: '-0.02em',
            color: '#0A0F0D',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Code<span style={{ color: '#16A34A' }}>ifyy</span>
        </div>

        {/* Desktop links */}
        <div
          className="nav-links-desktop"
          style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
        >
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => go(l)}>
              {l}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '13px' }}
            onClick={() => go('Contact')}
          >
            Free Consultation
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <button key={l} className="nav-link" onClick={() => go(l)}>
            {l}
          </button>
        ))}
        <button className="btn-primary" onClick={() => go('Contact')}>
          Free Consultation
        </button>
      </div>
    </nav>
  )
}