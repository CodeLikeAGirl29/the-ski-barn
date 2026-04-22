'use client'
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/app/lib/utils';

interface SkiProps {
  sku: string;
  year?: string | number; // Updated to handle 'N/A' or numbers
  name: string;          // Synced with parser key
  manufacturer: string;  // Synced with parser key
  price: string;
  status: string;
  image_url?: string;
  category: string;
}

export default function SkiCard({ sku, year, name, price, status, image_url, category, manufacturer }: SkiProps) {
  return (
    <div className="group bg-brand-dark-grey border-l-4 border-brand-steel hover:border-brand-orange transition-all overflow-hidden shadow-2xl">
      <div className="relative h-48 w-full bg-black">
        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          /* Placeholder for when no image exists in the graveyard */
          <div className="w-full h-full flex items-center justify-center bg-brand-black">
            <span className="text-brand-steel/20 font-black text-4xl italic uppercase">{manufacturer}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-brand-orange text-black text-[10px] font-black px-2 py-1 uppercase tracking-tighter">
          {status || 'SALVAGE'}
        </div>
      </div>

      <div className="p-6">
        <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.2em]">
          {manufacturer || 'GENUINE PART'}
        </span>
        <h3 className="text-2xl font-black italic uppercase leading-none mt-1 text-white group-hover:text-brand-orange transition-colors">
          {year !== 'N/A' && `${year} `}{name}
        </h3>
        <p className="text-brand-steel font-bold text-[10px] uppercase tracking-widest mt-2">{category}</p>

        <div className="flex justify-between items-center border-t border-brand-steel/20 mt-6 pt-4">
          <span className="text-2xl font-black font-mono text-white tracking-tighter italic">
            {formatPrice(price)}
          </span>
          <Link
            href={`/inventory/${sku}`}
            className="text-brand-orange font-black text-xs hover:text-white hover:translate-x-1 uppercase tracking-widest transition-all"
          >
            SPECS &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}