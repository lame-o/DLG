const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-law-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-law-primary mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-700">2603 Main Street, Suite 200</p>
                  <p className="text-gray-700">Irvine, CA 92614-4246</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> (949) 515-0003
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Direct:</span> (949) 379-6647
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Fax:</span> (949) 266-8680
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:adwight@dwightlawgroup.com" className="text-law-secondary hover:text-law-primary underline">
                      adwight@dwightlawgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9461338721454!2d-117.86183372424644!3d33.6858844732499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdec3b1fb9899%3A0x2f2c0066f64a81c!2s2603%20Main%20St%20%23200%2C%20Irvine%2C%20CA%2092614!5e0!3m2!1sen!2sus!4v1704790800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-law-primary mb-8">Contact Us</h2>
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
      </div>
    </div>
  );
};

export default Contact;