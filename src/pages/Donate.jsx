import { Link } from 'react-router-dom'
import HeroInner from '../components/HeroInner'

const values = [
  {
    title: 'Leadership',
    desc: "We don't just encourage participation—we develop leaders who take responsibility and shape their environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'We uphold high standards in everything we do, ensuring those we serve are equipped to operate at the highest level.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    title: 'Impact',
    desc: 'Our focus is long-term transformation—creating change that extends beyond individuals into families and communities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

const audience = [
  'Young adults seeking direction and purpose.',
  'Individuals looking to enter meaningful employment.',
  'Professionals aiming to grow and scale their careers.',
  'Those who desire personal and leadership development.',
  'People from disadvantaged or underrepresented backgrounds.',
]

export default function About() {
  return (
    <main style={{ paddingTop:'72px' }}>
      <style>{`
        @keyframes floatDot { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-10px) scale(1.1)} }
        @keyframes floatRing { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(8deg)} }
        .btn-deep-gold { background:linear-gradient(135deg,#B8860B,#D4A72C)!important; color:#0a0a0a!important; font-weight:800!important; box-shadow:0 4px 20px rgba(184,134,11,0.35)!important; border-radius:100px!important; }
        .btn-deep-gold:hover { transform:translateY(-3px)!important; box-shadow:0 10px 32px rgba(184,134,11,0.45)!important; }
        .btn-float { box-shadow:0 6px 24px rgba(2,39,29,0.18); border-radius:100px!important; }
        .btn-float:hover { transform:translateY(-3px); box-shadow:0 12px 36px rgba(2,39,29,0.22)!important; }
        .val-card { transition:all 0.32s ease; }
        .val-card:hover { transform:translateY(-8px)!important; box-shadow:0 20px 48px rgba(2,39,29,0.1)!important; }
      `}</style>

      <HeroInner eyebrow="Our Story" title="From Finding Purpose to Helping Others Discover Theirs." subtitle="The story behind The Vanguard Initiative is one of real experience, real transformation, and a real commitment to others." />

      {/* ── FOUNDER'S STORY ── */}
      <section className="section section-white">
        <div className="container-sm">
          <span className="eyebrow">The Founder's Journey</span>
          <div className="gold-line" />
          <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:800, color:'var(--green-primary)', marginBottom:'2rem', lineHeight:1.2 }}>A Vision Born From Experience</h2>
          <div style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.95, display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <p>Growing up, I was always searching for who I was. On the outside, I came from a good home—loving parents, amazing siblings, and a strong foundation. But internally, there was a void. A deep sense of not fully knowing my identity or where I belonged. And because of that, I found myself looking for acceptance in places that could never truly give it.</p>
            <p>I got involved with the wrong crowd—not because I was looking for trouble, but because I was looking for a place to fit in. That search led me down a path of poor decisions, which eventually resulted in my arrest and facing some very serious criminal charges. It was one of the most defining moments of my life. Not because of the situation itself, but because it forced me to confront the reality of where my life was heading.</p>
            <blockquote style={{ borderLeft:'3px solid var(--gold)', paddingLeft:'1.5rem', fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.2rem', color:'var(--green-primary)', lineHeight:1.6 }}>
              "Environment matters. Influence matters. Identity matters."
            </blockquote>
            <p>And in that moment, something shifted. I realised that one of the biggest reasons I found myself in those situations was not just my choices—but what I had surrounded myself with.</p>
            <p>There are many people today who feel that same void I once felt. They're searching for meaning, for purpose, for belonging. I understand that journey—because I've lived it.</p>
            <blockquote style={{ borderLeft:'3px solid var(--gold)', paddingLeft:'1.5rem', fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.2rem', color:'var(--green-primary)', lineHeight:1.6 }}>
              "The two most important days in your life are the day you are born and the day you find out why." — Mark Twain
            </blockquote>
            <p>I am grateful because I found my 'why.' And now, I have committed my life to helping others find theirs.</p>
            <p>Out of this journey, I created youth-focused initiatives, including Leaders in Training (LIT)—a programme for young people aged 13–18. Through mentoring, retreats, character development, and hands-on projects, we helped young people understand what it truly means to lead. I also launched StayLIT, focused on university students—helping them stay grounded, focused, and connected to purpose during a critical stage of life.</p>
            <p>The Vanguard Initiative is the natural evolution of that work. It is built from real experiences, real lessons, and a real desire to see people not just succeed—but lead.</p>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION — redesigned, no top gold line ── */}
      <section className="section section-ivory" style={{ position:'relative', overflow:'hidden' }}>
        {/* floating decorative rings */}
        <div style={{ position:'absolute', top:'10%', right:'4%', width:'90px', height:'90px', borderRadius:'50%', border:'1.5px solid rgba(212,167,44,0.15)', animation:'floatRing 9s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'12%', left:'3%', width:'56px', height:'56px', borderRadius:'50%', background:'rgba(212,167,44,0.05)', animation:'floatDot 11s ease-in-out infinite 2s', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'50%', left:'10%', width:'18px', height:'18px', borderRadius:'50%', background:'rgba(212,167,44,0.2)', animation:'floatDot 7s ease-in-out infinite 1s', pointerEvents:'none' }} />

        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What Drives Us</span>
            <div className="gold-line center" />
            <h2 className="section-title">Our Vision &amp; Mission</h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }}>
            {/* Vision — diagonal split design */}
            <div style={{ position:'relative', borderRadius:'20px', overflow:'hidden', minHeight:'320px', boxShadow:'0 12px 40px rgba(2,39,29,0.14)' }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(140deg, #063B2A 55%, #02271D 100%)' }} />
              {/* diagonal ivory accent */}
              <div style={{ position:'absolute', bottom:0, right:0, width:'45%', height:'100%', background:'rgba(247,244,234,0.05)', clipPath:'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', pointerEvents:'none' }} />
              <div style={{ position:'relative', zIndex:1, padding:'2.5rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.25rem' }}>
                  <div style={{ width:'36px', height:'36px', borderRadius:'8px', background:'rgba(212,167,44,0.15)', border:'1px solid rgba(212,167,44,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  </div>
                  <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:'0.78rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#E8C766' }}>Our Vision</span>
                </div>
                <div style={{ width:'40px', height:'2px', background:'linear-gradient(90deg,#D4A72C,#E8C766)', borderRadius:'2px', marginBottom:'1.25rem' }} />
                <p style={{ color:'rgba(255,255,255,0.88)', lineHeight:1.85, fontSize:'1.02rem' }}>
                  To build a generation of individuals—particularly from underrepresented communities—who are equipped, empowered, and positioned at the forefront of influence across faith, finance, family, and career.
                </p>
              </div>
            </div>

            {/* Mission — light card with green accent left bar */}
            <div style={{ position:'relative', borderRadius:'20px', overflow:'hidden', minHeight:'320px', background:'var(--white)', border:'1px solid rgba(6,59,42,0.1)', boxShadow:'0 12px 40px rgba(2,39,29,0.07)' }}>
              {/* left accent bar */}
              <div style={{ position:'absolute', top:0, left:0, bottom:0, width:'5px', background:'linear-gradient(to bottom, #D4A72C, #063B2A)' }} />
              <div style={{ position:'relative', zIndex:1, padding:'2.5rem 2.5rem 2.5rem 3rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.25rem' }}>
                  <div style={{ width:'36px', height:'36px', borderRadius:'8px', background:'rgba(6,59,42,0.07)', border:'1px solid rgba(6,59,42,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#063B2A" strokeWidth="1.75" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:'0.78rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--gold-dark)' }}>Our Mission</span>
                </div>
                <div style={{ width:'40px', height:'2px', background:'linear-gradient(90deg,#D4A72C,#E8C766)', borderRadius:'2px', marginBottom:'1.25rem' }} />
                <p style={{ color:'var(--text-muted)', lineHeight:1.85, fontSize:'1.02rem' }}>
                  The Vanguard Initiative exists to equip individuals with the tools, knowledge, and confidence to excel in every area of life through transformative programmes, practical workshops, and strategic partnerships that drive long-term personal and community advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section section-white" style={{ position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'8%', right:'5%', width:'70px', height:'70px', borderRadius:'50%', border:'1px solid rgba(212,167,44,0.12)', animation:'floatRing 12s ease-in-out infinite', pointerEvents:'none' }} />
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Who We Serve</span>
            <div className="gold-line center" />
            <h2 className="section-title">Built for Those Who Know There's More</h2>
            <p className="section-subtitle">"We exist for those who know there is more—but need the right environment, guidance, and structure to step into it."</p>
          </div>
          <div className="audience-grid">
            {audience.map((a, i) => (
              <div key={i} className="audience-item" style={{ transition:'all 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateX(6px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateX(0)'}>
                <div className="audience-dot" style={{ animation:`floatDot ${6+i}s ease-in-out infinite ${i*0.5}s` }} />
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What We Stand For</span>
            <div className="gold-line center" />
            <h2 className="section-title">Our Values</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="val-card" style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'16px', padding:'2.5rem', textAlign:'center', boxShadow:'0 2px 12px rgba(2,39,29,0.05)', overflow:'hidden', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg,transparent,#D4A72C,transparent)' }} />
                <div style={{ width:'56px', height:'56px', borderRadius:'14px', background:'rgba(212,167,44,0.1)', border:'1.5px solid rgba(212,167,44,0.25)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0.5rem auto 1.25rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize:'1.2rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'0.75rem' }}>{v.title}</h3>
                <p style={{ color:'var(--text-muted)', lineHeight:1.75, fontSize:'0.95rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MESSAGE ── */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">A Word From the Founder</span>
            <div className="gold-line center" />
            <h2 className="section-title">Founder's Message</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'4rem', alignItems:'start' }}>
            <div style={{ borderRadius:'16px', overflow:'hidden', height:'360px', position:'relative', boxShadow:'0 16px 48px rgba(2,39,29,0.18)' }}>
              <img src="/img-tvi6.jpg" alt="Yemi Adesanya" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(3,31,23,0.75) 0%, rgba(3,31,23,0.1) 60%)' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'1.5rem', textAlign:'center' }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', color:'#E8C766', fontSize:'1rem', marginBottom:'0.2rem' }}>Yemi Adesanya</div>
                <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.65)' }}>Founder, TVI</div>
              </div>
            </div>
            <div style={{ background:'rgba(247,244,234,0.7)', border:'1px solid rgba(212,167,44,0.12)', borderRadius:'16px', padding:'2.5rem' }}>
              <div style={{ fontSize:'1.02rem', color:'var(--text-muted)', lineHeight:1.9, display:'flex', flexDirection:'column', gap:'1rem' }}>
                <p>I didn't start The Vanguard Initiative from theory—I started it from experience. I know what it feels like to search for identity. To look for acceptance in the wrong places. To make decisions that could have defined the rest of your life. And I also know what it feels like to be given another chance—and to make that chance count.</p>
                <p>This initiative is deeply personal to me. It represents everything I wish I had access to at certain stages of my life—guidance, structure, exposure, and the right voices speaking into my future.</p>
                <p>I believe that many people are not lacking potential—they are lacking the right environment, the right information, and the right belief system. When those things align, everything changes.</p>
                <blockquote style={{ borderLeft:'3px solid var(--gold)', paddingLeft:'1.25rem', fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.1rem', color:'var(--green-primary)', lineHeight:1.6 }}>
                  My commitment is simple: To build people. To equip leaders. To raise pioneers.
                </blockquote>
                <p>And I look forward to seeing what your journey becomes.</p>
              </div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.1rem', color:'var(--green-primary)', fontWeight:700, marginTop:'1.5rem' }}>— Yemi Adesanya</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}