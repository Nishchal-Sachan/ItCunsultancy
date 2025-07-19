import React, { useState } from 'react';
import TechCard from '../components/TechCard';
import technologiesData from '../data/technologies.json';

const Technologies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', 'frontend', 'backend', 'cloud', 'devops'];
  const categoryLabels = {
    all: 'All',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud',
    devops: 'DevOps'
  };

  const filteredTechnologies = activeFilter === 'all' 
    ? technologiesData 
    : technologiesData.filter(tech => tech.category === activeFilter);

  return (
    <div>
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Technologies We Use
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Cutting-edge tools and platforms to build robust, scalable solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-white dark:bg-slate-800 p-1 shadow">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`tech-filter-btn ${activeFilter === category ? 'active' : ''}`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {filteredTechnologies.map((tech) => (
              <TechCard
                key={tech.id}
                name={tech.name}
                category={tech.category}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
