'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState('[miniskirtbegum]');
  const [isTyping, setIsTyping] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true); // Start as true since hero is at top
  
  // Only apply white navigation on homepage
  const isHomepage = pathname === '/';
  const shouldUseWhiteNav = isHomepage && isOverHero;

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Offerings', href: '/offerings' },
  ];

  const mainNavLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Artists', href: '/artists' },
    { name: 'Products', href: '/products' },
    { name: 'Shop', href: '/shop' },
    { name: 'Styling', href: '/styling' },
    { name: 'Wrap Demo', href: '/wrap-demo' },
  ];

  const subMenuSections = [
    {
      title: 'INFO',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Apply for feature', href: '/apply' },
        { name: 'Brand partnerships', href: '/partnerships' },
        { name: 'Our community', href: '/community' },
        { name: 'Find your agency', href: '/agency' },
      ]
    },
    {
      title: 'JOBS',
      links: [
        { name: 'Jobs FAQ', href: '/jobs-faq' },
        { name: 'Post a job', href: '/post-job' },
        { name: 'Jobs Instagram', href: '/jobs-instagram' },
      ]
    }
  ];

  // Typewriter effect function
  const typeText = (targetText: string, onComplete?: () => void) => {
    setIsTyping(true);
    let currentIndex = 0;
    setDisplayedText('');
    
    const typeInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setDisplayedText(targetText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, 50); // 50ms delay between each character
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only check hero section on homepage
      if (isHomepage) {
        const heroHeight = window.innerHeight;
        setIsOverHero(currentScrollY < heroHeight);
      } else {
        setIsOverHero(false); // Not on homepage, so not over hero
      }
      
      // If scrolled down from top, show [msb]
      if (currentScrollY > 50 && !isScrolled) {
        setIsScrolled(true);
        typeText('[msb]');
      } 
      // If at the top, show [miniskirtbegum]
      else if (currentScrollY <= 10 && isScrolled) {
        setIsScrolled(false);
        typeText('[miniskirtbegum]');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isScrolled, isTyping, isHomepage]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      shouldUseWhiteNav ? 'bg-transparent' : 'bg-white'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 ease-in-out hover:scale-105 text-sm font-normal hover:font-medium relative group ${
                  shouldUseWhiteNav ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                <span className={`text-xs mr-1 ${shouldUseWhiteNav ? 'text-white' : 'text-gray-400'}`}>({index + 1})</span>
                {link.name}
                {index < navLinks.length - 1 && (
                  <span className={`ml-2 ${shouldUseWhiteNav ? 'text-white' : 'text-gray-400'}`}>,</span>
                )}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              className={`text-sm font-normal transition-colors duration-300 cursor-pointer ${
                shouldUseWhiteNav ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
              }`}
              style={{ 
                fontFamily: 'Inter, sans-serif',
                minWidth: '120px', // Prevent layout shift during typing
                display: 'inline-block',
                textAlign: 'center'
              }}
            >
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </a>
          </div>

          {/* Right Side - CTA Button and Menu */}
          <div className="flex items-center space-x-4">
            <button className={`hidden md:block px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm font-normal hover:font-medium transform ${
              shouldUseWhiteNav 
                ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' 
                : 'bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            }`}>
              Start The Project
            </button>
            
            {/* Hamburger menu button - visible on all devices */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-all duration-300 ease-in-out hover:scale-110 transform ${
                shouldUseWhiteNav ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Full-screen overlay menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="h-full flex">
              {/* Left Column - Logo */}
              <div className="flex-1 p-8 border-r border-gray-200">
                <span 
                  className="text-gray-900"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    fontWeight: '500',
                    lineHeight: '1.2'
                  }}
                >
                  [miniskirtbegum]
                </span>
              </div>

              {/* Middle Column - Main Navigation */}
              <div className="flex-1 p-8 border-r border-gray-200">
                <div className="space-y-8">
                  {mainNavLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-900 hover:text-gray-600 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(2rem, 3vw, 3.5rem)',
                        fontWeight: 'bold',
                        lineHeight: '1.1'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Sub-menus and Email */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Top Right - Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
                  >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Middle - Sub-menus */}
                <div className="space-y-8 flex-1">
                  {subMenuSections.map((section, index) => (
                    <div key={section.title}>
                      <h3 
                        className="text-gray-500 uppercase tracking-wider mb-4"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}
                      >
                        {section.title}
                      </h3>
                      <div className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="block text-gray-700 hover:text-gray-900 transition-colors duration-300"
                            style={{ 
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '1rem',
                              fontWeight: '400'
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom - Email Subscription */}
                <div className="space-y-4 mt-auto">
                  <p 
                    className="text-gray-500 uppercase tracking-wider"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    FREE PRODUCTS + INBOX INSIGHTS
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-900"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem'
                      }}
                    />
                    <button 
                      className="px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}
                    >
                      ENTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
