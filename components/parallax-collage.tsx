'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop', // Startup office meeting
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=400&fit=crop', // Innovation lab workspace
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=400&fit=crop', // Innovation lab workspace (replaced)
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop', // Team collaboration
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=400&fit=crop', // Innovation workshop
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop', // Startup office meeting
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=400&fit=crop', // Innovation lab workspace
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop', // Team collaboration (replaced)
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop', // Startup meeting
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=400&fit=crop', // Innovation workshop
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop', // Startup office meeting
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=400&fit=crop', // Innovation lab workspace
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop', // Startup team meeting
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop', // Team collaboration
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=400&fit=crop', // Innovation workshop
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop', // Startup office meeting
];

export default function ParallaxCollage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const sectionBottom = sectionTop + sectionHeight;

      // Progress from 0 to 1 as section scrolls into view
      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-blue-50 to-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            For Young Minds (@ schools & colleges)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you craving to make impact in real world?
          </p>
        </div>

        {/* Scroll-Revealing Photo Gallery */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
            {IMAGES.map((image, index) => {
              // Calculate reveal progress for each photo
              const revealThreshold = index / IMAGES.length;
              const photoProgress = Math.max(0, Math.min(1,
                (scrollProgress - revealThreshold * 0.8) / 0.2
              ));

              // Scale and opacity based on reveal progress
              const scale = 0.3 + (photoProgress * 0.7); // From 0.3 to 1.0
              const opacity = photoProgress;

              return (
                <div
                  key={index}
                  className="relative transition-all duration-1000 ease-out"
                  style={{
                    width: '160px',
                    height: '200px',
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    transformOrigin: 'center',
                    filter: `drop-shadow(0 ${photoProgress * 20}px ${photoProgress * 40}px rgba(0,0,0,${photoProgress * 0.15}))`,
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/50 bg-white/80 backdrop-blur-sm">
                    <Image
                      src={image}
                      alt={`Student ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-8 md:p-12 shadow-lg">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Do you want to unlock your full potential?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Academic learning alone won't be enough.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Mindset with real world problem solving skills will make you future ready.
            </p>
            <div className="pt-6 border-t border-blue-300">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Become a startup founder before college
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Real world learning through Real world projects/start-ups!
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Students transforming ideas into impact through real-world startup experience
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-foreground mt-6">
              Transform your Ideas into Reality!
            </p>
            <p className="text-xl md:text-2xl font-semibold text-foreground mt-4">
              Join Us from Anywhere
            </p>
            <p className="text-lg text-muted-foreground">
              (Online – Join from Anywhere & Offline @ Ahmedabad office)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
