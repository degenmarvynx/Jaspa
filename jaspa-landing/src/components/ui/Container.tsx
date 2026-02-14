import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  full?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  full = false,
}) => {
  return (
    <Component className={`${full ? 'w-full max-w-none mx-0 px-0' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} ${className}`}>
      {children}
    </Component>
  );
};
