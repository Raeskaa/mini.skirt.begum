'use client';

import React from 'react';
import { Label, Text } from './Typography';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search' | 'textarea';
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: string;
  helperText?: string;
  className?: string;
  id?: string;
  name?: string;
  rows?: number;
  maxLength?: number;
  autoComplete?: string;
  autoFocus?: boolean;
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
  success,
  helperText,
  className = '',
  id,
  name,
  rows = 4,
  maxLength,
  autoComplete,
  autoFocus
}: InputProps) {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  // Base input classes
  const baseClasses = 'w-full px-4 py-3 border rounded-lg text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100';
  
  // State classes
  const stateClasses = error 
    ? 'border-red-500 focus:ring-red-500' 
    : success 
    ? 'border-green-500 focus:ring-green-500' 
    : 'border-gray-300 focus:ring-gray-900';
  
  // Textarea specific classes
  const textareaClasses = type === 'textarea' ? 'resize-vertical min-h-[100px]' : '';
  
  // Combine classes
  const combinedClassName = [
    baseClasses,
    stateClasses,
    textareaClasses,
    className
  ].filter(Boolean).join(' ');

  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  const inputProps = type === 'textarea' ? { rows } : { type };

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
      
      <InputComponent
        id={inputId}
        name={name}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={combinedClassName}
        {...inputProps}
      />
      
      {/* Helper text, error, or success message */}
      {(helperText || error || success) && (
        <div className="mt-1">
          {error && (
            <Text variant="small" color="red-500">
              {error}
            </Text>
          )}
          {success && !error && (
            <Text variant="small" color="green-600">
              {success}
            </Text>
          )}
          {helperText && !error && !success && (
            <Text variant="small" color="gray-500">
              {helperText}
            </Text>
          )}
        </div>
      )}
      
      {/* Character count for textarea */}
      {type === 'textarea' && maxLength && (
        <Text variant="caption" color="gray-500" className="mt-1 text-right">
          {value.length}/{maxLength}
        </Text>
      )}
    </div>
  );
}

// Specialized input variants
export function EmailInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="email" autoComplete="email" />;
}

export function PasswordInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="password" autoComplete="current-password" />;
}

export function SearchInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="search" autoComplete="off" />;
}

export function TextareaInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="textarea" />;
}

export function NumberInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="number" />;
}

export function TelInput(props: Omit<InputProps, 'type'>) {
  return <Input {...props} type="tel" autoComplete="tel" />;
}
