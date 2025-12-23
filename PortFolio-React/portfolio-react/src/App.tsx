import './App.css'

const stats = [
  { value: '10+ Years', label: 'Product & platform delivery' },
  { value: '4', label: 'Major platforms launched' },
  { value: '4–5', label: 'Developers led per squad' },
]

const focusAreas = [
  {
    title: 'Modernization & Migration',
    description: 'Guiding legacy VB.NET and MVC stacks into modern, cloud-ready platforms.',
  },
  {
    title: 'Microservices Architecture',
    description: 'Designing event-driven services with RabbitMQ, NBus, and API gateways.',
  },
  {
    title: 'Client-Ready Delivery',
    description: 'Partnering with stakeholders to ship compliant, revenue-driving software.',
  },
]

const projects = [
  {
    name: 'Safeguard',
    description:
      'In-house platform for truck and trailer compliance with orders, payments, scheduling, accounting, and reporting.',
  },
  {
    name: 'Navigate',
    description:
      'Customer portal for operations, driver onboarding, drug-test scheduling, and Stripe-powered payments.',
  },
  {
    name: 'Vendor',
    description:
      'Supply order workflow with Google Maps integration for locating nearby medical providers.',
  },
  {
    name: 'PermitBook',
    description:
      'Role-based company management with subscriptions and document tracking for fleets.',
  },
]

const experiences = [
  {
    title: 'Application Development Manager · ACV Solutions Pvt Ltd',
    period: 'Aug 2024 – Present · Miraroad, MH',
    summary:
      'Lead a four-person delivery team, align US clients on requirements, and ship microservice-driven products using .NET Core and Angular 17.',
  },
  {
    title: 'Senior Software Developer · Logicserve Digital',
    period: 'May 2019 – Aug 2024 · Mahape, MH',
    summary:
      'Built Digiverse workflow platforms, owned architecture decisions, and led analytics and dashboard initiatives.',
  },
  {
    title: 'Team Lead · GreenPoint Global',
    period: 'Sept 2015 – May 2019 · Belapur, MH',
    summary:
      'Delivered education platforms like tg campus and Darwin Prep with full lifecycle ownership and stakeholder reporting.',
  },
]

const techStacks = [
  {
    title: 'Languages & Frameworks',
    items: ['DOTNET Core', 'ASP.NET', 'C#', 'Angular 17', 'ADO.NET', 'HTML5', 'CSS'],
  },
  {
    title: 'Architecture & Tools',
    items: ['Microservices', 'Web API', 'NSwag', 'Entity Framework', 'RabbitMQ', 'NBus'],
  },
  {
    title: 'Cloud & Data',
    items: ['Azure', 'Google Cloud Console', 'BigQuery', 'Firebase'],
  },
]

const integrations = [
  'Stripe API for payments',
  'Zoho API for ticketing automation',
  'SignNow API for electronic signatures',
  'NSwag Studio for API clients and NuGet generation',
]

const leadership = [
  'Strategic planning & execution',
  'Agile/Scrum and hybrid delivery',
  'Stakeholder communication',
  'Team mentorship & growth',
]

const credentials = [
  'Best Software Developer award (year 1)',
  'Promoted to Team Lead within two years',
  'Microsoft-led technical training participant',
  'BE Computer Engineering · RSCOE (2014)',
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Application Development Manager</p>
          <h1>Aniket Dalvi</h1>
          <p className="summary">
            Building enterprise-grade platforms that modernize transportation compliance, streamline
            operations, and deliver measurable business value.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="mailto:dalvianiket2928@gmail.com">
              Contact via Email
            </a>
            <a className="ghost-btn" href="tel:+918850389492">
              +91 8850389492
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card">
          <h2>About</h2>
          <p>
            With 10+ years in application development, I lead cross-functional teams to deliver
            secure, scalable software. My focus blends architecture, agile execution, and hands-on
            engineering to ship on time and within budget.
          </p>
          <div className="hero-tags">
            <span>Microservices</span>
            <span>Azure DevOps</span>
            <span>Agile Delivery</span>
            <span>API Integrations</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-heading">
          <h2>What I Focus On</h2>
          <p>Core pillars that keep delivery teams aligned and outcomes measurable.</p>
        </div>
        <div className="feature-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="feature-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Featured Platforms</h2>
          <p>Flagship products shipped for compliance, operations, and customer workflows.</p>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-panel">
        <div className="section-heading">
          <h2>Architecture & Integrations</h2>
          <p>Microservices portfolio and external systems powering modern delivery.</p>
        </div>
        <div className="split-panel">
          <div>
            <h3>Microservices Portfolio</h3>
            <ul>
              <li>PaymentGatewayService</li>
              <li>LegacyPublishingEventService</li>
              <li>NotificationSchedulingService</li>
              <li>GradientWebhook</li>
              <li>SignatureService</li>
              <li>ReportService</li>
              <li>NotifyService</li>
              <li>InformerScheduler</li>
              <li>TruckingSolutionACLService</li>
              <li>AccountingService</li>
            </ul>
          </div>
          <div>
            <h3>Integrations</h3>
            <ul>
              {integrations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Career Snapshot</h2>
          <p>Recent leadership roles and the impact delivered in each.</p>
        </div>
        <div className="timeline">
          {experiences.map((role) => (
            <article key={role.title} className="timeline-card">
              <div>
                <h3>{role.title}</h3>
                <span>{role.period}</span>
              </div>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Technology Stack</h2>
          <p>Platforms and tooling I rely on to ship modern software.</p>
        </div>
        <div className="skill-grid">
          {techStacks.map((stack) => (
            <article key={stack.title} className="skill-card">
              <h3>{stack.title}</h3>
              <div className="pill-grid">
                {stack.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Leadership Strengths</h2>
          <p>How I support teams and stakeholders throughout delivery.</p>
        </div>
        <div className="pill-grid">
          {leadership.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Credentials & Highlights</h2>
          <p>Recognition and academic milestones that shaped my leadership journey.</p>
        </div>
        <div className="highlight-grid">
          {credentials.map((item) => (
            <div key={item} className="highlight-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
