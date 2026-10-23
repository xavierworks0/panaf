
import './App.css'
import PanafMarket from './PanafMarket'
import PanafRealEstate from './PanafRealEstate'
import PanafFarms from './PanafFarms'
import PanafPublishing from './PanafPublishing'
import JideOlakanmiLawFirm from './JideOlakanmiLawFirm'
const businesses = [
  {
    number: '01',
    category: 'COMMERCE',
    name: 'Panaf Market',
    description:
      'Everyday essentials, dependable service and retail experiences built around our communities.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
  
      href: '/businesses/panaf-market',
    },
  {
    number: '02',
    category: 'LEGAL SERVICES',
    name: 'Jide Olakanmi Law Firm',
    description:
      'Professional legal services grounded in trust, thoughtful counsel and lasting relationships.',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85',
    href: '/businesses/jide-olakanmi-law-firm',
  },
  {
    number: '03',
    category: 'AGRICULTURE',
    name: 'Panaf Farms',
    description:
      'Agricultural development focused on food production, opportunity and long-term value.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
  
    href: '/businesses/panaf-farms',
  },
{
  number: '04',
  category: 'PUBLISHING',
  name: 'LawLords Publications',
  description:
    'Bringing ideas, knowledge and stories to life through thoughtful publishing.',
  image: '/lawlords-publications-logo.png',
  href: '/businesses/panaf-publishing-company',
},
  {
    number: '05',
    category: 'REAL ESTATE',
    name: 'Panaf Real Estate',
    description:
      'Real estate and property opportunities focused on long-term value and growth.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    href: '/businesses/panaf-real-estate',
  },
  {
    number: '06',
    category: 'LEGAL EDUCATION',
    name: 'Panaf Paralegal School',
    description:
      'Explore the school, its legal education programmes and further information on its official website.',
    image: '/images/panaf-paralegal-school.jpg',
    href: 'https://panafparalegal.edu.ng/',
    external: true,
  },
]

