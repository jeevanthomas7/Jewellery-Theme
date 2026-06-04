import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonial() {
  const testimonials = [
    {
      img: '/images/charaters/men.jpg',
      name: 'Rahul Sharma',
      role: 'Premium Client',
      text: 'The purity of gold and the brilliance of the diamonds at Nova is unmatched. I found my dream wedding set here with exceptional service.'
    },
    {
      img: '/images/charaters/t2.jpg',
      name: 'Anjali Menon',
      role: 'Gold Member',
      text: 'Exquisite designs that truly reflect modern elegance. The staff made the entire customisation process seamless and very professional.'
    },
    {
      img: '/images/charaters/t3.jpg',
      name: 'Vikram Nair',
      role: 'Investor',
      text: 'Best buy-back policies in the industry. Nova Gold and Diamonds is a brand I can trust for my future investments and family heritage.'
    },
    {
      img: '/images/charaters/t4.jpg',
      name: 'Priya Das',
      role: 'Elite Customer',
      text: 'Their heritage collections are a work of art. I have been a loyal customer for over 10 years now and the quality remains consistently superior.'
    },
    {
      img: '/images/charaters/men.jpg',
      name: 'Siddharth V.',
      role: 'Platinum Client',
      text: 'Elegant jewelry that complements every occasion perfectly. The diamond clarity is exactly as certified and the finish is just top-notch.'
    }
  ];

  return (
    <section className="relative bg-ivory pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none opacity-20 z-0">
        <div className="w-[1px] h-full bg-text/5"></div>
        <div className="w-[1px] h-full bg-text/5"></div>
        <div className="w-[1px] h-full bg-text/5 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/5 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/5"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 md:mb-12" data-aos="fade-right" data-aos-duration="800">
          <div className="max-w-2xl text-left">
            <span className="text-gold font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-text tracking-tight leading-tight">What our clients say</h2>
          </div>
          <div className="hidden md:block max-w-[300px] text-right">
            <p className="text-text/50 text-sm leading-relaxed font-medium">Discover why thousands of families trust Nova Gold & Diamonds for their most precious moments since 1998.</p>
          </div>
        </div>

        <div className="w-full" data-aos="fade-left" data-aos-duration="800">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.15}
            spaceBetween={20}
            centeredSlides={false}
            loop={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false
            }}
            pagination={{
              el: '.swiper-pagination-testimonial',
              clickable: true
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 }
            }}
            className="testimonialSwiper !overflow-visible w-full"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="bg-white border border-primary/30 p-8 md:p-10 rounded-[2.5rem] h-[480px] md:h-[520px] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group relative">
                  <div className="relative mb-8 shrink-0">
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-700"></div>
                    <img 
                      src={item.img} 
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-gold/20 p-1 group-hover:border-primary/40 transition-colors duration-500"
                      alt={item.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <i className="fa-solid fa-quote-right text-white text-[10px]"></i>
                    </div>
                  </div>
                  
                  <div className="flex gap-1.5 mb-6 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-gold text-[10px]"></i>
                    ))}
                  </div>

                  <div className="flex-grow flex flex-col justify-center text-center">
                    <p className="text-text/80 text-[15px] md:text-xl leading-relaxed line-clamp-5 px-2 font-medium">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-text/20 w-full shrink-0">
                    <h4 className="font-serif text-2xl text-text leading-none group-hover:text-primary transition-colors duration-500">
                      {item.name}
                    </h4>
                    <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mt-3 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center items-center mt-10 lg:mt-15">
            <div className="swiper-pagination-testimonial flex justify-center items-center gap-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
