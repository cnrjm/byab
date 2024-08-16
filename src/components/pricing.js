import React from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ title, price, features }) => (
    <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex-1 overflow-hidden border border-orange-500
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-orange-500/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-4xl font-bold text-white mb-6">${price}<span className="text-lg">/mo</span></p>
        <ul className="text-gray-300 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <Check className="text-orange-400 mr-2" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-lg
          relative overflow-hidden group">
          <span className="relative z-10">Choose Plan</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 
            opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-50"></div>
        </button>
      </div>
    </div>
  );

const Pricing = () => (
  <section className="min-h-screen bg-black flex items-center justify-center py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">PRICING</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <PricingTier
          title="Basic"
          price={9.99}
          features={['1 User', '10GB Storage', 'Basic Support']}
        />
        <PricingTier
          title="Pro"
          price={19.99}
          features={['5 Users', '50GB Storage', 'Priority Support', 'Advanced Features']}
        />
        <PricingTier
          title="Enterprise"
          price={49.99}
          features={['Unlimited Users', '500GB Storage', '24/7 Support', 'Custom Solutions']}
        />
      </div>
    </div>
  </section>
);

export default Pricing;