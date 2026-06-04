import React from 'react';

export default function Instagram() {
  const posts = [
    {
      img: '/images/collections/5.jpg',
      handle: '@anu_mol',
      cat: 'Wedding Sets',
      delay: '100'
    },
    {
      img: '/images/collections/6.jpg',
      handle: '@devika_s',
      cat: 'Diamond Love',
      delay: '200',
      translate: true
    },
    {
      img: '/images/collections/7.jpg',
      handle: '@megha_p',
      cat: 'Bridal Glow',
      delay: '300'
    },
    {
      img: '/images/collections/8.jpg',
      handle: '@keerthana',
      cat: 'Heritage Gold',
      delay: '400',
      translate: true
    },
    {
      img: '/images/collections/1.webp',
      handle: '@athira_j',
      cat: 'Ethereal Shine',
      delay: '500',
      hiddenMobile: true
    }
  ];

  return (
    <section className="relative bg-ivory pt-12 md:pt-16 lg:pt-20 lg:pb-15 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none opacity-20 z-0">
        <div className="w-[1px] h-full bg-text/5"></div>
        <div className="w-[1px] h-full bg-text/5 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/5"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-18">
          <div className="max-w-2xl text-center lg:text-left animate-fade-in" data-aos="fade-right">
            <span className="inline-flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">
              Instagram Moments
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text leading-tight tracking-tight">
              Real Brides. Real Elegance.
            </h2>
            <p className="mt-6 text-text/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Explore cherished moments shared by our clients wearing Nova Gold & Diamonds collections for weddings and timeless celebrations.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <a 
              href="https://www.instagram.com/novagoldanddiamonds/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-primary border border-gold/30 text-white px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl hover:border-gold"
            >
              <i className="fa-brands fa-instagram text-xl text-white"></i>
              <span className="text-[13px] sm:text-[13px] font-bold tracking-[0.2em]">@novagoldanddiamonds</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <a 
              key={index}
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-lg ${post.translate ? 'lg:translate-y-12' : ''} ${post.hiddenMobile ? 'hidden lg:block' : ''}`}
              data-aos="fade-up" 
              data-aos-delay={post.delay}
            >
              <img 
                src={post.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={post.handle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h4 className="text-sm font-bold tracking-wide">{post.handle}</h4>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest mt-1">{post.cat}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <i className="fa-brands fa-instagram text-white text-xs"></i>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
