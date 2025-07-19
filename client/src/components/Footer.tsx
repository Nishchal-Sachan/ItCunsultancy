import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">TechFlow</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions and strategic consulting.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">IT Strategy</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">MVP Development</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/technologies" className="text-slate-300 hover:text-white transition-colors">Technologies</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faqs" className="text-slate-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 TechFlow Consulting. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 sm:mt-0">
              Built with ❤️ for modern businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
