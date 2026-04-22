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
            ESTABLISHED // BAKER, FL
          </span>
          <h1 className="text-6xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
            MATT STPIERRE <br />
            <span className="text-slate-500">THE SKI BARN.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            A lifetime of mechanical obsession brought from the Maine coast to the Florida Panhandle. We don't just part out skis; we salvage performance.
          </p>
        </section>

        {/* The Founder Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic uppercase text-orange-500 underline decoration-2 underline-offset-8">THE FOUNDER</h2>
            <p className="text-slate-400 leading-relaxed">
              <strong>Matt StPierre</strong> started turning wrenches in Brunswick, Maine, long before the first QR code hit a hull. He built The Ski Barn on the belief that "salvage" shouldn't mean "mystery." Every unit that enters our 50-unit graveyard in Baker is personally inspected and cataloged to ensure the Emerald Coast stays on the water.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic uppercase text-orange-500 underline decoration-2 underline-offset-8">THE OPERATION</h2>
            <p className="text-slate-400 leading-relaxed">
              Located in Baker, Florida, the shop is a specialized service bay designed for one thing: precision teardowns. We focus on late-model Sea-Doo, Yamaha, and Kawasaki units. By combining traditional New England grit with modern tracking, Matt ensures that every component shipped out of the barn is a verified win for the customer.
            </p>
          </div>
        </div>

        {/* The Technical Edge */}
        <div className="bg-[#1e293b] p-10 border-l-8 border-orange-500">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6 italic">Shop Logistics & Tech</h3>
          <p className="text-slate-400 mb-6 text-sm">
            To support Matt's hands-on expertise, we've implemented a custom digital infrastructure built by **CodeLikeAGirl**. This allows for:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 font-mono text-sm">
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-orange-500">▶</span> 100% QR-Tracked Inventory
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-orange-500">▶</span> Real-Time "Ready-to-Ship" Logs
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-orange-500">▶</span> Precision Labor Clocking
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-orange-500">▶</span> Data-Backed Compression Specs
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center border-t border-slate-800 pt-12">
          <p className="text-slate-500 uppercase font-bold tracking-widest text-xs mb-4 text-center">Ready to get back on the water?</p>
          <Link href="/contact" className="text-orange-500 font-black italic text-4xl hover:text-white transition-colors uppercase tracking-tighter">
            Message Us
          </Link>
        </div>
      </div>
    </main>
  );
}