const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">Trademark Registration</h3>
            <p className="text-gray-600">
              Comprehensive trademark search and registration services to protect your brand identity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">IP Portfolio Management</h3>
            <p className="text-gray-600">
              Strategic management and maintenance of your intellectual property assets.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">Trademark Litigation</h3>
            <p className="text-gray-600">
              Aggressive representation in trademark disputes and infringement cases.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">IP Strategy</h3>
            <p className="text-gray-600">
              Development of comprehensive IP strategies aligned with business objectives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">International Protection</h3>
            <p className="text-gray-600">
              Global trademark protection and international filing strategies.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-4">IP Consulting</h3>
            <p className="text-gray-600">
              Expert consultation on intellectual property matters and brand protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;