import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleValidate = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!termsChecked) {
      setTermsError(true);
      isValid = false;
    } else {
      setTermsError(false);
    }

    if (isValid) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        setTermsChecked(false);
      }, 1500);
    }
  };

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-ivory pt-12 md:pt-16 lg:pt-20 pb-10 border-t border-gold/20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-0 pb-15 border-b border-ivory/10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:border-r border-ivory/10 px-0 lg:px-8 first:pl-0 last:border-0 group">
            <i className="fa-solid fa-gem text-gold text-2xl group-hover:scale-110 transition-transform"></i>
            <h4 className="font-serif text-2xl text-ivory tracking-tight">Unique Designs</h4>
            <p className="text-[14px] text-ivory leading-relaxed font-bold opacity-100 max-w-[250px]">Each Design Tells A Story, Blending Timeless With Modern Artistry.</p>
          </div>
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:border-r border-ivory/10 px-0 lg:px-8 group">
            <i className="fa-solid fa-percent text-gold text-2xl group-hover:scale-110 transition-transform"></i>
            <h4 className="font-serif text-2xl text-ivory tracking-tight">Discounts</h4>
            <p className="text-[14px] text-ivory leading-relaxed font-bold opacity-100 max-w-[250px]">Affordable For Everyone. Shop Your Favorites At Prices You'll Love!</p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:border-r border-ivory/10 px-0 lg:px-8 group">
            <i className="fa-solid fa-truck-fast text-gold text-2xl group-hover:scale-110 transition-transform"></i>
            <h4 className="font-serif text-2xl text-ivory tracking-tight">Fast Shipping</h4>
            <p className="text-[14px] text-ivory leading-relaxed font-bold opacity-100 max-w-[250px]">Earn Rewards As You Shop And Unlock Exclusive Benefits.</p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:border-r border-ivory/10 px-0 lg:px-8 group">
            <i className="fa-solid fa-gift text-gold text-2xl group-hover:scale-110 transition-transform"></i>
            <h4 className="font-serif text-2xl text-ivory tracking-tight">Reward Program</h4>
            <p className="text-[14px] text-ivory leading-relaxed font-bold opacity-100 max-w-[250px]">Earn Rewards As You Shop And Unlock Exclusive Benefits.</p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 px-0 lg:px-8 group">
            <i className="fa-solid fa-hand-holding-dollar text-gold text-2xl group-hover:scale-110 transition-transform"></i>
            <h4 className="font-serif text-2xl text-ivory tracking-tight">Great Prices</h4>
            <p className="text-[14px] text-ivory leading-relaxed font-bold opacity-100 max-w-[250px]">Save Big With Our Exclusive Special Discounts On Your Favorite Items.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-10 pt-10 lg:pt-15 lg:pb-15">
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-gold tracking-[0.4em] uppercase mb-4">Newsletter</span>
              <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-none">Join Today</h2>
            </div>

            <form onSubmit={handleValidate} className="w-full max-w-md space-y-6">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-[#1A1A1A]/40 border rounded-full py-5 px-8 text-ivory focus:border-gold outline-none transition-all duration-500 placeholder:text-ivory/30 font-bold pr-16 ${
                    emailError ? 'border-primary' : 'border-ivory/20'
                  }`}
                />
                
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-ivory text-dark w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold hover:text-ivory transition-all duration-500 shadow-lg group-hover:scale-105 active:scale-95 cursor-pointer">
                  {status === 'loading' ? (
                    <i className="fa-solid fa-circle-notch animate-spin"></i>
                  ) : status === 'success' ? (
                    <i className="fa-solid fa-check text-green-500"></i>
                  ) : (
                    <i className="fa-solid fa-paper-plane text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></i>
                  )}
                </button>
              </div>
              
              {emailError && (
                <div className="text-primary text-[11px] font-bold uppercase tracking-widest ml-4 mt-2">
                  Please enter a valid email address
                </div>
              )}

              <div className="space-y-3">
                <label className="flex items-center gap-4 cursor-pointer select-none group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                      className="peer appearance-none w-5 h-5 rounded border-2 border-ivory/30 bg-transparent checked:bg-gold checked:border-gold transition-all duration-300" 
                    />
                    <i className="fa-solid fa-check absolute text-[10px] text-dark opacity-0 peer-checked:opacity-100 left-1 pointer-events-none transition-opacity duration-300"></i>
                  </div>
                  <span className="text-[13px] text-ivory font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    I agree with the Terms & Conditions
                  </span>
                </label>
                {termsError && (
                  <div className="text-primary text-[11px] font-bold uppercase tracking-widest ml-9">
                    You must agree to continue
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
            <h4 className="text-xl font-serif text-ivory border-b border-gold/20 pb-1 inline-block">Useful Links</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-[15px] text-ivory font-bold hover:text-gold transition-all">Our Story</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Sustainability</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Engagement Rings</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Gift Registry</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Support Center</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
            <h4 className="text-xl font-serif text-ivory border-b border-gold/20 pb-1 inline-block">Resources</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-[15px] text-ivory font-bold hover:text-gold transition-all">Partners</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Investor Relations</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Events</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Sizing Guide</a></li>
              <li><a href="#" class="text-[15px] text-ivory font-bold hover:text-gold transition-all">Accessibility</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8 flex flex-col items-center text-center lg:items-end lg:text-right">
            <div className="flex flex-col lg:flex-row items-center gap-5">
        
              <h3 className="font-serif text-3xl md:text-4xl tracking-tighter uppercase text-ivory leading-tight">
                DHRISH GOLD & <br /> 
                <span className="text-gold text-xl tracking-[0.4em] block">DIAMONDS</span>
              </h3>
            </div>
            <p className="text-[15px] text-ivory leading-relaxed max-w-sm font-bold opacity-100">
              The perfect crafted BIS hallmarked 916 asset from the house of DHRISH.
            </p>
            <div className="flex gap-8 pt-4">
              <a href="#" className="text-ivory opacity-80 hover:text-gold hover:-translate-y-1 transition-all duration-300"><i className="fa-brands fa-instagram text-2xl"></i></a>
              <a href="#" className="text-ivory opacity-80 hover:text-gold hover:-translate-y-1 transition-all duration-300"><i className="fa-brands fa-facebook-f text-2xl"></i></a>
              <a href="#" className="text-ivory opacity-80 hover:text-gold hover:-translate-y-1 transition-all duration-300"><i className="fa-brands fa-whatsapp text-2xl"></i></a>
              <a href="#" className="text-ivory opacity-80 hover:text-gold hover:-translate-y-1 transition-all duration-300"><i className="fa-brands fa-youtube text-2xl"></i></a>
            </div>
          </div>
        </div>

        <div className="relative pt-10 border-t border-white/10">
          <a 
            href="#" 
            onClick={handleScrollTop}
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-dark border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-500 group shadow-2xl z-30 cursor-pointer"
          >
            <i className="fas fa-arrow-up text-gold group-hover:text-dark text-sm group-hover:-translate-y-1 transition-transform"></i>
          </a>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="text-[13px] text-ivory font-bold opacity-80 text-center">
              © {new Date().getFullYear()} Dhrish Gold & Diamonds All Rights Reserved
            </p>
            
            <div className="flex items-center gap-6 opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
              <i className="fa-brands fa-cc-visa text-3xl"></i>
              <i className="fa-brands fa-cc-mastercard text-3xl"></i>
              <i className="fa-brands fa-cc-apple-pay text-3xl"></i>
              <i className="fa-brands fa-cc-paypal text-3xl"></i>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-[14px] text-ivory font-bold hover:text-gold transition-all">Terms</a>
              <a href="#" className="text-[14px] text-ivory font-bold hover:text-gold transition-all">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
