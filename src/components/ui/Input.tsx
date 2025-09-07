'use client';

import React from 'react';
import { Label, Text } from './Typography';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  error,
  className = '',
  id,
  name
}: InputProps) {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  // Base input classes
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100';
  
  // Error state classes
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  
  // Combine classes
  const combinedClassName = [
    baseClasses,
    errorClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="w-full">
      {label && (
        <Label 
          htmlFor={inputId}
          className="block mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={combinedClassName}
      />
      
      {error && (
        <Text 
          variant="small" 
          color="red-500" 
          className="mt-1"
        >
          {error}
        </Text>
      )}
    </div>
  );
}

// Specialized input variants
export function EmailInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="email" />;
}

export function PasswordInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="password" />;
}

export function SearchInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="text" />;
}
