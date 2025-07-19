import React from 'react';

interface TechCardProps {
  name: string;
  category: string;
  icon: string;
  color: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, icon, color }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <div className={`text-4xl font-bold ${color}`}>{icon}</div>
      </div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white text-center">{name}</h3>
    </div>
  );
};

export default TechCard;
