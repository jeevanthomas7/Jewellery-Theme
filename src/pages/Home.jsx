import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import Works from '../components/sections/Works';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Dec from '../components/sections/Dec';
import Video from '../components/sections/Video';
import CollectionsSection from '../components/sections/CollectionsSection';
import Dec2 from '../components/sections/Dec2';
import Instagram from '../components/sections/Instagram';
import Testimonial from '../components/sections/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Works />
      <WhyChooseUs />
      <Dec />
      <Video />
      <CollectionsSection />
      <Dec2 />
      <Instagram />
      <Testimonial />
    </>
  );
}
