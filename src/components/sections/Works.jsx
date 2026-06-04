import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Works() {
  const works = [
    {
      img: '/images/works/1.webp',
      title: 'Splash golden necklace',
      price: '₹30,999',
      cat: 'Golden • Necklaces'
    },
    {
      img: '/images/works/2.webp',
      title: 'Monochrome ring',
      price: '₹19,500',
      cat: 'Golden • Ring'
    },
    {
      img: '/images/works/3.webp',
      title: 'Portlligat golden earrings',
      price: '₹9,999',
      cat: 'Earrings • Golden'
    },
    {
      img: '/images/works/4.webp',
      title: 'Miro golden bracelet limited edition',
      price: '₹18,200',
      cat: 'Bracelet • Golden'
    },
    {
      img: '/images/works/2.webp',
      title: 'Handcrafted Designer Jewel',
      price: '₹45,500',
      cat: 'Exclusive • Signature'
    }
  ];

  return (
    <section className="bg-ivory pt-10 md:pt-16 lg:pt-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-start md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-12">
          <div className="max-w-2xl w-full text-left" data-aos="fade-right" data-aos-duration="1000">
            <span className="text-gold font-semibold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">
              Our Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-text tracking-tight leading-tight">
              Our collection, your timeless elegance
            </h2>
          </div>
          <Link 
            to="/collections" 
            data-aos="fade-left" 
            data-aos-duration="1000"
            className="hidden sm:flex group bg-primary text-white border-none uppercase rounded-2xl px-8 py-3.5 text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:bg-dark shrink-0 shadow-lg shadow-primary/10 items-center gap-3"
          >
            <span>View all</span>
            <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-2"></i>
          </Link>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            pagination={{
              el: '.swiper-pagination-works',
              clickable: true
            }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="swiper-works !overflow-visible w-full"
          >
            {works.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <Link 
                  to="/product-detail"
                  className="group flex flex-col h-full bg-white border border-primary/20 rounded-[2rem] p-5 md:p-6 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(155,17,30,0.15)] text-left"
                >
                  <div className="h-56 md:h-64 lg:h-72 w-full mb-6 overflow-hidden rounded-2xl bg-ivory/40 flex items-center justify-center relative shrink-0">
                    <div className="w-full h-full border border-gold/40 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                      <img src={item.img} className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                      <i className="fa-regular fa-heart text-gold text-sm"></i>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start gap-3 mb-4">
                      <h3 className="font-serif text-lg md:text-xl text-text leading-tight capitalize line-clamp-2 min-h-[3rem]">
                        {item.title}
                      </h3>
                      <span className="font-bold text-lg text-text whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2">
                      <span className="w-4 h-[1.5px] bg-gold/40"></span>
                      <span className="text-[11px] font-bold tracking-widest text-text/40 capitalize">{item.cat}</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center mt-12 md:mt-15">
            <div className="swiper-pagination-works flex justify-center items-center gap-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
