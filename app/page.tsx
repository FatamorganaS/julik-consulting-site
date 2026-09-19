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

const testingAreas = [
  'Functional',
  'Regression',
  'Smoke',
  'Exploratory',
  'Integration',
  'API',
  'UAT',
  'System',
  'Cross-browser',
  'Cross-platform',
];

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
              Products I’ve helped make more reliable.
            </h2>
            <p>
              My experience spans digital banking, logistics, enterprise
              software and independent iOS products — across web, mobile,
              desktop and APIs. These are selected examples from a much wider
              portfolio of products I have tested.
            </p>
          </div>

          <div className="testing-areas" aria-label="Testing experience">
            {testingAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <div className="experience-list">
            <details>
              <summary>
                <span>
                  <strong>WhisperBoard</strong>
                  <small>On-device voice transcription</small>
                </span>
                <span className="experience-meta">
                  iOS · Independent product
                </span>
              </summary>
              <div className="experience-body">
                <p>
                  I tested WhisperBoard, an iPhone and iPad app that uses
                  on-device Whisper models to turn voice recordings and audio
                  into text. The work covered the complete user journey:
                  recording, transcription, model selection, file handling,
                  settings and everyday usability.
                </p>
                <a
                  href="https://apps.apple.com/us/app/whisperboard-voice-to-text/id1661442906"
                  target="_blank"
                  rel="noreferrer"
                >
                  View WhisperBoard on the App Store ↗
                </a>
              </div>
            </details>

            <details>
              <summary>
                <span>
                  <strong>Access Softek</strong>
                  <small>Digital banking products</small>
                </span>
                <span className="experience-meta">Web · Mobile · API</span>
              </summary>
              <div className="experience-body">
                <p>
                  As a QA Lead, I worked across customer-facing and internal
                  banking products, established practical QA processes and built
                  test coverage for complex user and business workflows. This
                  work helped shorten the release cycle from six weeks to three.
                </p>
                <ul className="product-list" aria-label="Products tested">
                  <li>Online Account Opening (OAO)</li>
                  <li>Lending</li>
                  <li>Admin Tool</li>
                  <li>Solutions</li>
                  <li>Delivered</li>
                </ul>
              </div>
            </details>

            <details>
              <summary>
                <span>
                  <strong>PLS Logistics Services</strong>
                  <small>Logistics management platform</small>
                </span>
                <span className="experience-meta">
                  Web · End-to-end workflows
                </span>
              </summary>
              <div className="experience-body">
                <p>
                  I tested core workflows for a technology-enabled logistics
                  platform. My work included test design, functional, smoke,
                  exploratory, UAT and system testing, clear bug reporting and
                  close collaboration with the product and development teams.
                </p>
                <a
                  href="https://www.plslogistics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit PLS Logistics Services ↗
                </a>
              </div>
            </details>

            <details>
              <summary>
                <span>
                  <strong>Pearson</strong>
                  <small>Digital product testing</small>
                </span>
                <span className="experience-meta">Functional · Regression</span>
              </summary>
              <div className="experience-body">
                <p>
                  I tested Pearson product workflows across releases,
                  translating requirements into structured test scenarios,
                  validating key user journeys and documenting defects clearly
                  for the development team.
                </p>
              </div>
            </details>

            <details>
              <summary>
                <span>
                  <strong>Titan</strong>
                  <small>Product and release validation</small>
                </span>
                <span className="experience-meta">Functional · System</span>
              </summary>
              <div className="experience-body">
                <p>
                  I tested Titan as part of a broader client portfolio, covering
                  core functionality, end-to-end user flows and release
                  readiness. The work combined careful requirement analysis with
                  exploratory and regression testing.
                </p>
              </div>
            </details>

            <details>
              <summary>
                <span>
                  <strong>Elephant Head Software</strong>
                  <small>Multiple enterprise client products</small>
                </span>
                <span className="experience-meta">Web · Mobile · Desktop</span>
              </summary>
              <div className="experience-body">
                <p>
                  At Elephant Head Software, I worked across a broad portfolio
                  of client products, including Verizon and many others. I
                  combined hands-on cross-platform testing with team leadership,
                  built QA practices from the ground up and led a team of five.
                  This selected list represents only part of the products I have
                  tested throughout my career.
                </p>
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
