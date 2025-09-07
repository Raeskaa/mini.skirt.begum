'use client';

import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  const router = useRouter();

  // Sample project data matching the image
  const projects = [
    {
      id: 1,
      slug: "small-talk",
      image: "/project-placeholder.jpg",
      brandName: "Small Talk",
      industry: "Hospitality",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 2,
      slug: "laylah",
      image: "/project-placeholder.jpg",
      brandName: "Laylah",
      industry: "Clothing",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 3,
      slug: "speedybrand-ai",
      image: "/project-placeholder.jpg",
      brandName: "Speedybrand.ai",
      industry: "Saas",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 4,
      image: "/project-placeholder.jpg",
      brandName: "Equivoice",
      industry: "Hospitality",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 5,
      image: "/project-placeholder.jpg",
      brandName: "Infotik",
      industry: "Social Discourse",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 6,
      image: "/project-placeholder.jpg",
      brandName: "Project 6",
      industry: "Industry",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 7,
      image: "/project-placeholder.jpg",
      brandName: "Compassbox Music Label",
      industry: "Hospitality",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 8,
      image: "/project-placeholder.jpg",
      brandName: "Pardesi",
      industry: "Music Event",
      tags: ["Brand Identity Design", "Digital Design"]
    },
    {
      id: 9,
      image: "/project-placeholder.jpg",
      brandName: "Verandah",
      industry: "Hospitality",
      tags: ["Brand Identity Design", "Digital Design"]
    }
  ];

  return (
    <main className="bg-white pt-24">
      {/* Work Page Content */}
      <section 
        style={{
          backgroundColor: '#ffffff',
          width: '100vw',
          margin: '0 auto',
          padding: '120px 40px 100px 40px' // Extra top padding for fixed navigation
        }}
      >
        <div 
          style={{
            width: '100%',
            margin: '0 auto'
          }}
        >
          {/* Projects Grid */}
          <div 
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                brandName={project.brandName}
                industry={project.industry}
                tags={project.tags}
                height={400}
                onClick={() => {
                  // Navigate to project detail page
                  router.push(`/work/${project.slug}`);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          section {
            padding: 100px 20px 60px 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
