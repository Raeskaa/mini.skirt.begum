'use client';

import { useRef, useEffect, useState } from 'react';

interface WrapAnimationProps {
  children: React.ReactNode;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  className?: string;
  intensity?: number; // 0-1, controls wrap intensity
  duration?: number; // animation duration in ms
}

export default function WrapAnimation({ 
  children, 
  mediaSrc, 
  mediaType, 
  className = '',
  intensity = 0.3,
  duration = 1000
}: WrapAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    
    const rotateX = (mousePosition.y - 0.5) * intensity * 20;
    const rotateY = (mousePosition.x - 0.5) * intensity * -20;
    const translateZ = Math.abs(rotateX) + Math.abs(rotateY);
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
  };

  const getContentTransform = () => {
    if (!isHovered) return 'translateZ(0px)';
    
    const rotateX = (mousePosition.y - 0.5) * intensity * 10;
    const rotateY = (mousePosition.x - 0.5) * intensity * -10;
    const translateZ = Math.abs(rotateX) + Math.abs(rotateY) * 2;
    
    return `translateZ(${translateZ}px) rotateX(${-rotateX * 0.5}deg) rotateY(${-rotateY * 0.5}deg)`;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Media */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: getTransform(),
          transformStyle: 'preserve-3d',
          transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
        }}
      >
        {mediaType === 'image' ? (
          <img
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            src={mediaSrc}
            alt=""
            className="w-full h-full object-cover"
            style={{
              filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
              transition: 'filter 0.3s ease'
            }}
          />
        ) : (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
              transition: 'filter 0.3s ease'
            }}
          />
        )}
      </div>

      {/* Wrapped Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          transform: getContentTransform(),
          transformStyle: 'preserve-3d',
          transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          zIndex: 10
        }}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 bg-black bg-opacity-20"
        style={{
          opacity: isHovered ? 0.1 : 0.3,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
}
