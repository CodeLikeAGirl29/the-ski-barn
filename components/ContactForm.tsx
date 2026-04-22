'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvzdvgjz");

  if (state.succeeded) {
    return (
      <div className="p-12 text-center bg-[#0f172a] border-2 border-orange-500 rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.15)]">
        <div className="mb-4 text-5xl">⚡</div>
        <h3 className="text-3xl font-black text-orange-500 italic uppercase tracking-tighter">
          Transmission Received
        </h3>
        <p className="mt-4 text-slate-400 font-medium">
          Matt’s been pinged. He’s checking the graveyard inventory now.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* SECTION 1: CLIENT IDENTITY */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. John Doe"
              className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 focus:border-orange-500 text-white placeholder:text-slate-700 outline-none transition-all font-mono"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 focus:border-orange-500 text-white placeholder:text-slate-700 outline-none transition-all font-mono"
              required
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: MACHINE SPECS (Smashed line fixed here) */}
      <div className="space-y-4 pt-4 border-t border-slate-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 focus:border-orange-500 text-white outline-none transition-all font-mono appearance-none cursor-pointer"
              required
            >
              <option value="" disabled selected>Select Category</option>
              <option value="parts">Parts Request</option>
              <option value="repair">Service & Repair</option>
              <option value="buy_sell">Buying / Selling</option>
              <option value="diagnostics">Diagnostics</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Unit Model</label>
            <input
              id="pwcModel"
              name="pwcModel"
              type="text"
              placeholder="Year/Make/Model"
              className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 focus:border-orange-500 text-white placeholder:text-slate-700 outline-none transition-all font-mono"
              required
            />
          </div>

          {/* Engine hours now has its own full width or balanced half-width on this new line */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Engine Hours</label>
            <input
              id="engineHours"
              name="engineHours"
              type="number"
              placeholder="Enter current hours on motor"
              className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 focus:border-orange-500 text-white placeholder:text-slate-700 outline-none transition-all font-mono"
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: TECH NOTES */}
      <div className="space-y-1 pt-4 border-t border-slate-800/50">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Any Additional Notes</label>
        <textarea
          id="message"
          name="message"
          placeholder="List parts needed or describe the mechanical failure.."
          className="w-full p-4 rounded-xl bg-[#0f172a] border-2 border-slate-800 h-40 focus:border-orange-500 text-white placeholder:text-slate-700 outline-none transition-all font-mono resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group relative overflow-hidden bg-orange-500 text-[#0f172a] font-black py-5 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50"
      >
        <span className="relative z-10 uppercase tracking-[0.3em] italic text-lg">
          {state.submitting ? 'Processing...' : 'Send it!'}
        </span>
      </button>
    </form>
  );
}