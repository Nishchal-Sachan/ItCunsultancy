import React from "react";
import { Lightbulb, Cloud, Zap, Palette, Check } from "lucide-react";
import servicesData from "../data/services.json";

const Services: React.FC = () => {
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
    <div>
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Comprehensive IT solutions for the modern digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {servicesData.map((service, index) => {
              const Icon = icons[index % icons.length];
              const iconColor = iconColors[index % iconColors.length];
              const iconBgColor = iconBgColors[index % iconBgColors.length];

              return (
                <div key={service.id} className="service-detail-card">
                  <div className="flex items-center mb-6">
                    <div
                      className={`flex items-center justify-center w-16 h-16 ${iconBgColor} rounded-2xl mr-4`}
                    >
                      <Icon className={`w-8 h-8 ${iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-green-600 font-bold mb-2">
                    Pricing: {service.pricing}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-600 dark:text-slate-300"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
