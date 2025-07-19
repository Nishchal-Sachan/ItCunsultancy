import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatar,
  rating,
}) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'fill-current' : 'fill-none'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${name} headshot`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">{name}</div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
