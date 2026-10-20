
import { useState } from 'react'
import './PanafRealEstate.css'

const services = [
  {
    number: '01',
    title: 'Buy a property',
    description:
      'Explore residential homes, apartments, land and commercial property opportunities.',
  },
  {
    number: '02',
    title: 'Rent or lease',
    description:
      'Find residential spaces, serviced apartments, offices and commercial premises.',
  },
  {
    number: '03',
    title: 'Property development',
    description:
      'Explore development, construction coordination and real estate project opportunities.',
  },
  {
    number: '04',
    title: 'Property management',
    description:
      'Enquire about property oversight, tenant coordination, leasing and asset management.',
  },
  {
    number: '05',
    title: 'Land and investment',
    description:
      'Discuss land acquisition, property investment opportunities and portfolio strategy.',
  },
  {
    number: '06',
    title: 'Real estate advisory',
    description:
      'Get in touch about property research, valuation coordination and transaction support.',
  },
]

const propertyTypes = [
  'Residential property',
  'Commercial property',
  'Land',
  'Rent or lease',
  'Property development',
  'Property management',
  'Real estate investment',
  'Other enquiry',
]

const properties = [
  {
    id: 1,
    title: 'Contemporary Family Residence',
    location: 'Lekki, Lagos',
    type: 'Residential',
    price: 'Price on request',
    beds: '4 Bedrooms',
    baths: '4 Bathrooms',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 2,
    title: 'Modern Urban Apartment',
    location: 'Victoria Island, Lagos',
    type: 'Residential',
    price: 'Price on request',
    beds: '2 Bedrooms',
    baths: '2 Bathrooms',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 3,
    title: 'Commercial Property Opportunity',
    location: 'Ikeja, Lagos',
    type: 'Commercial',
    price: 'Price on request',
    beds: 'Commercial space',
    baths: 'Enquire for details',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 4,
    title: 'Land Acquisition Opportunity',
    location: 'Lagos, Nigeria',
    type: 'Land',
    price: 'Price on request',
    beds: 'Land',
    baths: 'Location on enquiry',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
  },
]

