import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-casal text-center py-5">
      <div className="container mx-auto px-4">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Football Finals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
