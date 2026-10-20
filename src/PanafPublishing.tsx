
import './PanafPublishing.css'

const CONTACT_EMAIL = 'panafpress2010@yahoo.com'

const lawBooks = [
  {
    title: 'Penal Code: Synoptic Guide',
    edition: '2026 Edition',
    author: 'Jide Olakanmi & Co.',
    publisher: 'LawLords Publications',
    description:
      "A reference guide to northern Nigeria's penal code, with statutory provisions, relevant cases, supporting materials and revision questions.",
  },
  {
    title: 'Precedents, Drafts and Forms for Lawyers',
    edition: '2026 Edition',
    author:
      'Emmanuel O. Olowononi and Akin O. Oluwadayisi',
    publisher: 'LawLords Publications',
    description:
      'A practical handbook of legal precedents, contract templates, court processes, civil litigation drafts, property instruments, wills and probate.',
  },
  {
    title: 'Company Law: Core Statutes',
    edition: '2025 Edition',
    author: 'Jide Olakanmi & Co.',
    publisher: 'LawLords Publications',
    description:
      'A corporate law reference covering CAMA 2020, the Business Facilitation Act 2022, the Investment and Securities Act 2025, and partnership law.',
  },
  {
    title: 'Mining Law in Nigeria',
    edition: '2025 Edition',
    author: 'Dr. Adekunle Ojo, SAN',
    publisher: 'LawLords Publications',
    description:
      'An overview of Nigeria’s solid minerals framework, extraction rights, environmental compliance and mining regulation.',
  },
  {
    title: 'Maritime Security in ECOWAS Cluster',
    edition: '2023 Edition',
    author: 'Patrick Enyeting',
    publisher: 'LawLords Publications',
    description:
      'Explores maritime safety, counter-piracy legislation, port security standards and regional security cooperation in West Africa.',
  },
  {
    title: 'Practical Approach to Civil Procedural Laws in Nigeria',
    edition: 'Edition to be confirmed',
    author: 'Akin O. Oluwadayisi, Ph.D',
    publisher: 'TETFund Supported',
    description:
      'A practical guide to civil litigation procedures, court rules, pleadings, motion practice and trial preparation in Nigerian courts.',
  },
  {
    title: 'Nigerian Property Law and Practice',
    edition: '2023 Edition',
    author: 'Mevayen Ewomazino Jemialu',
    publisher: 'LawLords Publications',
    description:
      'Covers property transactions, conveyancing, land registration, mortgages, landlord-tenant relations and deed drafting.',
  },
  {
    title: 'Criminal Code: Synoptic Guide',
    edition: '2026 Edition',
    author: 'Jide Olakanmi & Co.',
    publisher: 'LawLords Publications',
    description:
      'A companion guide to criminal law in southern Nigeria, featuring statutory offences, case precedents and review questions.',
  },
  {
    title: 'Alternative Dispute Resolution (ADR): Cases & Materials',
    edition: '2022 Edition',
    author: 'Jide Olakanmi & Co.',
    publisher: 'LawLords Publications',
    description:
      'A reference to arbitration, mediation, conciliation and negotiation, including key cases, statutory frameworks and practice notes.',
  },
  {
    title: 'Armed Forces Handbook',
    edition: '2021 Edition',
    author: 'Jide Olakanmi & Co.',
    publisher: 'LawLords Publications',
    description:
      'A handbook on Nigerian military law, the Armed Forces Act, Courts Martial procedures and military justice case law.',
  },
]

