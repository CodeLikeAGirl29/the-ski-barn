'use client';

import { handleContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  return (
    <form
      action={async (formData) => {
        await handleContactForm(formData);
        alert("Thanks! We've received your repair inquiry.");
      }}
      className="flex flex-col gap-4"
    >
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Describe the issue with your ski..."
        className="p-4 rounded-xl bg-brand-navy border border-slate-800 h-32 focus:border-brand-orange outline-none"
        required
      />
      <button
        type="submit"
        className="bg-brand-orange text-brand-navy font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform cursor-pointer"
      >
        BOOK REPAIR SLOT
      </button>
    </form>
  );
}