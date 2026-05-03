import { useState, useEffect } from 'react'
import { STATS } from '../data/data'
import useInView from '../hooks/useInView'

function AnimatedCounter({ to, suffix }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView(0.5)

  useEffect(() => {
    if (!visible) return
    let current = 0
    const step = Math.ceil(to / 60)
    const timer = setInterval(() => {
      current += step
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 25)
    return () => clearInterval(timer)
  }, [visible, to])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section-sm" style={{ background: '#16A34A' }}>
      <div className="section-inner">
        <div ref={ref} className="grid-4">
          {STATS.map(({ to, suffix, label }, i) => (
            <div
              key={label}
              className={`fade-up d${i + 1}${visible ? ' visible' : ''}`}
              style={{
                textAlign: 'center',
                padding: '32px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: '52px',
                  color: '#fff',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter to={to} suffix={suffix} />
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginTop: '6px',
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}