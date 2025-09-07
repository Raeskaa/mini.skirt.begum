'use client';

import { useRef, useState, useEffect } from 'react';

interface MediaBackgroundProps {
  videoSrc?: string;
  imageSrc?: string;
  gifSrc?: string;
  posterSrc?: string;
  className?: string;
}

export default function MediaBackground({ 
  videoSrc, 
  imageSrc, 
  gifSrc, 
  posterSrc,
  className = ""
}: MediaBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [mediaType, setMediaType] = useState<'video' | 'image' | 'gif'>('video');

  // Determine media type based on available sources
  useEffect(() => {
    if (gifSrc) {
      setMediaType('gif');
    } else if (imageSrc) {
      setMediaType('image');
    } else if (videoSrc) {
      setMediaType('video');
    }
  }, [videoSrc, imageSrc, gifSrc]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setHasError(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsVideoLoaded(false);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video Background */}
      {mediaType === 'video' && isIntersecting && !hasError && videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* GIF Background */}
      {mediaType === 'gif' && isIntersecting && !hasError && gifSrc && (
        <img
          src={gifSrc}
          alt="Background animation"
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleImageError}
        />
      )}

      {/* Image Background */}
      {mediaType === 'image' && isIntersecting && !hasError && imageSrc && (
        <img
          src={imageSrc}
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleImageError}
        />
      )}

      {/* Fallback Background */}
      {(hasError || !isIntersecting) && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: posterSrc ? `url('${posterSrc}')` : "url('/hero-poster.svg')",
            backgroundColor: '#f5f5f5'
          }}
        />
      )}

      {/* Loading State */}
      {isIntersecting && !isVideoLoaded && !hasError && mediaType === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
