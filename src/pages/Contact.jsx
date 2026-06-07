import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Submitted form data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="bg-ivory py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch gap-10 lg:gap-16">
            
            <div className="lg:col-span-5 flex flex-col justify-between text-left" data-aos="fade-right">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs block">Contact Us</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-text leading-none tracking-tighter">Get In Touch</h2>
                </div>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-rose flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-primary transition-all duration-500 shadow-sm">
                      <i className="fa-solid fa-location-dot text-primary group-hover:text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-text mb-2">Our Flagship Store</h4>
                      <p className="text-text/60 leading-relaxed font-bold">123 Diamond Street, Gold Avenue, Mumbai, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-rose flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-primary transition-all duration-500 shadow-sm">
                      <i className="fa-solid fa-phone text-primary group-hover:text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-text mb-2">Voice & Inquiries</h4>
                      <p className="text-text/60 leading-relaxed font-bold">+91 98765 43210</p>
                      <p className="text-text/60 leading-relaxed font-bold">+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-rose flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-primary transition-all duration-500 shadow-sm">
                      <i className="fa-solid fa-envelope text-primary group-hover:text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-text mb-2">Email Correspondence</h4>
                      <p className="text-text/60 leading-relaxed font-bold">care@dhrishjewellery.com</p>
                      <p className="text-text/60 leading-relaxed font-bold">sales@dhrishjewellery.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 lg:pt-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Official Socials</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="w-14 h-14 rounded-2xl border border-gold/20 flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm"><i className="fa-brands fa-instagram text-xl"></i></a>
                  <a href="#" className="w-14 h-14 rounded-2xl border border-gold/20 flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                  <a href="#" className="w-14 h-14 rounded-2xl border border-gold/20 flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm"><i className="fa-brands fa-twitter text-xl"></i></a>
                  <a href="#" className="w-14 h-14 rounded-2xl border border-gold/20 flex items-center justify-center text-text hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500 shadow-sm"><i className="fa-brands fa-whatsapp text-2xl"></i></a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl border border-dark/20 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose/40 rounded-full blur-[80px]"></div>
                
                <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
                  {submitted && (
                    <div className="md:col-span-2 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200 text-center font-bold">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-text/60 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name" 
                      required
                      className="w-full bg-ivory/50 border border-primary/20 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-text/30 font-bold text-text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-text/60 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email" 
                      required
                      className="w-full bg-ivory/50 border border-primary/20 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-text/30 font-bold text-text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-text/60 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91" 
                      className="w-full bg-ivory/50 border border-primary/20 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-text/30 font-bold text-text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-text/60 uppercase tracking-widest ml-1">Inquiry Subject</label>
                    <div className="relative group">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border text-text/60 border-primary/20 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all font-bold appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Subject</option>
                        <option value="Custom Jewelry Design">Custom Jewelry Design</option>
                        <option value="Bridal Consultation">Bridal Consultation</option>
                        <option value="Repair & Restoration">Repair & Restoration</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-gold text-xs pointer-events-none group-focus-within:rotate-180 transition-transform"></i>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[11px] font-bold text-text/60 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can our artisans assist you?" 
                      required
                      className="w-full bg-ivory/50 border border-primary/20 rounded-[2rem] py-5 px-8 focus:border-primary outline-none transition-all placeholder:text-text/30 font-bold text-text resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      className="group w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[12px] shadow-2xl shadow-primary/20 hover:bg-dark transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-4"
                    >
                      <span>Send Message</span>
                      <i className="fa-solid fa-paper-plane text-[10px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="h-[450px] md:h-[600px] w-full bg-rose relative overflow-hidden" data-aos="zoom-in">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full opacity-70 border-none" 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </>
  );
}
