import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/diamond" element={<Collections />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
