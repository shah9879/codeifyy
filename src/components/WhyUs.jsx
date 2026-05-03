import { WHY_US } from '../data/data'
import useInView from '../hooks/useInView'

export default function WhyUs() {
  const [ref, visible] = useInView(0.1)

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div ref={ref} className="section-head">
          <span className="badge">Why Codeifyy</span>
          <h2>
            The <span>Codeifyy</span> Difference
          </h2>
          <p>
            We're not just a vendor — we're an engineering partner obsessed with your outcome.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid-3">
          {WHY_US.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`card fade-up d${Math.min(i + 1, 6)}${visible ? ' visible' : ''}`}
              style={{ padding: '28px 24px' }}
            >
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{icon}</div>
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
              <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}