import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 text-slate-500 hover:text-orange-500 font-black uppercase text-xs tracking-widest transition-colors">
          ← BACK TO SHOP
        </Link>

        {/* Hero Section */}
        <section className="border-b border-slate-800 pb-12 mb-12">
          <span className="text-orange-500 font-mono text-sm font-bold tracking-[0.3em] uppercase block mb-4">
            MISSION_STATEMENT // VER 1.0
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
            WHERE CODE <br />
            <span className="text-slate-500">MEETS THE BARN.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            The Ski Barn isn't just an inventory app. It's a high-performance system built to handle the chaos of a 50-unit jet ski graveyard in Baker, Florida.
          </p>
        </section>

        {/* The "Why" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic uppercase text-orange-500 underline decoration-2 underline-offset-8">THE DEVELOPER</h2>
            <p className="text-slate-400 leading-relaxed">
              Built by **CodeLikeAGirl**, a developer and technical writer obsessed with turning messy real-world data into clean, industrial-grade software. This project serves as a live demonstration of Next.js 15, TypeScript, and Server Action logic.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic uppercase text-orange-500 underline decoration-2 underline-offset-8">THE BACKSTORY</h2>
            <p className="text-slate-400 leading-relaxed">
              Working in a salvage barn means humidity, grease, and non-stop movement. Standard inventory software is too slow. The Ski Barn was engineered for one-tap labor logging and "at-a-glance" tech specs.
            </p>
          </div>
        </div>

        {/* Technical Capabilities List */}
        <div className="bg-[#1e293b] p-10 border-l-8 border-orange-500">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6 italic">Core Competencies</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-orange-500">▶</span> Next.js 15 App Router
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-500">▶</span> TypeScript Architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-500">▶</span> Technical Documentation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-500">▶</span> Real-world Data Ingestion
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}