import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-2">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-400 mb-6">
        Get cleaning tips, exclusive offers, and updates delivered to your inbox
      </p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 transition-colors flex items-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}