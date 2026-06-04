import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const isHome = pathname === '/' || pathname === '/home2';

  // Determine banner title and image
  let bannerTitle = 'Nova Jewellery';
  let bannerImage = '/images/chatt.png';

  if (pathname === '/about') {
    bannerTitle = 'About Us';
  } else if (pathname === '/contact') {
    bannerTitle = 'Contact Us';
    bannerImage = '/images/subbg.png';
  } else if (pathname === '/gallery') {
    bannerTitle = 'Our Gallery';
  } else if (pathname === '/faq') {
    bannerTitle = 'FAQ Support';
  } else if (pathname === '/collections') {
    bannerTitle = 'Our Collections';
  } else if (pathname === '/collections/diamond') {
    bannerTitle = 'Diamond Sets';
  } else if (pathname === '/product-detail') {
    bannerTitle = 'Product Details';
  } else if (pathname === '/404') {
    bannerTitle = 'Page Not Found';
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#FFFDF9] text-[#241616] overflow-x-hidden">
      <Header />
      {!isHome && <Banner title={bannerTitle} image={bannerImage} />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
