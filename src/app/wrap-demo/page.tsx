'use client';

import AdvancedWrapAnimation from '@/components/AdvancedWrapAnimation';
import WrapAnimation from '@/components/WrapAnimation';
import Footer from '@/components/Footer';
import GreyFrame from '@/components/GreyFrame';

export default function WrapDemoPage() {
  return (
    <main className="bg-white pt-24">
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 
              style={{
                fontFamily: 'Tiempos, Georgia, serif',
                fontSize: '48px',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#000000',
                marginBottom: '20px'
              }}
            >
              Wrap Animation Effects
            </h1>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.4,
                color: '#666666',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Interactive 3D wrap effects that transform content around images and videos, 
              inspired by modern web design trends.
            </p>
          </div>

          {/* Demo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Demo 1 - Basic Wrap Animation */}
            <div className="space-y-4">
              <h3 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#000000'
                }}
              >
                Basic Wrap Effect
              </h3>
              <WrapAnimation
                mediaSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                mediaType="video"
                className="h-80 rounded-lg"
                intensity={0.3}
                duration={800}
              >
                <div className="text-center">
                  <h4 
                    style={{
                      fontFamily: 'Tiempos, Georgia, serif',
                      fontSize: '32px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      marginBottom: '12px'
                    }}
                  >
                    Hover to Wrap
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#ffffff',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    Content wraps around the media
                  </p>
                </div>
              </WrapAnimation>
            </div>

            {/* Demo 2 - Advanced Wrap Animation */}
            <div className="space-y-4">
              <h3 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#000000'
                }}
              >
                Advanced Wrap Effect
              </h3>
              <AdvancedWrapAnimation
                mediaSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                mediaType="video"
                className="h-80 rounded-lg"
                wrapIntensity={0.5}
                animationDuration={1000}
                enableContentWrapping={true}
              >
                <div className="text-center">
                  <h4 
                    style={{
                      fontFamily: 'Tiempos, Georgia, serif',
                      fontSize: '28px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                      marginBottom: '12px'
                    }}
                  >
                    Content-Aware Wrapping
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#ffffff',
                      textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                      maxWidth: '200px',
                      margin: '0 auto'
                    }}
                  >
                    Advanced distortion and perspective effects
                  </p>
                </div>
              </AdvancedWrapAnimation>
            </div>

            {/* Demo 3 - Image with Text Wrap */}
            <div className="space-y-4">
              <h3 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#000000'
                }}
              >
                Image Wrap with Text
              </h3>
              <AdvancedWrapAnimation
                mediaSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                mediaType="image"
                className="h-80 rounded-lg"
                wrapIntensity={0.4}
                animationDuration={1200}
                enableContentWrapping={true}
              >
                <div className="text-center p-6">
                  <h4 
                    style={{
                      fontFamily: 'Tiempos, Georgia, serif',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                      marginBottom: '8px'
                    }}
                  >
                    Mountain View
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: '#ffffff',
                      textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                      opacity: 0.9
                    }}
                  >
                    Text content wraps and distorts with the image
                  </p>
                </div>
              </AdvancedWrapAnimation>
            </div>

            {/* Demo 4 - High Intensity Wrap */}
            <div className="space-y-4">
              <h3 
                style={{
                  fontFamily: 'Tiempos, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#000000'
                }}
              >
                High Intensity Wrap
              </h3>
              <AdvancedWrapAnimation
                mediaSrc="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop"
                mediaType="image"
                className="h-80 rounded-lg"
                wrapIntensity={0.7}
                animationDuration={800}
                enableContentWrapping={true}
              >
                <div className="text-center p-4">
                  <h4 
                    style={{
                      fontFamily: 'Tiempos, Georgia, serif',
                      fontSize: '20px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                      marginBottom: '8px'
                    }}
                  >
                    Extreme Wrap
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#ffffff',
                      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
                      opacity: 0.8
                    }}
                  >
                    Maximum distortion effect
                  </p>
                </div>
              </AdvancedWrapAnimation>
            </div>
          </div>

          {/* Usage Instructions */}
          <div 
            className="bg-gray-50 p-8 rounded-lg"
            style={{
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <h3 
              style={{
                fontFamily: 'Tiempos, Georgia, serif',
                fontSize: '24px',
                fontWeight: 400,
                color: '#000000',
                marginBottom: '16px'
              }}
            >
              How to Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '8px'
                  }}
                >
                  Basic WrapAnimation
                </h4>
                <p 
                  style={{
                    fontSize: '14px',
                    color: '#666666',
                    lineHeight: 1.5,
                    marginBottom: '12px'
                  }}
                >
                  Simple 3D transform effects with mouse tracking.
                </p>
                <code 
                  style={{
                    fontSize: '12px',
                    backgroundColor: '#f5f5f5',
                    padding: '8px',
                    borderRadius: '4px',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  {`<WrapAnimation
  mediaSrc="/video.mp4"
  mediaType="video"
  intensity={0.3}
  duration={800}
>
  <YourContent />
</WrapAnimation>`}
                </code>
              </div>
              <div>
                <h4 
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '8px'
                  }}
                >
                  Advanced WrapAnimation
                </h4>
                <p 
                  style={{
                    fontSize: '14px',
                    color: '#666666',
                    lineHeight: 1.5,
                    marginBottom: '12px'
                  }}
                >
                  Advanced content-aware wrapping with distortion effects.
                </p>
                <code 
                  style={{
                    fontSize: '12px',
                    backgroundColor: '#f5f5f5',
                    padding: '8px',
                    borderRadius: '4px',
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  {`<AdvancedWrapAnimation
  mediaSrc="/image.jpg"
  mediaType="image"
  wrapIntensity={0.5}
  enableContentWrapping={true}
>
  <YourContent />
</AdvancedWrapAnimation>`}
                </code>
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
