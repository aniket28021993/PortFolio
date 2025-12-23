import { useState } from 'react'
import './App.css'

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

const projects = [
  {
    name: 'Safeguard',
    description:
      'In-house platform for trucks and trailers management, covering orders, client interviews, payments, scheduling, accounting, dashboards, and reporting.',
  },
  {
    name: 'Navigate',
    description:
      'End-user portal for truck and trailer operations, driver interviews, drug-test scheduling, and secure Stripe-based payments.',
  },
  {
    name: 'Vendor',
    description:
      'Supply order management platform with Google Maps integration for locating nearby medical providers.',
  },
  {
    name: 'PermitBook',
    description:
      'Company management platform with role-based access, subscription handling, and document management for drivers, trucks, and trailers.',
  },
]

const experiences = [
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

const accomplishments = [
  'Awarded Best Software Developer in first year.',
  'Promoted to Team Lead within two years, managing a 4–5 member team.',
  'Recognized as North Star and consistently received top annual ratings.',
  'Participated in Microsoft-led technical training sessions.',
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

const tabs = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'accomplishments', label: 'Wins' },
  { id: 'education', label: 'Education' },
] as const

function App() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('experience')

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>Aniket Dalvi</h1>
          <p className="role">Application Development Manager</p>
          <p className="summary">
            Accomplished application development leader with 10+ years of experience guiding
            cross-functional teams, modernizing enterprise platforms, and aligning technology
            execution with business goals.
          </p>
          <div className="hero-contact">
            <div>
              <span>Email</span>
              <a href="mailto:dalvianiket2928@gmail.com">dalvianiket2928@gmail.com</a>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:+918850389492">+91 8850389492</a>
            </div>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric">
              <h3>10+ Years</h3>
              <p>Application delivery experience</p>
            </div>
            <div className="hero-metric">
              <h3>4</h3>
              <p>Developers led at ACV Solutions</p>
            </div>
            <div className="hero-metric">
              <h3>4</h3>
              <p>Major platforms delivered</p>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h2>Focus Areas</h2>
          <ul>
            <li>Enterprise application migrations & modernization</li>
            <li>Event-driven microservices with RabbitMQ and NBus</li>
            <li>API integrations for payments, e-signatures, and ticketing</li>
          </ul>
        </div>
      </header>

      <section className="tabbed-sections">
        <div className="tab-bar" role="tablist" aria-label="Portfolio modules">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {activeTab === 'experience' && (
            <section className="section">
              <div className="section-heading">
                <h2>Professional Experience</h2>
                <p>Leadership roles across application delivery, architecture, and mentoring.</p>
              </div>
              <div className="experience-list">
                {experiences.map((role) => (
                  <article key={role.title} className="experience-card">
                    <div className="experience-header">
                      <div>
                        <h3>{role.title}</h3>
                        <p>{role.company}</p>
                      </div>
                      <div className="experience-meta">
                        <span>{role.period}</span>
                        <span>{role.location}</span>
                      </div>
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
          )}

          {activeTab === 'skills' && (
            <section className="section">
              <div className="section-heading">
                <h2>Technical Skills</h2>
                <p>Hands-on expertise across full-stack development, architecture, and cloud tools.</p>
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
          )}

          {activeTab === 'projects' && (
            <section className="section">
              <div className="section-heading">
                <h2>Key Platforms Delivered</h2>
                <p>Flagship products built for compliance, operations, and customer workflows.</p>
              </div>
              <div className="card-grid">
                {projects.map((project) => (
                  <article key={project.name} className="card">
                    <div className="card-header">
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'services' && (
            <section className="section dark-panel">
              <div className="section-heading">
                <h2>Microservices & Integrations</h2>
                <p>Service portfolio supporting event-driven and integration-heavy workflows.</p>
              </div>
              <div className="dual-list">
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
          )}

          {activeTab === 'leadership' && (
            <section className="section">
              <div className="section-heading">
                <h2>Leadership & Management Skills</h2>
                <p>Core competencies that drive high-performing, cross-functional teams.</p>
              </div>
              <div className="pill-grid">
                {leadershipSkills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'accomplishments' && (
            <section className="section">
              <div className="section-heading">
                <h2>Accomplishments</h2>
                <p>Recognition and achievements throughout the career journey.</p>
              </div>
              <ul className="highlight-list">
                {accomplishments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {activeTab === 'education' && (
            <section className="section">
              <div className="section-heading">
                <h2>Education</h2>
                <p>Academic milestones and professional training.</p>
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
          )}
        </div>
      </section>
    </div>
  )
}

export default App
