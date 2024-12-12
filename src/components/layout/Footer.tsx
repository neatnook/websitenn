import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">NeatNook Ltd</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Professional cleaning services in Cambridge and surrounding areas.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Email: info@neatnook.co.uk<br />
              Phone: 01234 567890<br />
              Address: Cambridge, UK
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Monday - Friday: 8am - 6pm<br />
              Saturday: 9am - 4pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm sm:text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} NeatNook Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}