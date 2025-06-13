import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Spine Codes Solutions",
      period: "Feb 2023 - Present",
      location: "Kerala, India",
      responsibilities: [
        "Developed and launched high-quality, user-friendly mobile applications using Flutter",
        "Led and mentored a team of developers, fostering collaboration and knowledge sharing",
        "Leveraged Firebase expertise to implement robust backend solutions, including authentication, database management, and cloud functions",
        "Researched and implemented new technologies to enhance app performance and features",
        "Built and optimized iOS applications for seamless performance and user experience",
        "Implemented and utilized data structures to efficiently manage and process application data"
      ]
    },
    {
      title: "Flutter Intern",
      company: "Nuerobots Private Limited",
      period: "Dec 2022 - Jan 2023",
      location: "Kerala, India",
      responsibilities: [
        "Gained hands-on experience in Flutter development",
        "Worked on mobile application projects under supervision",
        "Learned industry best practices and development workflows",
        "Contributed to team projects and collaborated with senior developers"
      ]
    }
  ];

  const education = {
    title: "Higher Secondary Education",
    institution: "GHSS Pang Higher Secondary School",
    period: "2018 - 2020",
    location: "Kerala, India"
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-green-400">Journey</span>
          </h2>
          
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-2">{exp.title}</h4>
                      <h5 className="text-xl text-blue-400 font-medium">{exp.company}</h5>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-gray-300 flex items-start gap-3">
                        <span className="text-blue-400 mt-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
              <Calendar className="text-green-400" />
              Education
            </h3>
            
            <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2">{education.title}</h4>
                  <h5 className="text-xl text-green-400 font-medium">{education.institution}</h5>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-gray-300 mb-1">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;