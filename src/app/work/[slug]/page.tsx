'use client';

import { useParams, useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Sample project data - in a real app, this would come from a CMS or API
  const projectData: { [key: string]: any } = {
    'small-talk': {
      client: 'Small Talk',
      industry: 'Home',
      credits: ['Mahesh', 'Sajal'],
      scope: ['Work', 'Artists', 'Join the team', 'Tomorrow', 'Freebies', 'Offerings'],
      year: '2024',
      description: "We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.",
      image: '/project-placeholder.jpg'
    },
    'laylah': {
      client: 'Laylah',
      industry: 'Clothing',
      credits: ['Mahesh', 'Sajal'],
      scope: ['Work', 'Artists', 'Join the team', 'Tomorrow', 'Freebies', 'Offerings'],
      year: '2024',
      description: "We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.",
      image: '/project-placeholder.jpg'
    },
    'speedybrand-ai': {
      client: 'Speedybrand.ai',
      industry: 'Saas',
      credits: ['Mahesh', 'Sajal'],
      scope: ['Work', 'Artists', 'Join the team', 'Tomorrow', 'Freebies', 'Offerings'],
      year: '2024',
      description: "We're a multi-disciplinary design studio based in Mumbai. We thrive at the intersection of design, business and Art. Our work includes design, art, humor, irony, functionality & people.",
      image: '/project-placeholder.jpg'
    }
  };

  const project = projectData[slug] || projectData['small-talk'];

  const handleStartProject = () => {
    // Handle start project action
    console.log('Start The Project clicked');
  };


  // Related projects data
  const relatedProjects = [
    {
      id: 1,
      slug: "verandah",
      image: "/project-placeholder.jpg",
      brandName: "Verandah",
      industry: "Identity",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 2,
      slug: "compassbox-music-label",
      image: "/project-placeholder.jpg",
      brandName: "Composbox Music Label",
      industry: "Identity",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 3,
      slug: "pardesi",
      image: "/project-placeholder.jpg",
      brandName: "Pardesi",
      industry: "Identity",
      tags: ["Brand Identity Design", "Digital Design"]
    }
  ];

  // Service buttons data
  const serviceButtons = [
    { name: 'Art Direction', type: 'primary', route: '/art-direction' },
    { name: 'Digital Design', type: 'secondary', route: '/digital-design' },
    { name: 'Packaging & Print Design', type: 'secondary', route: '/packaging' },
    { name: 'Identity Design', type: 'secondary', route: '/identity' },
    { name: 'Visual Branding strategy', type: 'secondary', route: '/branding' },
  ];

  return (
    <main className="bg-white pt-24">
      {/* Project Page Content */}
      <section 
        style={{
          backgroundColor: '#ffffff',
          width: '100vw',
          margin: '0 auto',
          padding: '120px 40px 100px 40px',
          minHeight: '80vh'
        }}
      >
        <div 
          className="project-grid"
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
            {/* Client Section */}
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
                Client
              </h3>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#000000'
                  }}
                >
                  {project.client}
                </span>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#000000',
                    backgroundColor: '#f0f0f0',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {project.industry}
                </span>
              </div>
            </div>

            {/* Credits Section */}
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
                Credits
              </h3>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                {project.credits.map((credit: string, index: number) => (
                  <span 
                    key={index}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#000000'
                    }}
                  >
                    {credit}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope Section */}
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
                Scope
              </h3>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                {project.scope.map((item: string, index: number) => (
                  <span 
                    key={index}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#000000'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Start The Project Button */}
            <button 
              onClick={handleStartProject}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: '#000000',
                backgroundColor: 'transparent',
                border: '2px solid #000000',
                borderRadius: '30px',
                padding: '14px 24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#000000';
              }}
            >
              Start The Project
            </button>

            {/* Page Number */}
            <div 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: '#666666',
                marginTop: 'auto'
              }}
            >
              [1]
            </div>
          </div>

          {/* Right Content Area */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '60px'
            }}
          >
          {/* Blog Content Section */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            {/* Project Description */}
            <div>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#666666',
                  marginBottom: '20px',
                  display: 'block'
                }}
              >
                [{project.year}]
              </span>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#000000',
                  margin: 0
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Large Project Image */}
            <div 
              style={{
                width: '100%',
                height: '500px',
                backgroundColor: '#d1d1d1',
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Second Description with Design Process Link */}
            <div>
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
                {project.description} <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>[What is our design process?]</span> Our work includes design, art, humor, irony, functionality & people.
              </p>
            </div>

            {/* Two Small Image Placeholders */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#d1d1d1'
                }}
              />
              <div 
                style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#d1d1d1'
                }}
              />
            </div>

            {/* Testimonial Quote */}
            <div 
              style={{
                marginTop: '20px'
              }}
            >
              <blockquote 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#000000',
                  margin: '0 0 16px 0',
                  fontStyle: 'italic'
                }}
              >
                "We're really bla over bla and bla with all this bla and i can not imagine bla bla and this is not the best bla bla"
              </blockquote>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#666666',
                  margin: 0,
                  textAlign: 'right'
                }}
              >
                -Bikram Nath, Cofounder
              </p>
            </div>

            {/* Bottom Large Image Placeholder */}
            <div 
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#d1d1d1',
                marginTop: '20px'
              }}
            />
          </div>

          {/* Related Projects Section */}
          <div 
            style={{
              marginTop: '80px'
            }}
          >
            <h2 
              style={{
                fontFamily: 'Tiempos, Georgia, serif',
                fontSize: '42px',
                fontWeight: 400,
                color: '#000000',
                marginBottom: '40px'
              }}
            >
              Related Projects
            </h2>
            
            <div 
              className="related-projects"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px'
              }}
            >
              {relatedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  image={relatedProject.image}
                  brandName={relatedProject.brandName}
                  industry={relatedProject.industry}
                  tags={relatedProject.tags}
                  height={300}
                  onClick={() => {
                    router.push(`/work/${relatedProject.slug}`);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Offerings Section */}
          <div 
            className="offerings-grid"
            style={{
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start'
            }}
          >
            {/* Left Column - Offerings */}
            <div>
              <h2 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '42px',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: '#000000',
                  marginBottom: '40px'
                }}
              >
                Offerings
              </h2>
              
              {/* Service Buttons */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '40px'
                }}
              >
                {serviceButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => router.push(button.route)}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      padding: '14px 24px',
                      borderRadius: '30px',
                      width: 'fit-content',
                      border: button.type === 'primary' ? 'none' : '1px solid #000000',
                      backgroundColor: button.type === 'primary' ? '#000000' : 'transparent',
                      color: button.type === 'primary' ? '#ffffff' : '#000000',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {button.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
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
                {project.description}
              </p>

              {/* Check Details Link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/services');
                }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#000000',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                Check Details →
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 100px 20px 60px 20px !important;
          }
          
          /* Stack grid on mobile */
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          /* Stack project cards on mobile */
          .related-projects {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          /* Stack offerings section on mobile */
          .offerings-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
