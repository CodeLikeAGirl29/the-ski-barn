import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 text-slate-500 hover:text-orange-500 font-black uppercase text-xs tracking-widest transition-colors">
          ← BACK TO SHOP
        </Link>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Connection Details */}
          <div>
            <span className="text-orange-500 font-mono text-sm font-bold tracking-[0.3em] uppercase block mb-4">
              COMM_CHANNEL // BAKER_FL
            </span>
            <h1 className="text-6xl font-black italic uppercase leading-none tracking-tighter mb-8">
              GET IN <br />
              <span className="text-slate-500">THE BARN.</span>
            </h1>

            <div className="space-y-8 mt-12">
              <div>
                <h3 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-2">Location</h3>
                <p className="text-slate-400 font-mono text-sm uppercase">
                  5303 Old River Rd <br />
                  Baker, Florida 32531<br />
                  Okaloosa County
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-2">Hours</h3>
                <p className="text-slate-400 font-mono text-sm uppercase">
                  Mon — Fri: 08:00 - 17:00<br />
                  Sat: By Appointment Only
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-2">Direct</h3>
                <p className="text-slate-400 font-mono text-sm uppercase">
                  theskibarn.baker@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 relative">
            <div className="absolute -top-3 -right-3 bg-orange-500 text-brand-navy text-[10px] font-black px-3 py-1 uppercase tracking-tighter italic">
              Priority Intake
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}