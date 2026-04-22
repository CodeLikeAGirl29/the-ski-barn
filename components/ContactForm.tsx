'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  // Use your specific Formspree ID here
  const [state, handleSubmit] = useForm("mvzdvgjz");

  if (state.succeeded) {
    return (
      <div className="p-8 text-center bg-brand-navy border border-brand-orange rounded-xl">
        <h3 className="text-2xl font-black text-brand-orange italic uppercase tracking-tighter">Transmission Received</h3>
        <p className="mt-2 text-slate-300">Matt's got the details. He'll check with the barn and get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 ml-2" />
        </div>
      </div>

      {/* Specific Intake Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          id="inquiryType"
          name="inquiryType"
          className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none text-slate-400"
          required
        >
          <option value="" disabled selected>Inquiry Type</option>
          <option value="parts">Parts Request</option>
          <option value="repair">Service & Repair</option>
          <option value="buy_sell">Buying / Selling a Ski</option>
          <option value="diagnostics">Computer Diagnostics</option>
        </select>

        <input
          id="pwcModel"
          name="pwcModel"
          type="text"
          placeholder="Year / Make / Model"
          className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none"
          required
        />

        <input
          id="engineHours"
          name="engineHours"
          type="number"
          placeholder="Engine Hours"
          className="p-4 rounded-xl bg-brand-navy border border-slate-800 focus:border-brand-orange outline-none"
        />
      </div>

      {/* Detailed Message */}
      <div className="flex flex-col gap-1">
        <textarea
          id="message"
          name="message"
          placeholder="Describe the issue, parts needed, or HIN number..."
          className="p-4 rounded-xl bg-brand-navy border border-slate-800 h-32 focus:border-brand-orange outline-none"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 ml-2" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-brand-orange text-brand-navy font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer uppercase tracking-widest italic disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send to The Barn'}
      </button>
    </form>
  );
}