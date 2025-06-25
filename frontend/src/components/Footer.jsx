import React from "react";

const Footer = () => {
  return (
    <footer className="bg-container-bg text-text-secondary mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-text-primary font-serif">
              Purejoy
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Your sanctuary for healing, growth, and inner peace.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h4 className="font-semibold text-text-primary font-serif">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h4 className="font-semibold text-text-primary font-serif">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>info@purejoy.com</li>
              <li>123 Healing Way, Sydney</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-semibold text-text-primary font-serif">
              Stay Connected
            </h4>
            <p className="mt-4 text-sm leading-relaxed">
              Receive updates, news, and special offers.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-l-md text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2.5 rounded-r-md hover:bg-primary-hover transition-colors duration-300"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Purejoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
