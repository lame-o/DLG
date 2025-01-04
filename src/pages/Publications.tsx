const Publications = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-12">DLG Publications</h1>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-2">Latest Insights in Trademark Law</h3>
            <p className="text-gray-600 mb-4">
              A comprehensive analysis of recent developments in trademark law and their implications for businesses.
            </p>
            <a href="#" className="text-law-secondary hover:text-law-primary transition-colors">Read More →</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-2">International IP Protection Strategies</h3>
            <p className="text-gray-600 mb-4">
              Expert guidance on protecting intellectual property rights across international markets.
            </p>
            <a href="#" className="text-law-secondary hover:text-law-primary transition-colors">Read More →</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-law-primary mb-2">Digital Brand Protection</h3>
            <p className="text-gray-600 mb-4">
              Strategies for protecting your brand in the digital age and across social media platforms.
            </p>
            <a href="#" className="text-law-secondary hover:text-law-primary transition-colors">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;