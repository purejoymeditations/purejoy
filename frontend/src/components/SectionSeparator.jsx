import React from "react";

const SectionSeparator = () => {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="flex-grow h-px bg-border-light"></div>
      <div className="mx-6">
        <div className="w-3 h-3 bg-logo-gold rounded-full"></div>
      </div>
      <div className="flex-grow h-px bg-border-light"></div>
    </div>
  );
};

export default SectionSeparator;
