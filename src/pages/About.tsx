const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-8">About DLG</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="text-lg mb-6">
              <span className="text-xl font-bold text-law-primary">Amanda V. Dwight</span> is a graduate of the UCLA School of Law where she was the recipient of two fellowships. At UCLA, Ms. Dwight served as the Chief Articles Editor of the Pacific Basin Law Journal and judicial extern for the Honorable Gary L. Taylor, U.S. District Court of California, Central District. Ms. Dwight also created a program to intake asylum seekers for the Center for Human Rights and Constitutional Law.
            </p>
            <p className="text-lg mb-6">
              Ms. Dwight is co-author of two leading treatises on copyright and trademark prosecution law: Trademark Registration Practice (Thomson Reuters) and Copyright Registration Practice (Thomson Reuters). She is also co-author of the only practice guide in the U.S. concerning trademark examination procedures, the Practitioner's Trademark Manual of Examining Procedure (Thomson Reuters). Ms. Dwight has been a guest speaker and instructor at local and national organizations regarding intellectual property matters, including the national MAGIC Marketplace fashion tradeshow.
            </p>
            <p className="text-lg mb-6">
              Prior to attending law school, Ms. Dwight was a computer programmer and systems consultant for Andersen Consulting (now Accenture) and an in-house systems analyst for Gannet, Co. At Andersen, Ms. Dwight developed distribution control systems for Fortune 500 companies. At Gannet, Ms. Dwight installed and supported advertising systems for over fifty newspapers throughout the country.
            </p>
            <p className="text-lg mb-6">
              Ms. Dwight received her Bachelor of Science as an honors graduate from the University of Virginia, McIntire School of Commerce with a major in Management Information Systems and Marketing.
            </p>
          </div>
          <div className="bg-law-gray p-8 rounded-lg self-start">
            <h2 className="text-2xl font-bold text-law-primary mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-law-gold mr-2">✓</span>
                <span>Excellence in Legal Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-law-gold mr-2">✓</span>
                <span>Client-Focused Approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-law-gold mr-2">✓</span>
                <span>Innovative Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-law-gold mr-2">✓</span>
                <span>Ethical Practice</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;