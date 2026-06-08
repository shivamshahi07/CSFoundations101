import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-950">
      <div className="-mb-4 ">
        <div className="w-screen">
          <hr className="border-white/10" />
        </div>
        <div className="mb-8 mt-4 ml-8 mr-8 flex-col sm:flex-row flex space-y-4 sm:space-y-0 items-center sm:justify-between">
          <div className="text-sm text-slate-500 tracking-wide sm:text-center">
            © 2024 Shivam Shahi. All rights reserved.
          </div>
          <div className="flex items-center text-slate-500 space-x-10">
            <Link
              href="https://github.com/shivamshahi07"
              className="hover:text-slate-300 transition-colors"
            >
              Github
            </Link>
            <Link
              href="https://twitter.com/Shivamshahi77"
              className="hover:text-slate-300 transition-colors"
            >
              Twitter/X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
