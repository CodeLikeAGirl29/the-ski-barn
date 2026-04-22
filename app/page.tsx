import Hero from '@/components/Hero';
import SkiCard from '@/components/SkiCard';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import { getInventoryFromCSV } from './lib/inventory';

export default async function Page() {
  const inventory = await getInventoryFromCSV();

  return (
    <main className="min-h-screen">
      <Hero />

      <Services />

      <section id="inventory" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Our Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inventory.map((item) => (
            <SkiCard
              key={item.sku}
              {...item}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Contact the Barn</h2>
          <p className="text-slate-400 mt-2">Ready to get back on the water? Send us a message.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}