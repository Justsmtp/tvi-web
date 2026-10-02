import { useState } from 'react'
import HeroInner from '../components/HeroInner'

const programmes = [
  {
    num:'01', title:'Emerge: Financial Fitness',
    desc:'Develop practical financial skills and the confidence to make informed financial decisions that create lasting stability.',
    outcomes:['Budgeting and money management','Saving and financial planning','Understanding debt and credit','Building healthy financial habits'],
  },
  {
    num:'02', title:'Emerge: Career Acceleration',
    desc:'Prepare for meaningful employment, professional growth, and long-term career development in any field.',
    outcomes:['CV and interview preparation','Workplace communication skills','Professional development','Career planning and networking'],
  },
  {
    num:'03', title:'Emerge: Faith & Identity',
    desc:'Explore personal identity, values, purpose, and the role of faith in navigating everyday life with confidence.',
    outcomes:['Identity and self-awareness','Purpose and personal values','Building confidence and resilience','Developing positive habits'],
  },
  {
    num:'04', title:'Emerge: Family & Relationships',
    desc:'Build the knowledge and skills needed to nurture healthy relationships and create stronger family environments.',
    outcomes:['Effective communication','Healthy boundaries','Conflict resolution','Family relationship dynamics'],
  },
  {
    num:'05', title:'Emerge: Leadership Development',
    desc:'Build the character, confidence, and practical skills to lead effectively and make a lasting positive difference.',
    outcomes:['Leadership fundamentals','Decision-making and accountability','Public speaking and communication','Teamwork and community leadership'],
  },
]

function EnquiryForm({ programme, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', programme: programme||'', message:'' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.programme) { alert('Please fill in your name, email, and select a programme.'); return }
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="form-success">
      <span className="check">✦</span>
      <h3>Enquiry Received</h3>
      <p>Thank you for your interest. A member of the TVI team will be in touch with programme details shortly.</p>
    </div>
  )

  return (
    <div style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:'12px', padding:'2.5rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h3 style={{ fontSize:'1.4rem', fontWeight:800, color:'var(--green-primary)' }}>Register Your Interest</h3>
        <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'1.5rem', color:'var(--text-muted)', lineHeight:1 }}>×</button>
      </div>
      <p style={{ color:'var(--text-muted)', marginBottom:'2rem', fontSize:'0.95rem' }}>Complete the form and a member of our team will be in touch with programme details.</p>
      <div className="form-group"><label>Full Name *</label><input value={form.name} onChange={set('name')} placeholder="Your full name" /></div>
      <div className="form-row">
        <div className="form-group"><label>Email Address *</label><input type="email" value={form.email} onChange={set('email')} placeholder="your.email@example.com" /></div>
        <div className="form-group"><label>Phone Number</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 7000 000000" /></div>
      </div>
      <div className="form-group">
        <label>Programme of Interest *</label>
        <select value={form.programme} onChange={set('programme')}>
          <option value="">Select a programme</option>
          {programmes.map(p => <option key={p.num}>{p.title}</option>)}
        </select>
      </div>
      <div className="form-group"><label>Short Message</label><textarea value={form.message} onChange={set('message')} placeholder="Tell us a little about yourself and your interest in this programme…" /></div>
      <div style={{ display:'flex', gap:'1rem' }}>
        <button className="btn btn-gold" onClick={submit}>Submit Enquiry</button>
        <button className="btn btn-outline-gold" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default function Programmes() {
  const [activeForm, setActiveForm] = useState(null)

  return (
    <main style={{ paddingTop:'72px' }}>
      <HeroInner eyebrow="EMERGE Series" title="The EMERGE Programme Series" subtitle="Practical learning. Purposeful growth. Leadership for life. Each programme is designed to help individuals progress from where they are to where they want to be." />

      <section className="section section-ivory">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Programmes</span>
            <div className="gold-line center" />
            <h2 className="section-title">Five Pathways to Growth</h2>
            <p className="section-subtitle">Choose the programme that speaks to where you are and where you want to go.</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'1.5rem', marginBottom: activeForm ? '3rem' : '0' }}>
            {programmes.map(p => (
              <div key={p.num} className="prog-card">
                <div className="prog-card-header">
                  <div className="prog-num">{p.num}</div>
                  <h3>{p.title}</h3>
                </div>
                <div className="prog-card-body">
                  <p>{p.desc}</p>
                  <ul className="prog-outcomes">
                    {p.outcomes.map((o,i) => <li key={i}>{o}</li>)}
                  </ul>
                  <button className="btn btn-gold" style={{ width:'100%', justifyContent:'center' }} onClick={() => setActiveForm(p.title)}>Register Your Interest</button>
                </div>
              </div>
            ))}
          </div>

          {activeForm && (
            <div style={{ marginTop:'3rem', maxWidth:'680px', margin:'3rem auto 0' }}>
              <EnquiryForm programme={activeForm} onClose={() => setActiveForm(null)} />
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'var(--green-primary)', padding:'5rem 0', textAlign:'center' }}>
        <div className="container-sm">
          <span className="eyebrow" style={{ color:'#E8C766', justifyContent:'center' }}>Not Sure Where to Start?</span>
          <div className="gold-line center" />
          <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:800, color:'#fff', marginBottom:'1rem' }}>We're Here to Help</h2>
          <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:1.8, marginBottom:'2rem' }}>Reach out and a member of the TVI team will help guide you to the right programme.</p>
          <button className="btn btn-gold" onClick={() => setActiveForm('')}>Register Your Interest</button>
        </div>
      </section>
    </main>
  )
}
