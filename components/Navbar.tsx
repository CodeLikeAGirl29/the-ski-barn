import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 py-4 px-6 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="font-black text-2xl italic uppercase tracking-tighter">
          THE<span className="text-brand-orange text-3xl">SKI</span>BARN
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link href="/about" className="hover:text-brand-orange transition-colors">About</Link>
          <a href="/#services" className="hover:text-brand-orange transition-colors">Services</a>
          <a href="/#inventory" className="hover:text-brand-orange transition-colors">Inventory</a>
        </div>

        {/* The Direct Line Button */}
        <a
          href="tel:8506870012"
          className="bg-brand-orange text-black font-black px-4 py-2 text-[10px] uppercase tracking-widest italic skew-x-[-10deg] hover:bg-white transition-all"
        >
          <span className="inline-block skew-x-[10deg]">
            (850) 687-0012
          </span>
        </a>
      </div>
    </nav>
  );
}