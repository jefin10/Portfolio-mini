import Navbar from '@/components/Navbar'

const projects = [
  {
    id: '01',
    name: 'EchoPay',
    description: 'Voice-driven UPI payments app on a 4-service microservices architecture. Custom CNN intent classifier at 90.44% accuracy and a NER pipeline extracting payee, amount, and phone number from speech. Secured with OTP and biometric MFA.',
    tech: ['Flutter', 'Django', 'Flask', 'Rasa', 'Keras', 'PostgreSQL'],
    github: 'https://github.com/jefin10',
  },
  {
    id: '02',
    name: 'RescueBytes',
    description: 'Full-stack disaster response platform with a React Native mobile app and React/TypeScript dashboard. Dynamic Safe Navigation Engine on OSRM with 75%+ route accuracy. Containerized on AWS with Docker; Gemini AI assistant cuts time-to-alert by 40%.',
    tech: ['React', 'React Native', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    github: 'https://github.com/jefin10',
  },
  {
    id: '03',
    name: 'Movieverse',
    description: 'Cross-platform movie discovery app with a hybrid recommendation engine across 5,000+ movies and a Naive Bayes NLP model at 80% accuracy for mood-based suggestions. Swipe-based UI with watchlists; powered by Django REST Framework and TMDB API.',
    tech: ['React Native', 'Django', 'Scikit-learn', 'REST API'],
    github: 'https://github.com/jefin10',
  },
  {
    id: '04',
    name: 'LifeLink',
    description: 'Hospital management system with session-based authentication using cookies, real-time data handling, and patient record management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/jefin10',
  },
  {
    id: '05',
    name: 'CelebFindr',
    description: 'Celebrity detection website powered by a custom TensorFlow model served via a Flask backend with OpenCV for image preprocessing.',
    tech: ['React', 'Flask', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/jefin10',
  },
  {
    id: '06',
    name: 'Konvo',
    description: 'Real-time messaging app with WebSocket-based chat and an integrated AI chatbot, built with React Native and a Node.js/Express backend.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/jefin10',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-xs font-mono uppercase tracking-widest mb-10 fade-up fade-up-1" style={{ color: 'var(--accent)' }}>
          Projects
        </h1>

        <div className="fade-up fade-up-2">
          {projects.map(({ id, name, description, tech, github }) => (
            <div
              key={id}
              className="flex gap-6 py-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p
                className="font-mono text-xs shrink-0 w-6 mt-1.5"
                style={{ color: 'var(--fg-muted)' }}
              >
                {id}
              </p>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-semibold text-base">{name}</h2>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs shrink-0 transition-colors duration-200 hover-accent"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    GitHub ↗
                  </a>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-muted)' }}>
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 font-mono"
                      style={{ background: 'var(--border)', color: 'var(--fg-muted)', borderRadius: '3px' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

      </main>
    </div>
  );
}
