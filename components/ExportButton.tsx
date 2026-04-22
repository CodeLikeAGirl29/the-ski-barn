'use client';

import { exportLaborCSV } from '@/app/actions/labor';

export default function ExportButton() {
  const handleExport = async () => {
    const csvData = await exportLaborCSV();
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SkiBarn_Labor_Export_${new Date().toLocaleDateString()}.csv`;
    a.click();
  };

  return (
    <button
      onClick={handleExport}
      className="border border-brand-orange text-brand-orange font-black px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-brand-orange hover:text-black transition-all"
    >
      DOWNLOAD LABOR LOGS (CSV)
    </button>
  );
}