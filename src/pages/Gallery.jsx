import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

export default function Gallery() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
      autoplayVideos: true
    });
    return () => {
      lightbox.destroy();
    };
  }, []);

  const items = [
    { type: 'video', src: '/videos/video.mp4', poster: '' },
    { type: 'image', src: '/images/sli.jpg' },
    { type: 'image', src: '/images/H1.jpg' },
    { type: 'image', src: '/images/slider2.jpg' },
    { type: 'image', src: '/images/dec2/c1.jpg' },
    { type: 'image', src: '/images/sli.avif' },
    { type: 'image', src: '/images/slii.png' },
    { type: 'image', src: '/images/dec2/c3.jpg' },
    { type: 'image', src: '/images/Hand.webp', isLgOnly: true }
  ];

  return (
    <>
      <section className="bg-ivory py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
            
            {items.map((item, index) => {
              if (item.type === 'video') {
                return (
                  <a 
                    key={index}
                    href={item.src} 
                    className="glightbox group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-gold/10 bg-black" 
                    data-gallery="dhrish-gallery"
                  >
                    <video muted loop playsInline className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-all duration-500">
                        <i className="fa-solid fa-play ml-1"></i>
                      </div>
                    </div>
                  </a>
                );
              }

              return (
                <a 
                  key={index}
                  href={item.src} 
                  className={`glightbox group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-gold/10 ${item.isLgOnly ? 'hidden lg:block' : ''}`} 
                  data-gallery="dhrish-gallery"
                >
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Gallery item"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* Global GLightbox styling overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .gslide-image img { border-radius: 1rem; }
        .goverlay { background: rgba(20, 9, 11, 0.95) !important; }
      `}} />
    </>
  );
}
