import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedSection(null);
  }, [location]);

  const toggleMobileSection = (section) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-gold' : 'text-text/90 hover:text-gold';
  };

  const isHomeActive = location.pathname === '/' || location.pathname === '/home2';

  return (
    <header id="main-header" className="absolute top-0 left-0 w-full z-[100] py-3 sm:py-5 transition-all duration-500 bg-white border-b border-dark/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        <div className="flex items-center">
          <Link to="/" className="group flex flex-col items-start">
            <h1 className="text-primary text-3xl sm:text-4xl leading-none font-serif tracking-widest uppercase transition-all duration-500 group-hover:text-gold">NOVA</h1>
            <div className="flex items-center gap-1 mt-1 ml-0 lg:ml-0">
              <span className="h-[1px] w-2 bg-gold/50"></span>
              <span className="text-gold text-[5px] sm:text-[7px] tracking-[0.2em] uppercase font-bold whitespace-nowrap">GOLD & DIAMONDS</span>
              <span className="h-[1px] w-2 bg-gold/50"></span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-12">
          {/* Home Dropdown */}
          <div className="relative group/drop py-2">
            <button className={`flex items-center gap-2 text-[14px] font-bold tracking-[0.2em] cursor-pointer focus:outline-none transition-all duration-300 ${
              isHomeActive ? 'text-gold' : 'text-text/90 hover:text-gold'
            }`}>
              Home
              <i className="fa-solid fa-chevron-down text-[8px] opacity-80 group-hover/drop:rotate-180 transition-transform duration-500"></i>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-4 group-hover/drop:opacity-100 group-hover/drop:visible group-hover/drop:translate-y-0 transition-all duration-500 z-[110]">
              <div className="w-42 bg-dark/90 border border-gold/30 shadow-2xl rounded-2xl overflow-hidden">
                <Link to="/" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all border-b border-gold/20">Home</Link>
                <Link to="/home2" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all">Home 2</Link>
              </div>
            </div>
          </div>

          <Link to="/about" className={`text-[14px] font-bold tracking-[0.2em] transition-all duration-300 ${getLinkClass('/about')}`}>
            About
          </Link>

          {/* Collections Dropdown */}
          <div className="relative group/drop py-2">
            <button className={`flex items-center gap-2 text-[14px] font-bold tracking-[0.2em] cursor-pointer focus:outline-none transition-all duration-300 ${
              location.pathname.startsWith('/collections') ? 'text-gold' : 'text-text/90 hover:text-gold'
            }`}>
              Collections
              <i className="fa-solid fa-chevron-down text-[8px] opacity-80 group-hover/drop:rotate-180 transition-transform duration-500"></i>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-4 group-hover/drop:opacity-100 group-hover/drop:visible group-hover/drop:translate-y-0 transition-all duration-500 z-[110]">
              <div className="w-42 bg-dark/90 border border-gold/30 shadow-2xl rounded-2xl overflow-hidden">
                <Link to="/collections" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all border-b border-gold/20">Collections</Link>
                <Link to="/collections/diamond" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all">Diamond Sets</Link>
              </div>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group/drop py-2">
            <button className={`flex items-center gap-2 text-[14px] font-bold tracking-[0.2em] cursor-pointer focus:outline-none transition-all duration-300 ${
              location.pathname === '/gallery' || location.pathname === '/faq' ? 'text-gold' : 'text-text/90 hover:text-gold'
            }`}>
              Pages
              <i className="fa-solid fa-chevron-down text-[8px] opacity-80 group-hover/drop:rotate-180 transition-transform duration-500"></i>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-4 group-hover/drop:opacity-100 group-hover/drop:visible group-hover/drop:translate-y-0 transition-all duration-500 z-[110]">
              <div className="w-42 bg-dark/70 border border-gold/30 shadow-2xl rounded-2xl overflow-hidden">
                <Link to="/gallery" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all border-b border-gold/20">Our Gallery</Link>
                <Link to="/faq" className="block px-8 py-4 text-[13px] font-bold tracking-widest text-white hover:bg-primary hover:text-white transition-all">FAQ Support</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className={`text-[14px] font-bold tracking-[0.2em] transition-all duration-300 ${getLinkClass('/contact')}`}>
            Contact
          </Link>
        </nav>

        <div className="flex justify-end items-center gap-4">
          <a href="https://wa.me/5245853645" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2.5 bg-primary text-white px-6 py-3 rounded-2xl text-[13px] font-bold tracking-widest hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/10">
            <i className="fab fa-whatsapp text-lg"></i> WhatsApp Us
          </a>
          <button 
            onClick={() => {
              setIsMenuOpen(true);
              document.body.style.overflow = 'hidden';
            }} 
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-text/90"></span>
            <span className="w-6 h-[2px] bg-text/90"></span>
            <span className="w-6 h-[2px] bg-text/90"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white flex flex-col py-0 px-4 sm:px-10 overflow-y-auto z-[999] transition-all duration-700 lg:hidden ${
        isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-12 border-b border-black/10 p-2">
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl tracking-widest uppercase text-primary leading-none">NOVA</h2>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-[1px] w-2 bg-gold/50"></span>
              <span className="text-gold text-[6px] tracking-[0.2em] uppercase font-bold">Gold & Diamonds</span>
              <span className="h-[1px] w-2 bg-gold/50"></span>
            </div>
          </div>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }} 
            className="text-5xl font-light text-text p-2 cursor-pointer"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-8 text-left">
          {/* Mobile Home */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleMobileSection('home')} 
              className="font-serif text-2xl text-text flex justify-between items-center w-full focus:outline-none cursor-pointer"
            >
              Home 
              <i className={`fa-solid ${expandedSection === 'home' ? 'fa-minus' : 'fa-plus'} text-[18px] transition-transform duration-500`}></i>
            </button>
            <div className={`transition-all duration-700 flex flex-col gap-5 pl-6 border-l-2 border-gold/10 mt-4 overflow-hidden ${
              expandedSection === 'home' ? 'max-h-[500px]' : 'max-h-0'
            }`}>
              <Link to="/" className="text-[13px] font-bold tracking-widest text-text/60">Home</Link>
              <Link to="/home2" className="text-[13px] font-bold tracking-widest text-text/60">Home 2</Link>
            </div>
          </div>

          <Link to="/about" className="font-serif text-2xl text-text hover:text-gold transition-colors duration-500">
            About Us
          </Link>
          
          {/* Mobile Collections */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleMobileSection('collections')} 
              className="font-serif text-2xl text-text flex justify-between items-center w-full focus:outline-none cursor-pointer"
            >
              Collections 
              <i className={`fa-solid ${expandedSection === 'collections' ? 'fa-minus' : 'fa-plus'} text-[18px] transition-transform duration-500`}></i>
            </button>
            <div className={`transition-all duration-700 flex flex-col gap-5 pl-6 border-l-2 border-gold/10 mt-4 overflow-hidden ${
              expandedSection === 'collections' ? 'max-h-[500px]' : 'max-h-0'
            }`}>
              <Link to="/collections" className="text-[13px] font-bold tracking-widest text-text/80">Collections</Link>
              <Link to="/collections/diamond" className="text-[13px] font-bold tracking-widest text-text/80">Diamond Sets</Link>
            </div>
          </div>

          {/* Mobile Pages */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleMobileSection('pages')} 
              className="font-serif text-2xl text-text flex justify-between items-center w-full focus:outline-none cursor-pointer"
            >
              Pages 
              <i className={`fa-solid ${expandedSection === 'pages' ? 'fa-minus' : 'fa-plus'} text-[18px] transition-transform duration-500`}></i>
            </button>
            <div className={`transition-all duration-700 flex flex-col gap-5 pl-6 border-l-2 border-gold/10 mt-4 overflow-hidden ${
              expandedSection === 'pages' ? 'max-h-[500px]' : 'max-h-0'
            }`}>
              <Link to="/gallery" className="text-[13px] font-bold tracking-widest text-text/80">Gallery</Link>
              <Link to="/faq" className="text-[13px] font-bold tracking-widest text-text/80">FAQ Support</Link>
            </div>
          </div>

          <Link to="/contact" className="font-serif text-2xl text-text hover:text-gold transition-colors duration-500">
            Contact Us
          </Link>
        </nav>

        <div className="mt-auto flex flex-col items-center gap-10 pt-10 pb-6">
          <a href="https://wa.me/2583468525" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#25D366] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-2xl shadow-green-500/20">
            Connect via WhatsApp
          </a>
          <div className="flex gap-10 text-text/30">
            <a href="#"><i className="fab fa-instagram text-2xl hover:text-gold transition-all"></i></a>
            <a href="#"><i className="fab fa-facebook-f text-2xl hover:text-gold transition-all"></i></a>
            <a href="#"><i className="fab fa-youtube text-2xl hover:text-gold transition-all"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
}
