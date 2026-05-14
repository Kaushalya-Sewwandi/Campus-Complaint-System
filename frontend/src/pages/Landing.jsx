import { Link } from "react-router-dom";

function SocialIcon({ label, children }) {
  return (
    <a className="landing-social-link" href="#" aria-label={label} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-topbar">
        <div className="landing-wrap landing-topbar-inner">
          <p className="landing-topbar-text">
            Join with us and help keep the campus a better place for everyone.
          </p>
          <div className="landing-social" aria-hidden="false">
            <SocialIcon label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H7.9V12h2.65V9.8c0-2.6 1.55-4.04 3.9-4.04 1.13 0 2.31.2 2.31.2v2.54h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.9h-2.4v7.05A10 10 0 0 0 22 12Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2A3 3 0 0 0 21.4 4c-1.9-.2-9.4-.2-9.4-.2s-7.5 0-9.4.2A3 3 0 0 0 .5 6.2 35 35 0 0 0 0 12a35 35 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.2 9.4.2 9.4.2s7.5 0 9.4-.2a3 3 0 0 0 2.1-2.1 35 35 0 0 0 .5-5.8 35 35 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <header className="landing-masthead">
        <div className="landing-wrap landing-masthead-inner">
          <Link to="/" className="landing-brand-block">
            <img className="landing-brand-logo" src="/uov-logo.png" alt="University of Vavuniya" />
            <div className="landing-brand-text">
              <span className="landing-brand-title">Campus Complaint System</span>
              <span className="landing-brand-sub">University of Vavuniya</span>
            </div>
          </Link>

          <div className="landing-contact-row">
            <div className="landing-contact-item">
              <span className="landing-contact-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <span className="landing-contact-label">Call us</span>
                <span className="landing-contact-value">+94 24 222 2265</span>
              </div>
            </div>
            <div className="landing-contact-item">
              <span className="landing-contact-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <div>
                <span className="landing-contact-label">Email us</span>
                <span className="landing-contact-value">info@univ.jfn.ac.lk</span>
              </div>
            </div>
            <div className="landing-contact-item">
              <span className="landing-contact-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <span className="landing-contact-label">Locate us</span>
                <span className="landing-contact-value">Vavuniya, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="landing-nav" aria-label="Primary">
        <div className="landing-wrap landing-nav-inner">
          <div className="landing-nav-links">
            <a href="#home">Home</a>
            <a href="#how">How it works</a>
            <a href="#categories">Categories</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="landing-nav-cta">
            <Link to="/login" className="landing-nav-link">
              Login
            </Link>
            <Link to="/register" className="landing-nav-btn">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <section id="home" className="landing-hero">
        <div className="landing-hero-bg" aria-hidden />
        <div className="landing-hero-shade" aria-hidden />
        <div className="landing-wrap landing-hero-inner">
          <p className="landing-hero-kicker">Do you need any help?</p>
          <h1 className="landing-hero-title">Welcome to our campus complaint portal</h1>
          <p className="landing-hero-lead">
            Submit and track complaints securely. Administrators review and update every case with
            transparency.
          </p>
          <div className="landing-hero-actions">
            <Link to="/register" className="landing-hero-btn">
              Get started <span aria-hidden>→</span>
            </Link>
            <Link to="/login" className="landing-hero-btn landing-hero-btn--ghost">
              Sign in
            </Link>
          </div>

          <div className="landing-hero-cards">
            <article className="landing-hero-card">
              <span className="landing-hero-card-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                </svg>
              </span>
              <h2 className="landing-hero-card-title">Secure</h2>
              <p className="landing-hero-card-text">Signed-in access for students and staff.</p>
              <a className="landing-hero-card-link" href="#how">
                Read more <span aria-hidden>›</span>
              </a>
            </article>
            <article className="landing-hero-card">
              <span className="landing-hero-card-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </span>
              <h2 className="landing-hero-card-title">Track status</h2>
              <p className="landing-hero-card-text">Pending, in progress, or resolved at a glance.</p>
              <a className="landing-hero-card-link" href="#how">
                Read more <span aria-hidden>›</span>
              </a>
            </article>
            <article className="landing-hero-card">
              <span className="landing-hero-card-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <h2 className="landing-hero-card-title">Fast response</h2>
              <p className="landing-hero-card-text">Structured workflow for administrators.</p>
              <a className="landing-hero-card-link" href="#how">
                Read more <span aria-hidden>›</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="how" className="landing-section landing-section--alt">
        <div className="landing-wrap">
          <header className="landing-section-head">
            <h2 className="landing-section-title">How it works</h2>
            <p className="landing-section-desc">
              A simple three-step flow inspired by modern university service portals.
            </p>
          </header>
          <div className="landing-grid-3">
            <article className="landing-feature-card">
              <div className="landing-feature-media landing-feature-media--1" aria-hidden />
              <h3 className="landing-feature-title">1. Register & sign in</h3>
              <p className="landing-feature-text">
                Create your student account with your university email. Your session is protected with a secure token.
              </p>
              <Link to="/register" className="landing-feature-link">
                Learn more <span aria-hidden>›</span>
              </Link>
            </article>
            <article className="landing-feature-card">
              <div className="landing-feature-media landing-feature-media--2" aria-hidden />
              <h3 className="landing-feature-title">2. Submit a complaint</h3>
              <p className="landing-feature-text">
                Choose a category, describe the issue, and submit. You can follow up from your dashboard anytime.
              </p>
              <Link to="/student" className="landing-feature-link">
                Learn more <span aria-hidden>›</span>
              </Link>
            </article>
            <article className="landing-feature-card">
              <div className="landing-feature-media landing-feature-media--3" aria-hidden />
              <h3 className="landing-feature-title">3. Admin resolution</h3>
              <p className="landing-feature-text">
                Administrators review complaints, update status, and keep the campus informed with consistent records.
              </p>
              <Link to="/login" className="landing-feature-link">
                Learn more <span aria-hidden>›</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="categories" className="landing-section">
        <div className="landing-wrap">
          <header className="landing-section-head">
            <h2 className="landing-section-title">Common categories</h2>
            <p className="landing-section-desc">
              Organize reports so the right office can act quickly.
            </p>
          </header>
          <ul className="landing-pills">
            <li>Hostel</li>
            <li>Canteen</li>
            <li>Academics</li>
            <li>Transport</li>
            <li>Facilities</li>
            <li>General</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="landing-section landing-section--cta">
        <div className="landing-wrap landing-cta-inner">
          <div>
            <h2 className="landing-cta-title">Ready to report an issue?</h2>
            <p className="landing-cta-desc">Use the portal for official campus complaint management.</p>
          </div>
          <div className="landing-cta-actions">
            <Link to="/register" className="landing-hero-btn">
              Create account
            </Link>
            <Link to="/login" className="landing-hero-btn landing-hero-btn--ghost landing-hero-btn--on-dark">
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
