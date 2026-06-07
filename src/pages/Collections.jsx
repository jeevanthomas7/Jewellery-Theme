import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../components/sections/Testimonial';

export default function Collections() {
  const categories = [
    { id: 'diamond', title: 'Diamonds' },
    { id: 'earrings', title: 'Earrings' },
    { id: 'necklaces', title: 'Necklaces' },
    { id: 'rings', title: 'Rings' },
    { id: 'bracelets', title: 'Bracelets' }
  ];

  // Let's build a solid dataset based on the original PHP calculations and commented structures
  const initialProducts = [
    // Diamonds
    { name: 'Eternal Solitaire Ring', price: 145000, img: 'works/1.webp', type: 'women', catId: 'diamond' },
    { name: 'Royal Diamond Choker', price: 485000, img: 'works/2.webp', type: 'bridal', catId: 'diamond' },
    { name: 'Celestial Diamond Studs', price: 55000, img: 'works/3.webp', type: 'women', catId: 'diamond' },
    { name: 'Infinity Eternity Band', price: 82500, img: 'works/4.webp', type: 'women', catId: 'diamond' },
    
    // Earrings
    { name: 'Antique Gold Jhumkas', price: 65000, img: 'collections/1.webp', type: 'bridal', catId: 'earrings' },
    { name: 'Designer Hoop Earrings', price: 28000, img: 'collections/2.webp', type: 'women', catId: 'earrings' },
    { name: 'Pearl Drop Earring', price: 15500, img: 'collections/3.webp', type: 'women', catId: 'earrings' },
    { name: 'Traditional Gold Studs', price: 12000, img: 'collections/4.webp', type: 'women', catId: 'earrings' },
    
    // Necklaces
    { name: 'Temple Gold Harams', price: 210000, img: 'collections/5.jpg', type: 'bridal', catId: 'necklaces' },
    { name: 'Simple Daily Chain', price: 42000, img: 'collections/6.jpg', type: 'women', catId: 'necklaces' },
    { name: 'Statement Ruby Choker', price: 185000, img: 'collections/7.jpg', type: 'bridal', catId: 'necklaces' },
    { name: 'Men\'s Gold Chain', price: 155000, img: 'collections/8.jpg', type: 'women', catId: 'necklaces' },

    // Rings
    { name: 'Dhrish Signature Rings 1', price: 35000, img: 'works/1.webp', type: 'rings', catId: 'rings' },
    { name: 'Dhrish Signature Rings 2', price: 40000, img: 'works/2.webp', type: 'women', catId: 'rings' },
    { name: 'Dhrish Signature Rings 3', price: 45000, img: 'works/3.webp', type: 'bridal', catId: 'rings' },
    { name: 'Dhrish Signature Rings 4', price: 50000, img: 'works/4.webp', type: 'rings', catId: 'rings' },

    // Bracelets
    { name: 'Dhrish Signature Bracelets 1', price: 35000, img: 'works/1.webp', type: 'women', catId: 'bracelets' },
    { name: 'Dhrish Signature Bracelets 2', price: 40000, img: 'works/2.webp', type: 'rings', catId: 'bracelets' },
    { name: 'Dhrish Signature Bracelets 3', price: 45000, img: 'works/3.webp', type: 'bridal', catId: 'bracelets' },
    { name: 'Dhrish Signature Bracelets 4', price: 50000, img: 'works/4.webp', type: 'women', catId: 'bracelets' }
  ];

  const [typeFilter, setTypeFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('relevance');
  const [activeTab, setActiveTab] = useState('');

  // Filtering and sorting logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by type
    if (typeFilter !== 'all') {
      result = result.filter(p => p.type === typeFilter);
    }

    // Sort by price
    if (sortOrder === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [typeFilter, sortOrder]);

  return (
    <>
      <div id="filter-bar" className="lg:sticky top-0 z-[100] lg:p-2 bg-white border-b-2 border-primary/20 shadow-xl transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">
            
            <nav className="order-1 lg:order-2 lg:w-2/4">
              <ul className="flex items-center lg:justify-center gap-6 md:gap-10 overflow-x-auto no-scrollbar whitespace-nowrap px-2" id="cat-nav">
                {categories.map((nav) => (
                  <li key={nav.id}>
                    <a 
                      href={`#${nav.id}`} 
                      onClick={() => setActiveTab(nav.id)}
                      className={`cat-link text-[11px] font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${
                        activeTab === nav.id 
                          ? 'text-primary border-primary' 
                          : 'text-text/60 hover:text-primary border-transparent'
                      }`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="order-2 flex items-center justify-between lg:justify-start gap-3 w-full lg:w-1/4 lg:order-1 pt-2 lg:pt-0">
              <div className="relative w-[48%] lg:w-[160px]">
                <select 
                  id="typeFilter" 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full appearance-none bg-ivory border border-dark/20 rounded-2xl px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text/60 focus:border-primary outline-none cursor-pointer pr-10"
                >
                  <option value="all">All Styles</option>
                  <option value="women">Women</option>
                  <option value="rings">Rings</option>
                  <option value="bridal">Bridal</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
                  <i className="fa-solid fa-chevron-down text-[8px]"></i>
                </div>
              </div>

              <div className="lg:hidden relative w-[48%]">
                <select 
                  id="mobSortFilter" 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full appearance-none bg-ivory border border-dark/20 rounded-2xl px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text/60 focus:border-primary outline-none cursor-pointer pr-10"
                >
                  <option value="relevance">Sort By</option>
                  <option value="low">Price: Low</option>
                  <option value="high">Price: High</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
                  <i className="fa-solid fa-sliders text-[9px]"></i>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex order-3 lg:w-1/4 justify-end">
              <div className="relative w-[180px]">
                <select 
                  id="sortFilter" 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full appearance-none bg-ivory border border-dark/10 rounded-2xl px-10 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text/60 focus:border-primary outline-none cursor-pointer pr-10"
                >
                  <option value="relevance">Sort By: Relevance</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-primary">
                  <i className="fa-solid fa-sliders text-[10px]"></i>
                </div>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold">
                  <i className="fa-solid fa-chevron-down text-[8px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {categories.map((cat) => {
        const catProducts = filteredAndSortedProducts.filter(p => p.catId === cat.id);
        if (catProducts.length === 0) return null;

        return (
          <section 
            key={cat.id} 
            id={cat.id} 
            className="cat-section bg-ivory py-4 md:py-16 lg:py-8 border-b border-gold/5 scroll-mt-24 lg:scroll-mt-32"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between pt-6 lg:pt-10 gap-6 mb-5 lg:mb-7">
                <h2 className="font-serif text-3xl md:text-5xl text-text tracking-tight leading-tight text-left">
                  {cat.title}
                </h2>
                <div className="hidden lg:block">
                  <Link 
                    to={`/collections/${cat.id}`} 
                    className="group bg-primary text-white border-none uppercase rounded-2xl px-10 py-4 text-[11px] font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:bg-dark shrink-0 shadow-lg shadow-primary/10 flex items-center gap-3"
                  >
                    <span>View All</span>
                    <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-2"></i>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10 items-container">
                {catProducts.map((product, idx) => (
                  <div 
                    key={idx} 
                    className="product-card group flex flex-col h-full border border-dark/20 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 transition-all duration-500 bg-white hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 text-left"
                  >
                    <Link 
                      to={`/product-detail?name=${encodeURIComponent(product.name)}&price=${product.price}&img=${encodeURIComponent(product.img)}`}
                      className="h-44 sm:h-64 lg:h-72 w-full mb-6 overflow-hidden rounded-2xl bg-ivory/30 flex items-center justify-center relative shrink-0 shadow-inner"
                    >
                      <img 
                        src={`/images/${product.img}`} 
                        className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-1000 border border-gold/50 rounded-2xl bg-white" 
                        alt={product.name}
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                        <i className="fa-regular fa-heart text-gold text-sm"></i>
                      </div>
                    </Link>
                    <div className="flex flex-col flex-grow">
                      <div className="flex flex-col justify-between items-start gap-2 mb-4">
                        <h3 className="font-serif text-lg md:text-xl text-text leading-tight capitalize min-h-[3.5rem]">
                          {product.name}
                        </h3>
                        <span className="font-bold text-lg text-dark/90">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="mt-auto flex items-center gap-2 pt-4 border-t border-primary/20">
                        <span className="w-4 h-[1.5px] bg-gold/40"></span>
                        <span className="text-[10px] font-bold tracking-widest text-text/40 uppercase">Certified 916</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex lg:hidden justify-center mt-12">
                <Link 
                  to={`/collections/${cat.id}`} 
                  className="group bg-primary text-white border-none uppercase rounded-2xl px-10 py-4 text-[11px] font-bold tracking-widest transition-all duration-300 shadow-lg flex items-center gap-3"
                >
                  <span>View All Works</span>
                  <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <Testimonial />
    </>
  );
}
