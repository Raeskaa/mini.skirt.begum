'use client';

import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoad = () => setIsVideoLoaded(true);
      const handleError = () => setHasError(true);
      
      video.addEventListener('loadeddata', handleLoad);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoad);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="w-full min-h-[70vh] bg-white pt-20">
      {/* Hero Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full min-h-[60vh] bg-gray-100 overflow-hidden">
          {/* Video Background - Clean, no controls */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
          </video>

          {/* Fallback Background */}
          {hasError && (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/hero-poster.svg')",
                backgroundColor: '#f5f5f5'
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
