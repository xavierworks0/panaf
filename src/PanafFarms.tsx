

import { useEffect, useState } from 'react'
import './PanafFarms.css'

const farmAreas = [
  {
    number: '01',
    title: 'Cattle & Cow Rearing',
    category: 'Livestock',
    description:
      'Discover our cattle and cow rearing activities. Contact PANAF to enquire about current availability, purchasing options and further information.',
    image:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '02',
    title: 'Goats & Sheep',
    category: 'Livestock',
    description:
      'Explore goat and sheep rearing as part of a diverse agricultural operation. Enquire directly about available animals and purchase arrangements.',
    image:
      'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '03',
    title: 'Horse Rearing',
    category: 'Livestock',
    description:
      'Learn more about our horse-rearing activities and animal care. Contact the PANAF team for enquiries about availability.',
    image:
      'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '04',
    title: 'Crops & Plant Cultivation',
    category: 'Plants & Crops',
    description:
      'Explore plant cultivation, crop growing and agricultural production. Contact PANAF to enquire about available plants and produce.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '05',
    title: 'Plants & Seedlings',
    category: 'Plants & Crops',
    description:
      'Enquire about plants for cultivation, seedlings and other growing options. Product varieties and availability can be confirmed directly.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '06',
    title: 'Fruits, Vegetables & Produce',
    category: 'Plants & Crops',
    description:
      'Get in touch to ask about agricultural produce, including fruits and vegetables, and discuss current purchasing options.',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85',
  },
]

