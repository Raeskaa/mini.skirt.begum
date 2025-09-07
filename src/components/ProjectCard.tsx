'use client';

interface ProjectCardProps {
  image: string;
  brandName: string;
  industry: string;
  tags: string[];
  height?: number; // Make height adjustable
  onClick?: () => void;
}

export default function ProjectCard({ 
  image, 
  brandName, 
  industry, 
  tags, 
  height = 400, // Default height
  onClick 
}: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
      onClick={onClick}
    >
      {/* Image Section */}
      <div 
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{
          width: '100%',
          height: `${height}px`,
          backgroundColor: '#d1d1d1',
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginBottom: '16px'
        }}
      />

      {/* Content Section */}
      <div 
        style={{
          padding: '0'
        }}
      >
        {/* Line 1: Brand Name, Industry */}
        <div 
          style={{
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <span 
            className="transition-colors duration-300 ease-in-out group-hover:text-gray-600"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#000000'
            }}
          >
            {brandName}
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
            {industry}
          </span>
        </div>

        {/* Line 2: Tags */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0px'
          }}
        >
          {tags.map((tag, index) => (
            <span 
              key={index}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: '#666666',
                marginRight: index < tags.length - 1 ? '8px' : '0'
              }}
            >
              {tag}{index < tags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
