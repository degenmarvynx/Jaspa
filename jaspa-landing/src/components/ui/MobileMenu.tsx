import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden w-11 h-11 p-0 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-8 w-8" />
      ) : (
        <Menu className="h-8 w-8" />
      )}
    </button>
  );
};

interface MobileMenuPanelProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const MobileMenuPanel: React.FC<MobileMenuPanelProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900 shadow-lg transition-all duration-300">
      <div className="px-4 py-2 space-y-1">
        {children}
      </div>
    </div>
  );
};
