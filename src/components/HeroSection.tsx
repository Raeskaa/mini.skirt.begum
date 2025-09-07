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
    <section 
      className="w-full bg-white relative"
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Full Viewport Video Background */}
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
          height: '100%',
          zIndex: 1
        }}
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay for Navigation Visibility */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 20%, transparent 100%)',
          zIndex: 2
        }}
      />

      {/* Fallback Background */}
      {hasError && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: '#f5f5f5',
            zIndex: 1
          }}
        />
      )}

      {/* Content Overlay - Optional for future content */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        {/* Future content can go here */}
      </div>
    </section>
  );
}
