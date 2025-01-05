import { Scale, Briefcase, FileCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Marquee from 'react-fast-marquee';

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

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-600 mb-12">
            TRUSTED BY LEADING BRANDS
          </h2>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            <Marquee className="py-8" speed={20}>
              <div className="flex items-center gap-8 px-6">
                <img 
                  src="https://cdn.magicui.design/companies/Netflix.svg" 
                  alt="Netflix" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Instagram.svg" 
                  alt="Instagram" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Uber.svg" 
                  alt="Uber" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Spotify.svg" 
                  alt="Spotify" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Google.svg" 
                  alt="Google" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Microsoft.svg" 
                  alt="Microsoft" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Amazon.svg" 
                  alt="Amazon" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Netflix.svg" 
                  alt="Netflix" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Instagram.svg" 
                  alt="Instagram" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Uber.svg" 
                  alt="Uber" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Spotify.svg" 
                  alt="Spotify" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Google.svg" 
                  alt="Google" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Microsoft.svg" 
                  alt="Microsoft" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
                <img 
                  src="https://cdn.magicui.design/companies/Amazon.svg" 
                  alt="Amazon" 
                  loading="lazy"
                  width="160"
                  height="56"
                  decoding="async"
                  className="h-14 w-36 dark:brightness-0 dark:invert grayscale opacity-50 transition-opacity duration-300"
                  style={{ color: 'transparent' }}
                />
              </div>
            </Marquee>
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
            <p className="text-gray-300"> 2024 Dwight Law Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;