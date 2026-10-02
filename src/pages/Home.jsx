import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Faith & Identity',
    desc: 'Helping individuals discover their identity, strengthen their values, and live with purpose.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Financial Empowerment',
    desc: 'Building financial knowledge, healthy money habits, and pathways to financial stability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Family & Relationships',
    desc: 'Developing healthy relationships, communication, and stronger family foundations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Career & Enterprise',
    desc: 'Equipping individuals with skills and opportunities to progress in employment and entrepreneurship.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    title: 'Leadership Development',
    desc: 'Building confidence, discipline, communication, and leadership capacity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

const programmes = [
  { num:'01', title:'Emerge: Financial Fitness',      desc:'Develop practical financial skills and the confidence to make informed financial decisions.' },
  { num:'02', title:'Emerge: Career Acceleration',    desc:'Prepare for meaningful employment, professional growth, and long-term career development.' },
  { num:'03', title:'Emerge: Faith & Identity',       desc:'Explore personal identity, values, purpose, and the role of faith in everyday life.' },
  { num:'04', title:'Emerge: Family & Relationships', desc:'Build the knowledge and skills to nurture healthy relationships and stronger families.' },
  { num:'05', title:'Emerge: Leadership Development', desc:'Build the character, confidence, and practical skills to lead and make a positive difference.' },
]

const involve = [
  { title:'Join a Programme', desc:'Take part in a structured development programme and begin your journey.', to:'/programmes', cta:'Explore Programmes' },
  { title:'Volunteer',        desc:'Share your time and experience to support our programmes.', to:'/get-involved', cta:'Become a Volunteer', img:'/img-tvi3.jpg' },
  { title:'Partner With Us',  desc:'Collaborate as an organisation to expand opportunities.', to:'/get-involved', cta:'Become a Partner' },
  { title:'Sponsor',          desc:'Help us reach more communities and deliver more programmes.', to:'/get-involved', cta:'Sponsor a Programme' },
]

