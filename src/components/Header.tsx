import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Clubs & Cells', href: '/clubs-cells' },
    { name: 'Academics', href: '/academics' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Placement Cell', href: '#placement-cell' },
    { name: 'Hostel & Transport', href: '/hostel-transport' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false); // Close menu on any navigation
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      // Use a slight timeout to allow the menu to close before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not on current page, navigate to home and then scroll
          navigate('/');
          setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }, 100);
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
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-md' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/lovable-uploads/192376b7-a3a6-4a41-8428-e34e5a4290bc.png" 
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

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
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
        {/* Backdrop Overlay */}
        <div 
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex flex-col h-full">
                <div className="p-5 border-b">
                    <h2 className="text-xl font-bold text-blue-900">Menu</h2>
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