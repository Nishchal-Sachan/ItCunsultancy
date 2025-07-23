import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Cloud, Zap, Palette } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import servicesData from "../data/services.json";
import testimonialsData from "../data/testimonials.json";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl animate-slide-up">
                Grow your career and IT profile{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Modern Tech Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 animate-slide-up">
                We're a cutting-edge IT consulting startup that empowers
                businesses through innovative cloud architecture, MVP
                development, and digital transformation strategies.
              </p>
              <div className="mt-10 flex items-center gap-x-6 animate-slide-up">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 animate-slide-up">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  Trusted by innovative companies
                </p>
                <div className="flex items-center space-x-8 grayscale opacity-60">
                  <div className="text-2xl font-bold text-slate-400">
                    Startup A
                  </div>
                  <div className="text-2xl font-bold text-slate-400">
                    Tech Co
                  </div>
                  <div className="text-2xl font-bold text-slate-400">
                    Innovation Inc
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <div className="relative animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern tech workspace with laptops and code"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />

                {/* Floating cards for visual appeal */}
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg animate-scale-in">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">Cloud Ready</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-xl p-4 shadow-lg animate-scale-in">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm opacity-90">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg leading-6 text-slate-600 dark:text-slate-300">
              Comprehensive IT solutions tailored for modern businesses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.slice(0, 4).map((service, index) => {
              const icons = [Lightbulb, Cloud, Zap, Palette];
              const iconColors = [
                "text-blue-600 dark:text-blue-400",
                "text-emerald-600 dark:text-emerald-400",
                "text-purple-600 dark:text-purple-400",
                "text-orange-600 dark:text-orange-400",
              ];
              const iconBgColors = [
                "bg-blue-100 dark:bg-blue-900",
                "bg-emerald-100 dark:bg-emerald-900",
                "bg-purple-100 dark:bg-purple-900",
                "bg-orange-100 dark:bg-orange-900",
              ];

              return (
                <ServiceCard
                  key={service.id}
                  icon={icons[index]}
                  title={service.title}
                  pricing={service.pricing}
                  description={service.description}
                  iconColor={iconColors[index]}
                  iconBgColor={iconBgColors[index]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join innovative companies that trust TechFlow for their digital
                transformation journey. Get expert insights and exclusive
                updates.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <form className="sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-3 rounded-lg text-slate-900 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
