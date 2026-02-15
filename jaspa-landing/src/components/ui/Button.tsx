import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  newTab?: boolean;
  className?: string;
  ariaLabel?: string;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  newTab = false,
  className = '',
  ariaLabel,
  rightIcon,
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-3 font-bold rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-[0_4px_20px_0_rgba(0,0,0,0.35)]';
  
  const variantClasses = {
    primary: 'bg-[#df2202] text-white hover:opacity-90 focus:ring-red-500',
    secondary: 'bg-jaspa-light-blue text-jaspa-blue hover:bg-blue-200 focus:ring-blue-500',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
