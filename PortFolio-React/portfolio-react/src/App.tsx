import './App.css'

const experience = [
  {
    title: 'Application Development Manager',
    company: 'ACV Solutions Pvt Ltd',
    location: 'Miraroad, MH',
    period: 'Aug 2024 – Present',
    highlights: [
      'Lead a team of four developers and partner with USA-based clients for end-to-end delivery.',
      'Own requirement gathering, task management, and on-time project execution.',
      'Deliver solutions using .NET Core, Angular 17, microservices, webhooks, and Azure DevOps.',
      'Integrated Zoho, SignNow, and Stripe APIs for ticketing, e-signatures, and payments.',
      'Built microservices for payment, notifications, reporting, and integration workflows using RabbitMQ and NBus.',
      'Delivered Safeguard, Navigate, Vendor, and PermitBook product releases.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Logicserve Digital',
    location: 'Mahape, MH',
    period: 'May 2019 – Aug 2024',
    highlights: [
      'Built Digiverse, a workflow platform with client and agency portals, invoicing, and partner management.',
      'Owned implementation, code reviews, R&D, and architecture for multiple product lines.',
      'Mentored junior developers and facilitated best-practice knowledge sharing.',
      'Collaborated with PM, design, and QA to define scope and deliverables.',
      'Built Azure dashboards for stories, tasks, bugs, and enhancements.',
      'Implemented Adobe Analytics, GA3, and GA4 integrations via Tag Manager and GCP.',
    ],
  },
  {
    title: 'Team Lead',
    company: 'GreenPoint Global',
    location: 'Belapur, MH',
    period: 'Sept 2015 – May 2019',
    highlights: [
      'Led delivery for tg campus, an online tutoring creation and marketing platform.',
      'Supported Darwin Prep for SAT/ACT/SHAT preparation in the US market.',
      'Produced high-level and low-level designs for scalable learning products.',
      'Planned milestones, communicated deadlines, and resolved defects with cross-functional teams.',
      'Delivered weekly stakeholder reports with milestones and updates.',
    ],
  },
]

const projects = [
  {
    name: 'Safeguard',
    description:
      'In-house platform for trucks and trailers management, covering orders, client interviews, payments, scheduling, accounting, dashboards, and reporting.',
    tags: ['Microservices', 'Operations', 'Payments'],
  },
  {
    name: 'Navigate',
    description:
      'End-user portal for truck and trailer operations, driver interviews, drug-test scheduling, and secure Stripe-based payments.',
    tags: ['Customer Portal', 'Scheduling', 'Stripe'],
  },
  {
    name: 'Vendor',
    description:
      'Supply order management platform with Google Maps integration for locating nearby medical providers.',
    tags: ['Maps', 'Orders', 'Logistics'],
  },
  {
    name: 'PermitBook',
    description:
      'Company management platform with role-based access, subscription handling, and document management for drivers, trucks, and trailers.',
    tags: ['Subscriptions', 'Compliance', 'RBAC'],
  },
]

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: [
      'DOTNET Core',
      'ASP.NET',
      'C#',
      'Angular 17',
      'ADO.NET',
      'HTML5',
      'CSS',
      'Bootstrap 5',
    ],
  },
  {
    title: 'Architecture & Tools',
    items: [
      'Microservices',
      'Web API',
      'NSwag',
      'Entity Framework',
      'IIS Deployment',
      'RabbitMQ',
      'NBus',
    ],
  },
  {
    title: 'Cloud & Data',
    items: ['Azure', 'Google Cloud Console', 'BigQuery', 'Cloud Buckets', 'Firebase'],
  },
  {
    title: 'Other',
    items: ['Stripe API', 'Zoho API', 'SignNow API', 'DevOps', 'Agile/Scrum'],
  },
]

const leadershipSkills = [
  'Team Leadership & Mentorship',
  'Strategic Planning & Execution',
  'Project Management (Agile/Scrum, Waterfall, Hybrid)',
  'Resource Allocation & Prioritization',
  'Stakeholder Communication',
  'Performance Management & Goal Setting',
  'Change Management & Process Improvement',
  'Risk Management & Problem Solving',
  'Cross-Functional Collaboration',
  'Innovation & Continuous Improvement',
]

const education = [
  {
    program: 'Computer Software Engineer',
    school: 'CDAC, Juhu',
    period: 'Sept 2015',
  },
  {
    program: 'BE – Computer Engineer',
    school: 'RSCOE, Chiplun',
    period: 'June 2014',
  },
  {
    program: 'Diploma – Computer Engineer',
    school: 'Muchhala Polytechnic, Thane',
    period: 'June 2011',
  },
  {
    program: 'Maharashtra State Board',
    school: 'St. Xavier High School, Thane',
    period: 'May 2008',
  },
]

