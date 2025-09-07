import Footer from "@/components/Footer";
import ProjectPageClient from "@/components/ProjectPageClient";
import GreyFrame from "@/components/GreyFrame";

// Generate static params for all project slugs
export async function generateStaticParams() {
  const projects = [
    'small-talk',
    'project-2',
    'project-3',
    'project-4',
    'project-5'
  ];

  return projects.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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
            <a 
              href="/contact"
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
            >
              Start The Project
            </a>

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
                backgroundColor: '#f5f5f5',
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
                backgroundColor: '#f5f5f5',
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
            <ProjectPageClient 
              relatedProjects={relatedProjects}
              serviceButtons={serviceButtons}
            />
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

            </div>
          </div>
          </div>
        </div>
      </section>

      <GreyFrame />
      <Footer />

    </main>
  );
}
