import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/tvilogo.jpeg" alt="TVI Logo" style={{ height:'60px', width:'60px', objectFit:'contain', borderRadius:'8px', marginBottom:'1rem' }} />
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:'1.1rem', color:'#fff' }}>The Vanguard Initiative</div>
            <p className="footer-tagline">"Raising Pioneers, Not Participants"</p>
            <p>A leadership and empowerment charity committed to developing confident, capable, and purpose-driven leaders.</p>
            <div className="social-row">
              {['f','in','𝕏','Li','▶'].map((s,i) => (
                <a key={i} href="#" className="social-btn" title={['Facebook','Instagram','X','LinkedIn','YouTube'][i]}>{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Organisation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/impact">Our Impact</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-col">
            <h4>Programmes</h4>
            <Link to="/programmes">Financial Fitness</Link>
            <Link to="/programmes">Career Acceleration</Link>
            <Link to="/programmes">Faith &amp; Identity</Link>
            <Link to="/programmes">Family &amp; Relationships</Link>
            <Link to="/programmes">Leadership Development</Link>
          </div>

          <div className="footer-col">
            <h4>Get Involved</h4>
            <Link to="/get-involved">Volunteer</Link>
            <Link to="/get-involved">Partner With Us</Link>
            <Link to="/get-involved">Sponsor an Initiative</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donate" className="btn btn-gold" style={{ marginTop:'1rem', padding:'0.65rem 1.25rem', fontSize:'0.88rem', display:'inline-flex' }}>Donate Now</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} The Vanguard Initiative. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
