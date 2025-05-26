import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Purejoy. All rights reserved.</p>
        <p className="text-sm mt-1">
          Made with <span className="text-red-500">&hearts;</span> for healing
          and peace.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
