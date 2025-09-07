'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [showLoading, setShowLoading] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    console.log('🔄 ClientWrapper useEffect triggered');
    console.log('📍 Current URL:', window.location.href);
    console.log('📍 Current pathname:', window.location.pathname);
    
    // Check if loading screen has been shown in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    console.log('🔍 hasSeenLoading from sessionStorage:', hasSeenLoading);
    
    // Check if this is a fresh page load (not client-side navigation)
    const isPageRefresh = window.performance.navigation?.type === 1; // TYPE_RELOAD
    const isDirectLoad = window.performance.navigation?.type === 0; // TYPE_NAVIGATE
    const isFirstLoad = isPageRefresh || isDirectLoad;
    
    console.log('🔍 isPageRefresh:', isPageRefresh);
    console.log('🔍 isDirectLoad:', isDirectLoad);
    console.log('🔍 isFirstLoad:', isFirstLoad);
    
    // Only show loading screen on fresh page load AND if not seen before in this session
    if (isFirstLoad && !hasSeenLoading) {
      console.log('✅ SHOWING LOADING SCREEN - First visit in session');
      sessionStorage.setItem('hasSeenLoading', 'true');
      setShowLoading(true);
    } else {
      console.log('❌ NOT SHOWING LOADING SCREEN');
      console.log('   - isFirstLoad:', isFirstLoad);
      console.log('   - hasSeenLoading:', hasSeenLoading);
      setShowMainContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    console.log('🎉 Loading screen completed');
    setShowMainContent(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  return (
    <div className="relative">
      {showLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      <div 
        className={`transition-transform duration-1000 ease-out ${
          showMainContent ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ 
          position: showMainContent ? 'relative' : 'absolute',
          top: showMainContent ? '0' : '100%',
          left: '0',
          right: '0',
          zIndex: showMainContent ? '10' : '5'
        }}
      >
        {children}
      </div>
    </div>
  );
}
