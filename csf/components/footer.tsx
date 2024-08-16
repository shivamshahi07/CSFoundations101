import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="-mb-4 ">
        <div className="w-screen">
          <hr />
        </div>
        <div className="mb-8 mt-4 ml-8 mr-8 flex-col sm:flex-row flex space-y-4 sm:space-y-0   items-center sm:justify-between ">
          <div className="text-sm text-gray-500 tracking-wide sm:text-center dark:text-neutral-500">
            © 2024 Shivam Shahi.All rights reserved.
          </div>
          <div className="flex items-center  text-neutral-500 space-x-10">
            <Link
              href="https://github.com/shivamshahi07 "
              className="dark:hover:text-neutral-300 hover:text-neutral-700 "
            >
              Github
            </Link>
            <Link
              href="https://twitter.com/Shivamshahi77"
              className="dark:hover:text-neutral-300 hover:text-neutral-700"
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
