import { BookingForm } from './booking-form';
import { ThemeToggle } from './theme-toggle';

const services = [
  {
    title: 'QA Clarity Session',
    duration: '60 min',
    price: '€49',
    description:
      'For junior QA engineers, career switchers and testers who feel stuck. We can discuss your current level, learning priorities and next professional step.',
    result: 'Leave with clear priorities and a realistic action plan.',
  },
  {
    title: 'QA Mock Interview',
    duration: '60 min',
    price: '€59',
    description:
      'A realistic QA interview: 40 minutes of questions followed by 20 minutes of direct, practical feedback.',
    result: 'Receive a focused list of strengths, gaps and preparation topics.',
  },
  {
    title: 'Pair Testing Session',
    duration: '60 min',
    price: '€69',
    description:
      'Bring your website, app or portfolio project. We will explore it together, identify risks and practise structured testing.',
    result: 'Receive a short written summary of findings and recommendations.',
  },
  {
    title: 'IT English Session',
    duration: '50 min',
    price: '€39',
    description:
      'Practise meetings, interviews, QA vocabulary and explaining technical ideas clearly in an international team.',
    result: 'Build confidence with language you can use immediately at work.',
  },
  {
    title: 'English Walk & Talk',
    duration: '60 min',
    price: '€45',
    description:
      'Relaxed one-to-one English conversation while walking through Amsterdam. No classroom pressure and no grammar drills.',
    result: 'Speak more naturally and receive gentle, useful corrections.',
  },
];

