'use client';

import ProjectCard from "./ProjectCard";

interface ProjectPageClientProps {
  relatedProjects: any[];
  serviceButtons: any[];
}

export default function ProjectPageClient({ relatedProjects, serviceButtons }: ProjectPageClientProps) {
  return (
    <>
      {/* Related Projects Section */}
      <div className="space-y-8">
        <h2 
          className="text-gray-900"
          style={{ 
            fontFamily: 'Tiempos, Georgia, serif',
            fontSize: '42px',
            fontWeight: '400',
            lineHeight: '1.2'
          }}
        >
          Related Projects
        </h2>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {relatedProjects.map((relatedProject, index) => (
            <ProjectCard
              key={index}
              image={relatedProject.image}
              brandName={relatedProject.brandName}
              industry={relatedProject.industry}
              tags={relatedProject.tags}
              height={300}
              onClick={() => {
                window.location.href = `/work/${relatedProject.slug}`;
              }}
            />
          ))}
        </div>
      </div>

      {/* Service Buttons */}
      <div 
        className="flex flex-wrap gap-4"
        style={{
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid #e5e5e5'
        }}
      >
        {serviceButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => window.location.href = button.route}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              padding: '14px 24px',
              border: '1px solid #000000',
              backgroundColor: 'transparent',
              color: '#000000',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
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
            {button.name}
          </button>
        ))}
      </div>

      {/* Check Details Link */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/services';
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
        onMouseEnter={(e) => (e.target as HTMLElement).style.textDecoration = 'underline'}
        onMouseLeave={(e) => (e.target as HTMLElement).style.textDecoration = 'none'}
      >
        Check Details →
      </a>
    </>
  );
}
