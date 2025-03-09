'use client'
const Footer = () => {
  return (
    <footer className="mt-1 border-t bg-sky-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About CADET</h3>
            <p className="text-gray-300">
              CADET provides reliable weather, climate, and environmental monitoring to help you stay informed and prepared.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-sky-400">Weather</a></li>
              <li><a href="/" className="hover:text-sky-400">Climate Change</a></li>
              <li><a href="/" className="hover:text-sky-400">Data</a></li>
              <li><a href="/" className="hover:text-sky-400">Get in touch</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-sky-400 hover:text-sky-500">
                {/* Replace with an icon library like react-icons */}
                <span>Twitter</span>
              </a>
              <a href="https://facebook.com" className="text-sky-400 hover:text-sky-500">
                <span>Facebook</span>
              </a>
              <a href="https://linkedin.com" className="text-sky-400 hover:text-sky-500">
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="text-gray-300">Email: info@cadet.com</p>
              <p className="text-gray-300">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; 2024 CADET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
