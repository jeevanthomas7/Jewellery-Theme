import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState('purity');
  const [openItem, setOpenItem] = useState('purity-0'); // Category-index key

  const categories = [
    { id: 'purity', label: 'Gold purity' },
    { id: 'diamonds', label: 'Diamond quality' },
    { id: 'custom', label: 'Custom design' },
    { id: 'delivery', label: 'Shipping & delivery' }
  ];

  const faqSections = {
    purity: {
      title: 'Gold purity',
      items: [
        {
          q: 'How is the purity of gold guaranteed?',
          a: 'Every single piece at Dhrish is 100% BIS Hallmarked. This standard ensures that your gold meets the highest 916 purity levels recognized globally.'
        },
        {
          q: 'Can I check the gold weight in-store?',
          a: 'Absolutely. We provide high-precision weighing and digital Karatmeters at our showroom so you can verify both weight and purity before your purchase.'
        }
      ]
    },
    diamonds: {
      title: 'Diamond quality',
      items: [
        {
          q: 'What diamond certifications do you provide?',
          a: 'We provide world-recognized grading certificates from IGI and GIA for our solitaires and jewelry sets, covering the essential 4Cs.'
        },
        {
          q: 'Do you use conflict-free diamonds?',
          a: 'Yes, we strictly follow ethical sourcing practices to ensure that every diamond in our collection is conflict-free and responsibly mined.'
        }
      ]
    },
    custom: {
      title: 'Custom design',
      items: [
        {
          q: 'Can I bring my own design for custom orders?',
          a: 'Yes, you can work with our master artisans to translate your sketches or references into a personalized masterpiece crafted just for you.'
        },
        {
          q: 'How long does custom jewelry take to finish?',
          a: 'The process typically takes between 15 to 25 business days, depending on the complexity of the hand-setting and the design details.'
        }
      ]
    },
    delivery: {
      title: 'Shipping & delivery',
      items: [
        {
          q: 'Is shipping insured for expensive items?',
          a: 'Every shipment from Dhrish is fully insured and handled by premium couriers to guarantee the safe transit of your jewelry to your doorstep.'
        },
        {
          q: 'Can I track my order in real-time?',
          a: 'Once your piece is ready for dispatch, you will receive a unique tracking ID to monitor its journey through our logistics partner\'s portal.'
        }
      ]
    }
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setOpenItem(`${catId}-0`);
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleItem = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-24 items-start w-full">
          
          <aside className="w-full space-y-8 order-2 lg:order-1 lg:sticky lg:top-28 text-left" data-aos="fade-right">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gold/30 shadow-sm">
              <span className="text-gold text-[10px] font-bold tracking-widest mb-8 block opacity-70 uppercase">Categories</span>
              <nav className="flex flex-col gap-3">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button 
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`flex items-center justify-between p-5 rounded-2xl text-[13px] font-bold tracking-wide transition-all outline-none text-left w-full ${
                        isActive 
                          ? 'bg-primary text-white shadow-xl shadow-primary/20 border-transparent' 
                          : 'text-text/60 border border-dark/10 hover:bg-rose/30'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <i className="fas fa-chevron-right text-[11px]"></i>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="bg-dark p-8 rounded-[2.5rem] relative overflow-hidden group hidden lg:block text-center border border-white/5">
              <div className="relative rounded-3xl overflow-hidden mb-8 aspect-square border-4 border-white/10">
                <img src="/images/collections/7.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Consultation" />
              </div>
              <h4 className="text-2xl text-ivory font-serif mb-6 leading-tight">Expert consultation</h4>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-primary transition-all text-[13px] font-bold w-full justify-center shadow-lg"
              >
                <span>Contact Us</span>
                <i className="fas fa-paper-plane text-[10px]"></i>
              </Link>
            </div>
          </aside>

          <div className="order-1 lg:order-2 w-full space-y-12 lg:space-y-15 text-left">
            {Object.keys(faqSections).map((secKey) => {
              const sec = faqSections[secKey];
              return (
                <div key={secKey} id={secKey} className="scroll-mt-32" data-aos="fade-up">
                  <h2 className="text-3xl md:text-5xl text-text font-serif mb-5 sm:mb-7 flex items-center gap-4">
                    {sec.title.split(' ')[0]} <span className="font-light text-primary">{sec.title.split(' ')[1] || ''}</span>
                  </h2>
                  <div className="space-y-4">
                    {sec.items.map((item, index) => {
                      const itemKey = `${secKey}-${index}`;
                      const isOpen = openItem === itemKey;
                      return (
                        <div 
                          key={index}
                          className={`faq-item border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                            isOpen 
                              ? 'bg-primary border-primary shadow-xl shadow-primary/10' 
                              : 'bg-white border-dark/10 hover:border-primary/30'
                          }`}
                        >
                          <button 
                            onClick={() => handleToggleItem(itemKey)}
                            className="faq-header w-full flex items-center justify-between p-8 text-left outline-none"
                          >
                            <span className={`text-lg md:text-xl font-serif tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-text'}`}>
                              {item.q}
                            </span>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-white/10 text-white' : 'bg-ivory text-primary'}`}>
                              <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                            </div>
                          </button>
                          <div 
                            className="transition-all duration-300 ease-in-out"
                            style={{ 
                              maxHeight: isOpen ? '200px' : '0px',
                              opacity: isOpen ? 1 : 0,
                              visibility: isOpen ? 'visible' : 'hidden'
                            }}
                          >
                            <div className="px-8 pb-8 -mt-2">
                              <p className={`font-medium text-base leading-relaxed border-t pt-6 transition-colors ${isOpen ? 'text-white/70 border-white/10' : 'text-text/70 border-dark/15'}`}>
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
