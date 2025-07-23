import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          {/* <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">
                Clatter Chatter Pvt. Ltd.
              </span>
              <p className="text-sm text-slate-400">Your Need Our Solution</p>
            </div>
            <p className="text-slate-300 mb-4">
              We are a leading IT consultancy firm specializing in modern tech
              solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/clatterchatter-edtech-private-limited/posts/?feedView=all"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a href="#" className="social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div> */}
          {/* Company Logo & Tagline */}
          <div className="flex flex-col items-start md:col-span-1">
            <img
              src="/logo2.png"
              alt="Clatter Chatter Pvt. Ltd. Logo"
              className="w-16 h-16 mb-3 rounded-lg shadow-lg bg-white object-contain"
            />
            <span className="text-xl font-bold text-blue-400 mb-1">
              Clatter Chatter Pvt. Ltd.
            </span>
            <p className="text-sm text-slate-400 mb-2">
              Your Need Our Solution
            </p>
            <p className="text-slate-300 mb-4">
              We are a leading IT consultancy firm specializing in modern tech
              solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="social-link hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/clatterchatter-edtech-private-limited/posts/?feedView=all"
                className="social-link hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="social-link hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-slate-300">Email:</span>{" "}
                <a
                  href="mailto:helpdesk@clatterchatteredtech.com"
                  className="text-blue-400 hover:underline"
                >
                  helpdesk@clatterchatteredtech.com
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-300">Phone (US):</span>{" "}
                <a
                  href="tel:+19175214004"
                  className="text-blue-400 hover:underline"
                >
                  +1 (917) 521-4004
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-300">Phone (IN):</span>{" "}
                <a
                  href="tel:+918858151144"
                  className="text-blue-400 hover:underline"
                >
                  +91 (885) 815-1144
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-300">Address:</span>{" "}
                <span className="text-slate-400">
                  14 Singh Villa, Gangapur Colony, Yashoda Nagar, Kanpur
                  Nagar-208011, Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  IT Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  MVP Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-red-400 mt-4">
          * No refund after consultancy and service.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Note: All consultancy advice is based on industry best practices.
          Clatter Chatter Pvt. Ltd. does not guarantee project outcomes,
          business success, or personal results. All service delivery timelines
          are estimates and may vary based on scope and client communication.
        </p>

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
