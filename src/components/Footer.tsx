'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const socialLinks = [
    { name: 'Linkedin', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Youtube', href: 'https://youtube.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Medium', href: 'https://medium.com' },
  ];

  const companyLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Artists', href: '/artists' },
    { name: 'Join the team', href: '/careers' },
    { name: 'Tomorrow', href: '/tomorrow' },
    { name: 'Freebies', href: '/freebies' },
    { name: 'Offerings', href: '/offerings' },
  ];

  return (
    <footer className="bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Container with exact specifications */}
      <div 
        className="w-full"
        style={{
          padding: '80px 40px 40px 40px'
        }}
      >
        {/* Top Section - Contact Info */}
        <div className="relative text-right">
          <p 
            className="mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#000000',
              maxWidth: '500px',
              marginLeft: 'auto'
            }}
          >
            We're a design studio that works in thought and in action:
          </p>
          <a 
            href="mailto:hello@begum.com"
            className="block mb-10"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '32px',
              fontWeight: 400,
              color: '#000000',
              textDecoration: 'underline'
            }}
          >
            hello@begum.com
          </a>
          
          {/* Divider Line */}
          <div 
            className="mb-15"
            style={{
              borderTop: '1px solid #e5e5e5',
              width: '100%',
              marginBottom: '60px'
            }}
          ></div>
        </div>

        {/* Two Group Layout */}
        <div 
          style={{
            display: 'flex',
            gap: '60px',
            alignItems: 'flex-start'
          }}
        >
          
          {/* Group 1 - Newsletter (Left Side) */}
          <div style={{ flex: '0 0 auto', minWidth: '280px' }}>
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#666666',
                marginBottom: '16px'
              }}
            >
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '280px',
                  height: '40px',
                  padding: '12px 16px',
                  backgroundColor: '#f5f5f5',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  marginBottom: '8px'
                }}
                required
              />
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#888888',
                  marginTop: '8px'
                }}
              >
                By subscribing you agree with our{' '}
                <a href="/privacy" style={{ textDecoration: 'underline' }}>
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>

          {/* Group 2 - Socials, Company, Office (Right Side) */}
          <div 
            style={{
              display: 'flex',
              gap: '60px',
              flex: '1'
            }}
          >
            {/* Socials */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  marginBottom: '16px'
                }}
              >
                Socials
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {socialLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    style={{ marginBottom: index < socialLinks.length - 1 ? '8px' : '0' }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#000000',
                        lineHeight: 1.6,
                        textDecoration: 'none'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  marginBottom: '16px'
                }}
              >
                Company
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {companyLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    style={{ marginBottom: index < companyLinks.length - 1 ? '8px' : '0' }}
                  >
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#000000',
                        lineHeight: 1.6,
                        textDecoration: 'none'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  marginBottom: '16px'
                }}
              >
                Office
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#000000',
                  lineHeight: 1.4,
                  margin: 0
                }}
              >
                Guwahati<br />Mumbai
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center mt-15"
          style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#888888'
            }}
          >
            ©2025 miniskirtbegum. All rights reserved
          </div>
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#888888'
            }}
          >
            <a href="/terms" style={{ textDecoration: 'underline' }}>Terms</a>,{' '}
            <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>{' '}
            &nbsp;&nbsp;&nbsp;Euphoria
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .w-full {
            padding: 40px 20px !important;
          }
          .flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
