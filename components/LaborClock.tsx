'use client'
import { useState, useEffect } from 'react';
import { clockLabor } from '@/app/actions/labor';

export default function LaborClock({ sku }: { sku: string }) {
  const [status, setStatus] = useState<'idle' | 'working'>('idle');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'working') {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (s: number) => {
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClock = async (action: 'start' | 'stop') => {
    const result = await clockLabor(sku, action);
    if (result.success) {
      if (action === 'stop') setSeconds(0);
      setStatus(action === 'start' ? 'working' : 'idle');
    }
  };

  return (
    <div className="bg-brand-dark-grey border border-brand-steel/10 p-4 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className={`h-1.5 w-1.5 rounded-full ${status === 'working' ? 'bg-brand-orange animate-pulse' : 'bg-brand-steel/30'}`} />
          <span className="text-[9px] font-black text-brand-steel uppercase tracking-[0.2em]">Tech_Timer</span>
        </div>
        <span className="font-mono text-sm font-bold text-white tabular-nums">
          {formatTime(seconds)}
        </span>
      </div>

      <button
        onClick={() => handleClock(status === 'idle' ? 'start' : 'stop')}
        className={`w-full py-2.5 text-[10px] font-black uppercase italic transition-all ${status === 'idle'
          ? 'bg-brand-orange text-black hover:bg-white'
          : 'bg-red-600 text-white hover:bg-red-700'
          }`}
      >
        {status === 'idle' ? 'START JOB' : 'STOP & LOG'}
      </button>
    </div>
  );
}