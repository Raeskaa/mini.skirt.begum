'use client';

import { useRouter } from 'next/navigation';

export default function WorkSection() {
  const router = useRouter();

  const handleCheckProjects = () => {
    router.push('/projects');
  };

  return (
    <section 
      style={{
        backgroundColor: '#ffffff',
        width: '100vw',
        margin: '0 auto',
        padding: '100px 40px'
      }}
    >
      {/* Masonry Grid Container - Full Width */}
      <div 
        style={{
          width: '100%',
          margin: '0 auto'
        }}
      >
        {/* Top Row - 2 Equal Images */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}
        >
          <div 
            style={{
              backgroundColor: '#f5f5f5',
              height: '600px',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* Project 1 Placeholder */}
          </div>

          <div 
            style={{
              backgroundColor: '#f5f5f5',
              height: '600px',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* Project 2 Placeholder */}
          </div>
        </div>

        {/* Middle Row - 1 Wide Image */}
        <div 
          style={{
            backgroundColor: '#f5f5f5',
            height: '500px',
            borderRadius: '0px',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {/* Project 3 - Featured Placeholder */}
        </div>

        {/* Bottom Row - 2 Equal Images */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}
        >
          <div 
            style={{
              backgroundColor: '#f5f5f5',
              height: '600px',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* Project 4 Placeholder */}
          </div>

          <div 
            style={{
              backgroundColor: '#f5f5f5',
              height: '600px',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* Project 5 Placeholder */}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          style={{
            textAlign: 'right',
            marginTop: '30px'
          }}
        >
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCheckProjects();
            }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#000000',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            (Check all projects →)
          </a>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        /* Below 768px: Adjust padding and stack images vertically */
        @media (max-width: 767px) {
          section {
            padding: 60px 20px !important;
          }
          
          /* Stack all images vertically on mobile */
          .masonry-grid > div {
            display: block !important;
          }
          
          .masonry-grid > div > div {
            width: 100% !important;
            margin-bottom: 15px !important;
          }
          
          /* Mobile image heights */
          .masonry-grid > div > div:not(.wide-image) {
            height: 350px !important;
          }
          
          .masonry-grid .wide-image {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
}
