import { Scale, Briefcase, FileCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-law-primary to-law-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
            Protecting Your Intellectual Property Rights
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto fade-in">
            Expert trademark attorneys helping businesses secure and defend their brands since 1995
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-law-gold text-law-primary font-semibold rounded-md hover:bg-law-lightGold transition-colors fade-in"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 px-4 bg-law-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-law-primary mb-12">Our Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Scale className="w-12 h-12 text-law-gold mb-4" />
              <h3 className="text-xl font-bold mb-4">Trademark Registration</h3>
              <p className="text-gray-600">
                Comprehensive trademark search and registration services to protect your brand identity
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-law-gold mb-4" />
              <h3 className="text-xl font-bold mb-4">Trademark Litigation</h3>
              <p className="text-gray-600">
                Aggressive representation in trademark disputes and infringement cases
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-law-gold mb-4" />
              <h3 className="text-xl font-bold mb-4">IP Portfolio Management</h3>
              <p className="text-gray-600">
                Strategic management and maintenance of your intellectual property assets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-law-primary mb-6">
                Experienced Trademark Attorneys
              </h2>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience, Dwight Law Group has been at the forefront of trademark law, helping businesses protect their intellectual property rights.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of dedicated attorneys combines deep legal knowledge with a practical business approach to deliver results-oriented solutions for our clients.
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 bg-law-primary text-white rounded-md hover:bg-law-secondary transition-colors"
              >
                Learn More About Us
              </a>
            </div>
            <div className="bg-law-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-law-primary mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-law-gold mr-2">✓</span>
                  <span>25+ Years of Specialized Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-law-gold mr-2">✓</span>
                  <span>Personalized Service for Every Client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-law-gold mr-2">✓</span>
                  <span>Proven Track Record of Success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-law-gold mr-2">✓</span>
                  <span>Competitive, Transparent Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-law-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-law-primary mb-12">Contact Us</h2>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-law-primary focus:border-law-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-law-primary focus:border-law-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-law-primary focus:border-law-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-law-primary text-white rounded-md hover:bg-law-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-law-primary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dwight Law Group</h3>
              <p className="text-gray-300">
                Protecting your intellectual property rights with expertise and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@dwightlawgroup.com</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Office</h3>
              <p className="text-gray-300">
                123 Legal Street<br />
                Suite 100<br />
                Los Angeles, CA 90001
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2024 Dwight Law Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;