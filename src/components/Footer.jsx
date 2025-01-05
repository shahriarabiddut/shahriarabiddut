import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-300">
        <footer className="py-4">
          <p className="text-center mb-0 text-gray-600">
            Copyright {new Date().getFullYear()} &copy; Shahriar Ahmed Biddut
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
