'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import GreyFrame from '@/components/GreyFrame';

export default function OfferingsPage() {
  const [expandedService, setExpandedService] = useState(0); // Digital Design is expanded by default
  const router = useRouter();

  const services = [
    {
      name: 'Digital Design',
      content: "We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.",
      tags: ['Digital Design', 'Digital Design', 'Digital Design', 'Digital Design'],
      projects: [
        { 
          slug: 'verandah',
          brandName: 'Verandah', 
          industry: 'Hospitality', 
          tags: ['Brand Identity Design', 'Digital Design'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'small-talk',
          brandName: 'Small Talk', 
          industry: 'Communication', 
          tags: ['Brand Identity Design', 'Digital Design'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'pardesi',
          brandName: 'Pardesi', 
          industry: 'Travel', 
          tags: ['Brand Identity Design', 'Digital Design'],
          image: '/project-placeholder.jpg'
        }
      ]
    },
    {
      name: 'Art Direction',
      content: "We create compelling visual narratives that guide brands through strategic art direction. Our approach combines creative vision with market insights to deliver impactful campaigns.",
      tags: ['Art Direction', 'Visual Strategy', 'Campaign Design', 'Creative Direction'],
      projects: [
        { 
          slug: 'campaign-alpha',
          brandName: 'Campaign Alpha', 
          industry: 'Fashion', 
          tags: ['Art Direction', 'Campaign Design'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'brand-beta',
          brandName: 'Brand Beta', 
          industry: 'Lifestyle', 
          tags: ['Art Direction', 'Visual Strategy'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'creative-gamma',
          brandName: 'Creative Gamma', 
          industry: 'Entertainment', 
          tags: ['Art Direction', 'Creative Direction'],
          image: '/project-placeholder.jpg'
        }
      ]
    },
    {
      name: 'Packaging & Print Design',
      content: "We bring brands to life through thoughtful packaging and print design. Our work combines aesthetic appeal with functional design, creating memorable unboxing experiences.",
      tags: ['Packaging Design', 'Print Design', 'Product Design', 'Brand Packaging'],
      projects: [
        { 
          slug: 'product-x',
          brandName: 'Product X', 
          industry: 'Consumer Goods', 
          tags: ['Packaging Design', 'Product Design'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'brand-y',
          brandName: 'Brand Y', 
          industry: 'Food & Beverage', 
          tags: ['Packaging Design', 'Brand Packaging'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'label-z',
          brandName: 'Label Z', 
          industry: 'Beauty', 
          tags: ['Print Design', 'Brand Packaging'],
          image: '/project-placeholder.jpg'
        }
      ]
    },
    {
      name: 'Identity Design',
      content: "We develop comprehensive brand identities that tell your unique story. Our identity design process creates cohesive visual systems that work across all touchpoints.",
      tags: ['Brand Identity', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
      projects: [
        { 
          slug: 'identity-a',
          brandName: 'Identity A', 
          industry: 'Technology', 
          tags: ['Brand Identity', 'Logo Design'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'brand-b',
          brandName: 'Brand B', 
          industry: 'Healthcare', 
          tags: ['Visual Identity', 'Brand Guidelines'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'logo-c',
          brandName: 'Logo C', 
          industry: 'Finance', 
          tags: ['Brand Identity', 'Visual Identity'],
          image: '/project-placeholder.jpg'
        }
      ]
    },
    {
      name: 'Visual Branding Strategy',
      content: "We craft strategic visual branding that positions your brand for success. Our approach combines market research, competitive analysis, and creative strategy.",
      tags: ['Brand Strategy', 'Visual Strategy', 'Market Research', 'Brand Positioning'],
      projects: [
        { 
          slug: 'strategy-d',
          brandName: 'Strategy D', 
          industry: 'Startup', 
          tags: ['Brand Strategy', 'Visual Strategy'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'position-e',
          brandName: 'Position E', 
          industry: 'Enterprise', 
          tags: ['Brand Positioning', 'Market Research'],
          image: '/project-placeholder.jpg'
        },
        { 
          slug: 'visual-f',
          brandName: 'Visual F', 
          industry: 'Non-profit', 
          tags: ['Visual Strategy', 'Brand Strategy'],
          image: '/project-placeholder.jpg'
        }
      ]
    }
  ];

  const handleServiceClick = (index: number) => {
    setExpandedService(expandedService === index ? -1 : index);
  };

  const handleProjectClick = (slug: string) => {
    router.push(`/work/${slug}`);
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
          className="offerings-grid"
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
            {/* Start The Project Button */}
            <button 
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
              Start The Project
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
              [4]
            </div>
          </div>

          {/* Right Main Content Area */}
          <div>
          {/* Ambition Heading */}
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#666666',
              marginBottom: '40px'
            }}
          >
            (Our Ambition →)
          </div>

          {/* Main Text Block */}
          <h2 
            style={{
              fontFamily: 'Tiempos, Georgia, serif',
              fontSize: '42px',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#000000',
              marginBottom: '40px',
              margin: 0
            }}
          >
            We work as collaborators with people who are aiming high and want to really put in the hours for the business, a business which can <strong>transform</strong> nudges around the branding
          </h2>

          {/* Descriptive Paragraph */}
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#000000',
              marginBottom: '40px',
              margin: 0
            }}
          >
            We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. [What is our design process?] Our work includes design, art, humor, irony, functionality & people. We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.
          </p>

          {/* Gray Placeholder Rectangle */}
          <div 
            style={{
              backgroundColor: '#f5f5f5',
              height: '300px',
              borderRadius: '0px',
              marginBottom: '40px'
            }}
          >
            {/* Placeholder for image/video content */}
          </div>

          {/* Divider Line */}
          <div 
            style={{
              borderTop: '1px solid #000000',
              width: '100%',
              marginBottom: '40px'
            }}
          ></div>

          {/* Dynamic Service Dropdowns */}
          {services.map((service, index) => (
            <div key={index}>
              {/* Service Header - Always Visible */}
              <div 
                className="group transition-all duration-300 ease-in-out hover:bg-gray-50 rounded-lg p-4 -m-4"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  paddingBottom: '20px'
                }}
                onClick={() => handleServiceClick(index)}
              >
                <h3 
                  className="transition-colors duration-300 ease-in-out group-hover:text-gray-600"
                  style={{
                    fontFamily: 'Tiempos, Georgia, serif',
                    fontSize: '42px',
                    fontWeight: 400,
                    color: '#000000',
                    margin: 0,
                    marginRight: '10px'
                  }}
                >
                  {service.name}
                </h3>
                <div 
                  className="transition-all duration-300 ease-in-out group-hover:bg-gray-700 group-hover:scale-110"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: expandedService === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <span 
                    className="transition-all duration-300 ease-in-out"
                    style={{ color: '#ffffff', fontSize: '12px' }}
                  >
                    ↓
                  </span>
                </div>
              </div>

              {/* Expanded Content - Only Visible When Expanded */}
              {expandedService === index && (
                <div 
                  className="animate-in slide-in-from-top-2 duration-300 ease-out"
                  style={{ marginTop: '20px', paddingBottom: '30px' }}
                >
                  {/* Service Description */}
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: 1.4,
                      color: '#000000',
                      marginBottom: '20px',
                      margin: 0
                    }}
                  >
                    {service.content}
                  </p>

                  {/* Service Tags */}
                  <div 
                    style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap',
                      marginBottom: '30px'
                    }}
                  >
                    {service.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        style={{
                          backgroundColor: '#f0f0f0',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#000000'
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Related Projects */}
                  <div>
                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#000000',
                        marginBottom: '20px',
                        margin: 0
                      }}
                    >
                      Related Projects
                    </h4>
                    
                    <div 
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '30px'
                      }}
                    >
                      {service.projects.map((project, projectIndex) => (
                        <ProjectCard
                          key={projectIndex}
                          image={project.image}
                          brandName={project.brandName}
                          industry={project.industry}
                          tags={[]}
                          height={200}
                          onClick={() => handleProjectClick(project.slug)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Divider Line - Show between services, not after the last one */}
              {index < services.length - 1 && (
                <div 
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    width: '100%',
                    marginBottom: '20px'
                  }}
                ></div>
              )}
            </div>
          ))}

          {/* Section Number */}
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#888888',
              marginTop: '60px'
            }}
          >
            [4]
          </div>

        </div>
        </div>
      </section>

      <GreyFrame />
      <Footer />

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
          h2 {
            font-size: 24px !important;
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
    </main>
  );
}
