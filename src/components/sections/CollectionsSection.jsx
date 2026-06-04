import React from 'react';
import { Link } from 'react-router-dom';

export default function CollectionsSection() {
  const collections = [
    {
      img: '/images/collections/5.jpg',
      title: 'Earrings',
      badge: 'View Collection',
      link: '/collections',
      translate: false
    },
    {
      img: '/images/collections/6.jpg',
      title: 'Necklaces',
      badge: 'Explore Now',
      link: '/collections',
      translate: true
    },
    {
      img: '/images/collections/7.jpg',
      title: 'Rings',
      badge: 'Shop Now',
      link: '/collections',
      translate: false
    },
    {
      img: '/images/collections/8.jpg',
      title: 'Bracelets',
      badge: 'View All',
      link: '/collections',
      translate: true
    },
    {
      img: '/images/collections/1.webp',
      title: 'Diamond',
      badge: 'Exclusive',
      link: '/collections',
      translate: false
    },
    {
      img: '/images/collections/2.webp',
      title: 'Gold Sets',
      badge: 'Pure Gold',
      link: '/collections',
      translate: true
    },
    {
      img: '/images/collections/3.webp',
      title: 'Bridal',
      badge: 'Luxury Wear',
      link: '/collections',
      translate: false
    },
    {
      img: '/images/collections/4.webp',
      title: 'Bangles',
      badge: 'View All',
      link: '/collections',
      translate: true
    }
  ];

  return (
    <section className="relative bg-ivory pt-12 md:pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none opacity-20 z-0">
        <div className="w-[1px] h-full bg-text/10"></div>
        <div className="w-[1px] h-full bg-text/10"></div>
        <div className="w-[1px] h-full bg-text/10 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/10 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/10"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex flex-col items-center justify-center mb-5 md:mb-10 text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[90px] md:text-[180px] lg:text-[355px] text-rose leading-none tracking-tighter select-none pointer-events-none whitespace-nowrap opacity-75">
            collections
          </h2>
          <div className="relative w-40 md:w-56 lg:w-64 z-10">
            <img src="/images/Hand.webp" alt="Jewelry" className="w-full h-[250px] lg:h-[380px] object-contain drop-shadow-2xl" />
          </div>
          <div className="mt-1 sm:mt-12 text-center max-w-2xl px-4 relative z-20">
            <p className="font-serif text-xl md:text-3xl lg:text-4xl text-text leading-tight tracking-tight">
              Inspired by our multi-ethnic life, we create fine jewelry to share our wonderful tales...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-16 lg:pb-14" data-aos="fade-left" data-aos-duration="800">
          {collections.map((col, index) => (
            <Link 
              key={index}
              to={col.link} 
              className={`group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 ${col.translate ? 'lg:translate-y-12' : ''}`}
            >
              <img 
                src={col.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                alt={col.title}
              />
              <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
                  {col.badge}
                </span>
                <div className="w-8 md:w-12 h-[1px] bg-gold"></div>
              </div>
              <div className="absolute bottom-3 md:bottom-10 left-0 w-full text-center group-hover:translate-y-[-15px] transition-transform duration-500 px-2">
                <h3 className="font-serif text-2xl md:text-4xl text-white tracking-tight">{col.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:mt-15 flex justify-center lg:justify-end">
          <Link 
            to="/collections" 
            className="group relative inline-flex items-center gap-6 border border-gold/30 text-white bg-primary lg:px-12 px-8 py-4 lg:py-5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold shadow-sm hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-0 bg-dark group-hover:w-full transition-all duration-500 ease-out -z-10"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors">
              Explore All Works
            </span>
            <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
