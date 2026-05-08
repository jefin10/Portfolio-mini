import Navbar from '@/components/Navbar'

const skills = [
  { category: 'Languages',      items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'C', 'C++', 'SQL'] },
  { category: 'Frontend',       items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { category: 'Backend',        items: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI'] },
  { category: 'Mobile',         items: ['React Native', 'Flutter', 'Riverpod'] },
  { category: 'Machine Learning', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'pandas', 'OpenCV', 'MediaPipe', 'Matplotlib'] },
  { category: 'Databases',      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase'] },
  { category: 'Cloud & DevOps', items: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Linux'] },
  { category: 'Tools',          items: ['Git', 'GitHub', 'REST APIs', 'Postman', 'Agile', 'Scrum', 'Microservices'] },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-xs font-mono uppercase tracking-widest mb-10 fade-up fade-up-1" style={{ color: 'var(--accent)' }}>
          Skills
        </h1>

        <div className="fade-up fade-up-2">
          {skills.map(({ category, items }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row py-5 gap-3 sm:gap-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p
                className="text-sm font-medium shrink-0 w-36"
                style={{ color: 'var(--fg)' }}
              >
                {category}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {items.join(' · ')}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

      </main>
    </div>
  );
}
