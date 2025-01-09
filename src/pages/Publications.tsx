const Publications = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-law-primary mb-12">DLG Publications</h1>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <a href="https://store.legal.thomsonreuters.com/law-products/Treatises/Copyright-Registration-Practice-2d-2024-2-ed/p/107065859" className="block">
              <h3 className="text-xl font-bold text-law-primary mb-2 underline hover:text-law-secondary transition-colors">Copyright Registration Practice, 2d</h3>
            </a>
            <p className="text-gray-700 mb-2">Amanda V. Dwight and James E. Hawes (Thomson West)</p>
            <p className="text-gray-600 mb-4">
              A comprehensive guide covering every aspect of the copyright registration process, from determining copyrightable material to completing application forms and handling registration issues. The book provides detailed coverage of each application form section and type.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <a href="https://store.legal.thomsonreuters.com/law-products/Treatises/Trademark-Registration-Practice-2d-2024-2-ed/p/107058728" className="block">
              <h3 className="text-xl font-bold text-law-primary mb-2 underline hover:text-law-secondary transition-colors">Trademark Registration Practice, 2d</h3>
            </a>
            <p className="text-gray-700 mb-2">Amanda V. Dwight and James E. Hawes (Thomson West)</p>
            <p className="text-gray-600 mb-4">
              A detailed guide through federal and state trademark registration processes. This resource assists attorneys in trademark selection, application preparation, prosecution, response to rejections, rights maintenance, and USPTO communications. It includes comprehensive coverage of federal court decisions, the Lanham Act, and TTAB decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <a href="https://store.legal.thomsonreuters.com/law-products/Treatises/Practitioners-Trademark-Manual-of-Examining-Procedure-2017-1-ed/p/104417539" className="block">
              <h3 className="text-xl font-bold text-law-primary mb-2 underline hover:text-law-secondary transition-colors">Practitioner's Trademark Manual of Examining Procedure, 2017-1 ed.</h3>
            </a>
            <p className="text-gray-700 mb-2">Amanda V. Dwight and James E. Hawes (Thomson West)</p>
            <p className="text-gray-600 mb-4">
              An interpretative guide to the USPTO manual on examining procedure from a practitioner's perspective. It provides thorough explanations of trademark registration processes and procedures, incorporating recent cases, statutory changes, and rule updates since the manual's latest revision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;