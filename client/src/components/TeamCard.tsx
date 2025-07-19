import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, avatar }) => {
  return (
    <div className="team-card text-center">
      <img
        src={avatar}
        alt={`${name} headshot`}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{role}</p>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

export default TeamCard;