export default function PanafRealEstate() {
    
  const [selectedType, setSelectedType] = useState('All')
  const [searchLocation, setSearchLocation] = useState('')

  const filteredProperties = properties.filter((property) => {
    const matchesType =
      selectedType === 'All' || property.type === selectedType

    const matchesLocation = property.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase())

    return matchesType && matchesLocation
  })

  return (
    <main className="estate-page">
      <header className="estate-header">
        <a className="estate-logo" href="/">
          PANAF<span>.</span>
          <small>REAL ESTATE</small>
        </a>

        <nav className="estate-nav" aria-label="Real estate navigation">
          <a href="#estate-services">Services</a>
          <a href="#estate-about">Our approach</a>
          <a href="#estate-contact">Contact</a>
        </nav>

        <a className="estate-header-cta" href="#estate-contact">
          Discuss a property <span>↗</span>
        </a>
      </header>

      <section className="estate-hero">
        <img
          className="estate-hero-image"
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
          alt="Contemporary luxury residential architecture"
        />
        <div className="estate-hero-overlay" />

        <div className="estate-hero-copy">
          <span className="estate-eyebrow">
            PANAF GROUP / REAL ESTATE
          </span>

          <h1>
            Space to live.
            <br />
            <em>Room to grow.</em>
          </h1>

          <p>
            From finding the right property to exploring development
            and investment opportunities, discover a more considered
            approach to real estate.
          </p>

          <div className="estate-hero-actions">
            <a className="estate-button-light" href="#estate-contact">
              START AN ENQUIRY <span>↗</span>
            </a>
            <a className="estate-text-link" href="#estate-services">
              EXPLORE OUR SERVICES ↓
            </a>
          </div>
        </div>

        <div className="estate-hero-index">
          <span>PROPERTY. POTENTIAL. PROGRESS.</span>
          <span>LAGOS, NIGERIA</span>
        </div>
      </section>

      <section className="estate-intro" id="estate-about">
        <div className="estate-intro-label">
          <span>01 / OUR APPROACH</span>
          <span>BUILT AROUND YOUR NEXT MOVE</span>
        </div>

        <div className="estate-intro-content">
          <h2>
            Real estate is more than a place.
            <br />
            <em>It is what you build from it.</em>
          </h2>

          <p>
            Whether you are looking for a place to call home,
            space for your business, land for a future project or
            support managing a property, PANAF Real Estate is a
            starting point for your next conversation.
          </p>
        </div>
      </section>
        
      <section className="estate-listings" id="estate-listings">
        <div className="estate-listings-heading">
          <div>
            <span className="estate-kicker">02 / PROPERTY COLLECTION</span>
            <h2>
              Discover your next
              <br />
              <em>property opportunity.</em>
            </h2>
          </div>
          <p>
            Explore property opportunities and contact our team
            for verified availability, pricing and further details.
          </p>
        </div>

        <div className="estate-listing-controls">
          <div className="estate-filter-buttons">
            {['All', 'Residential', 'Commercial', 'Land'].map((type) => (
              <button
                key={type}
                type="button"
                className={selectedType === type ? 'active' : ''}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <input
            className="estate-location-search"
            type="search"
            placeholder="Search by location..."
            value={searchLocation}
            onChange={(event) => setSearchLocation(event.target.value)}
            aria-label="Search properties by location"
          />
        </div>

        <div className="estate-listing-grid">
          {filteredProperties.map((property) => (
            <article className="estate-listing-card" key={property.id}>
              <div className="estate-listing-image">
                <img src={property.image} alt={property.title} loading="lazy" />
                <span>{property.type}</span>
              </div>

              <div className="estate-listing-content">
                <span className="estate-listing-location">
                  <span>↗</span> {property.location}
                </span>

                <h3>{property.title}</h3>

                <div className="estate-listing-features">
                  <span>{property.beds}</span>
                  <span>{property.baths}</span>
                </div>

                <div className="estate-listing-bottom">
                  <div>
                    <small>ASKING PRICE</small>
                    <strong>{property.price}</strong>
                  </div>

                  <a
                    href={`mailto:panafpress2010@yahoo.com?subject=${encodeURIComponent(
                      `Property enquiry: ${property.title}`
                    )}&body=${encodeURIComponent(
                      `Hello PANAF Real Estate,\n\nI would like more information about ${property.title} in ${property.location}.\n\nPlease confirm availability and pricing.`
                    )}`}
                  >
                    ENQUIRE <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p className="estate-listing-empty">
            No matching properties. Try another location or category.
          </p>
        )}

        <p className="estate-listing-disclaimer">
          Illustrative listings for website development. Availability,
          property details and prices must be confirmed by PANAF.
        </p>
      </section>

      <section className="estate-services" id="estate-services">
        <div className="estate-section-heading">
          <div>
            <span className="estate-kicker">02 / WHAT WE DO</span>
            <h2>
              Property possibilities.
              <br />
              <em>One point of contact.</em>
            </h2>
          </div>

          <p>
            Tell us what you need. We will help direct your enquiry
            to the appropriate real estate service.
          </p>
        </div>

        <div className="estate-service-grid">
          {services.map((service) => (
            <a
              className="estate-service-card"
              href="#estate-contact"
              key={service.number}
            >
              <div className="estate-service-top">
                <span>{service.number}</span>
                <span className="estate-service-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <span className="estate-service-link">
                MAKE AN ENQUIRY <span>↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="estate-feature">
        <div className="estate-feature-image">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"
            alt="Contemporary home with refined interior architecture"
            loading="lazy"
          />
          <span>THOUGHTFUL SPACES. LONG-TERM VALUE.</span>
        </div>

        <div className="estate-feature-copy">
          <span className="estate-kicker">03 / THE BIGGER PICTURE</span>

          <h2>
            Find the opportunity.
            <br />
            <em>Build the future.</em>
          </h2>

          <p>
            Every property decision starts with a different ambition.
            We welcome enquiries from individuals, families,
            businesses, landowners, developers and investors.
          </p>

          <a className="estate-dark-button" href="#estate-contact">
            TELL US WHAT YOU NEED <span>↗</span>
          </a>
        </div>
      </section>

      <section className="estate-contact" id="estate-contact">
        <div className="estate-contact-copy">
          <span className="estate-kicker">04 / YOUR NEXT MOVE</span>

          <h2>
            Let's talk
            <br />
            <em>real estate.</em>
          </h2>

          <p>
            Share a little about your plans and the property service
            you are interested in. Our team can follow up using the
            contact details you provide.
          </p>

          <div className="estate-contact-direct">
            <span>EMAIL</span>
            <a href="mailto:panafpress2010@yahoo.com">
              panafpress2010@yahoo.com ↗
            </a>
          </div>

          <div className="estate-contact-direct">
            <span>PHONE</span>
            <a href="tel:+2348023400164">08023400164 ↗</a>
          </div>
        </div>

        <form
          className="estate-form"
          action="mailto:panafpress2010@yahoo.com"
          method="post"
          encType="text/plain"
        >
          <span className="estate-form-title">PROPERTY ENQUIRY</span>

          <label>
            YOUR NAME
            <input
              name="Name"
              placeholder="Full name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            EMAIL ADDRESS
            <input
              name="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            WHAT ARE YOU LOOKING FOR?
            <select name="Property service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            PREFERRED LOCATION
            <input
              name="Location"
              placeholder="e.g. Lekki, Lagos"
            />
          </label>

          <label>
            TELL US MORE
            <textarea
              name="Message"
              rows={4}
              placeholder="Describe your property needs, budget or plans..."
              required
            />
          </label>

          <button type="submit">
            SEND PROPERTY ENQUIRY <span>↗</span>
          </button>

          <p className="estate-form-note">
            Your email application will open to send the enquiry.
          </p>
        </form>
      </section>

      <footer className="estate-footer">
        <a className="estate-logo" href="/">
          PANAF<span>.</span>
          <small>REAL ESTATE</small>
        </a>

        <span>Property. Potential. Progress.</span>

        <a href="/">BACK TO PANAF GROUP ↑</a>
      </footer>
    </main>
  )
}
