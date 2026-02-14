import React from 'react';

export const SkipNavigation: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-jaspa-blue text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
};