import HeroInner from '../components/HeroInner'

const stats = [
  { num:'—', label:'Participants Supported' },
  { num:'—', label:'Programmes Delivered' },
  { num:'—', label:'Volunteers Engaged' },
  { num:'—', label:'Communities Reached' },
  { num:'—', label:'Partnerships Established' },
]

const areas = [
  { title:'Personal Development & Leadership', desc:'Building the confidence, skills, and character to lead in every area of life. We measure growth in identity, purpose, and decision-making.' },
  { title:'Career & Financial Empowerment',    desc:'Equipping individuals to access meaningful employment, build financial stability, and make long-term progress in their careers.' },
  { title:'Community Engagement & Advancement', desc:'Creating ripple effects that extend from the individual into their family, network, and wider community for lasting generational change.' },
]

export default function Impact() {
  return (
    <main style={{ paddingTop:'72px' }}>
      <HeroInner eyebrow="Our Impact" title="Creating Change That Lasts" subtitle="Every person equipped is an opportunity for a family and community to grow." />

      {/* Stats */}
      <section className="section section-green">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow" style={{ color:'#E8C766' }}>Numbers</span>
            <div className="gold-line center" />
            <h2 className="section-title white">Our Impact at a Glance</h2>
            <p className="section-subtitle white" style={{ fontStyle:'italic' }}>Figures will be updated as verified data becomes available.</p>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-note">To be updated</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Three Areas</span>
            <div className="gold-line center" />
            <h2 className="section-title">Our Impact Approach</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:'1.5rem' }}>
            {areas.map((a, i) => (
              <div key={i} className="card" style={{ padding:'2.25rem' }}>
                <div className="card-gold-bar" />
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'2.5rem', color:'rgba(212,167,44,0.3)', lineHeight:1, margin:'1.25rem 0 0.75rem', fontWeight:700 }}>0{i+1}</div>
                <h3 style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'0.75rem' }}>{a.title}</h3>
                <p style={{ color:'var(--text-muted)', lineHeight:1.8, fontSize:'0.93rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Stories</span>
            <div className="gold-line center" />
            <h2 className="section-title">Transformation Stories</h2>
            <p className="section-subtitle">Real accounts from people who have been part of the TVI journey.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
            {[0,1,2].map(i => (
              <div key={i} className="testimonial-card" style={{ opacity:0.65, border:'1px dashed rgba(212,167,44,0.2)' }}>
                <span className="quote-mark">"</span>
                <p className="testimonial-text" style={{ fontStyle:'normal', color:'var(--text-muted)', opacity:0.7 }}>Participant story coming soon. Genuine testimonials will be added as they are gathered from programme participants.</p>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(6,59,42,0.1)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-muted)', fontSize:'0.85rem', fontWeight:700 }}>?</div>
                  <div>
                    <p className="author-name" style={{ color:'var(--text-muted)' }}>Participant Name</p>
                    <p className="author-role">Programme, Year</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