export default function Home() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <style>{`
        @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes floatDot  { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-8px) scale(1.15)} }
        .pillar-card { transition: all 0.32s cubic-bezier(0.4,0,0.2,1); }
        .pillar-card:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 48px rgba(2,39,29,0.13) !important; border-color: rgba(212,167,44,0.4) !important; }
        .pillar-card:hover .card-gold-bar { width: 100%; }
        .prog-card-home { transition: all 0.32s ease; }
        .prog-card-home:hover { background: rgba(255,255,255,0.12) !important; transform: translateY(-6px); box-shadow: 0 16px 48px rgba(2,39,29,0.3); }
        .involve-card { transition: all 0.32s ease; }
        .involve-card:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 48px rgba(2,39,29,0.1) !important; }
        .btn-deep-gold { background: linear-gradient(135deg,#B8860B,#D4A72C) !important; color: #0a0a0a !important; font-weight: 800 !important; box-shadow: 0 4px 20px rgba(184,134,11,0.35) !important; border-radius: 100px !important; }
        .btn-deep-gold:hover { transform: translateY(-3px) !important; box-shadow: 0 10px 32px rgba(184,134,11,0.45) !important; }
        .btn-float { box-shadow: 0 6px 24px rgba(2,39,29,0.18); border-radius: 100px !important; }
        .btn-float:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(2,39,29,0.22) !important; }
      `}</style>

      {/* ── HERO ───────────────────────────────────── */}
      <section style={{ background:'linear-gradient(135deg,#031F17 0%,#063B2A 60%,#02271D 100%)', minHeight:'92vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', padding:'6rem 0 5rem' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 70% at 75% 50%, rgba(212,167,44,0.07), transparent)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg,transparent,#D4A72C,transparent)' }} />
        {/* floating decorative dots */}
        <div style={{ position:'absolute', top:'18%', right:'8%', width:'60px', height:'60px', borderRadius:'50%', border:'1.5px solid rgba(212,167,44,0.2)', animation:'floatDot 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'20%', left:'5%', width:'36px', height:'36px', borderRadius:'50%', background:'rgba(212,167,44,0.07)', animation:'floatDot 9s ease-in-out infinite 2s', pointerEvents:'none' }} />

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <span className="eyebrow" style={{ color:'#E8C766' }}>Leadership &amp; Empowerment Charity</span>
              <h1 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:900, fontSize:'clamp(2.8rem,6vw,4.2rem)', color:'#fff', lineHeight:1.08, letterSpacing:'-0.025em', marginBottom:'1.5rem' }}>
                Raising <span style={{ color:'#D4A72C' }}>Pioneers,</span><br/>Not Participants
              </h1>
              <p style={{ fontSize:'1.2rem', color:'#D4A72C', fontWeight:600, marginBottom:'0.75rem' }}>
                Equipping individuals to lead the way across faith, finance, family, and career.
              </p>
              <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.7)', lineHeight:1.85, maxWidth:'520px', marginBottom:'2.5rem' }}>
                The Vanguard Initiative is a leadership and empowerment charity committed to developing individuals—particularly young adults from underrepresented backgrounds—into confident, capable, and purpose-driven leaders.
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <Link to="/programmes" className="btn btn-deep-gold btn-float">Explore Our Programmes</Link>
                <Link to="/donate" className="btn btn-outline-white btn-float">Support the Vision</Link>
              </div>
            </div>
            <div style={{ display:'flex', justifyContent:'center', animation:'floatCard 6s ease-in-out infinite' }}>
              <div style={{ width:'340px', height:'440px', borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(212,167,44,0.3)', boxShadow:'0 24px 64px rgba(2,39,29,0.5)', position:'relative' }}>
                <img src="/img-tvi1.jpg" alt="TVI community" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(3,31,23,0.85) 0%, rgba(3,31,23,0.2) 60%, transparent 100%)' }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2rem', textAlign:'center' }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.25rem', color:'#E8C766', lineHeight:1.4, marginBottom:'0.75rem' }}>"Find your why."</div>
                  <div style={{ width:'40px', height:'2px', background:'linear-gradient(90deg,#D4A72C,#E8C766)', margin:'0 auto 0.75rem' }} />
                  <div style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.65)', fontWeight:600 }}>— Yemi Adesanya, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────── */}
      <section className="section section-ivory">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Our Belief</span>
              <div className="gold-line" />
              <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:800, color:'var(--green-primary)', letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'1.25rem' }}>
                Everyone Has Potential.<br/>Everyone Deserves Opportunity.
              </h2>
              <p style={{ color:'var(--text-muted)', lineHeight:1.85, marginBottom:'1rem' }}>
                We believe that everyone carries potential, but not everyone is given the tools, exposure, or environment to fully realise it. That's where we come in.
              </p>
              <p style={{ color:'var(--text-muted)', lineHeight:1.85, marginBottom:'2rem' }}>
                Through practical programmes, transformative workshops, and strategic partnerships, we help people move from uncertainty to clarity, from limitation to leadership.
              </p>
              <Link to="/about" className="btn btn-green btn-float">Read Our Story</Link>
            </div>
            <div style={{ borderRadius:'16px', overflow:'hidden', aspectRatio:'4/5', position:'relative', boxShadow:'0 16px 48px rgba(2,39,29,0.14)' }}>
              <img src="/img-tvi2.jpg" alt="Leadership development" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,59,42,0.6) 0%, transparent 60%)' }} />
              <div style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', textAlign:'center', width:'100%', padding:'0 1.5rem' }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.3rem', color:'#E8C766', display:'block', lineHeight:1.4 }}>"From limitation<br/>to leadership."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ───────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Focus Areas</span>
            <div className="gold-line center" />
            <h2 className="section-title">Empowering People in Every Area of Life</h2>
            <p className="section-subtitle">Five pillars of development designed to create whole-person transformation.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:'1.5rem' }}>
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card" style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'14px', padding:'2rem', boxShadow:'0 2px 12px rgba(2,39,29,0.05)', overflow:'hidden', position:'relative', display:'flex', flexDirection:'column' }}>
                <div className="card-gold-bar" style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg,#D4A72C,#E8C766)', width:0, transition:'width 0.4s ease' }} />
                <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:'rgba(212,167,44,0.1)', border:'1.5px solid rgba(212,167,44,0.25)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.1rem', color:'var(--gold)', flexShrink:0 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize:'1rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'0.55rem' }}>{p.title}</h3>
                <p style={{ color:'var(--text-muted)', fontSize:'0.88rem', lineHeight:1.75, marginBottom:'1rem', flex:1 }}>{p.desc}</p>
                <Link to="/programmes" style={{ color:'var(--gold-dark)', fontWeight:700, fontSize:'0.83rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'0.3rem', marginTop:'auto' }}>
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGE PROGRAMMES ──────────────────────── */}
      <section className="section section-green">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow" style={{ color:'#E8C766' }}>EMERGE Series</span>
            <div className="gold-line center" />
            <h2 className="section-title white">Discover the EMERGE Programme Series</h2>
            <p className="section-subtitle white">Practical learning. Purposeful growth. Leadership for life.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:'1.5rem' }}>
            {programmes.map((p, i) => (
              <div key={i} className="prog-card-home" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(212,167,44,0.2)', borderRadius:'14px', padding:'2rem', display:'flex', flexDirection:'column' }}>
                {/* Bold gold number */}
                <div style={{ fontFamily:"'Manrope',sans-serif", fontSize:'3rem', fontWeight:900, color:'#D4A72C', lineHeight:1, marginBottom:'1rem', letterSpacing:'-0.03em', flexShrink:0 }}>{p.num}</div>
                <h3 style={{ color:'#fff', fontWeight:800, fontSize:'1.05rem', marginBottom:'0.6rem' }}>{p.title}</h3>
                <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.9rem', lineHeight:1.75, marginBottom:'1.25rem', flex:1 }}>{p.desc}</p>
                <Link to="/programmes" className="btn btn-deep-gold btn-float" style={{ padding:'0.6rem 1.4rem', fontSize:'0.85rem', alignSelf:'flex-start', marginTop:'auto' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER PREVIEW ────────────────────────── */}
      <section className="section section-ivory">
        <div className="container">
          <div className="two-col">
            <div style={{ borderRadius:'16px', overflow:'hidden', aspectRatio:'4/5', position:'relative', boxShadow:'0 16px 48px rgba(2,39,29,0.14)' }}>
              <img src="/img-tvi4.jpg" alt="Yemi Adesanya" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(3,31,23,0.75) 0%, transparent 55%)' }} />
              <div style={{ position:'absolute', bottom:'2rem', left:0, right:0, textAlign:'center', padding:'0 1.5rem' }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.3rem', color:'#E8C766', display:'block', lineHeight:1.4, marginBottom:'0.4rem' }}>"A vision born<br/>from experience."</span>
                <span style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.6)', fontWeight:600 }}>— Yemi Adesanya, Founder</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">Our Story</span>
              <div className="gold-line" />
              <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800, color:'var(--green-primary)', letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'1.25rem' }}>A Vision Born From Experience</h2>
              <p style={{ color:'var(--text-muted)', lineHeight:1.85, marginBottom:'1rem' }}>
                The Vanguard Initiative was born from a personal journey of searching for identity, finding purpose, and recognising the power of the right environment and guidance.
              </p>
              <blockquote style={{ borderLeft:'3px solid var(--gold)', paddingLeft:'1.25rem', margin:'1.5rem 0', fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.1rem', color:'var(--green-primary)', lineHeight:1.6 }}>
                "The two most important days in your life are the day you are born and the day you find out why." — Mark Twain
              </blockquote>
              <p style={{ color:'var(--text-muted)', lineHeight:1.85, marginBottom:'2rem' }}>
                Today, that journey has become a commitment to helping others discover their potential, take ownership of their future, and become leaders in their communities.
              </p>
              <Link to="/about" className="btn btn-green btn-float">Read Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ───────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Join the Movement</span>
            <div className="gold-line center" />
            <h2 className="section-title">Be Part of the Movement</h2>
            <p className="section-subtitle">There are many ways to contribute to the TVI vision.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.5rem' }}>
            {involve.map((item, i) => (
              <div key={i} className="involve-card" style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'14px', overflow:'hidden', boxShadow:'0 2px 12px rgba(2,39,29,0.05)', display:'flex', flexDirection:'column' }}>
                {/* Image band for volunteer card */}
                {item.img && (
                  <div style={{ height:'140px', overflow:'hidden', position:'relative', flexShrink:0 }}>
                    <img src={item.img} alt={item.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    <div style={{ position:'absolute', inset:0, background:'rgba(6,59,42,0.35)' }} />
                  </div>
                )}
                <div style={{ padding:'1.75rem', textAlign:'center', display:'flex', flexDirection:'column', flex:1 }}>
                  {!item.img && (
                    <div style={{ width:'44px', height:'44px', borderRadius:'50%', background:'rgba(212,167,44,0.1)', border:'1.5px solid rgba(212,167,44,0.25)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1rem', flexShrink:0 }}>
                      <div style={{ width:'14px', height:'14px', borderRadius:'50%', background:'var(--gold)' }} />
                    </div>
                  )}
                  <h3 style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--green-primary)', margin:'0 0 0.6rem' }}>{item.title}</h3>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.88rem', lineHeight:1.75, marginBottom:'1.25rem', flex:1 }}>{item.desc}</p>
                  <Link to={item.to} className="btn btn-green btn-float" style={{ padding:'0.65rem 1.4rem', fontSize:'0.86rem', justifyContent:'center', alignSelf:'stretch' }}>{item.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────── */}
      <section style={{ background:'linear-gradient(135deg,#063B2A,#02271D)', padding:'6rem 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg,transparent,#D4A72C 50%,transparent)' }} />
        {/* floating rings */}
        <div style={{ position:'absolute', top:'50%', left:'6%', transform:'translateY(-50%)', width:'80px', height:'80px', borderRadius:'50%', border:'1px solid rgba(212,167,44,0.12)', animation:'floatDot 8s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'30%', right:'6%', width:'50px', height:'50px', borderRadius:'50%', border:'1px solid rgba(212,167,44,0.15)', animation:'floatDot 10s ease-in-out infinite 3s', pointerEvents:'none' }} />
        <div className="container-sm" style={{ position:'relative', zIndex:1 }}>
          <span className="eyebrow" style={{ color:'#E8C766', justifyContent:'center' }}>The Future</span>
          <div className="gold-line center" />
          <h2 style={{ fontWeight:900, fontSize:'clamp(1.9rem,4vw,3rem)', color:'#fff', letterSpacing:'-0.02em', lineHeight:1.15, marginBottom:'1.25rem' }}>
            The Future Is Built by Those We Equip Today.
          </h2>
          <p style={{ fontSize:'1.1rem', color:'rgba(255,255,255,0.7)', marginBottom:'2.5rem', lineHeight:1.8 }}>
            Be part of a movement committed to building people, equipping leaders, and raising pioneers.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/get-involved" className="btn btn-deep-gold btn-float">Get Involved</Link>
            <Link to="/donate" className="btn btn-outline-white btn-float">Donate Today</Link>
          </div>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg,transparent,#D4A72C 50%,transparent)' }} />
      </section>

    </main>
  )
}
