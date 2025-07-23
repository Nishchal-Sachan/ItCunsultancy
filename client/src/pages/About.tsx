import React from "react";
import TeamCard from "../components/TeamCard";
import teamData from "../data/team.json";

const About: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              About TechFlow
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We're a passionate team of technology experts committed to
              transforming businesses through innovative solutions and strategic
              thinking.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the leading catalyst for digital transformation,
                empowering businesses to thrive in an increasingly connected
                world through innovative technology solutions.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver exceptional IT consulting services that drive growth,
                efficiency, and innovation while building lasting partnerships
                with our clients.
              </p>
            </div>
          </div>

          {/* Team Section */}
          {/* <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Meet Our Founding Team</h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {teamData.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  avatar={member.avatar}
                />
              ))}
            </div>
          </div> */}

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    I
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Innovation
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We embrace cutting-edge technologies and creative solutions to
                  solve complex challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    T
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Trust
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We build lasting relationships through transparency,
                  reliability, and honest communication.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    E
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Excellence
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We strive for the highest quality in everything we do,
                  exceeding expectations consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
