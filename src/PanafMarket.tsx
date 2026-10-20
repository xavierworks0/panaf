
import './PanafMarket.css'
import { useState } from 'react'

const categories = [
  {
    number: '01',
    name: 'Fresh vegetables',
    group: 'produce',
    description: 'Fresh ingredients for everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
    items: [
      {
        name: 'Tomatoes',
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Peppers',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Onions',
        image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Leafy greens',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Carrots',
        image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    number: '02',
    name: 'Fresh fruits',
    group: 'produce',
    description: 'Fruit options offered by market traders.',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85',
    items: [
      {
        name: 'Mangoes',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Oranges',
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Bananas',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Watermelon',
        image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Pineapples',
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    number: '03',
    name: 'Meat & protein',
    group: 'meat',
    description: 'Explore different meat and protein options.',
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85',
    items: [
      {
        name: 'Beef (cow)',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Goat meat',
        image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Ram meat',
        image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Pork (pig)',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Chicken',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    number: '04',
    name: 'Everyday foodstuff',
    group: 'essentials',
    description: 'Staples and ingredients for the kitchen.',
    image:
      'https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=900&q=85',
    items: [
      {
        name: 'Rice',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Beans',
        image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=500&q=80',
      },
      
      {
        name: 'Garri',
        image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Spices',
        image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
]

function PanafMarket() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
const [visitChecklist, setVisitChecklist] = useState([
  false,
  false,
  false,
])
const faqs = [
  {
    question: 'Where is Panaf Market located?',
    answer:
      'Panaf Market is located in Dawaki, Abuja, in the Federal Capital Territory of Nigeria.',
  },
  {
    question: 'What products can I find at the market?',
    answer:
      'The market includes vegetables, fruits, meat and other market goods. Specific products depend on what independent traders have available.',
  },
  {
    question: 'Can individuals and businesses visit?',
    answer:
      'The market serves both individual customers and businesses looking to source everyday goods. Please confirm specific requirements directly with the relevant trader.',
  },
  {
    question: 'How can I make an enquiry?',
    answer:
      'You can contact PANAF by phone or email using the contact options on this page. For specific products, confirm availability before visiting.',
  },
]
 const [activeFilter, setActiveFilter] = useState('all')

const filteredCategories = categories.filter((category) => {
  return activeFilter === 'all' || category.group === activeFilter
})
    return (
    <main className="market-page">
      <header className="market-header">
        <a className="market-logo" href="/">
          PANAF<span>.</span><small>GROUP</small>
        </a>

        <a className="market-back" href="/#businesses">
          ← ALL BUSINESSES
        </a>
      </header>

      <section className="market-hero">
        <img
          className="market-hero-image"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2200&q=90"
          alt="Fresh produce displayed at a food market"
        />
        <div className="market-hero-overlay" />

        <div className="market-hero-content">
          <p className="market-eyebrow">
            <span /> A PANAF GROUP BUSINESS
          </p>

          <h1>
            Panaf
            <br />
            <em>Market.</em>
          </h1>

          <p className="market-hero-description">
            A marketplace for everyday essentials, bringing independent
            traders and customers together in Dawaki, Abuja.
          </p>

          <a className="market-primary-button" href="#market-categories">
            EXPLORE THE MARKET ↓
          </a>
        </div>

        <span className="market-hero-location">
          DAWAKI · ABUJA · NIGERIA
        </span>
      </section>

      <section className="market-intro">
        <div className="market-section-label">
          <span>01 / THE MARKET</span>
          <span>PART OF PANAF GROUP</span>
        </div>

        <div className="market-intro-grid">
          <h2>
            A shared space.
            <br />
            <em>Everyday trade.</em>
          </h2>

          <div className="market-intro-copy">
            <p>
              Panaf Market is a market space owned and managed by PANAF,
              where independent traders sell goods to customers.
            </p>
            <p>
              From fresh vegetables and fruits to meat and other everyday
              market goods, visitors can explore what participating traders
              have available.
            </p>
          </div>
        </div>
      </section>

      <section
        className="market-categories"
        id="market-categories"
      >
        <div className="market-section-label">
          <span>02 / WHAT YOU CAN FIND</span>
          <span>AVAILABILITY VARIES BY TRADER</span>
        </div>

        <div className="market-categories-heading">
          <h2>
            Everyday needs.
            <br />
            <em>Different choices.</em>
          </h2>
          <p>
            Browse some of the product categories associated with the market.
            Specific goods depend on what traders have available.
          </p>
        </div>
        <div className="market-filters" aria-label="Filter market categories">
  {[
    { label: 'All categories', value: 'all' },
    { label: 'Fresh produce', value: 'produce' },
    { label: 'Meat & foodstuff', value: 'meat' },
    { label: 'Other essentials', value: 'essentials' },
  ].map((filter) => (
    <button
      key={filter.value}
      type="button"
      className={`market-filter ${activeFilter === filter.value ? 'active' : ''}`}
      onClick={() => setActiveFilter(filter.value)}
      aria-pressed={activeFilter === filter.value}
    >
      {filter.label}
    </button>
  ))}
</div>
        <div className="market-category-grid">
          {filteredCategories.map((category) => (
            <article
              className="market-category-card"
              key={category.number}
            >
              <div className="market-category-image">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />
                <span>{category.number}</span>
              </div>

              
<div className="market-category-copy">
  <h3>{category.name}</h3>
  <p>{category.description}</p>
</div>

<div className="market-subcategory-grid">
  {category.items.map((item) => (
    <article className="market-subcategory" key={item.name}>
      <div className="market-subcategory-image">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <h4>{item.name}</h4>
    </article>
  ))}
</div>

            </article>
          ))}
        </div>
      </section>

      <section className="market-model">
        <div className="market-model-content">
          <p className="market-eyebrow">
            <span /> 03 / HOW IT WORKS
          </p>

          <h2>
            Independent traders.
            <br />
            <em>One market space.</em>
          </h2>

          <p>
            PANAF owns and manages the market space, while independent
            traders operate their selling activities within it under
            arrangements with PANAF. Customers can visit the market and
            engage directly with traders about the goods they offer.
          </p>

          <a className="market-outline-button" href="#market-contact">
            CONTACT PANAF ↗
          </a>
        </div>
      </section>

      
<section className="market-location" id="plan-your-visit">
  <div className="market-visit-intro">
    <div className="market-section-label">
      <span>04 / PLAN YOUR VISIT</span>
      <span>DAWAKI · ABUJA</span>
    </div>

    <h2>
      Make your
      <br />
      <em>next visit count.</em>
    </h2>

    <p>
      Planning to visit Panaf Market? Check your route, confirm
      product availability and contact PANAF if you need more
      information before travelling.
    </p>

    <a
      className="market-primary-button market-visit-directions"
      href="https://www.google.com/maps/search/?api=1&query=Dawaki%2C%20Abuja%2C%20Nigeria"
      target="_blank"
      rel="noopener noreferrer"
    >
      GET DIRECTIONS ↗
    </a>
  </div>

  <div className="market-visit-panel">
    <p className="market-location-overline">VISIT INFORMATION</p>

    <h3>Panaf Market</h3>
    <p className="market-visit-address">
      Dawaki, Abuja, FCT, Nigeria
    </p>

    <div className="market-visit-divider" />

    <a href="tel:+2348023400164" className="market-visit-contact">
      <span>
        <small>CALL PANAF</small>
        +234 802 340 0164
      </span>
      <span>↗</span>
    </a>

    <a
      href="mailto:panafpress2010@yahoo.com?subject=Panaf%20Market%20Enquiry"
      className="market-visit-contact"
    >
      <span>
        <small>EMAIL PANAF</small>
        Send a market enquiry
      </span>
      <span>↗</span>
    </a>

    <div className="market-visit-divider" />

    <p className="market-visit-check-title">BEFORE YOU SET OUT</p>

    {[
      'Confirm product availability.',
      'Check your route to Dawaki.',
      'Contact PANAF if you need more information.',
    ].map((item, index) => (
      <label className="market-visit-check" key={item}>
        <input
          type="checkbox"
          checked={visitChecklist[index]}
          onChange={(event) => {
            setVisitChecklist((previous) =>
              previous.map((checked, i) =>
                i === index ? event.target.checked : checked,
              ),
            )
          }}
        />
        <span>{item}</span>
      </label>
    ))}

    <p className="market-visit-progress">
      {visitChecklist.filter(Boolean).length} OF 3 STEPS COMPLETED
    </p>
  </div>
</section>

          <section className="market-faq">
  <div className="market-section-label">
    <span>05 / COMMON QUESTIONS</span>
    <span>MARKET INFORMATION</span>
  </div>

  <div className="market-faq-layout">
    <div>
      <h2>
        Good to
        <br />
        <em>know.</em>
      </h2>
      <p>
        A few helpful details before you visit or make an enquiry.
      </p>
    </div>

    <div className="market-faq-list">
      {faqs.map((faq, index) => (
        <div className="market-faq-item" key={faq.question}>
          <button
            type="button"
            className="market-faq-question"
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            aria-expanded={openFaq === index}
          >
            <span>{faq.question}</span>
            <span className="market-faq-icon">
              {openFaq === index ? '−' : '+'}
            </span>
          </button>

          {openFaq === index && (
            <p className="market-faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="market-contact" id="market-contact">
        <div className="market-contact-copy">
          <p className="market-eyebrow">
            <span /> 05 / GET IN TOUCH
          </p>

          <h2>
            Have a market
            <br />
            <em>enquiry?</em>
          </h2>

          <p>
            Contact PANAF for enquiries about Panaf Market. For product
            availability, please confirm details directly before visiting.
          </p>
        </div>

        <div className="market-contact-actions">
          <a href="tel:+2348023400164" className="market-contact-button">
            <span>
              <small>CALL PANAF</small>
              +234 802 340 0164
            </span>
            <span>↗</span>
          </a>

          <a
            href="mailto:panafpress2010@yahoo.com?subject=Panaf%20Market%20Enquiry"
            className="market-contact-button"
          >
            <span>
              <small>EMAIL PANAF</small>
              panafpress2010@yahoo.com
            </span>
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="market-footer">
        <a className="market-logo" href="/">
          PANAF<span>.</span><small>GROUP</small>
        </a>
        <span>PA​NAF MARKET · DAWAKI, ABUJA</span>
        <a href="/#businesses">BACK TO PANAF GROUP ↑</a>
      </footer>
    </main>
  )
}

export default PanafMarket
