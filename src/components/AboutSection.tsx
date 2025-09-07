'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [activeService, setActiveService] = useState(0);

  const serviceButtons = [
    { 
      name: 'Art Direction', 
      content: 'We create compelling visual narratives that guide brands through strategic art direction. Our approach combines creative vision with market insights to deliver impactful campaigns that resonate with audiences and drive business results.'
    },
    { 
      name: 'Digital Design', 
      content: 'From user interfaces to digital experiences, we craft intuitive and engaging digital solutions. Our digital design expertise spans web applications, mobile interfaces, and interactive experiences that connect brands with their digital audiences.'
    },
    { 
      name: 'Packaging & Print Design', 
      content: 'We bring brands to life through thoughtful packaging and print design. Our work combines aesthetic appeal with functional design, creating memorable unboxing experiences and print materials that stand out in competitive markets.'
    },
    { 
      name: 'Identity Design', 
      content: 'We develop comprehensive brand identities that tell your unique story. Our identity design process creates cohesive visual systems that work across all touchpoints, from logos to brand guidelines that ensure consistent brand expression.'
    },
    { 
      name: 'Visual Branding Strategy', 
      content: 'We craft strategic visual branding that positions your brand for success. Our approach combines market research, competitive analysis, and creative strategy to develop visual brand systems that differentiate and drive business growth.'
    },
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
        padding: '100px 40px'
      }}
    >
      {/* Grid Layout */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}
      >
        
        {/* Left Column */}
        <div>
          {/* Main Heading */}
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

          {/* CTA Link */}
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#000000',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '60px',
              cursor: 'pointer'
            }}
          >
            (More about us →)
          </div>

          {/* Service Buttons */}
          <div 
            style={{
              marginTop: '60px',
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
                {button.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Dynamic Content based on selected service */}
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#000000',
              marginBottom: '30px',
              margin: 0
            }}
          >
            {serviceButtons[activeService].content}
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