const microservices = [
  'PaymentGatewayService',
  'LegacyPublishingEventService',
  'NotificationSchedulingService',
  'GradientWebhook',
  'SignatureService',
  'ReportService',
  'NotifyService',
  'InformerScheduler',
  'TruckingSolutionACLService',
  'AccountingService',
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="logo">Aniket Dalvi</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a className="ghost-btn" href="tel:+918850389492">
              Call
            </a>
            <a className="primary-btn" href="mailto:dalvianiket2928@gmail.com">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-main">
            <p className="eyebrow">Portfolio</p>
            <h1>Application Development Manager focused on modern .NET platforms.</h1>
            <p className="summary">
              Accomplished application development leader with 10+ years of experience guiding
              cross-functional teams, modernizing enterprise platforms, and aligning technology
              execution with business goals.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="mailto:dalvianiket2928@gmail.com">
                Email me
              </a>
              <a className="ghost-btn" href="tel:+918850389492">
                Call +91 8850389492
              </a>
            </div>
            <div className="hero-metrics">
              <div>
                <h3>10+ Years</h3>
                <p>Application delivery experience</p>
              </div>
              <div>
                <h3>4</h3>
                <p>Developers led at ACV Solutions</p>
              </div>
              <div>
                <h3>4</h3>
                <p>Major platforms delivered</p>
              </div>
            </div>
          </div>
          <aside className="hero-card">
            <div>
              <h2>Now</h2>
              <p>
                Leading enterprise platform modernization with event-driven microservices and
                customer-facing portals across trucking, compliance, and payments.
              </p>
            </div>
            <div className="hero-list">
              <h3>Focus Areas</h3>
              <ul>
                <li>Enterprise application migrations & modernization</li>
                <li>Event-driven microservices with RabbitMQ and NBus</li>
                <li>API integrations for payments, e-signatures, and ticketing</li>
              </ul>
            </div>
            <div className="hero-tags">
              <span>.NET Core</span>
              <span>Angular 17</span>
              <span>Azure DevOps</span>
              <span>Microservices</span>
            </div>
          </aside>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Leadership across delivery, architecture, and mentoring.</h2>
            </div>
            <p className="section-lede">
              Building teams and systems that keep mission-critical platforms running reliably.
            </p>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <article key={role.title} className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{role.title}</h3>
                    <p>
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <span>{role.period}</span>
                </div>
                <ul>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-header">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Platforms built for operations, compliance, and customer workflows.</h2>
            </div>
            <p className="section-lede">
              End-to-end delivery from discovery to production, including integrations and
              automation.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-header">
            <div>
              <p className="eyebrow">Skills</p>
              <h2>Technical depth across product engineering and cloud delivery.</h2>
            </div>
            <p className="section-lede">
              Hands-on expertise across the full stack, integrations, and operations tooling.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="pill-grid">
                  {group.items.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="services-title">
          <div className="section-header">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-title">Microservices & integrations portfolio.</h2>
            </div>
            <p className="section-lede">
              Supporting event-driven and integration-heavy workflows for enterprise platforms.
            </p>
          </div>
          <div className="split-panel">
            <div>
              <h3>Microservices</h3>
              <ul>
                {microservices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Integrations</h3>
              <ul>
                <li>Stripe API for secure payment processing</li>
                <li>Zoho API for automated ticket creation and management</li>
                <li>SignNow API for electronic signature workflows</li>
                <li>NSwag Studio for API client and NuGet generation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="leadership-title">
          <div className="section-header">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 id="leadership-title">Managing high-performing teams.</h2>
            </div>
            <p className="section-lede">
              Core competencies that drive cross-functional execution and delivery quality.
            </p>
          </div>
          <div className="pill-grid">
            {leadershipSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-header">
            <div>
              <p className="eyebrow">Education</p>
              <h2>Academic milestones and training.</h2>
            </div>
            <p className="section-lede">Formal education that supports delivery leadership.</p>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.program} className="education-card">
                <h3>{item.program}</h3>
                <p>{item.school}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <h2>Let&apos;s build the next platform.</h2>
          <p>
            Available for leadership roles, architecture consulting, and modernization roadmaps.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:dalvianiket2928@gmail.com">dalvianiket2928@gmail.com</a>
          <a href="tel:+918850389492">+91 8850389492</a>
          <span>Miraroad, MH · India</span>
        </div>
      </footer>
    </div>
  )
}

export default App
