import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Ready to transform your business? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-slate-600 dark:text-slate-300">
                        helpdesk@clatterchatteredtech.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-slate-600 dark:text-slate-300">
                        +1 (917) 521-4004, +91 (885) 815-1144
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-slate-600 dark:text-slate-300">
                        14 Singh Villa, Gangapur Colony, Yashoda Nagar, Kanpur Nagar – 208011, Uttar Pradesh
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/clatterchatter-edtech-private-limited/posts/?feedView=all"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Response Time
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
