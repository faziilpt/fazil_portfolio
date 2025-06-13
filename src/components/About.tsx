import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Building cross-platform mobile applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Creating user-friendly and performant apps"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led and mentored development teams"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Firebase Expert",
      description: "Specialized in backend services and cloud functions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-500">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              A highly motivated and results-oriented Flutter Developer with 3 years of experience 
              in building and deploying cross-platform mobile applications. Proven ability to leverage 
              Firebase for backend services, including authentication, database management, and cloud functions. 
              Passionate about creating user-friendly and performant apps. Eager to contribute to innovative 
              projects and further expand mobile development expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;