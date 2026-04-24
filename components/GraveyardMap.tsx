'use client';

import { useState } from 'react';

const ZONES = [
  { id: 'zone-a', name: 'Zone A', units: 'Late Model Sea-Doo', coords: "10,10 290,10 290,100 10,100" },
  { id: 'zone-b', name: 'Zone B', units: 'Yamaha/Kawasaki', coords: "10,110 290,110 290,200 10,200" },
  { id: 'zone-c', name: 'Zone C', units: 'Hull Salvage', coords: "10,210 145,210 145,300 10,300" },
  { id: 'zone-d', name: 'Zone D', units: 'Engine Prep', coords: "155,210 290,210 290,300 155,300" },
];

export default function GraveyardMap() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  return (
    <section className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 my-12">
      <h3 className="text-orange-500 font-black uppercase text-xs tracking-[0.3em] mb-6">Physical_Grid // Satellite_View</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* The Map */}
        <div className="md:col-span-2">
          <svg viewBox="0 0 300 310" className="w-full h-auto drop-shadow-2xl">
            {ZONES.map((zone) => (
              <polygon
                key={zone.id}
                points={zone.coords}
                onClick={() => setActiveZone(zone.id)}
                className={`cursor-pointer transition-all duration-300 ${activeZone === zone.id
                  ? 'fill-orange-500 stroke-white stroke-2'
                  : 'fill-slate-800 stroke-slate-700 hover:fill-slate-700'
                  }`}
              />
            ))}
            <text x="150" y="55" textAnchor="middle" className="fill-slate-500 text-[12px] font-mono pointer-events-none uppercase">Zone A</text>
            <text x="150" y="155" textAnchor="middle" className="fill-slate-500 text-[12px] font-mono pointer-events-none uppercase">Zone B</text>
          </svg>
        </div>

        {/* Zone Details */}
        <div className="space-y-6">
          {activeZone ? (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h4 className="text-white font-black text-2xl italic uppercase">{activeZone.replace('-', ' ')}</h4>
              <p className="text-slate-400 font-mono text-sm mt-2">Inventory Segment: <br /> {ZONES.find(z => z.id === activeZone)?.units}</p>
              <button className="mt-6 text-orange-500 text-[10px] font-black uppercase tracking-widest border border-orange-500/30 px-4 py-2 hover:bg-orange-500 hover:text-navy transition-all">
                View All Units in Zone
              </button>
            </div>
          ) : (
            <p className="text-slate-600 italic text-sm">Select a quadrant to initialize local inventory tracking...</p>
          )}
        </div>
      </div>
    </section>
  );
}