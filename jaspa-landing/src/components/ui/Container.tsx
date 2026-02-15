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
    <Component className={`${full ? 'w-full max-w-none mx-0 px-0' : 'max-w-6xl mx-auto px-6 sm:px-8 lg:px-12'} ${className}`}>
      {children}
    </Component>
  );
};
