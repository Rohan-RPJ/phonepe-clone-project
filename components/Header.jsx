import React from "react";
import Image from "next/image";
import phonePeLogo from "./../public/images/logo.svg";

const Header = () => {
  return (
    <div className={`flex items-center px-32 py-[10px] w-full`}>
      <Image
        src={phonePeLogo}
        width={155}
        // height={150}
        priority="true"
        unoptimized={true}
        alt="PhonePe"
        className={`cursor-pointer`}
      />

      <div className={`flex items-center justify-between w-full px-20`}>
        {[
          "BUSINESS SOLUTIONS",
          "PRESS",
          "CAREERS",
          "ABOUT US",
          "BLOG",
          "CONTACT US",
          "TRUST & SAFETY",
        ].map((headerLinkName, index) => {
          return (
            <span
              key={index}
              className={`font-sans cursor-pointer hover:text-gigas`}
            >
              {headerLinkName}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
