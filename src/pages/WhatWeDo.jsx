import { Link } from 'react-router-dom'
import HeroInner from '../components/HeroInner'

const pillars = [
  { title:'Faith & Identity',          desc:'Helping individuals develop a clear sense of identity, purpose, and personal values. We explore what it means to know who you are and live intentionally from that place.', quote:'"Know who you are."', bg:'section-ivory' },
  { title:'Financial Empowerment',     desc:'Equipping people with the knowledge to build wealth, manage money, and create financial stability practically and sustainably for the long term.', quote:'"Build for the future."', bg:'section-white' },
  { title:'Family & Relationships',    desc:'Supporting stronger relationships, healthy communication, and positive family environments through practical, evidence-informed content.', quote:'"Strengthen the foundation."', bg:'section-ivory' },
  { title:'Career & Enterprise',       desc:'Supporting employability, career progression, and entrepreneurship equipping individuals with the skills and exposure to move their careers forward.', quote:'"Progress on purpose."', bg:'section-white' },
  { title:'Leadership Development',    desc:'Developing discipline, confidence, communication, and influence helping individuals step into leadership roles in every area of their lives.', quote:'"Lead from within."', bg:'section-ivory' },
]

const delivery = [
  { title:'Practical Workshops & Seminars', desc:'Hands-on learning experiences that translate knowledge into practical action. Sessions are interactive, relevant, and designed to create immediate takeaways.' },
  { title:'Mentorship & Personal Development', desc:'One-to-one and group mentoring that connects participants with experienced guides who support their growth journey over time.' },
  { title:'Strategic Partnerships & Community Initiatives', desc:'Collaboration with organisations, institutions, and community bodies to widen reach, pool resources, and create sustainable impact.' },
]

export default function WhatWeDo() {
  return (
    <main style={{ paddingTop:'72px' }}>
      <HeroInner eyebrow="Our Approach" title="How We Equip and Empower" subtitle="A holistic approach to personal growth, leadership, and community advancement." />

      {/* Journey */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">The Development Journey</span>
            <div className="gold-line center" />
            <h2 className="section-title">From Discovery to Impact</h2>
            <p className="section-subtitle">We believe true development involves the whole person. Here's how we structure the journey.</p>
          </div>
          <div style={{ background:'var(--ivory)', borderRadius:'12px', padding:'3rem', border:'1px solid var(--border)' }}>
            <div className="process-row" style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0' }}>
              {[['01','Discover','Understand identity, purpose, and potential.'],['02','Develop','Build knowledge, skills, and mindset.'],['03','Equip','Workshops, mentorship, tools.'],['04','Lead','Step into leadership with confidence.'],['05','Impact','Create change in community.']].map(([n,t,d],i,arr) => (
                <div key={i} className="process-step" style={{ flex:'1', minWidth:'130px', textAlign:'center', padding:'1.5rem 1rem', position:'relative' }}>
                  <span className="process-num">{n}</span>
                  <h4 style={{ fontWeight:800, color:'var(--green-primary)', fontSize:'1rem', marginBottom:'0.35rem' }}>{t}</h4>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>{d}</p>
                  {i < arr.length-1 && <span style={{ position:'absolute', right:'-10px', top:'40%', color:'var(--gold)', fontSize:'1.25rem', fontWeight:700 }}>→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Core Pillars</span>
            <div className="gold-line center" />
            <h2 className="section-title">Five Pillars of Transformation</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'5rem' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center', direction: i%2===1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction:'ltr' }}>
                  <span className="eyebrow">{`0${i+1}`}</span>
                  <div className="gold-line" />
                  <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800, color:'var(--green-primary)', lineHeight:1.2, marginBottom:'1rem' }}>{p.title}</h2>
                  <p style={{ color:'var(--text-muted)', lineHeight:1.85, marginBottom:'1.5rem' }}>{p.desc}</p>
                  <Link to="/programmes" className="btn btn-green" style={{ padding:'0.7rem 1.5rem', fontSize:'0.9rem' }}>Explore Programmes</Link>
                </div>
                <div style={{ direction:'ltr' }}>
                  <div className="img-block" style={{ aspectRatio:'4/3', borderRadius:'12px' }}>
                    <div className="img-block-overlay" />
                    <div className="img-block-text"><span className="serif-lg">{p.quote}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section section-green">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow" style={{ color:'#E8C766' }}>How We Deliver</span>
            <div className="gold-line center" />
            <h2 className="section-title white">Our Delivery Model</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
            {delivery.map((d, i) => (
              <div key={i} style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(212,167,44,0.2)', borderRadius:'12px', padding:'2.25rem', borderTop:'3px solid var(--gold)' }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'2rem', color:'rgba(212,167,44,0.35)', lineHeight:1, marginBottom:'1rem' }}>0{i+1}</div>
                <h3 style={{ color:'#fff', fontWeight:800, fontSize:'1.05rem', marginBottom:'0.75rem' }}>{d.title}</h3>
                <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.92rem', lineHeight:1.8 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
