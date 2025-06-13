import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> by Mohammed Fazil PT
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Mohammed Fazil PT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;