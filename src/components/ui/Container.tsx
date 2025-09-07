'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  children,
  maxWidth = 'xl',
  padding = 'md',
  className = '',
  as: Component = 'div'
}: ContainerProps) {
  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full'
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    xl: 'px-8 sm:px-12 lg:px-16'
  };
  
  // Combine classes
  const combinedClassName = [
    'mx-auto',
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Specialized container variants
export function SectionContainer(props: Omit<ContainerProps, 'maxWidth' | 'padding'>) {
  return (
    <Container 
      {...props} 
      maxWidth="2xl" 
      padding="lg"
    />
  );
}

export function PageContainer(props: Omit<ContainerProps, 'maxWidth' | 'padding'>) {
  return (
    <Container 
      {...props} 
      maxWidth="2xl" 
      padding="md"
    />
  );
}

export function FullWidthContainer(props: Omit<ContainerProps, 'maxWidth' | 'padding'>) {
  return (
    <Container 
      {...props} 
      maxWidth="full" 
      padding="md"
    />
  );
}
