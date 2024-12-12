import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Clock, Shield, Star, 
  Calendar, Users, Sparkles, ArrowRight 
} from 'lucide-react';
import PostcodeSearch from '../../components/common/PostcodeSearch';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Vetted Cleaners',
    description: 'All our cleaners undergo thorough background checks and training'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Weekly, bi-weekly, or monthly cleaning to suit your needs'
  },
  {
    icon: Star,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll re-clean any areas you're not satisfied with"
  }
];

const howItWorks = [
  {
    title: 'Book Online',
    description: 'Select your preferred date and time through our easy booking system',
    icon: Calendar
  },
  {
    title: 'We Clean',
    description: 'Our professional team arrives with all necessary supplies and equipment',
    icon: Sparkles
  },
  {
    title: 'You Relax',
    description: 'Enjoy your spotless home, backed by our satisfaction guarantee',
    icon: Users
  }
];

const includedServices = [
  'Kitchen cleaning and sanitizing',
  'Bathroom cleaning and disinfecting',
  'Dusting all surfaces and fixtures',
  'Vacuuming carpets and rugs',
  'Mopping all hard floors',
  'Making beds (linens provided)',
  'Empty bins and replace bags',
  'Clean mirrors and glass surfaces',
  'Wipe door handles and light switches',
  'Clean window sills and tracks'
];

const faqs = [
  {
    question: 'How often should I schedule regular cleaning?',
    answer: 'The frequency depends on your needs. Most clients choose weekly or bi-weekly cleaning to maintain a consistently clean home. Monthly cleaning is also available for lighter maintenance.'
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, our professional cleaners bring all necessary cleaning supplies and equipment. We use eco-friendly products that are tough on dirt but gentle on surfaces.'
  },
  {
    question: 'How long does a regular cleaning take?',
    answer: 'A typical cleaning session takes 2-3 hours for a standard-sized home. The exact duration depends on the size of your home and its condition.'
  },
  {
    question: 'Can I trust your cleaners in my home?',
    answer: 'Absolutely. All our cleaners undergo thorough background checks, are fully insured, and have been trained to our high standards. Your security and peace of mind are our top priorities.'
  }
];

export default function HouseCleaning() {
  return (
    <div className="pt-24 bg-gradient-to-br from-gray-50 to-orange-50/30">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional House Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the comfort of a professionally cleaned home with our trusted regular cleaning service. 
            Let us take care of the cleaning while you focus on what matters most.
          </p>
          <div className="max-w-md mx-auto">
            <PostcodeSearch buttonText="Book Now" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NeatNook</h2>
            <p className="text-lg text-gray-600">Experience the difference of professional cleaning</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to your cleaner home</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">Our comprehensive cleaning checklist</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {includedServices.map((service) => (
              <div key={service} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our house cleaning service</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
                <p className="text-gray-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Cleaner Home?</h2>
          <p className="text-lg text-orange-100 mb-8">Book your professional cleaning service today</p>
          <div className="max-w-md mx-auto">
            <Link
              to="/quote"
              className="block w-full bg-white text-orange-600 py-3 px-6 rounded-lg 
                hover:bg-orange-50 transition-colors duration-200 font-medium text-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}