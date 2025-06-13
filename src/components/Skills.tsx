import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Provider (State management)", "Appstore Deployment"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Firebase", "Firestore", "Firebase Messaging", "Supabase"]
    },
    {
      title: "Programming & Tools",
      skills: ["Node.js", "Python", "BigQuery", "Unity"]
    },
    {
      title: "Additional",
      skills: ["Problem Solving", "Appwrite", "Team Leadership", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-purple-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-gray-300 rounded-full text-sm font-medium border border-white/20 hover:border-white/40 hover:text-white hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;