export default function PanafPublishing() {
  const publishingEmail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    'Book Publishing Enquiry',
  )}`

  const bookEmail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    'Law Books and Book Orders Enquiry',
  )}`

  return (
    <main className="pub-page">
      <header className="pub-header">
        <a className="pub-brand" href="/">
          PANAF<span>.</span>
          <small>PUBLISHING COMPANY</small>
        </a>

        <nav className="pub-nav">
          <a href="#publishing-services">Publishing</a>
          <a href="#bookshop">Books</a>
          <a href="#about-publishing">About us</a>
        </nav>

        <a className="pub-header-cta" href={publishingEmail}>
          Publish with us <span>↗</span>
        </a>
      </header>

      <section className="pub-hero">
        <div className="pub-hero-copy">
          <span className="pub-kicker">
            YOUR IDEAS. OUR PUBLISHING EXPERTISE.
          </span>

          <h1>
            Every book
            <br />
            begins with
            <br />
            <em>a story.</em>
          </h1>

          <p>
            From your first manuscript to a finished book,
            PANAF Publishing Company helps bring written
            ideas closer to publication. We also provide
            access to law books and reading materials.
          </p>

          <div className="pub-hero-actions">
            <a className="pub-button pub-button-dark" href={publishingEmail}>
              Publish your book <span>↗</span>
            </a>
            <a className="pub-text-link" href="#bookshop">
              Explore books <span>↓</span>
            </a>
          </div>

          <div className="pub-hero-note">
            <span className="pub-note-line" />
            FOR AUTHORS, READERS AND LEGAL PROFESSIONALS
          </div>
        </div>

        <div className="pub-hero-visual">
          <div className="pub-visual-label">THE ART OF THE WRITTEN WORD</div>

          <div className="pub-book-scene">
            <div className="pub-book pub-book-back">
              <span>PANAF</span>
              <strong>IDEAS<br />IN PRINT</strong>
              <small>THE AUTHOR'S JOURNEY</small>
            </div>

            <div className="pub-book pub-book-front">
              <span>PANAF PUBLISHING</span>
              <div className="pub-book-emblem">P.</div>
              <strong>YOUR WORDS.<br />YOUR LEGACY.</strong>
              <i />
              <small>BRING YOUR STORY TO LIFE</small>
            </div>
          </div>

          <div className="pub-visual-footer">
            <span>01 — THE MANUSCRIPT</span>
            <span>IDEAS MADE TANGIBLE.</span>
          </div>
        </div>
      </section>

      <section className="pub-services" id="publishing-services">
        <div className="pub-section-heading">
          <div>
            <span className="pub-kicker">WHAT WE DO</span>
            <h2>
              From manuscript
              <br />
              <em>to meaningful work.</em>
            </h2>
          </div>

          <p>
            Whether you are preparing to publish your
            first book or searching for legal reading
            materials, start with PANAF.
          </p>
        </div>

        <div className="pub-service-grid">
          <article className="pub-service-card pub-service-featured">
            <div className="pub-service-number">01 / PUBLISHING</div>
            <div className="pub-service-icon">✳</div>
            <h3>Publish your book</h3>
            <p>
              Have a manuscript, an idea, or a completed
              work? Get in touch with our team to discuss
              your publishing project and the next steps.
            </p>
            <a href={publishingEmail}>
              Start a publishing enquiry <span>↗</span>
            </a>
          </article>

          <article className="pub-service-card">
            <div className="pub-service-number">02 / BOOKSHOP</div>
            <div className="pub-service-icon">▤</div>
            <h3>Find law books</h3>
            <p>
              Looking for legal books and reference
              materials? Contact us to ask about available
              titles, prices, and ordering.
            </p>
            <a href={bookEmail}>
              Enquire about books <span>↗</span>
            </a>
          </article>

          <article className="pub-service-card">
            <div className="pub-service-number">03 / READERS</div>
            <div className="pub-service-icon">⌘</div>
            <h3>Discover more to read</h3>
            <p>
              Explore Law Live Reader, our digital reading
              platform featuring general books and legal
              materials.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.livelawreader.llrreader"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Law Live Reader <span>↗</span>
            </a>
          </article>
        </div>
      </section>

      
<section className="pub-bookshop" id="bookshop">
  <div className="pub-bookshop-heading">
    <span className="pub-kicker">THE PANAF BOOKSHOP</span>
    <h2>
      The law book
      <br />
      <em>collection.</em>
    </h2>
    <p>
      Explore our selection of legal books and reference
      materials. Contact us to enquire about availability
      and ordering.
    </p>
  </div>

  <div className="pub-book-grid">
    
{lawBooks.map((book, index) => {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="pub-product-card" key={book.title}>
     
<div className="pub-product-image">
  <img
    src={`/images/law-books/law-book-${number}.jpg`}
    alt={book.title}
    loading="lazy"
  />
  <span className="pub-product-number">
    PANAF EDITION / {number}
  </span>
</div>

      <div className="pub-product-info">
        <span className="pub-product-category">
          {book.edition}
        </span>

        <h3>{book.title}</h3>

        <p className="pub-product-description">
          {book.description}
        </p>

        <div className="pub-product-meta">
          <span>By {book.author}</span>
          <span>{book.publisher}</span>
        </div>

        
<div className="pub-product-bottom">
  <span className="pub-product-price">
    ₦{[
      25000,
      45000,
      30000,
      50000,
      35000,
      40000,
      30000,
      25000,
      20000,
      28000,
    ][index].toLocaleString('en-NG')}
  </span>

  <a
    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Enquiry about ${book.title}`,
    )}`}
  >
    Enquire ↗
  </a>
</div>

      </div>
    </article>
  )
})}

  </div>

  <div className="pub-bookshop-contact">
    <p>Looking for a particular legal title?</p>
    <a
      href="mailto:panafpress2010@yahoo.com?subject=Law%20Book%20Enquiry"
      className="pub-button pub-button-light"
    >
      Contact PANAF Publishing <span>↗</span>
    </a>
  </div>
