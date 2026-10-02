import { useState } from 'react'
import HeroInner from '../components/HeroInner'

const galleryImages = [
  { src:'/img-tvi5.jpg', caption:'Leadership Workshop' },
  { src:'/img-tvi2.jpg', caption:'Community Session' },
  { src:'/img-tvi3.jpg', caption:'Volunteer Day' },
]

export default function Events() {
  const [email, setEmail]   = useState('')
  const [joined, setJoined] = useState(false)

  const join = () => {
    if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); return }
    setJoined(true); setEmail('')
  }

  return (
    <main style={{ paddingTop:'72px' }}>
      <style>{`
        .btn-deep-gold { background:linear-gradient(135deg,#B8860B,#D4A72C)!important; color:#0a0a0a!important; font-weight:800!important; box-shadow:0 6px 24px rgba(184,134,11,0.38)!important; border-radius:100px!important; }
        .btn-deep-gold:hover { transform:translateY(-3px)!important; box-shadow:0 12px 36px rgba(184,134,11,0.5)!important; }
        .btn-float { border-radius:100px!important; }
        .gallery-img { transition: all 0.32s ease; }
        .gallery-img:hover { transform: scale(1.03); box-shadow: 0 16px 48px rgba(2,39,29,0.18) !important; }
      `}</style>

      <HeroInner eyebrow="Events" title="Events & Experiences" subtitle="Spaces for learning, connection, and transformation." />

      {/* ── UPCOMING ── */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Upcoming Events</span>
            <div className="gold-line center" />
            <h2 className="section-title">What's Coming Up</h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', marginBottom:'3rem' }}>
            {/* Placeholder event cards using real images */}
            {[
              { img:'/img-tvi1.jpg', label:'Workshop', title:'Emerge: Financial Fitness — Intro Session', date:'Date TBC', loc:'London, UK' },
              { img:'/img-tvi4.jpg', label:'Seminar',  title:'Leadership & Career Development Evening', date:'Date TBC', loc:'Online / In-Person' },
            ].map((ev, i) => (
              <div key={i} style={{ borderRadius:'16px', overflow:'hidden', background:'var(--white)', border:'1px solid var(--border)', boxShadow:'0 4px 20px rgba(2,39,29,0.07)', transition:'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(2,39,29,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(2,39,29,0.07)' }}>
                <div style={{ height:'180px', overflow:'hidden', position:'relative' }}>
                  <img src={ev.img} alt={ev.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                  <div style={{ position:'absolute', inset:0, background:'rgba(6,59,42,0.35)' }} />
                  <span style={{ position:'absolute', top:'1rem', left:'1rem', background:'linear-gradient(135deg,#B8860B,#D4A72C)', color:'#0a0a0a', fontWeight:800, fontSize:'0.75rem', padding:'0.3rem 0.85rem', borderRadius:'100px' }}>{ev.label}</span>
                </div>
                <div style={{ padding:'1.5rem' }}>
                  <h3 style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'0.6rem' }}>{ev.title}</h3>
                  <div style={{ display:'flex', gap:'1.25rem', marginBottom:'1.1rem' }}>
                    <span style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.84rem', color:'var(--text-muted)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
                      {ev.date}
                    </span>
                    <span style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.84rem', color:'var(--text-muted)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {ev.loc}
                    </span>
                  </div>
                  <p style={{ fontSize:'0.85rem', color:'var(--gold-dark)', fontWeight:700 }}>Registration details coming soon</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mailing list */}
          <div style={{ background:'var(--green-primary)', borderRadius:'20px', padding:'3rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:'-30px', right:'-30px', width:'120px', height:'120px', borderRadius:'50%', border:'1px solid rgba(212,167,44,0.15)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:'-20px', left:'-20px', width:'80px', height:'80px', borderRadius:'50%', background:'rgba(212,167,44,0.05)', pointerEvents:'none' }} />
            <div style={{ position:'relative', zIndex:1 }}>
              <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#E8C766', display:'block', marginBottom:'0.75rem' }}>Stay Updated</span>
              <h3 style={{ fontSize:'clamp(1.4rem,2.5vw,1.9rem)', fontWeight:800, color:'#fff', marginBottom:'0.75rem' }}>Be First to Hear About New Events</h3>
              <p style={{ color:'rgba(255,255,255,0.7)', marginBottom:'1.75rem', fontSize:'0.95rem' }}>Join our mailing list to be the first to know about upcoming workshops, seminars, and community opportunities.</p>
              {joined ? (
                <p style={{ color:'#E8C766', fontWeight:700, fontSize:'1.05rem' }}>✦ You're on the list — we'll be in touch!</p>
              ) : (
                <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    style={{ padding:'0.9rem 1.25rem', border:'1.5px solid rgba(255,255,255,0.2)', borderRadius:'100px', fontFamily:"'Manrope',sans-serif", fontSize:'0.95rem', minWidth:'260px', outline:'none', background:'rgba(255,255,255,0.08)', color:'#fff', transition:'border-color 0.25s' }}
                    onFocus={e=>e.target.style.borderColor='#D4A72C'}
                    onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.2)'}
                  />
                  <button className="btn btn-deep-gold btn-float" onClick={join} style={{ padding:'0.9rem 1.75rem' }}>Join Mailing List</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS GALLERY ── */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Past Events</span>
            <div className="gold-line center" />
            <h2 className="section-title">Previous Events &amp; Experiences</h2>
            <p className="section-subtitle">A record of our community gatherings, workshops, and leadership events.</p>
          </div>

          {/* Photo gallery grid using tvi5 images */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem', marginBottom:'2.5rem' }}>
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-img" style={{ borderRadius:'14px', overflow:'hidden', aspectRatio:'4/3', position:'relative', boxShadow:'0 4px 20px rgba(2,39,29,0.08)', cursor:'pointer' }}>
                <img src={img.src} alt={img.caption} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,59,42,0.7) 0%, transparent 60%)' }} />
                <div style={{ position:'absolute', bottom:'1rem', left:'1rem' }}>
                  <span style={{ color:'rgba(255,255,255,0.9)', fontSize:'0.85rem', fontWeight:600 }}>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* img-tvi5 as a wide feature image */}
          <div style={{ borderRadius:'16px', overflow:'hidden', height:'320px', position:'relative', boxShadow:'0 8px 40px rgba(2,39,29,0.12)' }}>
            <img src="/img-tvi5.jpg" alt="TVI Community Event" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(6,59,42,0.65) 0%, transparent 60%)' }} />
            <div style={{ position:'absolute', top:'50%', left:'2.5rem', transform:'translateY(-50%)', maxWidth:'420px' }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontStyle:'italic', fontSize:'1.5rem', color:'#E8C766', lineHeight:1.4, marginBottom:'0.75rem' }}>"Spaces for learning, connection, and transformation."</div>
              <div style={{ width:'40px', height:'2px', background:'linear-gradient(90deg,#D4A72C,#E8C766)', borderRadius:'2px' }} />
            </div>
          </div>

          <p style={{ textAlign:'center', color:'var(--text-muted)', fontSize:'0.9rem', marginTop:'2rem', fontStyle:'italic' }}>
            Full event summaries, testimonials, and additional photographs will be added here as we grow.
          </p>
        </div>
      </section>
    </main>
  )
}