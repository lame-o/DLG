import { Scale, Briefcase, FileCheck } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-law-primary to-law-secondary">
        <div className="w-full max-w-4xl mx-auto text-center py-12">
          <div className="mb-8">
            <img 
              src="/dlg_logo.gif"
              alt="DLG Logo"
              className="h-20 w-auto mx-auto fade-in"
            />
          </div>
          <blockquote className="fade-in">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-4">
              "What a rare privilege it is to be authorized to speak for someone else."
            </p>
            <footer className="text-white/80">
              <cite>
                <div className="font-medium text-lg">Warren Christopher</div>
                <div className="text-sm mt-1">Former Secretary of State</div>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Dwight Law Group was founded in 2002 and is an intellectual property law firm focused on trademark and copyright prosecution, maintenance and enforcement, unfair competition, infringement, trade secrets, and related litigation. We represent clients throughout the world in intellectual property law. Our clients include companies at various stages of growth from individuals and start-ups to large multimillion-dollar companies.
          </p>
          <p>
            The firm's practice includes client consultation, trademark and copyright clearance, preparation and procurement of trademarks, copyright applications, appeals, licensing, domain disputes, oppositions and cancellations and intellectual property and related business litigation. We also counsel clients on how to properly protect and police intellectual property rights, trade secret rights, avoiding infringement liability, and how to manage an intellectual property portfolio.
          </p>
          <p>
            What distinguishes us most from other law firms is our expertise in intellectual property law, superior customer service, results, and competitive rates. Our founder, Amanda Dwight, is the co-author of two widely used text books in the field of trademark law. These texts are used by trademark practitioners throughout the U.S. and the world.
          </p>
          <p>
            At Dwight Law Group, we believe it is an honor to speak on behalf of our clients. This is why building long-term relationships based on mutual trust and respect is our top priority. We are committed to providing superior, personalized legal services, efficiently and cost-effectively. For more information on how we can protect your most valuable assets, contact Dwight Law Group for a complimentary initial consultation at <a href="tel:949-515-0003" className="text-law-primary font-bold hover:text-law-secondary transition-colors">949-515-0003</a> or <a href="mailto:adwight@dwightlawgroup.com" className="text-law-primary font-bold hover:text-law-secondary transition-colors">adwight@dwightlawgroup.com</a>.
          </p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-600 mb-12">
            TRUSTED BY LEADING BRANDS
          </h2>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-200 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-200 to-transparent z-10"></div>
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
            <p className="text-xs text-gray-400 mb-4 max-w-3xl mx-auto">
              Disclaimer: the information contained in this website was prepared by Dwight Law Group and is for general informational purposes only. The material contained in this website may or may not reflect the most current legal developments and nothing in this website should be considered legal advice. No lawyer-client relationship is created as a result of transmission of the information on this website.
            </p>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Dwight Law Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;