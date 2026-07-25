import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface SectionTitleProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({ badge, title, subtitle, alignment = 'center', className }: SectionTitleProps) {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col gap-4 relative z-10", alignment === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {badge && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm text-blue-600 text-xs font-bold tracking-widest uppercase mb-2"
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl", alignment === 'center' ? 'mx-auto' : '')}
        >
          {subtitle}
        </motion.div>
      )}
    </div>
  );
}
