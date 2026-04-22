import { getInventoryFromCSV } from '@/app/lib/inventory';
import { formatPrice } from '@/app/lib/utils';
import LaborClock from '@/components/LaborClock';
import Link from 'next/link';
import Image from 'next/image';

// 1. Define the interface to stop the red lines
interface InventoryItem {
  sku: string;
  name: string;
  manufacturer: string;
  category: string;
  price: string;
  status: string;
  location: string;
  year?: string | number;
  image_url?: string;
}

export default async function ItemDetails({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const inventory = (await getInventoryFromCSV()) as InventoryItem[]; // Cast the data
  const item = inventory.find((i) => i.sku === sku);

  if (!item) return <div className="p-20 bg-brand-black text-brand-orange font-black">UNIT NOT FOUND // 404</div>;

  // Clean the year of any decimals for the title
  const displayYear = item.year && !isNaN(Number(item.year)) ? Math.floor(Number(item.year)) : item.year;

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-block mb-12 text-slate-500 hover:text-orange-500 font-black uppercase text-xs tracking-widest transition-colors">
          ← BACK TO GRAVEYARD
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* MEDIA BOX (Left) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square bg-[#1e293b] border-l-8 border-orange-500 overflow-hidden shadow-2xl">
              {item.image_url ? (
                <Image src={item.image_url} alt={item.name} fill className="object-cover opacity-80" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center opacity-10">
                  <span className="text-white font-black text-8xl italic uppercase rotate-[-10deg]">{item.manufacturer}</span>
                </div>
              )}
            </div>
            {/* Action Buttons underneath image for better mobile reach */}
            <div className="mt-8 space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Public Inquiry</p>
              <button className="w-full bg-white text-black font-black py-6 text-xl uppercase italic hover:bg-orange-500 transition-all skew-x-[-10deg]">
                <span className="inline-block skew-x-[10deg]">INQUIRE NOW</span>
              </button>
            </div>
          </div>

          {/* TECH SPECS & TIMER (Right) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border-b border-slate-800 pb-8 mb-8">
              <span className="text-orange-500 font-mono text-sm font-bold tracking-[0.3em] uppercase block mb-2">
                REPAIR_LOG // SKU: {sku}
              </span>
              <h1 className="text-6xl md:text-4xl font-black italic uppercase leading-[0.85] tracking-tighter">
                {displayYear && displayYear !== 'N/A' && <span className="text-slate-500 block text-2xl mb-2">{displayYear}</span>}
                {item.name}
              </h1>
            </div>

            {/* Spec Sheet Grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-800 border border-slate-800 mb-12">
              <div className="bg-[#0f172a] p-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Manufacturer</span>
                <span className="text-xl font-bold uppercase italic">{item.manufacturer}</span>
              </div>
              <div className="bg-[#0f172a] p-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Condition</span>
                <span className="text-xl font-bold uppercase italic text-orange-500">{item.status}</span>
              </div>
              <div className="bg-[#0f172a] p-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Category</span>
                <span className="text-xl font-bold uppercase italic">{item.category}</span>
              </div>
              <div className="bg-[#0f172a] p-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Barn Location</span>
                <span className="text-xl font-bold uppercase italic">{item.location}</span>
              </div>
            </div>

            <div className="mb-12">
              <span className="text-6xl font-black font-mono tracking-tighter text-white">{formatPrice(item.price)}</span>
              <span className="ml-4 text-slate-500 font-bold uppercase text-xs italic">Market Value + Labor</span>
            </div>

            {/* SHOP TECH ZONE */}
            <div className="mt-auto border-t border-slate-800 pt-8">
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2 italic">INTERNAL SHOP USE ONLY</p>
              <LaborClock sku={sku} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}