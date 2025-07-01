// src/components/Header.tsx (or your path to the Header component)

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overscrollBehaviorY = 'contain';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overscrollBehaviorY = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);
  
  // --- MODIFICATION HERE ---
  // Changed the 'About' link to point to the new '/about' page.
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }, // CHANGED
    { name: 'Departments', href: '#departments' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Clubs & Cells', href: '/clubs-cells' },
    { name: 'Academics', href: '/academics' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Placement Cell', href: '#placement-cell' },
    { name: 'Hostel & Transport', href: '/hostel-transport' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/')) {
      navigate(href);
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0); 
    } else if (href.startsWith('#')) {
      
      const scrollToAction = () => {
        const element = document.querySelector<HTMLElement>(href);
        if (element) {
          const headerHeight = headerRef.current?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight - 20;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
        }
      };
      
      if (document.querySelector(href)) {
        setTimeout(scrollToAction, 100);
      } else {
        navigate('/');
        setTimeout(scrollToAction, 200);
      }
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 9876543210</span>
            </a>
            <a href="mailto:info@konghuvpc.edu.in" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">info@konghuvpc.edu.in</span>
            </a>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Erode, Tamil Nadu</span>
            </div>
          </div>
          <button onClick={() => navigate('/admission')} className="px-4 py-1.5 bg-yellow-500 text-blue-900 rounded-full text-xs font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 animate-pulse">
            Admissions Open
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header ref={headerRef} className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-md' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('/')}>
              <img 
                src="/lovable-uploads/KVPC Logo.png" 
                alt="Konghu Velalar Polytechnic College Logo" 
                className="w-14 h-14 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h1 className="text-lg md:text-xl font-extrabold text-blue-900 leading-tight">
                  KONGHU VELALAR
                </h1>
                <p className="text-sm font-semibold text-gray-700 leading-tight">POLYTECHNIC COLLEGE</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-gray-800" />
              ) : (
                <Menu className="h-7 w-7 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b">
                    <h2 className="text-xl font-bold text-blue-900">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 -m-2">
                      <X className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
                <nav className="flex-grow p-5 space-y-2 overflow-y-auto">
                    {navItems.map((item, index) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className="block w-full text-left px-4 py-3 text-lg text-gray-700 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                            style={{ transitionDelay: `${index * 30}ms` }}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
                <div className="p-5 border-t space-y-4">
                  <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+91 9876543210</span>
                  </a>
                  <a href="mailto:info@konghuvpc.edu.in" className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>info@kvpc.edu.in</span>
                  </a>
                  <button onClick={() => handleNavClick('/admission')} className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all duration-300">
                    Apply for Admission
                  </button>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;