
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Link } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us', 'Departments', 'Admissions', 'Academics', 'Placement',
    'Infrastructure', 'Hostel', 'Transport', 'Alumni', 'Contact'
  ];

  const departments = [
    'Computer Engineering', 'Civil Engineering', 'Mechanical Engineering',
    'Electrical Engineering', 'Electronics & Communication', 'Automobile Engineering',
    'Chemical Engineering', 'Petrochemical Engineering', 'Medical Lab Technology'
  ];

  const achievements = [
    'State Rank Holders', 'University Toppers', 'International Placements',
    'Industry Recognition', 'Research Publications', 'Innovation Awards'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* College Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/192376b7-a3a6-4a41-8428-e34e5a4290bc.png" 
                  alt="Konghu Velalar Polytechnic College Logo" 
                />
                </div>
                <div>
                  <h3 className="text-xl font-bold">KONGHU VELALAR</h3>
                  <p className="text-sm text-blue-200">POLYTECHNIC COLLEGE</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Excellence in Technical Education Since 2007. Approved by AICTE and 
                affiliated to DOTE Chennai, we have been nurturing technical talent 
                for over 18 years.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Konghu Velalar Polytechnic College</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@konghuvpc.edu.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@NothingDifferent" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Link className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <a 
                    href="#departments"
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Our Achievements</h4>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 space-y-4">
              <div className="bg-blue-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">18+</div>
                <div className="text-sm text-blue-200">Years of Excellence</div>
              </div>
              <div className="bg-green-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-sm text-green-200">Placement Rate</div>
              </div>
              <div className="bg-purple-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">5000+</div>
                <div className="text-sm text-purple-200">Alumni Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2024 Konghu Velalar Polytechnic College. All rights reserved.</span>
              <span>|</span>
              <span>Approved by AICTE | Affiliated to DOTE Chennai</span>
              <span>|</span>
              <span>TN/Dip 2007-2008/023/11686</span>
            </div>
            
            <div className="text-sm text-gray-400">
              <span>Powered by </span>
              <span className="text-blue-400 font-semibold">Jeevasurya Palanisamy</span>
              <span className="text-yellow-400"> @ 3rd Year Student</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
