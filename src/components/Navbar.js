"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/skills',   label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact',  label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          JF
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200 hover-fg"
              style={{ color: pathname === href ? 'var(--accent)' : 'var(--fg-muted)' }}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 transition-colors duration-200"
          style={{ color: 'var(--fg-muted)' }}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden pb-3" style={{ borderTop: '1px solid var(--border)' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-sm transition-colors duration-200 hover-fg"
              style={{ color: pathname === href ? 'var(--accent)' : 'var(--fg-muted)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
