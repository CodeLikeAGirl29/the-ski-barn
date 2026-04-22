'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Helper to check if the link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Shop', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="border-b border-white/10 py-4 px-6 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="font-black text-2xl italic uppercase tracking-tighter">
          THE<span className="text-brand-orange text-3xl">SKI</span>BARN
        </Link>

        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-black uppercase tracking-widest transition-all ${isActive(link.href)
              ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
              : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            {link.name}
          </Link>
        ))}

        {/* The Direct Line Button */}
        < a
          href="tel:8506870012"
          className="bg-brand-orange text-black font-black px-4 py-2 text-[10px] uppercase tracking-widest italic skew-x-[-10deg] hover:bg-white transition-all"
        >
          <span className="inline-block skew-x-[10deg]">
            (850) 687-0012
          </span>
        </a>
      </div>
    </nav >
  );
}