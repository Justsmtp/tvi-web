import { useState } from 'react'
import HeroInner from '../components/HeroInner'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) { alert('Please fill in all required fields.'); return }
    setSubmitted(true)
  }

  const info = [
    { label:'Email', value:'[Email address to be added]', icon:'✉' },
    { label:'Phone', value:'[Phone number to be added]', icon:'☎' },
    { label:'Address', value:'[Office address to be added]', icon:'📍' },
  ]

  return (
    <main style={{ paddingTop:'72px' }}>
      <HeroInner eyebrow="Contact" title="Let's Start a Conversation" subtitle="Have a question, want to get involved, or interested in working with us? We'd love to hear from you." />

      <section className="section section-ivory">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'5rem', alignItems:'start' }}>

            {/* Contact info */}
            <div>
              <span className="eyebrow">Contact Information</span>
              <div className="gold-line" />
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800, color:'var(--green-primary)', lineHeight:1.2, marginBottom:'2rem' }}>Get in Touch</h2>

              <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2.5rem' }}>
                {info.map((item, i) => (
                  <div key={i} style={{ display:'flex', gap:'1rem', alignItems:'flex-start', padding:'1.25rem', background:'var(--white)', border:'1px solid var(--border)', borderRadius:'10px' }}>
                    <div style={{ width:'44px', height:'44px', borderRadius:'10px', background:'rgba(212,167,44,0.1)', border:'1.5px solid rgba(212,167,44,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight:700, color:'var(--green-primary)', fontSize:'0.88rem', marginBottom:'0.2rem' }}>{item.label}</p>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.92rem' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p style={{ fontWeight:700, color:'var(--green-primary)', marginBottom:'1rem', fontSize:'0.9rem', letterSpacing:'0.05em', textTransform:'uppercase' }}>Follow TVI</p>
                <div style={{ display:'flex', gap:'0.6rem' }}>
                  {[['f','Facebook'],['in','Instagram'],['𝕏','X'],['Li','LinkedIn'],['▶','YouTube']].map(([s,t],i) => (
                    <a key={i} href="#" title={t} style={{ width:'40px', height:'40px', borderRadius:'8px', background:'rgba(6,59,42,0.07)', border:'1px solid rgba(6,59,42,0.15)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--green-primary)', textDecoration:'none', fontSize:'0.85rem', fontWeight:700, transition:'all 0.25s ease' }}
                      onMouseEnter={e=>{ e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='var(--green-deep)'; }}
                      onMouseLeave={e=>{ e.currentTarget.style.background='rgba(6,59,42,0.07)'; e.currentTarget.style.color='var(--green-primary)'; }}
                    >{s}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="form-success">
                  <span className="check">✦</span>
                  <h3>Message Sent</h3>
                  <p>Thank you for getting in touch. A member of the TVI team will respond to your message shortly.</p>
                </div>
              ) : (
                <div style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'12px', padding:'2.5rem', boxShadow:'var(--shadow-md)' }}>
                  <h3 style={{ fontSize:'1.4rem', fontWeight:800, color:'var(--green-primary)', marginBottom:'1.5rem' }}>Send a Message</h3>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name *</label><input value={form.name} onChange={set('name')} placeholder="Your full name" /></div>
                    <div className="form-group"><label>Email Address *</label><input type="email" value={form.email} onChange={set('email')} placeholder="your.email@example.com" /></div>
                  </div>
                  <div className="form-group"><label>Phone Number (Optional)</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 7000 000000" /></div>
                  <div className="form-group"><label>Subject *</label><input value={form.subject} onChange={set('subject')} placeholder="What is your message about?" /></div>
                  <div className="form-group"><label>Message *</label><textarea value={form.message} onChange={set('message')} placeholder="Your message…" /></div>
                  <button className="btn btn-gold" onClick={submit}>Send Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
