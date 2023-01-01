import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import PropTypes from "prop-types";
import PhonePeLogo from "./../public/images/logo.svg";

const Header = ({ scrolled, mobileNav, showSideBarHandler }) => {
  
  return (
    <header className={`sticky top-0 z-50 bg-white w-full min-w-max h-full`}>
      <div
        className={`flex items-center ${
          mobileNav
            ? "justify-between px-2 py-[3px]"
            : "justify-center space-x-16 py-[10px]"
        } w-full ${scrolled && "shadow-sm shadow-gray-500"}`}
      >
        <div className={`min-w-max pl-1 -translate-y-0.5 cursor-pointer`}>
          <Image
            src={PhonePeLogo}
            width={`${mobileNav ? "150" : "155"}`}
            // height={150}
            priority="true"
            unoptimized={true}
            alt="PhonePe"
            className={``}
          />
        </div>

        {mobileNav ? (
          <Bars3Icon
            width={40}
            height={40}
            className={`text-[#6739b7] cursor-pointer`}
            onClick={() => showSideBarHandler()}
          />
        ) : (
          [
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
          })
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  scrolled: PropTypes.bool,
  mobileNav: PropTypes.bool,
  showSideBarHandler: PropTypes.func,
};

export default Header;
