import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  iconColor: string;
  iconBgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  iconColor,
  iconBgColor,
}) => {
  return (
    <div className="service-card group">
      <div className={`flex items-center justify-center w-12 h-12 ${iconBgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
