'use client';

import { useRef, useEffect, useState } from 'react';

interface AdvancedWrapAnimationProps {
  children: React.ReactNode;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  className?: string;
  wrapIntensity?: number;
  animationDuration?: number;
  enableContentWrapping?: boolean;
}

export default function AdvancedWrapAnimation({ 
  children, 
  mediaSrc, 
  mediaType, 
  className = '',
  wrapIntensity = 0.4,
  animationDuration = 1200,
  enableContentWrapping = true
}: AdvancedWrapAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

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

  const getMediaTransform = () => {
    if (!isHovered) {
      return 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    
    const rotateX = (mousePosition.y - 0.5) * wrapIntensity * 25;
    const rotateY = (mousePosition.x - 0.5) * wrapIntensity * -25;
    const scale = 1 + (Math.abs(rotateX) + Math.abs(rotateY)) * 0.01;
    
    return `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const getContentTransform = () => {
    if (!isHovered || !enableContentWrapping) {
      return 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
    }
    
    // Create content wrapping effect that follows the media transformation
    const rotateX = (mousePosition.y - 0.5) * wrapIntensity * 15;
    const rotateY = (mousePosition.x - 0.5) * wrapIntensity * -15;
    const translateZ = Math.abs(rotateX) + Math.abs(rotateY) * 3;
    
    // Add subtle counter-rotation to create wrapping effect
    const counterRotateX = -rotateX * 0.3;
    const counterRotateY = -rotateY * 0.3;
    
    return `translateZ(${translateZ}px) rotateX(${counterRotateX}deg) rotateY(${counterRotateY}deg)`;
  };

  const getContentStyle = () => {
    if (!isHovered || !enableContentWrapping) {
      return {};
    }
    
    // Add subtle distortion to text/content
    const skewX = (mousePosition.x - 0.5) * wrapIntensity * 2;
    const skewY = (mousePosition.y - 0.5) * wrapIntensity * 1;
    
    return {
      transform: `skew(${skewX}deg, ${skewY}deg)`,
      filter: `blur(${Math.abs(skewX) + Math.abs(skewY)}px)`,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1200px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Media with Wrap Effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: getMediaTransform(),
          transformStyle: 'preserve-3d',
          transition: `transform ${animationDuration}ms cubic-bezier(0.23, 1, 0.32, 1)`,
          willChange: 'transform'
        }}
      >
        {mediaType === 'image' ? (
          <img
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            src={mediaSrc}
            alt=""
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
            style={{
              filter: isHovered 
                ? 'brightness(1.15) contrast(1.1) saturate(1.1)' 
                : 'brightness(1) contrast(1) saturate(1)',
              transition: 'filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isLoaded ? 1 : 0,
              transform: 'scale(1.05)', // Slight scale to prevent edge gaps during rotation
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
            onLoadedData={() => setIsLoaded(true)}
            style={{
              filter: isHovered 
                ? 'brightness(1.15) contrast(1.1) saturate(1.1)' 
                : 'brightness(1) contrast(1) saturate(1)',
              transition: 'filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isLoaded ? 1 : 0,
              transform: 'scale(1.05)',
            }}
          />
        )}
      </div>

      {/* Wrapped Content Layer */}
      <div
        ref={contentRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          transform: getContentTransform(),
          transformStyle: 'preserve-3d',
          transition: `transform ${animationDuration}ms cubic-bezier(0.23, 1, 0.32, 1)`,
          zIndex: 20,
          willChange: 'transform'
        }}
      >
        <div 
          className="relative z-20"
          style={{
            ...getContentStyle(),
            transition: 'transform 0.3s ease, filter 0.3s ease'
          }}
        >
          {children}
        </div>
      </div>

      {/* Dynamic Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"
        style={{
          opacity: isHovered ? 0.2 : 0.4,
          transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Subtle Border Effect */}
      <div
        className="absolute inset-0 border border-white/20"
        style={{
          opacity: isHovered ? 0.6 : 0.2,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
}
