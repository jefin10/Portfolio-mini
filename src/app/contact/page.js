import Navbar from '@/components/Navbar'

const links = [
  { label: 'Email',    value: 'jefinfrancis10@gmail.com',    href: 'mailto:jefinfrancis10@gmail.com' },
  { label: 'GitHub',   value: 'github.com/jefin10',          href: 'https://github.com/jefin10' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jefinfrancis', href: 'https://linkedin.com/in/jefinfrancis' },
  { label: 'Phone',    value: '+91 89217 12973',             href: 'tel:+918921712973' },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
      <Navbar />
      <div className="flex items-center justify-center flex-grow px-6">
        <div className="w-full max-w-lg">

          <h1 className="text-4xl font-bold mb-2 md:text-5xl fade-up fade-up-1">
            Let&apos;s connect.
          </h1>
          <p className="text-sm mb-12 fade-up fade-up-2" style={{ color: 'var(--fg-muted)' }}>
            Open to roles, collaborations, and interesting problems.
          </p>

          <div className="fade-up fade-up-3">
            {links.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between py-4 group"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {label}
                </span>
                <span
                  className="text-sm transition-colors duration-200 hover-accent"
                  style={{ color: 'var(--fg)' }}
                >
                  {value} ↗
                </span>
              </a>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>

        </div>
      </div>
    </div>
  );
}