function App() {
  if (
  window.location.pathname.replace(/\/+$/, '') ===
  '/businesses/panaf-farms'
) {
  return <PanafFarms />
}
if (
  window.location.pathname.replace(/\/+$/, '') ===
  '/businesses/panaf-real-estate'
) {
  return <PanafRealEstate />
}
if (
  window.location.pathname.replace(/\/+$/, '') ===
  '/businesses/panaf-publishing-company'
) {
  return <PanafPublishing />
}
if (
  window.location.pathname.replace(/\/+$/, '') ===
  '/businesses/jide-olakanmi-law-firm'
) {
  return <JideOlakanmiLawFirm />
}
    if (
    window.location.pathname.replace(/\/+$/, '') ===
    '/businesses/panaf-market'
  ) {
    return <PanafMarket />
  }
  return (
    <main>
      <div className="topbar">
        <span>LAGOS, NIGERIA</span>
        <span>A DIVERSIFIED BUSINESS GROUP</span>
        <a href="#contact">LET'S TALK ↗</a>
      </div>

      <header className="header">
        <a className="logo" href="#home" aria-label="Panaf Group home">
          PANAF<span>.</span><small>GROUP</small>
        </a>

        <nav aria-label="Main navigation">
          <a href="#businesses">Business</a>
          <a href="#community">Community</a>
          <a href="#about">About Us</a>
          <a href="#newsroom">Newsroom</a>
          <a href="#careers">Careers</a>
          <a className="nav-button" href="#contact">
            Get in touch ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
          alt="Contemporary commercial architecture"
        />
        <div className="hero-shade" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> INDEPENDENTLY MINDED. FUTURE FOCUSED.
          </p>

          <h1>
            One vision.
            <br />
            <span>Multiple worlds.</span>
          </h1>

          <div className="hero-foot">
            <p>
              Six distinct businesses. One shared ambition to create value,
              build opportunities and make a lasting difference.
            </p>
            <a className="light-button" href="#businesses">
              DISCOVER PANAF ↗
            </a>
          </div>
        </div>

        <span className="hero-coordinate">
          06° 27′ N &nbsp; 03° 24′ E
        </span>
        <span className="hero-counter">01 — 06 / THE GROUP</span>
      </section>

      <section className="businesses section" id="businesses">
        <div className="section-top">
          <span>01 / OUR BUSINESSES</span>
          <span>SIX AREAS. ONE DIRECTION.</span>
        </div>

        <div className="section-heading">
          <h2>
            Different industries.
            <br />
            <em>One direction.</em>
          </h2>
          <p>
            We bring distinct capabilities together, guided by a shared
            commitment to quality, progress and long-term thinking.
          </p>
        </div>

        <div className="business-grid">
          {businesses.map((business) => (
            <article className="business-card" key={business.number}>
              <a
                className="business-photo"
                href={business.href ?? '#contact'}
                target={business.external ? '_blank' : undefined}
                rel={business.external ? 'noopener noreferrer' : undefined}
                aria-label={
                  business.external
                    ? `Visit ${business.name} official website`
                    : `Enquire about ${business.name}`
                }
              >
                <img
                  src={business.image}
                  alt=""
                  loading="lazy"
                />
                <span className="photo-number">{business.number}</span>
                <span className="photo-arrow">↗</span>
              </a>

              <div className="business-category">
                <span>{business.category}</span>
                <span>{business.number} / 06</span>
              </div>

              <h3>{business.name}</h3>
              <p>{business.description}</p>

              <a
                className="under-link"
                href={business.href ?? '#contact'}
                target={business.external ? '_blank' : undefined}
                rel={business.external ? 'noopener noreferrer' : undefined}
              >
                {business.external ? 'VISIT SCHOOL WEBSITE' : 'LEARN MORE'}
                <span> ↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
            alt="Contemporary professional workspace"
            loading="lazy"
          />
          <span>PANAF GROUP — LAGOS, NIGERIA</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow dark-eyebrow">02 / WHO WE ARE</p>

          <h2>
            Built on purpose.
            <br />
            <em>Driven by possibility.</em>
          </h2>

          <p>
            Panaf is a diversified business group spanning commerce,
            legal services, agriculture, publishing, real estate and
            legal education. Each business has its own purpose, while
            contributing to a broader ambition.
          </p>

          <p>
            We believe meaningful growth starts with understanding
            real needs, building strong foundations and staying
            focused on the long term.
          </p>

          <div className="values">
            <div>
              <span>01</span>
              <strong>Meaningful work</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Long-term growth</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Shared ambition</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="vision" id="vision">
        <span className="vision-mark">P.</span>

        <div className="vision-inner">
          <p className="eyebrow">
            <span /> 03 / LOOKING AHEAD
          </p>

          <h2>
            Not just for today.
            <br />
            <em>For what comes next.</em>
          </h2>

          <div className="vision-bottom">
            <p>
              Our vision is to build resilient businesses that evolve
              with opportunity, create lasting value and contribute
              to a stronger future.
            </p>
            <a
              className="light-button outline-button"
              href="#contact"
            >
              BUILD WITH PANAF ↗
            </a>
          </div>
        </div>
      </section>

      <section className="community section" id="community">
        <div className="section-top">
          <span>04 / COMMUNITY</span>
          <span>PEOPLE. PROGRESS. OPPORTUNITY.</span>
        </div>

        <div className="section-heading">
          <h2>
            Growth means more
            <br />
            <em>when we grow together.</em>
          </h2>
          <p>
            We believe lasting business value begins with understanding
            people, recognising opportunities and contributing positively
            to the communities around us.
          </p>
        </div>
      </section>

      <section className="newsroom section" id="newsroom">
        <div className="section-top">
          <span>05 / NEWSROOM</span>
          <span>UPDATES FROM PANAF</span>
        </div>

        <div className="section-heading">
          <h2>
            Stories, milestones
            <br />
            <em>and what comes next.</em>
          </h2>
          <p>
            This is where announcements, company updates and stories
            from across the PANAF group can be shared as they become
            available.
          </p>
        </div>

        <a className="under-link" href="#contact">
          CONTACT PANAF FOR ENQUIRIES <span>↗</span>
        </a>
      </section>

      <section className="careers section" id="careers">
        <div className="section-top">
          <span>06 / CAREERS</span>
          <span>GROW WITH PANAF</span>
        </div>

        <div className="section-heading">
          <h2>
            Bring your ambition.
            <br />
            <em>Build what matters.</em>
          </h2>
          <p>
            Interested in opportunities across the PANAF group?
            Contact us to enquire about potential roles and opportunities.
          </p>
          <a className="under-link" href="#contact">
            MAKE AN ENQUIRY <span>↗</span>
          </a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow dark-eyebrow">07 / CONTACT</p>

          <h2>
            Let's make
            <br />
            <em>something matter.</em>
          </h2>

          <p>
            Have a question, partnership idea or business enquiry?
            We'd like to hear from you.
          </p>

          <div className="contact-detail">
            <span>PHONE</span>
            <a href="tel:+2348023400164">08023400164 ↗</a>
          </div>

          <div className="contact-detail">
            <span>EMAIL</span>
            <a href="mailto:panafpress2010@yahoo.com">
              panafpress2010@yahoo.com ↗
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:panafpress2010@yahoo.com"
          method="post"
          encType="text/plain"
        >
          <p className="form-heading">SEND US AN ENQUIRY</p>

          <label>
            YOUR NAME
            <input name="Name" placeholder="Full name" required />
          </label>

          <label>
            EMAIL ADDRESS
            <input
              name="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            WHAT IS THIS ABOUT?
            <select name="Enquiry">
              <option>General enquiry</option>
              <option>Business partnership</option>
              <option>Panaf Supermarket</option>
              <option>Jide Olakanmi Law Firm</option>
              <option>Panaf Farms</option>
              <option>LawLords Publications</option>
              <option>Panaf Real Estate</option>
              <option>Panaf Paralegal School</option>
              <option>Careers</option>
              <option>Community</option>
            </select>
          </label>

          <label>
            YOUR MESSAGE
            <textarea
              name="Message"
              rows={4}
              placeholder="Tell us a little about it..."
              required
            />
          </label>

          <button className="submit-button" type="submit">
            SEND ENQUIRY ↗
          </button>

          <p className="form-note">
            Your email application will open to send the message.
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a className="logo footer-logo" href="#home">
              PANAF<span>.</span><small>GROUP</small>
            </a>
            <p>A shared vision across different worlds.</p>
          </div>

          <div className="footer-links">
            <span>EXPLORE</span>
            <a href="#businesses">Our businesses</a>
            <a href="#community">Community</a>
            <a href="#about">About Panaf</a>
            <a href="#newsroom">Newsroom</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-links">
            <span>CONTACT</span>
            <a href="mailto:panafpress2010@yahoo.com">
              Email Panaf ↗
            </a>
            <a href="tel:+2348023400164">08023400164</a>
            <a
              href="https://panafparalegal.edu.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Panaf Paralegal School ↗
            </a>
            <span>LAGOS, NIGERIA</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PANAF GROUP</span>
          <span>ONE VISION. MULTIPLE WORLDS.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
