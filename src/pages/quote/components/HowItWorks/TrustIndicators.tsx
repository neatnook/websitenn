import React from 'react';
import { Star, Users, Shield, Clock } from 'lucide-react';

const indicators = [
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Star, value: '4.9/5', label: 'Customer Rating' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate' },
  { icon: Clock, value: '24/7', label: 'Support' }
];

export default function TrustIndicators() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {indicators.map(({ icon: Icon, value, label }) => (
          <div key={label} 
            className="text-center transform transition-all duration-300 hover:scale-105 group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
              bg-gradient-to-br from-orange-50 to-orange-100 mb-3 
              group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
              <Icon className="w-6 h-6 text-orange-600 transform transition-transform 
                duration-300 group-hover:scale-110" />
            </div>
            <div className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 
              transition-colors duration-300">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}