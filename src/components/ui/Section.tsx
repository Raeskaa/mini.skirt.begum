'use client';

import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: 'white' | 'gray-50' | 'gray-100' | 'black';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  container?: boolean;
  containerMaxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  containerPadding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  backgroundColor = 'white',
  padding = 'lg',
  className = '',
  as: Component = 'section',
  container = true,
  containerMaxWidth = '2xl',
  containerPadding = 'md'
}: SectionProps) {
  // Background color classes
  const backgroundColorClasses = {
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    'gray-100': 'bg-gray-100',
    black: 'bg-black'
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32',
    '2xl': 'py-24 sm:py-32 lg:py-40'
  };
  
  // Combine classes
  const combinedClassName = [
    backgroundColorClasses[backgroundColor],
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');

  const content = container ? (
    <Container 
      maxWidth={containerMaxWidth} 
      padding={containerPadding}
    >
      {children}
    </Container>
  ) : children;

  return (
    <Component className={combinedClassName}>
      {content}
    </Component>
  );
}

// Specialized section variants
export function HeroSection(props: Omit<SectionProps, 'padding' | 'containerMaxWidth'>) {
  return (
    <Section 
      {...props} 
      padding="2xl"
      containerMaxWidth="full"
    />
  );
}

export function ContentSection(props: Omit<SectionProps, 'padding' | 'containerMaxWidth'>) {
  return (
    <Section 
      {...props} 
      padding="lg"
      containerMaxWidth="2xl"
    />
  );
}

export function FooterSection(props: Omit<SectionProps, 'padding' | 'containerMaxWidth'>) {
  return (
    <Section 
      {...props} 
      padding="lg"
      containerMaxWidth="full"
    />
  );
}
