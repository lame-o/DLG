import { Copyright, Globe, Palette, Shield, Lock, MessageSquare, Scale, Briefcase } from 'lucide-react';
import { FaRegRegistered } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-law-primary mb-8 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Copyright className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Copyrights</h3>
            <p className="text-gray-600 text-sm">
              Protection for original works of authorship, including literary, dramatic, musical, and artistic works
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Globe className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Domain Names</h3>
            <p className="text-gray-600 text-sm">
              Registration, protection, and dispute resolution for internet domain names
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FaRegRegistered className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Trademarks</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive domestic and international trademark registration and protection services
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Palette className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Trade Dress</h3>
            <p className="text-gray-600 text-sm">
              Protection for the visual appearance and design elements of products and packaging
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Shield className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Unfair Competition</h3>
            <p className="text-gray-600 text-sm">
              Legal protection against deceptive business practices and unfair market behavior
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Lock className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Trade Secrets</h3>
            <p className="text-gray-600 text-sm">
              Protection of confidential business information and proprietary knowledge
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <MessageSquare className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">False Advertising</h3>
            <p className="text-gray-600 text-sm">
              Legal action against misleading advertising and deceptive marketing practices
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Scale className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Related Litigation</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive representation in intellectual property disputes and legal proceedings
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Briefcase className="w-10 h-10 text-law-gold mb-3" />
            <h3 className="text-2xl font-bold text-law-primary mb-3 tracking-wide border-b-2 border-law-gold pb-2">Business Litigation</h3>
            <p className="text-gray-600 text-sm">
              Expert representation in general business disputes and civil litigation matters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;