</section>
    
<section className="pub-llr">
  <div className="pub-llr-visual">
    <div className="pub-llr-orbit pub-llr-orbit-one" />
    <div className="pub-llr-orbit pub-llr-orbit-two" />

    <div className="pub-llr-app-card">
      <img
        src="/law-live-reader-logo.png"
        alt="Law Live Reader app logo"
        className="pub-llr-logo"
      />

      <span className="pub-llr-app-label">
        YOUR DIGITAL READING SPACE
      </span>

      <h3>Knowledge, within reach.</h3>

      <span className="pub-llr-app-footer">
        LAW LIVE READER
      </span>
    </div>

    <span className="pub-llr-floating-note">
      READ. LEARN. GROW.
    </span>
  </div>

  <div className="pub-llr-content">
    <span className="pub-kicker">
      BEYOND THE PRINTED PAGE
    </span>

    <h2>
      Meet Law
      <br />
      Live <em>Reader.</em>
    </h2>

    <p>
      Take your reading further with Law Live Reader,
      a digital reading platform for discovering books
      and reading materials. Explore the app and find
      your next read.
    </p>

    <div className="pub-llr-features">
      <div>
        <span>01</span>
        <p>Digital reading experience</p>
      </div>
      <div>
        <span>02</span>
        <p>Books and reading materials</p>
      </div>
      <div>
        <span>03</span>
        <p>Read wherever you go</p>
      </div>
    </div>

    <a
      className="pub-llr-button"
      href="https://play.google.com/store/apps/details?id=com.livelawreader.llrreader"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore on Google Play <span>↗</span>
    </a>

    <span className="pub-llr-caption">
      AVAILABLE ON GOOGLE PLAY
    </span>
  </div>
</section>

      <section className="pub-process" id="about-publishing">
        <div className="pub-process-heading">
          <span className="pub-kicker">YOUR PUBLISHING JOURNEY</span>
          <h2>
            Let's bring your
            <br />
            <em>book to life.</em>
          </h2>
          <p>
            Every publishing project is different. Start
            with a conversation about your work.
          </p>
        </div>

        <div className="pub-process-steps">
          <article>
            <span>01</span>
            <h3>Tell us your idea</h3>
            <p>
              Share what you are writing, your manuscript
              status, and what you hope to publish.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Discuss your project</h3>
            <p>
              We can discuss your goals, requirements,
              and the publishing options available.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Plan the next steps</h3>
            <p>
              Agree on the appropriate way forward after
              discussing the scope of your project.
            </p>
          </article>
        </div>

        <a className="pub-button pub-button-dark" href={publishingEmail}>
          Discuss your manuscript <span>↗</span>
        </a>
      </section>

      <section className="pub-final-cta">
        <span className="pub-kicker">HAVE A BOOK IN MIND?</span>
        <h2>
          Your next chapter
          <br />
          <em>starts here.</em>
        </h2>
        <p>
          Whether you want to publish a manuscript or
          enquire about law books, we would like to hear
          from you.
        </p>
        <a className="pub-button pub-button-light" href={publishingEmail}>
          Contact PANAF Publishing <span>↗</span>
        </a>
      </section>

      <footer className="pub-footer">
        <a className="pub-brand" href="/">
          PANAF<span>.</span>
          <small>PUBLISHING COMPANY</small>
        </a>

        <span>Books, ideas and publishing.</span>

        <a href="/">Back to PANAF homepage ↑</a>
      </footer>
    </main>
  )
}
