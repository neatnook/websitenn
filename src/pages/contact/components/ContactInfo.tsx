import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SocialLinks from '../../../components/layout/Footer/SocialLinks';
import { ContactInfoItem } from './ContactInfoItem';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <a href="tel:+441234567890" className="text-orange-600 hover:text-orange-700">
        01234 567890
      </a>
    )
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:info@neatnook.co.uk" className="text-orange-600 hover:text-orange-700">
        info@neatnook.co.uk
      </a>
    )
  },
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <p className="text-gray-600">
        123 Business Street<br />
        Cambridge, CB1 1AB<br />
        United Kingdom
      </p>
    )
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <div className="text-gray-600">
        <p>Monday - Friday: 8am - 6pm</p>
        <p>Saturday: 9am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    )
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <ContactInfoItem
            key={index}
            icon={detail.icon}
            title={detail.title}
            content={detail.content}
          />
        ))}

        <div>
          <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}