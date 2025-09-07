'use client';

import React from 'react';

// Base Typography Props
interface BaseTypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  color?: 'black' | 'gray-900' | 'gray-700' | 'gray-600' | 'gray-500' | 'gray-400' | 'red-500';
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

// Heading Component
interface HeadingProps extends BaseTypographyProps {
  level: 1 | 2 | 3 | 4;
}

export function Heading({ 
  level, 
  children, 
  className = '', 
  as, 
  color = 'black',
  align = 'left',
  weight = 'normal'
}: HeadingProps) {
  const Component = as || (`h${level}` as keyof JSX.IntrinsicElements);
  
  const baseClasses = `heading-${level}`;
  const colorClass = color !== 'black' ? `text-${color}` : '';
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = weight !== 'normal' ? `font-${weight}` : '';
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Text Component
interface TextProps extends BaseTypographyProps {
  variant?: 'hero' | 'display' | 'large' | 'body' | 'small' | 'caption' | 'mono';
}

export function Text({ 
  variant = 'body', 
  children, 
  className = '', 
  as = 'p',
  color = 'black',
  align = 'left',
  weight = 'normal'
}: TextProps) {
  const Component = as;
  
  const baseClasses = `text-${variant}`;
  const colorClass = color !== 'black' ? `text-${color}` : '';
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = weight !== 'normal' ? `font-${weight}` : '';
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Label Component
interface LabelProps extends BaseTypographyProps {
  htmlFor?: string;
}

export function Label({ 
  children, 
  className = '', 
  as = 'label',
  color = 'gray-600',
  align = 'left',
  weight = 'medium',
  htmlFor
}: LabelProps) {
  const Component = as;
  
  const baseClasses = 'text-label';
  const colorClass = color !== 'black' ? `text-${color}` : '';
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = weight !== 'normal' ? `font-${weight}` : '';
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName} htmlFor={htmlFor}>
      {children}
    </Component>
  );
}

// Link Component
interface LinkProps extends BaseTypographyProps {
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  underline?: boolean;
  onClick?: () => void;
}

export function Link({ 
  children, 
  className = '', 
  as = 'a',
  color = 'black',
  align = 'left',
  weight = 'normal',
  href,
  target,
  rel,
  underline = false,
  onClick
}: LinkProps) {
  const Component = as;
  
  const baseClasses = 'text-body';
  const colorClass = color !== 'black' ? `text-${color}` : '';
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = weight !== 'normal' ? `font-${weight}` : '';
  const underlineClass = underline ? 'underline' : '';
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    underlineClass,
    className
  ].filter(Boolean).join(' ');

  const props: any = {
    className: combinedClassName,
    onClick
  };

  if (href) {
    props.href = href;
    props.target = target;
    props.rel = rel;
  }

  return (
    <Component {...props}>
      {children}
    </Component>
  );
}

// Button Text Component
interface ButtonTextProps extends BaseTypographyProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export function ButtonText({ 
  variant = 'primary', 
  children, 
  className = '', 
  as = 'span',
  color = 'black',
  align = 'center',
  weight = 'normal'
}: ButtonTextProps) {
  const Component = as;
  
  const baseClasses = 'text-button';
  const colorClass = color !== 'black' ? `text-${color}` : '';
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = weight !== 'normal' ? `font-${weight}` : '';
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Navigation Text Component
interface NavTextProps extends BaseTypographyProps {
  active?: boolean;
}

export function NavText({ 
  children, 
  className = '', 
  as = 'span',
  color = 'black',
  align = 'left',
  weight = 'normal',
  active = false
}: NavTextProps) {
  const Component = as;
  
  const baseClasses = 'text-nav';
  const colorClass = active ? 'text-gray-600' : (color !== 'black' ? `text-${color}` : '');
  const alignClass = align !== 'left' ? `text-${align}` : '';
  const weightClass = active ? 'font-medium' : (weight !== 'normal' ? `font-${weight}` : '');
  
  const combinedClassName = [
    baseClasses,
    colorClass,
    alignClass,
    weightClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Export all components
export default {
  Heading,
  Text,
  Label,
  Link,
  ButtonText,
  NavText
};
