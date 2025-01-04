const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
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
          <div>
            <div className="bg-law-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-law-primary mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong><br />
                  123 Legal Street<br />
                  Suite 100<br />
                  Los Angeles, CA 90001
                </p>
                <p>
                  <strong>Email:</strong><br />
                  info@dwightlawgroup.com
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  (555) 123-4567
                </p>
                <p>
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;