import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "What is the purity of gold used in your collections?",
      a: "We exclusively use 22K (916) BIS Hallmarked gold for our traditional heritage collections and 18K gold for our diamond-studded masterpieces to ensure durability and brilliance."
    },
    {
      q: "Do your diamonds come with international certification?",
      a: "Yes, every diamond from Dhrish is accompanied by a laboratory certificate from GIA or IGI, verifying its cut, clarity, color, and carat weight for your absolute peace of mind."
    },
    {
      q: "Can I customize a design or create something bespoke?",
      a: "Our master artisans specialize in bespoke creations. You can work directly with our design team to forge a unique masterpiece that reflects your personal journey."
    },
    {
      q: "What is the Dhrish buy-back and exchange policy?",
      a: "We offer a transparent lifetime buy-back and exchange policy. You can upgrade your Dhrish jewelry at current market rates, ensuring your purchase remains a lasting asset."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-12 md:pb-16 lg:pb-20 bg-ivory font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          
          <div className="hidden lg:block lg:col-span-5 relative" data-aos="fade-right" data-aos-duration="800">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 h-[520px] xl:h-[620px] border border-gold/10">
              <img src="/images/sli.jpg" className="w-full h-full object-cover" alt="Legacy" />
            </div>
            <div className="absolute -bottom-10 -right-8 w-[65%] aspect-square rounded-[.5rem] overflow-hidden shadow-2xl z-20 border border-white bg-white">
              <img src="/images/new.png" className="w-full h-full p-3 object-contain" alt="Craftsmanship" />
            </div>
          </div>

          <div className="lg:col-span-7 w-full min-w-0 text-left animate-fade-in" data-aos="fade-left" data-aos-duration="800">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <span className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase block mb-3 sm:mb-4">
                Common questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-text leading-tight mb-5 sm:mb-6 break-words">
                Frequently Asked Questions
              </h2>
              <p class="text-text/70 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                Discover the details behind our craftsmanship, gold purity standards, and the bespoke experience at Dhrish Gold & Diamonds.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className={`faq-item border border-gold/20 bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'faq-open' : ''}`}
                  >
                    <button 
                      onClick={() => handleToggle(index)}
                      className="faq-toggle w-full flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 lg:px-8 text-left hover:bg-rose/20 transition-colors"
                    >
                      <span className="text-text font-bold text-sm sm:text-base lg:text-lg leading-relaxed pr-2">
                        {item.q}
                      </span>
                      <div 
                        className={`faq-icon w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-all duration-300 ${
                          isOpen ? 'bg-primary text-white rotate-45' : 'bg-ivory text-primary/70'
                        }`}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>
                    <div 
                      className="faq-content transition-all duration-300 ease-in-out"
                      style={{ 
                        maxHeight: isOpen ? '200px' : '0px',
                        visibility: isOpen ? 'visible' : 'hidden',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="px-5 sm:px-6 lg:px-8 pb-6 sm:pb-8 text-text/70 text-sm sm:text-base leading-relaxed border-t border-gold/5 pt-4 font-medium">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-dark text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl"></div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0 mx-auto sm:mx-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <p className="font-serif text-xl leading-tight">Need expert assistance?</p>
                <p className="text-ivory/50 text-xs mt-1 font-bold uppercase tracking-widest">Our advisors are available to help you.</p>
              </div>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-primary text-white rounded-2xl text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-xl"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
