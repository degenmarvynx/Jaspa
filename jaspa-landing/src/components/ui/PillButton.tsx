import React from 'react';

interface PillButtonProps {
  label: string;
  href: string;
  active?: boolean;
  variant?: 'light' | 'muted' | 'active' | 'ghost';
  onClick?: () => void;
}

export const PillButton: React.FC<PillButtonProps> = ({ label, href, active = false, variant = 'light', onClick }) => {
  const base = 'inline-flex items-center justify-center rounded-lg px-2 py-1 text-[11px] md:px-5 md:py-2.5 md:text-sm font-bold transition-colors';
  const styles =
    variant === 'active'
      ? 'bg-[#044ea4] text-white shadow-inner'
      : variant === 'muted'
      ? 'bg-[#87b6ed] text-[#044ea4]'
      : variant === 'ghost'
      ? 'bg-transparent text-white hover:bg-white/10'
      : 'bg-white text-[#044ea4]';
  return (
    <a href={href} className={`${base} ${styles}`} aria-current={active ? 'page' : undefined} onClick={onClick}>
      {label}
    </a>
  );
};