function PanafFarms() {
    
    const [activeCategory, setActiveCategory] = useState('All')

const visibleAreas =
  activeCategory === 'All'
    ? farmAreas
    : farmAreas.filter(
        (area) => area.category === activeCategory,
      )
      
useEffect(() => {
  const elements = document.querySelectorAll(
    '.farms-card, .farms-step, .farms-principles-content, .farms-contact-copy, .farms-contact-actions, .farms-faq-item'
  )

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('farms-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -35px 0px',
    }
  )

  elements.forEach((element) => {
    element.classList.add('farms-reveal')
    observer.observe(element)
  })

  return () => observer.disconnect()
}, [activeCategory])

  return (
    <main className="farms-page">
     
<header className="farms-header">
  <a className="farms-logo" href="/" aria-label="PANAF Group home">
    PANAF<span>.</span>
    <small>GROUP</small>
  </a>

  <nav className="farms-nav" aria-label="Main navigation">
    <a href="#farms-focus">What We Do</a>
    <a href="#farms-journey">How It Works</a>
    <a href="#farms-faq">FAQs</a>
  </nav>

  <div className="farms-header-actions">
    <a className="farms-back" href="/#businesses">
      ← ALL BUSINESSES
    </a>

    <a
      className="farms-header-cta"
      href="https://wa.me/2348023400164?text=Hello%20PANAF%20Farms%2C%20I%20would%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
    >
      MAKE AN ENQUIRY <span>↗</span>
    </a>
  </div>
</header>


      <section className="farms-hero">
        <img
          className="farms-hero-image"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90"
          alt="Green agricultural fields stretching across the landscape"
        />

        <div className="farms-hero-overlay" />

        <div className="farms-hero-content">
          <p className="farms-eyebrow">
            <span /> A PANAF GROUP BUSINESS
          </p>

          <h1>
            Panaf
            <br />
            <em>Farms.</em>
          </h1>

          <p className="farms-hero-description">
            Agriculture is the foundation of food, livelihoods and
            opportunity. Discover the agricultural vision of Panaf Farms.
          </p>

          <a className="farms-primary-button" href="#farms-focus">
            EXPLORE OUR FOCUS ↓
          </a>
        </div>

        <span className="farms-hero-location">
          AGRICULTURE · FOOD · FUTURE
        </span>
      </section>

      <section className="farms-intro">
        <div className="farms-section-label">
          <span>01 / OUR PERSPECTIVE</span>
          <span>PART OF PANAF GROUP</span>
        </div>

        <div className="farms-intro-grid">
          <h2>
            Rooted in
            <br />
            <em>possibility.</em>
          </h2>

          <div className="farms-intro-copy">
            <p>
              Agriculture plays an essential role in feeding communities,
              creating livelihoods and supporting economic development.
            </p>

            <p>
              Panaf Farms is presented here as part of the wider PANAF
              Group portfolio. Contact PANAF for information about its
              current farming activities, products and operations.
            </p>
          </div>
        </div>
      </section>

      <section className="farms-focus" id="farms-focus">
        <div className="farms-section-label">
          <span>02 / AGRICULTURAL FOCUS</span>
          <span>AREAS OF INTEREST</span>
        </div>

        <div className="farms-focus-heading">
          <h2>
            Growing ideas.
            <br />
            <em>Building futures.</em>
          </h2>

          <p>
            Explore key areas of agriculture and food production.
            These themes do not represent confirmed current farm
            activities or available products.
          </p>
        </div>


<div className="farms-filters" aria-label="Filter farm categories">
  {['All', 'Livestock', 'Plants & Crops'].map((category) => (
    <button
      key={category}
      type="button"
      className={`farms-filter ${
        activeCategory === category ? 'active' : ''
      }`}
      onClick={() => setActiveCategory(category)}
      aria-pressed={activeCategory === category}
    >
      {category}
      {activeCategory === category && <span> ↗</span>}
    </button>
  ))}
</div>

<p className="farms-results-count" aria-live="polite">
  Exploring {visibleAreas.length} agricultural categories
</p>

<div className="farms-card-grid">
  {visibleAreas.map((area) => (
    <article className="farms-card" key={area.number}>
      <div className="farms-card-image">
        <img
          src={area.image}
          alt={area.title}
          loading="lazy"
        />
        <span>{area.number}</span>
      </div>

      <div className="farms-card-copy">
        <small className="farms-card-category">
          {area.category}
        </small>

        <h3>{area.title}</h3>
        <p>{area.description}</p>

        <a
          className="farms-card-link"
          href={`https://wa.me/2348023400164?text=${encodeURIComponent(
            `Hello PANAF Farms, I would like to enquire about ${area.title.toLowerCase()} and current availability.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          ENQUIRE ABOUT THIS ↗
        </a>
      </div>
    </article>
  ))}
</div>

      </section>
    
<section className="farms-journey">
  <div className="farms-section-label">
    <span>03 / HOW IT WORKS</span>
    <span>FROM FARM TO CUSTOMER</span>
  </div>

  <div className="farms-journey-heading">
    <h2>
      Good things
      <br />
      <em>start here.</em>
    </h2>
    <p>
      Looking for livestock, plants or farm produce? Our enquiry
      process gives you a straightforward way to get started.
      Contact PANAF to discuss your needs and confirm availability.
    </p>
  </div>

  <div className="farms-steps">
    <article className="farms-step">
      <span className="farms-step-number">01</span>
      <h3>Explore</h3>
      <p>
        Browse our livestock, plants and agricultural categories
        to identify what you are interested in.
      </p>
    </article>

    <article className="farms-step">
      <span className="farms-step-number">02</span>
      <h3>Make an enquiry</h3>
      <p>
        Tell us what you need through WhatsApp, phone or email.
      </p>
    </article>

    <article className="farms-step">
      <span className="farms-step-number">03</span>
      <h3>Confirm details</h3>
      <p>
        Discuss availability, pricing and any relevant purchasing
        or collection arrangements directly with PANAF.
      </p>
    </article>

    <article className="farms-step">
      <span className="farms-step-number">04</span>
      <h3>Plan your purchase</h3>
      <p>
        Agree on the next steps with the team before proceeding
        with your purchase.
      </p>
    </article>
  </div>
</section>

      <section className="farms-principles">
        <div className="farms-principles-content">
          <p className="farms-eyebrow">
            <span /> 03 / THE BIGGER PICTURE
          </p>

          <h2>
            Agriculture with
            <br />
            <em>purpose.</em>
          </h2>

          <p>
            Strong agricultural systems can help communities access
            food, create economic opportunities and build resilience.
            Progress starts with a commitment to responsible,
            long-term development.
          </p>

          <a
            className="farms-outline-button"
            href="#farms-contact"
          >
            CONNECT WITH PANAF ↗
          </a>
        </div>
      </section>
    
<section className="farms-faq">
  <div className="farms-section-label">
    <span>04 / COMMON QUESTIONS</span>
    <span>GOOD TO KNOW</span>
  </div>

  <div className="farms-faq-layout">
    <div>
      <h2>
        A few things
        <br />
        <em>to know.</em>
      </h2>
      <p>
        Have a question about our livestock, plants or agricultural
        produce? Here are a few helpful starting points.
      </p>
    </div>

    <div className="farms-faq-list">
      {[
        {
          question: 'What animals does Panaf Farms rear?',
          answer:
            'Panaf Farms rear animals including cows, goats, sheep and horses. Contact PANAF to confirm current availability and discuss your requirements.',
        },
        {
          question: 'Can I enquire about plants and crops for sale?',
          answer:
            'Yes. You can contact PANAF to enquire about plants, crops, fruits, vegetables and other agricultural produce. Specific varieties and current availability should be confirmed directly.',
        },
        {
          question: 'How do I find out about prices?',
          answer:
            'Contact PANAF by phone or WhatsApp with the animal, plant or produce you are interested in. The team can discuss applicable pricing and purchasing details.',
        },
        {
          question: 'Can I make a bulk or business enquiry?',
          answer:
            'You can contact PANAF to discuss larger quantities or business requirements. Any supply arrangements will need to be confirmed directly with the team.',
        },
        {
          question: 'How do I get started?',
          answer:
            'Use the WhatsApp enquiry link or call +234 802 340 0164. Explain what you need and ask about availability, pricing and the next steps.',
        },
      ].map((item) => (
        <details className="farms-faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span className="farms-faq-icon">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

      <section className="farms-contact" id="farms-contact">
        <div className="farms-contact-copy">
          <div className="farms-section-label">
            <span>04 / GET IN TOUCH</span>
          </div>

          <h2>
            Let’s talk
            <br />
            <em>agriculture.</em>
          </h2>

          <p>
            Interested in Panaf Farms or its agricultural activities?
            Contact PANAF to request further information.
          </p>
        </div>

<div className="farms-contact-actions">
  <a href="tel:+2348023400164">
    <span>
      <small>CALL PANAF FARMS</small>
      +234 802 340 0164
    </span>
    <span>↗</span>
  </a>

  <a
    href="https://wa.me/2348023400164?text=Hello%20PANAF%20Farms%2C%20I%20would%20like%20to%20enquire%20about%20your%20available%20livestock%2C%20plants%20and%20agricultural%20produce."
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>
      <small>WHATSAPP ENQUIRIES</small>
      Ask about available products
    </span>
    <span>↗</span>
  </a>

  <a href="mailto:panafpress2010@yahoo.com?subject=Panaf%20Farms%20Product%20Enquiry">
    <span>
      <small>EMAIL PANAF</small>
      Send an agricultural enquiry
    </span>
    <span>↗</span>
  </a>
</div>

      </section>

      <footer className="farms-footer">
        <a className="farms-logo" href="/">
          PANAF<span>.</span>
          <small>GROUP</small>
        </a>

        <span>PANAF FARMS · AGRICULTURE & DEVELOPMENT</span>

        <a href="/#businesses">BACK TO PANAF GROUP ↑</a>
      </footer>
    </main>
  )
}

export default PanafFarms
