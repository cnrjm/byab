import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center mb-6 text-gray-300 text-lg">
    <Icon className="text-orange-400 mr-4" size={24} />
    <span>{text}</span>
  </div>
);

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
    <Icon size={36} />
  </a>
);

const Contact = () => (
  <div className="container mx-auto px-4 w-full max-w-5xl">
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-12 rounded-lg shadow-lg overflow-hidden border border-orange-500
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-orange-500/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100"
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <ContactInfo icon={Mail} text="hello@byab.com" />
          <ContactInfo icon={Phone} text="07754 123 456" />
          <ContactInfo icon={MapPin} text="12 House Street, BT41 3DT" />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-12">
              <SocialIcon icon={Instagram} href="https://instagram.com/" />
              <SocialIcon icon={Youtube} href="https://youtube.com/" />
              <SocialIcon icon={Twitter} href="https://twitter.com/" />
            </div>
          </div>
          
          <button className="w-full max-w-md bg-orange-500 text-white py-4 px-8 rounded-lg shadow-lg text-xl font-semibold
            relative overflow-hidden group">
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 
              opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-50"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;