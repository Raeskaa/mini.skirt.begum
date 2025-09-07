'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ArtistsPage() {
  const router = useRouter();

  const handleContactClick = () => {
    // Handle contact action
    console.log('Contact clicked');
  };

  const handleLinkClick = (route: string) => {
    router.push(route);
  };

  return (
    <main className="bg-white pt-24">
      <section className="animate-fade-in" 
        style={{
          backgroundColor: '#ffffff',
          width: '100vw',
          margin: '0 auto',
          padding: '120px 40px 100px 40px',
          minHeight: '80vh'
        }}
      >
        <div 
          className="artists-grid"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '80px',
            alignItems: 'start'
          }}
        >
          {/* Left Sidebar */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            {/* Role Section */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  marginBottom: '12px'
                }}
              >
                Role
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#000000',
                  margin: 0
                }}
              >
                He works as an artist developer, working around the infra of the studio. he also manages projects as an art director.
              </p>
            </div>

            {/* Other works Section */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  marginBottom: '12px'
                }}
              >
                Other works
              </h3>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {[
                  { name: 'Project 1', href: '/work/project-1' },
                  { name: 'Project 2', href: '/work/project-2' },
                  { name: 'Project 3', href: '/work/project-3' },
                  { name: 'Project 4', href: '/work/project-4' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="transition-all duration-300 ease-in-out hover:text-gray-600 hover:scale-105 transform"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#000000',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={handleContactClick}
              className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-900 hover:text-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                padding: '14px 24px',
                borderRadius: '30px',
                width: 'fit-content',
                border: '1px solid #000000',
                backgroundColor: 'transparent',
                color: '#000000',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Contact
            </button>

            {/* Section Number */}
            <div 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: '#888888'
              }}
            >
              [2]
            </div>
          </div>

          {/* Right Main Content Area */}
          <div style={{ position: 'relative' }}>
            {/* Large Overlapping Circle - Positioned between content */}
            <div 
              style={{
                position: 'absolute',
                top: '200px',
                right: '50px',
                backgroundColor: '#d1d1d1',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                zIndex: 1
              }}
            >
              {/* Large overlapping circle */}
            </div>

            {/* Main Text Block - Overlapping the circle */}
            <div style={{ position: 'relative', zIndex: 2, marginBottom: '60px' }}>
              <h2 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '42px',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: '#000000',
                  margin: 0,
                  maxWidth: '600px'
                }}
              >
                <span style={{ color: '#666666' }}>[Noor]</span> is a visionary designer and entrepreneur known for driving significant user and sales growth at tech startups, including an early AI design venture, and for leading his own creative studio. Beyond his impactful professional work, he's a dedicated artist, actively pursuing publishing a poetry collection and releasing his first music EP.
              </h2>
            </div>

            {/* Studio Description - Also overlapping the circle */}
            <div style={{ position: 'relative', zIndex: 2, marginBottom: '60px' }}>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#000000',
                  margin: 0,
                  maxWidth: '600px'
                }}
              >
                We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. <span style={{ color: '#666666' }}>[What is our design process?]</span> Our work includes design, art, humor, irony, functionality & people. We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.
              </p>
            </div>

            {/* Placeholder Graphics Section */}
            <div style={{ position: 'relative', zIndex: 2, marginBottom: '40px' }}>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  gap: '20px',
                  marginBottom: '30px'
                }}
              >
                {/* Left Rectangle */}
                <div 
                  style={{
                    backgroundColor: '#d1d1d1',
                    height: '150px',
                    borderRadius: '0px'
                  }}
                ></div>
                
                {/* Right Rectangle */}
                <div 
                  style={{
                    backgroundColor: '#d1d1d1',
                    height: '200px',
                    borderRadius: '0px'
                  }}
                ></div>
              </div>

              {/* Quote Text */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#000000',
                  margin: 0,
                  fontStyle: 'italic'
                }}
              >
                "We're really bla over bla and bla with all this bla and i can not imagine bla bla and this is not the best bla bla"
              </p>
            </div>

            {/* Bottom Section */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Large Bottom Placeholder */}
              <div 
                style={{
                  backgroundColor: '#d1d1d1',
                  height: '200px',
                  borderRadius: '0px',
                  marginBottom: '40px'
                }}
              ></div>

              {/* Repeated Studio Description */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#000000',
                  margin: 0
                }}
              >
                We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. <span style={{ color: '#666666' }}>[What is our design process?]</span> Our work includes design, art, humor, irony, functionality & people. We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .artists-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          h2 {
            font-size: 36px !important;
          }
          .circular-placeholder {
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </main>
  );
}
