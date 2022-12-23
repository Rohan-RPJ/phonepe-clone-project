import Image from "next/image";
import PhonePeLogo from "./../public/images/logo.svg";

const Header = ({ scrolled }) => {
  return (
    <div
      className={`flex items-center justify-center space-x-16 py-[10px] w-full ${
        scrolled && "shadow-sm shadow-gray-500"
      }`}
    >
      <div className={`min-w-max pl-1 -translate-y-0.5 cursor-pointer`}>
        <Image
          src={PhonePeLogo}
          width={155}
          // height={150}
          priority="true"
          unoptimized={true}
          alt="PhonePe"
          className={``}
        />
      </div>

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
          <p
            key={index}
            className={`font-sans font-normal whitespace-nowrap text-black text-base cursor-pointer hover:text-gigas`}
          >
            {headerLinkName}
          </p>
        );
      })}
    </div>
  );
};

export default Header;
