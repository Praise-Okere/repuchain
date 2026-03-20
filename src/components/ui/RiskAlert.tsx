'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface RiskAlertProps {
  severity: 'danger' | 'warning' | 'info';
  message: string;
  title?: string;
}

export const RiskAlert = ({ severity, message, title }: RiskAlertProps) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const config = {
    danger: {
      bg: 'bg-[var(--color-accent-red)]/10',
      border: 'border-[var(--color-accent-red)]/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]',
      text: 'text-[var(--color-accent-red)]',
      icon: <ShieldAlert className="w-5 h-5" />,
      titleStr: title || 'Critical Risk Detected',
    },
    warning: {
      bg: 'bg-[var(--color-accent-amber)]/10',
      border: 'border-[var(--color-accent-amber)]/20 shadow-[0_0_30px_rgba(245,158,11,0.1)]',
      text: 'text-[var(--color-accent-amber)]',
      icon: <AlertCircle className="w-5 h-5" />,
      titleStr: title || 'Suspicious Pattern Alert',
    },
    info: {
      bg: 'bg-[var(--color-accent-teal)]/10',
      border: 'border-[var(--color-accent-teal)]/20 shadow-[0_0_30px_rgba(0,212,170,0.1)]',
      text: 'text-[var(--color-accent-teal)]',
      icon: <Info className="w-5 h-5" />,
      titleStr: title || 'Security Insight',
    },
  };

  const current = config[severity];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        x: severity === 'danger' ? [-1, 1, -1, 1, 0] : 0
      }}
      transition={{
        duration: severity === 'danger' ? 0.4 : 0.3,
        ease: "easeOut"
      }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      className={cn(
        "p-4 rounded-xl border flex gap-4 relative overflow-hidden group mb-6",
        current.bg,
        current.border
      )}
    >
      <div className={cn("mt-1", current.text)}>
        {current.icon}
      </div>
      <div className="flex-1 space-y-1">
        <h4 className={cn("font-display font-bold uppercase tracking-widest text-xs", current.text)}>
          {current.titleStr}
        </h4>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {message}
        </p>
      </div>
      <button 
        onClick={() => setVisible(false)}
        className="text-[var(--color-text-muted)] hover:text-white transition-all opacity-0 group-hover:opacity-100 absolute top-3 right-3"
      >
        <X className="w-4 h-4" />
      </button>
      
      {/* Decorative pulse for danger */}
      {severity === 'danger' && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent-red)]/5 blur-3xl animate-pulse rounded-full" />
      )}
    </motion.div>
  );
};