function TestTypes({ items }: { items: string[] }) {
  return (
    <ul className="test-types" aria-label="Types of testing">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Yuliia Diakova, home">
          Yuliia Diakova
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work with me</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#booking">
            Book a session
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">QA mentoring · IT English · Amsterdam</p>
          <h1 id="hero-title">
            Move forward in QA.
            <br />
            Speak with confidence.
          </h1>
          <p className="hero-copy">
            I’m Yuliia — a QA Lead, mentor and English practice partner based in
            Amsterdam. I help junior QA engineers and people in tech turn
            uncertainty into a practical next step.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              Book a session <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#work">
              Explore services
            </a>
          </div>
          <ul className="proof-line" aria-label="Professional highlights">
            <li>15+ years in QA</li>
            <li>Teams built from scratch</li>
            <li>English &amp; German Philology</li>
          </ul>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Work with me</p>
            <h2 id="work-title">
              Bring me the situation you’re trying to solve.
            </h2>
            <p>
              Every session is practical, personal and no longer than one hour.
              You bring the context; I bring focused attention and honest
              feedback.
            </p>
            <p className="introductory-note">
              These are introductory prices while I develop and refine each
              format through early sessions.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-result">{service.result}</p>
                  <a href="#booking">Choose this session →</a>
                </div>
                <p className="service-meta">
                  {service.duration} <span aria-hidden="true">·</span>{' '}
                  {service.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="useful-title">
          <p className="eyebrow">A good fit</p>
          <h2 id="useful-title">What I can help you with</h2>
          <ul className="plain-list useful-list">
            <li>Starting or developing a QA career.</li>
            <li>Preparing for a QA interview.</li>
            <li>Creating a focused QA learning roadmap.</li>
            <li>Testing a real project together.</li>
            <li>Improving test cases and bug reports.</li>
            <li>Communicating more confidently in English.</li>
          </ul>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <p className="eyebrow">About</p>
          <h2 id="about-title">Technology, communication and people.</h2>
          <div className="story">
            <p className="lead">
              I’m Yuliia. Eight years ago, I moved from Odesa, Ukraine, to the
              Netherlands. Amsterdam has been home ever since.
            </p>
            <p>
              Starting again in a new country taught me how much confidence
              depends on being able to understand people, express yourself and
              find your place in an unfamiliar environment. I built a new life
              here while continuing to grow in an international technology
              career.
            </p>
            <p>
              I began with a degree in English and German Philology and later
              moved into software testing. What looked like a change of
              direction turned out to be a natural fit: both language and
              quality assurance require curiosity, precision and the courage to
              ask when something does not make sense.
            </p>
            <p>
              Over 15+ years, I’ve tested complex products, built QA processes
              from the ground up, led distributed teams and helped junior
              engineers grow into confident professionals. In fintech, I helped
              introduce practical quality processes that reduced release cycles
              from six weeks to three.
            </p>
            <p>
              I understand both sides of QA: the hands-on detail of testing a
              product and the wider decisions that help people and teams deliver
              better software.
            </p>
            <p>
              My mentoring is direct, practical and supportive. I will not give
              you a generic template. We will work with your experience, your
              project, your interview or the conversation you need to handle in
              English.
            </p>
          </div>
        </section>

        <section
          className="section experience"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Selected experience</p>
            <h2 id="experience-title">
              Companies, products and testing scope.
            </h2>
            <p>
              A structured view of where I worked, which products I tested and
              how I approached quality. These are selected examples from a much
              wider portfolio.
            </p>
          </div>

          <div className="experience-group">
            <p className="group-label">Independent projects</p>
            <div className="independent-projects">
              <article className="independent-project">
                <div className="project-heading">
                  <div className="project-identity">
                    <img
                      className="app-icon"
                      src="/logos/whisperboard.jpg"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div>
                      <h3>WhisperBoard</h3>
                      <p>On-device voice transcription</p>
                    </div>
                  </div>
                  <span>iPhone · iPad</span>
                </div>
                <p className="project-description">
                  I tested an app that uses on-device Whisper models to turn
                  voice recordings and audio into text. The work covered the
                  complete user journey: recording, transcription, model
                  selection, file handling, settings and everyday usability.
                </p>
                <TestTypes
                  items={[
                    'Functional',
                    'Exploratory',
                    'Regression',
                    'Usability',
                    'Mobile',
                  ]}
                />
                <a
                  className="project-link"
                  href="https://apps.apple.com/us/app/whisperboard-voice-to-text/id1661442906"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on the App Store ↗
                </a>
              </article>

              <article className="independent-project">
                <div className="project-heading">
                  <div className="project-identity">
                    <img
                      className="app-icon"
                      src="/logos/vibeswitch.jpg"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div>
                      <h3>VibeSwitch Keyboard</h3>
                      <p>Instant AI text transformation</p>
                    </div>
                  </div>
                  <span>iPhone · iPad</span>
                </div>
                <p className="project-description">
                  I tested an AI keyboard that rewrites text into different
                  tones and styles, corrects grammar and lets users create their
                  own custom vibes. The scope included keyboard setup, text
                  transformation, usability and the end-to-end mobile journey.
                </p>
                <TestTypes
                  items={[
                    'Functional',
                    'Exploratory',
                    'Regression',
                    'Usability',
                    'Integration',
                    'Mobile',
                  ]}
                />
                <a
                  className="project-link"
                  href="https://apps.apple.com/us/app/vibeswitch-keyboard/id6743019968"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on the App Store ↗
                </a>
              </article>
            </div>
          </div>

          <div className="experience-group company-experience">
            <p className="group-label">Professional experience</p>

            <details className="company" open>
              <summary>
                <span className="company-identity">
                  <span className="company-logo-box">
                    <img src="/logos/access-softek.svg" alt="" />
                  </span>
                  <span className="company-name">
                    <small>Company</small>
                    <strong>Access Softek</strong>
                  </span>
                </span>
                <span className="company-role">
                  9 years · QA Engineer · QA Lead · People Manager
                </span>
              </summary>
              <div className="company-body">
                <p className="company-description">
                  For nine years, I worked on digital banking products and grew
                  from hands-on testing into QA leadership. I built test
                  coverage for complex customer and internal workflows and
                  helped shorten the release cycle from six weeks to three.
                </p>
                <div className="company-products">
                  <article className="product">
                    <p className="product-label">Product 01</p>
                    <h4>Online Account Opening (OAO)</h4>
                    <p>
                      A digital account-opening journey with multi-step forms,
                      identity flows, validations and integrations.
                    </p>
                    <TestTypes
                      items={[
                        'Accessibility',
                        'Initial',
                        'Functional',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                      ]}
                    />
                  </article>
                  <article className="product">
                    <p className="product-label">Product 02</p>
                    <h4>Lending</h4>
                    <p>
                      Digital lending workflows covering applications, business
                      rules, decisions and customer-facing states.
                    </p>
                    <TestTypes
                      items={[
                        'Accessibility',
                        'Initial',
                        'Functional',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                      ]}
                    />
                  </article>
                  <article className="product">
                    <p className="product-label">Product 03</p>
                    <h4>Orpheus</h4>
                    <p>
                      A banking product tested across core workflows, changing
                      requirements and repeated release cycles.
                    </p>
                    <TestTypes
                      items={[
                        'Initial',
                        'Functional',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                      ]}
                    />
                  </article>
                </div>
              </div>
            </details>

            <details className="company">
              <summary>
                <span className="company-identity">
                  <span className="company-logo-box company-logo-wide">
                    <img src="/logos/pls.png" alt="" />
                  </span>
                  <span className="company-name">
                    <small>Company</small>
                    <strong>PLS Logistics Services</strong>
                  </span>
                </span>
                <span className="company-role">QA Engineer</span>
              </summary>
              <div className="company-body">
                <p className="company-description">
                  I tested technology-enabled logistics software and worked
                  closely with product and development teams on
                  business-critical workflows.
                </p>
                <div className="company-products">
                  <article className="product">
                    <p className="product-label">Product</p>
                    <h4>Logistics management platform</h4>
                    <p>
                      End-to-end logistics workflows, business rules, data
                      handling and release readiness for day-to-day operations.
                    </p>
                    <TestTypes
                      items={[
                        'Functional',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                        'System',
                        'UAT',
                        'End-to-end',
                      ]}
                    />
                  </article>
                </div>
                <a
                  className="project-link"
                  href="https://www.plslogistics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit PLS Logistics Services ↗
                </a>
              </div>
            </details>

            <details className="company">
              <summary>
                <span className="company-identity">
                  <span className="company-logo-box company-logo-wide">
                    <img src="/logos/elephant-head-software.png" alt="" />
                  </span>
                  <span className="company-name">
                    <small>Company</small>
                    <strong>Elephant Head Software</strong>
                  </span>
                </span>
                <span className="company-role">QA Engineer · Manager</span>
              </summary>
              <div className="company-body">
                <p className="company-description">
                  I worked across client products, combining hands-on testing
                  with team leadership. I built QA practices from the ground up,
                  led a team of five and turned requirements into clear test
                  coverage and actionable bug reports.
                </p>
                <div className="company-products two-column-products">
                  <article className="product">
                    <p className="product-label">Product 01</p>
                    <span className="product-logo product-logo-pearson">
                      <img src="/logos/pearson.png" alt="" />
                    </span>
                    <h4>Pearson</h4>
                    <p>
                      Digital product workflows tested across browsers, releases
                      and changing functional requirements.
                    </p>
                    <TestTypes
                      items={[
                        'Functional',
                        'Performance',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                        'Cross-browser',
                      ]}
                    />
                  </article>
                  <article className="product">
                    <p className="product-label">Product 02</p>
                    <span
                      className="product-logo product-logo-titan"
                      aria-hidden="true"
                    >
                      <img src="/logos/ehs-clients.jpg" alt="" />
                    </span>
                    <h4>Titan</h4>
                    <p>
                      Core product functionality, end-to-end user flows and
                      release validation across supported environments.
                    </p>
                    <TestTypes
                      items={[
                        'Functional',
                        'Performance',
                        'Smoke',
                        'Regression',
                        'Exploratory',
                        'Compatibility',
                      ]}
                    />
                  </article>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="support-section" aria-labelledby="ukraine-title">
          <p className="eyebrow">Supporting Ukrainians in tech</p>
          <h2 id="ukraine-title">You don’t have to rebuild alone.</h2>
          <p>
            Having moved from Odesa to the Netherlands myself, I understand how
            much courage it takes to rebuild a professional life, communicate in
            another language and find confidence in an unfamiliar environment.
          </p>
          <p>
            I especially want to support Ukrainians entering QA, continuing a
            career abroad or learning to present their experience confidently in
            English. Sessions can be held in English or Ukrainian — or we can
            begin in Ukrainian and practise expressing the same ideas naturally
            in English.
          </p>
          <a className="text-link" href="#booking">
            Tell me about your situation →
          </a>
        </section>

        <section className="section" aria-labelledby="process-title">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title">One focused hour. A practical next step.</h2>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Choose a session</h3>
                <p>
                  Select the format that feels closest to your current need.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Share your context</h3>
                <p>
                  Tell me what is worrying you and what would make the session
                  useful. This answer is required before booking.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Meet and move forward</h3>
                <p>
                  We work on your real situation. You leave with focused
                  feedback and clear next actions.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section
          className="booking-section"
          id="booking"
          aria-labelledby="booking-title"
        >
          <div className="booking-intro">
            <p className="eyebrow">Book a session</p>
            <h2 id="booking-title">Tell me what’s going on.</h2>
            <p>
              You do not need a perfect explanation. A few honest sentences are
              enough. I’ll review your answer before we meet so we can spend the
              session working on the problem, not collecting background.
            </p>
          </div>
          <BookingForm />
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Before you book</h2>
          <details>
            <summary>Do I need QA experience?</summary>
            <p>
              No. QA Clarity sessions are suitable for complete beginners,
              career switchers and junior QA engineers.
            </p>
          </details>
          <details>
            <summary>Which language can we use?</summary>
            <p>
              Sessions are available in English or Ukrainian. We can also use
              both when you want to practise explaining technical ideas in
              English.
            </p>
          </details>
          <details>
            <summary>What should I prepare?</summary>
            <p>
              Only your situation and desired outcome. You may share a job
              description, portfolio or project link, but it is optional.
            </p>
          </details>
          <details>
            <summary>Is Pair Testing a complete product audit?</summary>
            <p>
              No. It is a focused collaborative session, not a full security,
              accessibility or performance audit.
            </p>
          </details>
        </section>
      </main>

      <footer>
        <div>
          <p className="footer-name">Yuliia Diakova</p>
          <p>QA mentoring and English practice for people in tech.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:dyakova.yulya@gmail.com">Email</a>
          <a href="https://linkedin.com/in/yuliia-diakova-qa">LinkedIn</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="legal" id="privacy">
          <p>
            Your booking details are used only to prepare for and arrange your
            session. Please do not submit passwords, financial information or
            other sensitive data.
          </p>
          <p>© 2026 Yuliia Diakova. Amsterdam, Netherlands.</p>
        </div>
      </footer>
    </div>
  );
}
