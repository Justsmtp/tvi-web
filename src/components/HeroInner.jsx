export default function HeroInner({ eyebrow, title, subtitle }) {
  return (
    <section className="hero-inner">
      <div className="container">
        <div className="hero-inner-content">
          {eyebrow && <span className="eyebrow" style={{ color:'#E8C766' }}>{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p style={{ marginTop:'1rem' }}>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
