import Navbar from '@/components/Navbar'

const experiences = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Krisko',
    location: 'Remote',
    period: 'Jun 2025 – Present',
    bullets: [
      'Built a cross-platform Flutter POS app for an e-bike rental platform, cutting operational overhead by 2x and eliminating billing errors.',
      'Engineered a Flutter social media app with integrated payment gateway, scaling to 1,000+ active users with zero payment failures.',
      'Shipped 3+ SEO-optimized web apps with Next.js and TypeScript in an Agile environment, owning the full feature lifecycle.',
    ],
  },
  {
    role: 'Product Development Intern',
    company: 'Vektas Technologies Pvt. Ltd.',
    location: 'Trivandrum, Kerala',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Designed simulation modules for an autonomous boat using ROS and Gazebo; tested 4+ hull configurations and identified the catamaran as the most stable design.',
      'Configured ArduPilot and Mission Planner, enabling the first real-world autonomous deployment and reducing manual piloting dependency by 100%.',
    ],
  },
];

const achievements = [
  'App Development Club Lead, Betalabs IIIT Kottayam — organized Techashy, a national 24h hackathon with Rs. 80,000 prize pool; mentored 100+ students in Flutter.',
  'Co-Organizer & Tech Lead, Code Kalari — national hackathon across 25+ colleges with 250+ finalists, Rs. 1,50,000 prize pool.',
  '3rd Place, DUK Hackathon 2026 (Rs. 10,000 prize) — AI-powered eco-routing platform out of 150+ teams.',
  'Solved 500+ problems on LeetCode.',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-lg leading-relaxed fade-up fade-up-1" style={{ color: 'var(--fg-muted)' }}>
          Computer Science student at IIIT Kottayam building production software across web, mobile, and ML.
          Currently shipping Flutter apps and Next.js products at Krisko. I care about clean architecture,
          fast iteration, and software that actually ships.
        </p>

        <section className="mt-14 fade-up fade-up-2">
          <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
            Experience
          </h2>
          <div>
            {experiences.map((exp, i) => (
              <div key={i} className="py-7" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--fg-muted)' }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <p className="text-xs font-mono whitespace-nowrap mt-1" style={{ color: 'var(--fg-muted)' }}>
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 fade-up fade-up-3">
          <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
            Education
          </h2>
          <div className="py-7" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">B.Tech in Computer Science and Engineering</p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--fg-muted)' }}>
                  Indian Institute of Information Technology, Kottayam
                </p>
                <p className="text-sm mt-2 font-mono" style={{ color: 'var(--accent)' }}>
                  CGPA: 8.11 / 10.00
                </p>
              </div>
              <p className="text-xs font-mono whitespace-nowrap mt-1" style={{ color: 'var(--fg-muted)' }}>
                Aug 2023 – May 2027
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 fade-up fade-up-4">
          <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
            Achievements
          </h2>
          <div className="py-7 space-y-3" style={{ borderTop: '1px solid var(--border)' }}>
            {achievements.map((a, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                — {a}
              </p>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
