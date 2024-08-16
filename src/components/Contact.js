import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center mb-4 text-gray-300">
    <Icon className="text-orange-400 mr-3" size={20} />
    <span>{text}</span>
  </div>
);

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
    <Icon size={28} />
  </a>
);

const Contact = () => (
  <section className="min-h-screen bg-black flex items-center justify-center py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">CONTACT</h2>
      <div className="max-w-md mx-auto">
        <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden border border-orange-500
          before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-orange-500/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100"
        >
          <div className="relative z-10">
            <ContactInfo icon={Mail} text="contact@example.com" />
            <ContactInfo icon={Phone} text="+1 (123) 456-7890" />
            <ContactInfo icon={MapPin} text="123 Tech Street, Silicon Valley, CA 94000" />
            
            <div className="mt-8 mb-6">
              <div className="flex justify-center space-x-8">
                <SocialIcon icon={Instagram} href="https://instagram.com/example" />
                <SocialIcon icon={Youtube} href="https://youtube.com/example" />
                <SocialIcon icon={Twitter} href="https://twitter.com/example" />
              </div>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-lg
              relative overflow-hidden group">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-50"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;