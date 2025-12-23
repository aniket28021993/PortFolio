import './App.css'

const skills = [
  'ASP.NET Core',
  'ASP.NET Web API',
  'SQL Server',
  'Docker',
  'Nginx',
  'VB.NET',
  'MVC',
  'IIS',
  'Angular',
  'Microservices',
  'RabbitMQ',
]

const projects = [
  {
    name: 'Safeguard',
    stack: 'VB.NET',
    url: 'https://app.gradientway.com/',
    description:
      'Transportation compliance is complex, but you do not have to navigate it alone. Gradient’s experts guide each step of the compliance journey for carriers.',
  },
  {
    name: 'PermitBook',
    stack: 'ASP.NET Core with Razor Pages',
    url: 'https://app.permitbook.com/',
    description:
      'Client hub for drivers, trucks, and trailers. Uploads compliance documents and manages payments for ongoing services.',
  },
  {
    name: 'Navigate',
    stack: 'ASP.NET MVC',
    url: 'https://navigate.gradientway.com/',
    description:
      'Customer portal for payments, employee visibility, and document downloads aligned with Safeguard programs.',
  },
]

const microserviceFlow = [
  'Legacy Service publishes events to RabbitMQ.',
  'NotificationSchedulingService stores event data.',
  'Informer schedules delivery and selects upcoming events.',
  'Report Service pulls content and attachments.',
  'Trucking Solution enriches recipient details.',
  'Notify Service sends the final communication.',
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>Aniket Sharad Dalvi</h1>
          <p className="role">Manager, Application Development</p>
          <p className="summary">
            Leading application delivery for transportation compliance platforms,
            with focus on modernization, automation, and customer-ready products.
          </p>
          <div className="hero-metrics">
            <div>
              <h3>12+</h3>
              <p>Enterprise apps supported</p>
            </div>
            <div>
              <h3>5-6</h3>
              <p>Notification microservices</p>
            </div>
            <div>
              <h3>Always</h3>
              <p>Compliance-first delivery</p>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h2>Focus Areas</h2>
          <ul>
            <li>Transportation compliance & digital workflows</li>
            <li>Modernizing VB.NET, MVC, and IIS estates</li>
            <li>Microservices orchestration with RabbitMQ</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-heading">
          <h2>Core Skills</h2>
          <p>End-to-end delivery across web, data, and infrastructure.</p>
        </div>
        <div className="pill-grid">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Platforms and services delivered with cross-functional teams.</p>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <div className="card-header">
                <h3>{project.name}</h3>
                <span>{project.stack}</span>
              </div>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noreferrer">
                Visit live product
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-panel">
        <div className="section-heading">
          <h2>Notification Microservices</h2>
          <p>
            Event-driven workflow that delivers compliance updates and scheduled
            communications.
          </p>
        </div>
        <ol className="flow-list">
          {microserviceFlow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default App
