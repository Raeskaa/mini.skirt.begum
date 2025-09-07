'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  
  const message = "Beer is a gift from god";

  useEffect(() => {
    console.log('🎬 LoadingScreen mounted - starting typewriter effect');
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayedText(message.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        console.log('⌨️ Typewriter effect completed');
        
        // Wait a moment after typing is complete, then show main content
        setTimeout(() => {
          console.log('⏰ 1 second delay completed, triggering main content');
          setShowMainContent(true);
          // Trigger the main website animation after a short delay
          setTimeout(() => {
            console.log('🚀 Calling onComplete callback');
            onComplete();
          }, 100);
        }, 1000);
      }
    }, 100); // 100ms delay between each character for natural speed

    return () => {
      console.log('🧹 LoadingScreen cleanup - clearing interval');
      clearInterval(typeInterval);
    };
  }, [message, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50"
      style={{ backgroundColor: '#FFD700' }} // Yellow background
    >
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <span 
            className="text-black"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.2'
            }}
          >
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
