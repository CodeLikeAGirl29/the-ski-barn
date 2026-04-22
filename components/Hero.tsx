'use client'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-brand-black py-28 px-6 border-b border-brand-orange/20">
      {/* Industrial grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-4">
          THE <span className="text-brand-orange">SKI</span> BARN
        </h1>
        <p className="text-brand-steel text-xl md:text-2xl max-w-xl mb-10 uppercase font-bold tracking-widest">
          Heavy-Duty PWC <span className="text-white">Repair & Salvage</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('inventory')}
            className="bg-brand-orange text-black font-black px-12 py-5 rounded-sm hover:skew-x-[-10deg] transition-all cursor-pointer"
          >
            SEARCH THE GRAVEYARD
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border-2 border-brand-steel text-white font-black px-12 py-5 rounded-sm hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            BOOK A REPAIR
          </button>
        </div>
      </div>
    </section>
  );
}