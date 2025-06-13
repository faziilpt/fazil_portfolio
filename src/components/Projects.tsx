import React from 'react';
import { ExternalLink, Users, Database, Cloud, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BOCHE MART",
      role: "Project Lead",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform", "BigQuery", "Node.js"],
      description: "A multi-module platform for seamless product purchases, ticket generation, wallet management, and reporting.",
      features: [
        "User App: E-commerce features, ticket generation, wallet transactions, order history, and store locator",
        "Store App: In-store purchases, stock reports, user wallet withdrawals, and bank transfers",
        "Admin Web: Role-based access, user and store management, product control, sales, revenue reports"
      ],
      achievements: [
        "Migrated 20 lakh users' data, 2.5 crore transactions and tickets, and wallet details",
        "Integrated BigQuery for efficient data querying and reporting",
        "Implemented secure wallet transactions and API-based ticket generation"
      ],
      icon: <Smartphone className="w-6 h-6" />,
      link: null // No link provided for Boche Mart
    },
    {
      title: "APPOLO DIGI GOLD",
      role: "Project Lead",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform"],
      description: "A gold investment platform with user, agent, and admin modules for digital gold investment.",
      features: [
        "User App: Monthly investment plans and gold claiming from offline stores",
        "Agent App: User registration, plan purchases, and referral system",
        "Admin Web: Comprehensive reports on users, agents, gold rates, subscriptions, and transactions"
      ],
      achievements: [
        "Built secure investment platform with multi-module architecture",
        "Implemented referral system for agent onboarding",
        "Created comprehensive reporting dashboard"
      ],
      icon: <Database className="w-6 h-6" />,
      link: "https://play.google.com/store/apps/details?id=com.spine.appolo_gold"
    },
    {
      title: "GULF CHANDRIKA",
      role: "Project Lead",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform"],
      description: "A comprehensive news application featuring e-paper reading, news videos, and shareable content.",
      features: [
        "E-paper reading functionality with smooth PDF rendering",
        "News videos and shareable news cards",
        "User registration and content management",
        "Admin panel for content management"
      ],
      achievements: [
        "Developed smooth PDF rendering system",
        "Implemented content sharing capabilities",
        "Built admin panel for news management"
      ],
      icon: <Cloud className="w-6 h-6" />,
      link: "https://play.google.com/store/apps/details?id=com.gulfchandrika.gulfchandrika&pcampaignid=web_share"
    },
    {
      title: "MAKARIM",
      role: "Project Lead",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform", "Node.js"],
      description: "A comprehensive hotel booking management application with three distinct user modules.",
      features: [
        "Super Admin: Manages all hotels, assigns hotel admins, views all booking records",
        "Hotel Admin: Manages operations, monitors staff activity, room availability",
        "Receptionist: Handles bookings, customer inquiries, room management"
      ],
      achievements: [
        "Built multi-level hotel management system",
        "Implemented real-time updates and monitoring",
        "Created intuitive interface for efficient operations"
      ],
      icon: <Users className="w-6 h-6" />,
      link: "https://apps.apple.com/in/app/makarim/id6743645508"
    },
    {
      title: "VEEKSHANAM",
      role: "Project Lead",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform", "Node.js", "Supabase"],
      description: "A mobile application for reading e-papers with advanced features for content interaction.",
      features: [
        "Smooth PDF rendering viewer for e-paper reading",
        "Snip and share specific segments of e-paper",
        "Download both clipped and full content",
        "Admin panel for uploading daily PDF editions"
      ],
      achievements: [
        "Developed advanced PDF interaction features",
        "Implemented content clipping and sharing system",
        "Built dual backend architecture with Firebase and Supabase"
      ],
      icon: <Database className="w-6 h-6" />,
      link: "https://play.google.com/store/apps/details?id=com.spine.veekshanam&hl=en_IN"
    },
    {
      title: "SAVE ABDUL RAHIM",
      role: "Developer",
      technologies: ["Flutter", "Firebase", "Google Cloud Platform", "Node.js"],
      description: "A comprehensive hotel booking management application with multi-level access control.",
      features: [
        "Multi-module hotel booking system",
        "Role-based access control",
        "Real-time booking management",
        "Comprehensive reporting system"
      ],
      achievements: [
        "Contributed to multi-module architecture",
        "Implemented booking management features",
        "Developed reporting capabilities"
      ],
      icon: <Smartphone className="w-6 h-6" />,
      link: "https://play.google.com/store/apps/details?id=com.spine.bloodmoney&hl=en_IN"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="text-orange-400">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-orange-400 group-hover:text-white transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-orange-400 font-medium">{project.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors duration-300 font-medium hover:scale-105 transform"
                  >
                    View on Store
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-gray-500 font-medium">
                    Internal Project
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;