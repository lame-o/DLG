const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-8">About DLG</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              With decades of combined experience in intellectual property law, Dwight Law Group has established itself as a leading force in trademark protection and IP litigation.
            </p>
            <p className="text-lg mb-6">
              Our commitment to excellence and deep understanding of both traditional and emerging markets allows us to provide unparalleled legal services to our clients.
            </p>
          </div>
          <div className="bg-law-gray p-8 rounded-lg">
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