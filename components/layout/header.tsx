import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto flex flex-row py-8">
      <div className="basis-2/3">
        <Link href="/">
          <h1 className="relative inline-block font-sans text-2xl after:absolute after:right-0 after:bottom-[-20px] after:left-0 after:mx-auto after:h-[18px] after:w-[80%] after:rounded-[50%]  after:border-t-2 after:border-gray-700 after:content-['']">
            Joe Ng&apos;ethe
          </h1>
        </Link>
      </div>
      <div className="basis-1/3 text-right">Dark Mode</div>
    </header>
  );
};

export default Header;
