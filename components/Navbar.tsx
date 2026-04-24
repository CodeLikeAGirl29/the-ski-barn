'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Reset menu if window is resized to prevent UI ghosting
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* BRAND IDENTITY */}
        <Link
          href="/"
          className="font-black text-2xl italic uppercase tracking-tighter flex items-baseline gap-1"
          onClick={() => setIsOpen(false)}
        >
          THE<span className="text-orange-500 text-3xl">SKI</span>BARN
        </Link>

        {/* INDUSTRIAL HAMBURGER TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 text-orange-500 transition-colors"
          aria-label="Menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`} />
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`} />
          </div>
        </button>

        {/* DESKTOP NAV (Always Highlighted) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all border-b-2 py-1 ${active
                  ? 'text-orange-500 border-orange-500'
                  : 'text-slate-500 border-transparent hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* MOBILE NAV OVERLAY (Active page logic integrated) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center py-16 gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black italic uppercase tracking-widest transition-colors ${active ? 'text-orange-500' : 'text-slate-500 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 text-[10px] font-mono text-slate-700 tracking-[0.5em] uppercase">
              Baker_Facility_System.v1
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}