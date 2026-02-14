import React from 'react';

interface TrustBadgeProps {
  text: string;
  icon?: string;
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  text,
  icon,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${className}`}>
      {icon && (
        <img 
          src={icon} 
          alt="" 
          className="w-4 h-4"
          aria-hidden="true"
        />
      )}
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  );
};