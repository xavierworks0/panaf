
import './JideOlakanmiLawFirm.css'

const JideOlakanmiLawFirm = () => {
  return (
    <main className="law-page">
      <header className="law-header">
        <a href="/businesses" className="law-brand">
          <span className="law-brand-mark">P</span>
          <span>PANAF <small>BUSINESS DIRECTORY</small></span>
        </a>

        <nav className="law-nav">
          <a href="#law-about">About</a>
          <a href="#law-services">Our Services</a>
          <a href="#law-contact" className="law-nav-cta">
            Contact Us ↗
          </a>
        </nav>
      </header>

      <section className="law-hero">
        <div className="law-hero-content">
          <span className="law-eyebrow">
            JIDE OLAKANMI LAW FIRM
          </span>

          <h1>
            Clarity in law.
            <br />
            <em>Confidence</em> in every step.
          </h1>

          <p>
            A professional legal practice focused on helping
            individuals and businesses navigate legal matters
            with clarity and confidence.
          </p>

          <div className="law-hero-actions">
            <a href="#law-contact" className="law-button-primary">
              Get in Touch <span>↗</span>
            </a>
            <a href="#law-services" className="law-button-secondary">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="law-hero-visual">
          <div className="law-visual-frame">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85"
              alt="Legal books and scales of justice"
            />
            <div className="law-visual-caption">
              <span>LEGAL COUNSEL</span>
              <span>Professional. Principled. Focused.</span>
            </div>
          </div>
          <div className="law-visual-number">01</div>
        </div>
      </section>

      <section className="law-about" id="law-about">
        <div className="law-section-label">01 / ABOUT THE FIRM</div>

        <div className="law-about-content">
          <h2>
            Sound counsel.
            <br />
            <em>Thoughtful representation.</em>
          </h2>

          <p>
            Legal matters demand careful thought, clear communication,
            and attention to detail. Jide Olakanmi Law Firm is presented
            here as part of the PANAF business directory.
          </p>

          <p>
            Contact the firm directly to discuss your legal needs,
            confirm its practice areas, and learn how it may be able
            to assist you.
          </p>
        </div>
      </section>

      <section className="law-services" id="law-services">
        <div className="law-services-heading">
          <div>
            <div className="law-section-label">02 / LEGAL SERVICES</div>
            <h2>Legal support, <em>with purpose.</em></h2>
          </div>
          <p>
            Speak with the firm to confirm the services available
            for your particular circumstances.
          </p>
        </div>

        <div className="law-service-grid">
          <article className="law-service-card">
            <span>01</span>
            <h3>Business & Commercial Law</h3>
            <p>
              Enquire about legal matters relating to business
              operations, agreements, and commercial transactions.
            </p>
            <a href="#law-contact">Make an enquiry ↗</a>
          </article>

          <article className="law-service-card">
            <span>02</span>
            <h3>Contracts & Agreements</h3>
            <p>
              Discuss your needs concerning contracts, documentation,
              and legally binding agreements.
            </p>
            <a href="#law-contact">Make an enquiry ↗</a>
          </article>

          <article className="law-service-card">
            <span>03</span>
            <h3>Legal Consultation</h3>
            <p>
              Contact the firm to discuss your situation and establish
              whether its legal services are suitable for your needs.
            </p>
            <a href="#law-contact">Make an enquiry ↗</a>
          </article>
        </div>

        <p className="law-service-note">
          Service categories are introductory examples and should be
          confirmed with the firm before publication.
        </p>
      </section>
    
<section className="law-reader">
  <div className="law-reader-copy">
    <span className="law-section-label">
      A DIGITAL READING EXPERIENCE
    </span>

    <h2>
      Knowledge is always
      <br />
      <em>in session.</em>
    </h2>

    <p>
      Discover Live Law Reader, a digital reading platform
      bringing general books and legal materials together
      in one place.
    </p>

    <a
      className="law-reader-button"
      href="https://play.google.com/store/apps/details?id=com.livelawreader.llrreader"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore Live Law Reader <span>↗</span>
    </a>
  </div>

  <div className="law-reader-mark" aria-hidden="true">
    <span>LAW</span>
    <strong>LIVE</strong>
    <span>READER</span>
    <div className="law-reader-rule" />
    <small>READ. LEARN. DISCOVER.</small>
  </div>
</section>
        
<section className="law-consult" id="law-consult">
  <div className="law-consult-intro">
    <span className="law-section-label">
      LET'S TALK / LEGAL ENQUIRIES
    </span>

    <h2>
      Every matter
      <br />
      starts with a <em>conversation.</em>
    </h2>

    <p>
      Tell us a little about what you need. The firm can review
      your enquiry and discuss the appropriate next steps with you.
    </p>

    <div className="law-consult-points">
      <div>
        <span>01</span>
        <p><strong>Share your enquiry</strong><small>Tell us what you need assistance with.</small></p>
      </div>
      <div>
        <span>02</span>
        <p><strong>Discuss your needs</strong><small>Explain your circumstances to the firm.</small></p>
      </div>
      <div>
        <span>03</span>
        <p><strong>Confirm next steps</strong><small>Discuss availability and any applicable fees directly.</small></p>
      </div>
    </div>

    <a className="law-consult-phone" href="tel:+2348038281443">
      <span>Prefer to call?</span>
      <strong>08038281443 ↗</strong>
    </a>
  </div>

  <form
    className="law-consult-form"
    onSubmit={(event) => {
      event.preventDefault()

      const form = event.currentTarget
      const data = new FormData(form)

      const name = String(data.get('name') || '')
      const email = String(data.get('email') || '')
      const phone = String(data.get('phone') || '')
      const matter = String(data.get('matter') || '')
      const message = String(data.get('message') || '')

      const subject = encodeURIComponent(
        `Legal enquiry: ${matter}`
      )

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nEnquiry type: ${matter}\n\nMessage:\n${message}`
      )

      window.location.href =
        `mailto:panafchambers@yahoo.co.uk?subject=${subject}&body=${body}`
    }}
  >
    <span className="law-consult-form-label">
      START YOUR ENQUIRY
    </span>

    <label>
      YOUR NAME *
      <input
        name="name"
        type="text"
        placeholder="Enter your full name"
        required
      />
    </label>

    <div className="law-consult-fields">
      <label>
        EMAIL ADDRESS *
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        PHONE NUMBER
        <input
          name="phone"
          type="tel"
          placeholder="Your contact number"
        />
      </label>
    </div>

    <label>
      WHAT IS YOUR ENQUIRY ABOUT? *
      <select name="matter" required defaultValue="">
        <option value="" disabled>Select an enquiry type</option>
        <option value="Business or commercial matter">
          Business or commercial matter
        </option>
        <option value="Contracts or documentation">
          Contracts or documentation
        </option>
        <option value="General legal enquiry">
          General legal enquiry
        </option>
        <option value="Other or unsure">
          Other / not sure
        </option>
      </select>
    </label>

    <label>
      TELL US ABOUT YOUR ENQUIRY *
      <textarea
        name="message"
        rows={5}
        placeholder="Briefly describe what you would like to discuss..."
        required
      />
    </label>

    <button type="submit" className="law-consult-submit">
      PREPARE MY ENQUIRY <span>↗</span>
    </button>

    <p className="law-consult-note">
      This opens your email application with your enquiry prepared.
      Sending is not automatic, and a consultation is not confirmed
      until arrangements are agreed with the firm.
    </p>
  </form>
</section>

      <section className="law-contact" id="law-contact">
        <div>
          <div className="law-section-label">03 / CONTACT</div>
          <h2>
            Let’s discuss
            <br />
            <em>your legal needs.</em>
          </h2>
          <p>
            Reach out to PANAF to request the firm's verified contact
            information or arrange an introduction.
          </p>
        </div>

        <a
          
          className="law-contact-link"href="mailto:panafchambers@yahoo.co.uk?subject=Jide%20Olakanmi%20Law%20Firm%20Enquiry"
        >
          Contact the Law Firm <span>↗</span>
        </a>
        <div className="law-contact-details">
  <a href="tel:+2348038281443">
    08038281443 ↗
  </a>
  <a href="mailto:panafchambers@yahoo.co.uk">
    panafchambers@yahoo.co.uk ↗
  </a>
</div>
      </section>

      <footer className="law-footer">
        <a href="/businesses" className="law-footer-brand">
          PANAF
        </a>
        <span>Jide Olakanmi Law Firm</span>
        <a href="/">Back to PANAF homepage ↑</a>
      </footer>
    </main>
  )
}

export default JideOlakanmiLawFirm
