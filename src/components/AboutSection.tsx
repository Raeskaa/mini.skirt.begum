'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [activeService, setActiveService] = useState(0);

  const serviceButtons = [
    'Art Direction',
    'Digital Design', 
    'Packaging & Print Design',
    'Identity Design',
    'Visual Branding Strategy'
  ];

  const handleButtonClick = (index: number) => {
    setActiveService(index);
  };

  return (
    <section 
      style={{
        backgroundColor: '#ffffff',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 40px 100px 40px'
      }}
    >
      {/* Top Section - Main Description */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '80px'
        }}
      >
        {/* Left - Main Description */}
        <div style={{ flex: '1', maxWidth: '60%' }}>
          <h1 
            style={{
              fontFamily: 'Tiempos, Georgia, serif',
              fontSize: '42px',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#000000',
              marginBottom: '20px',
              textAlign: 'left',
              margin: 0
            }}
          >
            We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.
          </h1>
        </div>

        {/* Right - CTA Link */}
        <div 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: '#000000',
            textDecoration: 'none',
            display: 'block',
            cursor: 'pointer',
            marginLeft: '40px'
          }}
        >
          (More about us →)
        </div>
      </div>

      {/* Bottom Section - Service Buttons and Right Content */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}
      >
        
        {/* Left Column - Service Buttons */}
        <div>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {serviceButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  padding: '14px 24px',
                  borderRadius: '30px',
                  width: 'fit-content',
                  border: activeService === index ? 'none' : '1px solid #000000',
                  backgroundColor: activeService === index ? '#000000' : 'transparent',
                  color: activeService === index ? '#ffffff' : '#000000',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {button}{activeService === index ? ' →' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Repeated Description */}
        <div>
          <p 
            style={{
              fontFamily: 'Tiempos, Georgia, serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#000000',
              marginBottom: '30px',
              margin: 0
            }}
          >
            We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.
          </p>

          {/* CTA Link */}
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#000000',
              textDecoration: 'none',
              display: 'block',
              cursor: 'pointer'
            }}
          >
            (Check Details →)
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          h1 {
            font-size: 36px !important;
          }
          .service-buttons {
            width: 100% !important;
            align-items: center !important;
          }
          .service-buttons button {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
