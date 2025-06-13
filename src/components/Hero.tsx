import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Zap, Smartphone, Database } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-green-400/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-yellow-400/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Floating Elements Animation */}
          <div className="relative mb-12">
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="animate-float-1 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                <Code size={32} />
              </div>
              <div className="animate-float-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <Smartphone size={28} />
              </div>
              <div className="animate-float-3 text-pink-400 hover:text-pink-300 transition-colors duration-300">
                <Database size={24} />
              </div>
              <div className="animate-float-1 text-green-400 hover:text-green-300 transition-colors duration-300" style={{animationDelay: '1.5s'}}>
                <Zap size={26} />
              </div>
            </div>
            
            {/* Enhanced Terminal Animation */}
            <div className="bg-slate-800/60 backdrop-blur-md rounded-lg p-6 max-w-lg mx-auto border border-white/30 mb-8 hover:border-white/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <span className="text-gray-400 text-xs ml-2">terminal</span>
              </div>
              <div className="text-left text-sm font-mono space-y-1">
                <div className="text-green-400">fazil@portfolio:~$ <span className="animate-pulse">whoami</span></div>
                <div className="text-blue-400">Flutter Developer</div>
                <div className="text-green-400">fazil@portfolio:~$ <span className="animate-pulse">echo "Hello World!"</span></div>
                <div className="text-yellow-400">Hy i'm Fazil <span className="animate-pulse">|</span></div>
              </div>
            </div>
          </div>

          {/* Updated Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-blue-500 hover:to-purple-400 transition-all duration-1000">
              Hy i'm Fazil
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-delay">
            <span className="inline-block animate-wave mr-2">👨‍💻</span> 
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Flutter Developer
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2 hover:text-gray-300 transition-colors duration-500">
            A highly motivated and results-oriented Flutter Developer with 3 years of experience 
            in building and deploying cross-platform mobile applications
          </p>

          {/* Enhanced Contact Info with Animations */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-delay-3">
            <div className="group flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Phone size={16} className="group-hover:animate-bounce" />
              <span className="text-sm md:text-base">+91 8156801099</span>
            </div>
            <div className="group flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Mail size={16} className="group-hover:animate-bounce" />
              <span className="text-sm md:text-base">ptfazil02@gmail.com</span>
            </div>
            <div className="group flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
              <MapPin size={16} className="group-hover:animate-bounce" />
              <span className="text-sm md:text-base">Malppuram, Kerala</span>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in-delay-4">
            <a 
              href="https://github.com/faziilpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-500 hover:rotate-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150 animate-pulse"></div>
              <Github size={36} className="relative z-10" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                GitHub
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/fazil-pt-20bb22261/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-500 hover:-rotate-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150 animate-pulse"></div>
              <Linkedin size={36} className="relative z-10" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                LinkedIn
              </div>
            </a>
          </div>

          {/* Animated CTA Button */}
          <div className="animate-fade-in-delay-4">
            <button
              onClick={scrollToNext}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <ChevronDown size={20} className="group-hover:animate-bounce" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2 animate-pulse">Scroll Down</div>
        <button
          onClick={scrollToNext}
          className="text-white animate-bounce hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;