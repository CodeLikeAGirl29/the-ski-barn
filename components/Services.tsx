const services = [
  { title: "Computer Diagnostics", desc: "Full system scans using CANDooPro. Clear codes and reset service intervals." },
  { title: "Pump Rebuilds", desc: "Wear ring replacement, impeller repair, and jet pump bearing overhauls." },
  { title: "Engine Rebuilds", desc: "Top-end and full engine overhauls for Sea-Doo and Yamaha engines." },
  { title: "Annual Maintenance", desc: "Oil changes, spark plugs, and 100-hour service to keep your ski on the water." },
  { title: "Winterization", desc: "Fogging, fuel stabilization, and battery care to protect against the off-season." },
  { title: "Hull & Fiberglass", desc: "Structural repairs and cosmetic restoration for salvage units and graveyard hulls." },
];

export default function Services() {
  const jobTypes = [
    { title: "Diagnostic Audit", desc: "Full CANDooPro system scan, fault clearing, and health report." },
    { title: "Pump Overhaul", desc: "Wear ring replacement and impeller pitch correction." },
    { title: "Top-End Rebuild", desc: "Precision engine work for Sea-Doo 4-TEC and Yamaha 1.8L." },
    { title: "Winterization", desc: "Fogging, fuel stabilization, and battery cycle prep." }
  ];
  return (
    <section id="services" className="bg-black py-24 px-6 border-y border-brand-steel/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            THE <span className="text-brand-orange">SERVICE</span> BAY
          </h2>
          <p className="text-brand-steel font-bold tracking-[0.3em] mt-2 uppercase text-xs">
            High-Performance Repair & Salvage Logistics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-steel/10">
          {services.map((s, i) => (
            <div key={i} className="bg-brand-dark-grey p-10 hover:bg-black transition-all duration-300 group relative overflow-hidden">
              {/* Subtle background number */}
              <span className="absolute -right-4 -bottom-4 text-8xl font-black text-white/5 italic group-hover:text-brand-orange/10 transition-colors">
                0{i + 1}
              </span>

              <span className="text-brand-orange font-mono font-bold text-xs mb-6 block tracking-widest">
                UNIT_TASK // 0{i + 1}
              </span>
              <h3 className="text-2xl font-black uppercase mb-4 text-white group-hover:text-brand-orange transition-colors italic leading-none">
                {s.title}
              </h3>
              <p className="text-brand-steel text-sm leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}