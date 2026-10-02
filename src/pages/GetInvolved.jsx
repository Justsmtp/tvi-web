import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroInner from '../components/HeroInner'

const ways = [
  {
    title:'Join a Programme',
    desc:'Take part in one of our structured development programmes and begin your journey towards personal and professional growth.',
    cta:'Explore Programmes', to:'/programmes', type:'',
    img:'/img-tvi2.jpg',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" width="24" height="24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  },
  {
    title:'Volunteer',
    desc:'Share your time, talents, and experience to support our programmes and help create opportunities for others to grow.',
    cta:'Become a Volunteer', to:'#form', type:'Volunteer',
    img:'/img-tvi3.jpg',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" width="24" height="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title:'Partner With Us',
    desc:'Collaborate with us as an organisation, expert, or institution to expand opportunities and deliver meaningful initiatives.',
    cta:'Become a Partner', to:'#form', type:'Partner',
    img:'/img-tvi1.jpg',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    title:'Sponsor an Initiative',
    desc:'Help us extend our reach, deliver programmes, and make development opportunities accessible to more communities.',
    cta:'Sponsor a Programme', to:'#form', type:'Sponsor',
    img:'/img-tvi4.jpg',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.75" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
]

export default function GetInvolved() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ type:'', name:'', email:'', phone:'', org:'', area:'', skills:'', message:'' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.type) {
      alert('Please fill in your name, email, and enquiry type.'); return
    }
    setSubmitted(true)
  }

  const scrollToForm = (type) => {
    setForm(f => ({...f, type}))
    document.getElementById('involve-form')?.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  return (
    <main style={{ paddingTop:'72px' }}>
      <style>{`
        .involve-way-card { transition: all 0.32s ease; }
        .involve-way-card:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 56px rgba(2,39,29,0.12) !important; }
        .btn-float { border-radius: 100px !important; box-shadow: 0 6px 20px rgba(2,39,29,0.15); }
        .btn-float:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(2,39,29,0.22) !important; }
      `}</style>

      <HeroInner eyebrow="Get Involved" title="Be Part of the Movement" subtitle="Your time, skills, resources, and partnerships can help equip the next generation of leaders." />

      {/* ── FOUR WAYS ── */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Four Ways to Contribute</span>
            <div className="gold-line center" />
            <h2 className="section-title">How You Can Help</h2>
            <p className="section-subtitle">There are many ways to be part of the TVI mission. Choose the one that fits you.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.5rem' }}>
            {ways.map((w, i) => (
              <div key={i} className="involve-way-card" style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 20px rgba(2,39,29,0.06)', display:'flex', flexDirection:'column' }}>
                {/* image header */}
                <div style={{ height:'160px', overflow:'hidden', position:'relative' }}>
                  <img src={w.img} alt={w.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform='scale(1)'}
                  />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,59,42,0.55) 0%, transparent 55%)' }} />
                  <div style={{ position:'absolute', bottom:'1rem', left:'1rem', width:'40px', height:'40px', borderRadius:'10px', background:'rgba(212,167,44,0.15)', border:'1px solid rgba(212,167,44,0.35)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {w.icon}
                  </div>
                </div>
                <div style={{ padding:'1.75rem', display:'flex', flexDirection:'column', flex:1 }}>
                  <h3 style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'0.6rem' }}>{w.title}</h3>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.88rem', lineHeight:1.75, marginBottom:'1.25rem', flex:1 }}>{w.desc}</p>
                  {w.to === '#form'
                    ? <button className="btn btn-green btn-float" style={{ padding:'0.65rem 1.4rem', fontSize:'0.86rem', justifyContent:'center', cursor:'pointer', alignSelf:'stretch' }} onClick={() => scrollToForm(w.type)}>{w.cta}</button>
                    : <Link to={w.to} className="btn btn-green btn-float" style={{ padding:'0.65rem 1.4rem', fontSize:'0.86rem', display:'flex', justifyContent:'center', alignSelf:'stretch' }}>{w.cta}</Link>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section className="section section-white" id="involve-form">
        <div className="container-sm">
          <div className="section-header center">
            <span className="eyebrow">Get In Touch</span>
            <div className="gold-line center" />
            <h2 className="section-title">Volunteer, Partner &amp; Sponsor Enquiries</h2>
            <p className="section-subtitle">Fill in the form below and a member of the TVI team will be in touch with you shortly.</p>
          </div>

          {submitted ? (
            <div className="form-success">
              <span className="check">✦</span>
              <h3>Thank You for Reaching Out</h3>
              <p>Your enquiry has been received. A member of the TVI team will be in touch with you soon.</p>
            </div>
          ) : (
            <div style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'20px', padding:'2.75rem', boxShadow:'0 12px 48px rgba(2,39,29,0.08)' }}>
              <div className="form-group">
                <label>Enquiry Type *</label>
                <select value={form.type} onChange={set('type')}>
                  <option value="">Select enquiry type</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partner">Partner</option>
                  <option value="Sponsor">Sponsor</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Full Name *</label><input value={form.name} onChange={set('name')} placeholder="Your full name" /></div>
                <div className="form-group"><label>Email Address *</label><input type="email" value={form.email} onChange={set('email')} placeholder="your.email@example.com" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Phone Number</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 7000 000000" /></div>
                <div className="form-group"><label>Organisation (Optional)</label><input value={form.org} onChange={set('org')} placeholder="Your organisation" /></div>
              </div>
              <div className="form-group"><label>Area of Interest</label><input value={form.area} onChange={set('area')} placeholder="e.g. Workshop facilitation, financial mentoring…" /></div>
              <div className="form-group"><label>Relevant Skills or Experience</label><textarea value={form.skills} onChange={set('skills')} placeholder="Tell us about relevant experience or skills you bring…" style={{ minHeight:'100px' }} /></div>
              <div className="form-group"><label>Message</label><textarea value={form.message} onChange={set('message')} placeholder="Any additional details you'd like to share…" /></div>
              <button className="btn btn-gold btn-float" onClick={submit} style={{ padding:'1rem 2.5rem', fontSize:'1rem' }}>Send Enquiry</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}